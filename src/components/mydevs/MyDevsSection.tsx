'use client';

import React from 'react';
import mydevsData from '@/lib/data/mydevs.json';
import AmberButton from '@/components/ui/AmberButton';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { ThreeJsPreview, DiscordPreview, SkillTreePreview, DashboardPreview } from './Previews';

const renderPreview = (type: string) => {
  switch (type) {
    case '3d': return <ThreeJsPreview />;
    case 'discord': return <DiscordPreview />;
    case 'skilltree': return <SkillTreePreview />;
    case 'dashboard': return <DashboardPreview />;
    default: return null;
  }
};

export default function MyDevsSection() {
  const { intro, devs } = mydevsData;

  return (
    <div className="py-[40px] px-[16px] md:py-[80px] md:px-[32px] max-w-[1200px] mx-auto">

      {/* INTRO */}
      <section className="mb-16">
        <ScrollReveal>
          <h1 className="font-title text-3xl text-amber-500 mb-2 uppercase tracking-widest">{intro.title}</h1>
          <p className="font-sans text-lg text-gray-400 mb-12">{intro.subtitle}</p>
        </ScrollReveal>
      </section>

      {/* QUATTRO CARD TECNICHE */}
      <section className="flex flex-col gap-12">
        {devs.map((dev) => (
          <ScrollReveal key={dev.id} delay={0.1}>
            <div className="flex flex-col gap-4">

              {/* Card Principale */}
              <div
                className="bg-gray-900 p-10 relative flex flex-col items-start"
                style={{ borderLeft: `3px solid ${dev.color}` }}
              >
                {dev.badge && (
                  <div className="absolute top-4 right-4 bg-[#DC4424] text-[#1E0F05] font-ui text-[10px] uppercase tracking-widest px-2 py-1 font-bold">
                    {dev.badge}
                  </div>
                )}

                <div className="text-[64px] mb-4 leading-none select-none">
                  {dev.icon}
                </div>

                <h2 className="font-title text-3xl text-white uppercase tracking-widest mb-1">{dev.title}</h2>
                <h3 className="font-ui text-md uppercase tracking-widest mb-6" style={{ color: dev.color }}>
                  {dev.subtitle}
                </h3>

                <p className="font-sans text-base text-gray-300 leading-relaxed mb-8 max-w-[800px]">
                  {dev.story}
                </p>

                <div className="mb-10 w-full">
                  <h4 className="font-ui text-xs text-gray-500 uppercase tracking-widest mb-4">Features</h4>
                  <ul className="flex flex-col gap-3">
                    {dev.features.map((feature, index) => (
                      <ScrollReveal key={index} direction="left" delay={index * 0.1}>
                        <li className="font-sans text-sm text-gray-400 flex items-center">
                          <span className="mr-3 text-xs" style={{ color: dev.color }}>◆</span>
                          {feature}
                        </li>
                      </ScrollReveal>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto">
                  <AmberButton
                    href={dev.button.href}
                    variant={dev.button.variant as 'primary' | 'secondary' | 'ghost'}
                  >
                    {dev.button.text}
                  </AmberButton>
                </div>
              </div>

              {/* Box Anteprima */}
              <div className="bg-black border border-gray-800 p-4 w-full relative">
                <div className="absolute top-4 left-4 z-10 font-ui text-xs text-gray-500 uppercase tracking-widest">
                  Anteprima
                </div>
                {renderPreview(dev.previewType)}
              </div>

            </div>
          </ScrollReveal>
        ))}
      </section>

    </div>
  );
}