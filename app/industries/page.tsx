import type { Metadata } from "next";
import { TrendingUp, Cpu } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import SectionBadge from "@/components/ui/SectionBadge";
import TextRollButton from "@/components/ui/TextRollButton";
import ExpandingCard from "@/components/ui/ExpandingCard";

export const metadata: Metadata = {
  title: "Industries We Serve — Tailored Marketing & AI | GrowthSpare",
  description:
    "GrowthSpare delivers specialized marketing and technology solutions for Healthcare, Real Estate, E-commerce, Finance & Education. Scale your industry brand! ✓",
  alternates: {
    canonical: "/industries",
  },
  openGraph: {
    title: "Industries We Serve — Tailored Marketing & AI | GrowthSpare",
    description:
      "GrowthSpare delivers specialized marketing and technology solutions for Healthcare, Real Estate, E-commerce, Finance & Education. Scale your industry brand! ✓",
    url: "https://growthspare.com/industries",
    type: "website",
  },
};

const industries = [
  {
    icon: "🏥",
    name: "Healthcare",
    desc: "Digital marketing and technology solutions for hospitals, clinics, diagnostic labs, and healthtech companies.",
    marketing: ["Patient acquisition campaigns", "Local SEO for clinics", "Health content marketing", "Reputation management", "Google Ads for specialties"],
    technology: ["Hospital management systems (HMS)", "Patient appointment portals", "AI chatbots for symptom checking", "Telemedicine platforms", "Lab report automation"],
    image: "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    icon: "🏢",
    name: "Real Estate",
    desc: "Lead generation, CRM systems, and AI automation for property developers, agents, and proptech companies.",
    marketing: ["Meta Ads for property leads", "Google Ads for real estate", "SEO for property portals", "Social media branding", "Content & video marketing"],
    technology: ["Property listing portals", "CRM for real estate agents", "AI chatbot for inquiries", "Virtual tour platforms", "Lead qualification automation"],
    image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    icon: "🎓",
    name: "Education",
    desc: "Student enrollment marketing and EdTech platforms for schools, colleges, and e-learning companies.",
    marketing: ["Student enrollment campaigns", "Google Ads for courses", "SEO for educational content", "Email automation for leads", "Social media for institutions"],
    technology: ["Learning Management Systems (LMS)", "School ERP software", "AI tutors & chatbots", "Admission management portals", "Online examination platforms"],
    image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    icon: "💰",
    name: "Finance & Fintech",
    desc: "Compliant marketing and custom financial technology solutions for banks, NBFCs, and fintech startups.",
    marketing: ["Lead generation for financial products", "Content marketing & SEO", "Performance marketing for loans", "Compliance-first ad campaigns"],
    technology: ["Custom fintech applications", "Billing & accounting systems", "CRM for financial services", "Document verification automation", "API integrations"],
    image: "https://images.pexels.com/photos/6802042/pexels-photo-6802042.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    icon: "🏭",
    name: "Manufacturing",
    desc: "B2B digital marketing and enterprise ERP/automation for manufacturers and industrial businesses.",
    marketing: ["B2B LinkedIn marketing", "Industrial SEO & content", "Trade show digital strategy", "Email campaigns for distributors"],
    technology: ["Manufacturing ERP systems", "Inventory management", "Production planning software", "Quality control systems", "IoT dashboards"],
    image: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    icon: "🛒",
    name: "E-Commerce",
    desc: "Full-stack e-commerce growth — from traffic acquisition to custom stores and automation.",
    marketing: ["Google Shopping Ads", "Meta Ads for e-commerce", "SEO for product pages", "Email marketing & retention", "Influencer marketing"],
    technology: ["Shopify & WooCommerce stores", "Custom e-commerce platforms", "Inventory management", "Order tracking systems", "AI product recommendation"],
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    icon: "🚚",
    name: "Logistics",
    desc: "B2B marketing and fleet/operations management technology for logistics and supply chain companies.",
    marketing: ["Fleet branding & digital presence", "B2B lead generation", "LinkedIn campaigns", "Website & SEO"],
    technology: ["Logistics management software", "Route optimization systems", "Real-time tracking platforms", "Driver management apps", "WhatsApp automation"],
    image: "https://images.pexels.com/photos/1427107/pexels-photo-1427107.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    icon: "🏨",
    name: "Hospitality",
    desc: "Revenue generation and property management technology for hotels, restaurants, and travel businesses.",
    marketing: ["Google Ads for hotels", "Social media & OTA strategy", "Review management", "SEO for hospitality", "Email campaigns for repeat guests"],
    technology: ["Booking & reservation systems", "Property management software", "AI concierge chatbots", "Revenue management tools", "Guest feedback automation"],
    image: "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    icon: "⚖️",
    name: "Legal",
    desc: "Digital marketing and case management technology for law firms, legal services, and LegalTech companies.",
    marketing: ["Local SEO for law firms", "Google Ads for legal services", "Content marketing & authority", "Reputation management"],
    technology: ["Case management CRM", "Document automation", "Client onboarding portals", "Legal research AI", "Billing & invoicing software"],
    image: "https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    icon: "🚀",
    name: "Startups",
    desc: "Go-to-market strategy, MVP development, and growth hacking for early-stage and growth-stage startups.",
    marketing: ["Go-to-market strategy", "Growth hacking & experimentation", "Performance marketing", "Content & community building", "Investor pitch materials"],
    technology: ["MVP development", "SaaS platform building", "AI feature integration", "Infrastructure & DevOps", "Product analytics setup"],
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

export default function IndustriesPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-[#EFEFEF] py-20 md:py-32">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 text-center">
          <FadeIn>
            <SectionBadge label="Industries" />
            <h1 className="axion-heading text-[#111827] font-display mt-6 mb-6">
              Solutions Tailored to Your Industry
            </h1>
            <p className="font-sans text-[#6B7280] text-lg max-w-2xl mx-auto leading-relaxed">
              We bring deep domain expertise to every engagement. Both our marketing strategies and
              technology solutions are customized to the unique challenges of your industry.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Industries */}
      <section className="bg-white py-20 md:py-32">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 space-y-12">
          {industries.map((ind, i) => (
            <FadeIn key={ind.name} delay={i * 0.1}>
              <div className="bg-[#EFEFEF] rounded-2xl overflow-hidden hover-lift flex flex-col md:flex-row">
                {/* Image */}
                <div className="w-full md:w-2/5 xl:w-1/3 relative min-h-[300px]">
                  <ExpandingCard
                    href="/contact"
                    title=""
                    description=""
                    imageSrc={ind.image}
                    imageAlt={ind.name}
                    aspect="h-full"
                    buttonLabel="Get Solutions"
                    variant="dark"
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/80 via-[#111827]/20 to-transparent pointer-events-none" />
                    <div className="absolute bottom-16 left-6 pointer-events-none">
                      <span className="text-4xl">{ind.icon}</span>
                      <h2 className="text-3xl font-display font-medium text-white mt-2">{ind.name}</h2>
                    </div>
                  </ExpandingCard>
                </div>

                {/* Content */}
                <div className="w-full md:w-3/5 xl:w-2/3 p-8 sm:p-10 flex flex-col justify-center">
                  <p className="font-sans text-[#6B7280] leading-relaxed mb-8 text-lg">{ind.desc}</p>
                  <div className="grid sm:grid-cols-2 gap-8">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <TrendingUp className="w-5 h-5 text-[#F5A623]" />
                        <h3 className="font-display font-medium text-[#111827] text-sm uppercase tracking-wider">Marketing</h3>
                      </div>
                      <ul className="space-y-2.5">
                        {ind.marketing.map((item) => (
                          <li key={item} className="flex items-start gap-3 font-sans text-[#6B7280] text-sm leading-relaxed">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#F5A623] shrink-0 mt-1.5" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <Cpu className="w-5 h-5 text-blue-500" />
                        <h3 className="font-display font-medium text-[#111827] text-sm uppercase tracking-wider">Technology</h3>
                      </div>
                      <ul className="space-y-2.5">
                        {ind.technology.map((item) => (
                          <li key={item} className="flex items-start gap-3 font-sans text-[#6B7280] text-sm leading-relaxed">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 mt-1.5" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#EFEFEF] py-20 md:py-32 text-center">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <FadeIn>
            <div className="max-w-2xl mx-auto">
              <h2 className="axion-heading text-[#111827] font-display mb-6">
                Don&apos;t See Your Industry?
              </h2>
              <p className="font-sans text-[#6B7280] text-lg mb-10">
                We work with businesses across all sectors. Let&apos;s talk about your specific needs.
              </p>
              <TextRollButton href="/contact" label="Book Free Consultation" variant="orange" />
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
