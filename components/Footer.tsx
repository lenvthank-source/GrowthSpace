"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Instagram, Linkedin, Youtube, Mail, Phone, MapPin, ArrowUpRight, Sparkles, TrendingUp, Cpu, Heart } from "lucide-react";

const footerLinks = {
  solutions: [
    { label: "Growth Marketing", href: "/solutions/growth-marketing" },
    { label: "Technology & AI", href: "/solutions/technology-ai" },
    { label: "Enterprise Solutions", href: "/services/erp" },
    { label: "Startup Growth", href: "/industries" },
  ],
  marketing: [
    { label: "SEO Services", href: "/services/seo" },
    { label: "Google Ads", href: "/services/ppc" },
    { label: "Social Media", href: "/services/social-media" },
    { label: "Branding", href: "/services/branding" },
  ],
  technology: [
    { label: "Web Development", href: "/services/web-development" },
    { label: "Mobile Apps", href: "/services/mobile-apps" },
    { label: "AI Chatbots", href: "/services/ai-chatbots" },
    { label: "ERP / CRM", href: "/services/erp" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Case Studies", href: "/projects" },
    { label: "Contact", href: "/contact" },
    { label: "Insights", href: "/blog" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative bg-gray-900 text-white overflow-hidden">
      {/* CTA Section */}
      <div className="relative border-b border-white/10">
        {/* Background glow */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-[500px] h-[300px] bg-amber-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[250px] bg-blue-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            {/* Left content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold px-4 py-2 rounded-full mb-6">
                <Sparkles className="w-3.5 h-3.5" />
                Let&apos;s Build Something Great
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-black tracking-tight mb-5">
                Ready to Grow
                <br className="hidden sm:block" />
                <span className="text-gradient"> Your Business?</span>
              </h2>

              <p className="text-gray-400 max-w-lg leading-relaxed">
                Book a free consultation and let&apos;s discuss how we can help you acquire more customers,
                build better systems, and grow faster.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center gap-2 bg-white text-gray-900 font-semibold px-8 py-4 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-white/20"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Book Free Consultation
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>

              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white/40 text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-300 hover:bg-white/5"
              >
                See Our Work
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10">
          {/* Brand Column */}
          <div className="col-span-2">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/growthspare-logo-final-H33coufZj8jv5cgL.avif"
                alt="GrowthSpare"
                width={140}
                height={40}
                className="h-9 w-auto object-contain brightness-0 invert"
                priority
              />
            </Link>

            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
              Your end-to-end growth and technology partner. Performance marketing, custom software,
              and AI automation under one roof.
            </p>

            {/* Contact info */}
            <div className="space-y-3">
              <a
                href="tel:+919560725039"
                className="flex items-center gap-2.5 text-gray-400 hover:text-white text-sm transition-colors"
              >
                <Phone className="w-4 h-4 text-amber-500" />
                +91 9560725039
              </a>
              <a
                href="mailto:info@growthspare.com"
                className="flex items-center gap-2.5 text-gray-400 hover:text-white text-sm transition-colors"
              >
                <Mail className="w-4 h-4 text-amber-500" />
                info@growthspare.com
              </a>
              <div className="flex items-center gap-2.5 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 text-amber-500" />
                Delhi NCR, India
              </div>
            </div>

            {/* Social links */}
            <div className="flex gap-3 mt-6">
              {[
                { Icon: Instagram, label: "Instagram" },
                { Icon: Linkedin, label: "LinkedIn" },
                { Icon: Youtube, label: "YouTube" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 flex items-center justify-center transition-all duration-200"
                >
                  <Icon className="w-4 h-4 text-gray-400" />
                </a>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
              Solutions
            </h4>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Marketing */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="w-4 h-4 text-amber-500" />
              <h4 className="text-xs font-bold uppercase tracking-widest text-white">
                Marketing
              </h4>
            </div>
            <ul className="space-y-3">
              {footerLinks.marketing.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-amber-400 text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Technology */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Cpu className="w-4 h-4 text-blue-500" />
              <h4 className="text-xs font-bold uppercase tracking-widest text-white">
                Technology
              </h4>
            </div>
            <ul className="space-y-3">
              {footerLinks.technology.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} GrowthSpare. All rights reserved.
            </p>

            <div className="flex items-center gap-6">
              <span className="text-gray-500 text-sm">
                Made with <Heart className="w-3.5 h-3.5 text-red-500 inline-block" /> in Delhi NCR
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Back to top button */}
      <motion.a
        href="#top"
        whileHover={{ y: -4 }}
        className="fixed bottom-24 right-6 w-10 h-10 bg-white/10 hover:bg-amber-500 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center transition-colors duration-300 z-40"
      >
        <ArrowUpRight className="w-4 h-4 text-white rotate-[-45deg]" />
      </motion.a>
    </footer>
  );
}
