"use client";

import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { NAV_ITEMS, SITE } from "@/lib/constants";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { cn } from "@/lib/cn";

export function Header() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 24));

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled
            ? "border-b border-brand-primary/5 bg-white/85 backdrop-blur-xl shadow-[0_2px_24px_-12px_rgb(24_10_50/0.15)]"
            : "bg-transparent"
        )}
      >
        <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
          <Link href="/" className="relative flex items-center gap-2 transition-transform hover:scale-105">
            <Image
              src="/brand/logo.png"
              alt={SITE.name}
              width={220}
              height={75}
              priority
              className="h-14 w-auto md:h-16"
            />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="link-underline rounded-pill px-4 py-2 text-sm font-medium text-brand-primary/80 transition-colors hover:text-brand-primary"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <WhatsAppCTA source="header" size="sm" variant="dark">
              Agendar consulta
            </WhatsAppCTA>
          </div>

          <button
            onClick={() => setOpen(true)}
            className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-pill bg-brand-primary text-white transition-transform active:scale-90"
            aria-label="Abrir menu"
          >
            <Menu className="size-5" />
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={{ x: open ? 0 : "100%" }}
        transition={{ type: "spring", stiffness: 220, damping: 28 }}
        className="fixed inset-0 z-[55] lg:hidden"
        aria-hidden={!open}
      >
        <div
          className="absolute inset-0 bg-brand-primary/40 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
        <motion.aside
          initial={false}
          animate={{ x: open ? 0 : "100%" }}
          transition={{ type: "spring", stiffness: 220, damping: 28 }}
          className="absolute right-0 top-0 flex h-full w-[88%] max-w-sm flex-col bg-white p-6 shadow-2xl"
        >
          <div className="mb-8 flex items-center justify-between">
            <Image src="/brand/logo.png" alt={SITE.name} width={120} height={40} className="h-9 w-auto" />
            <button
              onClick={() => setOpen(false)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-pill border border-brand-primary/10 transition-transform active:scale-90"
              aria-label="Fechar menu"
            >
              <X className="size-5 text-brand-primary" />
            </button>
          </div>

          <nav className="flex flex-col gap-1">
            {NAV_ITEMS.map((item, i) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: open ? 1 : 0, x: open ? 0 : 24 }}
                transition={{ delay: open ? 0.15 + i * 0.06 : 0, duration: 0.4 }}
              >
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-4 py-4 text-2xl font-semibold tracking-tight text-brand-primary transition-colors hover:bg-brand-violet-soft"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </nav>

          <div className="mt-auto pt-8">
            <WhatsAppCTA source="mobile-menu" size="lg" variant="primary" className="w-full">
              Agendar pelo WhatsApp
            </WhatsAppCTA>
          </div>
        </motion.aside>
      </motion.div>
    </>
  );
}
