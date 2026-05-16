'use client';

import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface GameCardProps {
  title: string;
  subtitle: string;
  image: string;
  href?: string;
  category?: string;
  className?: string;
}

export default function GameCard({
  title,
  subtitle,
  image,
  href,
  category,
  className = '',
}: GameCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const requestRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    // Disable on mobile roughly
    if (window.innerWidth < 768) return;
    if (!containerRef.current || !imageRef.current) return;

    if (requestRef.current) cancelAnimationFrame(requestRef.current);

    requestRef.current = requestAnimationFrame(() => {
      const { left, top, width, height } = containerRef.current!.getBoundingClientRect();
      const x = (e.clientX - left - width / 2) / (width / 2);
      const y = (e.clientY - top - height / 2) / (height / 2);

      // Max 15px displacement
      if (imageRef.current) {
        imageRef.current.style.transform = `translate3d(${x * 15}px, ${y * 15}px, 0) scale(1.1)`;
      }
    });
  };

  const handleMouseLeave = () => {
    if (requestRef.current) cancelAnimationFrame(requestRef.current);
    if (imageRef.current) {
      imageRef.current.style.transform = `translate3d(0px, 0px, 0) scale(1.1)`;
    }
  };

  const innerContent = (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden bg-gray-900 border-l-[2px] border-amber-500 p-[24px] transition-all duration-300 hover:-translate-y-1 hover:border-l-[4px] hover:border-orange-700 flex flex-col group ${className}`}
    >
      <div className="relative h-[200px] w-full overflow-hidden mb-4 rounded-sm bg-black">
        <Image
          ref={imageRef}
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-200 ease-out will-change-transform scale-110"
          style={{ transform: `translate3d(0, 0, 0) scale(1.1)` }}
        />
      </div>
      {category && (
        <span className="text-amber-500 font-ui text-xs uppercase tracking-widest mb-2">
          {category}
        </span>
      )}
      <h3 className="font-title text-xl text-white mb-1">{title}</h3>
      <p className="font-sans text-sm text-gray-400">{subtitle}</p>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block w-full">
        {innerContent}
      </Link>
    );
  }

  return innerContent;
}