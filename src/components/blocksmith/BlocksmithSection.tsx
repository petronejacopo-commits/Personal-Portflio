'use client';

import React from 'react';
import blocksmithData from '@/lib/data/blocksmith.json';
import SectionDivider from '@/components/ui/SectionDivider';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { sectionWaveTransition } from '@/lib/anime-effects';



// Helper for inline SVG icons based on ID
export default function BlocksmithSection() {
  const { hero, storia, cosaFacciamo, comeLavoriamo, aChiCiRivolgiamo, doveSiamo, finale } = blocksmithData;

  const section1Ref = React.useRef<HTMLElement>(null);
  const section2Ref = React.useRef<HTMLElement>(null);
  const section3Ref = React.useRef<HTMLElement>(null);
  const section4Ref = React.useRef<HTMLElement>(null);
  const section5Ref = React.useRef<HTMLElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          sectionWaveTransition(entry.target as HTMLElement);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    [section1Ref, section2Ref, section3Ref, section4Ref, section5Ref].forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);


  return (
    <div className="py-[40px] px-[16px] md:py-[80px] md:px-[32px] max-w-[1000px] mx-auto">

      {/* HERO */}
      <section className="flex flex-col items-center justify-center mb-16">
        <ScrollReveal>
          <h1 className="font-title text-5xl text-amber-500 text-center mb-2">{hero.title}</h1>
          <h2 className="font-ui text-2xl text-orange-700 uppercase text-center mb-12 tracking-widest">{hero.subtitle}</h2>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <p className="font-sans reveal-item text-lg text-white max-w-[700px] text-center leading-relaxed">
            {hero.paragraph}
          </p>
        </ScrollReveal>
      </section>

      {/* LA STORIA */}
      <section ref={section1Ref} className="bg-gray-900 p-10 border-l-[4px] border-amber-500 mb-12">
        <ScrollReveal>
          <h2 className="font-title reveal-item text-2xl text-amber-500 mb-6 tracking-widest">{storia.title}</h2>
        </ScrollReveal>
        <div className="flex flex-col gap-4">
          {storia.paragraphs.map((text, idx) => (
            <ScrollReveal key={idx} delay={0.15 * idx}>
              <p className="font-sans reveal-item text-gray-400 leading-relaxed text-sm md:text-base">
                {text}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* COSA FACCIAMO */}
      <section ref={section2Ref} className="mb-20 mt-16">
        <ScrollReveal>
          <h2 className="font-title reveal-item text-3xl text-amber-500 mb-8 tracking-widest">{cosaFacciamo.title}</h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cosaFacciamo.items.map((item, idx) => (
            <ScrollReveal key={item.id} delay={0.1 * idx}>
              <div
                className="bg-gray-900 p-8 h-full"
                style={{ borderTop: `3px solid ${item.color}` }}
              >
                <div className="mb-6" style={{ color: item.color }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
<img src={item.icon} alt="" className="w-[32px] h-[32px] object-contain"  />
                </div>
                <h3 className="font-title reveal-item text-xl text-white mb-4 tracking-widest">{item.title}</h3>
                <p className="font-sans reveal-item text-sm text-gray-400 leading-relaxed">
                  {item.text}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* COME LAVORIAMO */}
      <section ref={section3Ref} className="bg-gray-900 p-10 border-l-[4px] border-amber-500 mb-20 mt-16">
        <ScrollReveal>
          <h2 className="font-title reveal-item text-3xl text-amber-500 mb-8 tracking-widest">{comeLavoriamo.title}</h2>
        </ScrollReveal>
        <div className="flex flex-col gap-4">
          {comeLavoriamo.paragraphs.map((text, idx) => (
            <ScrollReveal key={idx} delay={0.1 * idx}>
              <p className="font-sans reveal-item text-gray-400 leading-relaxed text-sm md:text-base">
                {text}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* A CHI CI RIVOLGIAMO */}
      <section ref={section4Ref} className="mb-20 mt-16">
        <ScrollReveal>
          <h2 className="font-title reveal-item text-3xl text-amber-500 mb-8 tracking-widest">{aChiCiRivolgiamo.title}</h2>
        </ScrollReveal>
        <div className="max-w-[800px]">
          <ScrollReveal delay={0.1}>
            <p className="font-sans reveal-item text-lg text-white leading-relaxed">
              {aChiCiRivolgiamo.paragraphs[0]}
            </p>
          </ScrollReveal>
          <br />
          <ScrollReveal delay={0.2}>
            <p className="font-sans reveal-item text-lg text-white leading-relaxed">
              {aChiCiRivolgiamo.paragraphs[1]}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* DOVE SIAMO */}
      <section ref={section5Ref} className="bg-gray-900 p-10 border-l-[4px] border-orange-700 mb-20 mt-16">
        <ScrollReveal>
          <h2 className="font-title reveal-item text-3xl text-amber-500 mb-8 tracking-widest">{doveSiamo.title}</h2>
        </ScrollReveal>
        <div className="flex flex-col gap-4">
          {doveSiamo.paragraphs.map((text, idx) => (
            <ScrollReveal key={idx} delay={0.1 * idx}>
              <p className="font-sans reveal-item text-gray-400 leading-relaxed text-sm md:text-base">
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
          <h2 className="font-title reveal-item text-2xl text-amber-500 mt-8 tracking-widest text-center">
            {finale.title}
          </h2>
        </ScrollReveal>
      </section>

    </div>
  );
}