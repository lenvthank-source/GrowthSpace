"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  UserPlus,
  Share2,
  Globe,
  Check,
  Building2,
} from "lucide-react";
import type { TeamMember } from "./page";

export default function ProfileCardClient({ member }: { member: TeamMember }) {
  const [copied, setCopied] = useState(false);

  // Generate and trigger vCard (.vcf) download for instant native phone contact saving
  const handleSaveContact = () => {
    const vcardData = `BEGIN:VCARD
VERSION:3.0
N:${member.lastName};${member.firstName};;;
FN:${member.name}
ORG:${member.company}
TITLE:${member.role}
TEL;TYPE=CELL,VOICE:${member.phone}
EMAIL;TYPE=WORK,INTERNET:${member.email}
URL:https://growthspare.com
NOTE:${member.tagline} — GrowthSpare Digital Marketing & AI Agency
END:VCARD`;

    const blob = new Blob([vcardData], { type: "text/vcard;charset=utf-8" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `${member.name.replace(/\s+/g, "_")}_GrowthSpare.vcf`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  // Native Web Share API or Clipboard Copy fallback
  const handleShare = async () => {
    const shareData = {
      title: `${member.name} — ${member.role} | GrowthSpare`,
      text: `Connect with ${member.name} at GrowthSpare`,
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.log("Share dismissed:", err);
      }
    } else {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const whatsappMessage = encodeURIComponent(
    `Hi ${member.firstName}, I visited your GrowthSpare digital profile and would like to connect!`
  );

  return (
    <div className="min-h-screen bg-[#EFEFEF] text-[#111827] font-sans antialiased selection:bg-[#F5A623]/30">
      {/* APP CONTAINER */}
      <div className="w-full max-w-md mx-auto min-h-screen flex flex-col justify-between p-4 sm:p-5 relative pb-8">
        {/* TOP NAVIGATION BAR */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between z-10 pt-2 mb-4"
        >
          {/* Top Left: GrowthSpare Logo Badge */}
          <Link
            href="/"
            className="flex items-center gap-2 bg-white px-3.5 py-1.5 rounded-full shadow-sm hover:shadow transition-all shrink-0"
          >
            <Image
              src="/logosmall.png"
              alt="GrowthSpare"
              width={20}
              height={20}
              className="w-5 h-5 object-contain"
            />
            <span className="font-display font-bold text-xs tracking-wide text-[#111827]">
              Growth<span className="text-[#F5A623]">Spare</span>
            </span>
          </Link>

          {/* Top Right: Pure White Pill Buttons */}
          <div className="flex items-center gap-2 shrink-0">
            {/* Save Contact White Pill */}
            <motion.button
              whileHover={{ scale: 1.04, y: -1 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleSaveContact}
              className="rounded-full bg-white hover:bg-gray-50 text-[#111827] text-xs font-bold px-3.5 py-1.5 shadow-sm active:scale-95 transition-all flex items-center gap-1.5 cursor-pointer"
              title="Save Contact (.vcf)"
            >
              <UserPlus className="w-3.5 h-3.5 text-[#F5A623] fill-[#F5A623]" />
              <span>Save</span>
            </motion.button>

            {/* Share White Pill */}
            <motion.button
              whileHover={{ scale: 1.04, y: -1 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleShare}
              className="rounded-full bg-white hover:bg-gray-50 text-[#111827] text-xs font-semibold px-3 py-1.5 shadow-sm active:scale-95 transition-all flex items-center gap-1.5"
              title="Share Profile"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-600 font-bold">Copied</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5 text-[#F5A623]" />
                  <span>Share</span>
                </>
              )}
            </motion.button>
          </div>
        </motion.div>

        {/* MAIN BODY CONTENT STACK */}
        <div className="space-y-4 flex-1">
          {/* 1. TOP MAIN PROFILE CARD */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -3 }}
            className="bg-white rounded-3xl p-6 shadow-sm relative overflow-hidden text-center transition-all duration-300"
          >
            {/* Top Stat Header Row */}
            <div className="flex items-start justify-between w-full mb-3 text-left">
              <div className="inline-flex items-center gap-1.5 bg-[#EFEFEF] px-3 py-1 rounded-full text-[10px] font-bold text-[#111827] uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F5A623] animate-pulse" />
                <span>Executive Profile</span>
              </div>

              <div className="text-right">
                <span className="text-lg font-bold text-[#111827] font-display block leading-none">
                  {member.experience || "10+"}
                </span>
                <span className="text-[10px] text-[#6B7280] font-normal">Years Exp.</span>
              </div>
            </div>

            {/* Circular Avatar with Golden Texture Ring */}
            <div className="relative inline-block my-3">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-1.5 rounded-full bg-gradient-to-tr from-[#F5A623] via-amber-300 to-yellow-500 blur-md opacity-50 pointer-events-none"
              />
              <div className="relative w-48 h-48 rounded-full p-1 bg-gradient-to-tr from-[#F5A623] via-amber-200 to-amber-500 shadow-lg">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={192}
                  height={192}
                  className="w-full h-full rounded-full object-cover bg-[#EFEFEF]"
                  priority
                />
              </div>
            </div>

            {/* Member Name & Role */}
            <h1 className="text-xl font-display font-bold text-[#111827] tracking-tight mt-1">
              {member.name}
            </h1>
            <p className="text-xs text-[#F5A623] font-semibold uppercase tracking-wider mt-0.5">
              {member.role}
            </p>
            <div className="flex items-center justify-center gap-1.5 text-xs text-[#6B7280] font-medium mt-1">
              <Building2 className="w-3.5 h-3.5 text-gray-400" />
              <span>{member.company}</span>
            </div>
          </motion.div>

          {/* 2. ICON-ONLY PURE WHITE PILL BUTTONS (Only Logo Icons in Brand Colors) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="grid grid-cols-3 gap-3"
          >
            {/* Call White Pill (Green Phone Icon Only) */}
            <motion.a
              whileHover={{ scale: 1.06, y: -2 }}
              whileTap={{ scale: 0.93 }}
              href={`tel:${member.phone}`}
              aria-label={`Call ${member.name}`}
              className="rounded-full bg-white hover:bg-gray-50 py-3.5 flex items-center justify-center shadow-sm hover:shadow-md transition-all group"
            >
              <Phone className="w-7 h-7 text-emerald-600 fill-emerald-600 shrink-0 group-hover:scale-110 transition-transform" />
            </motion.a>

            {/* WhatsApp White Pill (Official WhatsApp Green SVG Logo Only) */}
            <motion.a
              whileHover={{ scale: 1.06, y: -2 }}
              whileTap={{ scale: 0.93 }}
              href={`https://wa.me/${member.whatsapp}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`WhatsApp ${member.name}`}
              className="rounded-full bg-white hover:bg-gray-50 py-3.5 flex items-center justify-center shadow-sm hover:shadow-md transition-all group"
            >
              <svg
                className="w-7 h-7 fill-[#25D366] shrink-0 group-hover:scale-110 transition-transform"
                viewBox="0 0 24 24"
              >
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
            </motion.a>

            {/* Email White Pill (Golden Mail Icon Only) */}
            <motion.a
              whileHover={{ scale: 1.06, y: -2 }}
              whileTap={{ scale: 0.93 }}
              href={`mailto:${member.email}`}
              aria-label={`Email ${member.name}`}
              className="rounded-full bg-white hover:bg-gray-50 py-3.5 flex items-center justify-center shadow-sm hover:shadow-md transition-all group"
            >
              <Mail className="w-7 h-7 text-[#F5A623] shrink-0 group-hover:scale-110 transition-transform" />
            </motion.a>
          </motion.div>

          {/* 3. BIO & EXPERTISE CARD */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -3 }}
            className="bg-white rounded-3xl p-5 shadow-sm text-left space-y-3 transition-all duration-300"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[#111827] uppercase tracking-wider">
                About {member.firstName}
              </span>
              <span className="text-[10px] bg-[#EFEFEF] text-[#111827] font-semibold px-3 py-1 rounded-full">
                {member.company}
              </span>
            </div>

            <p className="text-xs text-[#6B7280] leading-relaxed font-sans">
              {member.bio}
            </p>

            {/* Skill Pills */}
            <div className="pt-1 flex flex-wrap gap-1.5">
              {member.skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-[#EFEFEF] text-[#111827] text-[11px] font-medium px-3 py-1 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Website Direct Link */}
            <div className="pt-2.5 border-t border-gray-100 flex items-center justify-between text-xs">
              <span className="text-[#6B7280] text-[11px]">Official Site</span>
              <Link
                href="/"
                className="font-semibold text-[#111827] hover:text-[#F5A623] flex items-center gap-1 transition-colors"
              >
                <Globe className="w-3.5 h-3.5 text-[#F5A623]" />
                <span>growthspare.com</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
