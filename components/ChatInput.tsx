import React from 'react';
import { SendIcon } from './Icons.tsx';
import { useLanguage } from '../LanguageContext.tsx';

export const ChatInput: React.FC = () => {
    const { t } = useLanguage();
    return (
        <div className="bg-gray-800/50 backdrop-blur-sm p-4 w-full">
            <div className="relative max-w-3xl mx-auto">
                <input
                    type="text"
                    disabled
                    placeholder={t('chatInput.placeholder')}
                    className="w-full bg-gray-700 border border-gray-600 rounded-full py-3 pl-5 pr-14 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
                />
                <button
                    disabled
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-indigo-600 text-white cursor-not-allowed opacity-50"
                >
                    <SendIcon className="w-5 h-5" />
                </button>
            </div>
            <p className="text-center text-xs text-gray-500 mt-2">
               {t('chatInput.footer')}
            </p>
        </div>
    );
};