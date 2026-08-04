"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";
import ShaderHeroBackground from "@/components/ui/ShaderHeroBackground";
import TextRollButton from "@/components/ui/TextRollButton";
import LiveClock from "@/components/ui/LiveClock";

export default function HeroSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-[#EFEFEF]">
      {/* Animated WebGL Shader Overlay */}
      <ShaderHeroBackground />

      {/* Navigation (z-20, relative) */}
      <header className="relative z-20 w-full max-w-[1440px] mx-auto p-2 sm:p-3 pt-4">
        <nav aria-label="Main Navigation" className="w-full bg-white rounded-full p-[5px] shadow-sm border border-gray-200/60 flex items-center justify-between">
          {/* LEFT: Logo & Nav Links */}
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-900 rounded-full flex items-center justify-center text-white text-[10px] sm:text-[11px] font-bold tracking-tight shadow-md group-hover:bg-[#F26522] transition-colors duration-300">
                GS
              </div>
              <span className="font-bold text-gray-900 text-sm sm:text-base tracking-tight md:hidden lg:inline-block">
                GrowthSpare
              </span>
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-900">
              <Link href="/projects" className="hover:text-gray-500 transition-colors duration-300">
                Projects
              </Link>
              <Link href="/about" className="hover:text-gray-500 transition-colors duration-300">
                Studio
              </Link>
              <Link href="/services" className="hover:text-gray-500 transition-colors duration-300">
                Services
              </Link>
              <Link href="/blog" className="hover:text-gray-500 transition-colors duration-300">
                Journal
              </Link>
              <Link href="/contact" className="hover:text-gray-500 transition-colors duration-300">
                Connect
              </Link>
            </div>
          </div>

          {/* RIGHT: Status Badge, Live Clock & CTA */}
          <div className="hidden md:flex items-center gap-5">
            <span className="text-xs text-gray-600 hidden lg:inline-block font-medium">
              Taking on growth projects for 2026
            </span>

            <LiveClock location="New Delhi" timeZone="Asia/Kolkata" className="hidden sm:inline-flex" />

            {/* Strategy Call Button with Text-Roll */}
            <TextRollButton text="Book a strategy call" href="/contact" variant="dark" />
          </div>

          {/* MOBILE: Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-9 h-9 bg-gray-900 text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex flex-col justify-end transition-opacity duration-300">
          <div className="bg-white rounded-2xl mx-3 mb-3 p-6 shadow-2xl animate-in slide-in-from-bottom duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]">
            <div className="flex items-center justify-between pb-6 border-b border-gray-100 mb-6">
              <LiveClock location="New Delhi" timeZone="Asia/Kolkata" />
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-900"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="flex flex-col gap-4 mb-8">
              {[
                { label: "Projects", href: "/projects" },
                { label: "Studio", href: "/about" },
                { label: "Services", href: "/services" },
                { label: "Journal", href: "/blog" },
                { label: "Connect", href: "/contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-medium text-gray-900 hover:text-[#F26522] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <TextRollButton
              text="Start a project"
              href="/contact"
              variant="orange"
              className="w-full justify-between"
              onClick={() => setMobileMenuOpen(false)}
            />
          </div>
        </div>
      )}

      {/* Hero Content (z-20) */}
      <div className="relative z-20 max-w-[1440px] w-full mx-auto px-5 sm:px-8 lg:px-12 pb-14 sm:pb-16 lg:pb-20 pt-16">
        <div className="max-w-4xl">
          {/* Small label */}
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-gray-900 mb-5 sm:mb-8">
            GrowthSpare Studio
          </p>

          {/* Headline H1 */}
          <h1 className="text-[clamp(1.75rem,7vw,4.2rem)] sm:text-[clamp(2.5rem,5vw,4.2rem)] font-medium leading-[1.08] tracking-[-0.03em] text-gray-900 mb-6">
            More Customers.<br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            Better Systems.<br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            Faster Growth.
          </h1>

          {/* SEO Description paragraph */}
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl leading-relaxed font-normal mb-8 sm:mb-12">
            Delhi Best Digital Marketing Agency &amp; AI Solutions, GrowthSpare combines performance marketing and custom technology to help businesses grow online and run smarter — all under one roof.
          </p>

          {/* CTA Row */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5">
            {/* Orange Button */}
            <TextRollButton text="Start a project" href="/contact" variant="orange" />

            {/* Certified Partner Badge */}
            <div className="inline-flex items-center gap-2.5 bg-white border border-gray-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)] rounded-[4px] px-3.5 py-2 transition-shadow duration-300">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 fill-current text-[#E8704E]" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <path d="m19.6 66.5 19.7-11 .3-1-.3-.5h-1l-3.3-.2-11.2-.3L14 53l-9.5-.5-2.4-.5L0 49l.2-1.5 2-1.3 2.9.2 6.3.5 9.5.6 6.9.4L38 49.1h1.6l.2-.7-.5-.4-.4-.4L29 41l-10.6-7-5.6-4.1-3-2-1.5-2-.6-4.2 2.7-3 3.7.3.9.2 3.7 2.9 8 6.1L37 36l1.5 1.2.6-.4.1-.3-.7-1.1L33 25l-6-10.4-2.7-4.3-.7-2.6c-.3-1-.4-2-.4-3l3-4.2L28 0l4.2.6L33.8 2l2.6 6 4.1 9.3L47 29.9l2 3.8 1 3.4.3 1h.7v-.5l.5-7.2 1-8.7 1-11.2.3-3.2 1.6-3.8 3-2L61 2.6l2 2.9-.3 1.8-1.1 7.7L59 27.1l-1.5 8.2h.9l1-1.1 4.1-5.4 6.9-8.6 3-3.5L77 13l2.3-1.8h4.3l3.1 4.7-1.4 4.9-4.4 5.6-3.7 4.7-5.3 7.1-3.2 5.7.3.4h.7l12-2.6 6.4-1.1 7.6-1.3 3.5 1.6.4 1.6-1.4 3.4-8.2 2-9.6 2-14.3 3.3-.2.1.2.3 6.4.6 2.8.2h6.8l12.6 1 3.3 2 1.9 2.7-.3 2-5.1 2.6-6.8-1.6-16-3.8-5.4-1.3h-.8v.4l4.6 4.5 8.3 7.5L89 80.1l.5 2.4-1.3 2-1.4-.2-9.2-7-3.6-3-8-6.8h-.5v.7l1.8 2.7 9.8 14.7.5 4.5-.7 1.4-2.6 1-2.7-.6-5.8-8-6-9-4.7-8.2-.5.4-2.9 30.2-1.3 1.5-3 1.2-2.5-2-1.4-3 1.4-6.2 1.6-8 1.3-6.4 1.2-7.9.7-2.6v-.2H49L43 72l-9 12.3-7.2 7.6-1.7.7-3-1.5.3-2.8L24 86l10-12.8 6-7.9 4-4.6-.1-.5h-.3L17.2 77.4l-4.7.6-2-2 .2-3 1-1 8-5.5Z" />
              </svg>
              <span className="text-xs sm:text-sm font-medium text-gray-900">Certified Partner</span>
              <span className="text-[10px] sm:text-[11px] font-bold bg-gray-900 text-white px-1.5 sm:px-2 py-0.5 rounded uppercase tracking-wider">
                Featured
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
