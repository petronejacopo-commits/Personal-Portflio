'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import graveyardData from '../../lib/data/graveyard.json';
import BackgroundPattern from '../ui/BackgroundPattern';

function TombstoneCard({ project, index }: { project: any; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, rotateX: 10 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1, ease: 'easeOut' }}
      className="relative bg-[#1A1510] border border-[#2D2520] rounded-lg p-8 md:p-10 shadow-2xl overflow-hidden group"
    >
      {/* DECOMMISSIONED Stamp */}
      <div className="absolute top-6 right-6 md:top-8 md:right-8 transform rotate-12 opacity-80 z-10 pointer-events-none">
        <div className="border-4 border-[#803014] text-[#803014] font-[Cinzel] font-bold text-xl md:text-2xl tracking-widest px-4 py-1 rounded-sm shadow-[0_0_10px_rgba(128,48,20,0.3)] select-none">
          DECOMMISSIONED
        </div>
      </div>

      <div className="relative z-20 pr-16 md:pr-48">
        <h2 className="text-3xl md:text-4xl font-[Cinzel] font-bold text-[#A89888] mb-2 group-hover:text-[#C4A86A] transition-colors">
          {project.title}
        </h2>
        <span className="text-[#803014] font-mono text-sm tracking-wider block mb-8">
          RIP: {project.period}
        </span>

        <div className="mb-6">
          <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-2 font-[Inter]">Cause of Death</h3>
          <p className="text-gray-300 font-[Inter] leading-relaxed">
            {project.cause}
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-sm font-bold text-[#D9A63E] uppercase tracking-widest mb-2 font-[Inter]">Lesson Learned</h3>
          <p className="text-gray-300 font-[Inter] leading-relaxed border-l-2 border-[#D9A63E] pl-4">
            {project.lesson}
          </p>
        </div>

        <div className="mt-8 pt-6 border-t border-[#2D2520]">
          <p className="text-gray-500 italic font-[Cinzel] text-lg leading-relaxed">
            "{project.quote}"
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function GraveyardSection() {
  return (
    <section className="relative w-full min-h-screen bg-[#140F0A] text-white py-20 px-4 md:px-8 flex flex-col items-center overflow-x-hidden">
      <BackgroundPattern variant="graveyard" />

      {/* Global fonts if not injected elsewhere */}
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Inter:wght@400;600;700&display=swap');
        .font-\\[Cinzel\\] { font-family: 'Cinzel', serif; }
        .font-\\[Inter\\] { font-family: 'Inter', sans-serif; }
      `}} />

      <div className="relative z-10 w-full max-w-4xl flex flex-col items-center">

        <h1 className="text-4xl md:text-6xl font-[Cinzel] font-bold text-[#803014] mb-4 text-center">
          {graveyardData.pageTitle}
        </h1>
        <p className="text-[#A89888] text-lg md:text-xl text-center max-w-2xl mb-12 font-[Inter]">
          {graveyardData.pageSubtitle}
        </p>

        <div className="w-full bg-[#1A1510]/80 backdrop-blur border border-[#2D2520] rounded-lg p-6 md:p-10 mb-20 text-center shadow-lg">
          <p className="text-gray-400 font-[Inter] leading-relaxed italic">
            {graveyardData.intro}
          </p>
        </div>

        <div className="w-full flex flex-col space-y-12 mb-20">
          {graveyardData.projects.map((project, idx) => (
            <TombstoneCard key={idx} project={project} index={idx} />
          ))}
        </div>

      </div>
    </section>
  );
}