"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, Sparkles, Star } from "lucide-react";
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
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-violet-soft via-white to-brand-mint pb-16 pt-28 md:pb-20 md:pt-32 lg:pt-36">
      {/* Decorative blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 -top-32 h-[500px] w-[500px] rounded-full bg-brand-accent-soft/30 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-40 h-[400px] w-[400px] rounded-full bg-brand-lavender/20 blur-3xl"
      />

      {/* Floating decoration */}
      <motion.div
        aria-hidden
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute right-[6%] top-28 hidden lg:block"
      >
        <Image src="/design/lined-circle.png" alt="" width={120} height={120} className="opacity-50" />
      </motion.div>
      <motion.div
        aria-hidden
        animate={{ y: [0, -16, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-32 left-[5%] hidden lg:block"
      >
        <Image src="/design/sparkle.png" alt="" width={64} height={64} />
      </motion.div>

      <Container size="lg" className="relative">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0, margin: "200px 0px 200px 0px" }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="inline-flex items-center gap-2 rounded-pill border border-brand-primary/10 bg-white/80 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-brand-primary shadow-soft backdrop-blur-sm"
            >
              <Sparkles className="size-3 text-brand-accent" />
              Especialistas em Dermatologia Veterinária
            </motion.div>

            <h1 className="mt-5 text-balance font-display text-[clamp(2rem,5vw,4rem)] font-bold leading-[1.05] tracking-tight text-brand-primary">
              <Reveal>Seu pet coça,</Reveal>{" "}
              <Reveal delay={0.08}>lambe ou tem</Reveal>
              <br className="hidden sm:block" />{" "}
              <span className="relative inline-block">
                <Reveal delay={0.16}>
                  <span className="relative z-10 text-brand-accent">feridas que não saram?</span>
                </Reveal>
                <motion.svg
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, amount: 0, margin: "200px 0px 200px 0px" }}
                  transition={{ delay: 1, duration: 0.3 }}
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
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true, amount: 0, margin: "200px 0px 200px 0px" }}
                    transition={{ duration: 1.1, delay: 1, ease: [0.22, 1, 0.36, 1] }}
                  />
                </motion.svg>
              </span>
            </h1>

            <FadeUp delay={0.35} immediate>
              <p className="mt-5 max-w-xl text-balance text-base leading-relaxed text-brand-secondary md:text-lg">
                Há <strong className="font-semibold text-brand-primary">12 anos</strong> resolvemos os
                casos dermatológicos mais complexos de SP. Diagnóstico no mesmo dia, tratamento
                direcionado e alívio rápido.
              </p>
            </FadeUp>

            <FadeUp delay={0.5} immediate className="mt-7 flex flex-wrap items-center gap-3">
              <Magnetic>
                <WhatsAppCTA source="hero" size="lg" variant="dark">
                  Agendar consulta
                </WhatsAppCTA>
              </Magnetic>
              <Button asChild size="lg" variant="ghost">
                <Link href="/casos">
                  Ver casos resolvidos
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </FadeUp>

            {/* Quick social proof under CTA */}
            <FadeUp delay={0.65} immediate className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-brand-secondary">
              <div className="flex items-center gap-1.5">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-4 fill-brand-accent text-brand-accent" />
                  ))}
                </div>
                <span className="font-semibold text-brand-primary">4.9</span>
                <span>· avaliação dos tutores</span>
              </div>
              <span className="hidden h-1 w-1 rounded-full bg-brand-secondary/40 sm:inline-block" />
              <span>
                <strong className="font-semibold text-brand-primary">3 unidades</strong> em SP
              </span>
            </FadeUp>

            {/* Stats bar — compact */}
            <FadeUp delay={0.78} immediate>
              <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-brand-primary/10 pt-7 sm:grid-cols-4">
                {STATS.map((s) => (
                  <div key={s.label}>
                    <div className="font-display text-2xl font-bold tracking-tight text-brand-primary md:text-3xl">
                      <Counter to={s.numero} suffix={s.sufixo} />
                    </div>
                    <div className="mt-1 text-[11px] font-medium uppercase tracking-wider text-brand-secondary">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>

          {/* Image */}
          <div className="relative lg:col-span-5">
            <div className="relative mx-auto aspect-[5/6] w-full max-w-[460px]">
              <div className="absolute inset-0 -rotate-3 rounded-[2rem] bg-brand-accent" />
              <div className="absolute inset-0 rotate-2 rounded-[2rem] bg-brand-lavender opacity-40" />
              <div className="relative h-full w-full overflow-hidden rounded-[2rem] shadow-float">
                <Image
                  src="/photos/hero-real.jpg"
                  alt="Equipe PetDerma atendendo um pet com carinho"
                  fill
                  sizes="(min-width: 1024px) 460px, 90vw"
                  priority
                  className="object-cover"
                />
              </div>

              {/* Floating card — Experience */}
              <div className="absolute -left-4 -top-4 max-w-[220px] rounded-2xl bg-white p-3.5 shadow-card sm:-left-8 sm:-top-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-accent text-brand-primary">
                    <span className="font-display text-lg font-bold">12+</span>
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-brand-secondary">
                      Anos
                    </p>
                    <p className="text-sm font-bold text-brand-primary">de experiência</p>
                  </div>
                </div>
              </div>

              {/* Floating card — Pets */}
              <div className="absolute -bottom-6 -left-4 max-w-[220px] rounded-2xl bg-white p-3.5 shadow-card sm:-left-8">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-lavender/20 text-brand-lavender">
                    <Sparkles className="size-5" strokeWidth={2} />
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-brand-secondary">
                      +3.500 pets
                    </p>
                    <p className="text-sm font-bold text-brand-primary">tratados</p>
                  </div>
                </div>
              </div>

              {/* Floating card — Exames no local */}
              <div className="absolute -right-4 top-1/3 max-w-[220px] rounded-2xl bg-brand-primary p-3.5 text-white shadow-card sm:-right-10">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-accent text-brand-primary">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="size-5">
                      <path d="M9 2v6l-4 8a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4l-4-8V2" />
                      <path d="M9 2h6" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-brand-accent">
                      Exames
                    </p>
                    <p className="text-sm font-bold text-white">realizados no local</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
