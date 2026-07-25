import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Script from "next/script";
import { INDUSTRIES } from "@/lib/data/industries";
import { ArrowRight, CheckCircle2, ShieldCheck, Zap } from "lucide-react";

interface Props {
  params: {
    industry: string;
  };
}

export async function generateStaticParams() {
  return Object.keys(INDUSTRIES).map((industry) => ({ industry }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const ind = INDUSTRIES[params.industry];
  if (!ind) return {};

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://growthspare.com";
  const title = `${ind.name} Marketing & Technology Solutions | GrowthSpare`;
  const description = `${ind.heroHeadline}. Tailored performance marketing, SEO, and custom software for ${ind.name} brands.`;
  const canonicalUrl = `${baseUrl}/solutions/${params.industry}`;

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

export default function IndustrySolutionPage({ params }: Props) {
  const ind = INDUSTRIES[params.industry];
  if (!ind) notFound();

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://growthspare.com";
  const canonicalUrl = `${baseUrl}/solutions/${params.industry}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `${ind.name} Digital Solutions`,
    "provider": { "@id": `${baseUrl}/#organization` },
    "description": ind.heroHeadline,
    "url": canonicalUrl,
  };

  return (
    <>
      <Script
        id={`jsonld-industry-${params.industry}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="bg-slate-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-block bg-amber-500/10 border border-amber-500/20 text-amber-400 font-semibold text-xs px-3 py-1 rounded-full mb-4">
            {ind.name} Industry Solutions
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
            {ind.heroHeadline}
          </h1>
          <p className="text-slate-300 text-lg max-w-3xl mb-8">
            GrowthSpare delivers specialized marketing and custom software systems designed specifically to solve {ind.name} operational and growth challenges.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-7 py-4 rounded-xl transition-all shadow-lg shadow-amber-500/20"
          >
            Schedule Industry Demo
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Key Modules & Features</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {ind.keyModules.map((mod, i) => (
              <div key={i} className="border border-slate-200 rounded-2xl p-6 hover:shadow-md transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle2 className="w-6 h-6 text-amber-500" />
                  <h3 className="text-xl font-bold text-slate-900">{mod.title}</h3>
                </div>
                <p className="text-slate-600 leading-relaxed">{mod.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
