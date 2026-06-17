import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Quote } from "lucide-react";
import { CASOS, getCaso } from "@/lib/casos-data";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/ui/Container";
import { FadeUp } from "@/components/motion/FadeUp";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { Magnetic } from "@/components/motion/Magnetic";
import { Button } from "@/components/ui/Button";

export function generateStaticParams() {
  return CASOS.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const caso = getCaso(slug);
  if (!caso) return { title: "Caso não encontrado" };
  return {
    title: `${caso.condicao} — Caso clínico | PetDerma`,
    description: caso.resumo,
    openGraph: { images: [{ url: caso.fotoAntesDepois || caso.fotoCard }] },
  };
}

export default async function CasoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const caso = getCaso(slug);
  if (!caso) notFound();

  const ficha = [
    ["Condição", caso.condicao],
    ...(caso.pet ? [["Pet", caso.pet] as [string, string]] : []),
    ...(caso.raca ? [["Raça", caso.raca] as [string, string]] : []),
    ...(caso.tempo ? [["Tempo de tratamento", caso.tempo] as [string, string]] : []),
    ...(caso.unidade ? [["Unidade", caso.unidade] as [string, string]] : []),
    ...(caso.profissional ? [["Responsável", caso.profissional] as [string, string]] : []),
  ];

  return (
    <>
      <PageHero
        eyebrow="Caso resolvido"
        title={<>{caso.condicao}</>}
        description={caso.resumo}
        crumbs={[{ label: "Início", href: "/" }, { label: "Casos", href: "/#casos" }, { label: caso.condicao }]}
      />

      <section className="py-12 md:py-16">
        <Container size="default">
          {/* Antes e depois + ficha */}
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <FadeUp>
              <figure className="overflow-hidden rounded-[2rem] shadow-float">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={caso.fotoAntesDepois || caso.fotoCard}
                    alt={`Antes e depois — ${caso.condicao}`}
                    fill
                    sizes="(min-width: 1024px) 560px, 90vw"
                    className="object-cover"
                    priority
                  />
                </div>
                <figcaption className="bg-white px-4 py-2.5 text-center text-sm font-medium text-brand-secondary">
                  Antes e depois do tratamento
                </figcaption>
              </figure>
            </FadeUp>

            <FadeUp delay={0.1} className="flex flex-col justify-center">
              {caso.tempo && (
                <span className="mb-3 inline-flex w-fit items-center gap-1.5 rounded-pill bg-brand-accent/15 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-accent">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-accent" />
                  Tratado em {caso.tempo}
                </span>
              )}
              <dl className="grid grid-cols-2 gap-3">
                {ficha.map(([k, v]) => (
                  <div key={k} className="rounded-2xl bg-brand-violet-soft/50 p-4">
                    <dt className="text-xs font-semibold uppercase tracking-wider text-brand-accent">{k}</dt>
                    <dd className="mt-1 font-display text-base font-bold text-brand-primary">{v}</dd>
                  </div>
                ))}
              </dl>
            </FadeUp>
          </div>

          {/* Corpo */}
          <div className="mx-auto mt-14 max-w-3xl space-y-5">
            <FadeUp>
              <h2 className="font-display text-2xl font-bold tracking-tight text-brand-primary">Sobre o caso</h2>
            </FadeUp>
            {caso.texto.map((p, i) => (
              <FadeUp key={i} delay={i * 0.04}>
                <p className="text-[17px] leading-relaxed text-brand-secondary">{p}</p>
              </FadeUp>
            ))}
          </div>

          {/* Depoimento */}
          {caso.depoimento && (
            <FadeUp className="mx-auto mt-14 max-w-3xl">
              <blockquote className="relative rounded-[2rem] bg-brand-primary p-8 text-white md:p-10">
                <Quote className="size-8 text-brand-accent" />
                <p className="mt-4 font-display text-xl leading-relaxed md:text-2xl">"{caso.depoimento.texto}"</p>
                <footer className="mt-5 text-sm text-white/70">— {caso.depoimento.autor}</footer>
              </blockquote>
            </FadeUp>
          )}

          {/* CTA */}
          <FadeUp className="mt-16 text-center">
            <h2 className="font-display text-2xl font-bold tracking-tight text-brand-primary md:text-3xl">
              Seu pet tem um caso parecido?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-brand-secondary">
              Cada protocolo é desenhado especificamente para o pet em questão. Fale com a gente e entenda o caso do seu.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <Magnetic>
                <WhatsAppCTA source={`caso-${caso.slug}`} size="lg" variant="dark">
                  Falar com um especialista
                </WhatsAppCTA>
              </Magnetic>
              <Button asChild size="lg" variant="ghost">
                <Link href="/#casos">
                  Ver outros casos
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </FadeUp>
        </Container>
      </section>
    </>
  );
}
