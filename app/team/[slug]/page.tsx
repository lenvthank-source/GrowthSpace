import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProfileCardClient from "./ProfileCardClient";

export interface TeamMember {
  slug: string;
  name: string;
  firstName: string;
  lastName: string;
  role: string;
  company: string;
  tagline: string;
  bio: string;
  image: string;
  phone: string;
  displayPhone: string;
  email: string;
  whatsapp: string;
  location: string;
  skills: string[];
  experience: string;
}

export const teamMembers: Record<string, TeamMember> = {
  "animesh-khosla": {
    slug: "animesh-khosla",
    name: "Animesh Khosla",
    firstName: "Animesh",
    lastName: "Khosla",
    role: "Founder & Growth Marketing Consultant",
    company: "GrowthSpare",
    tagline: "Performance Marketing & AI Growth Lead",
    bio: "Over 10+ years in digital marketing, driving 50+ brand success stories across Delhi NCR through SEO, PPC, and data-backed performance marketing.",
    image: "/images/case-studies/animersh.png",
    phone: "+919560725039",
    displayPhone: "+91 95607 25039",
    email: "animesh@growthspare.com",
    whatsapp: "919560725039",
    location: "GK-II, New Delhi",
    skills: ["Growth Strategy", "Marketing Consultant", "Brand Scaling"],
    experience: "10+",
  },
  "arun-khosla": {
    slug: "arun-khosla",
    name: "Arun Khosla",
    firstName: "Arun",
    lastName: "Khosla",
    role: "Director & Strategic Advisor",
    company: "GrowthSpare",
    tagline: "Corporate Strategy & Financial Advisor",
    bio: "Strategic corporate advisor with 38+ years of experience guiding GrowthSpare's long-term expansion, strategic investments, financial advisory, and key enterprise partnerships.",
    image: "/images/case-studies/arun.png",
    phone: "+919910899325",
    displayPhone: "+91 99108 99325",
    email: "info@growthspare.com",
    whatsapp: "919910899325",
    location: "GK-II, New Delhi",
    skills: ["Corporate Strategy", "Financial Planning", "Partnerships", "Governance"],
    experience: "38+",
  },
  "palak-katiyar": {
    slug: "palak-katiyar",
    name: "Palak Katiyar",
    firstName: "Palak",
    lastName: "Katiyar",
    role: "CTO: Head of Product Engineering",
    company: "GrowthSpare",
    tagline: "Custom Software, ERP/CRM & AI Systems Lead",
    bio: "Technology and product engineering leader with 7+ years experience driving custom web/mobile software development, ERP/CRM implementations, and automated AI solutions.",
    image: "/images/case-studies/palak.png",
    phone: "+919560725039",
    displayPhone: "+91 95607 25039",
    email: "palak@growthspare.com",
    whatsapp: "919560725039",
    location: "GK-II, New Delhi",
    skills: ["Software Ops", "Custom ERP/CRM", "AI Chatbots", "Full-Stack Tech"],
    experience: "7+",
  },
};

export async function generateStaticParams() {
  return Object.keys(teamMembers).map((slug) => ({ slug }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }> | { slug: string };
}): Promise<Metadata> {
  const resolvedParams = await props.params;
  const slug = resolvedParams?.slug;
  const member = slug ? teamMembers[slug] : null;
  if (!member) return {};

  return {
    title: `${member.name} — ${member.role} | GrowthSpare Digital Business Card`,
    description: `Connect with ${member.name}, ${member.role} at GrowthSpare. Save contact, call direct, or chat on WhatsApp.`,
    alternates: {
      canonical: `/team/${member.slug}`,
    },
    openGraph: {
      title: `${member.name} — ${member.role} | GrowthSpare`,
      description: member.bio,
      url: `https://growthspare.com/team/${member.slug}`,
      images: [member.image],
    },
  };
}

export default async function TeamProfilePage(props: {
  params: Promise<{ slug: string }> | { slug: string };
}) {
  const resolvedParams = await props.params;
  const slug = resolvedParams?.slug;
  const member = slug ? teamMembers[slug] : null;

  if (!member) {
    notFound();
  }

  return <ProfileCardClient member={member} />;
}
