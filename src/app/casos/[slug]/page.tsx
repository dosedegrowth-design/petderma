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
    title: `${caso.condicao} — ${caso.pet} (${caso.raca}) | Casos PetDerma`,
    description: caso.resumo,
    openGraph: { images: [{ url: caso.fotoHero || caso.fotoCard }] },
  };
}

const BLOCOS: { campo: keyof NonNullable<ReturnType<typeof getCaso>>; titulo: string }[] = [
  { campo: "queixa", titulo: "A queixa" },
  { campo: "diagnostico", titulo: "O diagnóstico" },
  { campo: "tratamento", titulo: "O tratamento" },
  { campo: "resultado", titulo: "O resultado" },
];

export default async function CasoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const caso = getCaso(slug);
  if (!caso) notFound();

  const temDetalhe = BLOCOS.some((b) => caso[b.campo]);

  return (
    <>
      <PageHero
        eyebrow="Caso resolvido"
        title={
          <>
            {caso.condicao} <span className="text-brand-accent">— {caso.pet}</span>
          </>
        }
        description={caso.resumo}
        crumbs={[{ label: "Início", href: "/" }, { label: "Casos", href: "/#casos" }, { label: caso.condicao }]}
      />

      <section className="py-12 md:py-16">
        <Container size="default">
          {/* Ficha + imagem */}
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <FadeUp>
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2rem] shadow-float">
                <Image
                  src={caso.fotoHero || caso.fotoCard}
                  alt={`${caso.pet}, ${caso.raca} — ${caso.condicao}`}
                  fill
                  sizes="(min-width: 1024px) 560px, 90vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-pill bg-white/95 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-brand-primary backdrop-blur-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-accent" />
                  Tratado em {caso.tempo}
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.1} className="flex flex-col justify-center">
              <dl className="grid grid-cols-2 gap-4">
                {[
                  ["Pet", caso.pet],
                  ["Raça", caso.raca],
                  ["Condição", caso.condicao],
                  ["Tempo de tratamento", caso.tempo],
                  ...(caso.unidade ? [["Unidade", caso.unidade] as [string, string]] : []),
                  ...(caso.profissional ? [["Responsável", caso.profissional] as [string, string]] : []),
                ].map(([k, v]) => (
                  <div key={k} className="rounded-2xl bg-brand-violet-soft/50 p-4">
                    <dt className="text-xs font-semibold uppercase tracking-wider text-brand-accent">{k}</dt>
                    <dd className="mt-1 font-display text-lg font-bold text-brand-primary">{v}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-6 text-[17px] leading-relaxed text-brand-secondary">{caso.resumo}</p>
            </FadeUp>
          </div>

          {/* Blocos do contexto */}
          {temDetalhe && (
            <div className="mx-auto mt-14 max-w-3xl space-y-10">
              {BLOCOS.map((b) =>
                caso[b.campo] ? (
                  <FadeUp key={b.campo}>
                    <h2 className="font-display text-2xl font-bold tracking-tight text-brand-primary">{b.titulo}</h2>
                    <p className="mt-3 whitespace-pre-line text-[17px] leading-relaxed text-brand-secondary">
                      {caso[b.campo] as string}
                    </p>
                  </FadeUp>
                ) : null,
              )}
            </div>
          )}

          {/* Galeria */}
          {caso.galeria && caso.galeria.length > 0 && (
            <div className="mx-auto mt-14 max-w-4xl">
              <h2 className="mb-6 text-center font-display text-2xl font-bold tracking-tight text-brand-primary">
                Antes e depois
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {caso.galeria.map((img, i) => (
                  <FadeUp key={i}>
                    <figure className="overflow-hidden rounded-[1.5rem] shadow-soft">
                      <div className="relative aspect-[4/3] w-full">
                        <Image src={img.src} alt={img.legenda || caso.condicao} fill sizes="540px" className="object-cover" />
                      </div>
                      {img.legenda && (
                        <figcaption className="bg-white px-4 py-2.5 text-center text-sm text-brand-secondary">
                          {img.legenda}
                        </figcaption>
                      )}
                    </figure>
                  </FadeUp>
                ))}
              </div>
            </div>
          )}

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
