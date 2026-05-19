import HeroSection from "@/components/home/HeroSection";
import RoadmapSection from "@/components/layout/RoadmapSection";
import ContactSection from "@/components/layout/ContactSection";
import JsonLd from "@/components/ui/JsonLd";
import { Suspense } from "react";
import Skeleton from "@/components/ui/Skeleton";

export const metadata = {
  title: "Procione | Game Designer & UX/UI Specialist",
  description: "Portfolio di Procione - Game Designer e UX/UI Specialist. Scopri i miei progetti, commissioni e risorse di sviluppo.",
};

const jsonLdData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Procione Portfolio",
  "url": "https://procione.com",
};

export default function Home() {
  return (
    <>
      <JsonLd data={jsonLdData} />
      <Suspense fallback={<div className="h-screen"><Skeleton height="100%" /></div>}>
        <HeroSection />
      </Suspense>
      <RoadmapSection />
      <ContactSection />
    </>
  );
}
