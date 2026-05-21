'use client';
import { useSfx } from '../../lib/useSfx';

export default function Terminal() {
  const { playTerminalType } = useSfx();
  return <input type="text" onChange={() => playTerminalType()} />;
}