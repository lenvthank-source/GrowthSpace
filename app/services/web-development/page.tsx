import type { Metadata } from "next";
import Link from "next/link";
import { Globe, ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Web Design & Development — GrowthSpare | High-Performance Websites",
  description: "GrowthSpare builds high-performing websites, e-commerce stores, web applications, and SaaS platforms. Next.js, React, WordPress, Shopify — built to rank and convert.",
};

const services = [
  { title: "Corporate Websites", desc: "Professional, SEO-optimized business websites that generate leads and build credibility." },
  { title: "E-Commerce Platforms", desc: "High-converting online stores built on Shopify, WooCommerce, or custom stacks." },
  { title: "Custom Web Applications", desc: "Complex web apps with user portals, dashboards, APIs, and real-time features." },
  { title: "Landing Pages", desc: "Conversion-optimized landing pages for your ad campaigns and product launches." },
  { title: "SaaS Platforms", desc: "Multi-tenant SaaS products with subscription billing, onboarding, and analytics." },
  { title: "WordPress Development", desc: "Custom WordPress themes, plugins, and full website builds that are easy to manage." },
];

const techStack = ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "WordPress", "Shopify", "Vercel", "AWS", "Figma"];

export default function WebDevelopmentPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-blue-50 to-white py-16 md:py-20 border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-xs font-semibold px-3.5 py-2 rounded-full mb-6">
                <Globe className="w-3.5 h-3.5" /> Web Design & Development
              </span>
              <h1 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-5">
                Websites That{" "}
                <span className="text-blue-600">Rank, Convert & Scale.</span>
              </h1>
              <p className="text-gray-500 text-lg leading-relaxed mb-7">
                We build high-performance websites and web applications that are fast, beautiful,
                SEO-optimized, and engineered to convert visitors into customers. Every project is
                built with best-in-class technology and meticulous attention to detail.
              </p>
              <div className="flex gap-4">
                <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3.5 rounded-xl transition-colors shadow-md">
                  Get Free Quote
                </Link>
                <Link href="/solutions/growth-marketing" className="border-2 border-gray-200 hover:border-gray-900 text-gray-700 font-semibold px-6 py-3.5 rounded-xl transition-colors">
                  View Our Work
                </Link>
              </div>
            </div>
            <img src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=700" alt="Web Development" className="w-full rounded-3xl shadow-xl object-cover aspect-video" />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-gray-900 mb-3">What We Build</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.title} className="bg-blue-50/40 border border-blue-100 rounded-2xl p-7 hover:border-blue-200 hover:shadow-sm transition-all duration-200">
                <div className="w-2 h-8 bg-blue-500 rounded-full mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-black text-gray-900 mb-6">What&apos;s Included in Every Project</h2>
          <div className="grid sm:grid-cols-2 gap-3 mb-10">
            {["Responsive mobile-first design", "SEO-optimized architecture", "Core Web Vitals optimized", "Custom UI/UX design in Figma", "CMS integration for easy editing", "Performance & speed optimization", "SSL, security & best practices", "3 months post-launch support"].map((f) => (
              <div key={f} className="flex items-center gap-3 bg-white p-3.5 rounded-xl border border-gray-100">
                <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" />
                <span className="text-gray-700 text-sm">{f}</span>
              </div>
            ))}
          </div>
          <div>
            <p className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3">Our Tech Stack</p>
            <div className="flex flex-wrap justify-center gap-2">
              {techStack.map((t) => (
                <span key={t} className="bg-white border border-gray-200 text-gray-700 text-xs font-semibold px-3 py-1.5 rounded-full">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-950 text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-white mb-4">Ready to Build Your Website?</h2>
          <p className="text-gray-400 text-lg mb-8">Get a free project quote and design consultation within 24 hours.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-4 rounded-xl transition-colors shadow-lg">
            Get Free Quote <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
