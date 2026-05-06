"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { FadeUp } from "@/components/motion/FadeUp";
import { Stagger } from "@/components/motion/Stagger";

const CASOS = [
  {
    foto: "/photos/consultorio-1.jpg",
    condicao: "Otite crônica",
    pet: "Mel — Golden Retriever",
    tempo: "3 semanas",
  },
  {
    foto: "/photos/consultorio-2.jpg",
    condicao: "Dermatite atópica",
    pet: "Theo — Shih Tzu",
    tempo: "2 meses",
  },
  {
    foto: "/photos/consultorio-3.jpg",
    condicao: "Sarna demodícica",
    pet: "Luna — SRD",
    tempo: "6 semanas",
  },
  {
    foto: "/photos/consultorio-4.jpg",
    condicao: "Pioderma profundo",
    pet: "Bento — Bulldog",
    tempo: "4 semanas",
  },
];

export function Casos() {
  return (
    <section id="casos" className="relative overflow-hidden py-20 md:py-24">
      <Container size="lg">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <FadeUp className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-accent">
              Casos resolvidos
            </span>
            <h2 className="mt-3 text-balance font-display text-4xl font-bold leading-tight tracking-tight text-brand-primary md:text-5xl lg:text-6xl">
              Resultados reais de pets que<br className="hidden sm:block" /> voltaram a{" "}
              <span className="text-brand-accent">brilhar</span>
            </h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="text-lg text-brand-secondary md:max-w-xs">
              Cada caso é único. Cada protocolo é desenhado especificamente para o pet em
              questão.
            </p>
          </FadeUp>
        </div>

        <Stagger
          staggerDelay={0.1}
          className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {CASOS.map((caso) => (
            <article
              key={caso.condicao + caso.pet}
              className="group relative overflow-hidden rounded-[1.5rem] bg-brand-violet-soft"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={caso.foto}
                  alt={`Caso de ${caso.condicao} — ${caso.pet}`}
                  fill
                  sizes="(min-width: 1024px) 280px, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/85 via-brand-primary/30 to-transparent" />

                {/* Badge */}
                <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-pill bg-white/95 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-brand-primary backdrop-blur-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-accent" />
                  Tratado em {caso.tempo}
                </div>

                {/* Bottom info */}
                <div className="absolute inset-x-4 bottom-4 text-white">
                  <h3 className="font-display text-xl font-bold leading-tight">{caso.condicao}</h3>
                  <p className="mt-1 text-sm text-white/80">{caso.pet}</p>
                </div>
              </div>
            </article>
          ))}
        </Stagger>

        <FadeUp delay={0.3} className="mt-12 flex justify-center">
          <p className="rounded-pill border border-brand-primary/10 bg-white px-6 py-3 text-sm text-brand-secondary shadow-soft">
            <strong className="text-brand-primary">+ casos publicados</strong> com consentimento
            dos tutores. Atualizado semanalmente.
          </p>
        </FadeUp>
      </Container>
    </section>
  );
}
