'use client';
import React from 'react';

export default function MyDevsSection() {
  return (
    <section className="relative w-full min-h-[50vh] bg-[#1E0F05] text-white p-8">
      <h1 className="text-4xl text-[#D9A63E] font-[Cinzel] mb-8">My Devs</h1>
      <p>Mock MyDevs Section content...</p>

      {/* Bottom right badge */}
      <div className="absolute bottom-8 right-8 font-[Space_Grotesk] text-[#D9A63E] text-xs border border-[#D9A63E] px-3 py-1">
        Blocksmith Studio © 2020-2026
      </div>
    </section>
  );
}