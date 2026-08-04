"use client";

import { useEffect, useRef, useState } from "react";

interface CountUpProps {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  decimals?: number;
}

export default function CountUp({
  end,
  suffix = "",
  prefix = "",
  duration = 2000,
  decimals = 0,
}: CountUpProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          animate();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();

    function animate() {
      const startTime = performance.now();

      function tick(now: number) {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Ease-out cubic for smooth deceleration
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = eased * end;

        setCount(current);

        if (progress < 1) {
          requestAnimationFrame(tick);
        } else {
          setCount(end);
        }
      }

      requestAnimationFrame(tick);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [end, duration]);

  const display = decimals > 0
    ? count.toFixed(decimals)
    : Math.round(count).toLocaleString();

  return (
    <span ref={ref}>
      {prefix}{display}{suffix}
    </span>
  );
}
