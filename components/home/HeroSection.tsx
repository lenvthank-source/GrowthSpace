"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ShaderHeroBackground from "@/components/ui/ShaderHeroBackground";
import TextRollButton from "@/components/ui/TextRollButton";
import CountUp from "@/components/ui/CountUp";

const stats = [
  { end: 50, suffix: "+", label: "Brands Grown" },
  { end: 10, suffix: "+", label: "Years Experience" },
  { end: 95, suffix: "%", label: "Client Retention" },
  { end: 2.45, suffix: "M+", label: "Ad Spend Managed", decimals: 2 },
];

const brands = [
  "Aadiananta", "Xzen Italian Bathing", "Abasic Concept", "Modern School",
  "Srigauri Fashion", "IELTSwithGagan", "Dektek Automation", "Ansa Interiors",
  "Aadiananta", "Xzen Italian Bathing", "Abasic Concept", "Modern School",
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden bg-[#F5F5F5]">
      {/* Shader Background */}
      <div className="absolute inset-0 z-0">
        <ShaderHeroBackground />
      </div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 pb-16 pt-32">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <span className="inline-block text-[#F5A623] font-semibold text-sm tracking-wider uppercase mb-4">
              GrowthSpare
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="axion-hero-heading text-[#111827] mb-6"
          >
            <span className="block">More Customers.</span>
            <span className="block text-[#F5A623]">Better Systems.</span>
            <span className="block">Faster Growth.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-lg md:text-xl text-[#6B7280] font-sans max-w-2xl mb-10"
          >
            Delhi Best Digital Marketing Agency &amp; AI Solutions, GrowthSpare combines performance marketing and custom technology to help businesses grow online and run smarter — all under one roof.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex flex-wrap items-center gap-6 mb-16"
          >
            <TextRollButton href="/contact" label="Start a project" variant="orange" />
            <div className="flex items-center gap-3">
              <span className="text-sm font-semibold text-[#111827]">Delhi NCR</span>
              <span className="text-sm text-[#6B7280]">Top Growth Partner</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-8 py-8 border-y border-gray-200"
          >
            {stats.map((stat, i) => (
              <div key={i}>
                <div className="text-3xl font-display font-bold text-[#111827] mb-1">
                  <CountUp end={stat.end} suffix={stat.suffix} duration={4000} decimals={stat.decimals || 0} />
                </div>
                <div className="text-sm font-sans text-[#6B7280]">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Brand Marquee */}
      <div className="relative z-10 w-full overflow-hidden bg-white/50 backdrop-blur-sm border-t border-gray-200 py-4">
        <div className="flex gap-12 animate-marquee whitespace-nowrap">
          {brands.map((brand, i) => (
             <span key={i} className="text-sm font-display font-semibold text-[#6B7280]">
               {brand}
             </span>
          ))}
        </div>
      </div>
    </section>
  );
}

