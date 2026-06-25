"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRight, TrendingUp, ExternalLink, BarChart3 } from "lucide-react";

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
    gradient: "from-amber-500 to-orange-500",
    accent: "amber",
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
    gradient: "from-blue-500 to-indigo-500",
    accent: "blue",
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
    gradient: "from-emerald-500 to-teal-500",
    accent: "emerald",
  },
];

function CaseStudyCard({ study, index }: { study: typeof caseStudies[0]; index: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7.5deg", "-7.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="group relative perspective-1000"
    >
      <div className="relative h-full bg-white rounded-3xl overflow-hidden shadow-xl shadow-gray-200/50 border border-gray-100 transition-all duration-500 hover:shadow-2xl">
        {/* Gradient top border */}
        <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${study.gradient}`} />

        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          <motion.img
            src={study.screenshot}
            alt={`${study.client} dashboard`}
            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 via-transparent to-transparent" />

          {/* Channel badge */}
          <div className={`absolute top-4 left-4 flex items-center gap-1.5 bg-white/90 backdrop-blur-sm border border-gray-200 px-3 py-1.5 rounded-full shadow-sm`}>
            <TrendingUp className={`w-3.5 h-3.5 text-${study.accent}-500`} />
            <span className="text-xs font-bold text-gray-700">{study.channel}</span>
          </div>

          {/* Industry tag */}
          <div className="absolute bottom-4 left-4">
            <span className="text-xs font-semibold text-white/90 uppercase tracking-wider">
              {study.industry}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Client name */}
          <h3 className="font-display font-bold text-xl text-gray-900 mb-4 group-hover:text-gray-700 transition-colors">
            {study.client}
          </h3>

          {/* Challenge & Solution */}
          <div className="space-y-4 mb-6">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                Challenge
              </span>
              <p className="text-gray-600 text-sm mt-1 leading-relaxed">
                {study.challenge}
              </p>
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                Our Strategy
              </span>
              <p className="text-gray-600 text-sm mt-1 leading-relaxed">
                {study.strategy}
              </p>
            </div>
          </div>

          {/* Results */}
          <div className={`bg-gradient-to-br ${study.gradient} bg-opacity-5 rounded-2xl p-4`}>
            <div className="grid grid-cols-3 gap-3">
              {study.results.map((result) => (
                <div key={result.label} className="text-center">
                  <p className="font-display font-black text-lg text-gray-900">
                    {result.metric}
                  </p>
                  <p className="text-[10px] font-semibold text-gray-500 uppercase tracking-wide mt-0.5">
                    {result.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function CaseStudiesSection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-white">
      {/* Background elements */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-amber-100/50 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-blue-100/40 to-transparent rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-gray-50 to-gray-100 border border-gray-200 text-gray-600 text-xs font-semibold px-4 py-2 rounded-full mb-6">
            <BarChart3 className="w-3.5 h-3.5 text-amber-500" />
            Proven Results
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-black text-gray-900 mb-5 tracking-tight">
            Real Campaigns.
            <span className="text-gradient"> Real Numbers.</span>
          </h2>

          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Every metric below is pulled directly from live campaign dashboards —
            no estimates, no approximations.
          </p>
        </motion.div>

        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {caseStudies.map((study, index) => (
            <CaseStudyCard key={study.client} study={study} index={index} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-gray-900/20"
          >
            View All Case Studies
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
