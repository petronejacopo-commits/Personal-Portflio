'use client';

import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import labData from '../../lib/data/lab.json';
import BackgroundPattern from '../ui/BackgroundPattern';
import Terminal from '../ui/Terminal';

function SafeCard({ project }: { project: any }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'Testing': return '#10B981'; // Green
      case 'Concept': return '#F5D64E'; // Yellow
      case 'In Development': return '#D9A63E'; // Gold
      default: return '#C4A86A';
    }
  };

  return (
    <div ref={ref} className="relative w-full max-w-4xl mx-auto my-12 group perspective-1000">

      {/* Front Door of the Safe (Splits open) */}
      <motion.div
        className="absolute inset-0 z-20 flex"
        initial={false}
        animate={isInView ? "open" : "closed"}
        variants={{
          open: { transition: { staggerChildren: 0.2 } },
          closed: {}
        }}
        style={{ pointerEvents: isInView ? 'none' : 'auto' }}
      >
        <motion.div
          className="w-1/2 h-full bg-[#1A0F05] border-r border-[#803014] flex items-center justify-end pr-2 shadow-[inset_-10px_0_20px_rgba(0,0,0,0.5)] border-y border-l rounded-l-lg"
          variants={{
            open: { rotateY: -100, x: -50, opacity: 0 },
            closed: { rotateY: 0, x: 0, opacity: 1 }
          }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          style={{ originX: 0 }}
        >
          <div className="w-4 h-16 bg-[#2D1A0A] rounded border border-[#803014]" />
        </motion.div>

        <motion.div
          className="w-1/2 h-full bg-[#1A0F05] border-l border-[#803014] flex items-center justify-start pl-2 shadow-[inset_10px_0_20px_rgba(0,0,0,0.5)] border-y border-r rounded-r-lg"
          variants={{
            open: { rotateY: 100, x: 50, opacity: 0 },
            closed: { rotateY: 0, x: 0, opacity: 1 }
          }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          style={{ originX: 1 }}
        >
          <div className="w-12 h-12 rounded-full border-[4px] border-[#D9A63E] border-dashed" />
        </motion.div>
      </motion.div>

      {/* Inner Content of the Safe */}
      <motion.div
        className="w-full bg-[#2D1A0A] border border-[#803014] p-8 rounded-lg shadow-2xl relative z-10"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <div className="flex justify-between items-start mb-4">
          <h3 className="font-[Cinzel] text-2xl md:text-3xl font-bold text-[#D9A63E]">
            {project.name}
          </h3>
          <span
            className="text-xs px-3 py-1 rounded font-mono border uppercase tracking-widest font-bold"
            style={{
              borderColor: getStatusColor(project.status),
              color: getStatusColor(project.status),
              backgroundColor: `${getStatusColor(project.status)}15`
            }}
          >
            {project.status}
          </span>
        </div>

        <p className="text-gray-300 font-[Inter] leading-relaxed mb-6">
          {project.description}
        </p>

        <div className="mb-6">
          <p className="text-xs font-bold text-[#803014] uppercase tracking-wider mb-2">Stack</p>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t: string, i: number) => (
              <span key={i} className="bg-[#1E0F05] text-[#C4A86A] text-xs px-2 py-1 rounded font-mono border border-[#803014]/50">
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-[#1E0F05] border-l-4 border-[#8B5CF6] p-4 rounded-r">
          <p className="text-[#8B5CF6] font-bold text-xs uppercase tracking-wider mb-1">Vision</p>
          <p className="text-gray-400 text-sm font-[Inter] italic">"{project.vision}"</p>
        </div>
      </motion.div>
    </div>
  );
}

export default function LabSection() {
  return (
    <section className="relative w-full min-h-screen bg-[#1E0F05] text-white py-20 px-4 md:px-8 flex flex-col items-center overflow-x-hidden">
      <BackgroundPattern variant="lab" />

      {/* Global fonts if not injected elsewhere */}
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Inter:wght@400;600;700&display=swap');
        .font-\\[Cinzel\\] { font-family: 'Cinzel', serif; }
        .font-\\[Inter\\] { font-family: 'Inter', sans-serif; }
      `}} />

      <div className="relative z-10 w-full max-w-6xl flex flex-col items-center">

        <h1 className="text-4xl md:text-6xl font-[Cinzel] font-bold text-[#D9A63E] mb-4 text-center">
          {labData.pageTitle}
        </h1>
        <p className="text-[#C4A86A] text-lg md:text-xl text-center max-w-2xl mb-8 font-[Inter]">
          {labData.pageSubtitle}
        </p>

        <div className="w-full max-w-4xl bg-[#2D1A0A]/50 border border-[#803014]/30 rounded-lg p-6 mb-20">
          <p className="text-gray-300 font-[Inter] leading-relaxed text-center italic">
            {labData.intro}
          </p>
        </div>

        <div className="w-full flex flex-col mb-24">
          {labData.projects.map((project, idx) => (
            <SafeCard key={idx} project={project} />
          ))}
        </div>

        <div className="w-full max-w-2xl flex flex-col items-center border-t border-[#803014]/50 pt-16">
          <h2 className="font-[Cinzel] text-2xl text-[#C4A86A] mb-8 text-center">System Log</h2>
          <Terminal />
        </div>

      </div>
    </section>
  );
}