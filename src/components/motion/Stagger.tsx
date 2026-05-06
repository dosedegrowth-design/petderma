"use client";

import { motion, useReducedMotion, useInView } from "motion/react";
import { Children, useEffect, useRef, useState } from "react";

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
  const ref = useRef<HTMLDivElement>(null);
  const [hasMounted, setHasMounted] = useState(false);
  const inView = useInView(ref, { once: true, margin: "200px 0px 200px 0px" });
  const arr = Children.toArray(children);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const shouldAnimate = hasMounted && !reduce;

  return (
    <div ref={ref} className={className}>
      {arr.map((child, i) => {
        const isVisible = !shouldAnimate || inView;
        return (
          <motion.div
            key={i}
            initial={shouldAnimate ? { opacity: 0, y: 16 } : false}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 16 }}
            transition={{
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
              delay: baseDelay + i * staggerDelay,
            }}
          >
            {child}
          </motion.div>
        );
      })}
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
