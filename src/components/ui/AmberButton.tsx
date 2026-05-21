'use client';
import { useSfx } from '../../lib/useSfx';

export default function AmberButton() {
  const { playClick } = useSfx();
  return <button onClick={() => playClick()}>Click</button>;
}