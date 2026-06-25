"use client";

import { motion } from "framer-motion";
import { Star, TrendingUp, Cpu, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Gagan",
    role: "CEO",
    company: "IELTSwithGagan",
    text: "What I liked most is their transparency. They clearly explained what will work and delivered exactly that. No false promises.",
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100",
    division: "Marketing",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    name: "Sandeep Malhotra",
    role: "Owner",
    company: "Xen Interiors",
    text: "The team is creative and data-driven. They improved our social media presence and also optimized our ads for better conversions.",
    avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100",
    division: "Marketing",
    gradient: "from-blue-500 to-indigo-500",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 80, damping: 15 },
  },
};

export default function TestimonialsSection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-gray-50">
      {/* Background */}
      <div className="absolute inset-0 dots-pattern opacity-30" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-br from-amber-100/40 via-orange-100/30 to-blue-100/20 rounded-full blur-3xl" />

      {/* Large background text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <motion.span
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 0.04, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-[20vw] font-display font-black text-gray-900 whitespace-nowrap select-none tracking-tighter"
        >
          RESULTS
        </motion.span>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-white border border-gray-200 text-gray-600 text-xs font-semibold px-4 py-2 rounded-full mb-6 shadow-sm">
            <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
            Client Stories
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-black text-gray-900 mb-5 tracking-tight">
            What Our Clients Say
          </h2>

          <p className="text-gray-500 text-lg max-w-xl mx-auto leading-relaxed">
            Across marketing, technology, and AI — businesses trust us to deliver real outcomes.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className="group relative"
            >
              <div className="relative h-full bg-white rounded-3xl p-8 shadow-xl shadow-gray-200/50 border border-gray-100 overflow-hidden transition-all duration-500 hover:shadow-2xl">
                {/* Gradient top border */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${testimonial.gradient}`} />

                {/* Quote icon */}
                <div className={`absolute top-6 right-6 w-12 h-12 rounded-2xl bg-gradient-to-br ${testimonial.gradient} opacity-10 flex items-center justify-center`}>
                  <Quote className="w-6 h-6 text-gray-900" />
                </div>

                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  {/* Stars */}
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                    ))}
                  </div>

                  {/* Division badge */}
                  <div className={`flex items-center gap-1.5 bg-gradient-to-r ${testimonial.gradient} bg-opacity-10 px-3 py-1 rounded-full`}>
                    {testimonial.division === "Marketing" ? (
                      <TrendingUp className="w-3.5 h-3.5 text-amber-600" />
                    ) : (
                      <Cpu className="w-3.5 h-3.5 text-blue-600" />
                    )}
                    <span className="text-xs font-bold text-gray-700">{testimonial.division}</span>
                  </div>
                </div>

                {/* Quote text */}
                <blockquote className="text-gray-600 text-base leading-relaxed mb-8 italic">
                  &ldquo;{testimonial.text}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-gray-100"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role} — {testimonial.company}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-sm text-gray-500">
            Join <span className="font-semibold text-gray-900">50+ businesses</span> who trust GrowthSpare
          </p>
        </motion.div>
      </div>
    </section>
  );
}
