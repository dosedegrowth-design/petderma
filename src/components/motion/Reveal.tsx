"use client";

import { motion, useReducedMotion } from "motion/react";

export function Reveal({
  children,
  delay = 0,
  className,
  inView = false,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  /** Set true if element starts off-screen and should animate when scrolled into view */
  inView?: boolean;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <span className={className}>{children}</span>;

  const animProps = inView
    ? {
        initial: { y: "110%" },
        whileInView: { y: 0 },
        viewport: { once: true, amount: 0.2 },
      }
    : {
        initial: { y: "110%" },
        animate: { y: 0 },
      };

  return (
    <span className={`inline-block overflow-hidden align-baseline ${className ?? ""}`}>
      <motion.span
        className="inline-block will-change-transform"
        {...animProps}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay }}
      >
        {children}
      </motion.span>
    </span>
  );
}
