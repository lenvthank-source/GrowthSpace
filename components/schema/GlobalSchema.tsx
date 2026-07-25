import Script from "next/script";

export default function GlobalSchema() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://growthspare.com";

  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${baseUrl}/#organization`,
        "name": "GrowthSpare",
        "alternateName": ["GrowthSpare Digital Agency", "GrowthSpare Marketing & Technology"],
        "url": baseUrl,
        "logo": `${baseUrl}/growthspare-a-logo.png`,
        "image": `${baseUrl}/growthspare-a-logo.png`,
        "description": "GrowthSpare combines performance marketing and custom technology (SEO, Google Ads, AI Chatbots, ERP/CRM) to help businesses grow online.",
        "foundingDate": "2015",
        "founder": {
          "@type": "Person",
          "name": "Animesh Khosla",
          "jobTitle": "Founder & Marketing Consultant"
        },
        "sameAs": [
          "https://www.linkedin.com/company/growthspare",
          "https://twitter.com/growthspare",
          "https://facebook.com/growthspare",
          "https://instagram.com/growthspare"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+91-9560725039",
          "contactType": "customer service",
          "email": "info@growthspare.com",
          "areaServed": ["IN", "Global"],
          "availableLanguage": ["English", "Hindi"]
        }
      },
      {
        "@type": "WebSite",
        "@id": `${baseUrl}/#website`,
        "url": baseUrl,
        "name": "GrowthSpare",
        "description": "Marketing + Technology. One Partner.",
        "publisher": { "@id": `${baseUrl}/#organization` },
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": `${baseUrl}/blog?q={search_term_string}`
          },
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": ["LocalBusiness", "ProfessionalService"],
        "@id": `${baseUrl}/#localbusiness`,
        "name": "GrowthSpare",
        "url": baseUrl,
        "image": `${baseUrl}/growthspare-a-logo.png`,
        "telephone": "+91-9560725039",
        "email": "info@growthspare.com",
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Indure House, 2nd Floor, Savitri Cinema Complex GK-II",
          "addressLocality": "New Delhi",
          "addressRegion": "Delhi",
          "postalCode": "110048",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 28.5387,
          "longitude": 77.2407
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "opens": "09:00",
            "closes": "19:00"
          }
        ],
        "areaServed": [
          { "@type": "City", "name": "New Delhi" },
          { "@type": "City", "name": "Noida" },
          { "@type": "City", "name": "Gurgaon" },
          { "@type": "State", "name": "Delhi NCR" }
        ]
      }
    ]
  };

  return (
    <Script
      id="global-jsonld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
    />
  );
}
