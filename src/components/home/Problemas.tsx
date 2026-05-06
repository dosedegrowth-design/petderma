"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Hand, Ear, Droplet, Sparkles, Wind, Bug, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeUp } from "@/components/motion/FadeUp";
import { Stagger, staggerItem } from "@/components/motion/Stagger";

const ICONS = { Hand, Ear, Droplet, Sparkles, Wind, Bug };

const PROBLEMAS = [
  { icon: "Hand" as const, titulo: "Coceira excessiva", descricao: "Pet se coça ou lambe sem parar?", color: "bg-brand-cream", iconColor: "text-brand-coral" },
  { icon: "Ear" as const, titulo: "Otite recorrente", descricao: "Infecções de ouvido que voltam?", color: "bg-brand-mint", iconColor: "text-brand-accent" },
  { icon: "Droplet" as const, titulo: "Manchas e feridas", descricao: "Lesões na pele que não saram", color: "bg-brand-violet-soft", iconColor: "text-brand-lavender" },
  { icon: "Sparkles" as const, titulo: "Queda de pelo", descricao: "Falhas no pelo ou pelagem opaca", color: "bg-brand-sky", iconColor: "text-brand-primary" },
  { icon: "Wind" as const, titulo: "Mau cheiro", descricao: "Odor persistente na pele ou orelhas", color: "bg-brand-blush", iconColor: "text-brand-coral" },
  { icon: "Bug" as const, titulo: "Sarna e parasitas", descricao: "Pulgas, ácaros e infestações", color: "bg-brand-cream-2", iconColor: "text-brand-primary" },
];

export function Problemas() {
  return (
    <section id="servicos" className="relative py-24 md:py-32">
      <Container size="lg">
        <FadeUp className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-accent">
            Identifique o problema
          </span>
          <h2 className="mt-3 text-balance font-display text-4xl font-bold leading-tight tracking-tight text-brand-primary md:text-5xl lg:text-6xl">
            Esses sinais podem indicar que<br className="hidden sm:block" /> seu pet precisa de um{" "}
            <span className="text-brand-accent">dermatologista</span>
          </h2>
          <p className="mt-5 max-w-2xl text-lg text-brand-secondary">
            Problemas crônicos de pele exigem investigação profunda. A consulta veterinária geral
            nem sempre encontra a causa raiz.
          </p>
        </FadeUp>

        <Stagger
          staggerDelay={0.06}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {PROBLEMAS.map((p) => {
            const Icon = ICONS[p.icon];
            return (
              <motion.div key={p.titulo} variants={staggerItem}>
                <Link
                  href="#casos"
                  className="group relative block overflow-hidden rounded-[1.75rem] bg-white p-7 shadow-soft ring-1 ring-brand-primary/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-card"
                >
                  {/* Background fill on hover */}
                  <div
                    className={`absolute inset-0 ${p.color} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                  />
                  <div className="relative">
                    <div className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl ${p.color} transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                      <Icon className={`size-7 ${p.iconColor}`} strokeWidth={1.75} />
                    </div>

                    <h3 className="mt-5 font-display text-xl font-bold tracking-tight text-brand-primary">
                      {p.titulo}
                    </h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-brand-secondary">
                      {p.descricao}
                    </p>

                    <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-primary opacity-60 transition-opacity group-hover:opacity-100">
                      Saber mais
                      <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:rotate-12 group-hover:translate-x-0.5" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </Stagger>
      </Container>
    </section>
  );
}
