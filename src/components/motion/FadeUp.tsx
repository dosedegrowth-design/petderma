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
  y = 24,
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
        // Trigger animation early — even when element is just below viewport
        viewport: { once, amount: 0, margin: "200px 0px 200px 0px" } as const,
      };

  return (
    <motion.div
      className={className}
      {...animProps}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
