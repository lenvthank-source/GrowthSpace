import type { Metadata } from "next";
import Link from "next/link";
import { Mail, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Email Marketing Services — GrowthSpare",
  description: "GrowthSpare's email marketing services include campaign automation, lead nurturing, newsletter design, and CRM integrations that drive repeat revenue.",
};

const features = [
  { title: "Campaign Automation", desc: "Set up automated email sequences that nurture leads and drive conversions on autopilot." },
  { title: "Lead Nurturing Flows", desc: "Multi-step drip campaigns that move prospects through your funnel to become paying customers." },
  { title: "Newsletter Design", desc: "Beautifully designed newsletters that keep your audience engaged and coming back." },
  { title: "CRM Integrations", desc: "Seamless integration with HubSpot, Mailchimp, Klaviyo, and other leading CRM platforms." },
  { title: "A/B Testing", desc: "Systematic testing of subject lines, CTAs, and content to maximize open and click rates." },
  { title: "Analytics & Reporting", desc: "Detailed performance reports on opens, clicks, conversions, and revenue attributed." },
];

export default function EmailPage() {
  return (
    <>
      <section className="bg-white py-16 md:py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 bg-rose-50 text-rose-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-5">
                <Mail className="w-3.5 h-3.5" /> Email Marketing
              </span>
              <h1 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-5">
                Turn Your Email List Into a{" "}
                <span className="text-amber-500">Revenue Engine.</span>
              </h1>
              <p className="text-gray-500 text-lg leading-relaxed mb-7">
                We craft high-performing email campaigns while simplifying the entire delivery process —
                ensuring every communication is seamless, personalized, and drives measurable revenue.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-3.5 rounded-lg transition-colors">
                Get Started <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <img
              src="https://images.pexels.com/photos/1591062/pexels-photo-1591062.jpeg?auto=compress&cs=tinysrgb&w=700"
              alt="Email Marketing"
              className="w-full rounded-2xl shadow-xl object-cover aspect-video"
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-gray-900 mb-3">Email Marketing Services</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Everything you need to build and monetize your email list.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="bg-white rounded-2xl p-7 border border-gray-100 hover:border-rose-200 hover:shadow-sm transition-all duration-200">
                <div className="w-10 h-10 bg-rose-50 rounded-xl flex items-center justify-center mb-4">
                  <Mail className="w-5 h-5 text-rose-500" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-950 text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-white mb-4">Ready to Monetize Your Email List?</h2>
          <p className="text-gray-400 text-lg mb-8">Let&apos;s build email automation sequences that generate revenue while you sleep.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors shadow-lg">
            Book Free Consultation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
