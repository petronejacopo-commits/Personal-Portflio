import BlocksmithSection from '@/components/blocksmith/BlocksmithSection';
import JsonLd from '@/components/ui/JsonLd';
import { Suspense } from 'react';
import Skeleton from '@/components/ui/Skeleton';

export const metadata = {
  title: "Blocksmith | The Forge",
  description: "Blocksmith Studio: sviluppo, design e marketing per esperienze digitali.",
};

const jsonLdData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Blocksmith",
  "url": "https://procione.com/blocksmith",
};

export default function BlocksmithPage() {
  return (
    <main>
      <JsonLd data={jsonLdData} />
      <Suspense fallback={<div className="h-screen"><Skeleton height="100%" /></div>}>
        <BlocksmithSection />
      </Suspense>
    </main>
  );
}
