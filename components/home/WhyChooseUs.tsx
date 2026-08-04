"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, TrendingUp, Cpu } from "lucide-react";
import SectionBadge from "@/components/ui/SectionBadge";
import TextRollButton from "@/components/ui/TextRollButton";

const features = [
  { title: "Marketing Expertise", desc: "Certified SEO, Google Ads, and social media specialists with proven track records.", division: "Marketing" },
  { title: "Software Engineering", desc: "Full-stack developers building scalable web apps, mobile apps, and enterprise systems.", division: "Technology" },
  { title: "AI Automation", desc: "AI engineers building chatbots, agents, and workflow automation that save thousands of hours.", division: "AI" },
  { title: "Business Process Optimization", desc: "We redesign and automate workflows to eliminate bottlenecks and increase throughput.", division: "Technology" },
  { title: "Custom Development", desc: "No templates. Every solution is purpose-built for your specific business needs.", division: "Technology" },
  { title: "Enterprise Solutions", desc: "ERP, CRM, HRMS and multi-tenant SaaS platforms for businesses at any scale.", division: "Technology" },
  { title: "End-to-End Support", desc: "From strategy to execution to optimization — we stay involved at every step.", division: "Both" },
  { title: "One Vendor for Everything", desc: "No more juggling agencies. We handle growth and technology under one partnership.", division: "Both" },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-[#EFEFEF]">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="lg:sticky lg:top-28"
          >
            <SectionBadge number="11" label="Why GrowthSpare" borderColor="border-gray-300" />
            <h2 className="axion-heading text-[#111827] mt-6 mb-6">
              Unlike Any Agency
              <br />
              <span className="text-[#F5A623]">You've Worked With.</span>
            </h2>
            <p className="text-[#6B7280] font-sans text-lg leading-relaxed mb-8">
              Traditional agencies only do marketing. Development shops only build software.
              GrowthSpare is the only partner that combines both — plus AI automation — to deliver
              end-to-end business growth.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
                <TrendingUp className="w-6 h-6 text-[#F5A623] mb-3" />
                <p className="font-display font-bold text-[#111827] text-sm mb-1">Growth & Marketing</p>
                <p className="text-[#6B7280] font-sans text-xs leading-relaxed">Customer acquisition & revenue generation</p>
              </div>
              <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
                <Cpu className="w-6 h-6 text-[#111827] mb-3" />
                <p className="font-display font-bold text-[#111827] text-sm mb-1">Technology & AI</p>
                <p className="text-[#6B7280] font-sans text-xs leading-relaxed">Build, automate & scale operations</p>
              </div>
            </div>

            <TextRollButton href="/about" label="Learn More About Us" variant="dark" />
          </motion.div>

          <div className="grid grid-cols-1 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05, ease: [0.25, 0.1, 0.25, 1] }}
                className="flex gap-4 bg-white rounded-2xl p-6 border border-gray-100 hover-lift"
              >
                <CheckCircle2 className="w-6 h-6 text-[#F5A623] shrink-0" />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <h3 className="font-display font-bold text-[#111827] text-base">{feature.title}</h3>
                    <span className="text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full bg-gray-100 text-gray-800">
                      {feature.division}
                    </span>
                  </div>
                  <p className="text-[#6B7280] font-sans text-sm leading-relaxed">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
