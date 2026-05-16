'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import aboutData from '@/lib/data/about.json';
import ScrollReveal from '@/components/ui/ScrollReveal';
import ProgressBar from '@/components/ui/ProgressBar';
import TimelineItem from '@/components/ui/TimelineItem';
import { parallaxEffect } from '@/lib/animations';

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'gear':
      return (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#D4A843" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3"></circle>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
        </svg>
      );
    case 'shield':
      return (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#D4A843" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>
      );
    case 'portal':
      return (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#D4A843" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 12h20"></path>
          <path d="M12 2v20"></path>
          <path d="m4.93 4.93 14.14 14.14"></path>
          <path d="m19.07 4.93-14.14 14.14"></path>
        </svg>
      );
    default:
      return null;
  }
};

export default function AboutSection() {
  const { bio, stats, specialAbility, skills, timeline } = aboutData;
  const containerRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (bgRef.current) {
      const isMobile = window.innerWidth < 768;
      parallaxEffect(bgRef.current, 0.1, isMobile);
    }
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="relative pt-[80px] pb-[80px] px-[32px] overflow-hidden">

      {/* Texture Background */}
      <div
        ref={bgRef}
        className="absolute inset-[-10%] w-[120%] h-[120%] will-change-transform z-0"
        style={{ transform: "translate3d(0,0,0)" }}
      >
        <Image
          src="/assets/images/backgrounds/bg-texture-1.webp"
          alt=""
          fill
          className="object-cover opacity-20"
        />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto">
        {/* SEZIONE 1: JACOPO PETRONE */}
        <section className="mb-20">
          <ScrollReveal>
            <h2 className="font-title text-3xl text-amber-500 mb-2 uppercase tracking-widest">JACOPO PETRONE</h2>
            <p className="font-sans text-lg text-gray-400 mb-8">Fondatore & Backend Architect</p>
          </ScrollReveal>

          <div className="bg-gray-900 p-10 border-l-[4px] border-amber-500 mb-12">
            {bio.map((paragraph, index) => (
              <ScrollReveal key={index} direction="up" delay={0.15 * index}>
                <p className="font-sans text-gray-400 mb-4 leading-relaxed text-sm md:text-base">
                  {paragraph}
                </p>
              </ScrollReveal>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
            {stats.map((stat, index) => (
              <ProgressBar key={index} label={stat.label} value={stat.value} />
            ))}
          </div>

          <ScrollReveal direction="up">
            <div className="bg-gray-900 border border-amber-500 p-4">
              <p className="font-ui text-amber-500 text-center uppercase tracking-widest text-sm">
                {specialAbility}
              </p>
            </div>
          </ScrollReveal>
        </section>

        {/* SEZIONE 2: COMPETENZE */}
        <section className="mb-20">
          <ScrollReveal>
            <h2 className="font-title text-3xl text-amber-500 mb-8 mt-16 uppercase tracking-widest">Competenze</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 0.15}>
                <div className="bg-gray-900 p-6 border-t-[2px] border-amber-500 h-full">
                  <div className="mb-6">
                    {getIcon(skill.icon)}
                  </div>
                  <h3 className="font-title text-xl text-white mb-4 h-[56px]">{skill.title}</h3>
                  <ul className="flex flex-col gap-3">
                    {skill.items.map((item, i) => (
                      <li key={i} className="font-sans text-sm text-gray-400 flex items-start">
                        <span className="text-amber-500 mr-2 mt-1 text-xs">▹</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* SEZIONE 3: TIMELINE */}
        <section>
          <ScrollReveal>
            <h2 className="font-title text-3xl text-amber-500 mb-8 mt-16 uppercase tracking-widest">La Tabella di Marcia</h2>
          </ScrollReveal>
          <div className="pl-2 md:pl-8">
            {timeline.map((event, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 0.2}>
                <TimelineItem
                  year={event.year}
                  title={event.title}
                  description={event.description}
                  status={event.status as "completed" | "in-progress" | "planned"}
                  isLast={index === timeline.length - 1}
                />
              </ScrollReveal>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}