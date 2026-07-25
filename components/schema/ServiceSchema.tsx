import Script from "next/script";

interface ServiceSchemaProps {
  serviceName: string;
  serviceType: string;
  description: string;
  slug: string;
  offers?: string[];
}

export default function ServiceSchema({
  serviceName,
  serviceType,
  description,
  slug,
  offers = [],
}: ServiceSchemaProps) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://growthspare.com";
  const serviceUrl = `${baseUrl}/services/${slug}`;

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": baseUrl },
          { "@type": "ListItem", "position": 2, "name": "Services", "item": `${baseUrl}/services` },
          { "@type": "ListItem", "position": 3, "name": serviceName, "item": serviceUrl }
        ]
      },
      {
        "@type": "Service",
        "@id": `${serviceUrl}/#service`,
        "name": serviceName,
        "serviceType": serviceType,
        "provider": { "@id": `${baseUrl}/#organization` },
        "description": description,
        "areaServed": ["Delhi NCR", "Noida", "Gurgaon", "Global"],
        ...(offers.length > 0 && {
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": `${serviceName} Solutions`,
            "itemListElement": offers.map((offer) => ({
              "@type": "Offer",
              "itemOffered": { "@type": "Service", "name": offer }
            }))
          }
        })
      }
    ]
  };

  return (
    <Script
      id={`schema-service-${slug}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
