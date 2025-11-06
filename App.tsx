import React, { useEffect } from 'react';
import { Sidebar } from './components/Sidebar.tsx';
import { ChatView } from './components/ChatView.tsx';
import { Header } from './components/Header.tsx';
import { useLanguage } from './LanguageContext.tsx';

const App: React.FC = () => {
  const { lang } = useLanguage();

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';
  }, [lang]);

  return (
    <div className="flex h-screen w-screen bg-gray-900 text-white overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col bg-gray-800 h-screen overflow-hidden">
        <Header />
        <ChatView />
      </div>
    </div>
  );
};

export default App;