import React from 'react';

export default function BackgroundPattern({ variant }: { variant: 'network' | 'livestats' | 'roadmap' }) {
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

  if (variant === 'livestats') {
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

  // roadmap pattern: animated vertical timeline line
  return (
    <div className="absolute inset-0 opacity-30 pointer-events-none z-0 flex justify-center overflow-hidden">
      <div
        className="w-[2px] h-full"
        style={{
          background: 'linear-gradient(to bottom, transparent, #D9A63E, transparent)',
          animation: 'roadmap-flow 4s linear infinite'
        }}
      />
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes roadmap-flow {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
      `}} />
    </div>
  );
}