"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeUp } from "@/components/motion/FadeUp";
import { Reveal } from "@/components/motion/Reveal";
import { Magnetic } from "@/components/motion/Magnetic";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";

export function CTAFinal() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-mint via-white to-brand-violet-soft py-20 md:py-24">
      {/* Animated conic gradient */}
      <motion.div
        aria-hidden
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute -top-1/2 left-1/2 -z-0 h-[200%] w-[200%] -translate-x-1/2 opacity-20"
        style={{
          background:
            "conic-gradient(from 0deg, transparent 0%, rgb(85 196 139 / 0.4) 25%, transparent 50%, rgb(187 152 253 / 0.4) 75%, transparent 100%)",
        }}
      />

      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 right-0 hidden lg:block"
      >
        <Image src="/design/right-paw-banner.png" alt="" width={300} height={300} className="opacity-20" />
      </div>

      <Container size="default" className="relative">
        <div className="mx-auto max-w-4xl text-center">
          <FadeUp>
            <div className="inline-flex items-center gap-2 rounded-pill border border-brand-primary/10 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-brand-primary shadow-soft backdrop-blur-sm">
              <Sparkles className="size-3.5 text-brand-accent" />
              Pronto para começar?
            </div>
          </FadeUp>

          <h2 className="mt-8 text-balance font-display text-4xl font-bold leading-[1.05] tracking-tight text-brand-primary md:text-6xl lg:text-7xl">
            <Reveal>O alívio do seu pet</Reveal>{" "}
            <Reveal delay={0.1}>está a</Reveal>{" "}
            <span className="relative inline-block">
              <Reveal delay={0.2}>
                <span className="relative z-10 text-brand-accent">um WhatsApp</span>
              </Reveal>
            </span>{" "}
            <Reveal delay={0.3}>de distância</Reveal>
          </h2>

          <FadeUp delay={0.5}>
            <p className="mx-auto mt-6 max-w-2xl text-balance text-lg leading-relaxed text-brand-secondary md:text-xl">
              Agende em qualquer uma das 3 unidades. Diagnóstico no local, tratamento
              personalizado e acompanhamento humanizado.
            </p>
          </FadeUp>

          <FadeUp delay={0.65} className="mt-10 flex flex-wrap justify-center gap-4">
            <Magnetic>
              <WhatsAppCTA source="cta-final" size="xl" variant="dark">
                Agendar minha consulta
              </WhatsAppCTA>
            </Magnetic>
          </FadeUp>

          <FadeUp delay={0.8}>
            <p className="mt-8 text-sm text-brand-secondary">
              Atendimento Seg–Sex 8h às 18h, Sáb 8h às 17h
            </p>
          </FadeUp>
        </div>
      </Container>
    </section>
  );
}
