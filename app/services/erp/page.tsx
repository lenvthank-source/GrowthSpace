import type { Metadata } from "next";
import Link from "next/link";
import { Database, ArrowRight, CheckCircle2 } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import TextRollButton from "@/components/ui/TextRollButton";
import SectionBadge from "@/components/ui/SectionBadge";
import ExpandingCard from "@/components/ui/ExpandingCard";

export const metadata: Metadata = {
  title: "ERP Solutions — GrowthSpare | Custom Enterprise Software",
  description: "GrowthSpare builds custom ERP systems for manufacturing, healthcare, education, and enterprise businesses. HR, inventory, billing, CRM, and reporting in one unified platform.",
};

const modules = [
  { name: "HR & Payroll Management", desc: "Employee records, attendance, leaves, payroll processing, and performance management." },
  { name: "Inventory & Warehouse", desc: "Stock tracking, purchase orders, supplier management, and real-time inventory visibility." },
  { name: "Billing & Accounting", desc: "Invoicing, expense tracking, financial reports, and GST/tax compliance." },
  { name: "CRM & Sales Pipeline", desc: "Lead management, sales tracking, customer communications, and deal forecasting." },
  { name: "Production & Manufacturing", desc: "Work orders, production planning, quality control, and BOM management." },
  { name: "Analytics & Reporting", desc: "Custom dashboards, KPI tracking, and automated reports for decision-makers." },
];

export default function ERPPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-teal-50 to-white py-16 md:py-20 border-b border-teal-100">
        <FadeIn>
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionBadge icon={Database} text="ERP Solutions
              " />
              <h1 className="axion-heading text-[clamp(1.5rem,4vw,3.2rem)] font-display font-bold text-[#111827] leading-tight mb-5">
                Unify Your Business with a{" "}
                <span className="text-teal-600">Custom ERP System.</span>
              </h1>
              <p className="text-[#6B7280] font-sans text-lg leading-relaxed mb-7">
                We build custom ERP systems that unify all your business operations — HR, inventory,
                billing, production, and reporting — into a single intelligent platform. Say goodbye
                to spreadsheets and siloed software.
              </p>
              <div className="flex gap-4">
                <Link href="/contact" className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-6 py-3.5 rounded-xl transition-colors shadow-md">
                  Discuss Your ERP Project
                </Link>
                <Link href="/solutions/technology-ai" className="border-2 border-gray-200 hover:border-gray-900 text-gray-700 font-semibold px-6 py-3.5 rounded-xl transition-colors">
                  All Tech Solutions
                </Link>
              </div>
            </div>
            <img src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=700" alt="ERP Systems" className="w-full rounded-3xl shadow-xl object-cover aspect-video" />
          </div>
        </div>
      </FadeIn>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <FadeIn>
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-[#111827] mb-3">ERP Modules</h2>
            <p className="text-[#6B7280] font-sans max-w-xl mx-auto">Modular architecture — start with what you need, scale as you grow.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((m) => (
              <div key={m.name} className="bg-teal-50/40 border border-teal-100 rounded-2xl p-7 hover:border-teal-200 hover:shadow-sm transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]">
                <div className="w-2 h-8 bg-teal-500 rounded-full mb-4" />
                <h3 className="font-bold text-[#111827] mb-2">{m.name}</h3>
                <p className="text-[#6B7280] font-sans text-sm leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
      </section>

      <section className="py-16 bg-[#EFEFEF]">
        <FadeIn>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-[#111827] mb-8">Industries We Build ERP For</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {["Manufacturing", "Healthcare / Hospitals", "Education / Schools", "Retail & E-commerce", "Logistics", "Construction", "Real Estate", "Hospitality", "Finance", "Legal"].map((ind) => (
              <span key={ind} className="bg-white border border-gray-200 text-gray-700 text-sm font-medium px-4 py-2 rounded-full">
                {ind}
              </span>
            ))}
          </div>
        </div>
      </FadeIn>
      </section>

      <section className="py-20 bg-gray-950 text-center">
        <FadeIn>
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <h2 className="text-3xl font-black text-white mb-4">Ready to Unify Your Operations?</h2>
          <p className="text-[#6B7280] font-sans text-lg mb-8">Let&apos;s discuss your ERP requirements and build a system tailored to your business.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-600 text-white font-semibold px-8 py-4 rounded-xl transition-colors shadow-lg">
            Get Free ERP Consultation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </FadeIn>
      </section>
    </>
  );
}
