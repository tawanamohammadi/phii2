import React, { useEffect } from 'react';
import { Sidebar } from './components/Sidebar.js';
import { ChatView } from './components/ChatView.js';
import { Header } from './components/Header.js';
import { useLanguage } from './LanguageContext.js';

const App = () => {
  const { lang } = useLanguage();

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';
  }, [lang]);

  return (
    React.createElement('div', { className: "flex h-screen w-screen bg-gray-900 text-white overflow-hidden" },
      React.createElement(Sidebar, null),
      React.createElement('div', { className: "flex-1 flex flex-col bg-gray-800 h-screen overflow-hidden" },
        React.createElement(Header, null),
        React.createElement(ChatView, null)
      )
    )
  );
};

export default App;
