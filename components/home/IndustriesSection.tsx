"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import SectionBadge from "@/components/ui/SectionBadge";
import TextRollButton from "@/components/ui/TextRollButton";

const industries = [
  { name: "Healthcare", icon: "🏥", marketing: "Patient acquisition, local SEO, content", tech: "Hospital management, patient portals, AI appointment scheduling" },
  { name: "Real Estate", icon: "🏢", marketing: "Lead gen, Meta Ads, property marketing", tech: "CRM, property portals, AI chatbots for inquiries" },
  { name: "Education", icon: "🎓", marketing: "Student enrollment campaigns, SEO", tech: "LMS platforms, admission systems, AI tutors" },
  { name: "Finance", icon: "💰", marketing: "Lead generation, compliance content", tech: "Billing systems, custom fintech apps, CRM" },
  { name: "Manufacturing", icon: "🏭", marketing: "B2B marketing, trade show digital", tech: "ERP, inventory management, IoT dashboards" },
  { name: "E-Commerce", icon: "🛒", marketing: "Shopping Ads, SEO, email marketing", tech: "Shopify/custom stores, logistics integrations" },
  { name: "Logistics", icon: "🚚", marketing: "Fleet branding, B2B lead gen", tech: "Route management software, tracking systems" },
  { name: "Hospitality", icon: "🏨", marketing: "Booking campaigns, review management", tech: "Reservation systems, AI concierge chatbots" },
  { name: "Legal", icon: "⚖️", marketing: "Local SEO, reputation management", tech: "Case management CRM, document automation" },
  { name: "Startups", icon: "🚀", marketing: "Go-to-market strategy, growth hacking", tech: "MVP development, SaaS platforms, AI features" },
];

export default function IndustriesSection() {
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
          <SectionBadge number="6" label="Industries We Serve" borderColor="border-gray-300" />
          <h2 className="axion-heading text-[#111827] mt-6 mb-4">
            Tailored for Your Industry
          </h2>
          <p className="text-lg text-[#6B7280] font-sans max-w-2xl">
            Deep domain expertise across 10+ industries. Both marketing and technology
            solutions are customized to the specific challenges of your sector.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6"
        >
          {industries.map((industry) => (
            <Link
              key={industry.name}
              href="/industries"
              className="group bg-white rounded-2xl p-6 text-center hover-lift border border-gray-100 transition-all duration-500"
            >
              <div className="text-4xl mb-4">{industry.icon}</div>
              <h3 className="font-display font-bold text-[#111827] text-base mb-2 group-hover:text-[#F26522] transition-colors">{industry.name}</h3>
              <p className="text-[#6B7280] font-sans text-xs leading-relaxed line-clamp-3">{industry.marketing}</p>
            </Link>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mt-12"
        >
          <TextRollButton href="/industries" label="View All Industries" variant="dark" />
        </motion.div>
      </div>
    </section>
  );
}
