import React from 'react';

export const BrandLogoIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 32 32" fill="currentColor" className={className} aria-hidden="true">
    {/* 4 organic rounded squares arranged in a diamond / clover formation */}
    <circle cx="11" cy="11" r="5" fill="currentColor" />
    <circle cx="21" cy="11" r="5" fill="currentColor" />
    <circle cx="11" cy="21" r="5" fill="currentColor" />
    <circle cx="21" cy="21" r="5" fill="currentColor" />
    <circle cx="16" cy="16" r="2.5" fill="#71AC16" />
  </svg>
);

export const RunningShoeIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* Running shoe with speed lines */}
    <path d="M3 17h18" strokeDasharray="2 2" opacity="0.6" />
    <path d="M4 14l3.5-7c.5-.9 1.4-1.5 2.5-1.5h3c.8 0 1.5.5 1.8 1.2l1.2 3.3c.4 1.1 1.5 1.9 2.7 2l2.3.2c1.1.1 2 .9 2 2v.8c0 1.1-.9 2-2 2H4a2 2 0 01-2-2v-.5c0-.9.6-1.7 1.5-1.9L4 14z" />
    <path d="M8 8.5l1.5 3" />
    <path d="M11 8.5l1.5 3" />
    <path d="M4 11h-2" />
    <path d="M3 8.5h-1.5" />
  </svg>
);

export const YogaIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* Meditating person in lotus posture */}
    <circle cx="12" cy="5" r="2.5" />
    <path d="M12 9v4" />
    <path d="M8 12l4-2 4 2" />
    <path d="M6 16l3-2 3 1 3-1 3 2" />
    <path d="M5 19c1.5-2 3.5-3 7-3s5.5 1 7 3" />
    <path d="M4 17c1.5 1 4 2 8 2s6.5-1 8-2" />
  </svg>
);

export const PersonalTrainerIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* Barbell / strength fitness trainer icon */}
    <path d="M6 5v14" strokeWidth="2.5" />
    <path d="M3 8v8" strokeWidth="2" />
    <path d="M18 5v14" strokeWidth="2.5" />
    <path d="M21 8v8" strokeWidth="2" />
    <path d="M6 12h12" strokeWidth="2.5" />
    <circle cx="12" cy="7" r="1.5" fill="currentColor" />
    <path d="M10 17l2-4 2 4" strokeWidth="1.75" />
  </svg>
);

export const FacebookIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
  </svg>
);

export const InstagramIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

export const XTwitterIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export const LinkedInIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
