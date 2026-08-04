import type { Metadata } from "next";
import Link from "next/link";
import { Palette, ArrowRight } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import TextRollButton from "@/components/ui/TextRollButton";
import SectionBadge from "@/components/ui/SectionBadge";
import ExpandingCard from "@/components/ui/ExpandingCard";

export const metadata: Metadata = {
  title: "Branding & Creative Design — GrowthSpare",
  description: "GrowthSpare creates memorable brand identities — logos, brand guidelines, visual systems, and creative design that makes your business stand out.",
};

const services = [
  { title: "Logo Design", desc: "Timeless, versatile logo marks that communicate your brand values at a glance." },
  { title: "Brand Identity System", desc: "Complete brand guidelines — colors, typography, tone of voice, and usage rules." },
  { title: "Visual Design & Collateral", desc: "Business cards, presentations, brochures, and print materials that impress." },
  { title: "Social Media Design", desc: "Consistent templates and visual assets for all your social media platforms." },
  { title: "Packaging Design", desc: "Product packaging that stands out on shelves and communicates brand premium." },
  { title: "Motion Graphics", desc: "Animated logos, explainer videos, and social media motion content." },
];

export default function BrandingPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-orange-50 to-white py-16 md:py-20 border-b border-orange-100">
        <FadeIn>
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionBadge icon={Palette} text="Branding & Creative Design
              " />
              <h1 className="axion-heading text-[clamp(1.5rem,4vw,3.2rem)] font-display font-bold text-[#111827] leading-tight mb-5">
                Build a Brand That{" "}
                <span className="text-[#F26522]">People Remember.</span>
              </h1>
              <p className="text-[#6B7280] font-sans text-lg leading-relaxed mb-7">
                Your brand is more than a logo — it&apos;s the feeling customers get every time they
                interact with your business. We create cohesive brand identities that build trust,
                communicate value, and make your business instantly recognizable.
              </p>
              <TextRollButton href="/contact" className="inline-flex items-center gap-2 bg-[#F26522] hover:bg-[#e05a1a] text-white font-semibold px-6 py-3.5 rounded-xl transition-colors shadow-md">Start Brand Project </TextRollButton>
            </div>
            <img src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=700" alt="Branding and Creative Design" className="w-full rounded-3xl shadow-xl object-cover aspect-video" />
          </div>
        </div>
      </FadeIn>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <FadeIn>
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-[#111827] mb-3">Branding Services</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.title} className="bg-orange-50/40 border border-orange-100 rounded-2xl p-7 hover:border-amber-200 hover:shadow-sm transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]">
                <div className="w-10 h-10 bg-[#F26522] rounded-xl flex items-center justify-center mb-4">
                  <Palette className="w-5 h-5 text-white" />
                </div>
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
          <h2 className="text-3xl font-black text-white mb-4">Ready to Build Your Brand Identity?</h2>
          <p className="text-[#6B7280] font-sans text-lg mb-8">Let&apos;s create a brand that stands out and communicates your value clearly.</p>
          <TextRollButton href="/contact" className="inline-flex items-center gap-2 bg-[#F26522] hover:bg-[#e05a1a] text-white font-semibold px-8 py-4 rounded-xl transition-colors shadow-lg">Start Brand Project </TextRollButton>
        </div>
      </FadeIn>
      </section>
    </>
  );
}
