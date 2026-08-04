"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Instagram, Linkedin, Youtube, Mail, Phone, MapPin, ArrowRight, TrendingUp, Cpu, Heart } from "lucide-react";
import TextRollButton from "@/components/ui/TextRollButton";

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
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-[500px] h-[300px] bg-[#F26522]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[250px] bg-blue-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 py-20 md:py-28">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center lg:text-left"
            >
              <p className="text-[13px] text-[#F26522] font-medium mb-5">Taking on projects for Q1 2026</p>
              <h2 className="axion-heading text-white mb-5">
                Ready to Grow
                <br className="hidden sm:block" />
                <span className="text-gradient"> Your Business?</span>
              </h2>
              <p className="text-gray-400 max-w-lg leading-relaxed text-[15px]">
                Book a free consultation and let&apos;s discuss how we can help you acquire more customers,
                build better systems, and grow faster.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <TextRollButton href="/contact" label="Book Free Consultation" variant="orange" />
              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white/40 text-white font-medium text-[13px] sm:text-sm px-6 py-3 rounded-full transition-all duration-300 hover:bg-white/5"
              >
                See Our Work
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10">
          {/* Brand Column */}
          <div className="col-span-2">
            <Link href="/" className="inline-flex items-center gap-2.5 mb-6 group">
              <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-gray-900 text-[10px] font-bold tracking-tight">
                GS
              </div>
              <Image
                src="/growthspare-logo-final-H33coufZj8jv5cgL.avif"
                alt="GrowthSpare"
                width={120}
                height={34}
                className="h-7 w-auto object-contain brightness-0 invert"
                priority
              />
            </Link>

            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
              Your end-to-end growth and technology partner. Performance marketing, custom software,
              and AI automation under one roof.
            </p>

            <div className="space-y-3">
              <a href="tel:+919560725039" className="flex items-center gap-2.5 text-gray-400 hover:text-white text-sm transition-colors">
                <Phone className="w-4 h-4 text-[#F26522]" />
                +91 9560725039
              </a>
              <a href="mailto:info@growthspare.com" className="flex items-center gap-2.5 text-gray-400 hover:text-white text-sm transition-colors">
                <Mail className="w-4 h-4 text-[#F26522]" />
                info@growthspare.com
              </a>
              <div className="flex items-start gap-2.5 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 text-[#F26522] shrink-0 mt-0.5" />
                <span>Indure House, 2nd Floor, Savitri Cinema Complex GK-II, New Delhi, Delhi 110048</span>
              </div>
            </div>

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
                  className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#F26522]/20 border border-white/10 hover:border-[#F26522]/40 flex items-center justify-center transition-all duration-300"
                >
                  <Icon className="w-4 h-4 text-gray-400" />
                </a>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-widest text-white mb-4">Solutions</h3>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-white text-sm transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Marketing */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="w-3.5 h-3.5 text-[#F26522]" />
              <h3 className="text-[11px] font-bold uppercase tracking-widest text-white">Marketing</h3>
            </div>
            <ul className="space-y-3">
              {footerLinks.marketing.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-[#F26522] text-sm transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Technology */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Cpu className="w-3.5 h-3.5 text-blue-500" />
              <h3 className="text-[11px] font-bold uppercase tracking-widest text-white">Technology</h3>
            </div>
            <ul className="space-y-3">
              {footerLinks.technology.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-blue-400 text-sm transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-widest text-white mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-white text-sm transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} GrowthSpare. All rights reserved.
            </p>
            <span className="text-gray-500 text-sm">
              Made with <Heart className="w-3.5 h-3.5 text-red-500 inline-block" /> in Delhi NCR
            </span>
          </div>
        </div>
      </div>

      {/* Back to top */}
      <motion.a
        href="#top"
        whileHover={{ y: -4 }}
        className="fixed bottom-24 right-6 w-10 h-10 bg-white/10 hover:bg-[#F26522] backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center transition-colors duration-300 z-40"
      >
        <ArrowRight className="w-4 h-4 text-white -rotate-90" />
      </motion.a>
    </footer>
  );
}
