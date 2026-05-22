'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import techData from '../../lib/data/techstack.json';

gsap.registerPlugin(ScrollTrigger);

// Utility to generate a consistent color per category
const getCategoryColor = (category: string) => {
  switch (category) {
    case 'Backend': return '#D9A63E'; // Gold
    case 'Frontend': return '#DC4424'; // Red
    case '3D & Animation': return '#803014'; // Darker Rust
    case 'Database': return '#F5D64E'; // Light Yellow
    case 'DevOps': return '#4A90E2'; // Blue
    default: return '#cccccc';
  }
};

export default function TechStack() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!containerRef.current || cardsRef.current.length === 0) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardsRef.current,
        {
          opacity: 0,
          scale: 0.3,
          rotateX: 45,
          y: 60,
        },
        {
          opacity: 1,
          scale: 1,
          rotateX: 0,
          y: 0,
          duration: 0.8,
          stagger: {
            amount: 1,
            grid: [3, 4], // Desktop grid reference for GSAP wave calculation
            from: 'center',
            ease: 'back.out(1.4)'
          },
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          }
        }
      );
    }, containerRef);

    return () => ctx.revert(); // Automatically cleans up ScrollTrigger instances attached to context
  }, []);

  return (
    <section ref={containerRef} className="w-full py-20 px-4 md:px-8 bg-[#0D0D0D] text-white">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-[#D9A63E]">{techData.pageTitle}</h2>
        <p className="text-gray-400 mb-12 text-center max-w-2xl">{techData.pageSubtitle}</p>

        {/* Responsive Grid: 3 cols mobile, 4 tablet, 6 desktop */}
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6 w-full">
          {techData.technologies.map((tech, index) => {
            const color = getCategoryColor(tech.category);
            return (
              <div
                key={tech.name}
                ref={(el) => {
                  cardsRef.current[index] = el;
                }}
                className="group relative flex flex-col items-center justify-center p-4 bg-[#1A1A1A] border border-[#262626] rounded-xl overflow-hidden cursor-pointer transition-transform duration-300 hover:-translate-y-2 hover:shadow-[0_0_15px_rgba(217,166,62,0.3)]"
                style={{ perspective: '1000px' }}
              >
                {/* CSS Pulse Animation overlay on Hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at center, ${color}20 0%, transparent 70%)`,
                    animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
                  }}
                />

                {/* Placeholder Icon (Colored Circle) */}
                <div
                  className="w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${color}40`, border: `2px solid ${color}` }}
                >
                  <div className="w-4 h-4 rounded-full" style={{ backgroundColor: color }} />
                </div>

                <span className="text-sm md:text-base font-semibold text-center group-hover:text-[#D9A63E] transition-colors">
                  {tech.name}
                </span>
                <span className="text-xs text-gray-500 mt-1 text-center">
                  {tech.category}
                </span>
              </div>
            );
          })}
        </div>

        <p className="mt-12 text-sm text-gray-500 italic text-center max-w-3xl">
          {techData.footerNote}
        </p>

        {/* Define global CSS pulse for inline style if missing in global css */}
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: .5; }
          }
        `}} />
      </div>
    </section>
  );
}