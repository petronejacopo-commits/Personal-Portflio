import type { Metadata, Viewport } from "next";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://procione.com'),
  title: 'Procione | Game Designer & UX/UI Specialist',
  description: "Portfolio di Procione - Game Designer e UX/UI Specialist. Scopri i miei progetti, commissioni e risorse di sviluppo.",
  openGraph: {
    images: ["/assets/images/logo/logo-raccoon.svg"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="it"
      className="h-full antialiased"
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Inter:ital,opsz,wght@0,14..32,300..600;1,14..32,300..600&family=Space+Grotesk:wght@400;500&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-[#1E0F05] text-[#FFFFFF]">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-[#F5D64E] focus:text-[#1E0F05] focus:px-4 focus:py-2 focus:rounded">Vai al contenuto principale</a>
        <Navigation />
        <main id="main-content" className="flex-grow pt-[64px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}