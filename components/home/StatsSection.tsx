const stats = [
  { value: "500+", label: "Projects Delivered", desc: "Marketing, software & AI combined" },
  { value: "95%", label: "Client Retention Rate", desc: "Long-term partnerships built on results" },
  { value: "10+", label: "Years of Experience", desc: "Marketing + technology expertise" },
  { value: "50+", label: "Experts on Your Team", desc: "Marketers, developers & AI engineers" },
];

export default function StatsSection() {
  return (
    <section className="bg-gray-950 py-14 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-4xl md:text-5xl font-black text-amber-400 mb-1.5">{stat.value}</p>
              <p className="text-white font-semibold text-sm md:text-base mb-1">{stat.label}</p>
              <p className="text-gray-500 text-xs md:text-sm">{stat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
