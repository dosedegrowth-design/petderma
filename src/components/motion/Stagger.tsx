"use client";

import { motion, useReducedMotion } from "motion/react";
import { Children } from "react";

/**
 * Simple Stagger that uses whileInView with a generous margin so animations
 * start before the user sees the items, avoiding blank/empty card flashes.
 */
export function Stagger({
  children,
  staggerDelay = 0.06,
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
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0, margin: "400px 0px 400px 0px" }}
          transition={{
            duration: 0.45,
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
