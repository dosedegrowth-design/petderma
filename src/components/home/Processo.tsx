"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Stethoscope, FlaskConical, ClipboardCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeUp } from "@/components/motion/FadeUp";

const STEPS = [
  {
    numero: "01",
    icon: Stethoscope,
    titulo: "Avaliação clínica",
    descricao: "Anamnese detalhada, exame físico completo e identificação dos sintomas.",
  },
  {
    numero: "02",
    icon: FlaskConical,
    titulo: "Diagnóstico no local",
    descricao: "Citologia, raspado, otoscopia e cultura realizados no consultório. Resultado em até 24h.",
  },
  {
    numero: "03",
    icon: ClipboardCheck,
    titulo: "Plano personalizado",
    descricao: "Tratamento direcionado, follow-up e acompanhamento via WhatsApp.",
  },
];

export function Processo() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 60%"],
  });
  const lineProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="sobre" className="relative overflow-hidden bg-brand-primary py-20 text-white md:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-brand-accent/15 blur-3xl"
      />

      <Container size="lg" className="relative">
        <FadeUp className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-accent">
            Como funciona
          </span>
          <h2 className="mt-3 text-balance font-display text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
            Do primeiro sintoma ao{" "}
            <span className="text-brand-accent">alívio do seu pet</span>
          </h2>
          <p className="mt-5 text-lg text-white/70">
            Um processo claro, direto e baseado em evidências.
          </p>
        </FadeUp>

        <div ref={ref} className="relative mt-14">
          {/* Connector line - desktop */}
          <div className="absolute left-0 right-0 top-12 hidden h-0.5 lg:block">
            <div className="absolute inset-0 bg-white/10" />
            <motion.div
              style={{ scaleX: lineProgress, transformOrigin: "left" }}
              className="absolute inset-0 bg-gradient-to-r from-brand-accent via-brand-accent-soft to-brand-lavender"
            />
          </div>

          <div className="grid gap-12 lg:grid-cols-3 lg:gap-8">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.numero}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                {/* Numbered circle */}
                <div className="relative z-10 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-brand-accent to-brand-accent-soft text-brand-primary shadow-[0_20px_50px_-12px_rgb(85_196_139/0.5)]">
                  <step.icon className="size-10" strokeWidth={1.75} />
                  <div className="absolute -right-1 -top-1 flex h-9 w-9 items-center justify-center rounded-full bg-brand-primary text-xs font-bold text-brand-accent ring-4 ring-brand-primary">
                    {step.numero}
                  </div>
                </div>

                <h3 className="mt-8 font-display text-2xl font-bold tracking-tight">
                  {step.titulo}
                </h3>
                <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-white/65">
                  {step.descricao}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
