"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeUp } from "@/components/motion/FadeUp";
import { Stagger } from "@/components/motion/Stagger";
import { CASOS } from "@/lib/casos-data";

export function Casos() {
  return (
    <section id="casos" className="relative overflow-hidden py-20 md:py-24">
      <Container size="lg">
        <div className="flex flex-col items-center gap-6 md:flex-row md:items-end md:justify-between">
          <FadeUp className="max-w-2xl text-center md:text-left">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-accent">
              Casos resolvidos
            </span>
            <h2 className="mt-3 text-balance font-display text-4xl font-bold leading-tight tracking-tight text-brand-primary md:text-5xl lg:text-6xl">
              Resultados reais de pets que<br className="hidden sm:block" /> voltaram a{" "}
              <span className="text-brand-accent">brilhar</span>
            </h2>
          </FadeUp>
          <FadeUp delay={0.1} className="text-center md:text-left">
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
            <Link
              key={caso.slug}
              href={`/casos/${caso.slug}`}
              className="group relative block overflow-hidden rounded-[1.5rem] bg-brand-violet-soft focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={caso.fotoCard}
                  alt={`Caso de ${caso.condicao} — ${caso.pet}, ${caso.raca}`}
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

                {/* Seta hover */}
                <div className="absolute right-4 top-4 flex h-9 w-9 translate-y-1 items-center justify-center rounded-full bg-brand-accent text-brand-primary opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <ArrowUpRight className="size-5" strokeWidth={2} />
                </div>

                {/* Bottom info */}
                <div className="absolute inset-x-4 bottom-4 text-white">
                  <h3 className="font-display text-xl font-bold leading-tight">{caso.condicao}</h3>
                  <p className="mt-1 text-sm text-white/80">{caso.pet} — {caso.raca}</p>
                  <span className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-brand-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Ver o caso completo
                  </span>
                </div>
              </div>
            </Link>
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
