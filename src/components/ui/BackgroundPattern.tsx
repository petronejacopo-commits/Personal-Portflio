import React from 'react';

export default function BackgroundPattern({ variant }: { variant: 'network' | 'livestats' }) {
  if (variant === 'network') {
    return (
      <div
        className="absolute inset-0 opacity-20 pointer-events-none z-0"
        style={{
          backgroundImage: 'linear-gradient(#2D1A0A 1px, transparent 1px), linear-gradient(90deg, #2D1A0A 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />
    );
  }

  // livestats pattern: code lines
  return (
    <div
      className="absolute inset-0 opacity-10 pointer-events-none z-0 overflow-hidden"
      style={{
        backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, #D9A63E 2px, #D9A63E 4px)',
        backgroundSize: '100% 20px'
      }}
    />
  );
}