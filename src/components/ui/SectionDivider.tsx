import React from 'react';

export default function SectionDivider() {
  return (
    <div className="w-full h-[24px] flex items-center justify-center my-8">
      <svg
        width="100%"
        height="24"
        viewBox="0 0 1000 24"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <line x1="0" y1="12" x2="495" y2="12" stroke="#262626" strokeWidth="1" />
        <path d="M500 8 L504 12 L500 16 L496 12 Z" fill="#D4A843" />
        <line x1="505" y1="12" x2="1000" y2="12" stroke="#262626" strokeWidth="1" />
      </svg>
    </div>
  );
}