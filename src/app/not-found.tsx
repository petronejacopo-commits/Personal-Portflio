'use client';

import React from 'react';
import AmberButton from '@/components/ui/AmberButton';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0D0D0D] flex flex-col items-center justify-center p-4 text-center">
      <h1 className="font-title text-4xl md:text-6xl text-[#D4A843] mb-4 uppercase tracking-widest">
        Area Inesplorata
      </h1>
      <p className="font-sans text-lg text-gray-400 mb-8 max-w-md">
        Questa pagina è avvolta nella nebbia. Torna alla mappa principale.
      </p>
      <AmberButton href="/">
        Torna alla Home
      </AmberButton>
    </div>
  );
}