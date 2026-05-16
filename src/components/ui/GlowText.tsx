import React from 'react';

interface GlowTextProps {
  children: React.ReactNode;
  className?: string;
}

export default function GlowText({ children, className = '' }: GlowTextProps) {
  return (
    <span
      className={`transition-all duration-300 hover:text-amber-500 hover:[text-shadow:0_0_8px_rgba(212,168,67,0.6)] ${className}`}
    >
      {children}
    </span>
  );
}