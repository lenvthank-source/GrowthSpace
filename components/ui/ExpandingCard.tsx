"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export interface ExpandingCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
  buttonLabel?: string;
  aspect?: string;
  variant?: "light" | "dark";
  children?: React.ReactNode;
}

export function ExpandingCard({
  title,
  description,
  imageSrc,
  imageAlt,
  href,
  buttonLabel = "Learn more",
  aspect = "aspect-[329/246]",
  variant = "light",
  children,
}: ExpandingCardProps) {
  const btnBg = variant === "dark" ? "bg-gray-900" : "bg-white";
  const btnText = variant === "dark" ? "text-white" : "text-gray-900";
  const arrowColor = variant === "dark" ? "text-white" : "text-gray-900";

  return (
    <div className="group">
      <Link href={href} className={`block ${aspect} rounded-2xl overflow-hidden relative cursor-pointer`}>
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        {children}
        <div
          className={`absolute bottom-4 left-4 ${btnBg} h-9 rounded-full flex items-center gap-2 px-2.5 overflow-hidden transition-all duration-300 ease-in-out w-9 group-hover:w-[168px]`}
        >
          <ArrowRight
            size={14}
            className={`${arrowColor} shrink-0 -rotate-45 group-hover:rotate-0 transition-transform duration-300`}
          />
          <span
            className={`${btnText} text-[13px] font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100`}
          >
            {buttonLabel}
          </span>
        </div>
      </Link>
      <p className="text-[13px] sm:text-sm text-gray-600 mt-4 leading-relaxed">{description}</p>
      <p className="text-sm sm:text-[15px] font-semibold text-gray-900 mt-1">{title}</p>
    </div>
  );
}

export default ExpandingCard;
