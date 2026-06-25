const steps = [
  {
    step: "01",
    title: "Discovery & Audit",
    desc: "We deep-dive into your business goals, current state, competition, and opportunities across both marketing and technology.",
    color: "bg-amber-500",
  },
  {
    step: "02",
    title: "Strategy & Roadmap",
    desc: "A unified growth and technology roadmap with clear KPIs, timelines, priorities, and resource allocation.",
    color: "bg-orange-500",
  },
  {
    step: "03",
    title: "Build & Execute",
    desc: "We simultaneously run marketing campaigns and build technology solutions — maximizing speed to value.",
    color: "bg-blue-600",
  },
  {
    step: "04",
    title: "Automate & Optimize",
    desc: "Continuous performance optimization, A/B testing, and AI automation deployment to maximize efficiency.",
    color: "bg-indigo-600",
  },
  {
    step: "05",
    title: "Scale & Report",
    desc: "Transparent performance reporting across all initiatives, with strategic quarterly reviews to drive the next phase of growth.",
    color: "bg-violet-600",
  },
];

export default function ProcessSection() {
  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-amber-500 text-sm font-semibold uppercase tracking-widest mb-3">
            How We Work
          </p>
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-black text-gray-900 mb-4">
            Our Process
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            A proven five-step framework that transforms your business — whether the goal
            is more customers, better systems, or full AI automation.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((step) => (
            <div key={step.step} className="flex flex-col items-center text-center group">
              <div className={`w-20 h-20 rounded-2xl ${step.color} flex items-center justify-center mb-5 shadow-lg group-hover:scale-105 transition-transform duration-200`}>
                <span className="text-white font-black text-2xl">{step.step}</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2 text-sm md:text-base">{step.title}</h3>
              <p className="text-gray-500 text-xs md:text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
