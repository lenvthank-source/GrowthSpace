import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Script from "next/script";
import { INTEGRATIONS } from "@/lib/data/integrations";
import { ArrowRight, Code2, Layers, Cpu } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import TextRollButton from "@/components/ui/TextRollButton";
import SectionBadge from "@/components/ui/SectionBadge";
import ExpandingCard from "@/components/ui/ExpandingCard";

interface Props {
  params: Promise<{
    tool: string;
  }>;
}

export async function generateStaticParams() {
  return Object.keys(INTEGRATIONS).map((tool) => ({ tool }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { tool: toolParam } = await params;
  const tool = INTEGRATIONS[toolParam];
  if (!tool) return {};

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://growthspare.com";
  const title = `${tool.name} Integration & Development Services | GrowthSpare`;
  const description = `${tool.valueProp}. Enterprise integration, API architecture, and custom Next.js development.`;
  const canonicalUrl = `${baseUrl}/integrations/${toolParam}`;

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

export default async function IntegrationToolPage({ params }: Props) {
  const { tool: toolParam } = await params;
  const tool = INTEGRATIONS[toolParam];
  if (!tool) notFound();

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://growthspare.com";
  const canonicalUrl = `${baseUrl}/integrations/${toolParam}`;

  return (
    <>
      <section className="bg-slate-900 text-white py-16 md:py-24">
        <FadeIn>
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="inline-block bg-[#F26522]/10 border border-amber-500/20 text-amber-400 font-semibold text-xs px-3 py-1 rounded-full mb-4">
            {tool.category} Integration Partner
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
            {tool.name} Services & Architecture
          </h1>
          <p className="text-slate-300 text-lg max-w-3xl mb-8 leading-relaxed">
            {tool.valueProp}
          </p>
          <TextRollButton href="/contact" className="inline-flex items-center gap-2 bg-[#F26522] hover:bg-[#e05a1a] text-slate-950 font-bold px-7 py-4 rounded-xl transition-all shadow-lg shadow-amber-500/20">Consult Our Tech Leads
            </TextRollButton>
        </div>
      </FadeIn>
      </section>

      <section className="py-16 bg-white">
        <FadeIn>
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Technical Capabilities</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {tool.technicalCapabilities.map((cap, i) => (
              <div key={i} className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                <Code2 className="w-6 h-6 text-[#F26522] mb-3" />
                <p className="text-slate-800 font-semibold">{cap}</p>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
      </section>
    </>
  );
}
