import type { Metadata } from "next";
import Link from "next/link";
import { Globe, ArrowRight } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import TextRollButton from "@/components/ui/TextRollButton";
import SectionBadge from "@/components/ui/SectionBadge";
import ExpandingCard from "@/components/ui/ExpandingCard";

export const metadata: Metadata = {
  title: "Web Design & Development — GrowthSpare",
  description: "GrowthSpare builds high-performing websites, e-commerce stores, and landing pages that rank on Google and convert visitors into customers.",
};

const services = [
  { title: "Business Websites", desc: "Professional, SEO-optimized websites that represent your brand and generate leads 24/7." },
  { title: "E-commerce Stores", desc: "High-converting Shopify and WooCommerce stores that drive online sales." },
  { title: "Landing Pages", desc: "Conversion-focused landing pages built for your ad campaigns and lead gen." },
  { title: "UI/UX Design", desc: "User-centered design that makes your website intuitive, engaging, and beautiful." },
  { title: "WordPress Development", desc: "Custom WordPress themes and plugins for scalable, manageable websites." },
  { title: "Shopify Development", desc: "Custom Shopify stores with seamless checkout and product management." },
];

export default function WebDesignPage() {
  return (
    <>
      <section className="bg-[#FFFFFF] py-16 md:py-20 border-b border-gray-100">
        <FadeIn>
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionBadge icon={Globe} text="Web Design & Development
              " />
              <h1 className="axion-heading text-[clamp(1.5rem,4vw,3.2rem)] font-display font-bold text-[#111827] leading-tight mb-5">
                Websites That{" "}
                <span className="text-[#F5A623]">Rank, Convert & Grow.</span>
              </h1>
              <p className="text-[#6B7280] font-sans text-lg leading-relaxed mb-7">
                Creativity isn&apos;t just what we do — it&apos;s how we think. We build high-performing websites
                that are fast, beautiful, and optimized to generate leads and revenue for your business.
              </p>
              <div className="flex gap-4">
                <Link href="/contact" className="bg-[#F5A623] hover:bg-[#D4901E] text-[#111827] font-semibold px-6 py-3.5 rounded-lg transition-colors">
                  Get Free Quote
                </Link>
                <Link href="/projects" className="border-2 border-gray-200 hover:border-gray-900 text-gray-700 font-semibold px-6 py-3.5 rounded-lg transition-colors">
                  View Our Work
                </Link>
              </div>
            </div>
            <img
              src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=700"
              alt="Web Design and Development"
              className="w-full rounded-2xl shadow-xl object-cover aspect-video"
            />
          </div>
        </div>
      </FadeIn>
      </section>

      <section className="py-16 bg-[#EFEFEF]">
        <FadeIn>
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-[#111827] mb-3">What We Build</h2>
            <p className="text-[#6B7280] font-sans max-w-xl mx-auto">Every website we build is fast, mobile-optimized, and designed to convert.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.title} className="bg-white rounded-2xl p-7 border border-gray-100 hover:border-indigo-200 hover:shadow-sm transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]">
                <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center mb-4">
                  <Globe className="w-5 h-5 text-indigo-600" />
                </div>
                <h3 className="font-bold text-[#111827] mb-2">{s.title}</h3>
                <p className="text-[#6B7280] font-sans text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
      </section>

      <section className="py-16 bg-white">
        <FadeIn>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-[#111827] mb-8">Our Tech Stack</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {["Next.js", "React", "WordPress", "Shopify", "Tailwind CSS", "Figma", "TypeScript", "Vercel", "WooCommerce", "Webflow"].map((tech) => (
              <span key={tech} className="bg-gray-100 text-gray-700 font-semibold text-sm px-4 py-2 rounded-full border border-gray-200">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </FadeIn>
      </section>

      <section className="py-20 bg-gray-950 text-center">
        <FadeIn>
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <h2 className="text-3xl font-black text-white mb-4">Ready to Build Your Dream Website?</h2>
          <p className="text-[#6B7280] font-sans text-lg mb-8">Get a free consultation and project quote within 24 hours.</p>
          <TextRollButton href="/contact" className="inline-flex items-center gap-2 bg-[#F5A623] hover:bg-[#D4901E] text-[#111827] font-semibold px-8 py-4 rounded-lg transition-colors shadow-lg">Get Free Quote </TextRollButton>
        </div>
      </FadeIn>
      </section>
    </>
  );
}
