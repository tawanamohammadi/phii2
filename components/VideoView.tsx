import React from 'react';
import { VideoGenerator } from './VideoGenerator.tsx';

export const VideoView: React.FC = () => {
    return (
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
            <div className="max-w-3xl mx-auto">
                <VideoGenerator />
            </div>
        </main>
    );
};