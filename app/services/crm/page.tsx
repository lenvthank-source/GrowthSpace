import type { Metadata } from "next";
import Link from "next/link";
import { BarChart3, ArrowRight, CheckCircle2 } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import TextRollButton from "@/components/ui/TextRollButton";
import SectionBadge from "@/components/ui/SectionBadge";
import ExpandingCard from "@/components/ui/ExpandingCard";

export const metadata: Metadata = {
  title: "CRM Software Development — GrowthSpare | Custom CRM Systems",
  description: "GrowthSpare builds custom CRM systems that manage your sales pipeline, customer relationships, and business development. Tailored to your specific workflow.",
};

const features = [
  { title: "Lead Management", desc: "Capture, track, and manage leads from all sources — website, social media, ads, and manual entry." },
  { title: "Sales Pipeline Visualization", desc: "Drag-and-drop pipeline views that give your sales team complete visibility on every deal." },
  { title: "Customer Communication Hub", desc: "Email, call logs, WhatsApp, and notes — all customer interactions in one timeline." },
  { title: "Automation & Workflows", desc: "Automate follow-ups, reminders, task assignments, and status updates based on triggers." },
  { title: "Reporting & Analytics", desc: "Conversion rates, deal velocity, team performance, and revenue forecasting dashboards." },
  { title: "Integration Ecosystem", desc: "Connect with your existing tools — email, calendar, payment gateways, and marketing platforms." },
];

export default function CRMPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-cyan-50 to-white py-16 md:py-20 border-b border-cyan-100">
        <FadeIn>
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionBadge icon={BarChart3} text="CRM Software
              " />
              <h1 className="axion-heading text-[clamp(1.5rem,4vw,3.2rem)] font-display font-bold text-[#111827] leading-tight mb-5">
                A CRM Built Around{" "}
                <span className="text-cyan-600">Your Sales Process.</span>
              </h1>
              <p className="text-[#6B7280] font-sans text-lg leading-relaxed mb-7">
                Off-the-shelf CRMs force your business to adapt. We build CRMs that adapt to you.
                Our custom CRM systems are designed around your specific sales workflow, terminology,
                and reporting needs — no bloat, no workarounds.
              </p>
              <div className="flex gap-4">
                <Link href="/contact" className="bg-cyan-600 hover:bg-cyan-700 text-white font-semibold px-6 py-3.5 rounded-xl transition-colors shadow-md">
                  Build Custom CRM
                </Link>
                <Link href="/solutions/technology-ai" className="border-2 border-gray-200 hover:border-gray-900 text-gray-700 font-semibold px-6 py-3.5 rounded-xl transition-colors">
                  All Tech Solutions
                </Link>
              </div>
            </div>
            <img src="https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=700" alt="CRM Software" className="w-full rounded-3xl shadow-xl object-cover aspect-video" />
          </div>
        </div>
      </FadeIn>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <FadeIn>
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-[#111827] mb-3">CRM Features</h2>
            <p className="text-[#6B7280] font-sans max-w-xl mx-auto">Everything your sales team needs to close more deals, faster.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="bg-cyan-50/40 border border-cyan-100 rounded-2xl p-7 hover:border-cyan-200 hover:shadow-sm transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]">
                <div className="w-10 h-10 bg-cyan-500 rounded-xl flex items-center justify-center mb-4">
                  <BarChart3 className="w-5 h-5 text-white" />
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
          <h2 className="text-3xl font-black text-white mb-4">Build a CRM Your Team Will Actually Use</h2>
          <p className="text-[#6B7280] font-sans text-lg mb-8">Custom-built, intuitive, and perfectly aligned with your sales process.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-8 py-4 rounded-xl transition-colors shadow-lg">
            Start CRM Project <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </FadeIn>
      </section>
    </>
  );
}
