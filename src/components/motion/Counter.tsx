"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "motion/react";
import { useEffect, useRef } from "react";

export function Counter({
  to,
  duration = 2,
  className,
  suffix = "",
}: {
  to: number;
  duration?: number;
  className?: string;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.floor(v).toLocaleString("pt-BR"));

  useEffect(() => {
    if (inView) {
      const controls = animate(count, to, { duration, ease: [0.22, 1, 0.36, 1] });
      return controls.stop;
    }
  }, [inView, to, count, duration]);

  return (
    <span ref={ref} className={className}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}
