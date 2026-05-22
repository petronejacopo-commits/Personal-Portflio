import React from 'react';

export default function BackgroundPattern({ variant }: { variant: 'network' | 'livestats' | 'roadmap' | 'partners' | 'events' | 'lab' | 'careers' }) {
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

  if (variant === 'roadmap') {
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

  if (variant === 'partners') {
    return (
      <div className="absolute inset-0 opacity-5 pointer-events-none z-0 overflow-hidden flex items-center justify-center">
        <div
          className="w-[150%] h-[150%] rounded-full border-[40px] border-[#D9A63E] border-dashed"
          style={{ animation: 'spin-slow 120s linear infinite' }}
        />
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes spin-slow {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}} />
      </div>
    );
  }

  if (variant === 'events') {
    return (
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#D9A63E] rounded-full mix-blend-screen filter blur-[100px] opacity-20 animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#DC4424] rounded-full mix-blend-screen filter blur-[100px] opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-[#803014] rounded-full mix-blend-screen filter blur-[100px] opacity-20 animate-blob animation-delay-4000" />

        <style dangerouslySetInnerHTML={{__html: `
          @keyframes blob {
            0% { transform: translate(0px, 0px) scale(1); }
            33% { transform: translate(30px, -50px) scale(1.1); }
            66% { transform: translate(-20px, 20px) scale(0.9); }
            100% { transform: translate(0px, 0px) scale(1); }
          }
          .animate-blob {
            animation: blob 7s infinite;
          }
          .animation-delay-2000 {
            animation-delay: 2s;
          }
          .animation-delay-4000 {
            animation-delay: 4s;
          }
        `}} />
      </div>
    );
  }

  if (variant === 'lab') {
    return (
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden bg-[#1E0F05]">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1E0F05] via-transparent to-transparent" />
      </div>
    );
  }

  // careers variant: desktop/documents styling
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden bg-[#1E0F05]">
      {/* Subtle diagonal lines resembling scattered documents/notes */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #D9A63E 0, #D9A63E 1px, transparent 0, transparent 50%)',
          backgroundSize: '100px 100px'
        }}
      />
      {/* Vignette effect to focus center */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#1E0F05_80%)]" />
    </div>
  );
}