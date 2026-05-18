'use client';

import React from 'react';
import blocksmithData from '@/lib/data/blocksmith.json';
import SectionDivider from '@/components/ui/SectionDivider';
import ScrollReveal from '@/components/ui/ScrollReveal';

// Helper for inline SVG icons based on ID
const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'gear':
      return (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3"></circle>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
        </svg>
      );
    case 'brush':
      return (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08"></path>
          <path d="M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z"></path>
        </svg>
      );
    case 'chart':
      return (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 3v18h18"></path>
          <path d="m19 9-5 5-4-4-3 3"></path>
        </svg>
      );
    default:
      return null;
  }
};

export default function BlocksmithSection() {
  const { hero, storia, cosaFacciamo, comeLavoriamo, aChiCiRivolgiamo, doveSiamo, finale } = blocksmithData;

  return (
    <div className="py-[40px] px-[16px] md:py-[80px] md:px-[32px] max-w-[1000px] mx-auto">

      {/* HERO */}
      <section className="flex flex-col items-center justify-center mb-16">
        <ScrollReveal>
          <h1 className="font-title text-5xl text-amber-500 text-center mb-2">{hero.title}</h1>
          <h2 className="font-ui text-2xl text-orange-700 uppercase text-center mb-12 tracking-widest">{hero.subtitle}</h2>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <p className="font-sans text-lg text-white max-w-[700px] text-center leading-relaxed">
            {hero.paragraph}
          </p>
        </ScrollReveal>
      </section>

      {/* LA STORIA */}
      <section className="bg-gray-900 p-10 border-l-[4px] border-amber-500 mb-12">
        <ScrollReveal>
          <h2 className="font-title text-2xl text-amber-500 mb-6 tracking-widest">{storia.title}</h2>
        </ScrollReveal>
        <div className="flex flex-col gap-4">
          {storia.paragraphs.map((text, idx) => (
            <ScrollReveal key={idx} delay={0.15 * idx}>
              <p className="font-sans text-gray-400 leading-relaxed text-sm md:text-base">
                {text}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* COSA FACCIAMO */}
      <section className="mb-20 mt-16">
        <ScrollReveal>
          <h2 className="font-title text-3xl text-amber-500 mb-8 tracking-widest">{cosaFacciamo.title}</h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cosaFacciamo.items.map((item, idx) => (
            <ScrollReveal key={item.id} delay={0.1 * idx}>
              <div
                className="bg-gray-900 p-8 h-full"
                style={{ borderTop: `3px solid ${item.color}` }}
              >
                <div className="mb-6" style={{ color: item.color }}>
                  {getIcon(item.icon)}
                </div>
                <h3 className="font-title text-xl text-white mb-4 tracking-widest">{item.title}</h3>
                <p className="font-sans text-sm text-gray-400 leading-relaxed">
                  {item.text}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* COME LAVORIAMO */}
      <section className="bg-gray-900 p-10 border-l-[4px] border-amber-500 mb-20 mt-16">
        <ScrollReveal>
          <h2 className="font-title text-3xl text-amber-500 mb-8 tracking-widest">{comeLavoriamo.title}</h2>
        </ScrollReveal>
        <div className="flex flex-col gap-4">
          {comeLavoriamo.paragraphs.map((text, idx) => (
            <ScrollReveal key={idx} delay={0.1 * idx}>
              <p className="font-sans text-gray-400 leading-relaxed text-sm md:text-base">
                {text}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* A CHI CI RIVOLGIAMO */}
      <section className="mb-20 mt-16">
        <ScrollReveal>
          <h2 className="font-title text-3xl text-amber-500 mb-8 tracking-widest">{aChiCiRivolgiamo.title}</h2>
        </ScrollReveal>
        <div className="max-w-[800px]">
          <ScrollReveal delay={0.1}>
            <p className="font-sans text-lg text-white leading-relaxed">
              {aChiCiRivolgiamo.paragraphs[0]}
            </p>
          </ScrollReveal>
          <br />
          <ScrollReveal delay={0.2}>
            <p className="font-sans text-lg text-white leading-relaxed">
              {aChiCiRivolgiamo.paragraphs[1]}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* DOVE SIAMO */}
      <section className="bg-gray-900 p-10 border-l-[4px] border-orange-700 mb-20 mt-16">
        <ScrollReveal>
          <h2 className="font-title text-3xl text-amber-500 mb-8 tracking-widest">{doveSiamo.title}</h2>
        </ScrollReveal>
        <div className="flex flex-col gap-4">
          {doveSiamo.paragraphs.map((text, idx) => (
            <ScrollReveal key={idx} delay={0.1 * idx}>
              <p className="font-sans text-gray-400 leading-relaxed text-sm md:text-base">
                {text}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* FINALE */}
      <section className="mt-16 flex flex-col items-center">
        <ScrollReveal>
          <SectionDivider />
          <h2 className="font-title text-2xl text-amber-500 mt-8 tracking-widest text-center">
            {finale.title}
          </h2>
        </ScrollReveal>
      </section>

    </div>
  );
}