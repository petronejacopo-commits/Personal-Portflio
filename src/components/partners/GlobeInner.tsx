import React from 'react';
import R3fGlobe from 'r3f-globe';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

export default function GlobeInner() {
  return (
    <Canvas camera={{ position: [0, 0, 300] }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 10]} intensity={1} />
      <OrbitControls autoRotate={true} />
      <R3fGlobe
        atmosphereColor="#D9A63E"
        pointsData={[]}
        arcsData={[]}
      />
    </Canvas>
  );
}
