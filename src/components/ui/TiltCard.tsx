'use client';
import { useSfx } from '../../lib/useSfx';

export default function TiltCard() {
  const { playHover } = useSfx();
  return <div onMouseEnter={() => playHover()}>Card</div>;
}