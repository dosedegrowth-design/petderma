"use client";

import { useEffect, useState, useCallback } from "react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { X, ShieldCheck } from "lucide-react";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";

const STORAGE_KEY = "ptd_exit_intent_v1";

export function ExitIntentPopup() {
  const [open, setOpen] = useState(false);

  const dispara = useCallback(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(STORAGE_KEY)) return;
    sessionStorage.setItem(STORAGE_KEY, "1");
    setOpen(true);
    window.va?.("event", { name: "exit_intent_shown", source: "popup" });
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(STORAGE_KEY)) return;

    // Desktop: cursor saindo pelo topo da janela
    const onMouseOut = (e: MouseEvent) => {
      if (!e.relatedTarget && e.clientY <= 0) dispara();
    };

    // Mobile: scroll pra cima rápido depois de ter rolado (intenção de sair) + fallback por tempo
    let lastY = window.scrollY;
    let desceu = false;
    const onScroll = () => {
      const y = window.scrollY;
      if (y > 600) desceu = true;
      if (desceu && y < lastY - 12 && y < 300) dispara();
      lastY = y;
    };

    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    let timer: ReturnType<typeof setTimeout> | undefined;
    if (isTouch) {
      window.addEventListener("scroll", onScroll, { passive: true });
      timer = setTimeout(dispara, 40000); // fallback 40s no mobile
    } else {
      document.addEventListener("mouseout", onMouseOut);
    }

    return () => {
      document.removeEventListener("mouseout", onMouseOut);
      window.removeEventListener("scroll", onScroll);
      if (timer) clearTimeout(timer);
    };
  }, [dispara]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="absolute inset-0 bg-brand-primary/60 backdrop-blur-sm" onClick={() => setOpen(false)} />

          <motion.div
            className="relative z-10 w-full max-w-lg overflow-hidden rounded-[2rem] bg-white shadow-float"
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 12 }}
            transition={{ type: "spring", stiffness: 320, damping: 28 }}
          >
            <button
              onClick={() => setOpen(false)}
              aria-label="Fechar"
              className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-white/80 text-brand-primary shadow-soft transition hover:bg-white"
            >
              <X className="size-5" />
            </button>

            <div className="relative h-44 w-full overflow-hidden sm:h-52">
              <Image
                src="/photos/hero.jpg"
                alt="Especialista cuidando de um pet na PetDerma"
                fill
                sizes="512px"
                className="object-cover [object-position:center_35%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/15 to-transparent" />
            </div>

            <div className="px-7 pb-7 pt-2 sm:px-8 sm:pb-8">
              <span className="text-xs font-semibold uppercase tracking-widest text-brand-accent">
                Espera um segundinho 🐾
              </span>
              <h2 className="mt-2 font-display text-2xl font-bold leading-tight tracking-tight text-brand-primary sm:text-[28px]">
                Coceira, otite ou queda de pelo que não passa?
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-brand-secondary">
                Problemas de pele em cães e gatos quase nunca somem sozinhos — eles voltam, se
                agravam e o tratamento fica mais longo. Uma avaliação com um{" "}
                <strong className="font-semibold text-brand-primary">dermatologista veterinário</strong>{" "}
                encontra a causa real e evita que vire um problema crônico.
              </p>

              <div className="mt-5 flex flex-col gap-2.5">
                <WhatsAppCTA source="exit-intent-popup" size="lg" variant="dark" className="w-full justify-center">
                  Falar com um especialista
                </WhatsAppCTA>
                <button
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium text-brand-secondary transition hover:text-brand-primary"
                >
                  Agora não, obrigado
                </button>
              </div>

              <p className="mt-4 flex items-center justify-center gap-1.5 text-xs text-brand-secondary">
                <ShieldCheck className="size-3.5 text-brand-accent" />
                Sem compromisso · tire suas dúvidas pelo WhatsApp
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
