'use client';

import { useState } from 'react';
import PartnerGlobe from './PartnerGlobe';

export default function PartnersSection() {
  const [filter, setFilter] = useState('All Partners');

  return (
    <section className="w-full flex flex-col items-center">
      <PartnerGlobe filter={filter} onChangeFilter={setFilter} />

      {/* Minecraft section */}
      {(filter === 'All Partners' || filter === 'Minecraft') && (
        <div className="w-full p-8 border-t border-gray-800 mt-8">
          <h2 className="text-2xl text-[#D9A63E] mb-4">Minecraft Partners</h2>
          {/* Minecraft partners content */}
        </div>
      )}

      {/* Outsider section */}
      {(filter === 'All Partners' || filter === 'Outsider') && (
        <div className="w-full p-8 border-t border-gray-800">
          <h2 className="text-2xl text-[#D9A63E] mb-4">Outsider Partners</h2>
          {/* Outsider partners content */}
        </div>
      )}
    </section>
  );
}
