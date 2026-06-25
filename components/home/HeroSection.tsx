"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, TrendingUp, Cpu, Sparkles, CheckCircle2, Play, BarChart3, MousePointerClick, Users, Zap, Bot, Globe } from "lucide-react";

const stats = [
  { value: "50+", label: "Brands Grown" },
  { value: "10+", label: "Years Experience" },
  { value: "95%", label: "Client Retention" },
  { value: "2.45M+", label: "Ad Spend Managed" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 100, damping: 15 },
  },
};

const modes = [
  {
    id: "marketing",
    label: "Growth & Marketing",
    icon: TrendingUp,
    color: "amber",
    gradient: "from-amber-500 to-orange-500",
    bg: "bg-amber-500",
    light: "bg-amber-50",
    border: "border-amber-200",
    text: "text-amber-600",
    tagline: "Acquire customers. Drive revenue.",
    metrics: [
      { icon: BarChart3, label: "Organic Traffic", value: "+340%", delta: "vs last quarter", color: "text-amber-600" },
      { icon: MousePointerClick, label: "Ad Conversions", value: "4,320", delta: "+18% this month", color: "text-orange-500" },
      { icon: Users, label: "Leads Generated", value: "2,100+", delta: "₹18.90 per lead", color: "text-amber-700" },
    ],
    services: ["SEO & Google Ads", "Meta Ads", "Branding"],
  },
  {
    id: "technology",
    label: "Technology & AI",
    icon: Cpu,
    color: "blue",
    gradient: "from-blue-500 to-indigo-500",
    bg: "bg-blue-500",
    light: "bg-blue-50",
    border: "border-blue-200",
    text: "text-blue-600",
    tagline: "Build systems. Automate operations.",
    metrics: [
      { icon: Globe, label: "Apps Deployed", value: "100+", delta: "web & mobile", color: "text-blue-600" },
      { icon: Bot, label: "AI Workflows", value: "Active", delta: "24/7 automation", color: "text-indigo-500" },
      { icon: Zap, label: "Efficiency Gain", value: "~60%", delta: "avg. across clients", color: "text-blue-700" },
    ],
    services: ["Web & Mobile Apps", "ERP / CRM", "AI Chatbots"],
  },
];

function AnimatedMetricRow({
  metric,
  delay,
}: {
  metric: (typeof modes)[0]["metrics"][0];
  delay: number;
}) {
  const Icon = metric.icon;
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.4 }}
      className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0"
    >
      <div className="flex items-center gap-3">
        <div className={`w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center`}>
          <Icon className={`w-4 h-4 ${metric.color}`} />
        </div>
        <div>
          <p className="text-xs font-medium text-gray-500">{metric.label}</p>
          <p className="text-[10px] text-gray-400">{metric.delta}</p>
        </div>
      </div>
      <motion.span
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: delay + 0.1, type: "spring" as const, stiffness: 200 }}
        className={`text-base font-display font-black ${metric.color}`}
      >
        {metric.value}
      </motion.span>
    </motion.div>
  );
}

