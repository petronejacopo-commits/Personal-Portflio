import React from 'react';
import SoundProvider from '../components/ui/SoundProvider';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SoundProvider>
          {children}
        </SoundProvider>
      </body>
    </html>
  );
}