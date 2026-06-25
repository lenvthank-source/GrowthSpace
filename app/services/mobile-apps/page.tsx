import type { Metadata } from "next";
import Link from "next/link";
import { Smartphone, ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Mobile App Development — GrowthSpare | Android & iOS",
  description: "GrowthSpare builds high-performance Android and iOS apps, cross-platform mobile apps with React Native/Flutter, and Progressive Web Apps for businesses of all sizes.",
};

const platforms = [
  { name: "Android Development", desc: "Native Android apps built with Kotlin/Java for maximum performance on all Android devices.", icon: "🤖" },
  { name: "iOS Development", desc: "Native iOS apps built with Swift, designed for a premium Apple ecosystem experience.", icon: "🍎" },
  { name: "React Native", desc: "Cross-platform apps from a single codebase — same quality experience on Android and iOS.", icon: "⚛️" },
  { name: "Flutter Development", desc: "Google's UI toolkit for beautiful, natively compiled cross-platform mobile experiences.", icon: "🐦" },
  { name: "Progressive Web Apps", desc: "PWAs that work offline, load instantly, and can be installed from the browser.", icon: "🌐" },
  { name: "SaaS Mobile Apps", desc: "Multi-tenant mobile SaaS platforms with subscription management and enterprise features.", icon: "☁️" },
];

const features = [
  "UI/UX design and prototyping (Figma)",
  "Custom backend API development",
  "Push notification integration",
  "Payment gateway integration",
  "Social login (Google, Apple, Facebook)",
  "Real-time features (chat, live updates)",
  "Offline capability and sync",
  "App Store & Play Store deployment",
  "Analytics and crash reporting",
  "Post-launch maintenance & updates",
];

export default function MobileAppsPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-indigo-50 to-white py-16 md:py-20 border-b border-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 text-xs font-semibold px-3.5 py-2 rounded-full mb-6">
                <Smartphone className="w-3.5 h-3.5" /> Mobile App Development
              </span>
              <h1 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-5">
                Mobile Apps That{" "}
                <span className="text-blue-600">Users Love.</span>
              </h1>
              <p className="text-gray-500 text-lg leading-relaxed mb-7">
                We build high-performance native and cross-platform mobile apps for Android and iOS.
                From consumer apps to enterprise mobility solutions, we deliver mobile experiences
                that drive engagement, retention, and revenue.
              </p>
              <div className="flex gap-4">
                <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3.5 rounded-xl transition-colors shadow-md">
                  Start Your App Project
                </Link>
                <Link href="/pricing" className="border-2 border-gray-200 hover:border-gray-900 text-gray-700 font-semibold px-6 py-3.5 rounded-xl transition-colors">
                  View Pricing
                </Link>
              </div>
            </div>
            <img src="https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=700" alt="Mobile App Development" className="w-full rounded-3xl shadow-xl object-cover aspect-video" />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-gray-900 mb-3">Platforms & Technologies</h2>
            <p className="text-gray-500 max-w-xl mx-auto">We choose the right tech stack based on your business needs, timeline, and budget.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {platforms.map((p) => (
              <div key={p.name} className="bg-indigo-50/50 border border-indigo-100 rounded-2xl p-7 hover:border-indigo-200 hover:shadow-sm transition-all duration-200">
                <span className="text-3xl mb-4 block">{p.icon}</span>
                <h3 className="font-bold text-gray-900 mb-2">{p.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 text-center mb-10">What&apos;s Included</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {features.map((f) => (
              <div key={f} className="flex items-center gap-3 bg-white p-4 rounded-xl border border-gray-100">
                <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" />
                <span className="text-gray-700 text-sm font-medium">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-950 text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-white mb-4">Ready to Build Your Mobile App?</h2>
          <p className="text-gray-400 text-lg mb-8">Get a free project scope and estimate from our mobile development team.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl transition-colors shadow-lg">
            Get Free Estimate <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
