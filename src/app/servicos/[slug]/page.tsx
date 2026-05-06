import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CheckCircle2, AlertCircle, Stethoscope, ArrowRight, ArrowUpRight } from "lucide-react";
import * as Accordion from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/ui/Container";
import { FadeUp } from "@/components/motion/FadeUp";
import { Stagger } from "@/components/motion/Stagger";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { Magnetic } from "@/components/motion/Magnetic";
import { Button } from "@/components/ui/Button";
import { SERVICOS_DETAIL, type ServicoSlug } from "@/lib/services-data";
import { SITE } from "@/lib/constants";

export function generateStaticParams() {
  return SERVICOS_DETAIL.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const servico = SERVICOS_DETAIL.find((s) => s.slug === slug);
  if (!servico) return {};
  return {
    title: `${servico.nome} — Tratamento Especializado em SP`,
    description: servico.resumo,
  };
}

export default async function ServicoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const servico = SERVICOS_DETAIL.find((s) => s.slug === slug as ServicoSlug);
  if (!servico) notFound();

  const outrosServicos = SERVICOS_DETAIL.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow="Condição tratada"
        title={servico.hero}
        description={servico.resumo}
        crumbs={[
          { label: "Início", href: "/" },
          { label: "Serviços", href: "/servicos" },
          { label: servico.shortName },
        ]}
      >
        <FadeUp delay={0.2} className="mt-8 flex flex-wrap gap-3">
          <Magnetic>
            <WhatsAppCTA
              source={`servico-${servico.slug}-hero`}
              message={`Olá! Vim pelo site e gostaria de marcar uma consulta sobre ${servico.shortName} para meu pet.`}
              size="lg"
              variant="dark"
            >
              Agendar consulta
            </WhatsAppCTA>
          </Magnetic>
        </FadeUp>
      </PageHero>

      {/* Sintomas */}
      <section className="py-16 md:py-20">
        <Container size="lg">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <FadeUp className="lg:col-span-5">
              <span className="text-xs font-semibold uppercase tracking-widest text-brand-accent">
                Sintomas
              </span>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-brand-primary md:text-4xl">
                Reconheça os sinais no seu pet
              </h2>
              <p className="mt-4 text-base text-brand-secondary">
                Se seu pet apresenta um ou mais desses sintomas, é importante uma avaliação dermatológica.
              </p>
            </FadeUp>

            <Stagger staggerDelay={0.06} className="space-y-3 lg:col-span-7">
              {servico.sintomas.map((s, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 rounded-2xl bg-white p-5 ring-1 ring-brand-primary/5 transition-all hover:shadow-soft"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-coral/10">
                    <AlertCircle className="size-5 text-brand-coral" strokeWidth={2} />
                  </div>
                  <p className="pt-1.5 text-[15px] leading-relaxed text-brand-primary">{s}</p>
                </div>
              ))}
            </Stagger>
          </div>
        </Container>
      </section>

      {/* Diagnóstico */}
      <section className="bg-brand-violet-soft py-16 md:py-20">
        <Container size="lg">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <FadeUp className="lg:col-span-5">
              <span className="text-xs font-semibold uppercase tracking-widest text-brand-accent">
                Diagnóstico
              </span>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-brand-primary md:text-4xl">
                Como investigamos
              </h2>
              <p className="mt-4 text-base text-brand-secondary">
                Diagnóstico preciso é a base de qualquer tratamento bem-sucedido. Investigamos a causa raiz, não só os sintomas.
              </p>
            </FadeUp>

            <Stagger staggerDelay={0.06} className="space-y-3 lg:col-span-7">
              {servico.diagnostico.map((d, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 rounded-2xl bg-white p-5 ring-1 ring-brand-primary/5"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-accent/15">
                    <Stethoscope className="size-4 text-brand-accent" strokeWidth={2} />
                  </div>
                  <p className="pt-1.5 text-[15px] leading-relaxed text-brand-primary">{d}</p>
                </div>
              ))}
            </Stagger>
          </div>
        </Container>
      </section>

      {/* Tratamento */}
      <section className="bg-brand-primary py-16 text-white md:py-20">
        <Container size="lg">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <FadeUp className="lg:col-span-5">
              <span className="text-xs font-semibold uppercase tracking-widest text-brand-accent">
                Tratamento
              </span>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight md:text-4xl">
                Como tratamos
              </h2>
              <p className="mt-4 text-base text-white/70">
                Plano de tratamento personalizado para cada pet, com acompanhamento direto via WhatsApp.
              </p>
            </FadeUp>

            <Stagger staggerDelay={0.06} className="space-y-3 lg:col-span-7">
              {servico.tratamento.map((t, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 rounded-2xl bg-white/5 p-5 ring-1 ring-white/10"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-accent text-brand-primary">
                    <CheckCircle2 className="size-5" strokeWidth={2} />
                  </div>
                  <p className="pt-1.5 text-[15px] leading-relaxed text-white">{t}</p>
                </div>
              ))}
            </Stagger>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20">
        <Container size="default">
          <FadeUp className="mb-10 max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-accent">
              Perguntas frequentes
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-brand-primary md:text-4xl">
              Dúvidas mais comuns sobre {servico.shortName.toLowerCase()}
            </h2>
          </FadeUp>

          <Accordion.Root type="single" collapsible className="divide-y divide-brand-primary/10">
            {servico.faqs.map((item, i) => (
              <Accordion.Item key={i} value={`item-${i}`} className="group py-2">
                <Accordion.Header>
                  <Accordion.Trigger className="flex w-full items-start justify-between gap-6 py-5 text-left transition-colors hover:text-brand-accent">
                    <span className="font-display text-lg font-semibold tracking-tight text-brand-primary group-data-[state=open]:text-brand-accent">
                      {item.pergunta}
                    </span>
                    <Plus className="size-5 shrink-0 text-brand-primary transition-transform duration-300 group-data-[state=open]:rotate-45 group-data-[state=open]:text-brand-accent" />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="overflow-hidden text-[15px] leading-relaxed text-brand-secondary data-[state=closed]:animate-[accordion-up_200ms_ease-out] data-[state=open]:animate-[accordion-down_200ms_ease-out]">
                  <div className="pb-5 pr-12">{item.resposta}</div>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </Container>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: servico.faqs.map((q) => ({
                "@type": "Question",
                name: q.pergunta,
                acceptedAnswer: { "@type": "Answer", text: q.resposta },
              })),
            }),
          }}
        />
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-brand-mint via-white to-brand-violet-soft py-16 md:py-20">
        <Container size="default" className="text-center">
          <FadeUp>
            <h2 className="font-display text-3xl font-bold tracking-tight text-brand-primary md:text-4xl">
              Seu pet merece o melhor cuidado dermatológico
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-brand-secondary">
              Agende uma avaliação na unidade mais perto de você. Atendemos cães e gatos com casos complexos de pele.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Magnetic>
                <WhatsAppCTA
                  source={`servico-${servico.slug}-cta`}
                  message={`Olá! Vim pelo site e gostaria de agendar uma consulta sobre ${servico.shortName} para meu pet.`}
                  size="lg"
                  variant="dark"
                >
                  Agendar consulta
                </WhatsAppCTA>
              </Magnetic>
              <Button asChild size="lg" variant="ghost">
                <Link href="/casos">Ver casos resolvidos</Link>
              </Button>
            </div>
          </FadeUp>
        </Container>
      </section>

      {/* Outros serviços */}
      <section className="py-16 md:py-20">
        <Container size="lg">
          <FadeUp className="mb-10 max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-accent">
              Outros serviços
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-brand-primary md:text-4xl">
              Conheça outras condições que tratamos
            </h2>
          </FadeUp>

          <div className="grid gap-5 md:grid-cols-3">
            {outrosServicos.map((o) => (
              <Link
                key={o.slug}
                href={`/servicos/${o.slug}`}
                className="group block rounded-[1.5rem] bg-brand-violet-soft p-6 ring-1 ring-brand-primary/5 transition-all hover:-translate-y-1 hover:shadow-card"
              >
                <h3 className="font-display text-xl font-bold tracking-tight text-brand-primary">
                  {o.shortName}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-secondary">{o.resumo}</p>
                <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-primary">
                  Saber mais
                  <ArrowUpRight className="size-4 transition-transform group-hover:rotate-12" />
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
