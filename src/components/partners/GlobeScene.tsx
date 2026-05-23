'use client';

import React from 'react';
import dynamic from 'next/dynamic';

const GlobeInner = dynamic(() => import('./GlobeInner'), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-full w-full">
      <div className="spinner border-4 border-gray-200 rounded-full w-12 h-12 border-t-4 border-t-[#D9A63E] animate-spin"></div>
    </div>
  ),
});

export default function GlobeScene() {
  return (
    <div className="w-full h-[600px] relative">
      <GlobeInner />
    </div>
  );
}
