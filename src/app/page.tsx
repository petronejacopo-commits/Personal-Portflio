import React from 'react';
import TechStack from '../components/home/TechStack';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0D0D0D]">
      {/* Mock HeroSection */}
      <section className="h-screen w-full flex items-center justify-center border-b border-gray-800">
        <h1 className="text-white text-5xl">Hero Section</h1>
      </section>

      {/* Tech Stack Component integration */}
      <TechStack />

      {/* Mock RoadmapSection */}
      <section className="h-screen w-full flex items-center justify-center border-t border-gray-800">
        <h1 className="text-white text-5xl">Roadmap Section</h1>
      </section>
    </main>
  );
}