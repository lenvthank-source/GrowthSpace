"use client";

import { usePathname } from "next/navigation";
import Script from "next/script";

interface BreadcrumbItem {
  name: string;
  url: string;
}

const ROUTE_LABELS: Record<string, string> = {
  about: "About",
  contact: "Contact",
  pricing: "Pricing",
  projects: "Projects",
  industries: "Industries",
  services: "Services",
  solutions: "Solutions",
  integrations: "Integrations",
  blog: "Blog",

  // Services
  seo: "SEO Services",
  ppc: "Google Ads & PPC",
  "ai-chatbots": "AI Chatbots & Agents",
  "ai-automation": "AI & Workflow Automation",
  "custom-software": "Custom Software",
  "web-development": "Web Development",
  "web-design": "Web Design",
  branding: "Branding & Creative",
  content: "Content Marketing",
  crm: "CRM Systems",
  email: "Email Marketing",
  erp: "ERP Solutions",
  "mobile-apps": "Mobile App Development",
  "social-media": "Social Media Marketing",

  // Locations
  gurgaon: "Gurgaon",
  "delhi-ncr": "Delhi NCR",
  noida: "Noida",
  faridabad: "Faridabad",
  bangalore: "Bangalore",
  mumbai: "Mumbai",

  // Industries & Integrations
  "real-estate": "Real Estate",
  healthcare: "Healthcare",
  ecommerce: "E-Commerce",
  education: "Education",
  sanity: "Sanity CMS",
  supabase: "Supabase",
  nextjs: "Next.js",
};

function formatSegmentLabel(segment: string): string {
  if (ROUTE_LABELS[segment]) {
    return ROUTE_LABELS[segment];
  }
  return segment
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

export default function Breadcrumbs() {
  const pathname = usePathname();

  if (!pathname || pathname === "/" || pathname === "") {
    return null;
  }

  const segments = pathname.split("/").filter(Boolean);
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://growthspare.com";

  const items: BreadcrumbItem[] = [
    {
      name: "Home",
      url: baseUrl,
    },
  ];

  let accumulatedPath = "";
  segments.forEach((segment) => {
    accumulatedPath += `/${segment}`;
    items.push({
      name: formatSegmentLabel(segment),
      url: `${baseUrl}${accumulatedPath}`,
    });
  });

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url,
    })),
  };

  return (
    <Script
      id="breadcrumb-jsonld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
    />
  );
}
