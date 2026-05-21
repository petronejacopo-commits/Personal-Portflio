'use client';
import { useEffect } from 'react';
import { useSfx } from '../../lib/useSfx';

export default function GraveyardSection() {
  const { playGlitch } = useSfx();
  useEffect(() => {
    playGlitch();
  }, [playGlitch]);
  return <div>Graveyard</div>;
}