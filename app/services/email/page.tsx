import type { Metadata } from "next";
import Link from "next/link";
import { Mail, ArrowRight } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import TextRollButton from "@/components/ui/TextRollButton";
import SectionBadge from "@/components/ui/SectionBadge";
import ExpandingCard from "@/components/ui/ExpandingCard";

export const metadata: Metadata = {
  title: "Email Marketing Services — GrowthSpare",
  description: "GrowthSpare's email marketing services include campaign automation, lead nurturing, newsletter design, and CRM integrations that drive repeat revenue.",
};

const features = [
  { title: "Campaign Automation", desc: "Set up automated email sequences that nurture leads and drive conversions on autopilot." },
  { title: "Lead Nurturing Flows", desc: "Multi-step drip campaigns that move prospects through your funnel to become paying customers." },
  { title: "Newsletter Design", desc: "Beautifully designed newsletters that keep your audience engaged and coming back." },
  { title: "CRM Integrations", desc: "Seamless integration with HubSpot, Mailchimp, Klaviyo, and other leading CRM platforms." },
  { title: "A/B Testing", desc: "Systematic testing of subject lines, CTAs, and content to maximize open and click rates." },
  { title: "Analytics & Reporting", desc: "Detailed performance reports on opens, clicks, conversions, and revenue attributed." },
];

export default function EmailPage() {
  return (
    <>
      <section className="bg-[#FFFFFF] py-16 md:py-20 border-b border-gray-100">
        <FadeIn>
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionBadge icon={Mail} text="Email Marketing
              " />
              <h1 className="axion-heading text-[clamp(1.5rem,4vw,3.2rem)] font-display font-bold text-[#111827] leading-tight mb-5">
                Turn Your Email List Into a{" "}
                <span className="text-[#F5A623]">Revenue Engine.</span>
              </h1>
              <p className="text-[#6B7280] font-sans text-lg leading-relaxed mb-7">
                We craft high-performing email campaigns while simplifying the entire delivery process —
                ensuring every communication is seamless, personalized, and drives measurable revenue.
              </p>
              <TextRollButton href="/contact" className="inline-flex items-center gap-2 bg-[#F5A623] hover:bg-[#D4901E] text-[#111827] font-semibold px-6 py-3.5 rounded-lg transition-colors">Get Started </TextRollButton>
            </div>
            <img
              src="https://images.pexels.com/photos/1591062/pexels-photo-1591062.jpeg?auto=compress&cs=tinysrgb&w=700"
              alt="Email Marketing"
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
            <h2 className="text-3xl font-black text-[#111827] mb-3">Email Marketing Services</h2>
            <p className="text-[#6B7280] font-sans max-w-xl mx-auto">Everything you need to build and monetize your email list.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="bg-white rounded-2xl p-7 border border-gray-100 hover:border-rose-200 hover:shadow-sm transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]">
                <div className="w-10 h-10 bg-rose-50 rounded-xl flex items-center justify-center mb-4">
                  <Mail className="w-5 h-5 text-rose-500" />
                </div>
                <h3 className="font-bold text-[#111827] mb-2">{f.title}</h3>
                <p className="text-[#6B7280] font-sans text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
      </section>

      <section className="py-20 bg-gray-950 text-center">
        <FadeIn>
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <h2 className="text-3xl font-black text-white mb-4">Ready to Monetize Your Email List?</h2>
          <p className="text-[#6B7280] font-sans text-lg mb-8">Let&apos;s build email automation sequences that generate revenue while you sleep.</p>
          <TextRollButton href="/contact" className="inline-flex items-center gap-2 bg-[#F5A623] hover:bg-[#D4901E] text-[#111827] font-semibold px-8 py-4 rounded-lg transition-colors shadow-lg">Book Free Consultation </TextRollButton>
        </div>
      </FadeIn>
      </section>
    </>
  );
}
