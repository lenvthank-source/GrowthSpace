"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ArrowRight, Sparkles, Zap, TrendingUp, Cpu } from "lucide-react";

const solutions = [
  {
    icon: TrendingUp,
    label: "Growth & Marketing",
    href: "/solutions/growth-marketing",
    desc: "SEO, PPC, Social Media & Performance Marketing",
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: Cpu,
    label: "Technology & AI",
    href: "/solutions/technology-ai",
    desc: "Web, Mobile, ERP, CRM, AI Chatbots & Automation",
    color: "from-blue-500 to-indigo-500",
  },
];

const serviceGroups = [
  {
    heading: "Growth & Marketing",
    color: "text-amber-500",
    items: [
      { label: "SEO Services", href: "/services/seo" },
      { label: "Google Ads / PPC", href: "/services/ppc" },
      { label: "Social Media Marketing", href: "/services/social-media" },
      { label: "Branding & Creative", href: "/services/branding" },
    ],
  },
  {
    heading: "Technology & AI",
    color: "text-blue-500",
    items: [
      { label: "Web Development", href: "/services/web-development" },
      { label: "Mobile Apps", href: "/services/mobile-apps" },
      { label: "AI Chatbots", href: "/services/ai-chatbots" },
      { label: "ERP / CRM Systems", href: "/services/erp" },
    ],
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  const navLinks = [
    { href: "/about", label: "About" },
    { href: "/projects", label: "Work" },
    { href: "/industries", label: "Industries" },
    { href: "/blog", label: "Insights" },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "py-3"
            : "py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav
            className={`relative flex items-center justify-between rounded-2xl transition-all duration-500 ${
              scrolled
                ? "bg-white/80 backdrop-blur-xl shadow-lg shadow-black/5 border border-gray-200/50 px-4 py-3"
                : "bg-transparent px-2"
            }`}
          >
            {/* Logo */}
            <Link href="/" className="shrink-0 relative z-10">
              <Image
                src="/growthspare-logo-final-H33coufZj8jv5cgL.avif"
                alt="GrowthSpare"
                width={140}
                height={40}
                className="h-8 md:h-9 w-auto object-contain"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {/* Solutions Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("solutions")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  className={`flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-xl transition-colors ${
                    pathname.startsWith("/solutions")
                      ? "text-amber-500"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  Solutions
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    activeDropdown === "solutions" ? "rotate-180" : ""
                  }`} />
                </button>

                <AnimatePresence>
                  {activeDropdown === "solutions" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[480px]"
                    >
                      <div className="bg-white rounded-2xl shadow-2xl shadow-black/10 border border-gray-100 p-3 grid grid-cols-2 gap-2">
                        {solutions.map((sol) => {
                          const Icon = sol.icon;
                          return (
                            <Link
                              key={sol.href}
                              href={sol.href}
                              className="group flex items-start gap-3 p-4 rounded-xl hover:bg-gray-50 transition-colors"
                            >
                              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${sol.color} flex items-center justify-center shrink-0 shadow-sm`}>
                                <Icon className="w-5 h-5 text-white" />
                              </div>
                              <div>
                                <p className="font-semibold text-gray-900 text-sm group-hover:text-amber-600 transition-colors">{sol.label}</p>
                                <p className="text-gray-400 text-xs mt-0.5 leading-relaxed">{sol.desc}</p>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("services")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  className={`flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-xl transition-colors ${
                    pathname.startsWith("/services")
                      ? "text-amber-500"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  Services
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    activeDropdown === "services" ? "rotate-180" : ""
                  }`} />
                </button>

                <AnimatePresence>
                  {activeDropdown === "services" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[400px]"
                    >
                      <div className="bg-white rounded-2xl shadow-2xl shadow-black/10 border border-gray-100 p-4 grid grid-cols-2 gap-4">
                        {serviceGroups.map((group) => (
                          <div key={group.heading}>
                            <p className={`text-[10px] font-bold uppercase tracking-widest ${group.color} mb-2 px-2`}>
                              {group.heading}
                            </p>
                            <ul className="space-y-0.5">
                              {group.items.map((item) => (
                                <li key={item.href}>
                                  <Link
                                    href={item.href}
                                    className="block text-sm text-gray-600 hover:text-amber-500 px-2 py-1.5 rounded-lg transition-colors hover:bg-gray-50"
                                  >
                                    {item.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Simple Links */}
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 text-sm font-medium rounded-xl transition-colors ${
                    pathname === link.href
                      ? "text-amber-500"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/contact"
                className="group relative flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white text-sm font-semibold px-5 py-2.5 rounded-xl overflow-hidden transition-all duration-300"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Let&apos;s Talk
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden relative z-10 p-2 rounded-xl text-gray-600 hover:bg-gray-100 transition-colors"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </nav>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-xl"
            >
              <div className="max-w-7xl mx-auto px-4 py-6 space-y-1">
                {solutions.map((sol) => {
                  const Icon = sol.icon;
                  return (
                    <Link
                      key={sol.href}
                      href={sol.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-50 transition-colors"
                    >
                      <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${sol.color} flex items-center justify-center`}>
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                      <span className="font-medium text-gray-900">{sol.label}</span>
                    </Link>
                  );
                })}
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-3 text-gray-600 hover:text-amber-500 font-medium rounded-xl hover:bg-gray-50 transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="pt-4 border-t border-gray-100 mt-4">
                  <Link
                    href="/contact"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center gap-2 bg-gray-900 hover:bg-amber-500 text-white font-semibold px-6 py-3.5 rounded-xl transition-colors"
                  >
                    Book Free Consultation
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Gradient line under header when scrolled */}
      <AnimatePresence>
        {scrolled && (
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            exit={{ opacity: 0, scaleX: 0 }}
            className="fixed top-[72px] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-amber-500/30 to-transparent z-40"
          />
        )}
      </AnimatePresence>
    </>
  );
}
