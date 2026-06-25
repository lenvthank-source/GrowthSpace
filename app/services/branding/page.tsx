import type { Metadata } from "next";
import Link from "next/link";
import { Palette, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Branding & Creative Design — GrowthSpare",
  description: "GrowthSpare creates memorable brand identities — logos, brand guidelines, visual systems, and creative design that makes your business stand out.",
};

const services = [
  { title: "Logo Design", desc: "Timeless, versatile logo marks that communicate your brand values at a glance." },
  { title: "Brand Identity System", desc: "Complete brand guidelines — colors, typography, tone of voice, and usage rules." },
  { title: "Visual Design & Collateral", desc: "Business cards, presentations, brochures, and print materials that impress." },
  { title: "Social Media Design", desc: "Consistent templates and visual assets for all your social media platforms." },
  { title: "Packaging Design", desc: "Product packaging that stands out on shelves and communicates brand premium." },
  { title: "Motion Graphics", desc: "Animated logos, explainer videos, and social media motion content." },
];

export default function BrandingPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-orange-50 to-white py-16 md:py-20 border-b border-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 text-xs font-semibold px-3.5 py-2 rounded-full mb-6">
                <Palette className="w-3.5 h-3.5" /> Branding & Creative Design
              </span>
              <h1 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-5">
                Build a Brand That{" "}
                <span className="text-amber-500">People Remember.</span>
              </h1>
              <p className="text-gray-500 text-lg leading-relaxed mb-7">
                Your brand is more than a logo — it&apos;s the feeling customers get every time they
                interact with your business. We create cohesive brand identities that build trust,
                communicate value, and make your business instantly recognizable.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-3.5 rounded-xl transition-colors shadow-md">
                Start Brand Project <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <img src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=700" alt="Branding and Creative Design" className="w-full rounded-3xl shadow-xl object-cover aspect-video" />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-gray-900 mb-3">Branding Services</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.title} className="bg-orange-50/40 border border-orange-100 rounded-2xl p-7 hover:border-amber-200 hover:shadow-sm transition-all duration-200">
                <div className="w-10 h-10 bg-amber-500 rounded-xl flex items-center justify-center mb-4">
                  <Palette className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-950 text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-white mb-4">Ready to Build Your Brand Identity?</h2>
          <p className="text-gray-400 text-lg mb-8">Let&apos;s create a brand that stands out and communicates your value clearly.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-4 rounded-xl transition-colors shadow-lg">
            Start Brand Project <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
