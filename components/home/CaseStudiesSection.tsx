"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Link as LinkIcon } from "lucide-react";

const caseStudies = [
  {
    id: "narrativ",
    title: "Narrativ",
    description: "Winner of Site of the Month 2025 - an interactive 3D showcase driving record engagement",
    videoUrl: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260516_122702_390f5305-8719-41d5-ae80-d23ab3796c28.mp4",
    aspect: "aspect-[329/246]",
    bg: "bg-[#1a1d2e]",
    btnVariant: "white" as const,
    btnText: "Learn more",
    btnWidth: "group-hover:w-[148px]",
    icon: "link",
    href: "/projects",
  },
  {
    id: "luminar",
    title: "Luminar",
    description: "Transforming a dated platform into a conversion-focused brand experience",
    videoUrl: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260516_123323_f909c2b8-ff6c-4edf-882b-8ebcdbe389b5.mp4",
    aspect: "aspect-square",
    bg: "bg-[#6b6b6b]",
    btnVariant: "dark" as const,
    btnText: "View case study",
    btnWidth: "group-hover:w-[168px]",
    icon: "arrow",
    href: "/projects",
  },
];

export default function CaseStudiesSection() {
  return (
    <section className="bg-[#F5F5F5] pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 lg:pb-28">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Badge Row */}
        <div className="flex items-center gap-3 mb-6 sm:mb-8">
          <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gray-900 text-white flex items-center justify-center text-[11px] sm:text-[12px] font-semibold">
            2
          </div>
          <span className="text-[12px] sm:text-[13px] font-medium border border-gray-300 rounded-full px-3 sm:px-4 py-1 sm:py-1.5 text-gray-900">
            Featured client work
          </span>
        </div>

        {/* Heading H2 */}
        <h2 className="text-[clamp(1.75rem,7vw,4.2rem)] sm:text-[clamp(2.5rem,5vw,4.2rem)] font-medium leading-[1.08] tracking-[-0.03em] text-gray-900 mb-10 sm:mb-14 lg:mb-16">
          Our projects
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {caseStudies.map((study) => (
            <Link key={study.id} href={study.href} className="group block cursor-pointer">
              {/* Video Container */}
              <div className={`relative ${study.aspect} rounded-2xl overflow-hidden ${study.bg} shadow-sm group-hover:shadow-md transition-shadow duration-300`}>
                <video
                  src={study.videoUrl}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                />

                {/* Expanding Hover Button (absolute bottom-4 left-4) */}
                <div className="absolute bottom-4 left-4 z-10 pointer-events-none">
                  <div
                    className={`h-9 w-9 ${study.btnWidth} rounded-full flex items-center justify-between px-2.5 overflow-hidden transition-all duration-300 ease-in-out ${
                      study.btnVariant === "white"
                        ? "bg-white text-gray-900 shadow-md"
                        : "bg-gray-900 text-white shadow-md"
                    }`}
                  >
                    <span className="text-[13px] font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75 whitespace-nowrap pl-1">
                      {study.btnText}
                    </span>

                    <div className="w-5 h-5 flex items-center justify-center shrink-0">
                      {study.icon === "link" ? (
                        <LinkIcon className="w-3.5 h-3.5 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                      ) : (
                        <ArrowRight className="w-3.5 h-3.5 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Text Meta */}
              <p className="text-xs sm:text-[13px] text-gray-600 mt-4 leading-relaxed max-w-xl">
                {study.description}
              </p>
              <h3 className="text-sm sm:text-base font-semibold text-gray-900 mt-1 group-hover:text-[#F26522] transition-colors">
                {study.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
