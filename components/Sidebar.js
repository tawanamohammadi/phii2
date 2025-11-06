import React from 'react';
import { NewChatIcon, OrcidIcon, ScholarIcon, LinkIcon, GithubIcon, UniversityIcon, BadgeIcon } from './Icons.js';
import { useLanguage } from '../LanguageContext.js';

const ProfileLink = ({ href, icon, text }) => (
    React.createElement('a', { href: href, target: "_blank", rel: "noopener noreferrer", className: "flex items-center gap-3 p-2 rounded-md hover:bg-gray-800 transition-colors text-sm text-gray-300" },
        React.createElement('div', { className: "w-5 h-5 flex-shrink-0" }, icon),
        React.createElement('span', { className: "truncate" }, text)
    )
);

export const Sidebar = () => {
    const { t } = useLanguage();
    
    return (
        React.createElement('aside', { className: "bg-gray-900 text-white w-80 p-4 flex-col hidden md:flex border-r border-gray-700/50" },
            React.createElement('div', { className: "flex items-center gap-4 p-2 mb-4" },
                React.createElement('img', { 
                    src: "https://avatars.githubusercontent.com/u/141659359?v=4", 
                    alt: "Tawana Mohammadi's avatar", 
                    className: "w-12 h-12 rounded-full flex-shrink-0"
                }),
                React.createElement('div', null,
                    React.createElement('h1', { className: "font-bold text-lg text-white" }, t('sidebar.authorName')),
                    React.createElement('p', { className: "text-xs text-gray-400" }, t('sidebar.authorRole'))
                )
            ),
            React.createElement('p', { className: "text-xs text-gray-400 px-2 mb-4 border-t border-gray-700/80 pt-4" },
                t('sidebar.projectInfo')
            ),
            React.createElement('div', { className: "flex-grow overflow-y-auto space-y-6 pr-2 -mr-2" },
                React.createElement('div', null,
                    React.createElement('h2', { className: "text-xs text-gray-500 font-semibold mb-2 px-2 uppercase tracking-wider" }, t('sidebar.researchProfiles')),
                    React.createElement('div', { className: "space-y-1" },
                        React.createElement(ProfileLink, { href: "https://orcid.org/0009-0005-6825-6728", icon: React.createElement(OrcidIcon, { className: "w-5 h-5" }), text: t('sidebar.orcid') }),
                        React.createElement(ProfileLink, { href: "https://www.webofscience.com/wos/author/record/ORI-6601-2025", icon: React.createElement(LinkIcon, { className: "w-5 h-5 text-gray-400" }), text: t('sidebar.webOfScience') }),
                        React.createElement(ProfileLink, { href: "https://scholar.google.com/", icon: React.createElement(ScholarIcon, { className: "w-5 h-5 text-gray-400" }), text: t('sidebar.googleScholar') }),
                        React.createElement(ProfileLink, { href: "https://www.semanticscholar.org/me/research", icon: React.createElement(LinkIcon, { className: "w-5 h-5 text-gray-400" }), text: t('sidebar.semanticScholar') }),
                        React.createElement(ProfileLink, { href: "https://scite.ai/", icon: React.createElement(LinkIcon, { className: "w-5 h-5 text-gray-400" }), text: t('sidebar.scite') })
                    )
                ),
                React.createElement('div', null,
                    React.createElement('h2', { className: "text-xs text-gray-500 font-semibold mb-2 px-2 uppercase tracking-wider" }, t('sidebar.professionalPresence')),
                    React.createElement('div', { className: "space-y-1" },
                        React.createElement(ProfileLink, { href: "https://tawana.online", icon: React.createElement(LinkIcon, { className: "w-5 h-5 text-gray-400" }), text: t('sidebar.personalWebsite') }),
                        React.createElement(ProfileLink, { href: "https://github.com/tawanamohammadi", icon: React.createElement(GithubIcon, { className: "w-5 h-5 text-gray-400" }), text: t('sidebar.github') }),
                        React.createElement(ProfileLink, { href: "https://tawanamohammadi.medium.com/", icon: React.createElement(LinkIcon, { className: "w-5 h-5 text-gray-400" }), text: t('sidebar.medium') })
                    )
                ),
                React.createElement('div', null,
                    React.createElement('h2', { className: "text-xs text-gray-500 font-semibold mb-2 px-2 uppercase tracking-wider" }, t('sidebar.academic')),
                    React.createElement('div', { className: "space-y-1" },
                        React.createElement(ProfileLink, { href: "https://www.uopeople.edu/", icon: React.createElement(UniversityIcon, { className: "w-5 h-5 text-gray-400" }), text: t('sidebar.university') }),
                        React.createElement(ProfileLink, { href: "https://badges.parchment.com/public/assertions/StmYbl4RRS6_7sjDQ1xxoA", icon: React.createElement(BadgeIcon, { className: "w-5 h-5 text-gray-400" }), text: t('sidebar.badge') })
                    )
                )
            ),
            React.createElement('div', { className: "border-t border-gray-700/80 pt-4 mt-4" },
                React.createElement('button', { className: "flex items-center justify-between w-full p-2 text-left rounded-md hover:bg-gray-800 transition-colors text-gray-300" },
                    React.createElement('span', null, t('sidebar.newChat')),
                    React.createElement(NewChatIcon, { className: "w-5 h-5" })
                )
            )
        )
    );
};
