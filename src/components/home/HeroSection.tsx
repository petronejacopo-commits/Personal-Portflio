'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import { parallaxEffect } from '@/lib/animations';
import PulseAnimation from '@/components/ui/PulseAnimation';
import AmberButton from '@/components/ui/AmberButton';

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const layer1Ref = useRef<HTMLDivElement>(null);
  const layer2Ref = useRef<HTMLDivElement>(null);
  const layer3Ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;
    const isMobile = window.innerWidth < 768;

    if (layer1Ref.current) parallaxEffect(layer1Ref.current, 0.2, isMobile);
    if (layer2Ref.current) parallaxEffect(layer2Ref.current, 0.5, isMobile);
    if (layer3Ref.current && !isMobile) parallaxEffect(layer3Ref.current, 0.8, isMobile);
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden bg-black flex items-center justify-center"
    >
      {/* Livello 1: Sfondo */}
      <div
        ref={layer1Ref}
        className="absolute inset-[-10%] w-[120%] h-[120%] will-change-transform z-0"
        style={{ transform: "translate3d(0,0,0)" }}
      >
        <Image
          src="/assets/images/backgrounds/bg-texture-1.webp"
          alt="Background Texture"
          fill loading="eager"
          priority
          className="object-cover opacity-60"
        />
      </div>

      {/* Livello 2: Geometrico */}
      <div
        ref={layer2Ref}
        className="absolute inset-[-10%] w-[120%] h-[120%] mix-blend-overlay will-change-transform z-0"
        style={{ transform: "translate3d(0,0,0)" }}
      >
        <Image
          src="/assets/images/backgrounds/bg-geometric-1.webp"
          alt="Geometric Background"
          fill loading="eager"
          priority
          className="object-cover opacity-50"
        />
      </div>

      {/* Livello 3: Accenti (Hidden on mobile) */}
      <div
        ref={layer3Ref}
        className="absolute inset-[-10%] w-[120%] h-[120%] mix-blend-soft-light will-change-transform z-0 hidden md:block"
        style={{ transform: "translate3d(0,0,0)" }}
      >
        <Image
          src="/assets/images/backgrounds/bg-amber-accents.webp"
          alt="Amber Accents"
          fill loading="eager"
          priority
          className="object-cover opacity-80"
        />
      </div>

      {/* Contenuto Centrale */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <PulseAnimation className="mb-6">
          <div className="relative w-[80px] h-[80px] md:w-[120px] md:h-[120px]">
            <Image
              src="/assets/images/logo/logo-raccoon.svg"
              alt="Procione Logo"
              fill loading="eager"
              className="object-contain"
              priority
            />
          </div>
        </PulseAnimation>

        <h1 className="font-title text-3xl md:text-6xl text-white tracking-widest uppercase mb-4">
          PROCIONE
        </h1>

        <p className="font-sans text-lg md:text-xl text-amber-500 mb-8">
          Game Designer & UX/UI Specialist
        </p>

        <div className="flex flex-col md:flex-row gap-4 mt-8">
          <AmberButton href="/blocksmith" variant="primary">
            Esplora Progetti
          </AmberButton>
          <AmberButton href="/chi-sono" variant="secondary">
            Chi Sono
          </AmberButton>
        </div>
      </div>

      {/* Indicatore Scroll */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-[bounce-diamond_2s_infinite_ease-in-out]">
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 0L10 5L5 10L0 5L5 0Z" fill="#D4A843"/>
        </svg>
      </div>
    </section>
  );
}