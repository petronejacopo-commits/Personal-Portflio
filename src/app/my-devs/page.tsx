import MyDevsSection from '@/components/mydevs/MyDevsSection';
import JsonLd from '@/components/ui/JsonLd';
import { Suspense } from 'react';
import Skeleton from '@/components/ui/Skeleton';

export const metadata = {
  title: "My Devs | Procione",
  description: "Tool di sviluppo e automazioni proprietarie come BlockSmith e The Core.",
};

const jsonLdData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Procione Tools",
  "applicationCategory": "DeveloperApplication",
};

export default function MyDevsPage() {
  return (
    <main>
      <JsonLd data={jsonLdData} />
      <Suspense fallback={<div className="h-screen"><Skeleton height="100%" /></div>}>
        <MyDevsSection />
      </Suspense>
    </main>
  );
}
