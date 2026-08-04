"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ArrowRight, TrendingUp, Cpu } from "lucide-react";
import LiveClock from "@/components/ui/LiveClock";
import TextRollButton from "@/components/ui/TextRollButton";

const solutions = [
  {
    icon: TrendingUp,
    label: "Growth & Marketing",
    href: "/solutions/growth-marketing",
    desc: "SEO, PPC, Social Media & Performance Marketing",
    color: "from-[#F26522] to-orange-500",
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
    color: "text-[#F26522]",
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
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
        <div className="max-w-[1440px] mx-auto p-2 sm:p-3 pt-3 sm:pt-4">
          <nav
            aria-label="Main Navigation"
            className={`w-full rounded-full p-[5px] flex items-center justify-between transition-all duration-500 ${
              scrolled
                ? "bg-white/90 backdrop-blur-xl shadow-lg shadow-black/5 border border-gray-200/60"
                : "bg-white border border-gray-200/40"
            }`}
          >
            {/* LEFT: Logo + Nav */}
            <div className="flex items-center gap-1 sm:gap-2">
              <Link href="/" className="flex items-center gap-2.5 group shrink-0 pl-1">
                <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-900 rounded-full flex items-center justify-center text-white text-[10px] sm:text-[11px] font-bold tracking-tight shadow-md group-hover:bg-[#F26522] transition-colors duration-300">
                  GS
                </div>
                <Image
                  src="/growthspare-logo-final-H33coufZj8jv5cgL.avif"
                  alt="GrowthSpare"
                  width={120}
                  height={34}
                  className="h-6 sm:h-7 w-auto object-contain hidden sm:block"
                  priority
                />
              </Link>

              {/* Desktop Nav */}
              <div className="hidden lg:flex items-center gap-0.5 ml-4">
                {/* Solutions Dropdown */}
                <div
                  className="relative"
                  onMouseEnter={() => setActiveDropdown("solutions")}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-full transition-colors duration-300 ${
                      pathname.startsWith("/solutions") ? "text-[#F26522]" : "text-gray-900 hover:text-gray-500"
                    }`}
                  >
                    Solutions
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === "solutions" ? "rotate-180" : ""}`} />
                  </button>

                  {activeDropdown === "solutions" && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[420px]">
                      <div className="bg-white rounded-2xl shadow-2xl shadow-black/10 border border-gray-100 p-3 grid grid-cols-2 gap-2">
                        {solutions.map((sol) => {
                          const Icon = sol.icon;
                          return (
                            <Link
                              key={sol.href}
                              href={sol.href}
                              className="group/item flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors"
                            >
                              <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${sol.color} flex items-center justify-center shrink-0`}>
                                <Icon className="w-4 h-4 text-white" />
                              </div>
                              <div>
                                <p className="font-semibold text-gray-900 text-[13px] group-hover/item:text-[#F26522] transition-colors">{sol.label}</p>
                                <p className="text-gray-400 text-[11px] mt-0.5 leading-relaxed">{sol.desc}</p>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>

                {/* Services Dropdown */}
                <div
                  className="relative"
                  onMouseEnter={() => setActiveDropdown("services")}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-full transition-colors duration-300 ${
                      pathname.startsWith("/services") ? "text-[#F26522]" : "text-gray-900 hover:text-gray-500"
                    }`}
                  >
                    Services
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === "services" ? "rotate-180" : ""}`} />
                  </button>

                  {activeDropdown === "services" && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[360px]">
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
                                    className="block text-[13px] text-gray-600 hover:text-[#F26522] px-2 py-1.5 rounded-lg transition-colors hover:bg-gray-50"
                                  >
                                    {item.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Simple Links */}
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-3 py-2 text-sm font-medium rounded-full transition-colors duration-300 ${
                      pathname === link.href ? "text-[#F26522]" : "text-gray-900 hover:text-gray-500"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* RIGHT: Clock + CTA */}
            <div className="flex items-center gap-3">
              <div className="hidden xl:block">
                <LiveClock />
              </div>
              <div className="hidden lg:block">
                <TextRollButton href="/contact" label="Book a strategy call" variant="dark" />
              </div>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden w-9 h-9 sm:w-10 sm:h-10 bg-gray-900 rounded-full flex items-center justify-center text-white transition-colors hover:bg-[#F26522]"
              >
                {isOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden" onClick={() => setIsOpen(false)}>
          <div className="absolute inset-0 bg-black/60" />
          <div
            className="absolute bottom-0 left-0 right-0 bg-white rounded-t-2xl mx-3 mb-3 rounded-b-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 space-y-2">
              <div className="flex items-center gap-2 pb-4 border-b border-gray-100">
                <LiveClock />
              </div>
              {solutions.map((sol) => {
                const Icon = sol.icon;
                return (
                  <Link
                    key={sol.href}
                    href={sol.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-gray-50 transition-colors"
                  >
                    <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${sol.color} flex items-center justify-center`}>
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-[28px] sm:text-[32px] font-medium text-gray-900">{sol.label}</span>
                  </Link>
                );
              })}
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-3 text-[28px] sm:text-[32px] font-medium text-gray-900 hover:text-[#F26522] rounded-xl hover:bg-gray-50 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-100 mt-4">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 bg-[#F26522] hover:bg-[#e05a1a] text-white font-semibold px-6 py-4 rounded-full transition-colors w-full"
                >
                  Start a project
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
