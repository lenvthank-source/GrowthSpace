"use client";

import { motion } from "framer-motion";
import SectionBadge from "@/components/ui/SectionBadge";
import TextRollButton from "@/components/ui/TextRollButton";

const divisions = [
  {
    title: "Growth & Marketing",
    subtitle: "Customer Acquisition & Revenue",
    description: "We help businesses acquire customers and increase revenue through data-driven marketing strategies. From SEO to paid ads, we build the marketing engine that generates consistent leads and sales.",
    highlights: ["SEO & Google Ads", "Meta Ads & Social Media", "Branding & Creative", "Performance Marketing"],
    href: "/solutions/growth-marketing",
    stats: { value: "52.8K+", label: "Clicks Generated" },
  },
  {
    title: "Technology & AI",
    subtitle: "Build, Automate & Scale",
    description: "We build the technology infrastructure and AI-powered automation systems that allow businesses to scale without scaling costs. From custom software to AI workflows, we engineer your competitive advantage.",
    highlights: ["Web & Mobile Apps", "ERP / CRM Systems", "AI Chatbots & Automation", "Custom Software"],
    href: "/solutions/technology-ai",
    stats: { value: "100+", label: "Systems Built" },
  },
];

export default function DivisionsSection() {
  return (
    <section className="py-24 bg-[#FFFFFF]">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-16"
        >
          <SectionBadge number="1" label="Our Divisions" />
          <h2 className="axion-heading text-[#111827] mt-6 mb-4 max-w-3xl">
            Everything Your Business Needs <span className="text-[#F26522]">Under One Roof</span>
          </h2>
          <p className="text-lg text-[#6B7280] font-sans max-w-2xl">
            The only partner you need — from acquiring customers and growing revenue
            to building software and automating operations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {divisions.map((division, index) => (
            <motion.div
              key={division.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              className="bg-[#F5F5F5] rounded-2xl p-8 lg:p-12 hover-lift group"
            >
              <h3 className="font-display font-bold text-3xl text-[#111827] mb-2">
                {division.title}
              </h3>
              <p className="text-[#F26522] font-semibold text-sm mb-6 uppercase tracking-wide">
                {division.subtitle}
              </p>
              
              <p className="text-[#6B7280] font-sans mb-8 leading-relaxed">
                {division.description}
              </p>

              <div className="space-y-3 mb-10">
                {division.highlights.map((item) => (
                  <div key={item} className="flex items-center gap-3 text-[#111827] font-sans text-sm font-medium">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#F26522]" />
                    {item}
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between pt-8 border-t border-gray-200">
                <div>
                  <div className="text-3xl font-display font-bold text-[#111827] mb-1">
                    {division.stats.value}
                  </div>
                  <div className="text-xs font-sans text-[#6B7280] uppercase tracking-wider font-semibold">
                    {division.stats.label}
                  </div>
                </div>
                <TextRollButton href={division.href} label="Explore" variant="orange" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
