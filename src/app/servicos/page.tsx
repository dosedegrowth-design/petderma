import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Stethoscope, Microscope, Scan, Ear, Eye, FlaskConical, TestTube, Snowflake, Sparkles, Video } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/ui/Container";
import { FadeUp } from "@/components/motion/FadeUp";
import { Stagger } from "@/components/motion/Stagger";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { Magnetic } from "@/components/motion/Magnetic";
import { SERVICOS_DETAIL, SERVICOS_BASICOS } from "@/lib/services-data";

const ICONS = { Stethoscope, Microscope, Scan, Ear, Eye, FlaskConical, TestTube, Snowflake, Sparkles, Video };

export const metadata: Metadata = {
  title: "Serviços de Dermatologia Veterinária — Diagnóstico e Tratamento Especializado",
  description:
    "Conheça todos os serviços da PetDerma: consulta dermatológica, exames no local, otoendoscopia, crioterapia e tratamento especializado para pets em São Paulo.",
};

export default function ServicosPage() {
  return (
    <>
      <PageHero
        eyebrow="Nossos serviços"
        title={
          <>
            Tudo que seu pet precisa em{" "}
            <span className="text-brand-accent">um só lugar</span>
          </>
        }
        description="Da primeira consulta ao acompanhamento pós-tratamento. Todos os exames realizados no local, com resultado em até 24h."
        crumbs={[{ label: "Início", href: "/" }, { label: "Serviços" }]}
      />

      {/* Condições tratadas */}
      <section className="py-16 md:py-20">
        <Container size="lg">
          <FadeUp className="mb-10 max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-accent">
              Condições que tratamos
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-brand-primary md:text-4xl">
              Especialistas em casos dermatológicos complexos
            </h2>
            <p className="mt-4 text-base text-brand-secondary">
              Clique em cada condição para entender sintomas, diagnóstico e tratamento.
            </p>
          </FadeUp>

          <Stagger staggerDelay={0.08} className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {SERVICOS_DETAIL.map((s) => {
              const colorMap = {
                accent: { bg: "bg-brand-mint", text: "text-brand-accent" },
                lavender: { bg: "bg-brand-violet-soft", text: "text-brand-lavender" },
                coral: { bg: "bg-brand-cream", text: "text-brand-coral" },
                sky: { bg: "bg-brand-sky", text: "text-brand-primary" },
                cream: { bg: "bg-brand-cream-2", text: "text-brand-primary" },
              };
              const c = colorMap[s.cor];

              return (
                <Link
                  key={s.slug}
                  href={`/servicos/${s.slug}`}
                  className={`group relative block overflow-hidden rounded-[1.75rem] ${c.bg} p-7 ring-1 ring-brand-primary/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-card`}
                >
                  <h3 className={`font-display text-2xl font-bold leading-tight tracking-tight ${c.text}`}>
                    {s.shortName}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-brand-secondary">
                    {s.resumo}
                  </p>

                  <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-primary">
                    Saber mais
                    <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:rotate-12 group-hover:translate-x-0.5" />
                  </div>
                </Link>
              );
            })}
          </Stagger>
        </Container>
      </section>

      {/* Serviços/Exames */}
      <section className="bg-brand-violet-soft py-16 md:py-20">
        <Container size="lg">
          <FadeUp className="mb-10 max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-accent">
              Exames e procedimentos
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-brand-primary md:text-4xl">
              Tecnologia veterinária de ponta
            </h2>
            <p className="mt-4 text-base text-brand-secondary">
              Exames realizados no consultório com resultado rápido. Sem precisar enviar para laboratório externo.
            </p>
          </FadeUp>

          <Stagger staggerDelay={0.06} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICOS_BASICOS.map((s) => {
              const Icon = ICONS[s.icon as keyof typeof ICONS];
              return (
                <div
                  key={s.nome}
                  className="group rounded-2xl bg-white p-6 ring-1 ring-brand-primary/5 transition-all duration-500 hover:-translate-y-1 hover:shadow-card"
                >
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-primary text-brand-accent transition-transform duration-500 group-hover:scale-110">
                    <Icon className="size-6" strokeWidth={1.75} />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold tracking-tight text-brand-primary">
                    {s.nome}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-secondary">
                    {s.descricao}
                  </p>
                </div>
              );
            })}
          </Stagger>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20">
        <Container size="default" className="text-center">
          <FadeUp>
            <h2 className="font-display text-3xl font-bold tracking-tight text-brand-primary md:text-4xl">
              Não sabe qual serviço seu pet precisa?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-brand-secondary">
              Agende uma consulta de avaliação. Identificamos a condição e indicamos o protocolo correto.
            </p>
            <div className="mt-8 flex justify-center">
              <Magnetic>
                <WhatsAppCTA source="servicos-cta" size="lg" variant="dark">
                  Agendar avaliação
                </WhatsAppCTA>
              </Magnetic>
            </div>
          </FadeUp>
        </Container>
      </section>
    </>
  );
}
