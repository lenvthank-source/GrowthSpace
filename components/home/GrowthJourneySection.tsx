const steps = [
  {
    number: "01",
    title: "Acquire Customers",
    desc: "SEO, Paid Ads & Social Media generate qualified leads",
    color: "bg-amber-500",
    connector: true,
  },
  {
    number: "02",
    title: "Generate Leads",
    desc: "Landing pages, funnels & CRO convert traffic into prospects",
    color: "bg-orange-500",
    connector: true,
  },
  {
    number: "03",
    title: "Convert Customers",
    desc: "Email automation, CRM & follow-ups close more deals",
    color: "bg-amber-600",
    connector: true,
  },
  {
    number: "04",
    title: "Build Systems",
    desc: "Websites, mobile apps, ERP & CRM digitize operations",
    color: "bg-blue-500",
    connector: true,
  },
  {
    number: "05",
    title: "Automate Operations",
    desc: "AI chatbots, workflows & agents handle repetitive tasks",
    color: "bg-indigo-500",
    connector: true,
  },
  {
    number: "06",
    title: "Scale Business",
    desc: "Analytics, reporting & optimization drive sustainable growth",
    color: "bg-violet-600",
    connector: false,
  },
];

export default function GrowthJourneySection() {
  return (
    <section className="py-20 md:py-28 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3">
            The Unified Journey
          </p>
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-black text-white mb-4">
            How Growth & Technology{" "}
            <span className="text-amber-400">Work Together</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Our marketing and technology divisions work as one ecosystem — each step
            amplifying the next, creating a compounding growth engine for your business.
          </p>
        </div>

        {/* Journey flow */}
        <div className="relative">
          {/* Horizontal connector line on desktop */}
          <div className="hidden lg:block absolute top-[52px] left-[8.33%] right-[8.33%] h-0.5 bg-gradient-to-r from-amber-500 via-blue-500 to-violet-600 opacity-30 z-0" />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-4 relative z-10">
            {steps.map((step, i) => (
              <div key={step.title} className="flex flex-col items-center text-center">
                <div className={`w-[104px] h-[104px] ${step.color} rounded-3xl flex flex-col items-center justify-center mb-5 shadow-lg relative`}>
                  <span className="text-white/60 text-xs font-bold uppercase tracking-widest">Step</span>
                  <span className="text-white font-black text-3xl">{step.number}</span>
                  {/* Arrow on desktop */}
                  {step.connector && i < 5 && (
                    <div className="hidden lg:flex absolute -right-6 top-1/2 -translate-y-1/2 w-3 h-3 items-center justify-center">
                      <div className="w-2 h-2 border-t-2 border-r-2 border-gray-600 rotate-45" />
                    </div>
                  )}
                </div>
                <h3 className="font-bold text-white text-sm mb-2 leading-snug">{step.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{step.desc}</p>
                {/* Division label */}
                <span className={`mt-3 text-xs font-semibold px-2.5 py-1 rounded-full ${i < 3 ? "bg-amber-500/10 text-amber-400" : "bg-blue-500/10 text-blue-400"}`}>
                  {i < 3 ? "Marketing" : "Technology"}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
