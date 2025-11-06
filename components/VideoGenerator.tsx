import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenAI } from "@google/genai";
import { useLanguage } from '../LanguageContext';

// This is a simplified check. In a real app, you might need a more robust solution
// to handle the async nature of the API key selection dialog.
// FIX: Correctly declare global types for window.aistudio to avoid conflicts.
// The error message indicated 'aistudio' should be of type 'AIStudio'.
// This defines an AIStudio interface and applies it to window.aistudio, making it optional.
declare global {
    interface AIStudio {
        hasSelectedApiKey: () => Promise<boolean>;
        openSelectKey: () => Promise<void>;
    }
    interface Window {
        aistudio?: AIStudio;
    }
}

export const VideoGenerator: React.FC = () => {
    const { t } = useLanguage();
    const [apiKeySelected, setApiKeySelected] = useState(false);
    const [prompt, setPrompt] = useState('An introductory video about AI researcher Tawana Mohammadi, showcasing their research focus and key publications.');
    const [aspectRatio, setAspectRatio] = useState<'16:9' | '9:16'>('16:9');
    const [isLoading, setIsLoading] = useState(false);
    const [loadingMessage, setLoadingMessage] = useState('');
    const [videoUrl, setVideoUrl] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const loadingIntervalRef = useRef<number | null>(null);

    const checkApiKey = async () => {
        if (window.aistudio) {
            const hasKey = await window.aistudio.hasSelectedApiKey();
            setApiKeySelected(hasKey);
        } else {
            // Fallback for local development or if the aistudio object isn't available
            console.warn("aistudio object not found. Assuming API key is set via environment variables.");
            setApiKeySelected(true); 
        }
    };
    
    useEffect(() => {
        checkApiKey();
    }, []);

    useEffect(() => {
        if (isLoading) {
            // FIX: The translation for loadingMessages is an array, not a string.
            // Calling .split() on an array would cause a runtime error. This now correctly handles the array.
            const messages = t('videoGenerator.loadingMessages');
            if (Array.isArray(messages) && messages.length > 0) {
                let messageIndex = 0;
                setLoadingMessage(messages[messageIndex]);
                loadingIntervalRef.current = window.setInterval(() => {
                    messageIndex = (messageIndex + 1) % messages.length;
                    setLoadingMessage(messages[messageIndex]);
                }, 4000);
            }
        } else {
            if (loadingIntervalRef.current) {
                clearInterval(loadingIntervalRef.current);
                loadingIntervalRef.current = null;
            }
        }
        return () => {
            if (loadingIntervalRef.current) {
                clearInterval(loadingIntervalRef.current);
            }
        };
    }, [isLoading, t]);

    const handleSelectKey = async () => {
        if (window.aistudio) {
            await window.aistudio.openSelectKey();
            // Assume success and update UI immediately to avoid race condition
            setApiKeySelected(true);
        }
    };
    
    const handleGenerate = async () => {
        if (!prompt.trim()) {
            setError('Prompt cannot be empty.');
            return;
        }
        setIsLoading(true);
        setError(null);
        setVideoUrl(null);
    
        try {
            // Re-check key right before the call
            if (window.aistudio && !(await window.aistudio.hasSelectedApiKey())) {
                setError(t('videoGenerator.apiKeyError'));
                setApiKeySelected(false);
                setIsLoading(false);
                return;
            }

            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
            
            let operation = await ai.models.generateVideos({
              model: 'veo-3.1-fast-generate-preview',
              prompt: prompt,
              config: {
                numberOfVideos: 1,
                resolution: '720p',
                aspectRatio: aspectRatio,
              }
            });
            
            while (!operation.done) {
              await new Promise(resolve => setTimeout(resolve, 5000));
              operation = await ai.operations.getVideosOperation({operation: operation});
            }
        
            const downloadLink = operation.response?.generatedVideos?.[0]?.video?.uri;

            if (downloadLink) {
                const response = await fetch(`${downloadLink}&key=${process.env.API_KEY}`);
                if (!response.ok) {
                    throw new Error(`Failed to fetch video: ${response.statusText}`);
                }
                const videoBlob = await response.blob();
                const url = URL.createObjectURL(videoBlob);
                setVideoUrl(url);
            } else {
                 throw new Error("Video generation completed, but no download link was provided.");
            }

        } catch (err: any) {
            console.error(err);
             if (err.message && err.message.includes("Requested entity was not found.")) {
                setError(t('videoGenerator.apiKeyError'));
                setApiKeySelected(false);
            } else {
                setError(err.message || t('videoGenerator.error'));
            }
        } finally {
            setIsLoading(false);
        }
    };

    if (!apiKeySelected) {
        return (
            <div className="bg-gray-700/50 p-6 rounded-lg text-center">
                <h2 className="text-xl font-bold mb-2">{t('videoGenerator.title')}</h2>
                <p className="text-gray-300 mb-4">{t('videoGenerator.selectKeyDescription')}</p>
                 <a href="https://ai.google.dev/gemini-api/docs/billing" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:underline text-sm mb-4 block">
                    {t('videoGenerator.billingLink')}
                </a>
                <button
                    onClick={handleSelectKey}
                    className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg transition-colors"
                >
                    {t('videoGenerator.selectKeyButton')}
                </button>
            </div>
        )
    }

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-bold tracking-tight text-white">{t('videoGenerator.title')}</h2>
                <p className="text-gray-400 mt-1">{t('videoGenerator.description')}</p>
            </div>

            <div className="space-y-4">
                <div>
                    <label htmlFor="prompt" className="block text-sm font-medium text-gray-300 mb-1">{t('videoGenerator.promptLabel')}</label>
                    <textarea
                        id="prompt"
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        placeholder={t('videoGenerator.promptPlaceholder')}
                        className="w-full bg-gray-900 border border-gray-600 rounded-lg p-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300 min-h-[100px]"
                        disabled={isLoading}
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">{t('videoGenerator.aspectRatioLabel')}</label>
                    <div className="flex gap-4">
                        {(['16:9', '9:16'] as const).map(ratio => (
                             <button
                                key={ratio}
                                onClick={() => setAspectRatio(ratio)}
                                disabled={isLoading}
                                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors w-28 ${aspectRatio === ratio ? 'bg-indigo-600 text-white' : 'bg-gray-700 hover:bg-gray-600 text-gray-300'}`}
                             >
                                {ratio === '16:9' ? 'Landscape' : 'Portrait'} ({ratio})
                             </button>
                        ))}
                    </div>
                </div>
                <button
                    onClick={handleGenerate}
                    disabled={isLoading}
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded-lg transition-colors disabled:bg-gray-500 disabled:cursor-not-allowed"
                >
                    {isLoading ? `${t('videoGenerator.generating')}` : t('videoGenerator.generateButton')}
                </button>
            </div>
            
            {isLoading && (
                <div className="text-center p-4 bg-gray-700/50 rounded-lg">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-400 mx-auto"></div>
                    <p className="mt-3 text-gray-300">{loadingMessage}</p>
                </div>
            )}

            {error && <p className="text-red-400 bg-red-900/50 p-3 rounded-lg">{error}</p>}
            
            {videoUrl && (
                <div className="space-y-4">
                    <video src={videoUrl} controls className="w-full rounded-lg" />
                    <a 
                        href={videoUrl} 
                        download={`veo-video-${Date.now()}.mp4`}
                        className="block w-full text-center bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg transition-colors"
                    >
                        {t('videoGenerator.downloadVideo')}
                    </a>
                </div>
            )}
        </div>
    )
};