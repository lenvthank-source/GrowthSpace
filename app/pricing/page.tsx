import type { Metadata } from "next";
import { CheckCircle2, Zap, TrendingUp, Building2 } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import SectionBadge from "@/components/ui/SectionBadge";
import TextRollButton from "@/components/ui/TextRollButton";

export const metadata: Metadata = {
  title: "GrowthSpare Pricing — Transparent SEO & Marketing Plans",
  description:
    "Explore transparent pricing packages for SEO, PPC, AI chatbots & custom software at GrowthSpare. Flexible plans for startups and enterprises. See pricing today! ✓",
  alternates: {
    canonical: "/pricing",
  },
  openGraph: {
    title: "GrowthSpare Pricing — Transparent SEO & Marketing Plans",
    description:
      "Explore transparent pricing packages for SEO, PPC, AI chatbots & custom software at GrowthSpare. Flexible plans for startups and enterprises.",
    url: "https://growthspare.com/pricing",
    type: "website",
  },
};

const plans = [
  {
    icon: Zap,
    name: "Starter",
    tagline: "Best for startups",
    price: "₹15,000",
    period: "/month",
    desc: "Everything you need to establish your digital presence and start generating leads.",
    features: [
      "SEO Audit & On-page Optimization",
      "Google My Business Setup",
      "1 Social Media Platform",
      "8 Posts per Month",
      "Monthly Performance Report",
      "Email Support",
      "Keyword Research (25 keywords)",
      "Basic Competitor Analysis",
    ],
    notIncluded: [
      "Paid Ad Management",
      "Content Writing",
      "Dedicated Account Manager",
    ],
  },
  {
    icon: TrendingUp,
    name: "Growth",
    tagline: "Best for SMBs",
    price: "₹35,000",
    period: "/month",
    desc: "A complete growth engine for scaling businesses ready to dominate their market.",
    badge: "Most Popular",
    features: [
      "Everything in Starter",
      "Google Ads Management (up to ₹1L ad spend)",
      "Meta Ads Management",
      "3 Social Media Platforms",
      "16 Posts per Month",
      "Blog Writing (4 articles/month)",
      "Email Marketing (2 campaigns/month)",
      "Dedicated Account Manager",
      "Bi-weekly Strategy Calls",
      "Conversion Tracking Setup",
      "Landing Page Optimization",
      "Detailed Monthly Report",
    ],
    notIncluded: [],
  },
  {
    icon: Building2,
    name: "Enterprise",
    tagline: "Custom solutions",
    price: "Custom",
    period: "",
    desc: "Fully customized strategies for large businesses and enterprises with complex needs.",
    features: [
      "Everything in Growth",
      "Full-funnel Marketing Strategy",
      "Unlimited Ad Platforms",
      "Unlimited Social Channels",
      "Dedicated Team of 3+ Experts",
      "Weekly Strategy Sessions",
      "Custom Reporting Dashboard",
      "CRM Integration & Automation",
      "Advanced SEO (Technical + International)",
      "Video Content Production",
      "Influencer Marketing",
      "Priority 24/7 Support",
    ],
    notIncluded: [],
  },
];

const comparison = [
  { feature: "SEO Optimization", starter: true, growth: true, enterprise: true },
  { feature: "Google Ads Management", starter: false, growth: true, enterprise: true },
  { feature: "Meta Ads", starter: false, growth: true, enterprise: true },
  { feature: "Social Media (platforms)", starter: "1", growth: "3", enterprise: "All" },
  { feature: "Content Writing", starter: false, growth: "4/month", enterprise: "Unlimited" },
  { feature: "Email Campaigns", starter: false, growth: "2/month", enterprise: "Unlimited" },
  { feature: "Dedicated Account Manager", starter: false, growth: true, enterprise: true },
  { feature: "Monthly Reporting", starter: true, growth: true, enterprise: true },
  { feature: "Strategy Calls", starter: false, growth: "Bi-weekly", enterprise: "Weekly" },
  { feature: "CRM Integration", starter: false, growth: false, enterprise: true },
];

function CheckOrX({ value }: { value: boolean | string }) {
  if (value === true) return <CheckCircle2 className="w-5 h-5 text-[#F5A623] mx-auto" />;
  if (value === false) return <span className="text-gray-300 text-lg font-bold block text-center">—</span>;
  return <span className="text-xs font-sans font-semibold text-[#111827] block text-center">{value}</span>;
}

