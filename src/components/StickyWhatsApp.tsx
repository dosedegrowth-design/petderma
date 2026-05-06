"use client";

import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { buildWhatsAppLink, trackWhatsAppClick } from "@/lib/whatsapp";

export function StickyWhatsApp() {
  const { scrollYProgress } = useScroll();
  const [show, setShow] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setShow(v > 0.15);
  });

  return (
    <motion.a
      href={buildWhatsAppLink({ source: "sticky" })}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackWhatsAppClick("sticky")}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: show ? 1 : 0, opacity: show ? 1 : 0 }}
      transition={{ type: "spring", stiffness: 200, damping: 18 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_40px_-8px_rgb(37_211_102/0.6)] sm:bottom-8 sm:right-8 sm:h-16 sm:w-16"
      aria-label="Abrir WhatsApp"
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-30" />
      <MessageCircle className="relative size-7 sm:size-8" />
    </motion.a>
  );
}
