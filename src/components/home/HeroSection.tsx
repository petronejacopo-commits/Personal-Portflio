'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import PulseAnimation from '@/components/ui/PulseAnimation';
import AmberButton from '@/components/ui/AmberButton';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const layer1Ref = useRef<HTMLDivElement>(null);
  const layer2Ref = useRef<HTMLDivElement>(null);
  const layer3Ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    let mm = gsap.matchMedia();

    mm.add({
      isDesktop: "(min-width: 768px)",
      isMobile: "(max-width: 767px)"
    }, (context) => {
      let { isMobile } = context.conditions as { isMobile: boolean };

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        }
      });

      if (layer1Ref.current) {
        tl.to(layer1Ref.current, { y: -50, ease: "none" }, 0);
      }

      if (layer2Ref.current) {
        tl.to(layer2Ref.current, { y: -150, ease: "none" }, 0);
      }

      if (layer3Ref.current && !isMobile) {
        tl.to(layer3Ref.current, { y: -250, ease: "none" }, 0);
      }
    });

    return () => mm.revert();
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden bg-black flex items-center justify-center"
    >
      <div
        ref={layer1Ref}
        className="absolute inset-[-10%] w-[120%] h-[120%] will-change-transform z-0"
        style={{ transform: "translateZ(0)" }}
      >
        <Image
          src="/assets/images/backgrounds/bg-texture-1.webp"
          alt="Background Texture"
          fill
          priority
          className="object-cover opacity-60"
        />
      </div>

      <div
        ref={layer2Ref}
        className="absolute inset-[-10%] w-[120%] h-[120%] mix-blend-overlay will-change-transform z-0"
        style={{ transform: "translateZ(0)" }}
      >
        <Image
          src="/assets/images/backgrounds/bg-geometric-1.webp"
          alt="Geometric Background"
          fill
          priority
          className="object-cover opacity-50"
        />
      </div>

      <div
        ref={layer3Ref}
        className="absolute inset-[-10%] w-[120%] h-[120%] mix-blend-soft-light will-change-transform z-0 hidden md:block"
        style={{ transform: "translateZ(0)" }}
      >
        <Image
          src="/assets/images/backgrounds/bg-amber-accents.webp"
          alt="Amber Accents"
          fill
          priority
          className="object-cover opacity-80"
        />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <PulseAnimation className="mb-6">
          <div className="relative w-[80px] h-[80px] md:w-[120px] md:h-[120px]">
            <Image
              src="/assets/images/logo/logo-raccoon.svg"
              alt="Procione Logo"
              fill
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
          <AmberButton href="/progetti" variant="primary">
            Esplora Progetti
          </AmberButton>
          <AmberButton href="/chi-sono" variant="secondary">
            Chi Sono
          </AmberButton>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-[bounce-diamond_2s_infinite_ease-in-out]">
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 0L10 5L5 10L0 5L5 0Z" fill="#D4A843"/>
        </svg>
      </div>
    </section>
  );
}
