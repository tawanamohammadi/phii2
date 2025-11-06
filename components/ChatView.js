import React from 'react';

export const ChatView = () => {
    // The parent element in App.tsx is a flex-column container.
    // This `main` element with `flex-1` will stretch to fill the remaining vertical space.
    return (
        React.createElement('main', { className: "flex-1 bg-gray-800" },
            React.createElement('iframe', {
                src: "https://tawanamohammadi-nous-hermes-chat.hf.space?__theme=dark",
                title: "Agent Core Chat by Tawana Mohammadi",
                className: "w-full h-full border-0",
                allow: "microphone; clipboard-read; clipboard-write",
                loading: "lazy"
            })
        )
    );
};
