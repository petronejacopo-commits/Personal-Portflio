'use client';

import React from 'react';
import ItalyTeamMap from '../../components/team/ItalyTeamMap';

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-[#1E0F05] text-white flex flex-col items-center py-20 px-4">
      <h1 className="text-4xl font-bold text-[#D9A63E] mb-12">Il Nostro Team</h1>

      {/* Mock Grid as requested before the map */}
      <div className="w-full max-w-6xl grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="bg-[#2D1A0A] p-6 rounded text-center border border-[#803014]/30">
            <div className="w-16 h-16 bg-[#1A0F05] rounded-full mx-auto mb-4 border border-[#D9A63E]"></div>
            <p className="font-semibold">Membro {i+1}</p>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold text-[#C4A86A] mb-8">La Nostra Presenza sul Territorio</h2>

      <div className="w-full max-w-4xl">
        <ItalyTeamMap />
      </div>
    </div>
  );
}