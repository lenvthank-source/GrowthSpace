import type { Metadata } from "next";
import Link from "next/link";
import { MousePointer2, CheckCircle2, ArrowRight, Target, BarChart3, TrendingUp, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "Google Ads & PPC Management — GrowthSpare",
  description: "Expert Google Ads and PPC management by GrowthSpare. We maximize your ROAS with Search, Display, Shopping, and Performance Max campaigns.",
};

const features = [
  { icon: Target, title: "Search Campaigns", desc: "Capture high-intent buyers actively searching for your products or services on Google." },
  { icon: Globe, title: "Display Ads", desc: "Reach your audience across millions of websites with visually compelling banner ads." },
  { icon: BarChart3, title: "Shopping Ads", desc: "Drive e-commerce sales with product listing ads that show up right when buyers search." },
  { icon: TrendingUp, title: "Performance Max", desc: "AI-powered campaigns that optimize across all Google channels for maximum conversions." },
  { icon: MousePointer2, title: "Landing Page Optimization", desc: "High-converting landing pages that turn your ad clicks into leads and sales." },
  { icon: BarChart3, title: "Conversion Tracking", desc: "Accurate tracking of every call, form fill, and purchase tied back to your ad spend." },
];

export default function PPCPage() {
  return (
    <>
      <section className="bg-white py-16 md:py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 bg-amber-50 text-amber-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-5">
                <MousePointer2 className="w-3.5 h-3.5" /> Google Ads / PPC
              </span>
              <h1 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-5">
                Generate Leads with{" "}
                <span className="text-amber-500">High-Converting PPC Campaigns.</span>
              </h1>
              <p className="text-gray-500 text-lg leading-relaxed mb-7">
                Our certified Google Ads experts manage your entire paid search strategy — from campaign setup
                to ongoing optimization — ensuring every rupee delivers maximum return on investment.
              </p>
              <div className="flex gap-4">
                <Link href="/contact" className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-3.5 rounded-lg transition-colors">
                  Start a Campaign
                </Link>
                <Link href="/pricing" className="border-2 border-gray-200 hover:border-gray-900 text-gray-700 font-semibold px-6 py-3.5 rounded-lg transition-colors">
                  View Pricing
                </Link>
              </div>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg?auto=compress&cs=tinysrgb&w=700"
                alt="PPC Google Ads Management"
                className="w-full rounded-2xl shadow-xl object-cover aspect-video"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">PPC Services We Offer</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Full-funnel paid advertising management across all Google platforms.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="bg-white rounded-2xl p-7 border border-gray-100 hover:border-amber-200 hover:shadow-sm transition-all duration-200">
                  <div className="w-11 h-11 bg-amber-50 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-amber-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{f.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 text-center mb-10">Our PPC Management Process</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Account Audit", desc: "Review existing campaigns, identify wasted spend, and set up conversion tracking." },
              { step: "02", title: "Strategy & Setup", desc: "Keyword research, audience setup, ad copy creation, and campaign structure." },
              { step: "03", title: "Launch & Monitor", desc: "Launch campaigns, monitor performance hourly, and make quick adjustments." },
              { step: "04", title: "Optimize & Scale", desc: "A/B test ads, optimize bids, cut losers, and scale winners for maximum ROI." },
            ].map((step) => (
              <div key={step.step} className="text-center">
                <div className="w-14 h-14 bg-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-black text-lg">{step.step}</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-950 text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Ready to Scale with Google Ads?</h2>
          <p className="text-gray-400 text-lg mb-8">Get a free Google Ads audit and see how much you could save and earn.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors shadow-lg">
            Get Free Audit <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