function HeroVisual() {
  const [active, setActive] = useState(0);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % modes.length);
      setTick((t) => t + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const mode = modes[active];
  const Icon = mode.icon;

  return (
    <div className="relative">
      {/* Glow */}
      <div
        className={`absolute inset-0 blur-3xl rounded-[3rem] transition-all duration-1000 ${
          active === 0
            ? "bg-gradient-to-br from-amber-300/20 to-orange-200/10"
            : "bg-gradient-to-br from-blue-300/20 to-indigo-200/10"
        }`}
      />

      {/* Card shell */}
      <div className="relative bg-white rounded-3xl shadow-2xl shadow-gray-300/40 border border-gray-100 overflow-hidden">
        {/* Top accent bar */}
        <motion.div
          key={`bar-${active}`}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6 }}
          className={`h-1 bg-gradient-to-r ${mode.gradient} origin-left`}
        />

        {/* Header */}
        <div className="px-6 pt-5 pb-4 border-b border-gray-100">
          <div className="flex items-center justify-between">
            {/* Tab switcher */}
            <div className="flex gap-1 p-1 bg-gray-100 rounded-xl">
              {modes.map((m, i) => {
                const MIcon = m.icon;
                return (
                  <button
                    key={m.id}
                    onClick={() => { setActive(i); setTick((t) => t + 1); }}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-300 ${
                      active === i
                        ? `bg-white shadow-sm ${m.text}`
                        : "text-gray-400 hover:text-gray-600"
                    }`}
                  >
                    <MIcon className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">{i === 0 ? "Marketing" : "Technology"}</span>
                  </button>
                );
              })}
            </div>

            {/* Live pulse */}
            <div className="flex items-center gap-1.5">
              <span className="relative flex h-2 w-2">
                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${mode.bg}`} />
                <span className={`relative inline-flex rounded-full h-2 w-2 ${mode.bg}`} />
              </span>
              <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">Live</span>
            </div>
          </div>

          {/* Mode headline */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`header-${active}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="mt-4 flex items-center gap-3"
            >
              <div className={`w-10 h-10 rounded-2xl bg-gradient-to-br ${mode.gradient} flex items-center justify-center shadow-lg`}>
                <Icon className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-display font-bold text-gray-900 text-sm">{mode.label}</p>
                <p className={`text-xs ${mode.text}`}>{mode.tagline}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Metrics */}
        <div className="px-6 py-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={`metrics-${active}-${tick}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              {mode.metrics.map((metric, idx) => (
                <AnimatedMetricRow key={metric.label} metric={metric} delay={idx * 0.08} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Services chips */}
        <div className="px-6 py-4 border-t border-gray-100 bg-gray-50/50">
          <AnimatePresence mode="wait">
            <motion.div
              key={`chips-${active}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-wrap gap-2"
            >
              {mode.services.map((s, i) => (
                <motion.span
                  key={s}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.07 }}
                  className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full ${mode.light} ${mode.text} border ${mode.border}`}
                >
                  <CheckCircle2 className="w-3 h-3" />
                  {s}
                </motion.span>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress bar — auto-cycles */}
        <div className="h-0.5 bg-gray-100">
          <motion.div
            key={`progress-${active}-${tick}`}
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 4, ease: "linear" }}
            className={`h-full bg-gradient-to-r ${mode.gradient}`}
          />
        </div>
      </div>

      {/* Floating badge */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl shadow-gray-200/60 border border-gray-100 px-4 py-2.5"
      >
        <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-0.5">Clients Served</p>
        <p className="text-xl font-display font-black text-gray-900">50+</p>
      </motion.div>

      {/* Trust badge bottom left */}
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl shadow-gray-200/60 border border-gray-100 px-4 py-2.5"
      >
        <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-0.5">Delhi NCR</p>
        <p className="text-sm font-display font-black text-gray-900">Top Growth Partner</p>
      </motion.div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.35, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-amber-200/50 to-orange-200/30 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.25, scale: 1 }}
          transition={{ duration: 2, delay: 0.3, ease: "easeOut" }}
          className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-blue-200/40 to-indigo-200/30 rounded-full blur-3xl"
        />
        <div className="absolute top-20 left-1/4 w-2 h-2 bg-amber-400 rounded-full floating opacity-60" />
        <div className="absolute top-40 right-1/3 w-1.5 h-1.5 bg-blue-400 rounded-full floating-delayed opacity-60" />
        <div className="absolute bottom-40 left-1/3 w-2.5 h-2.5 bg-amber-300 rounded-full floating opacity-40" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          {/* Left — Headline */}
          <div className="space-y-8">
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200/50 text-amber-700 text-sm font-semibold px-4 py-2 rounded-full">
                <Sparkles className="w-4 h-4" />
                Delhi NCR&apos;s Growth & Technology Partner
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black text-gray-900 leading-[1.05] tracking-tight">
                <span className="block">More Customers.</span>
                <span className="block text-gradient">Better Systems.</span>
                <span className="block">Faster Growth.</span>
              </h1>

              <p className="text-lg md:text-xl text-gray-500 max-w-lg leading-relaxed">
                GrowthSpare combines performance marketing and custom technology to help
                businesses grow online and run smarter — all under one roof.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-2 bg-gray-900 text-white font-semibold px-7 py-4 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/20"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Start Growing Today
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>

              <Link
                href="/projects"
                className="group inline-flex items-center gap-2 border-2 border-gray-200 hover:border-gray-300 text-gray-700 font-semibold px-7 py-4 rounded-2xl transition-all duration-300 hover:bg-gray-50"
              >
                See Our Work
                <Play className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            </motion.div>

            <motion.div variants={itemVariants} className="pt-8 border-t border-gray-100">
              <div className="grid grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                  >
                    <p className="text-2xl md:text-3xl font-display font-black text-gray-900">
                      {stat.value}
                    </p>
                    <p className="text-xs text-gray-400 font-medium mt-1">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right — Animated Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative px-6 pb-6"
          >
            <HeroVisual />
          </motion.div>
        </motion.div>

        {/* Client logos marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-20 overflow-hidden"
        >
          <div className="text-center mb-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">
              Trusted by Industry Leaders
            </p>
          </div>
          <div className="relative">
            <div className="flex gap-12 animate-marquee">
              {[
                "Aadiananta", "Xzen Italian Bathing", "Abasic Concept", "Modern School",
                "Srigauri Fashion", "IELTSwithGagan", "Dektek Automation", "Ansa Interiors",
                "Aadiananta", "Xzen Italian Bathing", "Abasic Concept", "Modern School",
              ].map((brand, i) => (
                <span key={i} className="text-sm font-bold text-gray-300 whitespace-nowrap">
                  {brand}
                </span>
              ))}
            </div>
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent" />
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
