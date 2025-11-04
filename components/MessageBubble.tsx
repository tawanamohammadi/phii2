import React from 'react';
import { Message } from '../types';
import { BotIcon } from './Icons';

// Helper to parse inline elements like **bold** text
const ParseInline: React.FC<{ text: string }> = ({ text }) => {
    const parts = text.split(/(\*\*.*?\*\*)/g).filter(Boolean);
    return (
        <>
            {parts.map((part, index) => 
                part.startsWith('**') && part.endsWith('**') ? (
                    <strong key={index}>{part.slice(2, -2)}</strong>
                ) : (
                    part
                )
            )}
        </>
    );
};

// Main markdown renderer component
const SimpleMarkdown: React.FC<{ text: string }> = ({ text }) => {
    // 1. First, separate code blocks from the rest of the text
    const blocks = text.split(/(```[\s\S]*?```)/g).filter(Boolean);

    return (
        <>
            {blocks.map((block, index) => {
                // 2. If it's a code block, render it as a <pre> element
                if (block.startsWith('```') && block.endsWith('```')) {
                    const code = block.slice(3, -3).trim();
                    return (
                        <pre key={index} className="bg-gray-900/80 text-white p-3 my-3 rounded-lg overflow-x-auto text-sm font-mono">
                            <code>{code}</code>
                        </pre>
                    );
                }

                // 3. For other blocks, process line by line for paragraphs and lists
                const lines = block.trim().split('\n');
                const elements: React.ReactNode[] = [];
                let currentList: React.ReactNode[] = [];

                const flushList = () => {
                    if (currentList.length > 0) {
                        elements.push(<ul key={`ul-${elements.length}`} className="list-disc pl-6 my-2 space-y-1">{currentList}</ul>);
                        currentList = [];
                    }
                };

                lines.forEach((line, lineIndex) => {
                    const trimmedLine = line.trim();
                    if (trimmedLine.startsWith('- ')) {
                        currentList.push(<li key={lineIndex}><ParseInline text={trimmedLine.substring(2)} /></li>);
                    } else {
                        flushList();
                        if (trimmedLine) {
                            elements.push(<p key={lineIndex} className="my-2 leading-relaxed"><ParseInline text={trimmedLine} /></p>);
                        }
                    }
                });
                
                flushList(); // Add any remaining list items

                return <div key={index}>{elements}</div>;
            })}
        </>
    );
};


export const MessageBubble: React.FC<{ message: Message }> = ({ message }) => {
    const isUser = message.speaker === 'user';
    const directionClass = isUser ? 'rtl' : 'ltr';

    return (
        <div className={`flex items-start gap-4 my-6 ${isUser ? 'flex-row-reverse' : 'flex-row'}`}>
             <div className="flex-shrink-0 w-10 h-10">
                {isUser ? (
                    <img src="https://avatars.githubusercontent.com/u/141659359?v=4" alt="User avatar" className="w-full h-full rounded-full" />
                ) : (
                    <div className="w-full h-full rounded-full bg-gray-600 flex items-center justify-center">
                        <BotIcon className="w-6 h-6 text-white" />
                    </div>
                )}
            </div>
            <div dir={directionClass} className={`p-4 rounded-xl max-w-2xl text-white shadow-md ${isUser ? 'bg-indigo-600 rounded-br-none' : 'bg-gray-700 rounded-bl-none'}`}>
                <div className="text-white">
                    <SimpleMarkdown text={message.content} />
                </div>
            </div>
        </div>
    );
};