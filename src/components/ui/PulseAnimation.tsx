import React from 'react';

interface PulseAnimationProps {
  children: React.ReactNode;
  className?: string;
}

export default function PulseAnimation({ children, className = '' }: PulseAnimationProps) {
  return (
    <div className={`animate-[pulse-scale_2s_ease-in-out_infinite] ${className}`}>
      {children}
    </div>
  );
}