"use client";

import { motion, type Variants } from "motion/react";

export function Stagger({
  children,
  staggerDelay = 0.08,
  className,
  immediate = false,
}: {
  children: React.ReactNode;
  staggerDelay?: number;
  className?: string;
  immediate?: boolean;
}) {
  const variants = {
    hidden: {},
    visible: { transition: { staggerChildren: staggerDelay } },
  };

  const animProps = immediate
    ? { initial: "hidden" as const, animate: "visible" as const }
    : {
        initial: "hidden" as const,
        whileInView: "visible" as const,
        viewport: { once: true, amount: 0.15, margin: "-40px" } as const,
      };

  return (
    <motion.div className={className} {...animProps} variants={variants}>
      {children}
    </motion.div>
  );
}

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export function StaggerItem({
  children,
  className,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "li" | "article" | "section";
}) {
  const MotionTag = motion[Tag];
  return (
    <MotionTag className={className} variants={staggerItem}>
      {children}
    </MotionTag>
  );
}
