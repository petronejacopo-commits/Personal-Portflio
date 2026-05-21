'use client';

import { useRef } from 'react';
import R3fGlobe from 'r3f-globe';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function GlobeComponent() {
  const globeRef = useRef<any>(null);

  return (
    <R3fGlobe
      ref={globeRef}
      atmosphereColor="#D9A63E"
      pointsData={[]}
      arcsData={[]}
    />
  );
}

export default function GlobeSceneInner() {
  return (
    <Canvas>
      <ambientLight intensity={Math.PI} />
      <directionalLight position={[0, 0, 10]} intensity={0.5} />
      <OrbitControls autoRotate />
      <GlobeComponent />
    </Canvas>
  );
}
