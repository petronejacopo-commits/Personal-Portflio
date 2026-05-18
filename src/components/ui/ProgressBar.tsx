'use client';

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { textScramble } from '@/lib/anime-effects';
import anime from 'animejs';

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
  const labelRef = useRef<HTMLSpanElement>(null);
  const valueRef = useRef<HTMLSpanElement>(null);

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

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (labelRef.current) (labelRef.current as any)._interval = textScramble(labelRef.current, label, 1000);
          if (valueRef.current) (valueRef.current as any)._interval = textScramble(valueRef.current, `${value}%`, 1000);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
      if (labelRef.current) { anime.remove(labelRef.current); clearInterval((labelRef.current as any)._interval); }
      if (valueRef.current) { anime.remove(valueRef.current); clearInterval((valueRef.current as any)._interval); }
    };
  }, [label, value]);

  return (
    <div ref={containerRef} className={`flex flex-col gap-2 ${className}`}>
      <div className="flex justify-between items-end">
        <span ref={labelRef} className="font-ui text-xs text-white uppercase tracking-widest">{label}</span>
        <span ref={valueRef} className="font-sans text-xs text-amber-500">{value}%</span>
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
