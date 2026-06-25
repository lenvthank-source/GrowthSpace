import type { Metadata } from "next";
import Link from "next/link";
import { Layers, ArrowRight, CheckCircle2 } from "lucide-react";

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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 text-xs font-semibold px-3.5 py-2 rounded-full mb-6">
                <Layers className="w-3.5 h-3.5" /> Custom Software Development
              </span>
              <h1 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-5">
                Software Engineered for{" "}
                <span className="text-gray-700">Your Business,</span>
                <br />
                Not the Other Way Around.
              </h1>
              <p className="text-gray-500 text-lg leading-relaxed mb-7">
                We build purpose-built software solutions that fit exactly how your business operates.
                No off-the-shelf compromises, no workarounds — just software that works precisely the way you need it to.
              </p>
              <div className="flex gap-4">
                <Link href="/contact" className="bg-gray-900 hover:bg-amber-500 text-white font-semibold px-6 py-3.5 rounded-xl transition-colors shadow-md">
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
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-gray-900 mb-3">What We Build</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {solutions.map((s) => (
              <div key={s.title} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-gray-300 hover:shadow-sm transition-all duration-200">
                <h3 className="font-bold text-gray-900 mb-2 text-sm leading-snug">{s.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-black text-white mb-7">Our Technology Stack</h2>
          <div className="flex flex-wrap justify-center gap-2.5">
            {["Next.js", "React", "Node.js", "Python", "PostgreSQL", "MongoDB", "Redis", "AWS", "Docker", "Kubernetes", "GraphQL", "REST API", "TypeScript", "React Native", "Flutter", "Prisma"].map((t) => (
              <span key={t} className="bg-white/10 border border-white/10 text-white text-xs font-semibold px-3.5 py-2 rounded-full">{t}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-5">Have a Software Idea?</h2>
          <p className="text-gray-500 text-lg mb-8">Let&apos;s turn it into a reality. Share your requirements and get a free technical assessment.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-4 rounded-xl transition-colors shadow-lg">
            Start a Project <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
