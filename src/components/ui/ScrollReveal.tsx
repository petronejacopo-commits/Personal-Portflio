'use client';

import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { scrollReveal } from '@/lib/animations';

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  className?: string;
}

export default function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  className = '',
}: ScrollRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (containerRef.current) {
      scrollReveal(containerRef.current, direction, delay);
    }
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}