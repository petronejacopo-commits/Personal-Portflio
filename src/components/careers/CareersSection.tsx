'use client';

import React from 'react';
import careersData from '../../lib/data/careers.json';
import BackgroundPattern from '../ui/BackgroundPattern';

export default function CareersSection() {
  return (
    <section className="relative w-full min-h-screen bg-[#1E0F05] text-white py-20 px-4 md:px-8 flex flex-col items-center overflow-x-hidden">
      <BackgroundPattern variant="careers" />

      {/* Global fonts if not injected elsewhere */}
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Inter:wght@400;600;700&display=swap');
        .font-\\[Cinzel\\] { font-family: 'Cinzel', serif; }
        .font-\\[Inter\\] { font-family: 'Inter', sans-serif; }
      `}} />

      <div className="relative z-10 w-full max-w-5xl flex flex-col items-center">

        <div className="flex flex-col items-center mb-4">
          <h1 className="text-4xl md:text-6xl font-[Cinzel] font-bold text-[#D9A63E] mb-4 text-center">
            {careersData.pageTitle}
          </h1>
          <div className="font-[Space_Grotesk] text-[#D9A63E] text-xs border border-[#D9A63E] px-3 py-1 mt-2">
            Blocksmith Studio © 2020-2026
          </div>
        </div>
        <p className="text-[#C4A86A] text-lg md:text-xl text-center max-w-2xl mb-8 font-[Inter]">
          {careersData.pageSubtitle}
        </p>

        <div className="w-full bg-[#2D1A0A]/50 border border-[#803014]/30 rounded-lg p-6 md:p-10 mb-20 text-center shadow-[0_0_20px_#1E0F05]">
          <p className="text-gray-300 font-[Inter] leading-relaxed italic max-w-3xl mx-auto">
            {careersData.intro}
          </p>
        </div>

        <div className="w-full flex flex-col space-y-12">
          {careersData.positions.map((job, idx) => (
            <div
              key={idx}
              className="w-full bg-[#1A0F05] border border-[#803014] rounded-lg p-6 md:p-10 shadow-2xl relative overflow-hidden group hover:border-[#D9A63E] transition-colors duration-300"
            >
              {/* Colored border accent mimicking a document folder spine */}
              <div className="absolute top-0 left-0 h-full w-2 bg-gradient-to-b from-[#D9A63E] to-[#DC4424]" />

              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 pl-4 border-b border-[#803014]/50 pb-6">
                <div>
                  <h2 className="text-2xl md:text-3xl font-[Cinzel] font-bold text-[#D9A63E] mb-2">
                    {job.title}
                  </h2>
                  <div className="flex items-center space-x-4 text-sm font-mono text-gray-400">
                    <span className="flex items-center"><span className="text-[#8B5CF6] mr-2">■</span> {job.department}</span>
                    <span className="flex items-center"><span className="text-[#10B981] mr-2">■</span> {job.type}</span>
                  </div>
                </div>
              </div>

              <div className="pl-4">
                <p className="text-gray-300 font-[Inter] leading-relaxed mb-8">
                  {job.longDescription}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">

                  {/* Requirements List */}
                  <div className="bg-[#2D1A0A] p-6 rounded border border-[#803014]/30">
                    <h3 className="text-[#F5D64E] font-bold uppercase tracking-wider text-sm mb-4">Requisiti</h3>
                    <ul className="space-y-2">
                      {job.requirements.map((req, rIdx) => (
                        <li key={rIdx} className="flex items-start text-sm text-gray-300 font-[Inter]">
                          <span className="text-[#DC4424] mr-2 mt-0.5">▹</span>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Benefits List */}
                  <div className="bg-[#2D1A0A] p-6 rounded border border-[#803014]/30">
                    <h3 className="text-[#10B981] font-bold uppercase tracking-wider text-sm mb-4">Benefit</h3>
                    <ul className="space-y-2">
                      {job.benefits.map((ben, bIdx) => (
                        <li key={bIdx} className="flex items-start text-sm text-gray-300 font-[Inter]">
                          <span className="text-[#D9A63E] mr-2 mt-0.5">▹</span>
                          <span>{ben}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

                <div className="mt-8 pt-6 border-t border-[#803014]/50">
                  <p className="text-[#C4A86A] font-bold font-mono text-sm bg-[#2D1A0A] p-4 rounded inline-block">
                    {job.applyNote}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}