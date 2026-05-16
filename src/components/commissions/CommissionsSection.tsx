'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import commissionsData from '@/lib/data/commissions.json';
import AmberButton from '@/components/ui/AmberButton';
import SectionDivider from '@/components/ui/SectionDivider';
import GameCard from '@/components/ui/GameCard';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function CommissionsSection() {
  const { intro, uxui, lore, social } = commissionsData;
  const galleryRef = useRef<HTMLDivElement>(null);

  const scrollGallery = (direction: 'left' | 'right') => {
    if (galleryRef.current) {
      const scrollAmount = 316; // 300px min-width + 16px gap
      const currentScroll = galleryRef.current.scrollLeft;
      galleryRef.current.scrollTo({
        left: direction === 'left' ? currentScroll - scrollAmount : currentScroll + scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="pt-[80px] pb-[80px] px-[32px] max-w-[1200px] mx-auto">

      {/* INTRO */}
      <section className="mb-16">
        <ScrollReveal>
          <h1 className="font-title text-3xl text-amber-500 mb-2 uppercase tracking-widest">{intro.title}</h1>
          <p className="font-sans text-lg text-gray-400 mb-12">{intro.subtitle}</p>
        </ScrollReveal>
      </section>

      {/* SEZIONE UX/UI DESIGN */}
      <section className="mb-20">
        <ScrollReveal>
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-title text-2xl text-white uppercase tracking-widest">{uxui.title}</h3>

            {/* Frecce navigazione */}
            <div className="flex gap-2">
              <AmberButton variant="ghost" onClick={() => scrollGallery('left')} className="p-2 !px-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m15 18-6-6 6-6"/>
                </svg>
              </AmberButton>
              <AmberButton variant="ghost" onClick={() => scrollGallery('right')} className="p-2 !px-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 18 6-6-6-6"/>
                </svg>
              </AmberButton>
            </div>
          </div>
        </ScrollReveal>

        {/* Galleria Orizzontale */}
        <div
          ref={galleryRef}
          className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory hide-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {uxui.items.map((item, index) => (
            <ScrollReveal key={item.id} delay={index * 0.1} className="min-w-[300px] snap-start">
              <div className="bg-gray-900 flex flex-col h-full">
                <div className="relative h-[200px] w-full bg-black">
                  <Image
                    src={item.image}
                    alt={item.caption}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <p className="font-sans text-sm text-gray-400">{item.caption}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* SEZIONE LORE DESIGN */}
      <section className="mb-20 mt-12">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-4">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#F5F0E8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4"></path>
              <path d="M14 2v6h6"></path>
              <path d="m3 12.5 3 3 7-7"></path>
            </svg>
            <h3 className="font-title text-2xl text-white uppercase tracking-widest">{lore.title}</h3>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="bg-gray-900 border border-gray-800 p-[32px]">
            <SectionDivider />
            <p className="font-sans text-lg text-gray-400 leading-relaxed text-center italic my-8">
              {lore.text}
            </p>
            <SectionDivider />
          </div>
        </ScrollReveal>
      </section>

      {/* SEZIONE SOCIAL MEDIA MANAGER */}
      <section className="mt-12">
        <ScrollReveal>
          <h3 className="font-title text-2xl text-white mb-8 uppercase tracking-widest">{social.title}</h3>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {social.items.map((item, index) => (
            <ScrollReveal key={item.id} delay={index * 0.1}>
              <GameCard
                title={item.title}
                subtitle={item.subtitle}
                image={item.image}
                category={item.category}
              />
            </ScrollReveal>
          ))}
        </div>
      </section>

    </div>
  );
}