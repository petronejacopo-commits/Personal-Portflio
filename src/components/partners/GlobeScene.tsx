'use client';

import dynamic from 'next/dynamic';

const GlobeSceneInner = dynamic(() => import('./GlobeSceneInner'), {
  ssr: false,
  loading: () => (
    <div className="flex justify-center items-center w-full h-full">
      <div className="w-10 h-10 border-4 border-gray-300 border-t-[#D9A63E] rounded-full animate-spin"></div>
    </div>
  ),
});

export default function GlobeScene() {
  return (
    <div className="w-full h-full min-h-[400px]">
      <GlobeSceneInner />
    </div>
  );
}
