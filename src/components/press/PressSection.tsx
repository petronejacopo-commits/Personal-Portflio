'use client';

import React from 'react';
import pressData from '../../lib/data/press.json';
import BackgroundPattern from '../ui/BackgroundPattern';

export default function PressSection() {
  return (
    <section className="relative w-full min-h-screen bg-[#1E0F05] text-white py-20 px-4 md:px-8 flex flex-col items-center overflow-x-hidden">
      <BackgroundPattern variant="press" />

      {/* Global fonts if not injected elsewhere */}
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Inter:wght@400;600;700&display=swap');
        .font-\\[Cinzel\\] { font-family: 'Cinzel', serif; }
        .font-\\[Inter\\] { font-family: 'Inter', sans-serif; }
      `}} />

      <div className="relative z-10 w-full max-w-5xl flex flex-col items-center">

        <div className="flex flex-col items-center mb-4">
          <h1 className="text-4xl md:text-6xl font-[Cinzel] font-bold text-[#D9A63E] mb-4 text-center">
            {pressData.pageTitle}
          </h1>
          <div className="font-[Space_Grotesk] text-[#D9A63E] text-xs border border-[#D9A63E] px-3 py-1 mt-2">
            Blocksmith Studio © 2020-2026
          </div>
        </div>
        <p className="text-[#C4A86A] text-lg md:text-xl text-center max-w-2xl mb-16 font-[Inter]">
          {pressData.pageSubtitle}
        </p>

        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">

          {/* Logo Download Section */}
          <div className="lg:col-span-1 bg-[#1A0F05] border border-[#803014] rounded-lg p-8 flex flex-col items-center justify-center shadow-lg">
            <h2 className="text-[#D9A63E] font-[Cinzel] text-xl font-bold mb-6">Logos & Assets</h2>
            <div className="w-32 h-32 bg-[#2D1A0A] border-2 border-dashed border-[#D9A63E] flex items-center justify-center rounded-lg mb-6">
              <span className="text-[#D9A63E] font-bold font-mono">LOGO</span>
            </div>
            <button className="bg-[#D9A63E] text-[#1E0F05] px-6 py-2 rounded font-bold hover:bg-white transition-colors">
              Download Kit
            </button>
          </div>

          {/* Bio Section */}
          <div className="lg:col-span-2 bg-[#2D1A0A]/50 border border-[#803014]/50 rounded-lg p-8 shadow-lg">
            <h2 className="text-[#D9A63E] font-[Cinzel] text-2xl font-bold mb-4 border-b border-[#803014] pb-2 inline-block">
              Founder Bio
            </h2>
            <p className="text-gray-300 font-[Inter] leading-relaxed mb-8">
              {pressData.bio}
            </p>

            <h2 className="text-[#D9A63E] font-[Cinzel] text-2xl font-bold mb-4 border-b border-[#803014] pb-2 inline-block">
              Team Bio
            </h2>
            <p className="text-gray-300 font-[Inter] leading-relaxed">
              {pressData.teamBio}
            </p>
          </div>

        </div>

        {/* Press Releases Section */}
        <div className="w-full">
          <h2 className="text-3xl font-[Cinzel] font-bold text-[#F5D64E] mb-8 text-center border-b border-[#803014] pb-2 max-w-sm mx-auto">
            Comunicati Stampa
          </h2>

          <div className="flex flex-col space-y-6">
            {pressData.pressReleases.map((release, idx) => (
              <div
                key={idx}
                className="bg-[#1A0F05] border-l-4 border-[#F5D64E] p-6 rounded shadow-md hover:translate-x-2 transition-transform duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <h3 className="text-xl font-[Cinzel] font-bold text-[#D9A63E] max-w-2xl">
                    {release.title}
                  </h3>
                  <span className="text-[#C4A86A] text-sm font-mono mt-2 md:mt-0 whitespace-nowrap">
                    {release.date}
                  </span>
                </div>
                <p className="text-gray-300 font-[Inter] leading-relaxed">
                  {release.text}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}