"use client";

import { motion } from "framer-motion";
import { Building2, Home, GraduationCap, Landmark, ShoppingCart, Factory, Truck, Rocket } from "lucide-react";

const industries = [
  { name: "Healthcare", icon: Building2, gradient: "from-red-500 to-pink-500" },
  { name: "Real Estate", icon: Home, gradient: "from-amber-500 to-orange-500" },
  { name: "Education", icon: GraduationCap, gradient: "from-blue-500 to-indigo-500" },
  { name: "Finance", icon: Landmark, gradient: "from-emerald-500 to-teal-500" },
  { name: "E-commerce", icon: ShoppingCart, gradient: "from-violet-500 to-purple-500" },
  { name: "Manufacturing", icon: Factory, gradient: "from-gray-600 to-gray-700" },
  { name: "Logistics", icon: Truck, gradient: "from-cyan-500 to-blue-500" },
  { name: "Startups", icon: Rocket, gradient: "from-amber-400 to-pink-500" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 100, damping: 15 },
  },
};

export default function IndustriesStrip() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-white">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-amber-100/30 via-transparent to-blue-100/30 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">
            Industries We Serve
          </p>
          <h3 className="text-2xl md:text-3xl font-display font-black text-gray-900 tracking-tight">
            Expertise Across Sectors
          </h3>
        </motion.div>

        {/* Industries Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 lg:gap-3"
        >
          {industries.map((industry) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={industry.name}
                variants={itemVariants}
                whileHover={{ y: -4, scale: 1.05 }}
                className="group cursor-pointer"
              >
                <div className="flex flex-col items-center gap-3 p-4 rounded-2xl bg-gray-50/50 border border-gray-100 hover:bg-white hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300">
                  {/* Icon */}
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${industry.gradient} flex items-center justify-center shadow-sm group-hover:shadow-lg transition-shadow duration-300`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>

                  {/* Label */}
                  <span className="text-xs font-semibold text-gray-600 group-hover:text-gray-900 transition-colors text-center">
                    {industry.name}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-sm text-gray-400 mt-8"
        >
          Don&apos;t see your industry? Let&apos;s talk about your unique needs.
        </motion.p>
      </div>
    </section>
  );
}
