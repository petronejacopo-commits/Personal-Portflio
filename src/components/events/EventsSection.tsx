'use client';

import React from 'react';
import eventsData from '../../lib/data/events.json';
import BackgroundPattern from '../ui/BackgroundPattern';

export default function EventsSection() {
  return (
    <section className="relative w-full min-h-screen bg-[#1E0F05] text-white py-20 px-4 md:px-8 flex flex-col items-center overflow-hidden">
      <BackgroundPattern variant="events" />

      {/* Global fonts if not injected elsewhere */}
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Inter:wght@400;600;700&display=swap');
        .font-\\[Cinzel\\] { font-family: 'Cinzel', serif; }
        .font-\\[Inter\\] { font-family: 'Inter', sans-serif; }
      `}} />

      <div className="relative z-10 w-full max-w-6xl flex flex-col items-center">

        <h1 className="text-4xl md:text-6xl font-[Cinzel] font-bold text-[#D9A63E] mb-4 text-center">
          {eventsData.pageTitle}
        </h1>
        <p className="text-[#C4A86A] text-lg md:text-xl text-center max-w-2xl mb-16 font-[Inter]">
          {eventsData.pageSubtitle}
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
          {eventsData.events.map((evt, idx) => (
            <div
              key={idx}
              className="bg-[#2D1A0A]/80 backdrop-blur border border-[#803014] rounded-lg p-8 flex flex-col justify-between shadow-[0_0_15px_#1E0F05] transition-all hover:border-[#D9A63E] hover:-translate-y-1"
            >
              <div>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <h2 className="text-2xl font-[Cinzel] font-bold text-[#D9A63E] mb-2 md:mb-0">
                    {evt.name}
                  </h2>
                  <span className="bg-[#1E0F05] text-[#C4A86A] text-xs px-3 py-1 rounded font-mono border border-[#803014] whitespace-nowrap">
                    {evt.date}
                  </span>
                </div>

                <div className="flex items-center text-gray-400 text-sm mb-2 font-[Inter]">
                  <span className="font-bold text-[#DC4424] mr-2">📍</span> {evt.location}
                </div>

                <div className="flex items-center text-gray-400 text-sm mb-6 font-[Inter]">
                  <span className="font-bold text-[#F5D64E] mr-2">👥</span> {evt.team}
                </div>

                <div className="bg-[#1A0F05] border-l-4 border-[#8B5CF6] p-3 mb-6 rounded-r">
                  <p className="text-[#8B5CF6] font-bold text-sm uppercase tracking-wider mb-1">Activity</p>
                  <p className="text-gray-300 font-[Inter]">{evt.activity}</p>
                </div>

                <p className="text-gray-300 font-[Inter] leading-relaxed mb-8">
                  {evt.description}
                </p>
              </div>

              <div className="border-t border-[#803014]/50 pt-6 mt-auto">
                <p className="text-[#F5D64E] italic font-[Inter] text-sm leading-relaxed">
                  {evt.testimonial}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}