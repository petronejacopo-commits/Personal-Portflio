'use client';

import { useEffect, useRef } from 'react';
import Globe from 'react-globe.gl';

export default function GlobeSceneInner() {
  const globeRef = useRef<any>(null);

  useEffect(() => {
    if (globeRef.current) {
      const controls = globeRef.current.controls();
      if (controls) {
        controls.autoRotate = true;
      }
    }
  }, []);

  return (
    <Globe
      ref={globeRef}
      atmosphereColor="#D9A63E"
      pointsData={[]}
      arcsData={[]}
    />
  );
}
