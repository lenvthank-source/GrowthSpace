import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Zap, TrendingUp, Building2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Pricing — GrowthSpare Digital Marketing Packages",
  description:
    "Explore GrowthSpare's transparent pricing packages for SEO, PPC, social media marketing, and full-service digital marketing. Starter, Growth, and Enterprise plans available.",
};

const plans = [
  {
    icon: Zap,
    name: "Starter",
    tagline: "Best for startups",
    price: "₹15,000",
    period: "/month",
    desc: "Everything you need to establish your digital presence and start generating leads.",
    color: "border-gray-200",
    btnColor: "bg-gray-900 hover:bg-gray-800 text-white",
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
    color: "border-amber-500 shadow-xl shadow-amber-100",
    btnColor: "bg-amber-500 hover:bg-amber-600 text-white",
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
    color: "border-gray-900",
    btnColor: "bg-gray-900 hover:bg-amber-500 text-white",
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
  if (value === true) return <CheckCircle2 className="w-5 h-5 text-green-500 mx-auto" />;
  if (value === false) return <span className="text-gray-300 text-lg font-bold block text-center">—</span>;
  return <span className="text-xs font-semibold text-gray-700 block text-center">{value}</span>;
}

export default function PricingPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-white py-16 md:py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-amber-500 text-sm font-semibold uppercase tracking-widest mb-3">
            Transparent Pricing
          </p>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Simple, Honest Pricing
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            No hidden fees. No locked-in contracts. Choose the plan that fits your
            goals and scale as you grow.
          </p>
        </div>
      </section>

      {/* Plans */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            {plans.map((plan) => {
              const Icon = plan.icon;
              return (
                <div
                  key={plan.name}
                  className={`relative bg-white rounded-2xl border-2 ${plan.color} p-8 transition-all duration-300`}
                >
                  {plan.badge && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="bg-amber-500 text-white text-xs font-bold px-4 py-1.5 rounded-full whitespace-nowrap">
                        {plan.badge}
                      </span>
                    </div>
                  )}

                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-11 h-11 bg-amber-50 rounded-xl flex items-center justify-center">
                      <Icon className="w-5 h-5 text-amber-500" />
                    </div>
                    <div>
                      <h2 className="font-black text-gray-900 text-xl">{plan.name}</h2>
                      <p className="text-amber-500 text-xs font-semibold">{plan.tagline}</p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <span className="text-4xl font-black text-gray-900">{plan.price}</span>
                    <span className="text-gray-500 text-sm">{plan.period}</span>
                  </div>

                  <p className="text-gray-500 text-sm mb-7 leading-relaxed">{plan.desc}</p>

                  <Link
                    href="/contact"
                    className={`block text-center font-semibold py-3.5 rounded-xl mb-7 transition-all duration-200 ${plan.btnColor}`}
                  >
                    {plan.name === "Enterprise" ? "Get Custom Quote" : "Get Started"}
                  </Link>

                  <div className="space-y-3">
                    {plan.features.map((f) => (
                      <div key={f} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{f}</span>
                      </div>
                    ))}
                    {plan.notIncluded.map((f) => (
                      <div key={f} className="flex items-start gap-2.5 opacity-40">
                        <span className="w-4 h-4 shrink-0 mt-0.5 flex items-center justify-center">
                          <span className="w-3 h-0.5 bg-gray-400 block" />
                        </span>
                        <span className="text-gray-500 text-sm line-through">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 text-center mb-12">
            Compare All Plans
          </h2>
          <div className="rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100">
                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">Feature</th>
                  <th className="text-center px-4 py-4 text-sm font-semibold text-gray-900">Starter</th>
                  <th className="text-center px-4 py-4 text-sm font-bold text-amber-600 bg-amber-50/50">Growth</th>
                  <th className="text-center px-4 py-4 text-sm font-semibold text-gray-900">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr key={row.feature} className={`border-b border-gray-50 ${i % 2 === 1 ? "bg-gray-50/30" : ""}`}>
                    <td className="px-6 py-4 text-sm text-gray-700">{row.feature}</td>
                    <td className="px-4 py-4"><CheckOrX value={row.starter} /></td>
                    <td className="px-4 py-4 bg-amber-50/30"><CheckOrX value={row.growth} /></td>
                    <td className="px-4 py-4"><CheckOrX value={row.enterprise} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-black text-gray-900 text-center mb-10">
            Pricing FAQs
          </h2>
          <div className="space-y-4">
            {[
              { q: "Are there any setup fees?", a: "No hidden setup fees. The monthly price is all-inclusive for the services listed in your plan." },
              { q: "Can I upgrade or downgrade my plan?", a: "Absolutely. You can change your plan at any time. Changes take effect from the next billing cycle." },
              { q: "Do you require a long-term contract?", a: "We work on monthly rolling agreements with a recommended minimum of 3 months for SEO to see meaningful results." },
              { q: "What happens to my campaigns if I cancel?", a: "You own all your ad accounts, content, and assets. We hand everything over with a full documentation handoff." },
            ].map((faq) => (
              <div key={faq.q} className="bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-950 text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Not Sure Which Plan to Choose?
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Book a free 30-minute consultation and we&apos;ll recommend the right plan
            for your goals and budget.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 shadow-lg"
          >
            Get a Free Consultation
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
