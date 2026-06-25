import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, TrendingUp, Cpu } from "lucide-react";

export const metadata: Metadata = {
  title: "Industries We Serve — GrowthSpare | Marketing & Technology",
  description:
    "GrowthSpare serves businesses across Healthcare, Real Estate, Education, Finance, Manufacturing, E-commerce, Logistics, Hospitality, Legal, and Startups with tailored marketing and technology solutions.",
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
      <section className="bg-white py-16 md:py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-amber-500 text-sm font-semibold uppercase tracking-widest mb-3">Industries</p>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Solutions Tailored to Your Industry
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            We bring deep domain expertise to every engagement. Both our marketing strategies and
            technology solutions are customized to the unique challenges of your industry.
          </p>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {industries.map((ind) => (
            <div key={ind.name} className="bg-white rounded-3xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="grid md:grid-cols-3 gap-0">
                {/* Image + header */}
                <div className="relative md:col-span-1">
                  <img src={ind.image} alt={ind.name} className="w-full h-56 md:h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-gray-950/20 to-transparent" />
                  <div className="absolute bottom-5 left-5">
                    <span className="text-3xl">{ind.icon}</span>
                    <h2 className="text-2xl font-black text-white mt-1">{ind.name}</h2>
                  </div>
                </div>

                {/* Content */}
                <div className="p-7 md:col-span-2">
                  <p className="text-gray-600 leading-relaxed mb-6">{ind.desc}</p>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <TrendingUp className="w-4 h-4 text-amber-500" />
                        <h3 className="font-bold text-gray-900 text-sm uppercase tracking-wider">Marketing</h3>
                      </div>
                      <ul className="space-y-1.5">
                        {ind.marketing.map((item) => (
                          <li key={item} className="flex items-center gap-2 text-gray-600 text-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Cpu className="w-4 h-4 text-blue-500" />
                        <h3 className="font-bold text-gray-900 text-sm uppercase tracking-wider">Technology</h3>
                      </div>
                      <ul className="space-y-1.5">
                        {ind.technology.map((item) => (
                          <li key={item} className="flex items-center gap-2 text-gray-600 text-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <Link href="/contact" className="inline-flex items-center gap-2 bg-gray-900 hover:bg-amber-500 text-white text-sm font-semibold px-5 py-2.5 rounded-xl mt-6 transition-all duration-200">
                    Get {ind.name} Solutions <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-950 text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-5">
            Don&apos;t See Your Industry?
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            We work with businesses across all sectors. Let&apos;s talk about your specific needs.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-4 rounded-xl transition-colors shadow-lg">
            Book Free Consultation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
