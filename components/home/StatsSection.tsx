"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "500+", label: "Projects Delivered", desc: "Marketing, software & AI combined" },
  { value: "95%", label: "Client Retention Rate", desc: "Long-term partnerships built on results" },
  { value: "10+", label: "Years of Experience", desc: "Marketing + technology expertise" },
  { value: "50+", label: "Experts on Your Team", desc: "Marketers, developers & AI engineers" },
];

export default function StatsSection() {
  return (
    <section className="bg-[#111827] py-16 md:py-24">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-center"
            >
              <p className="text-4xl md:text-5xl font-display font-black text-[#F26522] mb-2">{stat.value}</p>
              <p className="text-white font-sans font-semibold text-base mb-1">{stat.label}</p>
              <p className="text-gray-400 font-sans text-xs md:text-sm">{stat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
