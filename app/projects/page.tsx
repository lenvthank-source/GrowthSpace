import type { Metadata } from "next";
import { Star, TrendingUp, MousePointer2 } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import SectionBadge from "@/components/ui/SectionBadge";
import TextRollButton from "@/components/ui/TextRollButton";
import ExpandingCard from "@/components/ui/ExpandingCard";

export const metadata: Metadata = {
  title: "Case Studies & Client Results — GrowthSpare Marketing",
  description:
    "See real client results from GrowthSpare. Explore case studies showcasing 300%+ ROI across SEO, Google Ads, AI chatbots, and custom app development. View results! ✓",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Case Studies & Client Results — GrowthSpare Marketing",
    description:
      "See real client results from GrowthSpare. Explore case studies showcasing 300%+ ROI across SEO, Google Ads, AI chatbots, and custom app development. View results! ✓",
    url: "https://growthspare.com/projects",
    type: "website",
  },
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
      <section className="bg-[#EFEFEF] py-20 md:py-32">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <FadeIn>
            <SectionBadge label="Proven Work" />
            <h1 className="axion-heading text-[#111827] font-display mt-6 mb-6">
              Real Campaigns.<br />Real Results.
            </h1>
            <p className="font-sans text-[#6B7280] text-lg max-w-xl leading-relaxed">
              Every number on this page is pulled directly from live campaign dashboards —
              verified, unfiltered, and backed by real client data.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Projects */}
      <section className="bg-white py-20 md:py-32">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 space-y-24 md:space-y-32">
          {projects.map((project, i) => {
            const ChannelIcon = project.channelIcon;
            return (
              <FadeIn key={project.client} delay={0.1}>
                <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-start">
                  {/* Dashboard Screenshot using ExpandingCard */}
                  <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                    <ExpandingCard
                      href="#"
                      title="View Campaign Dashboard"
                      description={`Dashboard for ${project.client}`}
                      imageSrc={project.dashboardImage}
                      imageAlt={`${project.client} Campaign Dashboard`}
                      aspect="aspect-[4/3]"
                      variant="dark"
                      buttonLabel="View Stats"
                    />
                  </div>

                  {/* Content */}
                  <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                    <div className="flex flex-wrap items-center gap-3 mb-6">
                      <span className={`inline-flex items-center gap-2 text-xs font-display font-medium px-4 py-2 rounded-full ${project.channelBg} ${project.channelBorder} border ${project.channelColor}`}>
                        <ChannelIcon className="w-4 h-4" />
                        {project.channel}
                      </span>
                      <span className="font-sans text-sm text-[#6B7280] font-medium">{project.industry}</span>
                    </div>
                    <h2 className="font-display font-medium text-3xl md:text-4xl text-[#111827] mb-3">
                      {project.title}
                    </h2>
                    <p className="font-sans text-[#F5A623] font-semibold mb-6">{project.client}</p>
                    <p className="font-sans text-[#6B7280] leading-relaxed mb-6">{project.description}</p>
                    
                    <div className="bg-[#EFEFEF] rounded-2xl p-6 mb-6">
                      <p className="font-display text-xs font-semibold text-[#111827] uppercase tracking-wider mb-2">Campaign Highlights</p>
                      <p className="font-sans text-[#6B7280] text-sm leading-relaxed">{project.results}</p>
                    </div>
                    
                    <p className="font-sans text-[#6B7280] text-sm leading-relaxed mb-8">{project.outcome}</p>
                    
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                      {project.metrics.map((m) => (
                        <div key={m.label} className="bg-white rounded-xl p-4 text-center hover-lift border border-gray-100 shadow-sm">
                          <p className="font-display text-xl font-bold text-[#F5A623] leading-none mb-2">{m.value}</p>
                          <p className="font-sans text-[11px] text-[#6B7280] font-medium leading-tight">{m.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </section>

      {/* Our Clients */}
      <section className="bg-[#EFEFEF] py-20 md:py-32">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 text-center">
          <FadeIn>
            <SectionBadge number="02" label="Trusted By" />
            <h2 className="axion-heading text-[#111827] font-display mt-6 mb-12">Brands We&apos;ve Grown</h2>
            <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-6">
              {clients.map((client) => (
                <span
                  key={client}
                  className="font-display text-lg font-medium text-[#6B7280] hover:text-[#111827] transition-colors"
                >
                  {client}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-20 md:py-32">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <FadeIn>
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <SectionBadge number="03" label="Client Stories" />
                <h2 className="axion-heading text-[#111827] font-display mt-6">
                  Here&apos;s What Our Clients Say
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                {testimonials.map((t, idx) => (
                  <FadeIn key={t.name} delay={idx * 0.1}>
                    <div className="bg-[#EFEFEF] rounded-2xl p-8 hover-lift h-full flex flex-col">
                      <div className="flex gap-1.5 mb-6">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-[#F5A623] text-[#F5A623]" />
                        ))}
                      </div>
                      <p className="font-sans text-[#6B7280] leading-relaxed mb-8 italic text-base flex-grow">&ldquo;{t.text}&rdquo;</p>
                      <div>
                        <p className="font-display text-[#111827] font-medium text-lg">{t.name}</p>
                        <p className="font-sans text-[#6B7280] text-sm mt-1">{t.role}</p>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#EFEFEF] py-20 md:py-32 text-center">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <FadeIn>
            <div className="max-w-xl mx-auto">
              <h2 className="axion-heading text-[#111827] font-display mb-8">
                Ready to Be Our Next Success Story?
              </h2>
              <TextRollButton href="/contact" label="Book Free Consultation" variant="orange" />
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
