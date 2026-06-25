import Link from "next/link";
import { CheckCircle2, TrendingUp, Cpu } from "lucide-react";

const features = [
  { title: "Marketing Expertise", desc: "Certified SEO, Google Ads, and social media specialists with proven track records.", division: "Marketing" },
  { title: "Software Engineering", desc: "Full-stack developers building scalable web apps, mobile apps, and enterprise systems.", division: "Technology" },
  { title: "AI Automation", desc: "AI engineers building chatbots, agents, and workflow automation that save thousands of hours.", division: "AI" },
  { title: "Business Process Optimization", desc: "We redesign and automate workflows to eliminate bottlenecks and increase throughput.", division: "Technology" },
  { title: "Custom Development", desc: "No templates. Every solution is purpose-built for your specific business needs.", division: "Technology" },
  { title: "Enterprise Solutions", desc: "ERP, CRM, HRMS and multi-tenant SaaS platforms for businesses at any scale.", division: "Technology" },
  { title: "End-to-End Support", desc: "From strategy to execution to optimization — we stay involved at every step.", division: "Both" },
  { title: "One Vendor for Everything", desc: "No more juggling agencies. We handle growth and technology under one partnership.", division: "Both" },
];

const divisionColors: Record<string, string> = {
  Marketing: "bg-amber-100 text-amber-700",
  Technology: "bg-blue-100 text-blue-700",
  AI: "bg-violet-100 text-violet-700",
  Both: "bg-green-100 text-green-700",
};

export default function WhyChooseUs() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left */}
          <div className="lg:sticky lg:top-28">
            <p className="text-amber-500 text-sm font-semibold uppercase tracking-widest mb-3">
              Why GrowthSpare
            </p>
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-black text-gray-900 mb-6 leading-tight">
              Unlike Any Agency
              <br />
              <span className="text-amber-500">You&apos;ve Worked With.</span>
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              Traditional agencies only do marketing. Development shops only build software.
              GrowthSpare is the only partner that combines both — plus AI automation — to deliver
              end-to-end business growth.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-amber-50 rounded-2xl p-5 border border-amber-100">
                <TrendingUp className="w-6 h-6 text-amber-500 mb-3" />
                <p className="font-bold text-gray-900 text-sm mb-1">Growth & Marketing</p>
                <p className="text-gray-500 text-xs leading-relaxed">Customer acquisition & revenue generation</p>
              </div>
              <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100">
                <Cpu className="w-6 h-6 text-blue-500 mb-3" />
                <p className="font-bold text-gray-900 text-sm mb-1">Technology & AI</p>
                <p className="text-gray-500 text-xs leading-relaxed">Build, automate & scale operations</p>
              </div>
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-gray-900 hover:bg-amber-500 text-white font-semibold px-7 py-3.5 rounded-xl transition-all duration-200"
            >
              Learn More About Us
            </Link>
          </div>

          {/* Right */}
          <div className="grid grid-cols-1 gap-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="flex gap-4 bg-gray-50 rounded-2xl p-5 border border-gray-100 hover:border-gray-200 hover:bg-white hover:shadow-sm transition-all duration-200"
              >
                <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <h3 className="font-semibold text-gray-900 text-sm">{feature.title}</h3>
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${divisionColors[feature.division]}`}>
                      {feature.division}
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
