"use client";

import { motion } from "framer-motion";
import SectionBadge from "@/components/ui/SectionBadge";

const steps = [
  {
    number: "01",
    title: "Acquire Customers",
    desc: "SEO, Paid Ads & Social Media generate qualified leads",
    color: "bg-[#F26522]",
    connector: true,
  },
  {
    number: "02",
    title: "Generate Leads",
    desc: "Landing pages, funnels & CRO convert traffic into prospects",
    color: "bg-[#e05a1a]",
    connector: true,
  },
  {
    number: "03",
    title: "Convert Customers",
    desc: "Email automation, CRM & follow-ups close more deals",
    color: "bg-[#c54b11]",
    connector: true,
  },
  {
    number: "04",
    title: "Build Systems",
    desc: "Websites, mobile apps, ERP & CRM digitize operations",
    color: "bg-[#111827]",
    connector: true,
  },
  {
    number: "05",
    title: "Automate Operations",
    desc: "AI chatbots, workflows & agents handle repetitive tasks",
    color: "bg-[#374151]",
    connector: true,
  },
  {
    number: "06",
    title: "Scale Business",
    desc: "Analytics, reporting & optimization drive sustainable growth",
    color: "bg-[#4B5563]",
    connector: false,
  },
];

export default function GrowthJourneySection() {
  return (
    <section className="py-24 bg-[#F5F5F5]">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center flex flex-col items-center mb-16"
        >
          <SectionBadge number="8" label="The Unified Journey" />
          <h2 className="axion-heading text-[#111827] mt-6 mb-4">
            How Growth & Technology <span className="text-[#F26522]">Work Together</span>
          </h2>
          <p className="text-lg text-[#6B7280] font-sans max-w-2xl">
            Our marketing and technology divisions work as one ecosystem — each step
            amplifying the next, creating a compounding growth engine for your business.
          </p>
        </motion.div>

        <div className="relative">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-4 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                className="flex flex-col items-center text-center"
              >
                <div className={`w-[104px] h-[104px] ${step.color} rounded-2xl flex flex-col items-center justify-center mb-5 shadow-sm hover-lift relative`}>
                  <span className="text-white/80 font-sans text-xs font-semibold uppercase tracking-widest">Step</span>
                  <span className="text-white font-display font-bold text-3xl mt-1">{step.number}</span>
                </div>
                <h3 className="font-display font-bold text-[#111827] text-sm mb-2">{step.title}</h3>
                <p className="text-[#6B7280] font-sans text-xs leading-relaxed">{step.desc}</p>
                <span className={`mt-3 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider ${i < 3 ? "bg-amber-100 text-amber-800" : "bg-gray-200 text-gray-800"}`}>
                  {i < 3 ? "Marketing" : "Technology"}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
