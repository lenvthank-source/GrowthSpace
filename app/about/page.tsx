import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Briefcase } from "lucide-react";

export const metadata: Metadata = {
  title: "About GrowthSpare — Our Story, Team & Values",
  description:
    "Learn about GrowthSpare, a results-driven digital marketing agency helping businesses grow their online presence and generate consistent leads.",
};

const team = [
  {
    name: "Animesh Khosla",
    role: "Founder",
    bio: "Visionary leader with deep expertise in growth strategy, performance marketing, and business development. Driving GrowthSpare's mission to deliver end-to-end growth solutions.",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300",
    accent: "Founder",
  },
  {
    name: "Palak Katiyar",
    role: "Operations & Technology",
    bio: "Technology and operations expert overseeing project delivery, software development, and AI implementations. Ensures seamless execution across all initiatives.",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300",
    accent: "Operations",
  },
  {
    name: "Arun Khosla",
    role: "Director",
    bio: "Strategic advisor with extensive business experience. Guides company vision, partnerships, and long-term growth strategy.",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300",
    accent: "Director",
  },
];

const values = [
  { title: "Transparency", desc: "We share everything — wins, losses, and next steps. No hidden fees, no BS." },
  { title: "Innovation", desc: "We stay ahead of algorithm changes and platform updates so you don't have to." },
  { title: "Performance", desc: "Every strategy is tied to measurable outcomes. We are obsessed with results." },
  { title: "Customer Success", desc: "Your growth is our growth. We treat your business as our own." },
];

const approach = [
  "Clarity over complexity",
  "Deep Discovery & Market Research",
  "Content & Creative That Converts",
  "Transparent Reporting & Insights",
  "SEO-First Strategy",
];

