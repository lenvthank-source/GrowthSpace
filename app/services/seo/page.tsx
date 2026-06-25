import type { Metadata } from "next";
import Link from "next/link";
import { Search, CheckCircle2, ArrowRight, TrendingUp, Globe, BarChart3 } from "lucide-react";

export const metadata: Metadata = {
  title: "SEO Services — GrowthSpare | Rank Higher, Drive More Traffic",
  description:
    "GrowthSpare's SEO services include technical SEO, on-page optimization, link building, local SEO, and e-commerce SEO. Grow your organic traffic with data-driven strategies.",
};

const seoServices = [
  { icon: Search, title: "Technical SEO", desc: "Fix crawl errors, improve site speed, optimize Core Web Vitals, and implement schema markup." },
  { icon: Globe, title: "On-Page SEO", desc: "Optimize titles, meta descriptions, headings, content, and internal linking for target keywords." },
  { icon: TrendingUp, title: "Off-Page SEO", desc: "High-quality link building, digital PR, and authority-building strategies." },
  { icon: BarChart3, title: "Local SEO", desc: "Dominate local search results with Google My Business optimization and local citations." },
  { icon: Search, title: "E-commerce SEO", desc: "Product page optimization, category pages, structured data, and shopping feed optimization." },
  { icon: BarChart3, title: "SEO Audit", desc: "Comprehensive website audit identifying all technical, on-page, and off-page issues." },
];

export default function SEOPage() {
  return (
    <>
      <section className="bg-white py-16 md:py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-5">
                <Search className="w-3.5 h-3.5" /> SEO Services
              </span>
              <h1 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-5">
                Rank Higher. Drive More{" "}
                <span className="text-amber-500">Organic Traffic.</span>
              </h1>
              <p className="text-gray-500 text-lg leading-relaxed mb-7">
                We take a transparent and structured approach to SEO. By auditing your existing assets and
                aligning with your growth objectives, we build a strategic roadmap with clear timelines
                and measurable performance expectations.
              </p>
              <div className="flex gap-4">
                <Link href="/contact" className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-3.5 rounded-lg transition-colors">
                  Get Free SEO Audit
                </Link>
                <Link href="/pricing" className="border-2 border-gray-200 hover:border-gray-900 text-gray-700 font-semibold px-6 py-3.5 rounded-lg transition-colors">
                  View Pricing
                </Link>
              </div>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=700"
                alt="SEO Services"
                className="w-full rounded-2xl shadow-xl object-cover aspect-video"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">
              Our SEO Services
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              A comprehensive suite of SEO services to improve your search rankings and drive qualified organic traffic.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {seoServices.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.title} className="bg-white rounded-2xl p-7 border border-gray-100 hover:border-blue-200 hover:shadow-sm transition-all duration-200">
                  <div className="w-11 h-11 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{s.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
                What You Can Expect
              </h2>
              <div className="space-y-4">
                {[
                  "Complete technical SEO audit within week 1",
                  "Keyword research targeting 50–200 high-intent terms",
                  "Monthly on-page optimizations across your top pages",
                  "High-quality backlink acquisition from relevant domains",
                  "Local SEO setup for Delhi NCR and target cities",
                  "Monthly reporting with keyword rankings, traffic, and leads",
                  "Quarterly strategy reviews and plan adjustments",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="font-black text-gray-900 text-xl mb-5">Average Client Results</h3>
              <div className="space-y-5">
                {[
                  { metric: "+285%", label: "Average increase in organic traffic (12 months)", color: "text-blue-600" },
                  { metric: "3–6 months", label: "Time to see meaningful ranking improvements", color: "text-amber-600" },
                  { metric: "50+", label: "High-intent keywords ranked per client", color: "text-green-600" },
                  { metric: "4.8/5", label: "Average client satisfaction score", color: "text-rose-600" },
                ].map((stat) => (
                  <div key={stat.label} className="flex items-start gap-4">
                    <span className={`text-2xl font-black ${stat.color} shrink-0 w-24`}>{stat.metric}</span>
                    <span className="text-gray-600 text-sm leading-relaxed">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-950 text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Ready to Rank Higher on Google?
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Get a free SEO audit and find out exactly what&apos;s holding your website back.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors shadow-lg">
            Get Free SEO Audit
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
