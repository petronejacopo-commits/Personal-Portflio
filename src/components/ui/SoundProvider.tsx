'use client';

import React from 'react';
import { DavstackSoundProvider } from '@davstack/sound';

export default function SoundProvider({ children }: { children: React.ReactNode }) {
  return (
    <DavstackSoundProvider volume={0.3} muted={false}>
      {children}
    </DavstackSoundProvider>
  );
}