"use client";

import React from "react";
import TextRollButton from "@/components/ui/TextRollButton";

const smallImgUrl =
  "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260516_090123_74be96d4-9c1b-40cf-932a-96f4f4babed3.png&w=1280&q=85";
const largeImgUrl =
  "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260516_090133_c157d30b-a99a-4477-bec1-a446149ec3f2.png&w=1280&q=85";

export default function AboutSection() {
  return (
    <section className="bg-white pt-16 sm:pt-20 lg:pt-32 pb-12 sm:pb-16 lg:pb-24 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Badge Row */}
        <div className="flex items-center gap-3 mb-6 sm:mb-8">
          <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gray-900 text-white flex items-center justify-center text-[11px] sm:text-[12px] font-semibold">
            1
          </div>
          <span className="text-[12px] sm:text-[13px] font-medium border border-gray-200 rounded-full px-3 sm:px-4 py-1 sm:py-1.5 text-gray-900">
            Introducing GrowthSpare
          </span>
        </div>

        {/* Heading H2 */}
        <h2 className="text-[clamp(1.5rem,4vw,3.2rem)] font-medium leading-[1.12] tracking-[-0.02em] text-gray-900 mb-12 sm:mb-16 lg:mb-28">
          Strategy-led creatives &amp; technology, delivering<br className="hidden sm:block" />
          <span className="sm:hidden"> </span>
          results in digital and beyond.
        </h2>

        {/* Content Area - Responsive */}

        {/* MOBILE / TABLET (lg:hidden) */}
        <div className="lg:hidden flex flex-col gap-8">
          <div className="flex flex-col gap-6 items-start">
            <p className="text-[15px] sm:text-[17px] leading-[1.6] font-medium text-gray-900 max-w-xl">
              Through research, creative thinking and iteration we help growing brands realize their digital full potential.
            </p>
            <TextRollButton text="About our studio" href="/about" variant="orange" />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 mt-4">
            <div className="sm:w-[45%] aspect-[438/346] rounded-xl sm:rounded-2xl overflow-hidden bg-gray-100">
              <img
                src={smallImgUrl}
                alt="GrowthSpare studio research"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="sm:w-[55%] aspect-[900/600] rounded-xl sm:rounded-2xl overflow-hidden bg-gray-100">
              <img
                src={largeImgUrl}
                alt="GrowthSpare studio team"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* DESKTOP (hidden lg:grid) */}
        <div className="hidden lg:grid grid-cols-[26%_1fr_48%] items-end gap-6 xl:gap-8">
          {/* Left Column: Small Image */}
          <div className="self-end aspect-[438/346] rounded-2xl overflow-hidden bg-gray-100 shadow-sm">
            <img
              src={smallImgUrl}
              alt="GrowthSpare studio creative"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Center Column: Paragraph + Button */}
          <div className="self-start flex flex-col justify-between items-start h-full py-2">
            <p className="text-[16px] xl:text-[18px] leading-[1.65] font-medium text-gray-900">
              Through research, creative<br />
              thinking and iteration we help<br />
              growing brands realize their<br />
              digital full potential.
            </p>
            <div className="mt-8">
              <TextRollButton text="About our studio" href="/about" variant="orange" />
            </div>
          </div>

          {/* Right Column: Large Image */}
          <div className="self-end aspect-[3/2] rounded-2xl overflow-hidden bg-gray-100 shadow-md">
            <img
              src={largeImgUrl}
              alt="GrowthSpare strategy workshop"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
