"use client";

import React, { useState, useEffect } from "react";
import { Clock } from "lucide-react";

interface LiveClockProps {
  location?: string;
  timeZone?: string;
  className?: string;
}

export default function LiveClock({
  location = "New Delhi",
  timeZone = "Asia/Kolkata",
  className = "",
}: LiveClockProps) {
  const [timeStr, setTimeStr] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const formatter = new Intl.DateTimeFormat("en-US", {
          timeZone,
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        });
        setTimeStr(formatter.format(now));
      } catch (e) {
        const now = new Date();
        const hrs = String(now.getHours()).padStart(2, "0");
        const mins = String(now.getMinutes()).padStart(2, "0");
        setTimeStr(`${hrs}:${mins}`);
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [timeZone]);

  if (!timeStr) {
    return (
      <div className={`inline-flex items-center gap-1.5 text-xs sm:text-[13px] text-gray-600 ${className}`}>
        <Clock className="w-3.5 h-3.5 shrink-0" />
        <span>--:-- in {location}</span>
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center gap-1.5 text-xs sm:text-[13px] text-gray-600 ${className}`}>
      <Clock className="w-3.5 h-3.5 shrink-0" />
      <span>{timeStr} in {location}</span>
    </div>
  );
}
