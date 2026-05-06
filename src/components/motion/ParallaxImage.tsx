"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { useRef } from "react";
import Image, { type ImageProps } from "next/image";

type Props = Omit<ImageProps, "src"> & {
  src: string;
  intensity?: number;
  containerClassName?: string;
};

export function ParallaxImage({
  src,
  alt,
  intensity = 12,
  containerClassName,
  className,
  ...rest
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [`-${intensity}%`, `${intensity}%`]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${containerClassName ?? ""}`}>
      <motion.div style={reduce ? undefined : { y }} className="absolute inset-0">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="100vw"
          className={`object-cover ${className ?? ""}`}
          style={{ scale: 1.15 }}
          {...rest}
        />
      </motion.div>
    </div>
  );
}
