import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Heart, ShieldCheck, Microscope, Users, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/ui/Container";
import { FadeUp } from "@/components/motion/FadeUp";
import { Stagger } from "@/components/motion/Stagger";
import { Counter } from "@/components/motion/Counter";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { Magnetic } from "@/components/motion/Magnetic";
import { Button } from "@/components/ui/Button";
import { STATS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Sobre a PetDerma — Nossa História e Missão",
  description:
    "Há mais de 12 anos cuidamos da pele e do bem-estar de cães e gatos em São Paulo. Conheça a história, missão e valores da PetDerma.",
};

const VALORES = [
  {
    icon: Heart,
    titulo: "Cuidado humanizado",
    descricao:
      "Cada pet é único. Cada tutor merece atenção. Tratamos com a mesma dedicação que daríamos aos nossos próprios animais.",
  },
  {
    icon: Microscope,
    titulo: "Excelência técnica",
    descricao:
      "Equipamentos modernos, protocolos atualizados e atualização constante em congressos e publicações da área.",
  },
  {
    icon: ShieldCheck,
    titulo: "Transparência",
    descricao:
      "Explicamos cada diagnóstico, cada protocolo, cada custo. Tutor informado faz escolhas melhores para seu pet.",
  },
  {
    icon: Users,
    titulo: "Acessibilidade",
    descricao:
      "Atendimento em 3 unidades estratégicas em SP. Acompanhamento por WhatsApp para que você nunca fique sem suporte.",
  },
];

export default function SobrePage() {
  return (
    <>
      <PageHero
        eyebrow="Quem somos"
        title={
          <>
            Cuidando da pele do seu pet com{" "}
            <span className="text-brand-accent">amor, ciência e tecnologia</span>
          </>
        }
        description="Há mais de 12 anos resolvendo casos dermatológicos complexos em cães e gatos. Mais de 3.500 pets tratados em 3 unidades em São Paulo."
        crumbs={[{ label: "Início", href: "/" }, { label: "Sobre" }]}
      />

      {/* História */}
      <section className="py-16 md:py-20">
        <Container size="lg">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <FadeUp className="flex justify-center lg:col-span-5 lg:justify-start">
              <div className="relative w-full max-w-md">
                <div className="absolute -left-4 -top-4 h-full w-full rounded-[2rem] bg-brand-accent" />
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] shadow-float">
                  <Image
                    src="/photos/equipe.jpg"
                    alt="Equipe PetDerma"
                    fill
                    sizes="(min-width: 1024px) 480px, 90vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </FadeUp>

            <div className="text-center lg:col-span-7 lg:text-left">
              <FadeUp>
                <span className="text-xs font-semibold uppercase tracking-widest text-brand-accent">
                  Nossa história
                </span>
                <h2 className="mt-3 font-display text-3xl font-bold leading-tight tracking-tight text-brand-primary md:text-4xl">
                  Especialização nasceu da necessidade
                </h2>
              </FadeUp>

              <FadeUp delay={0.1}>
                <div className="mt-6 space-y-4 text-[17px] leading-relaxed text-brand-secondary">
                  <p>
                    A PetDerma nasceu da percepção de que casos dermatológicos crônicos em pets eram frequentemente
                    subdiagnosticados na clínica geral. Coceiras que voltavam, otites recorrentes, alergias mal
                    controladas — quadros que sofriam por anos sem solução.
                  </p>
                  <p>
                    Com formação especializada em dermatologia veterinária e investimento em equipamentos de ponta,
                    o Dr. Douglas Bessa fundou a clínica com uma missão clara:{" "}
                    <strong className="font-semibold text-brand-primary">
                      resolver os casos que ninguém consegue
                    </strong>.
                  </p>
                  <p>
                    Hoje somos referência em São Paulo, com 3 unidades, equipe especializada e mais de 3.500 pets
                    atendidos. Casos complexos chegam até nós e seguem tratamento direcionado, baseado em
                    diagnóstico preciso.
                  </p>
                </div>
              </FadeUp>
            </div>
          </div>
        </Container>
      </section>

      {/* Stats */}
      <section className="bg-brand-primary py-16 text-white md:py-20">
        <Container size="lg">
          <Stagger staggerDelay={0.1} className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-display text-5xl font-bold tracking-tight text-brand-accent md:text-6xl">
                  <Counter to={s.numero} suffix={s.sufixo} />
                </div>
                <div className="mt-3 text-sm uppercase tracking-wider text-white/70">
                  {s.label}
                </div>
              </div>
            ))}
          </Stagger>
        </Container>
      </section>

      {/* Valores */}
      <section className="py-16 md:py-20">
        <Container size="lg">
          <FadeUp className="mb-12 max-w-3xl text-center lg:text-left">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-accent">
              Nossos valores
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-brand-primary md:text-4xl">
              Princípios que guiam cada atendimento
            </h2>
          </FadeUp>

          <Stagger staggerDelay={0.08} className="grid gap-6 md:grid-cols-2">
            {VALORES.map((v) => (
              <div
                key={v.titulo}
                className="rounded-[1.75rem] bg-brand-violet-soft p-7 ring-1 ring-brand-primary/5"
              >
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-primary text-brand-accent">
                  <v.icon className="size-6" strokeWidth={1.75} />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold tracking-tight text-brand-primary">
                  {v.titulo}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-brand-secondary">
                  {v.descricao}
                </p>
              </div>
            ))}
          </Stagger>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-brand-mint via-white to-brand-violet-soft py-16 md:py-20">
        <Container size="default" className="text-center">
          <FadeUp>
            <h2 className="font-display text-3xl font-bold tracking-tight text-brand-primary md:text-4xl">
              Conheça nossa equipe e nossas unidades
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-brand-secondary">
              Estamos prontos para cuidar da pele do seu pet.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Magnetic>
                <WhatsAppCTA source="sobre-cta" size="lg" variant="dark">
                  Agendar consulta
                </WhatsAppCTA>
              </Magnetic>
              <Button asChild size="lg" variant="ghost">
                <Link href="/equipe">
                  Conhecer a equipe
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
