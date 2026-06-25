import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Star, TrendingUp, MousePointer2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Projects & Case Studies — GrowthSpare",
  description:
    "Explore GrowthSpare's client case studies and projects. Real results from real businesses across SEO, PPC, social media, and performance marketing.",
};

const projects = [
  {
    title: "Scaling Performance with Google Ads",
    client: "Xworkstation",
    industry: "E-commerce / Workspace",
    channel: "Google Ads",
    channelIcon: MousePointer2,
    channelColor: "text-amber-600",
    channelBg: "bg-amber-50",
    channelBorder: "border-amber-200",
    description:
      "GrowthSpare partnered with Xworkstation to scale their digital performance through targeted Google Ads strategies. By restructuring campaigns, refining audience targeting, and focusing on high-intent keywords, we turned their ad spend into a consistent, scalable growth engine.",
    results: "52.8K+ Clicks | ₹42.15 Avg. CPC | ₹2.45M Ad Spend Managed | 4.32K+ Conversions",
    outcome:
      "Strong growth in traffic with 50+ high-intent clicks daily. Optimized CPC delivering cost-efficient campaigns with consistent conversion rate improvement across all ad groups.",
    dashboardImage: "/images/case-studies/WhatsApp_Image_2026-06-24_at_4.01.58_PM_(1).jpeg",
    metrics: [
      { value: "52.8K+", label: "Clicks" },
      { value: "4.32K+", label: "Conversions" },
      { value: "₹42.15", label: "Avg. CPC" },
      { value: "₹2.45M", label: "Ad Spend" },
    ],
  },
  {
    title: "Meta Ads Lead Generation at Scale",
    client: "Srigauri Fashion",
    industry: "Fashion & Apparel",
    channel: "Meta Ads",
    channelIcon: TrendingUp,
    channelColor: "text-blue-600",
    channelBg: "bg-blue-50",
    channelBorder: "border-blue-200",
    description:
      "GrowthSpare ran a comprehensive Meta Ads lead generation campaign for Srigauri Fashion, combining creative audience segmentation, continuous A/B testing, and a WhatsApp lead follow-up workflow to maximize lead quality and minimize cost per lead.",
    results: "Reach 3.85L+ | 7.50L+ Impressions | 2,100+ Leads Generated | ₹18.90 Avg. Cost Per Lead | ₹42K+ Total Spend",
    outcome:
      "Strong and consistent lead flow with dramatically reduced acquisition costs. Every ₹ spent was tracked and optimized, delivering a highly scalable lead generation system.",
    dashboardImage: "/images/case-studies/WhatsApp_Image_2026-06-24_at_4.01.59_PM.jpeg",
    metrics: [
      { value: "2,100+", label: "Leads Generated" },
      { value: "₹18.90", label: "Avg. Cost / Lead" },
      { value: "3.85L+", label: "Reach" },
      { value: "7.50L+", label: "Impressions" },
    ],
  },
  {
    title: "Interior Design Lead Gen via Meta Ads",
    client: "Abasic Concept",
    industry: "Home & Interior Design",
    channel: "Meta Ads",
    channelIcon: TrendingUp,
    channelColor: "text-emerald-600",
    channelBg: "bg-emerald-50",
    channelBorder: "border-emerald-200",
    description:
      "GrowthSpare helped Abasic Concept generate high-quality interior design inquiries through a targeted Meta Ads strategy. By implementing precise audience segmentation, performance-based budget allocation, and continuous creative testing, the campaigns achieved exceptional cost efficiency.",
    results: "3,103+ Leads Generated | ₹4.02 Cost Per Lead | 173K+ Reach | 460K+ Impressions",
    outcome:
      "Consistent, high-quality leads at an industry-leading cost per lead of just ₹4.02. The campaign scaled profitably month over month with improving lead quality.",
    dashboardImage: "/images/case-studies/WhatsApp_Image_2026-06-24_at_4.01.58_PM.jpeg",
    metrics: [
      { value: "3,103+", label: "Leads Generated" },
      { value: "₹4.02", label: "Cost Per Lead" },
      { value: "460K+", label: "Impressions" },
      { value: "173K+", label: "Reach" },
    ],
  },
  {
    title: "Google Ads for Course Enrollments",
    client: "IELTSwithGagan",
    industry: "Education",
    channel: "Google Ads",
    channelIcon: MousePointer2,
    channelColor: "text-amber-600",
    channelBg: "bg-amber-50",
    channelBorder: "border-amber-200",
    description:
      "GrowthSpare partnered with IELTSwithGagan to drive course enrollments through precision Google Ads campaigns. Targeting high-intent educational keywords, refining ad creatives, and structuring campaigns for better Quality Scores delivered consistent, cost-effective conversions.",
    results: "8.85K+ Clicks | 488 Conversions | ₹38.04 Avg. CPC | ₹337K Total Spend",
    outcome:
      "Efficient, scalable enrollment campaigns delivering consistent qualified traffic and conversions. Cost per acquisition optimized across the entire campaign lifecycle.",
    dashboardImage: "/images/case-studies/WhatsApp_Image_2026-06-24_at_4.01.59_PM_(1).jpeg",
    metrics: [
      { value: "8.85K+", label: "Clicks" },
      { value: "488", label: "Conversions" },
      { value: "₹38.04", label: "Avg. CPC" },
      { value: "₹337K", label: "Ad Spend" },
    ],
  },
];

