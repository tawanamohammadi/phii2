import React, { useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { ChatView } from './components/ChatView';
import { useLanguage } from './LanguageContext';

const App: React.FC = () => {
  const { lang } = useLanguage();

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';
  }, [lang]);

  return (
    <div className="flex h-screen w-screen bg-gray-900 text-white overflow-hidden">
      <Sidebar />
      <ChatView />
    </div>
  );
};

export default App;