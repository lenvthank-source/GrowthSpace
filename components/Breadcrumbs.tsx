"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Script from "next/script";
import { ChevronRight, Home } from "lucide-react";

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
  // Fallback for dynamic CMS posts/slugs: replace hyphens with spaces and capitalize words
  return segment
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

export default function Breadcrumbs() {
  const pathname = usePathname();

  // Do not render breadcrumbs on homepage or invalid paths
  if (!pathname || pathname === "/" || pathname === "") {
    return null;
  }

  const segments = pathname.split("/").filter(Boolean);

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://growthspare.com";

  // Build breadcrumb items array starting with Home
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

  // Construct BreadcrumbList JSON-LD Schema
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
    <>
      <Script
        id="breadcrumb-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <nav
        aria-label="breadcrumb"
        className="w-full bg-slate-50/90 backdrop-blur-sm border-b border-slate-200/60 pt-20 pb-3 sm:pt-24 sm:pb-3 transition-all"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ol className="flex flex-wrap items-center gap-1.5 text-xs text-slate-500 font-medium">
            {items.map((item, index) => {
              const isLast = index === items.length - 1;

              return (
                <li key={item.url} className="inline-flex items-center gap-1.5">
                  {index > 0 && (
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" aria-hidden="true" />
                  )}

                  {index === 0 ? (
                    <Link
                      href="/"
                      className="inline-flex items-center gap-1 text-slate-600 hover:text-amber-600 transition-colors focus:outline-none focus:underline"
                    >
                      <Home className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>{item.name}</span>
                    </Link>
                  ) : isLast ? (
                    <span
                      aria-current="page"
                      className="text-slate-900 font-semibold truncate max-w-[220px] sm:max-w-md"
                    >
                      {item.name}
                    </span>
                  ) : (
                    <Link
                      href={item.url.replace(baseUrl, "") || "/"}
                      className="text-slate-600 hover:text-amber-600 transition-colors truncate max-w-[140px] sm:max-w-xs focus:outline-none focus:underline"
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              );
            })}
          </ol>
        </div>
      </nav>
    </>
  );
}