const testimonials = [
  {
    text: "What I liked most is their transparency. They clearly explained what will work and delivered exactly that. No false promises.",
    name: "Gagan",
    role: "CEO — IELTSwithGagan",
  },
  {
    text: "The team is creative and data-driven. They improved our social media presence and also optimized our ads for better conversions.",
    name: "Sandeep Malhotra",
    role: "Owner — Xen Interiors",
  },
];

const clients = [
  "Aadiananta", "Xzen Italian Bathing", "Abasic Concept", "Modern School",
  "Shiva Ashray Society", "Srigauri Fashion", "IELTSwithGagan",
  "Dektek Automation", "Ansa Interiors", "MediCare", "EduPrime",
  "FinanceHub", "LogiTech", "PropVista", "TechCorp", "RetailX",
];

export default function ProjectsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white py-16 md:py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-amber-500 text-sm font-semibold uppercase tracking-widest mb-3">
            Proven Work
          </p>
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-5 leading-tight">
            Real Campaigns.<br />Real Results.
          </h1>
          <p className="text-gray-600 text-lg max-w-xl leading-relaxed">
            Every number on this page is pulled directly from live campaign dashboards —
            verified, unfiltered, and backed by real client data.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {projects.map((project, i) => {
            const ChannelIcon = project.channelIcon;
            return (
              <div key={project.client} className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-start">
                {/* Dashboard Screenshot */}
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="relative rounded-3xl overflow-hidden border border-gray-100 shadow-2xl bg-gray-50">
                    <div className="bg-gray-800 px-4 py-2.5 flex items-center gap-2">
                      <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-400" />
                        <div className="w-3 h-3 rounded-full bg-yellow-400" />
                        <div className="w-3 h-3 rounded-full bg-green-400" />
                      </div>
                      <div className="flex-1 bg-gray-700 rounded-md px-3 py-1 text-gray-400 text-xs text-center">
                        Campaign Dashboard — {project.client}
                      </div>
                    </div>
                    <img
                      src={project.dashboardImage}
                      alt={`${project.client} Campaign Dashboard`}
                      className="w-full object-cover object-top"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full ${project.channelBg} ${project.channelBorder} border ${project.channelColor}`}>
                      <ChannelIcon className="w-3 h-3" />
                      {project.channel}
                    </span>
                    <span className="text-xs text-gray-400 font-medium">{project.industry}</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-2">
                    {project.title}
                  </h2>
                  <p className="text-amber-500 font-bold text-sm mb-5">{project.client}</p>
                  <p className="text-gray-600 leading-relaxed mb-5">{project.description}</p>
                  <div className="bg-gray-50 rounded-2xl p-4 mb-5 border border-gray-100">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Campaign Highlights</p>
                    <p className="text-gray-700 text-sm font-medium leading-relaxed">{project.results}</p>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">{project.outcome}</p>
                  <div className="grid grid-cols-4 gap-3">
                    {project.metrics.map((m) => (
                      <div key={m.label} className="bg-amber-50 border border-amber-100 rounded-xl p-3 text-center">
                        <p className="text-lg font-black text-amber-600 leading-none">{m.value}</p>
                        <p className="text-[10px] text-gray-500 font-semibold mt-1 leading-tight">{m.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Our Clients */}
      <section className="py-16 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-amber-500 text-sm font-semibold uppercase tracking-widest mb-3">Trusted By</p>
          <h2 className="text-3xl font-black text-gray-900 mb-10">Brands We&apos;ve Grown</h2>
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-5">
            {clients.map((client) => (
              <span
                key={client}
                className="text-sm font-black text-gray-400 tracking-tight hover:text-gray-700 transition-colors"
              >
                {client}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-amber-500 text-sm font-semibold uppercase tracking-widest mb-3">Client Stories</p>
            <h2 className="text-3xl font-black text-gray-900">
              Here&apos;s What Our Clients Say
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-gray-50 border border-gray-100 rounded-3xl p-7 hover:shadow-md hover:border-gray-200 transition-all duration-200">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-5 italic text-base">&ldquo;{t.text}&rdquo;</p>
                <p className="text-gray-900 font-bold text-sm">— {t.name}</p>
                <p className="text-gray-400 text-xs mt-0.5">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-950 text-center">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-4">
            You Could Be Next
          </p>
          <h2 className="text-3xl font-black text-white mb-5">
            Ready to Be Our Next Success Story?
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg"
          >
            Book Free Consultation
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
