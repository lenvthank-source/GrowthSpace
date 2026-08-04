import type { Metadata } from "next";
import Link from "next/link";
import { Layers, ArrowRight, CheckCircle2 } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import TextRollButton from "@/components/ui/TextRollButton";
import SectionBadge from "@/components/ui/SectionBadge";
import ExpandingCard from "@/components/ui/ExpandingCard";

export const metadata: Metadata = {
  title: "Custom Software Development — GrowthSpare | SaaS & Enterprise",
  description: "GrowthSpare builds custom software solutions — ERP systems, SaaS platforms, multi-tenant applications, API development, and enterprise-grade web applications.",
};

const solutions = [
  { title: "Multi-tenant SaaS Platforms", desc: "Scalable SaaS products with subscription billing, tenant isolation, and role-based access control." },
  { title: "HRMS Solutions", desc: "Complete HR management systems with onboarding, payroll, attendance, and performance modules." },
  { title: "School & Hospital Software", desc: "Specialized management software for educational institutions and healthcare facilities." },
  { title: "Booking & Reservation Systems", desc: "Online booking systems for hospitality, healthcare, education, and service businesses." },
  { title: "Billing & Accounting Software", desc: "Custom invoicing, GST compliance, expense tracking, and financial reporting systems." },
  { title: "API Development & Integration", desc: "RESTful APIs, GraphQL, and third-party integrations connecting your technology ecosystem." },
  { title: "Payment Gateway Integration", desc: "Razorpay, Stripe, PayU, and custom payment flows integrated into your application." },
  { title: "AWS & Cloud Deployment", desc: "AWS infrastructure setup, DevOps pipelines, CI/CD, and scalable cloud architecture." },
];

export default function CustomSoftwarePage() {
  return (
    <>
      <section className="bg-gradient-to-br from-slate-50 to-white py-16 md:py-20 border-b border-slate-200">
        <FadeIn>
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionBadge icon={Layers} text="Custom Software Development
              " />
              <h1 className="axion-heading text-[clamp(1.5rem,4vw,3.2rem)] font-display font-bold text-[#111827] leading-tight mb-5">
                Software Engineered for{" "}
                <span className="text-gray-700">Your Business,</span>
                <br />
                Not the Other Way Around.
              </h1>
              <p className="text-[#6B7280] font-sans text-lg leading-relaxed mb-7">
                We build purpose-built software solutions that fit exactly how your business operates.
                No off-the-shelf compromises, no workarounds — just software that works precisely the way you need it to.
              </p>
              <div className="flex gap-4">
                <Link href="/contact" className="bg-gray-900 hover:bg-[#F26522] text-white font-semibold px-6 py-3.5 rounded-xl transition-colors shadow-md">
                  Discuss Your Project
                </Link>
                <Link href="/solutions/technology-ai" className="border-2 border-gray-200 hover:border-gray-900 text-gray-700 font-semibold px-6 py-3.5 rounded-xl transition-colors">
                  All Tech Solutions
                </Link>
              </div>
            </div>
            <img src="https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=700" alt="Custom Software Development" className="w-full rounded-3xl shadow-xl object-cover aspect-video" />
          </div>
        </div>
      </FadeIn>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <FadeIn>
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-[#111827] mb-3">What We Build</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {solutions.map((s) => (
              <div key={s.title} className="bg-[#EFEFEF] rounded-2xl p-6 border border-gray-100 hover:border-gray-300 hover:shadow-sm transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]">
                <h3 className="font-bold text-[#111827] mb-2 text-sm leading-snug">{s.title}</h3>
                <p className="text-[#6B7280] font-sans text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
      </section>

      <section className="py-16 bg-gray-950">
        <FadeIn>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-black text-white mb-7">Our Technology Stack</h2>
          <div className="flex flex-wrap justify-center gap-2.5">
            {["Next.js", "React", "Node.js", "Python", "PostgreSQL", "MongoDB", "Redis", "AWS", "Docker", "Kubernetes", "GraphQL", "REST API", "TypeScript", "React Native", "Flutter", "Prisma"].map((t) => (
              <span key={t} className="bg-white/10 border border-white/10 text-white text-xs font-semibold px-3.5 py-2 rounded-full">{t}</span>
            ))}
          </div>
        </div>
      </FadeIn>
      </section>

      <section className="py-20 bg-white text-center">
        <FadeIn>
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <h2 className="text-3xl font-black text-[#111827] mb-5">Have a Software Idea?</h2>
          <p className="text-[#6B7280] font-sans text-lg mb-8">Let&apos;s turn it into a reality. Share your requirements and get a free technical assessment.</p>
          <TextRollButton href="/contact" className="inline-flex items-center gap-2 bg-[#F26522] hover:bg-[#e05a1a] text-white font-semibold px-8 py-4 rounded-xl transition-colors shadow-lg">Start a Project </TextRollButton>
        </div>
      </FadeIn>
      </section>
    </>
  );
}
