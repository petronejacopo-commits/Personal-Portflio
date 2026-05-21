'use client';

import { useRef, useMemo } from 'react';
import R3fGlobe from 'r3f-globe';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const minecraftData = [
  { lat: 49.2, lng: -123.1, color: '#D9A63E' },
  { lat: 51.5, lng: -0.1, color: '#DC4424' },
  { lat: 52.5, lng: 5.7, color: '#D9A63E' },
  { lat: 55.7, lng: 12.6, color: '#DC4424' },
  { lat: 48.8, lng: 2.3, color: '#D9A63E' },
  { lat: 41.9, lng: 12.5, color: '#DC4424' },
  { lat: 45.5, lng: 9.2, color: '#D9A63E' },
  { lat: 40.8, lng: 14.2, color: '#803014' },
  { lat: 44.4, lng: 8.9, color: '#D9A63E' },
  { lat: 43.7, lng: 10.4, color: '#DC4424' },
  { lat: 41.1, lng: 16.9, color: '#803014' },
  { lat: 59.3, lng: 18.0, color: '#D9A63E' },
  { lat: 37.5, lng: 127.0, color: '#DC4424' },
  { lat: 43.6, lng: 1.4, color: '#D9A63E' },
  { lat: 51.0, lng: 3.7, color: '#803014' }
];

const outsiderData = [
  { lat: 59.4, lng: 24.7, color: '#F5D64E' },
  { lat: 45.5, lng: -73.6, color: '#F5D64E' },
  { lat: 59.3, lng: 18.0, color: '#F5D64E' },
  { lat: -41.3, lng: 174.8, color: '#F5D64E' },
  { lat: 43.6, lng: -79.4, color: '#F5D64E' },
  { lat: 43.2, lng: 76.9, color: '#F5D64E' },
  { lat: 47.9, lng: 106.9, color: '#F5D64E' },
  { lat: -1.3, lng: 36.8, color: '#F5D64E' },
  { lat: 6.5, lng: 3.4, color: '#F5D64E' }
];

const cuneoLat = 44.4;
const cuneoLng = 7.5;

function GlobeComponent({ filter }: { filter: string }) {
  const globeRef = useRef<any>(null);

  const pointsData = useMemo(() => {
    if (filter === 'Minecraft') return minecraftData;
    if (filter === 'Outsider') return outsiderData;
    return [...minecraftData, ...outsiderData];
  }, [filter]);

  const arcsData = useMemo(() => {
    if (filter === 'Outsider') return [];
    return minecraftData.map(pt => ({
      startLat: cuneoLat,
      startLng: cuneoLng,
      endLat: pt.lat,
      endLng: pt.lng,
      color: '#D9A63E'
    }));
  }, [filter]);

  return (
    <R3fGlobe
      ref={globeRef}
      atmosphereColor="#D9A63E"
      pointsData={pointsData}
      pointAltitude={0.02}
      pointRadius={0.4}
      arcsData={arcsData}
      arcAltitude={0.3}
      arcStroke={0.5}
      arcCurveResolution={64}
      arcDashLength={0.3}
      arcDashGap={0.1}
      arcDashAnimateTime={3000}
    />
  );
}

export default function GlobeSceneInner({ filter }: { filter: string }) {
  return (
    <Canvas>
      <ambientLight intensity={Math.PI} />
      <directionalLight position={[0, 0, 10]} intensity={0.5} />
      <OrbitControls autoRotate />
      <GlobeComponent filter={filter} />
    </Canvas>
  );
}
