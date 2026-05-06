"use client";

import { motion, useReducedMotion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

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
  const ref = useRef<HTMLSpanElement>(null);
  const [hasMounted, setHasMounted] = useState(false);
  const inView = useInView(ref, { once: true, margin: "200px 0px 200px 0px" });

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (reduce) return <span className={className}>{children}</span>;

  const shouldAnimate = hasMounted;
  const animateY = !shouldAnimate || inView ? 0 : "110%";

  return (
    <span ref={ref} className={`inline-block overflow-hidden align-baseline ${className ?? ""}`}>
      <motion.span
        className="inline-block will-change-transform"
        initial={shouldAnimate ? { y: "110%" } : false}
        animate={{ y: animateY }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
      >
        {children}
      </motion.span>
    </span>
  );
}
