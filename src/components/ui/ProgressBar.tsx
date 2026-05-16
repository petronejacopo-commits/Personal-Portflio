'use client';

import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ProgressBarProps {
  label: string;
  value: number;
  className?: string;
}

export default function ProgressBar({ label, value, className = '' }: ProgressBarProps) {
  const barRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!barRef.current || !containerRef.current) return;

    gsap.fromTo(
      barRef.current,
      { width: '0%' },
      {
        width: `${value}%`,
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
        },
      }
    );
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className={`flex flex-col gap-2 ${className}`}>
      <div className="flex justify-between items-end">
        <span className="font-ui text-xs text-white uppercase tracking-widest">{label}</span>
        <span className="font-sans text-xs text-amber-500">{value}%</span>
      </div>
      <div className="h-[4px] w-full bg-gray-800 rounded-full overflow-hidden">
        <div
          ref={barRef}
          className="h-full bg-amber-500 rounded-full"
          style={{ width: '0%' }}
        />
      </div>
    </div>
  );
}