"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { FadeUp } from "@/components/motion/FadeUp";
import { Counter } from "@/components/motion/Counter";
import { Magnetic } from "@/components/motion/Magnetic";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { STATS } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-violet-soft via-white to-brand-mint pt-32 pb-20 md:pt-40 md:pb-28 lg:pt-44">
      {/* Decorative blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -left-40 h-[500px] w-[500px] rounded-full bg-brand-accent-soft/30 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-40 right-0 h-[400px] w-[400px] rounded-full bg-brand-lavender/20 blur-3xl"
      />

      {/* Floating decoration */}
      <motion.div
        aria-hidden
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute right-[8%] top-32 hidden lg:block"
      >
        <Image src="/design/lined-circle.png" alt="" width={140} height={140} className="opacity-60" />
      </motion.div>
      <motion.div
        aria-hidden
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[6%] bottom-32 hidden lg:block"
      >
        <Image src="/design/sparkle.png" alt="" width={80} height={80} />
      </motion.div>

      <Container size="lg" className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 rounded-pill border border-brand-primary/10 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-brand-primary shadow-soft backdrop-blur-sm"
            >
              <Sparkles className="size-3.5 text-brand-accent" />
              Especialistas em Dermatologia Veterinária
            </motion.div>

            <h1 className="mt-6 text-balance font-display text-[clamp(2.25rem,5.5vw,4.5rem)] font-bold leading-[1.05] tracking-tight text-brand-primary">
              <Reveal>Seu pet coça,</Reveal>{" "}
              <Reveal delay={0.1}>lambe ou tem</Reveal>
              <br className="hidden sm:block" />{" "}
              <span className="relative inline-block">
                <Reveal delay={0.2}>
                  <span className="relative z-10 text-brand-accent">feridas que não saram?</span>
                </Reveal>
                <motion.svg
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 1.2, ease: "easeInOut" }}
                  className="absolute -bottom-2 left-0 z-0 h-3 w-full"
                  viewBox="0 0 300 12"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <motion.path
                    d="M2 8 Q 75 2 150 6 T 298 4"
                    stroke="#8CE1C9"
                    strokeWidth="6"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.2, delay: 1, ease: [0.22, 1, 0.36, 1] }}
                  />
                </motion.svg>
              </span>
            </h1>

            <FadeUp delay={0.4}>
              <p className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-brand-secondary md:text-xl">
                Há <strong className="font-semibold text-brand-primary">12 anos</strong> resolvemos os
                casos dermatológicos mais complexos de SP. Diagnóstico no mesmo dia, tratamento
                direcionado e alívio rápido.
              </p>
            </FadeUp>

            <FadeUp delay={0.55} className="mt-8 flex flex-wrap items-center gap-4">
              <Magnetic>
                <WhatsAppCTA source="hero" size="lg" variant="dark">
                  Agendar consulta
                </WhatsAppCTA>
              </Magnetic>
              <Button asChild size="lg" variant="ghost">
                <a href="#casos">
                  Ver casos resolvidos
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </FadeUp>

            {/* Trust bar */}
            <FadeUp delay={0.7}>
              <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-4">
                {STATS.map((s) => (
                  <div key={s.label}>
                    <div className="font-display text-3xl font-bold tracking-tight text-brand-primary md:text-4xl">
                      <Counter to={s.numero} suffix={s.sufixo} />
                    </div>
                    <div className="mt-1 text-xs uppercase tracking-wider text-brand-secondary">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>

          {/* Image */}
          <div className="relative lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.92, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative aspect-[4/5] w-full max-w-md mx-auto"
            >
              <div className="absolute inset-0 -rotate-3 rounded-[2rem] bg-brand-accent" />
              <div className="absolute inset-0 rotate-2 rounded-[2rem] bg-brand-lavender opacity-40" />
              <div className="relative h-full w-full overflow-hidden rounded-[2rem] shadow-float">
                <Image
                  src="/photos/hero.jpg"
                  alt="Veterinário dermatologista atendendo um pet"
                  fill
                  sizes="(min-width: 1024px) 480px, 90vw"
                  priority
                  className="object-cover"
                />
              </div>

              {/* Floating card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="absolute -bottom-6 -left-6 max-w-[200px] rounded-2xl bg-white p-4 shadow-card sm:-left-10"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-accent/15">
                    <Sparkles className="size-5 text-brand-accent" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-brand-secondary">
                      Resultado
                    </p>
                    <p className="text-sm font-bold text-brand-primary">em até 24h</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating badge top */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4, duration: 0.5, type: "spring" }}
                className="absolute -top-4 -right-4 flex h-20 w-20 items-center justify-center rounded-full bg-brand-primary text-center text-[10px] font-bold uppercase leading-tight tracking-wider text-white shadow-card"
              >
                CRMV<br />SP
              </motion.div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
