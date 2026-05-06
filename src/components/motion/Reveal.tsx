"use client";

import { motion, useReducedMotion } from "motion/react";

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <span className={className}>{children}</span>;

  return (
    <span className={`inline-block overflow-hidden align-baseline ${className ?? ""}`}>
      <motion.span
        className="inline-block will-change-transform"
        initial={{ y: "110%" }}
        whileInView={{ y: 0 }}
        viewport={{ once: true, amount: 0, margin: "200px 0px 200px 0px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
      >
        {children}
      </motion.span>
    </span>
  );
}
