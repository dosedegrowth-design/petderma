"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "motion/react";

type Props = HTMLMotionProps<"div"> & {
  delay?: number;
  y?: number;
  once?: boolean;
  /** @deprecated kept for compat — all FadeUps use whileInView with generous margin now */
  immediate?: boolean;
};

export function FadeUp({
  children,
  delay = 0,
  y = 24,
  once = true,
  immediate: _immediate,
  className,
  ...rest
}: Props) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0, margin: "200px 0px 200px 0px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
