'use client';

import { useState, useEffect } from 'react';
import { useSfx } from './useSfx';

export function useSlotCounter(targetValue: number) {
  const [value, setValue] = useState(0);
  const { playAchievement } = useSfx();

  useEffect(() => {
    let current = 0;
    const increment = targetValue / 50; // 50 steps
    const interval = setInterval(() => {
      current += increment;
      if (current >= targetValue) {
        setValue(targetValue);
        clearInterval(interval);

        // Try playing sound, ignore errors to prevent crashing if user hasn't interacted with document
        try {
          if (playAchievement) playAchievement();
        } catch (e) {
          // ignore
        }
      } else {
        setValue(Math.floor(current));
      }
    }, 20); // 20ms per step

    return () => clearInterval(interval);
  }, [targetValue, playAchievement]);

  return value;
}