import React from 'react';

export const ChatView: React.FC = () => {
    // The parent element in App.tsx is a flex-column container.
    // This `main` element with `flex-1` will stretch to fill the remaining vertical space.
    return (
        <main className="flex-1 bg-gray-800">
            <iframe
                src="https://tawanamohammadi-nous-hermes-chat.hf.space?__theme=dark"
                title="Agent Core Chat by Tawana Mohammadi"
                className="w-full h-full border-0"
                allow="microphone; clipboard-read; clipboard-write"
                loading="lazy"
            ></iframe>
        </main>
    );
};
