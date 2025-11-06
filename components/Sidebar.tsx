import React from 'react';
import { NewChatIcon, OrcidIcon, ScholarIcon, LinkIcon, GithubIcon, UniversityIcon, BadgeIcon } from './Icons';
import { useLanguage } from '../LanguageContext';


interface ProfileLinkProps {
    href: string;
    icon: React.ReactNode;
    text: string;
}

const ProfileLink: React.FC<ProfileLinkProps> = ({ href, icon, text }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-800 transition-colors text-sm text-gray-300">
        <div className="w-5 h-5 flex-shrink-0">{icon}</div>
        <span className="truncate">{text}</span>
    </a>
);


export const Sidebar: React.FC = () => {
    const { t } = useLanguage();
    
    return (
        <aside className="bg-gray-900 text-white w-80 p-4 flex-col hidden md:flex border-r border-gray-700/50">
            {/* Header */}
            <div className="flex items-center gap-4 p-2 mb-4">
                <img 
                    src="https://avatars.githubusercontent.com/u/141659359?v=4" 
                    alt="Tawana Mohammadi's avatar" 
                    className="w-12 h-12 rounded-full flex-shrink-0"
                />
                <div>
                    <h1 className="font-bold text-lg text-white">{t('sidebar.authorName')}</h1>
                    <p className="text-xs text-gray-400">{t('sidebar.authorRole')}</p>
                </div>
            </div>
            <p className="text-xs text-gray-400 px-2 mb-4 border-t border-gray-700/80 pt-4">
                {t('sidebar.projectInfo')}
            </p>
            
            {/* Links */}
            <div className="flex-grow overflow-y-auto space-y-6 pr-2 -mr-2">
                
                <div>
                    <h2 className="text-xs text-gray-500 font-semibold mb-2 px-2 uppercase tracking-wider">{t('sidebar.researchProfiles')}</h2>
                    <div className="space-y-1">
                        <ProfileLink href="https://orcid.org/0009-0005-6825-6728" icon={<OrcidIcon className="w-5 h-5" />} text={t('sidebar.orcid')} />
                        <ProfileLink href="https://www.webofscience.com/wos/author/record/ORI-6601-2025" icon={<LinkIcon className="w-5 h-5 text-gray-400" />} text={t('sidebar.webOfScience')} />
                        <ProfileLink href="https://scholar.google.com/" icon={<ScholarIcon className="w-5 h-5 text-gray-400" />} text={t('sidebar.googleScholar')} />
                        <ProfileLink href="https://www.semanticscholar.org/me/research" icon={<LinkIcon className="w-5 h-5 text-gray-400" />} text={t('sidebar.semanticScholar')} />
                        <ProfileLink href="https://scite.ai/" icon={<LinkIcon className="w-5 h-5 text-gray-400" />} text={t('sidebar.scite')} />
                    </div>
                </div>

                <div>
                    <h2 className="text-xs text-gray-500 font-semibold mb-2 px-2 uppercase tracking-wider">{t('sidebar.professionalPresence')}</h2>
                    <div className="space-y-1">
                        <ProfileLink href="https://tawana.online" icon={<LinkIcon className="w-5 h-5 text-gray-400" />} text={t('sidebar.personalWebsite')} />
                        <ProfileLink href="https://github.com/tawanamohammadi" icon={<GithubIcon className="w-5 h-5 text-gray-400" />} text={t('sidebar.github')} />
                        <ProfileLink href="https://tawanamohammadi.medium.com/" icon={<LinkIcon className="w-5 h-5 text-gray-400" />} text={t('sidebar.medium')} />
                    </div>
                </div>

                 <div>
                    <h2 className="text-xs text-gray-500 font-semibold mb-2 px-2 uppercase tracking-wider">{t('sidebar.academic')}</h2>
                    <div className="space-y-1">
                        <ProfileLink href="https://www.uopeople.edu/" icon={<UniversityIcon className="w-5 h-5 text-gray-400" />} text={t('sidebar.university')} />
                        <ProfileLink href="https://badges.parchment.com/public/assertions/StmYbl4RRS6_7sjDQ1xxoA" icon={<BadgeIcon className="w-5 h-5 text-gray-400" />} text={t('sidebar.badge')} />
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="border-t border-gray-700/80 pt-4 mt-4">
                <button className="flex items-center justify-between w-full p-2 text-left rounded-md hover:bg-gray-800 transition-colors text-gray-300">
                    <span>{t('sidebar.newChat')}</span>
                    <NewChatIcon className="w-5 h-5" />
                </button>
            </div>
        </aside>
    );
};