"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    q: "Can we hire GrowthSpare for both marketing and software development?",
    a: "Absolutely — that's what sets us apart. GrowthSpare is a full-service partner offering both performance marketing and technology development under one roof. Many of our clients use both divisions, allowing us to create synergies between their marketing and technology investments.",
  },
  {
    q: "How long does SEO take to show results?",
    a: "SEO is a long-term investment. Most clients start seeing meaningful movement in rankings within 3–6 months, with significant traffic growth typically visible at 9–12 months. Paid ads (Google/Meta) produce results immediately.",
  },
  {
    q: "How long does it take to build a custom ERP or CRM system?",
    a: "Timeline depends on complexity. A basic CRM takes 4–6 weeks. A full ERP system with multiple modules (HR, inventory, billing, reporting) typically takes 3–6 months. We deliver in sprints, so you see progress and value throughout the project.",
  },
  {
    q: "Do you provide ongoing support after project delivery?",
    a: "Yes. We offer monthly retainers for both marketing services and technology maintenance. For software projects, we provide 3 months of free bug fixing post-launch, followed by flexible support plans.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 80, damping: 15 },
  },
};

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-gray-50">
      {/* Background */}
      <div className="absolute inset-0 dots-pattern opacity-30" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-bl from-amber-100/40 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-gradient-to-tr from-blue-100/30 to-transparent rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-white border border-gray-200 text-gray-600 text-xs font-semibold px-4 py-2 rounded-full mb-6 shadow-sm">
            <HelpCircle className="w-3.5 h-3.5 text-amber-500" />
            FAQ
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-black text-gray-900 mb-5 tracking-tight">
            Your Questions,
            <span className="text-gradient"> Answered</span>
          </h2>

          <p className="text-gray-500 text-lg max-w-xl mx-auto leading-relaxed">
            Common questions about our marketing, technology, and AI services.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-3"
        >
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="group"
            >
              <div
                className={`bg-white rounded-2xl overflow-hidden transition-all duration-300 ${
                  open === i
                    ? "shadow-xl shadow-amber-500/10 border-2 border-amber-400"
                    : "shadow-md shadow-gray-200/50 border-2 border-transparent"
                }`}
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                >
                  <span className={`font-semibold pr-4 text-base transition-colors duration-300 ${
                    open === i ? "text-gray-900" : "text-gray-700"
                  }`}>
                    {faq.q}
                  </span>

                  <motion.div
                    animate={{ rotate: open === i ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${
                      open === i
                        ? "bg-amber-500 text-white"
                        : "bg-gray-100 text-gray-400"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 border-t border-gray-100">
                        <p className="text-gray-700 leading-relaxed pt-4">
                          {faq.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-500 mb-4">Still have questions?</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-gray-900 hover:bg-amber-500 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300"
          >
            <MessageCircle className="w-4 h-4" />
            Talk to Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
