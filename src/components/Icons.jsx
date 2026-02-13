import React from 'react';

export const HeroIllustration = () => (
    <svg viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
        <circle cx="250" cy="200" r="180" fill="#FFF5F0" />
        <path d="M150 250C150 250 180 150 250 150C320 150 350 250 350 250" stroke="var(--primary-color)" strokeWidth="8" strokeLinecap="round" />
        <circle cx="250" cy="180" r="40" fill="#FED7AA" />
        <rect x="180" y="260" width="140" height="100" rx="20" fill="#FFEDD5" />
        <rect x="100" y="200" width="80" height="160" rx="20" fill="#FDBA74" />
        <rect x="320" y="220" width="80" height="140" rx="20" fill="#FDBA74" />
        <circle cx="160" cy="160" r="15" fill="#FF4500" opacity="0.2" />
        <circle cx="340" cy="140" r="10" fill="#FF4500" opacity="0.2" />
        <circle cx="250" cy="80" r="8" fill="#FF4500" opacity="0.2" />
    </svg>
);

export const MoodIcon = () => (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--primary-color)" strokeWidth="2" strokeLinecap="round" strokeJoin="round">
        <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z" />
        <path d="M10 2c1 .5 2 2 2 5" />
    </svg>
);

export const JournalIcon = () => (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--primary-color)" strokeWidth="2" strokeLinecap="round" strokeJoin="round">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
    </svg>
);

export const BrainIcon = () => (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--primary-color)" strokeWidth="2" strokeLinecap="round" strokeJoin="round">
        <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z" />
        <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z" />
    </svg>
);

export const ArrowRight = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeJoin="round">
        <path d="M5 12h14" />
        <path d="m12 5 7 7-7 7" />
    </svg>
);

export const ListeningIcon = () => (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--primary-color)" strokeWidth="2" strokeLinecap="round" strokeJoin="round">
        <path d="M12 2a10 10 0 1 0 10 10" />
        <path d="M15 12a3 3 0 1 0-3-3" />
        <path d="M9 12a3 3 0 1 0 3-3" />
    </svg>
);

export const SupportIcon = () => (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--primary-color)" strokeWidth="2" strokeLinecap="round" strokeJoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
);

export const ConnectIcon = () => (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--primary-color)" strokeWidth="2" strokeLinecap="round" strokeJoin="round">
        <circle cx="12" cy="5" r="3" />
        <line x1="12" y1="8" x2="12" y2="22" />
        <path d="M9 13a3 3 0 1 0 6 0" />
    </svg>
);

export const ChatIcon = () => (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeJoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
    </svg>
);

export const MeditationIcon = () => (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeJoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
        <line x1="9" y1="9" x2="9.01" y2="9"></line>
        <line x1="15" y1="9" x2="15.01" y2="9"></line>
    </svg>
);

export const SleepIcon = () => (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeJoin="round">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
    </svg>
);

export const PhoneIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeJoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
    </svg>
);

