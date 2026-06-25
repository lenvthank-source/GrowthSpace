import Link from "next/link";

const industries = [
  { name: "Healthcare", icon: "🏥", marketing: "Patient acquisition, local SEO, content", tech: "Hospital management, patient portals, AI appointment scheduling" },
  { name: "Real Estate", icon: "🏢", marketing: "Lead gen, Meta Ads, property marketing", tech: "CRM, property portals, AI chatbots for inquiries" },
  { name: "Education", icon: "🎓", marketing: "Student enrollment campaigns, SEO", tech: "LMS platforms, admission systems, AI tutors" },
  { name: "Finance", icon: "💰", marketing: "Lead generation, compliance content", tech: "Billing systems, custom fintech apps, CRM" },
  { name: "Manufacturing", icon: "🏭", marketing: "B2B marketing, trade show digital", tech: "ERP, inventory management, IoT dashboards" },
  { name: "E-Commerce", icon: "🛒", marketing: "Shopping Ads, SEO, email marketing", tech: "Shopify/custom stores, logistics integrations" },
  { name: "Logistics", icon: "🚚", marketing: "Fleet branding, B2B lead gen", tech: "Route management software, tracking systems" },
  { name: "Hospitality", icon: "🏨", marketing: "Booking campaigns, review management", tech: "Reservation systems, AI concierge chatbots" },
  { name: "Legal", icon: "⚖️", marketing: "Local SEO, reputation management", tech: "Case management CRM, document automation" },
  { name: "Startups", icon: "🚀", marketing: "Go-to-market strategy, growth hacking", tech: "MVP development, SaaS platforms, AI features" },
];

export default function IndustriesSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-amber-500 text-sm font-semibold uppercase tracking-widest mb-3">
            Industries We Serve
          </p>
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-black text-gray-900 mb-4">
            Tailored for Your Industry
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Deep domain expertise across 10+ industries. Both marketing and technology
            solutions are customized to the specific challenges of your sector.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {industries.map((industry) => (
            <Link
              key={industry.name}
              href="/industries"
              className="group flex flex-col items-center text-center p-5 rounded-2xl border border-gray-100 hover:border-amber-200 hover:shadow-md hover:bg-amber-50/30 transition-all duration-200 hover:-translate-y-1"
            >
              <span className="text-3xl mb-3">{industry.icon}</span>
              <h3 className="font-bold text-gray-900 text-sm mb-1.5">{industry.name}</h3>
              <p className="text-gray-400 text-xs leading-relaxed line-clamp-2">{industry.marketing}</p>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/industries"
            className="inline-flex items-center gap-2 bg-gray-900 hover:bg-amber-500 text-white font-semibold px-7 py-3.5 rounded-xl transition-all duration-200"
          >
            View All Industries
          </Link>
        </div>
      </div>
    </section>
  );
}
