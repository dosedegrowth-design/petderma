"use client";

import { motion, useReducedMotion } from "motion/react";
import { Children } from "react";

/**
 * Stagger wraps each child in its own motion.div that animates with sequential delay.
 * This avoids nested motion variant inheritance conflicts.
 */
export function Stagger({
  children,
  staggerDelay = 0.08,
  className,
  baseDelay = 0,
}: {
  children: React.ReactNode;
  staggerDelay?: number;
  className?: string;
  baseDelay?: number;
}) {
  const reduce = useReducedMotion();
  const arr = Children.toArray(children);

  return (
    <div className={className}>
      {arr.map((child, i) => (
        <motion.div
          key={i}
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1, margin: "-20px" }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
            delay: baseDelay + i * staggerDelay,
          }}
        >
          {child}
        </motion.div>
      ))}
    </div>
  );
}

// Backward compat — these are now no-ops since Stagger handles wrapping
export const staggerItem = {};
export function StaggerItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={className}>{children}</div>;
}
