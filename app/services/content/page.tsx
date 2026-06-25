import type { Metadata } from "next";
import Link from "next/link";
import { MessageSquare, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Content Marketing Services — GrowthSpare",
  description: "GrowthSpare's content marketing services include blog writing, SEO content, copywriting, video scripts, and infographics that convert visitors into customers.",
};

const services = [
  { title: "Blog Writing", desc: "SEO-optimized long-form articles that rank on Google and build authority." },
  { title: "Website Copywriting", desc: "Persuasive website copy that converts visitors into leads and customers." },
  { title: "Social Media Content", desc: "Platform-native content that engages your audience and drives action." },
  { title: "Video Scripts", desc: "Compelling scripts for YouTube, Reels, and explainer videos." },
  { title: "Email Copy", desc: "High-open-rate email sequences that nurture and convert." },
  { title: "Infographics & Visual Content", desc: "Shareable visual content that simplifies complex information." },
];

export default function ContentPage() {
  return (
    <>
      <section className="bg-white py-16 md:py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 bg-green-50 text-green-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-5">
                <MessageSquare className="w-3.5 h-3.5" /> Content Marketing
              </span>
              <h1 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-5">
                Content That{" "}
                <span className="text-amber-500">Ranks, Engages & Converts.</span>
              </h1>
              <p className="text-gray-500 text-lg leading-relaxed mb-7">
                We create content that doesn&apos;t just fill space — it builds authority, attracts qualified
                traffic, and converts visitors into customers. Every piece is crafted with strategy, SEO,
                and your audience in mind.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-3.5 rounded-lg transition-colors">
                Get Content Strategy <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <img
              src="https://images.pexels.com/photos/6177607/pexels-photo-6177607.jpeg?auto=compress&cs=tinysrgb&w=700"
              alt="Content Marketing"
              className="w-full rounded-2xl shadow-xl object-cover aspect-video"
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-gray-900 mb-3">Our Content Services</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.title} className="bg-white rounded-2xl p-7 border border-gray-100 hover:border-green-200 hover:shadow-sm transition-all duration-200">
                <div className="w-2 h-8 bg-green-500 rounded-full mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-950 text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-white mb-4">Start Creating Content That Converts</h2>
          <p className="text-gray-400 text-lg mb-8">Let&apos;s build a content strategy that drives traffic and grows your business.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors shadow-lg">
            Book Free Consultation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
