"use client";

import { motion } from "framer-motion";
import SectionBadge from "@/components/ui/SectionBadge";

const testimonials = [
  {
    name: "Gagan",
    role: "CEO",
    company: "IELTSwithGagan",
    text: "What I liked most is their transparency. They clearly explained what will work and delivered exactly that. No false promises.",
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100",
    division: "Marketing",
  },
  {
    name: "Sandeep Malhotra",
    role: "Owner",
    company: "Xen Interiors",
    text: "The team is creative and data-driven. They improved our social media presence and also optimized our ads for better conversions.",
    avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100",
    division: "Marketing",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-[#FFFFFF]">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-16 text-center flex flex-col items-center"
        >
          <SectionBadge number="3" label="Client testimonials" />
          <h2 className="axion-heading text-[#111827] mt-6 max-w-3xl">
            What Our Clients Say
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              className="bg-[#F5F5F5] rounded-2xl p-8 hover-lift"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-[#F5A623]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-lg text-[#111827] font-sans font-medium mb-8 leading-relaxed">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-display font-bold text-[#111827]">{testimonial.name}</p>
                  <p className="text-sm font-sans text-[#6B7280]">{testimonial.role} — {testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
