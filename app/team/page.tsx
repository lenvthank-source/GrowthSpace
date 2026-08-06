import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, UserCheck, Phone, Mail, MessageSquare } from "lucide-react";
import SectionBadge from "@/components/ui/SectionBadge";
import FadeIn from "@/components/ui/FadeIn";
import { teamMembers } from "./[slug]/page";

export const metadata: Metadata = {
  title: "GrowthSpare Team Profiles — Digital Business Cards",
  description:
    "Meet the GrowthSpare leadership team: Animesh Khosla, Arun Khosla, and Palak Katiyar. Access shareable mobile digital business cards, save contact info, or connect directly.",
  alternates: {
    canonical: "/team",
  },
};

export default function TeamDirectoryPage() {
  const members = Object.values(teamMembers);

  return (
    <div className="bg-[#EFEFEF] min-h-screen py-16 md:py-24 font-sans">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <SectionBadge label="Team Directory" />
            <h1 className="axion-heading text-[#111827] font-display mt-4 mb-4">
              GrowthSpare Leadership
            </h1>
            <p className="text-[#6B7280] text-base sm:text-lg leading-relaxed">
              Mobile-optimized digital business cards for quick contact saving, direct calling, and WhatsApp connection.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {members.map((m) => (
              <div
                key={m.slug}
                className="bg-slate-950 rounded-3xl p-6 text-white flex flex-col justify-between hover-lift shadow-xl border border-slate-800"
              >
                <div>
                  <div className="relative w-24 h-24 mx-auto mb-4 rounded-full p-1 bg-gradient-to-tr from-[#F5A623] to-amber-500">
                    <Image
                      src={m.image}
                      alt={m.name}
                      width={96}
                      height={96}
                      className="w-full h-full rounded-full object-cover bg-slate-900"
                    />
                  </div>
                  <h2 className="text-xl font-bold text-center font-display text-white">
                    {m.name}
                  </h2>
                  <p className="text-xs font-semibold text-[#F5A623] text-center uppercase tracking-wider mt-1">
                    {m.role}
                  </p>
                  <p className="text-xs text-slate-400 text-center mt-3 line-clamp-3 leading-relaxed">
                    {m.bio}
                  </p>
                </div>

                <div className="mt-6 space-y-3">
                  <div className="flex justify-center gap-3 text-slate-300">
                    <a
                      href={`tel:${m.phone}`}
                      className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 transition-colors"
                      title="Call"
                    >
                      <Phone className="w-4 h-4 text-emerald-400" />
                    </a>
                    <a
                      href={`https://wa.me/${m.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 transition-colors"
                      title="WhatsApp"
                    >
                      <MessageSquare className="w-4 h-4 text-green-400" />
                    </a>
                    <a
                      href={`mailto:${m.email}`}
                      className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 transition-colors"
                      title="Email"
                    >
                      <Mail className="w-4 h-4 text-blue-400" />
                    </a>
                  </div>

                  <Link
                    href={`/team/${m.slug}`}
                    className="w-full bg-[#F5A623] hover:bg-[#D4901E] text-slate-950 font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors text-sm"
                  >
                    <UserCheck className="w-4 h-4" />
                    <span>View Mobile Card & Save</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
