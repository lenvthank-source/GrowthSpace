"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Search, MousePointer2, Share2, Mail, TrendingUp,
  Globe, Smartphone, Database, Bot, Workflow, Layers, BarChart3,
} from "lucide-react";
import SectionBadge from "@/components/ui/SectionBadge";
import TextRollButton from "@/components/ui/TextRollButton";

const services = [
  { icon: Search, title: "SEO Services", desc: "Rank higher on Google and drive sustainable organic traffic that compounds over time.", href: "/services/seo", tag: "Marketing", tagColor: "bg-amber-100 text-amber-700" },
  { icon: MousePointer2, title: "Google Ads / PPC", desc: "Generate high-converting leads and sales with precision-targeted paid campaigns.", href: "/services/ppc", tag: "Marketing", tagColor: "bg-amber-100 text-amber-700" },
  { icon: Share2, title: "Social Media Marketing", desc: "Build brand awareness and a loyal community across all major social platforms.", href: "/services/social-media", tag: "Marketing", tagColor: "bg-amber-100 text-amber-700" },
  { icon: Globe, title: "Web Development", desc: "High-performing business websites, e-commerce stores, and web applications.", href: "/services/web-development", tag: "Technology", tagColor: "bg-blue-100 text-blue-700" },
  { icon: Smartphone, title: "Mobile App Development", desc: "Native and cross-platform Android and iOS apps built for performance and scale.", href: "/services/mobile-apps", tag: "Technology", tagColor: "bg-blue-100 text-blue-700" },
  { icon: Database, title: "ERP Solutions", desc: "Custom ERP systems that unify your operations — HR, inventory, billing, and more.", href: "/services/erp", tag: "Technology", tagColor: "bg-blue-100 text-blue-700" },
  { icon: BarChart3, title: "CRM Software", desc: "Custom CRM systems that streamline your sales pipeline and customer management.", href: "/services/crm", tag: "Technology", tagColor: "bg-blue-100 text-blue-700" },
  { icon: Bot, title: "AI Chatbots", desc: "Intelligent chatbots for customer support, lead qualification, and sales automation.", href: "/services/ai-chatbots", tag: "AI", tagColor: "bg-violet-100 text-violet-700" },
  { icon: Workflow, title: "AI Workflow Automation", desc: "End-to-end automation of business processes using AI agents and intelligent workflows.", href: "/services/ai-automation", tag: "AI", tagColor: "bg-violet-100 text-violet-700" },
  { icon: Mail, title: "Email Marketing", desc: "Automated email sequences that nurture leads and drive repeat revenue on autopilot.", href: "/services/email", tag: "Marketing", tagColor: "bg-amber-100 text-amber-700" },
  { icon: TrendingUp, title: "Performance Marketing", desc: "Data-driven campaigns on Meta, Google, and LinkedIn optimized for maximum ROI.", href: "/solutions/growth-marketing", tag: "Marketing", tagColor: "bg-amber-100 text-amber-700" },
  { icon: Layers, title: "Custom Software Development", desc: "Bespoke software solutions — SaaS platforms, internal tools, and enterprise applications.", href: "/services/custom-software", tag: "Technology", tagColor: "bg-blue-100 text-blue-700" },
];

export default function ServicesSection() {
  return (
    <section className="py-24 bg-[#FFFFFF]">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center flex flex-col items-center mb-16"
        >
          <SectionBadge number="10" label="All Our Services" />
          <h2 className="axion-heading text-[#111827] mt-6 mb-4">
            Featured Services
          </h2>
          <p className="text-lg text-[#6B7280] font-sans max-w-2xl">
            A unified portfolio of marketing, technology, and AI services — everything you need
            to grow your business in one place.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <Link
                  href={service.href}
                  className="block h-full group bg-[#F5F5F5] rounded-2xl p-6 hover-lift border border-gray-100"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center group-hover:bg-[#F26522] transition-colors duration-300">
                      <Icon className="w-6 h-6 text-[#111827] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider ${service.tagColor}`}>
                      {service.tag}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-[#111827] mb-2">
                    {service.title}
                  </h3>
                  <p className="text-[#6B7280] font-sans text-xs leading-relaxed">{service.desc}</p>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-wrap justify-center gap-4 mt-12"
        >
          <TextRollButton href="/solutions/growth-marketing" label="All Marketing Services" variant="orange" />
          <TextRollButton href="/solutions/technology-ai" label="All Technology Services" variant="dark" />
        </motion.div>
      </div>
    </section>
  );
}
