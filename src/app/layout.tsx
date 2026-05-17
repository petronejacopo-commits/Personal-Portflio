import type { Metadata, Viewport } from "next";
import { Cinzel, Inter, Space_Grotesk } from "next/font/google";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Procione | Game Designer & UX/UI Specialist",
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
      className={`${cinzel.variable} ${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] bg-amber-500 text-black px-4 py-2 font-bold">Skip to content</a>
      <body className="min-h-full flex flex-col font-sans bg-[#0D0D0D] text-[#F5F0E8]">
        <Navigation />
        <main id="main-content" className="flex-grow pt-[64px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}