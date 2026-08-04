"use client";

import { motion } from "framer-motion";
import { Zap, TrendingUp, Building2 } from "lucide-react";
import SectionBadge from "@/components/ui/SectionBadge";
import TextRollButton from "@/components/ui/TextRollButton";

const stages = [
  {
    icon: Zap,
    stage: "Startup",
    tagline: "Launch & Get Noticed",
    services: [
      { label: "Brand Identity & Logo", category: "Marketing" },
      { label: "Business Website", category: "Technology" },
      { label: "SEO Foundation", category: "Marketing" },
      { label: "Social Media Setup", category: "Marketing" },
      { label: "Lead Gen Landing Pages", category: "Technology" },
      { label: "Basic CRM Setup", category: "Technology" },
    ],
    cta: "Launch Your Business",
    href: "/contact",
  },
  {
    icon: TrendingUp,
    stage: "Growing Business",
    tagline: "Scale Revenue & Operations",
    badge: "Most Popular",
    services: [
      { label: "Google Ads & Meta Ads", category: "Marketing" },
      { label: "Custom CRM System", category: "Technology" },
      { label: "Mobile App", category: "Technology" },
      { label: "Email Automation", category: "Marketing" },
      { label: "AI Chatbot", category: "Technology" },
      { label: "Content Marketing", category: "Marketing" },
    ],
    cta: "Start Growing",
    href: "/contact",
  },
  {
    icon: Building2,
    stage: "Scaling Enterprise",
    tagline: "Automate & Dominate",
    services: [
      { label: "ERP Implementation", category: "Technology" },
      { label: "AI Workflow Automation", category: "Technology" },
      { label: "Enterprise SEO", category: "Marketing" },
      { label: "Custom SaaS Platform", category: "Technology" },
      { label: "Advanced Analytics", category: "Marketing" },
      { label: "AI Agents & Assistants", category: "Technology" },
    ],
    cta: "Enterprise Solutions",
    href: "/contact",
  },
];

export default function BusinessStageSection() {
  return (
    <section className="py-24 bg-[#FFFFFF]">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center flex flex-col items-center mb-16"
        >
          <SectionBadge number="7" label="Solutions by Business Stage" />
          <h2 className="axion-heading text-[#111827] mt-6 mb-4">
            We Scale With You
          </h2>
          <p className="text-lg text-[#6B7280] font-sans max-w-2xl">
            Whether you&apos;re just starting, actively growing, or scaling to enterprise — we have
            the right mix of marketing and technology to match your stage.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          {stages.map((stage, index) => {
            const Icon = stage.icon;
            return (
              <motion.div
                key={stage.stage}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                className="relative bg-[#F5F5F5] rounded-2xl p-8 hover-lift border border-gray-100 flex flex-col h-full"
              >
                {stage.badge && (
                  <div className="absolute -top-3 left-8">
                    <span className="bg-[#F26522] text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                      {stage.badge}
                    </span>
                  </div>
                )}

                <div className="flex items-center gap-4 mb-8 mt-2">
                  <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-sm">
                    <Icon className="w-7 h-7 text-[#111827]" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-[#111827] text-xl">{stage.stage}</h3>
                    <p className="text-[#F26522] text-xs uppercase tracking-wide font-semibold mt-1">{stage.tagline}</p>
                  </div>
                </div>

                <div className="space-y-4 mb-10 flex-grow">
                  {stage.services.map((s) => (
                    <div key={s.label} className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#111827]" />
                        <span className="text-[#111827] font-sans text-sm font-medium">{s.label}</span>
                      </div>
                      <span className={`text-[10px] uppercase tracking-wider font-bold px-2.5 py-1 rounded-full ${
                        s.category === "Marketing"
                          ? "bg-amber-100 text-amber-800"
                          : "bg-blue-100 text-blue-800"
                      }`}>
                        {s.category}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="pt-6 border-t border-gray-200 mt-auto">
                  <TextRollButton href={stage.href} label={stage.cta} variant="dark" className="w-full justify-center" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
