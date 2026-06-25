import type { Metadata } from "next";
import Link from "next/link";
import { Share2, ArrowRight, Instagram, Linkedin, Youtube } from "lucide-react";

export const metadata: Metadata = {
  title: "Social Media Marketing — GrowthSpare",
  description: "Build brand awareness and drive engagement across Facebook, Instagram, LinkedIn, YouTube, and more with GrowthSpare's social media marketing services.",
};

const platforms = [
  { name: "Facebook", color: "bg-blue-600", desc: "Build community and run targeted lead gen campaigns." },
  { name: "Instagram", color: "bg-pink-500", desc: "Grow your brand visually with Reels, Stories, and ads." },
  { name: "LinkedIn", color: "bg-blue-700", desc: "Generate B2B leads and establish thought leadership." },
  { name: "YouTube", color: "bg-red-600", desc: "Video marketing that builds trust and drives discovery." },
  { name: "Pinterest", color: "bg-red-500", desc: "Drive product discovery and e-commerce traffic." },
  { name: "X (Twitter)", color: "bg-gray-900", desc: "Real-time engagement and brand voice building." },
];

export default function SocialMediaPage() {
  return (
    <>
      <section className="bg-white py-16 md:py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 bg-pink-50 text-pink-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-5">
                <Share2 className="w-3.5 h-3.5" /> Social Media Marketing
              </span>
              <h1 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-5">
                Build Your Brand on{" "}
                <span className="text-amber-500">Every Platform.</span>
              </h1>
              <p className="text-gray-500 text-lg leading-relaxed mb-7">
                Social media isn&apos;t just a channel for us — it&apos;s a strategic pillar. We craft
                platform-specific strategies that amplify your brand&apos;s voice, build audiences,
                and convert followers into customers.
              </p>
              <div className="flex gap-4">
                <Link href="/contact" className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-3.5 rounded-lg transition-colors">
                  Get Started
                </Link>
                <Link href="/projects" className="border-2 border-gray-200 hover:border-gray-900 text-gray-700 font-semibold px-6 py-3.5 rounded-lg transition-colors">
                  View Case Studies
                </Link>
              </div>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=700"
                alt="Social Media Marketing"
                className="w-full rounded-2xl shadow-xl object-cover aspect-video"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-gray-900 mb-3">Platforms We Manage</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Full-service social media management across all major platforms.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {platforms.map((p) => (
              <div key={p.name} className="bg-white rounded-2xl p-7 border border-gray-100 hover:shadow-sm transition-all duration-200">
                <div className={`w-10 h-10 ${p.color} rounded-xl flex items-center justify-center mb-4`}>
                  <span className="text-white font-bold text-sm">{p.name.charAt(0)}</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{p.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 text-center mb-10">What We Deliver</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Platform-specific content strategy", "Professional graphic design & video editing",
              "Caption writing & hashtag strategy", "Community management & engagement",
              "Paid social media campaigns", "Influencer collaboration management",
              "Monthly content calendar", "Performance analytics & reporting",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 p-4 rounded-xl border border-gray-100 hover:border-amber-200 transition-colors">
                <div className="w-2 h-2 rounded-full bg-amber-500 shrink-0" />
                <span className="text-gray-700 text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-950 text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-white mb-4">Ready to Grow Your Social Presence?</h2>
          <p className="text-gray-400 text-lg mb-8">Let&apos;s build a social media strategy that grows your brand and drives real business results.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors shadow-lg">
            Get Free Strategy Call <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
