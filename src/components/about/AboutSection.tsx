'use client';
import React from 'react';

export default function AboutSection() {
  return (
    <section className="w-full min-h-[50vh] bg-[#1E0F05] text-white p-8 flex flex-col items-center">
      <h1 className="text-4xl text-[#D9A63E] font-[Cinzel] mb-8">About</h1>
      <p className="max-w-2xl text-center mb-8">
        Mock biography content detailing the history of Jacopo Petrone.
      </p>

      <div className="text-[#F5D64E] font-[Cinzel] text-sm mt-4">
        Jacopo Petrone © 2026
      </div>
    </section>
  );
}