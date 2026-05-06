"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeUp } from "@/components/motion/FadeUp";
import { UNIDADES, type UnidadeSlug } from "@/lib/constants";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { cn } from "@/lib/cn";

export function Unidades() {
  const [active, setActive] = useState<UnidadeSlug>(UNIDADES[0].slug);
  const current = UNIDADES.find((u) => u.slug === active)!;

  return (
    <section id="unidades" className="relative overflow-hidden bg-brand-primary py-20 text-white md:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -right-40 h-[500px] w-[500px] rounded-full bg-brand-accent/15 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -left-40 h-[400px] w-[400px] rounded-full bg-brand-lavender/15 blur-3xl"
      />

      <Container size="lg" className="relative">
        <FadeUp className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-accent">
            Onde estamos
          </span>
          <h2 className="mt-3 text-balance font-display text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
            3 unidades para cuidar do seu<br className="hidden sm:block" /> pet pertinho de você
          </h2>
        </FadeUp>

        <div className="mt-10 grid gap-8 lg:grid-cols-12 lg:gap-12 lg:items-start">
          {/* Tabs — sticky on desktop */}
          <div className="lg:col-span-4 lg:sticky lg:top-24 lg:self-start">
            <div className="flex flex-col gap-3">
              {UNIDADES.map((u) => {
                const isActive = u.slug === active;
                return (
                  <button
                    key={u.slug}
                    onClick={() => setActive(u.slug)}
                    className={cn(
                      "group relative w-full overflow-hidden rounded-2xl px-6 py-5 text-left transition-all duration-500",
                      isActive
                        ? "bg-brand-accent text-brand-primary shadow-[0_12px_40px_-8px_rgb(85_196_139/0.5)]"
                        : "bg-white/5 text-white hover:bg-white/10"
                    )}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeUnidade"
                        className="absolute inset-0 bg-brand-accent"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                    <div className="relative">
                      <p className={cn("text-xs font-bold uppercase tracking-widest", isActive ? "text-brand-primary/70" : "text-brand-accent")}>
                        {u.cidade}
                      </p>
                      <p className="mt-1 font-display text-2xl font-bold tracking-tight">
                        {u.nome}
                      </p>
                      <p className={cn("mt-1 text-sm", isActive ? "text-brand-primary/80" : "text-white/60")}>
                        {u.endereco}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Detail */}
          <motion.div
            key={current.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-8"
          >
            <div className="overflow-hidden rounded-[1.75rem] bg-white/5 ring-1 ring-white/10 backdrop-blur-sm">
              <div className="aspect-[16/9] w-full">
                <iframe
                  key={current.mapEmbed}
                  src={current.mapEmbed}
                  className="h-full w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Mapa unidade ${current.nome}`}
                />
              </div>

              <div className="p-8">
                <div className="grid gap-6 sm:grid-cols-3">
                  <InfoBlock icon={<MapPin className="size-5" />} label="Endereço">
                    {current.endereco}
                    <br />
                    {current.cidade} — {current.cep}
                  </InfoBlock>
                  <InfoBlock icon={<Phone className="size-5" />} label="Telefone">
                    <a href={`tel:+${current.telefone}`} className="hover:text-brand-accent">
                      {current.telefoneDisplay}
                    </a>
                  </InfoBlock>
                  <InfoBlock icon={<Clock className="size-5" />} label="Horário">
                    {current.horario.semana}
                    <br />
                    {current.horario.sabado}
                  </InfoBlock>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <WhatsAppCTA
                    source={`unidades-${current.slug}`}
                    unidade={current.slug}
                    size="md"
                    variant="primary"
                  >
                    Agendar nessa unidade
                  </WhatsAppCTA>
                  <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                      `${current.endereco}, ${current.cidade}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-12 items-center gap-2 rounded-pill border border-white/20 px-6 text-sm font-semibold text-white transition-all hover:border-brand-accent hover:bg-brand-accent hover:text-brand-primary"
                  >
                    <Navigation className="size-4" />
                    Traçar rota
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

function InfoBlock({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex items-center gap-2 text-brand-accent">
        {icon}
        <span className="text-xs font-semibold uppercase tracking-widest">{label}</span>
      </div>
      <p className="mt-2 text-sm leading-relaxed text-white/80">{children}</p>
    </div>
  );
}
