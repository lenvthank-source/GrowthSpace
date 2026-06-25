import Link from "next/link";
import { Zap, TrendingUp, Building2, ArrowRight } from "lucide-react";

const stages = [
  {
    icon: Zap,
    stage: "Startup",
    tagline: "Launch & Get Noticed",
    color: "border-amber-200 bg-amber-50/50",
    iconBg: "bg-amber-500",
    badgeColor: "bg-amber-100 text-amber-700",
    services: [
      { label: "Brand Identity & Logo", category: "Marketing" },
      { label: "Business Website", category: "Technology" },
      { label: "SEO Foundation", category: "Marketing" },
      { label: "Social Media Setup", category: "Marketing" },
      { label: "Lead Gen Landing Pages", category: "Technology" },
      { label: "Basic CRM Setup", category: "Technology" },
    ],
    cta: "Launch Your Business",
    href: "/contact",
  },
  {
    icon: TrendingUp,
    stage: "Growing Business",
    tagline: "Scale Revenue & Operations",
    color: "border-blue-200 bg-blue-50/50 shadow-xl",
    iconBg: "bg-blue-600",
    badgeColor: "bg-blue-100 text-blue-700",
    badge: "Most Popular",
    services: [
      { label: "Google Ads & Meta Ads", category: "Marketing" },
      { label: "Custom CRM System", category: "Technology" },
      { label: "Mobile App", category: "Technology" },
      { label: "Email Automation", category: "Marketing" },
      { label: "AI Chatbot", category: "Technology" },
      { label: "Content Marketing", category: "Marketing" },
    ],
    cta: "Start Growing",
    href: "/contact",
  },
  {
    icon: Building2,
    stage: "Scaling Enterprise",
    tagline: "Automate & Dominate",
    color: "border-violet-200 bg-violet-50/50",
    iconBg: "bg-violet-600",
    badgeColor: "bg-violet-100 text-violet-700",
    services: [
      { label: "ERP Implementation", category: "Technology" },
      { label: "AI Workflow Automation", category: "Technology" },
      { label: "Enterprise SEO", category: "Marketing" },
      { label: "Custom SaaS Platform", category: "Technology" },
      { label: "Advanced Analytics", category: "Marketing" },
      { label: "AI Agents & Assistants", category: "Technology" },
    ],
    cta: "Enterprise Solutions",
    href: "/contact",
  },
];

export default function BusinessStageSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-amber-500 text-sm font-semibold uppercase tracking-widest mb-3">
            Solutions by Business Stage
          </p>
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-black text-gray-900 mb-4">
            We Scale With You
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Whether you&apos;re just starting, actively growing, or scaling to enterprise — we have
            the right mix of marketing and technology to match your stage.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-start">
          {stages.map((stage) => {
            const Icon = stage.icon;
            return (
              <div
                key={stage.stage}
                className={`relative rounded-3xl border-2 ${stage.color} p-7 md:p-8`}
              >
                {stage.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-blue-600 text-white text-xs font-bold px-4 py-1.5 rounded-full whitespace-nowrap">
                      {stage.badge}
                    </span>
                  </div>
                )}

                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-12 h-12 ${stage.iconBg} rounded-2xl flex items-center justify-center shadow-md`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-black text-gray-900 text-xl">{stage.stage}</h3>
                    <p className="text-gray-500 text-sm">{stage.tagline}</p>
                  </div>
                </div>

                <div className="space-y-2.5 mb-7">
                  {stage.services.map((s) => (
                    <div key={s.label} className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0" />
                        <span className="text-gray-700 text-sm">{s.label}</span>
                      </div>
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full shrink-0 ${
                        s.category === "Marketing"
                          ? "bg-amber-100 text-amber-700"
                          : "bg-blue-100 text-blue-700"
                      }`}>
                        {s.category}
                      </span>
                    </div>
                  ))}
                </div>

                <Link
                  href={stage.href}
                  className="flex items-center justify-center gap-2 bg-gray-900 hover:bg-amber-500 text-white font-semibold py-3 px-5 rounded-xl transition-all duration-200 text-sm"
                >
                  {stage.cta}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
