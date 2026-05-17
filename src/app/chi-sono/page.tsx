import AboutSection from '@/components/about/AboutSection';
import JsonLd from '@/components/ui/JsonLd';

export const metadata = {
  title: "Chi Sono | Procione",
  description: "Scopri la storia di Jacopo Petrone, sviluppatore backend, fondatore di Blocksmith e specialista Legal Tech.",
};

const jsonLdData = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Jacopo Petrone",
  "jobTitle": "Backend Architect & Founder",
  "url": "https://procione.com/chi-sono",
};

export default function ChiSonoPage() {
  return (
    <main>
      <JsonLd data={jsonLdData} />
      <AboutSection />
    </main>
  );
}
