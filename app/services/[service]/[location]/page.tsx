import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Script from "next/script";
import { LOCATIONS } from "@/lib/data/locations";
import { MapPin, Building, ArrowRight, CheckCircle2 } from "lucide-react";

interface Props {
  params: {
    service: string;
    location: string;
  };
}

const VALID_SERVICES: Record<string, { name: string; desc: string }> = {
  "seo": { name: "Search Engine Optimization (SEO)", desc: "Drive high-intent organic traffic, dominate local search, and outrank competitors." },
  "ai-automation": { name: "AI & Workflow Automation", desc: "Streamline enterprise operations with custom AI agents and workflow automation." },
  "web-development": { name: "Web Design & Development", desc: "Build ultra-fast, conversion-focused Next.js web applications." },
  "ppc": { name: "Google Ads & PPC Management", desc: "Maximize ad spend efficiency and ROAS with data-driven PPC campaigns." },
};

export async function generateStaticParams() {
  const paths: Array<{ service: string; location: string }> = [];
  
  Object.keys(VALID_SERVICES).forEach((service) => {
    Object.keys(LOCATIONS).forEach((location) => {
      paths.push({ service, location });
    });
  });

  return paths;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = VALID_SERVICES[params.service];
  const loc = LOCATIONS[params.location];

  if (!service || !loc) return {};

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://growthspare.com";
  const title = `${service.name} in ${loc.cityName}, ${loc.stateRegion} | GrowthSpare`;
  const description = `Looking for top-tier ${service.name} in ${loc.cityName}? GrowthSpare delivers data-driven digital growth, local market dominance, and custom AI solutions.`;
  const canonicalUrl = `${baseUrl}/services/${params.service}/${params.location}`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: "GrowthSpare",
      type: "website",
    },
  };
}

export default function ServiceLocationPage({ params }: Props) {
  const service = VALID_SERVICES[params.service];
  const loc = LOCATIONS[params.location];

  if (!service || !loc) {
    notFound();
  }

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://growthspare.com";
  const canonicalUrl = `${baseUrl}/services/${params.service}/${params.location}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": `GrowthSpare ${service.name} ${loc.cityName}`,
    "url": canonicalUrl,
    "areaServed": {
      "@type": "City",
      "name": loc.cityName,
      "containedInPlace": { "@type": "State", "name": loc.stateRegion }
    },
    "description": service.desc,
    "provider": {
      "@type": "Organization",
      "name": "GrowthSpare Digital Agency",
      "url": baseUrl
    }
  };

  return (
    <>
      <Script
        id={`jsonld-${params.service}-${params.location}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-amber-400 font-semibold text-sm mb-4">
            <MapPin className="w-4 h-4" />
            <span>Serving Businesses in {loc.cityName}, {loc.stateRegion}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
            {service.name} <br className="hidden md:block" />
            <span className="text-amber-500">in {loc.cityName}</span>
          </h1>
          <p className="text-slate-300 text-lg md:text-xl max-w-3xl mb-8 leading-relaxed">
            {service.desc} Tailored growth strategies designed for companies operating across {loc.localStats.techHubName || loc.cityName}.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-7 py-4 rounded-xl transition-all shadow-lg shadow-amber-500/20 flex items-center gap-2"
            >
              Consult Our {loc.cityName} Team
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Local Advantage Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-amber-50/60 border border-amber-200/80 rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-3 flex items-center gap-2">
              <Building className="w-6 h-6 text-amber-600" />
              Local Market Advantage: {loc.cityName}
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              {loc.localStats.businessDensityNote} GrowthSpare empowers enterprises and growing startups in {loc.cityName} with edge-cutting digital marketing and custom software infrastructure.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {loc.localStats.activeIndustries.map((ind) => (
                <span key={ind} className="bg-white text-slate-800 font-medium text-xs px-3 py-1.5 rounded-md border border-slate-200 shadow-sm">
                  {ind} in {loc.cityName}
                </span>
              ))}
            </div>
          </div>

          {/* Local FAQs */}
          {loc.localFAQ.length > 0 && (
            <div className="mt-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Frequently Asked Questions ({loc.cityName})
              </h2>
              <div className="space-y-4">
                {loc.localFAQ.map((faq, i) => (
                  <div key={i} className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{faq.question}</h3>
                    <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
