import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Sparkles, ShieldCheck, Microscope, Heart } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/ui/Container";
import { FadeUp } from "@/components/motion/FadeUp";
import { Stagger } from "@/components/motion/Stagger";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { Magnetic } from "@/components/motion/Magnetic";
import { SERVICOS_BY_CATEGORIA, CATEGORIAS_INFO } from "@/lib/services-data";

export const metadata: Metadata = {
  title: "Serviços de Dermatologia Veterinária — 14 Procedimentos Especializados",
  description:
    "Conheça os 14 serviços da PetDerma: consulta dermatológica, citologia, raspado, otoendoscopia, crioterapia e tratamento de condições complexas em São Paulo.",
};

const COR_TEXT = {
  accent: "text-brand-accent",
  lavender: "text-brand-lavender",
  coral: "text-brand-coral",
  sky: "text-brand-primary",
  cream: "text-brand-primary",
} as const;

const COR_RING = {
  accent: "ring-brand-accent/20",
  lavender: "ring-brand-lavender/20",
  coral: "ring-brand-coral/20",
  sky: "ring-brand-primary/10",
  cream: "ring-brand-primary/10",
} as const;

export default function ServicosPage() {
  return (
    <>
      <PageHero
        eyebrow="14 serviços especializados"
        title={
          <>
            Tudo que seu pet precisa em{" "}
            <span className="text-brand-accent">um só lugar</span>
          </>
        }
        description="Da primeira consulta ao acompanhamento pós-tratamento. Todos os exames realizados no consultório, com resultado em até 24h. Tecnologia, ciência e atendimento humanizado."
        crumbs={[{ label: "Início", href: "/" }, { label: "Serviços" }]}
      />

      {/* Stats */}
      <section className="border-b border-brand-primary/5 bg-white py-10">
        <Container size="lg">
          <Stagger staggerDelay={0.08} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Microscope, valor: "14+", label: "Procedimentos especializados" },
              { icon: Sparkles, valor: "24h", label: "Resultado de exames" },
              { icon: ShieldCheck, valor: "12+", label: "Anos de experiência" },
              { icon: Heart, valor: "3.500+", label: "Pets tratados" },
            ].map((s) => (
              <div key={s.label} className="flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-accent/10 text-brand-accent">
                  <s.icon className="size-6" strokeWidth={1.75} />
                </div>
                <div>
                  <div className="font-display text-2xl font-bold tracking-tight text-brand-primary md:text-3xl">
                    {s.valor}
                  </div>
                  <div className="text-xs uppercase tracking-wider text-brand-secondary">
                    {s.label}
                  </div>
                </div>
              </div>
            ))}
          </Stagger>
        </Container>
      </section>

      {/* Sticky tabs nav */}
      <nav className="sticky top-20 z-40 border-b border-brand-primary/10 bg-white/95 backdrop-blur-md">
        <Container size="lg">
          <div className="flex items-center gap-2 overflow-x-auto py-4">
            {CATEGORIAS_INFO.map((cat) => (
              <a
                key={cat.slug}
                href={`#${cat.slug}`}
                className="shrink-0 rounded-pill border border-brand-primary/10 bg-white px-5 py-2 text-sm font-semibold text-brand-primary transition-all hover:border-brand-accent hover:bg-brand-accent"
              >
                {cat.titulo}
              </a>
            ))}
          </div>
        </Container>
      </nav>

      {/* Sections by category */}
      {CATEGORIAS_INFO.map((cat, catIdx) => {
        const items = SERVICOS_BY_CATEGORIA[cat.slug];
        const isCondicao = cat.slug === "condicao";
        const bg = catIdx % 2 === 0 ? "bg-white" : "bg-gradient-to-b from-white to-brand-violet-soft";

        return (
          <section
            key={cat.slug}
            id={cat.slug}
            className={`scroll-mt-32 py-16 md:py-20 ${bg}`}
          >
            <Container size="lg">
              <FadeUp className="mb-12 max-w-3xl">
                <span className="text-xs font-semibold uppercase tracking-widest text-brand-accent">
                  {cat.subtitulo}
                </span>
                <h2 className="mt-3 text-balance font-display text-3xl font-bold leading-tight tracking-tight text-brand-primary md:text-4xl lg:text-5xl">
                  {cat.titulo}
                </h2>
                <p className="mt-4 text-lg text-brand-secondary">{cat.descricao}</p>
              </FadeUp>

              {/* Featured large card for first item in condicao */}
              {isCondicao && items.length > 0 && (
                <FadeUp delay={0.1} className="mb-6">
                  <Link
                    href={`/servicos/${items[0].slug}`}
                    className="group block overflow-hidden rounded-[2rem] bg-brand-primary text-white shadow-card ring-1 ring-brand-primary/10 transition-all hover:shadow-float"
                  >
                    <div className="grid lg:grid-cols-12">
                      <div className="relative aspect-[4/3] lg:col-span-7 lg:aspect-auto">
                        <Image
                          src={items[0].foto}
                          alt={items[0].nome}
                          fill
                          sizes="(min-width: 1024px) 60vw, 100vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/40 via-transparent to-transparent" />
                      </div>
                      <div className="flex flex-col justify-center p-8 lg:col-span-5 lg:p-12">
                        <span className="text-xs font-semibold uppercase tracking-widest text-brand-accent">
                          Mais procurado
                        </span>
                        <h3 className="mt-3 font-display text-3xl font-bold leading-tight tracking-tight md:text-4xl">
                          {items[0].shortName}
                        </h3>
                        <p className="mt-4 text-base leading-relaxed text-white/75">
                          {items[0].resumo}
                        </p>
                        <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-accent">
                          Saber mais
                          <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:rotate-12 group-hover:translate-x-0.5" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </FadeUp>
              )}

              <Stagger
                staggerDelay={0.06}
                className="grid gap-5 md:grid-cols-2 lg:grid-cols-3"
              >
                {(isCondicao ? items.slice(1) : items).map((s) => (
                  <Link
                    key={s.slug}
                    href={`/servicos/${s.slug}`}
                    className={`group flex h-full flex-col overflow-hidden rounded-[1.75rem] bg-white shadow-soft ring-1 ${COR_RING[s.cor]} transition-all duration-500 hover:-translate-y-2 hover:shadow-card`}
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={s.foto}
                        alt={s.nome}
                        fill
                        sizes="(min-width: 1024px) 33vw, 50vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/30 via-transparent to-transparent opacity-50 transition-opacity group-hover:opacity-30" />
                      <div className="absolute -bottom-7 left-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white p-2 shadow-card">
                        <Image src={s.icone} alt="" width={48} height={48} className="object-contain" />
                      </div>
                    </div>

                    <div className="flex flex-1 flex-col p-6 pt-10">
                      <h3 className={`font-display text-xl font-bold leading-tight tracking-tight ${COR_TEXT[s.cor]}`}>
                        {s.shortName}
                      </h3>
                      <p className="mt-2 flex-1 text-[15px] leading-relaxed text-brand-secondary">
                        {s.resumo}
                      </p>

                      <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-primary">
                        Saber mais
                        <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:rotate-12 group-hover:translate-x-0.5" />
                      </div>
                    </div>
                  </Link>
                ))}
              </Stagger>
            </Container>
          </section>
        );
      })}

      {/* CTA */}
      <section className="bg-gradient-to-br from-brand-mint via-white to-brand-violet-soft py-16 md:py-20">
        <Container size="default" className="text-center">
          <FadeUp>
            <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-brand-primary md:text-5xl">
              Não sabe qual serviço seu pet precisa?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-brand-secondary">
              Agende uma consulta de avaliação. Identificamos a condição e indicamos o protocolo correto.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
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
