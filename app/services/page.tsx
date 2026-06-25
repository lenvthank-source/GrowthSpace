import type { Metadata } from "next";
import Link from "next/link";
import {
  Search, MousePointer2, Share2, MessageSquare, Mail,
  Globe, Palette, LineChart, TrendingUp, BarChart3, ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Our Services — GrowthSpare Digital Marketing",
  description:
    "Explore GrowthSpare's full range of digital marketing services: SEO, PPC, social media marketing, content marketing, email marketing, web design, and more.",
};

const services = [
  {
    icon: Search,
    title: "Search Engine Optimization",
    desc: "We take a transparent and structured approach to SEO. By auditing your existing assets and aligning with your growth objectives, we build a strategic roadmap with clear timelines and performance expectations.",
    features: ["Technical SEO", "On-page SEO", "Off-page & Link Building", "Local SEO", "E-commerce SEO", "Monthly Reporting"],
    href: "/services/seo",
    image: "https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=600",
    color: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    icon: MousePointer2,
    title: "Google Ads / PPC Management",
    desc: "Data-driven paid advertising that maximizes your budget efficiency. We manage Google Search, Display, Shopping, and Performance Max campaigns to drive qualified traffic and conversions.",
    features: ["Search Campaigns", "Display Ads", "Shopping Ads", "Performance Max", "Landing Page Optimization", "Conversion Tracking"],
    href: "/services/ppc",
    image: "https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg?auto=compress&cs=tinysrgb&w=600",
    color: "bg-amber-50",
    iconColor: "text-amber-600",
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    desc: "Social isn't just a channel for us — it's a strategic pillar. We craft platform-specific strategies that amplify your brand's voice and build lasting audience connections across all major platforms.",
    features: ["Facebook & Instagram", "LinkedIn", "YouTube", "Content Creation", "Community Management", "Paid Campaigns"],
    href: "/services/social-media",
    image: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=600",
    color: "bg-pink-50",
    iconColor: "text-pink-600",
  },
  {
    icon: MessageSquare,
    title: "Content Marketing",
    desc: "Content that doesn't just inform but converts. From blog articles to video scripts, we craft high-quality content aligned with your brand voice and SEO strategy.",
    features: ["Blog Writing", "SEO Content", "Copywriting", "Video Content", "Infographics", "Content Strategy"],
    href: "/services/content",
    image: "https://images.pexels.com/photos/6177607/pexels-photo-6177607.jpeg?auto=compress&cs=tinysrgb&w=600",
    color: "bg-green-50",
    iconColor: "text-green-600",
  },
  {
    icon: Mail,
    title: "Email Marketing",
    desc: "We craft high-performing email marketing campaigns while simplifying the entire delivery process — ensuring every communication is seamless, secure, and personalized.",
    features: ["Campaign Automation", "Lead Nurturing", "Newsletter Design", "CRM Integrations", "A/B Testing", "Analytics & Reporting"],
    href: "/services/email",
    image: "https://images.pexels.com/photos/1591062/pexels-photo-1591062.jpeg?auto=compress&cs=tinysrgb&w=600",
    color: "bg-rose-50",
    iconColor: "text-rose-600",
  },
  {
    icon: Globe,
    title: "Website Design & Development",
    desc: "Creativity isn't just what we do — it's how we think. From websites and apps to emailers, infographics, and social content, every creation is driven by insight and designed to make an impact.",
    features: ["Business Websites", "E-commerce Stores", "Landing Pages", "UI/UX Design", "WordPress Development", "Shopify Development"],
    href: "/services/web-design",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600",
    color: "bg-indigo-50",
    iconColor: "text-indigo-600",
  },
  {
    icon: TrendingUp,
    title: "Digital Strategy & Planning",
    desc: "We combine experience with smart planning to create strategies that help your brand grow faster and generate real revenue.",
    features: ["Market Research", "Competitor Analysis", "Channel Strategy", "KPI Planning", "Budget Allocation", "Quarterly Reviews"],
    href: "/contact",
    image: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=600",
    color: "bg-teal-50",
    iconColor: "text-teal-600",
  },
  {
    icon: LineChart,
    title: "Web Analytics",
    desc: "Data-driven marketing is at the heart of effective digital strategy. By analyzing user behavior and performance metrics, we transform insights into actions that enhance engagement and drive measurable results.",
    features: ["GA4 Setup", "Dashboard Creation", "Conversion Tracking", "Funnel Analysis", "Custom Reporting", "Insight Generation"],
    href: "/contact",
    image: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=600",
    color: "bg-cyan-50",
    iconColor: "text-cyan-600",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-white py-16 md:py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Our Services
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            From consulting and strategy development to implementation and support,
            our comprehensive services can help your business thrive.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="group rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl hover:border-gray-200 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className={`w-11 h-11 ${service.color} rounded-lg flex items-center justify-center mb-4`}>
                      <Icon className={`w-5 h-5 ${service.iconColor}`} />
                    </div>
                    <h2 className="font-black text-gray-900 text-xl mb-3">{service.title}</h2>
                    <p className="text-gray-500 text-sm leading-relaxed mb-5">{service.desc}</p>
                    <div className="flex flex-wrap gap-2 mb-5">
                      {service.features.map((f) => (
                        <span key={f} className="text-xs bg-gray-50 border border-gray-100 text-gray-600 px-2.5 py-1 rounded-full">
                          {f}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={service.href}
                      className="inline-flex items-center gap-1.5 text-amber-600 hover:text-amber-700 font-semibold text-sm group-hover:gap-2.5 transition-all"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-950 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-5">
            Ready to Grow Your Business?
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Schedule a free strategy call and discover how GrowthSpare can help you achieve your goals.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 shadow-lg"
          >
            Schedule a Free Strategy Call
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
