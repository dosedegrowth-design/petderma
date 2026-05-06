"use client";

import { motion, useReducedMotion, useInView, type HTMLMotionProps } from "motion/react";
import { useRef, useState, useEffect } from "react";

type Props = HTMLMotionProps<"div"> & {
  delay?: number;
  y?: number;
  /** @deprecated kept for compat */
  immediate?: boolean;
  /** @deprecated kept for compat */
  once?: boolean;
};

export function FadeUp({
  children,
  delay = 0,
  y = 24,
  immediate: _immediate,
  once: _once,
  className,
  ...rest
}: Props) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const [hasMounted, setHasMounted] = useState(false);
  const inView = useInView(ref, { once: true, margin: "200px 0px 200px 0px" });

  useEffect(() => {
    setHasMounted(true);
  }, []);

  // SSR / before mount: render visible (don't hide content from SEO/no-JS)
  // After mount: animate from initial to final state when in view
  const shouldAnimate = hasMounted && !reduce;
  const animateTo = !shouldAnimate || inView ? { opacity: 1, y: 0 } : { opacity: 0, y };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={shouldAnimate ? { opacity: 0, y } : false}
      animate={animateTo}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
