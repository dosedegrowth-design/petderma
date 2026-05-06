"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "motion/react";

type Props = HTMLMotionProps<"div"> & {
  delay?: number;
  y?: number;
  once?: boolean;
  /** When true, animates on mount (for above-the-fold). Default false uses scroll trigger. */
  immediate?: boolean;
};

export function FadeUp({
  children,
  delay = 0,
  y = 32,
  once = true,
  immediate = false,
  className,
  ...rest
}: Props) {
  const reduce = useReducedMotion();

  const animProps = immediate
    ? {
        initial: reduce ? false : { opacity: 0, y },
        animate: { opacity: 1, y: 0 },
      }
    : {
        initial: reduce ? false : { opacity: 0, y },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once, amount: 0.15, margin: "-40px" } as const,
      };

  return (
    <motion.div
      className={className}
      {...animProps}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
