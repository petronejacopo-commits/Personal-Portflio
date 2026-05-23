'use client';
import React from 'react';

export default function TeamSection() {
  return (
    <section className="w-full min-h-[50vh] bg-[#1E0F05] text-white p-8 flex flex-col items-center">
      <div className="flex flex-col items-center mb-8">
        <h1 className="text-4xl text-[#D9A63E] font-[Cinzel] mb-2">Team</h1>
        <div className="text-[#F5D64E] font-[Cinzel] text-sm mt-2">
          Jacopo Petrone © 2026
        </div>
      </div>
      <p>Mock Team Section content...</p>
    </section>
  );
}