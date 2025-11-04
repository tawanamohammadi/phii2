import React from 'react';
import { useLanguage } from '../LanguageContext';
import { ResearchIcon } from './Icons';

export const Header: React.FC = () => {
    const { lang, setLang, t } = useLanguage();

    const toggleLanguage = () => {
        setLang(lang === 'fa' ? 'en' : 'fa');
    };

    return (
        <header className="bg-gray-800/80 backdrop-blur-sm border-b border-gray-700/50 p-4 sticky top-0 z-10 shadow-md flex items-center justify-between">
            <div className="flex items-center gap-4">
                 <ResearchIcon className="w-8 h-8 text-indigo-400" />
                 <div>
                    <h1 className="text-xl font-bold text-white tracking-tight">{t('header.title')}</h1>
                    <p className="text-sm text-gray-300 ">{t('header.subtitle')}</p>
                 </div>
            </div>
            <button
                onClick={toggleLanguage}
                className="bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300 text-sm"
            >
                {lang === 'fa' ? 'English' : 'فارسی'}
            </button>
        </header>
    );
};