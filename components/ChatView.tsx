import React, { useEffect, useRef } from 'react';
import { conversations } from '../translations';
import { MessageBubble } from './MessageBubble';
import { ChatInput } from './ChatInput';
import { useLanguage } from '../LanguageContext';

export const ChatView: React.FC = () => {
    const { lang } = useLanguage();
    const endOfMessagesRef = useRef<HTMLDivElement>(null);
    const conversationHistory = conversations[lang] || conversations['fa'];

    useEffect(() => {
        // We scroll to the bottom on initial load and on language change.
        endOfMessagesRef.current?.scrollIntoView();
    }, [lang, conversationHistory]);

    return (
        <>
            <main className="flex-1 overflow-y-auto p-4 md:p-6">
                <div className="max-w-3xl mx-auto">
                    {conversationHistory.map((msg, index) => (
                        <MessageBubble key={`${lang}-${index}`} message={msg} />
                    ))}
                    <div ref={endOfMessagesRef} />
                </div>
            </main>
            <footer className="sticky bottom-0">
                <ChatInput />
            </footer>
        </>
    );
};