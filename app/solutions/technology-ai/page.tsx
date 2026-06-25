import type { Metadata } from "next";
import Link from "next/link";
import { Cpu, Globe, Smartphone, Database, Bot, Workflow, Layers, Cloud, ArrowRight, CheckCircle2, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Technology & AI Solutions — GrowthSpare",
  description:
    "GrowthSpare's Technology & AI division builds custom software, mobile apps, ERP/CRM systems, AI chatbots, and intelligent automation workflows for businesses of all sizes.",
};

const techCategories = [
  {
    icon: Globe,
    title: "Web & Mobile Development",
    color: "bg-blue-600",
    services: ["Corporate Websites", "E-Commerce Platforms", "Custom Web Applications", "Android Applications", "iOS Applications", "Progressive Web Apps", "SaaS Platforms"],
    href: "/services/web-development",
  },
  {
    icon: Database,
    title: "Custom Software Development",
    color: "bg-teal-600",
    services: ["ERP Systems", "CRM Systems", "HRMS Solutions", "Inventory Management", "School & Hospital Software", "Booking Systems", "Billing & Accounting", "Multi-tenant SaaS"],
    href: "/services/custom-software",
  },
  {
    icon: Bot,
    title: "AI & Automation Services",
    color: "bg-violet-600",
    services: ["AI Chatbots", "WhatsApp Automation", "Voice AI Agents", "AI Workflows", "CRM Automation", "Document Processing", "Lead Qualification AI", "Appointment Scheduling AI", "RAG Systems", "LLM Integrations", "MCP Servers"],
    href: "/services/ai-automation",
  },
  {
    icon: Cloud,
    title: "Cloud & Enterprise",
    color: "bg-indigo-600",
    services: ["API Development", "Third-party Integrations", "Payment Gateway Integration", "AWS Deployment", "DevOps & CI/CD", "Database Architecture", "Enterprise Applications"],
    href: "/services/custom-software",
  },
];

const aiHighlights = [
  { icon: Bot, title: "AI Chatbots", desc: "Conversational AI for customer support, sales, and lead qualification available 24/7.", href: "/services/ai-chatbots" },
  { icon: Zap, title: "WhatsApp Automation", desc: "Automated WhatsApp business flows for lead nurturing, support, and transactional messages.", href: "/services/ai-automation" },
  { icon: Workflow, title: "AI Workflow Automation", desc: "End-to-end business process automation using AI agents and intelligent decision trees.", href: "/services/ai-automation" },
  { icon: Layers, title: "RAG & LLM Integration", desc: "Custom AI assistants powered by your business data using retrieval-augmented generation.", href: "/services/ai-automation" },
];

export default function TechnologyAIPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-white py-20 md:py-28 border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-100 border border-blue-200 text-blue-700 text-xs font-semibold px-3.5 py-2 rounded-full mb-6">
                <Cpu className="w-3.5 h-3.5" />
                Technology & AI Division
              </div>
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-black text-gray-900 leading-tight mb-6">
                Build Smarter.
                <br />
                <span className="text-blue-600">Automate Everything.</span>
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-xl">
                We build the technology foundation and AI automation layer that allows your
                business to scale without scaling costs. From custom software to intelligent
                AI agents — we engineer your digital infrastructure.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 shadow-lg shadow-blue-200">
                  Start a Project
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/projects" className="inline-flex items-center gap-2 border-2 border-gray-200 hover:border-gray-900 text-gray-700 font-semibold px-7 py-3.5 rounded-xl transition-all duration-200">
                  View Case Studies
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "100+", label: "Software projects delivered", color: "text-blue-600" },
                { value: "50+", label: "AI automation systems built", color: "text-violet-600" },
                { value: "10+", label: "ERP/CRM implementations", color: "text-teal-600" },
                { value: "99%", label: "Uptime SLA on hosted products", color: "text-indigo-600" },
              ].map((stat) => (
                <div key={stat.label} className="bg-white rounded-2xl p-7 border border-blue-100 shadow-sm">
                  <p className={`text-4xl font-black ${stat.color} mb-2`}>{stat.value}</p>
                  <p className="text-gray-600 text-sm leading-snug">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service categories */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">Technology Services</h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">Four pillars of technology excellence, all under one roof.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {techCategories.map((cat) => {
              const Icon = cat.icon;
              return (
                <div key={cat.title} className="bg-gray-50 rounded-3xl p-8 border border-gray-100 hover:border-blue-200 hover:shadow-sm transition-all duration-200">
                  <div className="flex items-center gap-3 mb-5">
                    <div className={`w-12 h-12 ${cat.color} rounded-2xl flex items-center justify-center shadow-md`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-black text-gray-900 text-xl">{cat.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.services.map((s) => (
                      <span key={s} className="bg-white border border-gray-200 text-gray-700 text-xs font-medium px-3 py-1.5 rounded-full">
                        {s}
                      </span>
                    ))}
                  </div>
                  <Link href={cat.href} className="inline-flex items-center gap-1.5 text-blue-600 hover:text-blue-700 text-sm font-semibold mt-5 group">
                    Learn more <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* AI spotlight */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-violet-400 text-sm font-semibold uppercase tracking-widest mb-3">AI-First</p>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-3">AI & Automation Spotlight</h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              We are at the frontier of AI implementation for businesses. Here&apos;s how we help you leverage AI today.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {aiHighlights.map((ai) => {
              const Icon = ai.icon;
              return (
                <Link key={ai.title} href={ai.href} className="group bg-white/5 border border-white/10 rounded-3xl p-7 hover:bg-white/[0.08] hover:border-violet-400/30 transition-all duration-200">
                  <div className="w-12 h-12 bg-violet-600 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-white mb-2">{ai.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{ai.desc}</p>
                  <span className="inline-flex items-center gap-1 text-violet-400 text-sm font-semibold mt-4 group-hover:gap-2 transition-all">
                    Explore <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why technology matters */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=700"
                alt="Technology development"
                className="w-full rounded-3xl shadow-xl object-cover aspect-square"
              />
              <div className="absolute -bottom-5 -right-5 bg-white rounded-2xl shadow-lg border border-blue-100 p-5">
                <p className="text-3xl font-black text-blue-600">3–6x</p>
                <p className="text-gray-600 text-sm">Operational efficiency gain</p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
                Why Technology & AI Matter Now
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-7">
                Businesses that invest in automation and custom software today have a significant
                competitive advantage tomorrow. We help you build the digital infrastructure
                that makes your operations 3–6x more efficient.
              </p>
              <div className="space-y-4">
                {[
                  "Reduce operational costs by automating repetitive tasks",
                  "Scale without proportionally increasing headcount",
                  "Improve customer experience with AI-powered interactions",
                  "Make smarter decisions with real-time data and analytics",
                  "Stay ahead of competitors with proprietary technology",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link href="/contact" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-7 py-3.5 rounded-xl transition-colors shadow-sm">
                  Discuss Your Project <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600 text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-5">
            Ready to Build & Automate?
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Let&apos;s discuss your software or AI automation project and get a free estimate.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-blue-600 font-semibold px-8 py-4 rounded-xl transition-colors shadow-lg">
            Start a Project <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
