"use client";

import { motion } from "framer-motion";
import SectionBadge from "@/components/ui/SectionBadge";

const steps = [
  {
    step: "01",
    title: "Discovery & Audit",
    desc: "We deep-dive into your business goals, current state, competition, and opportunities across both marketing and technology.",
  },
  {
    step: "02",
    title: "Strategy & Roadmap",
    desc: "A unified growth and technology roadmap with clear KPIs, timelines, priorities, and resource allocation.",
  },
  {
    step: "03",
    title: "Build & Execute",
    desc: "We simultaneously run marketing campaigns and build technology solutions — maximizing speed to value.",
  },
  {
    step: "04",
    title: "Automate & Optimize",
    desc: "Continuous performance optimization, A/B testing, and AI automation deployment to maximize efficiency.",
  },
  {
    step: "05",
    title: "Scale & Report",
    desc: "Transparent performance reporting across all initiatives, with strategic quarterly reviews to drive the next phase of growth.",
  },
];

export default function ProcessSection() {
  return (
    <section className="py-24 bg-[#EFEFEF]">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center flex flex-col items-center mb-16"
        >
          <SectionBadge number="9" label="How We Work" borderColor="border-gray-300" />
          <h2 className="axion-heading text-[#111827] mt-6 mb-4">
            Our Process
          </h2>
          <p className="text-lg text-[#6B7280] font-sans max-w-2xl">
            A proven five-step framework that transforms your business — whether the goal
            is more customers, better systems, or full AI automation.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex flex-col items-center text-center group bg-white p-6 rounded-2xl hover-lift border border-gray-100"
            >
              <div className="w-16 h-16 rounded-full bg-[#F5F5F5] text-[#111827] flex items-center justify-center mb-5 group-hover:bg-[#F5A623] group-hover:text-[#111827] transition-colors duration-300">
                <span className="font-display font-bold text-xl">{step.step}</span>
              </div>
              <h3 className="font-display font-bold text-[#111827] mb-3">{step.title}</h3>
              <p className="text-[#6B7280] font-sans text-xs leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
