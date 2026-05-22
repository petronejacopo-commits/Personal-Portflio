'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import roadmapData from '../../lib/data/roadmap.json';
import BackgroundPattern from '../ui/BackgroundPattern';

interface Project {
  title: string;
  period: string;
  team: string;
  shortDescription: string;
  longDescription: string;
  impact?: string;
  vision?: string;
}

function TimelineItem({ project, index, align }: { project: Project; index: number; align: 'left' | 'right' }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const isLeft = align === 'left';

  return (
    <div ref={ref} className={`relative w-full flex ${isLeft ? 'justify-start md:justify-end' : 'justify-start'} my-12`}>
      {/* Central timeline node marker */}
      <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-[#D9A63E] border-4 border-[#1E0F05] z-20" />

      <motion.div
        initial={{ opacity: 0, x: isLeft ? -50 : 50, rotateY: isLeft ? -15 : 15 }}
        animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.1, type: "spring", bounce: 0.3 }}
        className={`w-[calc(100%-3rem)] ml-12 md:ml-0 md:w-5/12 ${isLeft ? 'md:mr-12' : 'md:ml-12'}`}
      >
        <div className="bg-[#2D1A0A] border border-[#803014] rounded-lg p-6 shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-1 h-full bg-[#D9A63E]" />

          <div className="flex justify-between items-start mb-2">
            <h3 className="font-[Cinzel] text-2xl font-bold text-[#D9A63E]">{project.title}</h3>
            <span className="bg-[#1E0F05] text-[#C4A86A] text-xs px-2 py-1 rounded font-mono border border-[#803014]">
              {project.period}
            </span>
          </div>

          <p className="text-xs text-gray-500 font-mono mb-4">Team: {project.team}</p>
          <p className="text-white font-bold mb-4">{project.shortDescription}</p>
          <p className="text-gray-400 text-sm mb-4 leading-relaxed">{project.longDescription}</p>

          {project.impact && (
            <div className="mt-4 pt-4 border-t border-[#803014]/50">
              <span className="text-xs font-bold text-[#10B981] uppercase tracking-wider block mb-1">Impact</span>
              <p className="text-sm text-gray-300">{project.impact}</p>
            </div>
          )}

          {project.vision && (
            <div className="mt-4 pt-4 border-t border-[#803014]/50">
              <span className="text-xs font-bold text-[#8B5CF6] uppercase tracking-wider block mb-1">Vision</span>
              <p className="text-sm text-gray-300">{project.vision}</p>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}

export default function RoadmapSection() {
  return (
    <section className="relative w-full min-h-screen bg-[#1E0F05] text-white py-20 px-4 md:px-8 overflow-hidden flex flex-col items-center">
      <BackgroundPattern variant="roadmap" />

      {/* Global fonts if not injected elsewhere */}
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Space+Grotesk:wght@500;700&display=swap');
        .font-\\[Cinzel\\] { font-family: 'Cinzel', serif; }
        .font-\\[Space_Grotesk\\] { font-family: 'Space Grotesk', sans-serif; }
      `}} />

      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center">
        <h1 className="text-4xl md:text-6xl font-[Cinzel] font-bold text-[#D9A63E] mb-6 text-center">
          {roadmapData.pageTitle}
        </h1>

        <p className="text-xl md:text-2xl font-[Space_Grotesk] text-[#F5D64E] text-center max-w-4xl mb-24 italic border-l-4 border-r-4 border-[#803014] px-8 py-4">
          "{roadmapData.qualityMotto}"
        </p>

        {/* Central visual line for desktop */}
        <div className="absolute top-64 bottom-0 left-4 md:left-1/2 transform md:-translate-x-1/2 w-1 bg-[#803014]/30 z-0" />

        {/* SECTION: Completati */}
        <div className="w-full mt-12 relative z-10">
          <div className="sticky top-24 bg-[#1E0F05]/90 backdrop-blur border border-[#803014] inline-block px-6 py-2 rounded-full mx-auto left-4 md:left-1/2 transform md:-translate-x-1/2 mb-12 shadow-[0_0_15px_#10B98130]">
            <h2 className="text-[#10B981] font-bold tracking-widest uppercase">{roadmapData.completedTitle}</h2>
          </div>
          <div className="w-full flex flex-col relative">
            {roadmapData.completed.map((project, idx) => (
              <TimelineItem key={`comp-${idx}`} project={project} index={idx} align={idx % 2 === 0 ? 'left' : 'right'} />
            ))}
          </div>
        </div>

        {/* SECTION: In Corso */}
        <div className="w-full mt-32 relative z-10">
          <div className="sticky top-24 bg-[#1E0F05]/90 backdrop-blur border border-[#803014] inline-block px-6 py-2 rounded-full mx-auto left-4 md:left-1/2 transform md:-translate-x-1/2 mb-12 shadow-[0_0_15px_#F5D64E30]">
            <h2 className="text-[#F5D64E] font-bold tracking-widest uppercase">{roadmapData.inProgressTitle}</h2>
          </div>
          <div className="w-full flex flex-col relative">
            {roadmapData.inProgress.map((project, idx) => (
              <TimelineItem key={`prog-${idx}`} project={project} index={idx} align={idx % 2 === 0 ? 'right' : 'left'} />
            ))}
          </div>
        </div>

        {/* SECTION: Futuri */}
        <div className="w-full mt-32 mb-20 relative z-10">
          <div className="sticky top-24 bg-[#1E0F05]/90 backdrop-blur border border-[#803014] inline-block px-6 py-2 rounded-full mx-auto left-4 md:left-1/2 transform md:-translate-x-1/2 mb-12 shadow-[0_0_15px_#8B5CF630]">
            <h2 className="text-[#8B5CF6] font-bold tracking-widest uppercase">{roadmapData.futureTitle}</h2>
          </div>
          <div className="w-full flex flex-col relative">
            {roadmapData.future.map((project, idx) => (
              <TimelineItem key={`fut-${idx}`} project={project} index={idx} align={idx % 2 === 0 ? 'left' : 'right'} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}