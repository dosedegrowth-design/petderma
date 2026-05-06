import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, AlertCircle, Stethoscope, ArrowUpRight, Sparkles, ArrowRight } from "lucide-react";
import * as Accordion from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeUp } from "@/components/motion/FadeUp";
import { Stagger } from "@/components/motion/Stagger";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { Magnetic } from "@/components/motion/Magnetic";
import { Button } from "@/components/ui/Button";
import { SERVICOS_DETAIL, type ServicoSlug } from "@/lib/services-data";

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
    title: `${servico.nome} — Dermatologia Veterinária em SP`,
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

  const outrosServicos = SERVICOS_DETAIL.filter(
    (s) => s.slug !== slug && s.categoria === servico.categoria
  ).slice(0, 3);

  // Fallback to other categories if not enough
  const recommendedFill = SERVICOS_DETAIL.filter(
    (s) => s.slug !== slug && !outrosServicos.some((o) => o.slug === s.slug)
  ).slice(0, 3 - outrosServicos.length);

  const sugestoes = [...outrosServicos, ...recommendedFill];

  return (
    <>
      {/* Hero with image */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-violet-soft via-white to-brand-mint pt-24 md:pt-32">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-brand-accent-soft/30 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-40 top-20 h-[400px] w-[400px] rounded-full bg-brand-lavender/20 blur-3xl"
        />

        <Container size="lg" className="relative">
          <nav
            aria-label="Breadcrumb"
            className="mb-6 flex flex-wrap items-center gap-1.5 text-xs font-medium text-brand-secondary"
          >
            <Link href="/" className="transition-colors hover:text-brand-primary">Início</Link>
            <span>›</span>
            <Link href="/servicos" className="transition-colors hover:text-brand-primary">Serviços</Link>
            <span>›</span>
            <span className="text-brand-primary">{servico.shortName}</span>
          </nav>

          <div className="grid gap-12 pb-16 lg:grid-cols-12 lg:gap-16 lg:pb-20">
            <div className="lg:col-span-7">
              <FadeUp>
                <div className="inline-flex items-center gap-2 rounded-pill border border-brand-primary/10 bg-white/80 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-brand-primary shadow-soft backdrop-blur-sm">
                  <Sparkles className="size-3 text-brand-accent" />
                  {servico.categoria === "condicao"
                    ? "Condição tratada"
                    : servico.categoria === "exame"
                    ? "Exame diagnóstico"
                    : servico.categoria === "otologia"
                    ? "Avaliação otológica"
                    : "Tratamento"}
                </div>

                <h1 className="mt-5 text-balance font-display text-4xl font-bold leading-[1.05] tracking-tight text-brand-primary md:text-5xl lg:text-6xl">
                  {servico.hero}
                </h1>
              </FadeUp>

              <FadeUp delay={0.1}>
                <p className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-brand-secondary">
                  {servico.resumo}
                </p>
              </FadeUp>

              <FadeUp delay={0.2} className="mt-8 flex flex-wrap gap-3">
                <Magnetic>
                  <WhatsAppCTA
                    source={`servico-${servico.slug}-hero`}
                    message={`Olá! Vim pelo site e gostaria de saber mais sobre ${servico.shortName} para meu pet.`}
                    size="lg"
                    variant="dark"
                  >
                    Agendar consulta
                  </WhatsAppCTA>
                </Magnetic>
                <Button asChild size="lg" variant="ghost">
                  <Link href="#detalhes">
                    Ver detalhes
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
              </FadeUp>

              {/* Quick info */}
              <FadeUp delay={0.3}>
                <div className="mt-10 rounded-[1.5rem] border border-brand-accent/20 bg-brand-mint p-5">
                  <div className="text-xs font-bold uppercase tracking-widest text-brand-accent">
                    Quando é indicado
                  </div>
                  <p className="mt-2 text-[15px] leading-relaxed text-brand-primary">
                    {servico.quandoIndicado}
                  </p>
                </div>
              </FadeUp>
            </div>

            {/* Hero image with floating icon */}
            <div className="relative lg:col-span-5">
              <FadeUp delay={0.15}>
                <div className="relative mx-auto aspect-[4/5] w-full max-w-[460px]">
                  <div className="absolute inset-0 -rotate-3 rounded-[2rem] bg-brand-accent" />
                  <div className="absolute inset-0 rotate-2 rounded-[2rem] bg-brand-lavender opacity-40" />
                  <div className="relative h-full w-full overflow-hidden rounded-[2rem] shadow-float">
                    <Image
                      src={servico.foto}
                      alt={servico.nome}
                      fill
                      sizes="(min-width: 1024px) 460px, 90vw"
                      priority
                      className="object-cover"
                    />
                  </div>

                  {/* Icon badge */}
                  <div className="absolute -left-6 top-1/2 flex h-24 w-24 -translate-y-1/2 items-center justify-center rounded-3xl bg-white p-4 shadow-float sm:-left-10 sm:h-28 sm:w-28">
                    <Image src={servico.icone} alt="" width={80} height={80} className="object-contain" />
                  </div>
                </div>
              </FadeUp>
            </div>
          </div>
        </Container>
      </section>

      {/* Sintomas (only for condicao) */}
      {servico.sintomas && servico.sintomas.length > 0 && (
        <section id="detalhes" className="bg-white py-16 md:py-20">
          <Container size="lg">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
              <FadeUp className="lg:col-span-5">
                <span className="text-xs font-semibold uppercase tracking-widest text-brand-accent">
                  Sintomas
                </span>
                <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-brand-primary md:text-4xl">
                  Reconheça os sinais no seu pet
                </h2>
                <p className="mt-4 text-base leading-relaxed text-brand-secondary">
                  Se seu pet apresenta um ou mais desses sinais, é importante uma avaliação dermatológica especializada.
                </p>
              </FadeUp>

              <Stagger staggerDelay={0.06} className="space-y-3 lg:col-span-7">
                {servico.sintomas.map((s, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 rounded-2xl bg-brand-cream p-5 ring-1 ring-brand-coral/20"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-coral/15">
                      <AlertCircle className="size-5 text-brand-coral" strokeWidth={2} />
                    </div>
                    <p className="pt-1.5 text-[15px] leading-relaxed text-brand-primary">{s}</p>
                  </div>
                ))}
              </Stagger>
            </div>
          </Container>
        </section>
      )}

      {/* Procedimento */}
      <section id={!servico.sintomas ? "detalhes" : undefined} className="bg-brand-violet-soft py-16 md:py-20">
        <Container size="lg">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <FadeUp className="lg:col-span-5">
              <span className="text-xs font-semibold uppercase tracking-widest text-brand-accent">
                {servico.categoria === "condicao" ? "Como investigamos" : "Como é feito"}
              </span>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-brand-primary md:text-4xl">
                {servico.categoria === "condicao"
                  ? "Diagnóstico que vai à raiz do problema"
                  : "Procedimento passo a passo"}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-brand-secondary">
                {servico.categoria === "condicao"
                  ? "Diagnóstico preciso é a base de qualquer tratamento bem-sucedido. Investigamos a causa raiz, não só os sintomas."
                  : "Procedimento padronizado, seguro e baseado em protocolos veterinários atualizados."}
              </p>
            </FadeUp>

            <Stagger staggerDelay={0.06} className="space-y-3 lg:col-span-7">
              {servico.procedimento.map((d, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 rounded-2xl bg-white p-5 shadow-soft ring-1 ring-brand-primary/5"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-accent text-brand-primary text-sm font-bold">
                    {i + 1}
                  </div>
                  <p className="pt-1.5 text-[15px] leading-relaxed text-brand-primary">{d}</p>
                </div>
              ))}
            </Stagger>
          </div>
        </Container>
      </section>

      {/* Benefícios */}
      <section className="bg-brand-primary py-16 text-white md:py-20">
        <Container size="lg">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <FadeUp className="lg:col-span-5">
              <span className="text-xs font-semibold uppercase tracking-widest text-brand-accent">
                Benefícios
              </span>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight md:text-4xl">
                Por que esse serviço faz a diferença
              </h2>
              <p className="mt-4 text-base leading-relaxed text-white/70">
                Tecnologia, ciência e atendimento humanizado em cada etapa.
              </p>
            </FadeUp>

            <Stagger staggerDelay={0.06} className="space-y-3 lg:col-span-7">
              {servico.beneficios.map((b, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 rounded-2xl bg-white/5 p-5 ring-1 ring-white/10"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-accent text-brand-primary">
                    <CheckCircle2 className="size-5" strokeWidth={2.5} />
                  </div>
                  <p className="pt-1.5 text-[15px] leading-relaxed text-white">{b}</p>
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
              Dúvidas mais comuns
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
              Agende uma avaliação na unidade mais perto de você.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Magnetic>
                <WhatsAppCTA
                  source={`servico-${servico.slug}-cta`}
                  message={`Olá! Vim pelo site e gostaria de agendar para ${servico.shortName}.`}
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
              Você também pode se interessar por
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-brand-primary md:text-4xl">
              Outros serviços relacionados
            </h2>
          </FadeUp>

          <div className="grid gap-5 md:grid-cols-3">
            {sugestoes.map((o) => (
              <Link
                key={o.slug}
                href={`/servicos/${o.slug}`}
                className="group flex flex-col overflow-hidden rounded-[1.5rem] bg-brand-violet-soft ring-1 ring-brand-primary/5 transition-all hover:-translate-y-1 hover:shadow-card"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={o.foto}
                    alt={o.nome}
                    fill
                    sizes="(min-width: 1024px) 33vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-xl font-bold tracking-tight text-brand-primary">
                    {o.shortName}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-secondary">{o.resumo}</p>
                  <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-primary">
                    Saber mais
                    <ArrowUpRight className="size-4 transition-transform group-hover:rotate-12" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
