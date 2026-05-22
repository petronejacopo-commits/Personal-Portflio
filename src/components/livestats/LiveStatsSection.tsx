'use client';

import React from 'react';
import BackgroundPattern from '../ui/BackgroundPattern';
import livestatsData from '../../lib/data/livestats.json';
import { useSlotCounter } from '../../lib/useSlotCounter';

function SlotNumber({ targetValue }: { targetValue: number }) {
  const value = useSlotCounter(targetValue);
  return <span>{value.toLocaleString()}</span>;
}

export default function LiveStatsSection() {
  return (
    <section className="relative w-full min-h-screen bg-[#1E0F05] text-white py-20 px-4 md:px-8 flex flex-col items-center">
      <BackgroundPattern variant="livestats" />

      <div className="relative z-10 max-w-5xl w-full flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl font-[Cinzel] font-bold text-[#D9A63E] mb-4 text-center">
          {livestatsData.pageTitle}
        </h1>
        <p className="text-[#C4A86A] text-center max-w-2xl mb-16">
          {livestatsData.pageSubtitle}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {livestatsData.metrics.map((metric, idx) => (
            <div
              key={idx}
              className="bg-[#2D1A0A] border border-[#803014] rounded-lg p-8 flex flex-col items-center justify-center text-center shadow-lg"
            >
              <h2 className="text-[#D9A63E] text-xl font-semibold mb-4 uppercase tracking-wider">
                {metric.label}
              </h2>
              <div className="text-5xl md:text-6xl font-mono font-bold text-white mb-6">
                <SlotNumber targetValue={metric.value} />
                {metric.label === "Uptime" || metric.label === "Workload attuale" ? "%" : ""}
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                {metric.description}
              </p>
            </div>
          ))}
        </div>

        <p className="text-[#803014] text-xs font-mono mt-16 text-center max-w-3xl">
          {livestatsData.disclaimer}
        </p>
      </div>
    </section>
  );
}