'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSfx } from '../../lib/useSfx';
import classifiedData from '../../lib/data/classified.json';

const getStatusColor = (status: string) => {
  switch (status) {
    case 'ACTIVE': return '#10B981'; // Green
    case 'DEVELOPMENT': return '#F5D64E'; // Yellow
    case 'PLANNED': return '#DC4424'; // Red
    case 'RESEARCH': return '#8B5CF6'; // Purple
    default: return '#cccccc';
  }
};

const getClearanceColor = (clearance: string) => {
  switch (clearance) {
    case 'TOP SECRET': return '#DC4424';
    case 'SECRET': return '#803014';
    case 'CONFIDENTIAL': return '#D9A63E';
    default: return '#cccccc';
  }
};

const playFallbackBeep = () => {
  try {
    const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();

    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(800, audioCtx.currentTime); // 800Hz

    gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.2);

    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    oscillator.start();
    oscillator.stop(audioCtx.currentTime + 0.2); // 200ms
  } catch (e) {
    console.warn('Web Audio API not supported', e);
  }
};

function ProjectCard({ project }: { project: typeof classifiedData.projects[0] }) {
  const [revealed, setRevealed] = useState(false);
  const [scanning, setScanning] = useState(false);

  const handleReveal = () => {
    if (revealed || scanning) return;
    setScanning(true);
    setTimeout(() => {
      setScanning(false);
      setRevealed(true);
    }, 800); // 0.8s scanner duration
  };

  return (
    <div
      className="relative flex flex-col p-6 bg-[#2D1A0A] border-2 rounded-md overflow-hidden cursor-pointer"
      style={{ borderColor: 'rgba(128, 48, 20, 0.5)' }}
      onClick={handleReveal}
    >
      <div
        className="absolute top-2 right-2 text-xs font-bold px-2 py-1 border rounded opacity-80"
        style={{
          borderColor: getClearanceColor(project.clearance),
          color: getClearanceColor(project.clearance)
        }}
      >
        {project.clearance}
      </div>

      <h3 className="font-[Cinzel] text-xl font-bold text-[#D9A63E] mt-4 mb-1">
        {project.title}
      </h3>
      <h4 className="font-[Inter] text-sm text-[#C4A86A] mb-4">
        {project.subtitle}
      </h4>

      <div className="flex items-center space-x-2 mb-4">
        <div
          className="w-2 h-2 rounded-full"
          style={{ backgroundColor: getStatusColor(project.status) }}
        />
        <span className="text-xs text-gray-400 font-bold tracking-widest">
          {project.status}
        </span>
      </div>

      <div className="relative flex-grow">
        {/* Redaction Overlay */}
        {!revealed && (
          <div
            className="absolute inset-0 z-10 opacity-90"
            style={{
              background: 'repeating-linear-gradient(0deg, #000, #000 12px, transparent 12px, transparent 24px)'
            }}
          />
        )}

        {/* Scanner Effect */}
        {scanning && (
          <div className="absolute inset-0 z-20 pointer-events-none">
            <div
              className="w-full h-1 bg-[#F5D64E] shadow-[0_0_10px_#F5D64E] animate-scanner"
            />
          </div>
        )}

        <motion.p
          className="text-sm text-gray-300 font-mono leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: revealed ? 1 : 0.2 }}
          transition={{ duration: 0.5 }}
        >
          {project.description}
        </motion.p>
      </div>
    </div>
  );
}

