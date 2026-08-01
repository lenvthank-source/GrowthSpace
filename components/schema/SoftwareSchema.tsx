import Script from "next/script";

interface SoftwareSchemaProps {
  appName: string;
  description: string;
  slug: string;
  category?: string;
  features?: string[];
}

export default function SoftwareSchema({
  appName,
  description,
  slug,
  category = "BusinessApplication",
  features = [],
}: SoftwareSchemaProps) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://growthspare.com";
  const appUrl = `${baseUrl}/services/${slug}`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": appName,
    "applicationCategory": category,
    "operatingSystem": "Web, Cloud, iOS, Android, WhatsApp API",
    "provider": { "@id": `${baseUrl}/#organization` },
    "description": description,
    "offers": {
      "@type": "Offer",
      "priceCurrency": "INR",
      "price": "0",
      "priceValidUntil": "2026-12-31",
      "availability": "https://schema.org/InStock",
      "seller": { "@id": `${baseUrl}/#organization` }
    },
    ...(features.length > 0 && { "featureList": features })
  };

  return (
    <Script
      id={`schema-software-${slug}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
