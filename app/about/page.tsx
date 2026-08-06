import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Briefcase, Smartphone } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import SectionBadge from "@/components/ui/SectionBadge";
import TextRollButton from "@/components/ui/TextRollButton";

export const metadata: Metadata = {
  title: "About GrowthSpare — Growth Marketing & AI Tech Leaders",
  description:
    "Discover GrowthSpare: Our team, mission, and transparent approach to growing brands through performance marketing, custom software & AI automation. Connect today! ✓",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About GrowthSpare — Growth Marketing & AI Tech Leaders",
    description:
      "Discover GrowthSpare: Our team, mission, and transparent approach to growing brands through performance marketing, custom software & AI automation. Connect today! ✓",
    url: "https://growthspare.com/about",
    type: "website",
  },
};

const team = [
  {
    name: "Arun Khosla",
    role: "Director",
    bio: "Strategic advisor and Financial Consultant with 38+ years of extensive business experience. Guides company vision, partnerships, and long-term growth strategy.",
    image: "/images/case-studies/arun.png",
    accent: "Director",
    slug: "arun-khosla",
  },
  {
    name: "Animesh Khosla",
    role: "Founder",
    bio: "Visionary leader with deep expertise in growth strategy, performance marketing, and business development. Driving GrowthSpare's mission to deliver end-to-end growth solutions.",
    image: "/images/case-studies/animersh.png",
    accent: "Founder",
    slug: "animesh-khosla",
  },
  {
    name: "Palak Katiyar",
    role: "CTO: Head of Product Engineering",
    bio: "Technology and product engineering leader with 7+ years experience overseeing software architecture, custom web/mobile apps, ERP/CRM, and AI implementations.",
    image: "/images/case-studies/palak.png",
    accent: "CTO",
    slug: "palak-katiyar",
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
      <section className="bg-[#EFEFEF] py-20 md:py-32">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <FadeIn>
            <SectionBadge label="About GrowthSpare" />
            <div className="grid lg:grid-cols-2 gap-12 items-start mt-8">
              <div>
                <h1 className="axion-heading text-[#111827] font-display mb-6">
                  About Us
                </h1>
                <p className="font-sans text-[#6B7280] text-lg leading-relaxed mb-4">
                  GrowthSpare is a results-driven digital marketing agency helping
                  businesses across Delhi NCR, Noida, and Gurgaon grow their online
                  presence and generate consistent leads. We specialize in creating
                  data-backed marketing strategies that not only improve visibility but
                  also drive real business outcomes.
                </p>
                <p className="font-sans text-[#6B7280] leading-relaxed">
                  As a leading provider of digital marketing services in Delhi NCR, we
                  work with startups, SMBs, and growing brands. Whether you&apos;re based in
                  Noida, Gurgaon, or anywhere in NCR, our team ensures your brand
                  reaches the right audience at the right time.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 hover-lift shadow-sm">
                <h2 className="font-display font-medium text-2xl text-[#111827] mb-4">Built for Growth</h2>
                <p className="font-sans text-[#6B7280] text-sm leading-relaxed mb-6">
                  Whether you&apos;re launching your first product or scaling to new
                  heights, GrowthSpare acts as your extended marketing team —
                  bringing strategy, execution, and optimization under one roof.
                </p>
                <div className="bg-[#111827] rounded-xl p-6">
                  <p className="text-[#F5A623] font-semibold text-sm uppercase tracking-wider mb-4">
                    Approach
                  </p>
                  <ul className="space-y-3">
                    {approach.map((item) => (
                      <li key={item} className="flex items-center gap-3 font-sans text-gray-300 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#F5A623] shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Founder */}
      <section className="bg-white py-20 md:py-32">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <FadeIn>
            <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-start">
              {/* Left — Photo + Stats */}
              <div className="relative">
                <img
                  src="/images/case-studies/animersh.png"
                  alt="Animesh Khosla - Founder"
                  className="w-full max-w-md rounded-2xl object-cover hover-lift shadow-lg"
                />
                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6">
                  <p className="text-3xl font-display font-bold text-[#F5A623]">50+</p>
                  <p className="font-sans text-sm text-[#6B7280] font-medium">Brands Managed</p>
                </div>
                <div className="absolute top-8 -right-6 bg-[#F5A623] rounded-2xl shadow-xl p-6">
                  <p className="text-3xl font-display font-bold text-[#111827]">10+</p>
                  <p className="font-sans text-sm text-amber-900 font-medium">Years Experience</p>
                </div>
              </div>

              {/* Right — Bio */}
              <div>
                <SectionBadge number="02" label="Founder & Marketing Consultant" />
                <h2 className="axion-heading text-[#111827] font-display mt-6 mb-5">
                  Animesh Khosla
                </h2>
                <div className="font-sans text-[#6B7280] space-y-4 mb-8">
                  <p className="leading-relaxed">
                    Animesh, the founder of GrowthSpare, brings over 10+ years of experience in digital marketing, helping brands across Delhi NCR, Noida, and Gurgaon achieve measurable growth through strategic and performance-driven campaigns.
                  </p>
                  <p className="leading-relaxed">
                    Having successfully handled 50+ brands, including reputed names like McCann, Modern School, Xen Interiors, Sevenaire Electronics, and many more, Animesh has built a strong foundation in SEO, performance marketing, and brand growth strategies. His diverse industry exposure allows him to understand unique business challenges and craft tailored solutions that deliver real results.
                  </p>
                  <p className="leading-relaxed">
                    He founded GrowthSpare with a clear vision — to simplify digital marketing for businesses and focus on what truly matters: visibility, conversions, and sustainable growth. His approach is rooted in data, creativity, and consistency — helping brands not just compete, but stand out in a crowded digital landscape.
                  </p>
                </div>

                <div className="mb-10">
                  <h3 className="font-display text-[#111827] text-lg font-medium mb-4">Core Values</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {["Performance Over Promises", "Consistency & Discipline", "Client-Centric Approach", "Treat Clients as Partners", "Adaptability & Innovation"].map((v) => (
                      <div key={v} className="flex items-center gap-3 font-sans text-[#6B7280] text-sm">
                        <CheckCircle2 className="w-5 h-5 text-[#F5A623] shrink-0" />
                        {v}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-display text-[#111827] text-lg font-medium mb-6">Experience</h3>
                  <div className="space-y-4">
                    {[
                      { role: "Founder & Marketing Consultant", company: "GrowthSpare", current: true },
                      { role: "Brand Manager", company: "Xworkstations", current: false },
                      { role: "Brand Designer", company: "Sevenaire Electronics", current: false },
                      { role: "Visual Design Lead", company: "McCann", current: false },
                    ].map((exp, i) => (
                      <div key={i} className="flex items-center gap-4 bg-[#EFEFEF] rounded-xl p-4 hover-lift">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${exp.current ? "bg-[#F5A623]" : "bg-white"}`}>
                          <Briefcase className={`w-4 h-4 ${exp.current ? "text-white" : "text-[#111827]"}`} />
                        </div>
                        <div>
                          <p className="font-sans text-sm font-semibold text-[#111827]">{exp.role}</p>
                          <p className="font-sans text-xs text-[#6B7280]">{exp.company}{exp.current && <span className="ml-2 text-[#F5A623] font-bold">Current</span>}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Team */}
      <section className="bg-[#EFEFEF] py-20 md:py-32">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <FadeIn>
            <SectionBadge number="03" label="The Team" />
            <h2 className="axion-heading text-[#111827] font-display mt-6 mb-12">
              Meet Our Team
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.map((member, idx) => (
                <FadeIn key={member.name} delay={idx * 0.1}>
                  <div className="bg-white rounded-2xl p-6 sm:p-8 hover-lift h-full flex flex-col">
                    <div className="relative overflow-hidden rounded-xl mb-6 aspect-[4/5]">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <h3 className="font-display font-medium text-xl text-[#111827]">{member.name}</h3>
                    <p className="font-sans text-[#F5A623] text-sm font-semibold mb-3">
                      {member.role}
                    </p>
                    <p className="font-sans text-[#6B7280] text-sm leading-relaxed mb-6 flex-1">{member.bio}</p>
                    <Link
                      href={`/team/${member.slug}`}
                      className="inline-flex items-center justify-center gap-2 text-xs font-bold text-[#111827] bg-[#EFEFEF] hover:bg-[#111827] hover:text-white px-4 py-2.5 rounded-xl transition-all duration-300 w-full mt-auto group/btn"
                    >
                      <Smartphone className="w-4 h-4 text-[#F5A623] group-hover/btn:scale-110 transition-transform" />
                      <span>Digital Business Card</span>
                    </Link>
                  </div>
                </FadeIn>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-20 md:py-32">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <FadeIn>
            <div className="text-center mb-16">
              <SectionBadge number="04" label="Core Principles" />
              <h2 className="axion-heading text-[#111827] font-display mt-6">Our Values</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((v, i) => (
                <FadeIn key={v.title} delay={i * 0.1}>
                  <div className="bg-[#EFEFEF] rounded-2xl p-6 sm:p-8 hover-lift h-full">
                    <div className="w-12 h-12 bg-[#F5A623] rounded-xl flex items-center justify-center mb-6">
                      <CheckCircle2 className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-display font-medium text-[#111827] text-lg mb-3">{v.title}</h3>
                    <p className="font-sans text-[#6B7280] text-sm leading-relaxed">{v.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#EFEFEF] py-20 md:py-32">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <FadeIn>
            <div className="max-w-4xl mx-auto">
              <SectionBadge number="05" label="FAQs" />
              <h2 className="axion-heading text-[#111827] font-display mt-6 mb-4">
                Your Questions, Answered
              </h2>
              <p className="font-sans text-[#6B7280] mb-12">
                Helping you understand our process and offerings at GrowthSpare.
              </p>

              <div className="space-y-4">
                {faqs.map((faq, i) => (
                  <FadeIn key={i} delay={i * 0.1}>
                    <div className="bg-white rounded-2xl p-6 sm:p-8 hover-lift">
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
      <section className="bg-white py-20 md:py-32 text-center">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <FadeIn>
            <div className="max-w-3xl mx-auto">
              <p className="font-sans text-[#F5A623] text-sm font-semibold uppercase tracking-widest mb-6">
                We believe in one thing:
              </p>
              <h2 className="axion-heading text-[#111827] font-display mb-10">
                Creating digital experiences that truly stand out.
              </h2>
              <TextRollButton href="/contact" label="Start Your Growth Journey" variant="orange" />
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
