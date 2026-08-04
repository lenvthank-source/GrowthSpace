"use client";

import { motion } from "framer-motion";
import SectionBadge from "@/components/ui/SectionBadge";
import ExpandingCard from "@/components/ui/ExpandingCard";

const caseStudies = [
  {
    client: "Xworkstation",
    industry: "E-commerce / Workspace",
    channel: "Google Ads",
    challenge: "Low conversion rate and high cost per click with limited campaign reach.",
    strategy: "Full Google Ads restructure with smart bidding, audience refinement, and conversion-focused landing pages.",
    results: [
      { metric: "52.8K+", label: "Clicks" },
      { metric: "4.32K+", label: "Conversions" },
      { metric: "42.15", label: "Avg. CPC" },
    ],
    screenshot: "/images/case-studies/WhatsApp_Image_2026-06-24_at_4.01.58_PM_(1).jpeg",
  },
  {
    client: "Srigauri Fashion",
    industry: "Fashion & Apparel",
    channel: "Meta Ads",
    challenge: "High cost per lead with poor quality inquiries from untargeted Meta campaigns.",
    strategy: "Audience segmentation overhaul, creative A/B testing, and WhatsApp lead automation for instant follow-up.",
    results: [
      { metric: "3.85L+", label: "Reach" },
      { metric: "2,100+", label: "Leads" },
      { metric: "18.90", label: "CPL" },
    ],
    screenshot: "/images/case-studies/WhatsApp_Image_2026-06-24_at_4.01.59_PM.jpeg",
  },
  {
    client: "IELTSwithGagan",
    industry: "Education",
    channel: "Google Ads",
    challenge: "Struggling to drive course enrollments at a reasonable cost through paid search.",
    strategy: "High-intent keyword targeting, ad creative optimization, and campaign structure refinement for better Quality Scores.",
    results: [
      { metric: "8.85K+", label: "Clicks" },
      { metric: "488", label: "Enrollments" },
      { metric: "38.04", label: "Avg. CPC" },
    ],
    screenshot: "/images/case-studies/WhatsApp_Image_2026-06-24_at_4.01.59_PM_(1).jpeg",
  },
];

export default function CaseStudiesSection() {
  return (
    <section className="py-24 bg-[#EFEFEF]">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-16"
        >
          <SectionBadge number="2" label="Featured client work" borderColor="border-gray-300" />
          <h2 className="axion-hero-heading text-[#111827] mt-6 mb-4 max-w-3xl">
            Our projects
          </h2>
          <p className="text-lg text-[#6B7280] font-sans max-w-2xl">
            Real Campaigns. Real Numbers. Every metric below is pulled directly from live campaign dashboards.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.client}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <ExpandingCard
                title={study.client}
                description={study.strategy}
                imageSrc={study.screenshot}
                imageAlt={`${study.client} dashboard`}
                href="/projects"
                buttonLabel="View study"
                variant="dark"
              >
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                   <div className="bg-white/90 backdrop-blur px-3 py-1.5 rounded-full shadow-sm text-xs font-bold text-gray-900">
                     {study.channel}
                   </div>
                   <div className="bg-white/90 backdrop-blur px-3 py-1.5 rounded-full shadow-sm text-xs font-bold text-gray-900 uppercase tracking-wider">
                     {study.industry}
                   </div>
                </div>
              </ExpandingCard>
              <div className="grid grid-cols-3 gap-4 mt-6 bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
                {study.results.map((result) => (
                  <div key={result.label} className="text-center">
                    <p className="font-display font-bold text-[#F5A623]">{result.metric}</p>
                    <p className="text-[10px] font-sans font-semibold text-gray-500 uppercase tracking-wider mt-1">{result.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
