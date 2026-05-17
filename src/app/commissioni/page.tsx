import CommissionsSection from '@/components/commissions/CommissionsSection';
import JsonLd from '@/components/ui/JsonLd';
import { Suspense } from 'react';
import Skeleton from '@/components/ui/Skeleton';

export const metadata = {
  title: "Commissioni | Procione",
  description: "Servizi di UX/UI Design, Lore Design e Social Media Management.",
};

const jsonLdData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Procione Services",
  "serviceType": ["UX/UI Design", "Lore Design", "Social Media Management"],
  "provider": {
    "@type": "Person",
    "name": "Jacopo Petrone"
  }
};

export default function CommissionsPage() {
  return (
    <main>
      <JsonLd data={jsonLdData} />
      <Suspense fallback={<div className="h-screen"><Skeleton height="100%" /></div>}>
        <CommissionsSection />
      </Suspense>
    </main>
  );
}