export default function ClassifiedPage() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showEasterEgg, setShowEasterEgg] = useState(false);

  const { playAchievement } = useSfx();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'forge2026') {
      try {
        if (playAchievement) {
          playAchievement();
        } else {
          playFallbackBeep();
        }
      } catch (err) {
        playFallbackBeep();
      }
      setIsAuthenticated(true);
    } else if (password === 'blocksmith2026') {
      setShowEasterEgg(true);
      setTimeout(() => {
        try {
          if (playAchievement) {
            playAchievement();
          } else {
            playFallbackBeep();
          }
        } catch (err) {
          playFallbackBeep();
        }
        setShowEasterEgg(false);
        setIsAuthenticated(true);
      }, 3000);
    } else {
      setError('Access Denied: Invalid Credentials');
    }
  };

  const handleElevate = () => {
    alert("Access Denied - Insufficient Credentials");
  };

  return (
    <div className="min-h-screen bg-[#1E0F05] flex flex-col font-[Inter] overflow-x-hidden">

      {/* Global styles for animations and specific fonts if not present */}
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Inter:wght@400;600;700&family=Space+Grotesk:wght@500;700&display=swap');

        .font-\\[Cinzel\\] { font-family: 'Cinzel', serif; }
        .font-\\[Inter\\] { font-family: 'Inter', sans-serif; }
        .font-\\[Space_Grotesk\\] { font-family: 'Space Grotesk', sans-serif; }

        @keyframes scanner {
          0% { transform: translateY(0); }
          100% { transform: translateY(200px); }
        }
        .animate-scanner {
          animation: scanner 0.8s linear forwards;
        }

        @keyframes pulse-glow {
          0%, 100% { opacity: 1; box-shadow: 0 0 10px #DC4424; }
          50% { opacity: 0.6; box-shadow: 0 0 20px #DC4424; }
        }
        .pulse-indicator {
          animation: pulse-glow 2s infinite;
        }
      `}} />

      <AnimatePresence mode="wait">
        {!isAuthenticated ? (
          <motion.div
            key="login"
            className="flex-grow flex items-center justify-center p-4"
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5 }}
          >
            {showEasterEgg ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-[#10B981] font-mono text-xl text-center"
              >
                WELCOME BACK, FOUNDER.<br/>ALL SYSTEMS OPERATIONAL.
              </motion.div>
            ) : (
              <div className="bg-[#2D1A0A] border border-[#803014] p-8 rounded shadow-2xl max-w-md w-full flex flex-col items-center">
                {/* Simple Lock SVG */}
                <div className="w-16 h-16 rounded-full border-4 border-[#D9A63E] flex items-center justify-center mb-6">
                  <span className="text-[#D9A63E] font-bold text-3xl">!</span>
                </div>

                <h1 className="font-[Cinzel] text-3xl font-bold text-[#D9A63E] mb-2 text-center">
                  {classifiedData.pageTitle}
                </h1>
                <h2 className="font-[Inter] text-[#C4A86A] mb-8 text-center">
                  {classifiedData.pageSubtitle}
                </h2>

                <form onSubmit={handleLogin} className="w-full flex flex-col">
                  <input
                    type="password"
                    placeholder="Enter Clearance Code"
                    value={password}
                    onChange={(e) => { setPassword(e.target.value); setError(''); }}
                    className="w-full bg-[#1E0F05] border border-[#803014] text-white p-3 mb-4 focus:outline-none focus:border-[#D9A63E] font-mono"
                  />
                  {error && <p className="text-[#DC4424] text-sm mb-4 font-mono">{error}</p>}

                  <button
                    type="submit"
                    className="w-full bg-[#F5D64E] text-[#1E0F05] font-[Space_Grotesk] font-bold uppercase tracking-widest py-3 hover:bg-white transition-colors"
                  >
                    Authenticate
                  </button>
                </form>

                <p className="text-[#803014] text-xs text-center mt-6 font-mono opacity-80">
                  {classifiedData.warningText}
                </p>
              </div>
            )}
          </motion.div>
        ) : (
          <motion.div
            key="dashboard"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-grow flex flex-col p-4 md:p-8"
          >
            {/* Top Bar */}
            <div className="w-full flex justify-between items-center mb-12 border-b border-[#803014]/50 pb-4">
              <div className="bg-[#DC4424] text-white px-4 py-1 font-bold tracking-widest text-xs md:text-sm">
                LEVEL 5 CLEARANCE ACTIVE
              </div>
              <div className="flex items-center space-x-4">
                <button
                  onClick={handleElevate}
                  className="hidden md:block text-xs text-[#C4A86A] border border-[#C4A86A] px-3 py-1 hover:bg-[#C4A86A] hover:text-[#1E0F05] transition-colors"
                >
                  Elevate Clearance
                </button>
                <div className="flex items-center space-x-2">
                  <span className="text-[#D9A63E] text-xs font-mono">LEVEL 5</span>
                  <div className="w-3 h-3 rounded-full bg-[#DC4424] pulse-indicator" />
                </div>
              </div>
            </div>

            <div className="max-w-6xl mx-auto w-full">
              <h1 className="font-[Cinzel] text-4xl md:text-5xl font-bold text-[#D9A63E] mb-12 text-center md:text-left">
                Classified Projects
              </h1>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {classifiedData.projects.map((project, idx) => (
                  <ProjectCard key={idx} project={project} />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}