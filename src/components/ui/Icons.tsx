import React from 'react';

export const InstagramIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export const ShopeeIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M19.5 7.5h-2.25A5.25 5.25 0 0 0 12 2.25a5.25 5.25 0 0 0-5.25 5.25H4.5A2.25 2.25 0 0 0 2.25 9.75l1.5 10.5A2.25 2.25 0 0 0 6 22.5h12a2.25 2.25 0 0 0 2.25-2.25l1.5-10.5a2.25 2.25 0 0 0-2.25-2.25zm-7.5-3.75a3.75 3.75 0 0 1 3.75 3.75H8.25a3.75 3.75 0 0 1 3.75-3.75zm1.8 12.3c-.6.6-1.5.7-2.3.4-.6-.2-1-.6-1.2-1.1l1.3-.5c.1.3.4.5.8.6.4.1.8 0 1-.2.2-.2.3-.5.2-.8-.1-.4-.5-.6-1.2-.9-.8-.3-1.4-.7-1.7-1.1-.3-.4-.3-1-.1-1.6.3-.7 1-1.2 1.9-1.3.8-.1 1.6.1 2.1.6.4.4.6.9.7 1.4l-1.3.4c-.1-.3-.2-.5-.4-.7-.3-.2-.6-.3-.9-.2-.3 0-.6.2-.7.4-.1.2-.1.4 0 .6.1.2.4.4 1 .6 1 .4 1.7.8 2 1.3.4.6.4 1.3.1 1.9z" />
  </svg>
);
