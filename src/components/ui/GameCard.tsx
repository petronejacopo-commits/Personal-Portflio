'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';

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
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / (width / 2);
    const y = (e.clientY - top - height / 2) / (height / 2);

    // Max 15px displacement
    setOffset({ x: x * 15, y: y * 15 });
  };

  const handleMouseLeave = () => {
    setOffset({ x: 0, y: 0 });
  };

  const innerContent = (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden bg-gray-900 border-l-[2px] border-amber-500 p-[24px] transition-all duration-300 hover:-translate-y-1 hover:border-l-[4px] hover:border-orange-700 flex flex-col group ${className}`}
    >
      <div className="relative h-[200px] w-full overflow-hidden mb-4 rounded-sm bg-black">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-200 ease-out will-change-transform scale-110"
          style={{ transform: `translate3d(${offset.x}px, ${offset.y}px, 0) scale(1.1)` }}
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