import type { Metadata } from "next";
import Script from "next/script";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import CaseStudiesSection from "@/components/home/CaseStudiesSection";
import DivisionsSection from "@/components/home/DivisionsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import IndustriesStrip from "@/components/home/IndustriesStrip";
import FAQSection from "@/components/home/FAQSection";

export const metadata: Metadata = {
  title: "GrowthSpare — Digital Marketing Agency & AI Tech Solutions",
  description:
    "Scale your business with GrowthSpare. We blend data-driven SEO, Google Ads, AI chatbots & custom ERP software to boost revenue 3x. Claim your free audit! ✓",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "GrowthSpare — Digital Marketing Agency & AI Solutions",
    description:
      "Scale your business with GrowthSpare. We blend data-driven SEO, Google Ads, AI chatbots & custom ERP software to boost revenue 3x. Claim your free audit! ✓",
    url: "https://growthspare.com",
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      <Script id="meta-pixel" strategy="afterInteractive">
        {`!function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;
        s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '658754353715558');
        fbq('track', 'PageView');`}
      </Script>
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src="https://www.facebook.com/tr?id=658754353715558&ev=PageView&noscript=1"
          alt="facebook pixel"
        />
      </noscript>

      <HeroSection />
      <AboutSection />
      <CaseStudiesSection />
      <DivisionsSection />
      <TestimonialsSection />
      <IndustriesStrip />
      <FAQSection />
    </>
  );
}
