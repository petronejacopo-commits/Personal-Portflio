'use client';

import React from 'react';
import partnersData from '../../lib/data/partners.json';
import BackgroundPattern from '../ui/BackgroundPattern';

export default function PartnersSection() {
  return (
    <section className="relative w-full min-h-screen bg-[#1E0F05] text-white py-20 px-4 md:px-8 flex flex-col items-center">
      <BackgroundPattern variant="partners" />

      {/* Global fonts if not injected elsewhere */}
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Inter:wght@400;600;700&display=swap');
        .font-\\[Cinzel\\] { font-family: 'Cinzel', serif; }
        .font-\\[Inter\\] { font-family: 'Inter', sans-serif; }
      `}} />

      <div className="relative z-10 w-full max-w-6xl flex flex-col items-center">

        <div className="flex flex-col items-center mb-4">
          <h1 className="text-4xl md:text-6xl font-[Cinzel] font-bold text-[#D9A63E] mb-4 text-center">
            {partnersData.pageTitle}
          </h1>
          <div className="font-[Space_Grotesk] text-[#D9A63E] text-xs border border-[#D9A63E] px-3 py-1 mt-2">
            Blocksmith Studio © 2020-2026
          </div>
        </div>
        <p className="text-[#C4A86A] text-lg md:text-xl text-center max-w-2xl mb-16 font-[Inter]">
          {partnersData.pageSubtitle}
        </p>

        {/* MINECRAFT PARTNERS SECTION */}
        <div className="w-full mb-24">
          <div className="flex flex-col md:flex-row gap-12">

            {/* Left Col: Info & Logos */}
            <div className="flex-1">
              <h2 className="text-3xl font-[Cinzel] font-bold text-[#D9A63E] mb-6 border-b border-[#803014] pb-2 inline-block">
                Minecraft Partners
              </h2>
              <p className="text-gray-300 mb-8 font-[Inter] leading-relaxed">
                {partnersData.minecraftIntro}
              </p>

              <h3 className="text-[#C4A86A] font-semibold mb-4 uppercase tracking-widest text-sm">Our Network</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {partnersData.minecraftPartners.map((partner, idx) => (
                  <div key={idx} className="bg-[#2D1A0A] border border-[#803014]/50 rounded p-4 flex items-center justify-center text-center transition-colors hover:border-[#D9A63E]">
                    <span className="font-semibold text-sm">{partner}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Col: Timeline */}
            <div className="w-full md:w-1/3">
              <h3 className="text-[#C4A86A] font-semibold mb-6 uppercase tracking-widest text-sm">Timeline Collaborazioni</h3>
              <div className="flex flex-col space-y-4">
                {partnersData.minecraftTimeline.map((item, idx) => (
                  <div key={idx} className="bg-[#1A0F05] border-l-4 border-[#D9A63E] p-4 rounded shadow-md">
                    <span className="text-[#D9A63E] font-bold block mb-1">{item.year}</span>
                    <span className="text-white font-[Inter]">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* OUTSIDER PARTNERS SECTION */}
        <div className="w-full mb-24">
          <div className="flex flex-col md:flex-row gap-12">

            {/* Left Col: Info & Logos */}
            <div className="flex-1">
              <h2 className="text-3xl font-[Cinzel] font-bold text-[#F5D64E] mb-6 border-b border-[#803014] pb-2 inline-block">
                Outsider Partners
              </h2>
              <p className="text-gray-300 mb-8 font-[Inter] leading-relaxed">
                {partnersData.outsiderIntro}
              </p>

              <h3 className="text-[#C4A86A] font-semibold mb-4 uppercase tracking-widest text-sm">Our Network</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {partnersData.outsiderPartners.map((partner, idx) => (
                  <div key={idx} className="bg-[#2D1A0A] border border-[#803014]/50 rounded p-4 flex items-center justify-center text-center transition-colors hover:border-[#F5D64E]">
                    <span className="font-semibold text-sm">{partner}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Col: Timeline */}
            <div className="w-full md:w-1/3">
              <h3 className="text-[#C4A86A] font-semibold mb-6 uppercase tracking-widest text-sm">Timeline Collaborazioni</h3>
              <div className="flex flex-col space-y-4">
                {partnersData.outsiderTimeline.map((item, idx) => (
                  <div key={idx} className="bg-[#1A0F05] border-l-4 border-[#F5D64E] p-4 rounded shadow-md">
                    <span className="text-[#F5D64E] font-bold block mb-1">{item.year}</span>
                    <span className="text-white font-[Inter]">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* FOOTER NOTE */}
        <div className="w-full max-w-3xl bg-[#2D1A0A] border border-[#D9A63E] rounded-lg p-8 text-center shadow-[0_0_20px_#D9A63E30]">
          <p className="text-[#D9A63E] font-bold text-lg font-[Inter]">
            {partnersData.communicationNote}
          </p>
        </div>

      </div>
    </section>
  );
}