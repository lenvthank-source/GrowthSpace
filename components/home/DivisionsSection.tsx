"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { TrendingUp, Cpu, ArrowRight, CheckCircle2, Zap, Target, Bot } from "lucide-react";

const divisions = [
  {
    title: "Growth & Marketing",
    subtitle: "Customer Acquisition & Revenue",
    description: "We help businesses acquire customers and increase revenue through data-driven marketing strategies. From SEO to paid ads, we build the marketing engine that generates consistent leads and sales.",
    highlights: ["SEO & Google Ads", "Meta Ads & Social Media", "Branding & Creative", "Performance Marketing"],
    icon: TrendingUp,
    href: "/solutions/growth-marketing",
    gradient: "from-amber-500 to-orange-500",
    shadowColor: "amber",
    stats: { value: "52.8K+", label: "Clicks Generated" },
  },
  {
    title: "Technology & AI",
    subtitle: "Build, Automate & Scale",
    description: "We build the technology infrastructure and AI-powered automation systems that allow businesses to scale without scaling costs. From custom software to AI workflows, we engineer your competitive advantage.",
    highlights: ["Web & Mobile Apps", "ERP / CRM Systems", "AI Chatbots & Automation", "Custom Software"],
    icon: Cpu,
    href: "/solutions/technology-ai",
    gradient: "from-blue-500 to-indigo-500",
    shadowColor: "blue",
    stats: { value: "100+", label: "Systems Built" },
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 80, damping: 15 },
  },
};

export default function DivisionsSection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-gray-50">
      {/* Background pattern */}
      <div className="absolute inset-0 dots-pattern opacity-30" />

      {/* Gradient orbs */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-gradient-to-br from-amber-200/30 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-gradient-to-br from-blue-200/30 to-transparent rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-white border border-gray-200 text-gray-600 text-xs font-semibold px-4 py-2 rounded-full mb-6 shadow-sm">
            <Zap className="w-3.5 h-3.5 text-amber-500" />
            Two Divisions, One Vision
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-black text-gray-900 mb-5 tracking-tight">
            Everything Your Business Needs
            <br className="hidden sm:block" />
            <span className="text-gradient"> Under One Roof</span>
          </h2>

          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            The only partner you need — from acquiring customers and growing revenue
            to building software and automating operations.
          </p>
        </motion.div>

        {/* Division Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6 lg:gap-8"
        >
          {divisions.map((division) => {
            const Icon = division.icon;
            return (
              <motion.div
                key={division.title}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                {/* Card */}
                <div className="relative h-full bg-white rounded-3xl p-8 lg:p-10 shadow-xl shadow-gray-200/50 border border-gray-100 overflow-hidden transition-all duration-500 hover:shadow-2xl">
                  {/* Gradient background on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${division.gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`} />

                  {/* Top decorative line */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${division.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                  <div className="relative">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${division.gradient} flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110`}>
                          <Icon className="w-7 h-7 text-white" />
                        </div>
                        <div>
                          <h3 className="font-display font-bold text-gray-900 text-xl">
                            {division.title}
                          </h3>
                          <p className={`text-sm font-medium bg-gradient-to-r ${division.gradient} bg-clip-text text-transparent`}>
                            {division.subtitle}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-500 leading-relaxed mb-6">
                      {division.description}
                    </p>

                    {/* Highlights */}
                    <div className="space-y-3 mb-8">
                      {division.highlights.map((item) => (
                        <div key={item} className="flex items-center gap-3 text-gray-600 text-sm">
                          <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${division.gradient} flex items-center justify-center`}>
                            <CheckCircle2 className="w-3 h-3 text-white" />
                          </div>
                          {item}
                        </div>
                      ))}
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                      {/* Stat */}
                      <div>
                        <p className="text-2xl font-display font-black text-gray-900">
                          {division.stats.value}
                        </p>
                        <p className="text-xs text-gray-400 font-medium">
                          {division.stats.label}
                        </p>
                      </div>

                      {/* Link */}
                      <Link
                        href={division.href}
                        className={`inline-flex items-center gap-2 text-sm font-semibold bg-gradient-to-r ${division.gradient} bg-clip-text text-transparent group/link`}
                      >
                        Explore {division.title.split(" & ")[0]}
                        <ArrowRight className={`w-4 h-4 ${division.shadowColor === "amber" ? "text-amber-500" : "text-blue-500"} group-hover/link:translate-x-1 transition-transform`} />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-gray-500 text-sm mb-4">
            Need both? Many of our clients use our marketing and technology divisions together.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 font-medium text-sm transition-colors"
          >
            Let&apos;s discuss your needs <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
