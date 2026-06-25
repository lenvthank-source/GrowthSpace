import Link from "next/link";
import {
  Search, MousePointer2, Share2, Mail, TrendingUp,
  Globe, Smartphone, Database, Bot, Workflow, Layers, BarChart3,
} from "lucide-react";

const services = [
  { icon: Search, title: "SEO Services", desc: "Rank higher on Google and drive sustainable organic traffic that compounds over time.", href: "/services/seo", tag: "Marketing", tagColor: "bg-amber-100 text-amber-700", iconBg: "bg-amber-50", iconColor: "text-amber-600" },
  { icon: MousePointer2, title: "Google Ads / PPC", desc: "Generate high-converting leads and sales with precision-targeted paid campaigns.", href: "/services/ppc", tag: "Marketing", tagColor: "bg-amber-100 text-amber-700", iconBg: "bg-amber-50", iconColor: "text-amber-600" },
  { icon: Share2, title: "Social Media Marketing", desc: "Build brand awareness and a loyal community across all major social platforms.", href: "/services/social-media", tag: "Marketing", tagColor: "bg-amber-100 text-amber-700", iconBg: "bg-pink-50", iconColor: "text-pink-600" },
  { icon: Globe, title: "Web Development", desc: "High-performing business websites, e-commerce stores, and web applications.", href: "/services/web-development", tag: "Technology", tagColor: "bg-blue-100 text-blue-700", iconBg: "bg-blue-50", iconColor: "text-blue-600" },
  { icon: Smartphone, title: "Mobile App Development", desc: "Native and cross-platform Android and iOS apps built for performance and scale.", href: "/services/mobile-apps", tag: "Technology", tagColor: "bg-blue-100 text-blue-700", iconBg: "bg-indigo-50", iconColor: "text-indigo-600" },
  { icon: Database, title: "ERP Solutions", desc: "Custom ERP systems that unify your operations — HR, inventory, billing, and more.", href: "/services/erp", tag: "Technology", tagColor: "bg-blue-100 text-blue-700", iconBg: "bg-teal-50", iconColor: "text-teal-600" },
  { icon: BarChart3, title: "CRM Software", desc: "Custom CRM systems that streamline your sales pipeline and customer management.", href: "/services/crm", tag: "Technology", tagColor: "bg-blue-100 text-blue-700", iconBg: "bg-cyan-50", iconColor: "text-cyan-600" },
  { icon: Bot, title: "AI Chatbots", desc: "Intelligent chatbots for customer support, lead qualification, and sales automation.", href: "/services/ai-chatbots", tag: "AI", tagColor: "bg-violet-100 text-violet-700", iconBg: "bg-violet-50", iconColor: "text-violet-600" },
  { icon: Workflow, title: "AI Workflow Automation", desc: "End-to-end automation of business processes using AI agents and intelligent workflows.", href: "/services/ai-automation", tag: "AI", tagColor: "bg-violet-100 text-violet-700", iconBg: "bg-purple-50", iconColor: "text-purple-600" },
  { icon: Mail, title: "Email Marketing", desc: "Automated email sequences that nurture leads and drive repeat revenue on autopilot.", href: "/services/email", tag: "Marketing", tagColor: "bg-amber-100 text-amber-700", iconBg: "bg-rose-50", iconColor: "text-rose-600" },
  { icon: TrendingUp, title: "Performance Marketing", desc: "Data-driven campaigns on Meta, Google, and LinkedIn optimized for maximum ROI.", href: "/solutions/growth-marketing", tag: "Marketing", tagColor: "bg-amber-100 text-amber-700", iconBg: "bg-orange-50", iconColor: "text-orange-600" },
  { icon: Layers, title: "Custom Software Development", desc: "Bespoke software solutions — SaaS platforms, internal tools, and enterprise applications.", href: "/services/custom-software", tag: "Technology", tagColor: "bg-blue-100 text-blue-700", iconBg: "bg-slate-50", iconColor: "text-slate-600" },
];

export default function ServicesSection() {
  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-amber-500 text-sm font-semibold uppercase tracking-widest mb-3">
            All Our Services
          </p>
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-black text-gray-900 mb-4">
            Featured Services
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            A unified portfolio of marketing, technology, and AI services — everything you need
            to grow your business in one place.
          </p>

          {/* Legend */}
          <div className="flex flex-wrap justify-center gap-3 mt-5">
            <span className="flex items-center gap-1.5 text-xs font-semibold bg-amber-100 text-amber-700 px-3 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              Marketing
            </span>
            <span className="flex items-center gap-1.5 text-xs font-semibold bg-blue-100 text-blue-700 px-3 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              Technology
            </span>
            <span className="flex items-center gap-1.5 text-xs font-semibold bg-violet-100 text-violet-700 px-3 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-500" />
              AI
            </span>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.title}
                href={service.href}
                className="group bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg hover:border-gray-200 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-11 h-11 ${service.iconBg} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>
                    <Icon className={`w-5 h-5 ${service.iconColor}`} />
                  </div>
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${service.tagColor}`}>
                    {service.tag}
                  </span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2 leading-snug text-[15px]">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{service.desc}</p>
              </Link>
            );
          })}
        </div>

        <div className="flex flex-wrap justify-center gap-4 mt-10">
          <Link href="/solutions/growth-marketing" className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-3.5 rounded-xl transition-colors">
            All Marketing Services
          </Link>
          <Link href="/solutions/technology-ai" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3.5 rounded-xl transition-colors">
            All Technology Services
          </Link>
        </div>
      </div>
    </section>
  );
}
