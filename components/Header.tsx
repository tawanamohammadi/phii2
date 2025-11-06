import React from 'react';
import { useLanguage } from '../LanguageContext';
import { ResearchIcon, VideoIcon } from './Icons';

interface HeaderProps {
    currentView: 'chat' | 'video';
    setView: (view: 'chat' | 'video') => void;
}

export const Header: React.FC<HeaderProps> = ({ currentView, setView }) => {
    const { lang, setLang, t } = useLanguage();

    const toggleLanguage = () => {
        setLang(lang === 'fa' ? 'en' : 'fa');
    };

    const navButtonClasses = (view: 'chat' | 'video') => 
        `px-4 py-2 rounded-md text-sm font-medium flex items-center gap-2 transition-colors ${
            currentView === view 
            ? 'bg-indigo-600 text-white' 
            : 'text-gray-300 hover:bg-gray-700'
        }`;

    return (
        <header className="bg-gray-800/80 backdrop-blur-sm border-b border-gray-700/50 p-4 sticky top-0 z-10 shadow-md flex items-center justify-between flex-shrink-0">
            <div className="flex items-center gap-4">
                 <div className="w-8 h-8 text-indigo-400">
                    {currentView === 'chat' ? <ResearchIcon /> : <VideoIcon />}
                 </div>
                 <div>
                    <h1 className="text-xl font-bold text-white tracking-tight">{t('header.title')}</h1>
                    <p className="text-sm text-gray-300 ">{t('header.subtitle')}</p>
                 </div>
            </div>
            <div className="flex items-center gap-2">
                <nav className="flex items-center gap-2 bg-gray-900/50 p-1 rounded-lg">
                    <button onClick={() => setView('chat')} className={navButtonClasses('chat')}>
                        <ResearchIcon className="w-4 h-4" />
                        {t('header.chat')}
                    </button>
                    <button onClick={() => setView('video')} className={navButtonClasses('video')}>
                        <VideoIcon className="w-4 h-4" />
                        {t('header.video')}
                    </button>
                </nav>
                <button
                    onClick={toggleLanguage}
                    className="bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300 text-sm"
                >
                    {lang === 'fa' ? 'English' : 'فارسی'}
                </button>
            </div>
        </header>
    );
};