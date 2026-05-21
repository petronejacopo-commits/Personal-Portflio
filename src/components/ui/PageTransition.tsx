'use client';
import { useEffect } from 'react';
import { useSfx } from '../../lib/useSfx';

export default function PageTransition() {
  const { playSwoosh } = useSfx();
  useEffect(() => {
    playSwoosh();
  }, [playSwoosh]);
  return <div>Transition</div>;
}