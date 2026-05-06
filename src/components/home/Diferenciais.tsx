"use client";

import { motion } from "motion/react";
import { FlaskConical, Microscope, Snowflake, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeUp } from "@/components/motion/FadeUp";
import { TiltCard } from "@/components/motion/TiltCard";
import { Stagger, staggerItem } from "@/components/motion/Stagger";

const ITEMS = [
  {
    icon: FlaskConical,
    titulo: "Exames realizados no local",
    descricao:
      "Citologia, raspado, otoscopia e cultura. Resultado em até 24h sem precisar enviar para laboratório externo.",
    accent: "bg-brand-accent",
  },
  {
    icon: Microscope,
    titulo: "Otoendoscopia / Videotoscopia",
    descricao:
      "Equipamento que permite visualizar todo o canal auditivo. Poucas clínicas em SP têm essa tecnologia.",
    accent: "bg-brand-lavender",
  },
  {
    icon: Snowflake,
    titulo: "Crioterapia + microagulhamento",
    descricao:
      "Tratamentos minimamente invasivos para lesões de pele e estímulo de regeneração.",
    accent: "bg-brand-coral",
  },
  {
    icon: MessageCircle,
    titulo: "Acompanhamento por WhatsApp",
    descricao:
      "Suporte direto pós-consulta para tirar dúvidas, ajustar tratamentos e enviar fotos da evolução.",
    accent: "bg-brand-accent-soft",
  },
];

export function Diferenciais() {
  return (
    <section className="relative overflow-hidden bg-brand-cream py-20 md:py-24">
      <Container size="lg">
        <FadeUp className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-accent">
            Por que PetDerma
          </span>
          <h2 className="mt-3 text-balance font-display text-4xl font-bold leading-tight tracking-tight text-brand-primary md:text-5xl lg:text-6xl">
            Não somos uma clínica geral.<br className="hidden sm:block" /> Somos{" "}
            <span className="text-brand-accent">referência em pele</span>
          </h2>
          <p className="mt-5 max-w-2xl text-lg text-brand-secondary">
            Equipamentos modernos + protocolos atualizados + atendimento humanizado. É isso que
            diferencia uma consulta dermatológica especializada.
          </p>
        </FadeUp>

        <Stagger
          staggerDelay={0.1}
          className="mt-12 grid gap-6 sm:grid-cols-2"
        >
          {ITEMS.map((item) => (
            <motion.div key={item.titulo} variants={staggerItem}>
              <TiltCard
                intensity={5}
                className="group relative h-full overflow-hidden rounded-[1.75rem] bg-white p-8 shadow-soft ring-1 ring-brand-primary/5 transition-shadow duration-500 hover:shadow-card"
              >
                {/* Accent glow */}
                <div
                  className={`absolute -right-20 -top-20 h-48 w-48 rounded-full ${item.accent} opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-30`}
                />

                <div className="relative">
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-primary text-brand-accent transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
                    <item.icon className="size-7" strokeWidth={1.75} />
                  </div>

                  <h3 className="mt-6 font-display text-2xl font-bold tracking-tight text-brand-primary">
                    {item.titulo}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-brand-secondary">
                    {item.descricao}
                  </p>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
