import "./globals.css";
import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";
import GlobalSchema from "@/components/schema/GlobalSchema";
import Breadcrumbs from "@/components/Breadcrumbs";

import AppShell from "@/components/AppShell";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://growthspare.com";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "GrowthSpare — Digital Marketing Agency & AI Tech Solutions",
    template: "%s | GrowthSpare",
  },
  description:
    "GrowthSpare combines performance marketing, SEO, Google Ads, AI chatbots, and custom ERP/CRM software to help businesses scale fast. Claim your free audit today!",
  keywords: [
    "digital marketing agency",
    "technology partner",
    "SEO services",
    "Google Ads",
    "AI chatbots",
    "ERP development",
    "CRM software",
    "performance marketing",
    "Delhi NCR digital agency",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "GrowthSpare — Digital Marketing Agency & AI Tech Solutions",
    description:
      "GrowthSpare combines performance marketing, SEO, Google Ads, AI chatbots, and custom ERP/CRM software to help businesses scale fast.",
    url: baseUrl,
    siteName: "GrowthSpare",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GrowthSpare — Digital Marketing Agency & AI Tech Solutions",
    description:
      "GrowthSpare combines performance marketing, SEO, Google Ads, AI chatbots, and custom ERP/CRM software to help businesses scale fast.",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/logosmall.png", type: "image/png" },
    ],
    shortcut: "/logosmall.png",
    apple: "/growthspare-a-logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" id="top" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <link
          rel="alternate"
          type="application/rss+xml"
          title="GrowthSpare RSS Feed"
          href="/feed.xml"
        />
      </head>
      <body className="font-sans antialiased">
        {/* Google Tag (gtag.js) - Single Consolidated GA Tracking ID */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-WEVSM7ZB4K"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-WEVSM7ZB4K');
          `}
        </Script>

        <GlobalSchema />

        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
