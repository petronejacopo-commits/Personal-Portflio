'use client';

import { useSound } from '@davstack/sound';

export function useSfx() {
  const [playHover] = useSound('/sounds/hover.mp3');
  const [playClick] = useSound('/sounds/click.mp3');
  const [playCardFlip] = useSound('/sounds/card-flip.mp3');
  const [playTerminalType] = useSound('/sounds/terminal-type.mp3');
  const [playAchievement] = useSound('/sounds/achievement.mp3');
  const [playGlitch] = useSound('/sounds/glitch.mp3');
  const [playSwoosh] = useSound('/sounds/swoosh.mp3');

  return {
    playHover,
    playClick,
    playCardFlip,
    playTerminalType,
    playAchievement,
    playGlitch,
    playSwoosh
  };
}