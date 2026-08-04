"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Script from "next/script";
import SectionBadge from "@/components/ui/SectionBadge";
import TextRollButton from "@/components/ui/TextRollButton";

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

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a,
      },
    })),
  };

  return (
    <section className="py-24 bg-[#EFEFEF]">
      <Script
        id="faq-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 flex flex-col md:flex-row gap-12 lg:gap-20">
        <div className="md:w-1/3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <SectionBadge number="4" label="Common questions" borderColor="border-gray-300" />
            <h2 className="axion-heading text-[#111827] mt-6 mb-6">
              Your Questions, <span className="text-[#F5A623]">Answered</span>
            </h2>
            <p className="text-[#6B7280] font-sans mb-8 leading-relaxed">
              Common questions about our marketing, technology, and AI services.
            </p>
            <div className="hidden md:block">
              <p className="text-sm font-semibold text-[#111827] mb-4">Still have questions?</p>
              <TextRollButton href="/contact" label="Talk to Us" variant="orange" />
            </div>
          </motion.div>
        </div>

        <div className="md:w-2/3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="space-y-4"
          >
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl overflow-hidden hover-lift border border-gray-100"
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-6 text-left"
                >
                  <h3 className="font-display font-semibold text-lg text-[#111827] pr-4">
                    {faq.q}
                  </h3>
                  <motion.div
                    animate={{ rotate: open === i ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="shrink-0 w-8 h-8 bg-[#F5F5F5] rounded-full flex items-center justify-center text-[#111827]"
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
                      <div className="px-6 pb-6">
                        <p className="text-[#6B7280] font-sans leading-relaxed">
                          {faq.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>
          <div className="md:hidden mt-8">
            <p className="text-sm font-semibold text-[#111827] mb-4">Still have questions?</p>
            <TextRollButton href="/contact" label="Talk to Us" variant="orange" />
          </div>
        </div>
      </div>
    </section>
  );
}