const faqs = [
  {
    q: "What digital marketing services does GrowthSpare offer in Delhi NCR?",
    a: "GrowthSpare offers complete digital marketing services in Delhi NCR, including SEO, Google Ads, social media marketing, website design, and performance marketing. Our services are designed to help businesses improve visibility, drive measurable growth, and scale sustainably.",
  },
  {
    q: "How can SEO help my business in Delhi NCR grow?",
    a: "SEO puts your business higher on Google for keywords your customers are searching. GrowthSpare's digital marketing services in Delhi NCR bring qualified traffic that converts, driving long-term sustainable lead flow.",
  },
  {
    q: "What makes GrowthSpare different from other digital marketing agencies in Delhi NCR?",
    a: "Our focus is on performance marketing, transparency, and data-driven decision-making at every step. We don't just increase traffic — we increase revenue.",
  },
  {
    q: "Is performance marketing important for my business?",
    a: "Yes. Performance marketing ensures you get measurable results for every rupee spent. At GrowthSpare, every campaign is optimized around your ROI, not vanity metrics.",
  },
  {
    q: "How do I get started with GrowthSpare?",
    a: "You can contact us through our website or request a consultation by calling us. We then build a customized digital marketing strategy for your growth.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white py-16 md:py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs text-gray-400 uppercase tracking-widest mb-2">
            [About GrowthSpare]
          </p>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-black text-gray-900 leading-tight mb-6">
                About Us
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                GrowthSpare is a results-driven digital marketing agency helping
                businesses across Delhi NCR, Noida, and Gurgaon grow their online
                presence and generate consistent leads. We specialize in creating
                data-backed marketing strategies that not only improve visibility but
                also drive real business outcomes.
              </p>
              <p className="text-gray-600 leading-relaxed">
                As a leading provider of digital marketing services in Delhi NCR, we
                work with startups, SMBs, and growing brands. Whether you&apos;re based in
                Noida, Gurgaon, or anywhere in NCR, our team ensures your brand
                reaches the right audience at the right time.
              </p>
            </div>
            <div className="lg:pt-4">
              <div className="bg-gray-50 rounded-2xl p-8 space-y-3">
                <h3 className="font-black text-2xl text-gray-900 mb-4">Built for Growth</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  Whether you&apos;re launching your first product or scaling to new
                  heights, GrowthSpare acts as your extended marketing team —
                  bringing strategy, execution, and optimization under one roof.
                </p>
                <div className="bg-gray-900 rounded-xl p-6">
                  <p className="text-amber-400 font-bold text-sm uppercase tracking-wider mb-4">
                    Approach
                  </p>
                  <ul className="space-y-2">
                    {approach.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-gray-300 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-start">
            {/* Left — Photo + Stats */}
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Animesh Khosla - Founder"
                className="w-full max-w-sm rounded-3xl object-cover shadow-2xl"
              />
              {/* Stat badges */}
              <div className="absolute -bottom-5 -right-4 bg-white rounded-2xl shadow-lg border border-gray-100 px-5 py-4">
                <p className="text-2xl font-black text-amber-500">50+</p>
                <p className="text-xs text-gray-500 font-medium">Brands Managed</p>
              </div>
              <div className="absolute top-6 -right-4 bg-amber-500 rounded-2xl shadow-lg px-5 py-4">
                <p className="text-2xl font-black text-white">10+</p>
                <p className="text-xs text-amber-100 font-medium">Years Experience</p>
              </div>
            </div>

            {/* Right — Bio */}
            <div>
              <p className="text-amber-500 text-sm font-semibold uppercase tracking-widest mb-2">Founder & Marketing Consultant</p>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-5">
                Animesh Khosla
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Animesh, the founder of GrowthSpare, brings over 10+ years of experience in digital marketing, helping brands across Delhi NCR, Noida, and Gurgaon achieve measurable growth through strategic and performance-driven campaigns.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Having successfully handled 50+ brands, including reputed names like McCann, Modern School, Xen Interiors, Sevenaire Electronics, and many more, Animesh has built a strong foundation in SEO, performance marketing, and brand growth strategies. His diverse industry exposure allows him to understand unique business challenges and craft tailored solutions that deliver real results.
              </p>
              <p className="text-gray-600 leading-relaxed mb-7">
                He founded GrowthSpare with a clear vision — to simplify digital marketing for businesses and focus on what truly matters: visibility, conversions, and sustainable growth. His approach is rooted in data, creativity, and consistency — helping brands not just compete, but stand out in a crowded digital landscape.
              </p>

              {/* Values */}
              <div className="mb-8">
                <h3 className="font-black text-gray-900 text-sm uppercase tracking-wider mb-3">Core Values</h3>
                <div className="grid grid-cols-1 gap-2">
                  {["Performance Over Promises", "Consistency & Discipline", "Client-Centric Approach", "Treat Clients as Partners", "Adaptability & Innovation"].map((v) => (
                    <div key={v} className="flex items-center gap-2.5 text-gray-600 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                      {v}
                    </div>
                  ))}
                </div>
              </div>

              {/* Experience Timeline */}
              <div>
                <h3 className="font-black text-gray-900 text-sm uppercase tracking-wider mb-4">Experience</h3>
                <div className="space-y-3">
                  {[
                    { role: "Founder & Marketing Consultant", company: "GrowthSpare", current: true },
                    { role: "Brand Manager", company: "Xworkstations", current: false },
                    { role: "Brand Designer", company: "Sevenaire Electronics", current: false },
                    { role: "Visual Design Lead", company: "McCann", current: false },
                  ].map((exp, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${exp.current ? "bg-amber-500" : "bg-gray-100"}`}>
                        <Briefcase className={`w-3.5 h-3.5 ${exp.current ? "text-white" : "text-gray-500"}`} />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900">{exp.role}</p>
                        <p className="text-xs text-gray-500">{exp.company}{exp.current && <span className="ml-2 text-amber-500 font-bold">Current</span>}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-4">
            <p className="text-xs text-gray-400 uppercase tracking-widest">[The Team]</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-12">
            Meet Our Team
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.name} className="group">
                <div className="relative overflow-hidden rounded-xl mb-4 aspect-[4/5]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-bold text-gray-900">{member.name}</h3>
                <p className="text-amber-500 text-sm font-semibold mb-2">
                  {member.accent}
                </p>
                <p className="text-gray-500 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Our Values</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-gray-50 rounded-2xl p-7 border border-gray-100 hover:border-amber-200 hover:shadow-sm transition-all duration-200">
                <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-4">
            <p className="text-xs text-gray-400 uppercase tracking-widest">[FAQs]</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-2">
            Your Questions, Answered
          </h2>
          <p className="text-gray-500 mb-10">
            Helping you understand our process and offerings at GrowthSpare.
          </p>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-950 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-4">
            We believe in one thing:
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6 leading-tight">
            Creating digital experiences that truly stand out.
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 shadow-lg"
          >
            Start Your Growth Journey
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
