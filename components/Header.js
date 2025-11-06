import React from 'react';
import { useLanguage } from '../LanguageContext.js';
import { ResearchIcon } from './Icons.js';

export const Header = () => {
    const { lang, setLang, t } = useLanguage();

    const toggleLanguage = () => {
        setLang(lang === 'fa' ? 'en' : 'fa');
    };

    return (
        React.createElement('header', { className: "bg-gray-800/80 backdrop-blur-sm border-b border-gray-700/50 p-4 sticky top-0 z-10 shadow-md flex items-center justify-between flex-shrink-0" },
            React.createElement('div', { className: "flex items-center gap-4" },
                 React.createElement('div', { className: "w-8 h-8 text-indigo-400" },
                    React.createElement(ResearchIcon, null)
                 ),
                 React.createElement('div', null,
                    React.createElement('h1', { className: "text-xl font-bold text-white tracking-tight" }, t('header.title')),
                    React.createElement('p', { className: "text-sm text-gray-300 " }, t('header.subtitle'))
                 )
            ),
            React.createElement('div', { className: "flex items-center gap-2" },
                React.createElement('button',
                    {
                        onClick: toggleLanguage,
                        className: "bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300 text-sm"
                    },
                    lang === 'fa' ? 'English' : 'فارسی'
                )
            )
        )
    );
};
