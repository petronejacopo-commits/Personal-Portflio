'use client';

import React from 'react';
import prodottiData from '../../lib/data/prodotti.json';

export default function ProdottiSection() {
  return (
    <section className="relative w-full min-h-screen bg-[#1E0F05] text-white py-20 px-4 md:px-8 flex flex-col items-center overflow-x-hidden">

      {/* Global fonts if not injected elsewhere */}
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Inter:wght@400;600;700&display=swap');
        .font-\\[Cinzel\\] { font-family: 'Cinzel', serif; }
        .font-\\[Inter\\] { font-family: 'Inter', sans-serif; }
      `}} />

      <div className="relative z-10 w-full max-w-6xl flex flex-col items-center">

        {/* HERO SECTION */}
        <div className="w-full flex flex-col items-center justify-center min-h-[50vh] text-center mb-24">

          {/* Logo Combined */}
          <div className="flex items-center space-x-6 mb-12 bg-[#2D1A0A] p-6 border border-[#803014] rounded-full shadow-[0_0_30px_#D9A63E20]">
            <div className="w-16 h-16 rounded-full bg-[#1A0F05] border-2 border-[#D9A63E] flex items-center justify-center">
              <span className="text-xl">🦝</span> {/* Placeholder Procione */}
            </div>
            <div className="text-[#D9A63E] font-[Cinzel] font-bold text-3xl">×</div>
            <div className="w-16 h-16 rounded-full bg-white border-2 border-[#4285F4] flex items-center justify-center">
              <span className="text-[#4285F4] font-bold text-2xl font-[Inter]">J</span> {/* Placeholder Jules */}
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-[Cinzel] font-bold text-[#D9A63E] mb-6">
            {prodottiData.heroTitle}
          </h1>
          <p className="text-[#C4A86A] text-lg md:text-2xl max-w-2xl font-[Inter]">
            {prodottiData.heroSubtitle}
          </p>
        </div>

        {/* SECTION 1: PERCHÉ JULES */}
        <div className="w-full bg-[#1A0F05] border border-[#803014] rounded-lg p-8 md:p-12 mb-32 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#D9A63E] to-transparent" />
          <h2 className="text-[#D9A63E] font-[Cinzel] text-2xl md:text-3xl font-bold mb-6">
            {prodottiData.storyTitle}
          </h2>
          <p className="text-gray-300 font-[Inter] leading-relaxed text-lg">
            {prodottiData.storyText}
          </p>
        </div>

        {/* SECTION 2: I NOSTRI TOOL */}
        <div className="w-full flex flex-col items-center mb-32">
          <h2 className="text-3xl md:text-5xl font-[Cinzel] font-bold text-[#F5D64E] mb-4 text-center">
            {prodottiData.toolsTitle}
          </h2>
          <p className="text-[#C4A86A] text-lg text-center mb-16 font-[Inter]">
            {prodottiData.toolsSubtitle}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            {prodottiData.tools.map((tool, idx) => (
              <div
                key={idx}
                className="bg-[#2D1A0A]/80 border border-[#803014]/50 rounded-lg p-8 shadow-lg flex flex-col justify-between relative overflow-hidden group hover:border-[#D9A63E] transition-colors"
              >
                {tool.badge && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-[#4285F4] to-[#34A853] text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                    {tool.badge}
                  </div>
                )}

                <div>
                  <div className="flex items-center space-x-4 mb-4">
                    <div
                      className="w-12 h-12 rounded flex items-center justify-center"
                      style={{ backgroundColor: `${tool.color}20`, border: `1px solid ${tool.color}` }}
                    >
                      <span className="text-xl" style={{ color: tool.color }}>🔧</span>
                    </div>
                    <div>
                      <h3 className="font-[Cinzel] text-2xl font-bold" style={{ color: tool.color }}>
                        {tool.name}
                      </h3>
                      <span className="text-sm font-mono text-gray-500">{tool.period}</span>
                    </div>
                  </div>
                  <p className="text-gray-300 font-[Inter] leading-relaxed">
                    {tool.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 3: LOGHI E LINK */}
        <div className="w-full flex flex-col items-center border-t border-[#803014]/50 pt-16 mb-24">
          <div className="flex items-center space-x-8 mb-8 opacity-80">
            <div className="w-24 h-24 rounded-full bg-[#1A0F05] border-2 border-[#D9A63E] flex items-center justify-center grayscale hover:grayscale-0 transition-all">
              <span className="text-3xl">🦝</span>
            </div>
            <div className="text-[#D9A63E] font-[Cinzel] font-bold text-4xl">×</div>
            <div className="w-24 h-24 rounded-full bg-white border-2 border-[#4285F4] flex items-center justify-center grayscale hover:grayscale-0 transition-all">
              <span className="text-[#4285F4] font-bold text-4xl font-[Inter]">J</span>
            </div>
          </div>

          <div className="bg-[#1A0F05] border border-[#C4A86A] text-[#C4A86A] px-6 py-2 rounded-full font-mono text-sm tracking-widest uppercase mb-8">
            {prodottiData.badgeText}
          </div>

          <a
            href={prodottiData.julesUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#D9A63E] font-[Inter] font-bold border-b border-[#D9A63E] hover:text-white hover:border-white transition-colors pb-1"
          >
            Scopri Google Jules →
          </a>
        </div>

        {/* FOOTER PAGINA */}
        <div className="w-full text-center">
          <p className="text-gray-500 text-xs font-[Inter] max-w-2xl mx-auto opacity-60">
            {prodottiData.footerLegal}
          </p>
        </div>

      </div>
    </section>
  );
}