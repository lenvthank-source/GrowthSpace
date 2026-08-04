import type { Metadata } from "next";
import Link from "next/link";
import { MessageSquare, ArrowRight } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import TextRollButton from "@/components/ui/TextRollButton";
import SectionBadge from "@/components/ui/SectionBadge";
import ExpandingCard from "@/components/ui/ExpandingCard";

export const metadata: Metadata = {
  title: "Content Marketing Services — GrowthSpare",
  description: "GrowthSpare's content marketing services include blog writing, SEO content, copywriting, video scripts, and infographics that convert visitors into customers.",
};

const services = [
  { title: "Blog Writing", desc: "SEO-optimized long-form articles that rank on Google and build authority." },
  { title: "Website Copywriting", desc: "Persuasive website copy that converts visitors into leads and customers." },
  { title: "Social Media Content", desc: "Platform-native content that engages your audience and drives action." },
  { title: "Video Scripts", desc: "Compelling scripts for YouTube, Reels, and explainer videos." },
  { title: "Email Copy", desc: "High-open-rate email sequences that nurture and convert." },
  { title: "Infographics & Visual Content", desc: "Shareable visual content that simplifies complex information." },
];

export default function ContentPage() {
  return (
    <>
      <section className="bg-[#FFFFFF] py-16 md:py-20 border-b border-gray-100">
        <FadeIn>
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionBadge icon={MessageSquare} text="Content Marketing
              " />
              <h1 className="axion-heading text-[clamp(1.5rem,4vw,3.2rem)] font-display font-bold text-[#111827] leading-tight mb-5">
                Content That{" "}
                <span className="text-[#F26522]">Ranks, Engages & Converts.</span>
              </h1>
              <p className="text-[#6B7280] font-sans text-lg leading-relaxed mb-7">
                We create content that doesn&apos;t just fill space — it builds authority, attracts qualified
                traffic, and converts visitors into customers. Every piece is crafted with strategy, SEO,
                and your audience in mind.
              </p>
              <TextRollButton href="/contact" className="inline-flex items-center gap-2 bg-[#F26522] hover:bg-[#e05a1a] text-white font-semibold px-6 py-3.5 rounded-lg transition-colors">Get Content Strategy </TextRollButton>
            </div>
            <img
              src="https://images.pexels.com/photos/6177607/pexels-photo-6177607.jpeg?auto=compress&cs=tinysrgb&w=700"
              alt="Content Marketing"
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
            <h2 className="text-3xl font-black text-[#111827] mb-3">Our Content Services</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.title} className="bg-white rounded-2xl p-7 border border-gray-100 hover:border-green-200 hover:shadow-sm transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]">
                <div className="w-2 h-8 bg-green-500 rounded-full mb-4" />
                <h3 className="font-bold text-[#111827] mb-2">{s.title}</h3>
                <p className="text-[#6B7280] font-sans text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
      </section>

      <section className="py-20 bg-gray-950 text-center">
        <FadeIn>
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <h2 className="text-3xl font-black text-white mb-4">Start Creating Content That Converts</h2>
          <p className="text-[#6B7280] font-sans text-lg mb-8">Let&apos;s build a content strategy that drives traffic and grows your business.</p>
          <TextRollButton href="/contact" className="inline-flex items-center gap-2 bg-[#F26522] hover:bg-[#e05a1a] text-white font-semibold px-8 py-4 rounded-lg transition-colors shadow-lg">Book Free Consultation </TextRollButton>
        </div>
      </FadeIn>
      </section>
    </>
  );
}
