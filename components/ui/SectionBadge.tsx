import React from "react";

export interface SectionBadgeProps {
  number?: string;
  label?: string;
  text?: string;
  icon?: React.ElementType;
  borderColor?: string;
}

export function SectionBadge({
  number,
  label,
  text,
  icon: Icon,
  borderColor = "border-gray-200",
}: SectionBadgeProps) {
  const badgeText = label || text || "";
  const showCircle = Boolean(Icon || (number && number.trim() !== ""));

  return (
    <div className="flex items-center gap-3 mb-6 sm:mb-8">
      {showCircle && (
        <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gray-900 text-white flex items-center justify-center text-[11px] sm:text-[12px] font-semibold shrink-0">
          {Icon ? <Icon className="w-3.5 h-3.5" /> : number}
        </div>
      )}
      {badgeText && (
        <span className={`text-[12px] sm:text-[13px] font-medium border ${borderColor} rounded-full px-3 sm:px-4 py-1 sm:py-1.5`}>
          {badgeText}
        </span>
      )}
    </div>
  );
}

export default SectionBadge;
