'use client';
import { useSfx } from './useSfx';

export function useSlotCounter() {
  const { playAchievement } = useSfx();
  const complete = () => playAchievement();
  return { complete };
}