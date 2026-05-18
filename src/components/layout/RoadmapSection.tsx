'use client';

import React from 'react';
import roadmapData from '@/lib/data/roadmap.json';
import TimelineItem from '@/components/ui/TimelineItem';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function RoadmapSection() {
  const { events } = roadmapData;

  return (
    <div className="py-[40px] px-[16px] md:py-[80px] md:px-[32px] max-w-[1200px] mx-auto">
      <h2 className="font-title text-3xl text-amber-500 mb-8 uppercase tracking-widest">
        Roadmap
      </h2>
      <div className="pl-2 md:pl-8">
        {events.map((event, index) => (
          <ScrollReveal key={index} direction="up" delay={0.1}>
            <TimelineItem
              year={event.year}
              title={event.title}
              description={event.description}
              status={event.status as "completed" | "in-progress" | "planned"}
              isLast={index === events.length - 1}
            />
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}