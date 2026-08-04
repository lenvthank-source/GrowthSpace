"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

interface TextRollButtonProps {
  text: string;
  href?: string;
  onClick?: () => void;
  variant?: "orange" | "dark" | "white";
  className?: string;
}

export default function TextRollButton({
  text,
  href,
  onClick,
  variant = "orange",
  className = "",
}: TextRollButtonProps) {
  const getVariantStyles = () => {
    switch (variant) {
      case "dark":
        return {
          button: "bg-gray-900 hover:bg-gray-800 text-white",
          circle: "bg-white text-gray-900",
        };
      case "white":
        return {
          button: "bg-white text-gray-900 border border-gray-200/80 shadow-sm hover:shadow-md",
          circle: "bg-gray-900 text-white",
        };
      case "orange":
      default:
        return {
          button: "bg-[#F26522] hover:bg-[#e05a1a] text-white",
          circle: "bg-white text-[#F26522]",
        };
    }
  };

  const styles = getVariantStyles();

  const content = (
    <div
      className={`group relative inline-flex items-center gap-3 text-xs sm:text-sm font-medium rounded-full pl-5 sm:pl-6 pr-2 py-2 cursor-pointer select-none transition-colors duration-300 ${styles.button} ${className}`}
    >
      {/* Text Roll Container */}
      <div className="relative overflow-hidden h-[20px] leading-[20px]">
        <div className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-translate-y-1/2">
          <span className="block whitespace-nowrap">{text}</span>
          <span className="block whitespace-nowrap" aria-hidden="true">{text}</span>
        </div>
      </div>

      {/* Rotating Arrow Circle */}
      <div
        className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-rotate-45 ${styles.circle}`}
      >
        <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} onClick={onClick}>
        {content}
      </a>
    );
  }

  return <button onClick={onClick}>{content}</button>;
}
