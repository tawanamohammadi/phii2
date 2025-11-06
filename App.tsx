import React, { useEffect, useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { ChatView } from './components/ChatView';
import { Header } from './components/Header';
import { VideoView } from './components/VideoView';
import { useLanguage } from './LanguageContext';

type View = 'chat' | 'video';

const App: React.FC = () => {
  const { lang } = useLanguage();
  const [view, setView] = useState<View>('chat');

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';
  }, [lang]);

  return (
    <div className="flex h-screen w-screen bg-gray-900 text-white overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col bg-gray-800 h-screen overflow-hidden">
        <Header currentView={view} setView={setView} />
        {view === 'chat' && <ChatView />}
        {view === 'video' && <VideoView />}
      </div>
    </div>
  );
};

export default App;