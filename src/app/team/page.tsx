import TeamSection from '@/components/about/TeamSection';
import JsonLd from '@/components/ui/JsonLd';

export const metadata = {
  title: "Team | Procione",
  description: "Conosci i professionisti del team Blocksmith.",
};

const jsonLdData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Blocksmith Team",
  "url": "https://procione.com/team",
};

export default function TeamPage() {
  return (
    <main>
      <JsonLd data={jsonLdData} />
      <TeamSection />
    </main>
  );
}
