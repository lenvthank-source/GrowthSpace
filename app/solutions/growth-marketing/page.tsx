import type { Metadata } from "next";
import Link from "next/link";
import { TrendingUp, Search, MousePointer2, Share2, Mail, Palette, Target, ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Growth & Marketing Solutions — GrowthSpare",
  description:
    "GrowthSpare's Growth & Marketing division helps businesses acquire customers, generate leads, and grow revenue through SEO, Google Ads, social media, and performance marketing.",
};

const services = [
  { icon: Search, title: "Search Engine Optimization", desc: "Rank higher on Google and drive sustainable organic traffic.", href: "/services/seo" },
  { icon: MousePointer2, title: "Google Ads / PPC", desc: "Generate qualified leads and sales with precision-targeted paid campaigns.", href: "/services/ppc" },
  { icon: Share2, title: "Social Media Marketing", desc: "Build brand awareness and engage your audience across all major platforms.", href: "/services/social-media" },
  { icon: Target, title: "Meta Ads", desc: "Scale customer acquisition on Facebook and Instagram with proven strategies.", href: "/services/social-media" },
  { icon: Mail, title: "Email Marketing", desc: "Automate lead nurturing and drive repeat revenue with intelligent email sequences.", href: "/services/email" },
  { icon: Palette, title: "Branding & Creative Design", desc: "Create a memorable brand identity that stands out in a crowded market.", href: "/services/branding" },
];

const results = [
  { metric: "+320%", label: "Average organic traffic increase in 12 months" },
  { metric: "5X", label: "Average ROAS on paid advertising campaigns" },
  { metric: "+250%", label: "Average increase in qualified lead generation" },
  { metric: "70%", label: "Average reduction in cost per acquisition" },
];

export default function GrowthMarketingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-amber-50 via-orange-50 to-white py-20 md:py-28 border-b border-amber-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-amber-100 border border-amber-200 text-amber-700 text-xs font-semibold px-3.5 py-2 rounded-full mb-6">
                <TrendingUp className="w-3.5 h-3.5" />
                Growth & Marketing Division
              </div>
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-black text-gray-900 leading-tight mb-6">
                Acquire More Customers.
                <br />
                <span className="text-amber-500">Grow More Revenue.</span>
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-xl">
                Our Growth & Marketing division combines SEO, paid advertising, social media,
                content, and email marketing into a unified customer acquisition engine that
                delivers consistent, measurable results.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 shadow-lg shadow-amber-200">
                  Book Free Strategy Call
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/projects" className="inline-flex items-center gap-2 border-2 border-gray-200 hover:border-gray-900 text-gray-700 font-semibold px-7 py-3.5 rounded-xl transition-all duration-200">
                  View Case Studies
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {results.map((r) => (
                <div key={r.label} className="bg-white rounded-2xl p-7 border border-amber-100 shadow-sm">
                  <p className="text-4xl font-black text-amber-500 mb-2">{r.metric}</p>
                  <p className="text-gray-600 text-sm leading-snug">{r.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">Marketing Services</h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">Full-funnel marketing from awareness to conversion.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <Link key={s.title} href={s.href} className="group bg-amber-50/50 hover:bg-amber-50 border border-amber-100 hover:border-amber-200 rounded-2xl p-7 transition-all duration-200 hover:shadow-sm hover:-translate-y-0.5">
                  <div className="w-11 h-11 bg-amber-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{s.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                  <span className="inline-flex items-center gap-1 text-amber-600 text-sm font-semibold mt-4 group-hover:gap-2 transition-all">
                    Learn More <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why growth marketing */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
                Our Marketing Philosophy
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-7">
                We don&apos;t just run ads. We build marketing systems that generate predictable,
                scalable revenue. Every channel, every campaign, every piece of content is
                strategically tied to your business objectives.
              </p>
              <div className="space-y-4">
                {[
                  "Data-driven strategy, not gut feelings",
                  "Full-funnel approach: awareness → leads → customers",
                  "Transparent reporting on every campaign",
                  "Continuous A/B testing and optimization",
                  "ROI-first mindset — every rupee must earn",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg?auto=compress&cs=tinysrgb&w=700"
                alt="Marketing growth"
                className="w-full rounded-3xl shadow-xl object-cover aspect-square"
              />
              <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-lg border border-amber-100 p-5">
                <p className="text-3xl font-black text-amber-500">95%</p>
                <p className="text-gray-600 text-sm">Client Retention Rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-amber-500 text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-5">
            Ready to Accelerate Growth?
          </h2>
          <p className="text-amber-100 text-lg mb-8">
            Book a free 30-minute strategy call and get a custom marketing roadmap for your business.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-amber-600 font-semibold px-8 py-4 rounded-xl transition-colors shadow-lg">
            Book Free Consultation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
