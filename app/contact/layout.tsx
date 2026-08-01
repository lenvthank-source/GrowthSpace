import type { Metadata } from "next";
import Script from "next/script";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://growthspare.com";

export const metadata: Metadata = {
  title: "Contact GrowthSpare — Get a Free Marketing & Tech Audit",
  description:
    "Ready to scale your business? Contact GrowthSpare today for a free SEO, PPC, or software audit. Talk with our growth strategists & get a custom quote fast! ✓",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact GrowthSpare — Get a Free Marketing & Tech Audit",
    description:
      "Ready to scale your business? Contact GrowthSpare today for a free SEO, PPC, or software audit. Talk with our growth strategists & get a custom quote fast! ✓",
    url: `${baseUrl}/contact`,
    type: "website",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const contactSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "@id": `${baseUrl}/contact/#webpage`,
        "url": `${baseUrl}/contact`,
        "name": "Contact GrowthSpare — Digital Marketing & Tech Agency in Delhi NCR",
        "description": "Get in touch with GrowthSpare for SEO, PPC, AI Chatbots, and ERP/CRM development in Delhi NCR, Noida & Gurgaon.",
        "mainEntity": { "@id": `${baseUrl}/#localbusiness` }
      }
    ]
  };

  return (
    <>
      <Script
        id="contact-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      {children}
    </>
  );
}
