"use client";

import Image from "next/image";
import { Quote, Star } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeUp } from "@/components/motion/FadeUp";
import { Stagger } from "@/components/motion/Stagger";

const DEPOIMENTOS = [
  {
    nome: "Camila Andrade",
    pet: "Mel — Golden",
    foto: "/photos/atendimento.jpg",
    texto:
      "Levei minha Mel em 4 veterinários antes de chegar na PetDerma. O Dr. Douglas identificou a causa da otite na primeira consulta. Em 3 semanas ela parou de balançar a cabeça.",
    estrelas: 5,
  },
  {
    nome: "Rafael Lima",
    pet: "Theo — Shih Tzu",
    foto: "/photos/equipe.jpg",
    texto:
      "Atendimento humanizado de verdade. Explicaram cada exame, cada protocolo. O Theo tinha alergia atópica e hoje está com a pele perfeita. Recomendo de olhos fechados.",
    estrelas: 5,
  },
  {
    nome: "Juliana Souza",
    pet: "Luna — SRD",
    foto: "/photos/clientes.jpg",
    texto:
      "Achei que a Luna ia perder os pelos pra sempre. A equipe me passou segurança desde a primeira consulta. O acompanhamento por WhatsApp faz toda diferença.",
    estrelas: 5,
  },
];

export function Depoimentos() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-brand-violet-soft py-20 md:py-24">
      <Container size="lg">
        <FadeUp className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-accent">
            Histórias de quem confia
          </span>
          <h2 className="mt-3 text-balance font-display text-4xl font-bold leading-tight tracking-tight text-brand-primary md:text-5xl lg:text-6xl">
            Tutores que viram seus pets{" "}
            <span className="text-brand-accent">se transformarem</span>
          </h2>
        </FadeUp>

        <Stagger
          staggerDelay={0.12}
          className="mt-10 grid gap-6 md:grid-cols-3"
        >
          {DEPOIMENTOS.map((d) => (
            <article
              key={d.nome}
              className="group relative flex h-full flex-col rounded-[1.75rem] bg-white p-8 shadow-soft ring-1 ring-brand-primary/5 transition-all duration-500 hover:-translate-y-1 hover:shadow-card"
            >
              <Quote className="size-10 text-brand-accent/30" strokeWidth={2} />

              <div className="mt-3 flex gap-1">
                {Array.from({ length: d.estrelas }).map((_, i) => (
                  <Star key={i} className="size-4 fill-brand-accent text-brand-accent" />
                ))}
              </div>

              <p className="mt-5 flex-1 text-[15px] leading-relaxed text-brand-secondary">
                "{d.texto}"
              </p>

              <div className="mt-6 flex items-center gap-3 border-t border-brand-primary/5 pt-5">
                <div className="relative h-12 w-12 overflow-hidden rounded-full bg-brand-accent/10 ring-2 ring-brand-accent/20">
                  <Image
                    src={d.foto}
                    alt={d.nome}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-brand-primary">{d.nome}</p>
                  <p className="text-xs text-brand-secondary">Tutora de {d.pet}</p>
                </div>
              </div>
            </article>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
