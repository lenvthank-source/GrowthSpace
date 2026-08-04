"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export interface TextRollButtonProps {
  href?: string;
  label?: string;
  text?: string;
  children?: React.ReactNode;
  variant?: "orange" | "dark";
  className?: string;
  onClick?: () => void;
}

export function TextRollButton({
  href = "/contact",
  label,
  text,
  children,
  variant = "orange",
  className = "",
  onClick,
}: TextRollButtonProps) {
  const content = label || text || (typeof children === "string" ? children : "Start a project");
  const isOrange = variant === "orange";
  const bg = isOrange ? "bg-[#F5A623] hover:bg-[#D4901E]" : "bg-gray-900 hover:bg-gray-800";
  const arrowBg = "bg-white";
  const arrowColor = isOrange ? "text-[#F5A623]" : "text-gray-900";
  const iconSize = isOrange ? "w-7 h-7 sm:w-8 sm:h-8" : "w-6 h-6";

  const buttonElement = (
    <span
      onClick={onClick}
      className={`group inline-flex items-center gap-2 ${bg} text-white text-[13px] sm:text-sm font-medium rounded-full pl-5 sm:pl-6 pr-2 py-2 transition-colors duration-300 cursor-pointer ${className}`}
    >
      <span className="overflow-hidden h-[20px]">
        <span className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-translate-y-1/2">
          <span className="h-[20px] flex items-center">{content}</span>
          <span className="h-[20px] flex items-center">{content}</span>
        </span>
      </span>
      <span className={`${iconSize} ${arrowBg} rounded-full flex items-center justify-center shrink-0`}>
        <ArrowRight className={`w-3.5 h-3.5 ${arrowColor} -rotate-45 group-hover:rotate-0 transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]`} />
      </span>
    </span>
  );

  if (href) {
    return <Link href={href}>{buttonElement}</Link>;
  }

  return buttonElement;
}

export default TextRollButton;
