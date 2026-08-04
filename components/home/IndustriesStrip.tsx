"use client";

import { motion } from "framer-motion";
import { Building2, Home, GraduationCap, Landmark, ShoppingCart, Factory, Truck, Rocket } from "lucide-react";
import SectionBadge from "@/components/ui/SectionBadge";

const industries = [
  { name: "Healthcare", icon: Building2 },
  { name: "Real Estate", icon: Home },
  { name: "Education", icon: GraduationCap },
  { name: "Finance", icon: Landmark },
  { name: "E-commerce", icon: ShoppingCart },
  { name: "Manufacturing", icon: Factory },
  { name: "Logistics", icon: Truck },
  { name: "Startups", icon: Rocket },
];

export default function IndustriesStrip() {
  return (
    <section className="py-20 bg-[#FFFFFF]">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col items-center mb-12"
        >
          <SectionBadge number="5" label="Industries We Serve" />
          <h3 className="axion-heading text-[#111827] mt-6 text-center">
            Expertise Across Sectors
          </h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4"
        >
          {industries.map((industry) => {
            const Icon = industry.icon;
            return (
              <div
                key={industry.name}
                className="group flex flex-col items-center gap-3 p-5 rounded-2xl bg-[#F5F5F5] hover-lift transition-all duration-500 cursor-pointer"
              >
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm">
                  <Icon className="w-6 h-6 text-[#111827] group-hover:text-[#F26522] transition-colors duration-300" />
                </div>
                <span className="text-xs font-semibold text-[#111827] text-center uppercase tracking-wide">
                  {industry.name}
                </span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