export default function PricingPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-[#EFEFEF] py-20 md:py-32">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 text-center">
          <FadeIn>
            <SectionBadge label="Transparent Pricing" />
            <h1 className="axion-heading text-[#111827] font-display mt-6 mb-6">
              Simple, Honest Pricing
            </h1>
            <p className="font-sans text-[#6B7280] text-lg max-w-2xl mx-auto leading-relaxed">
              No hidden fees. No locked-in contracts. Choose the plan that fits your
              goals and scale as you grow.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Plans */}
      <section className="bg-white py-20 md:py-32">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {plans.map((plan, i) => {
              const Icon = plan.icon;
              return (
                <FadeIn key={plan.name} delay={i * 0.1}>
                  <div className="relative bg-[#EFEFEF] rounded-2xl p-6 sm:p-8 hover-lift h-full flex flex-col">
                    {plan.badge && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                        <span className="bg-[#F5A623] text-[#111827] text-xs font-bold px-4 py-1.5 rounded-full whitespace-nowrap">
                          {plan.badge}
                        </span>
                      </div>
                    )}

                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                        <Icon className="w-6 h-6 text-[#F5A623]" />
                      </div>
                      <div>
                        <h2 className="font-display font-medium text-[#111827] text-2xl">{plan.name}</h2>
                        <p className="font-sans text-[#F5A623] text-xs font-semibold">{plan.tagline}</p>
                      </div>
                    </div>

                    <div className="mb-6">
                      <span className="text-4xl font-display font-bold text-[#111827]">{plan.price}</span>
                      <span className="font-sans text-[#6B7280] text-sm">{plan.period}</span>
                    </div>

                    <p className="font-sans text-[#6B7280] text-sm mb-8 leading-relaxed flex-grow">{plan.desc}</p>

                    <div className="mb-8">
                      <TextRollButton
                        href="/contact"
                        label={plan.name === "Enterprise" ? "Get Custom Quote" : "Get Started"}
                        variant={plan.badge ? "orange" : "dark"}
                        className="w-full justify-center"
                      />
                    </div>

                    <div className="space-y-4">
                      {plan.features.map((f) => (
                        <div key={f} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-[#F5A623] shrink-0" />
                          <span className="font-sans text-[#111827] text-sm">{f}</span>
                        </div>
                      ))}
                      {plan.notIncluded.map((f) => (
                        <div key={f} className="flex items-start gap-3 opacity-40">
                          <span className="w-5 h-5 shrink-0 flex items-center justify-center">
                            <span className="w-3 h-0.5 bg-gray-400 block" />
                          </span>
                          <span className="font-sans text-[#6B7280] text-sm line-through">{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="bg-[#EFEFEF] py-20 md:py-32">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <FadeIn>
            <div className="text-center mb-16">
              <SectionBadge number="02" label="Compare Features" />
              <h2 className="axion-heading text-[#111827] font-display mt-6">
                Compare All Plans
              </h2>
            </div>
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[800px]">
                  <thead>
                    <tr className="border-b border-gray-100">
                      <th className="text-left px-8 py-6 font-display font-medium text-[#6B7280]">Feature</th>
                      <th className="text-center px-6 py-6 font-display font-medium text-[#111827]">Starter</th>
                      <th className="text-center px-6 py-6 font-display font-bold text-[#F5A623] bg-[#F5A623]/5">Growth</th>
                      <th className="text-center px-6 py-6 font-display font-medium text-[#111827]">Enterprise</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparison.map((row, i) => (
                      <tr key={row.feature} className={`border-b border-gray-100 ${i % 2 === 1 ? "bg-gray-50/50" : ""}`}>
                        <td className="px-8 py-5 font-sans text-sm text-[#111827]">{row.feature}</td>
                        <td className="px-6 py-5"><CheckOrX value={row.starter} /></td>
                        <td className="px-6 py-5 bg-[#F5A623]/5"><CheckOrX value={row.growth} /></td>
                        <td className="px-6 py-5"><CheckOrX value={row.enterprise} /></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20 md:py-32">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <FadeIn>
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <SectionBadge number="03" label="Pricing FAQs" />
                <h2 className="axion-heading text-[#111827] font-display mt-6">
                  Frequently Asked Questions
                </h2>
              </div>
              <div className="space-y-4">
                {[
                  { q: "Are there any setup fees?", a: "No hidden setup fees. The monthly price is all-inclusive for the services listed in your plan." },
                  { q: "Can I upgrade or downgrade my plan?", a: "Absolutely. You can change your plan at any time. Changes take effect from the next billing cycle." },
                  { q: "Do you require a long-term contract?", a: "We work on monthly rolling agreements with a recommended minimum of 3 months for SEO to see meaningful results." },
                  { q: "What happens to my campaigns if I cancel?", a: "You own all your ad accounts, content, and assets. We hand everything over with a full documentation handoff." },
                ].map((faq, i) => (
                  <FadeIn key={faq.q} delay={i * 0.1}>
                    <div className="bg-[#EFEFEF] rounded-2xl p-6 sm:p-8 hover-lift">
                      <h3 className="font-display font-medium text-[#111827] text-lg mb-3">{faq.q}</h3>
                      <p className="font-sans text-[#6B7280] text-sm leading-relaxed">{faq.a}</p>
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
            <div className="max-w-3xl mx-auto">
              <h2 className="axion-heading text-[#111827] font-display mb-6">
                Not Sure Which Plan to Choose?
              </h2>
              <p className="font-sans text-[#6B7280] text-lg mb-10">
                Book a free 30-minute consultation and we&apos;ll recommend the right plan
                for your goals and budget.
              </p>
              <TextRollButton href="/contact" label="Get a Free Consultation" variant="orange" />
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
