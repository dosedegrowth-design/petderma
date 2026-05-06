import type { Metadata } from "next";
import Image from "next/image";
import { Award, BookOpen, GraduationCap, Calendar } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/ui/Container";
import { FadeUp } from "@/components/motion/FadeUp";
import { Stagger } from "@/components/motion/Stagger";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { Magnetic } from "@/components/motion/Magnetic";
import { PROFISSIONAIS } from "@/lib/services-data";

export const metadata: Metadata = {
  title: "Equipe — Veterinários Dermatologistas",
  description:
    "Conheça o Dr. Douglas Bessa e a equipe de dermatologistas veterinários da PetDerma. +12 anos de experiência cuidando da pele de cães e gatos em SP.",
};

export default function EquipePage() {
  return (
    <>
      <PageHero
        eyebrow="Quem cuida do seu pet"
        title={
          <>
            Especialistas dedicados à <span className="text-brand-accent">dermatologia veterinária</span>
          </>
        }
        description="Equipe formada por veterinários com especialização em dermatologia, alergias e otologia. Atendimento humanizado com base científica."
        crumbs={[{ label: "Início", href: "/" }, { label: "Equipe" }]}
      />

      {PROFISSIONAIS.map((p, idx) => (
        <section key={p.nome} className={idx % 2 === 0 ? "py-16 md:py-20" : "bg-brand-violet-soft py-16 md:py-20"}>
          <Container size="lg">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
              <FadeUp className="lg:col-span-5">
                <div className="relative">
                  <div className="absolute -left-4 -top-4 h-full w-full rounded-[2rem] bg-brand-accent" />
                  <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2rem] shadow-float">
                    <Image
                      src={p.foto}
                      alt={p.nome}
                      fill
                      sizes="(min-width: 1024px) 480px, 90vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </FadeUp>

              <div className="lg:col-span-7">
                <FadeUp>
                  <span className="text-xs font-semibold uppercase tracking-widest text-brand-accent">
                    {p.cargo}
                  </span>
                  <h2 className="mt-3 font-display text-4xl font-bold leading-tight tracking-tight text-brand-primary md:text-5xl">
                    {p.nome}
                  </h2>
                  <p className="mt-2 text-base font-medium text-brand-secondary">{p.crmv}</p>
                </FadeUp>

                <FadeUp delay={0.1}>
                  <p className="mt-6 text-[17px] leading-relaxed text-brand-secondary">{p.bio}</p>
                </FadeUp>

                <Stagger staggerDelay={0.08} className="mt-10 space-y-4">
                  {p.formacao.map((f) => (
                    <div key={f.ano} className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-accent/15 text-brand-accent">
                        <GraduationCap className="size-5" strokeWidth={1.75} />
                      </div>
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-brand-accent">
                          {f.ano}
                        </span>
                        <p className="text-base text-brand-primary">{f.titulo}</p>
                      </div>
                    </div>
                  ))}
                </Stagger>

                <FadeUp delay={0.2} className="mt-10">
                  <Magnetic>
                    <WhatsAppCTA source={`equipe-${idx}`} size="lg" variant="dark">
                      Agendar com {p.nome.split(" ")[1]}
                    </WhatsAppCTA>
                  </Magnetic>
                </FadeUp>
              </div>
            </div>
          </Container>
        </section>
      ))}

      {/* Valores */}
      <section className="bg-brand-primary py-16 text-white md:py-20">
        <Container size="lg">
          <FadeUp className="mb-10 max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-accent">
              Como trabalhamos
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight md:text-4xl">
              Os princípios que guiam nosso atendimento
            </h2>
          </FadeUp>

          <Stagger staggerDelay={0.08} className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Award,
                titulo: "Atualização constante",
                desc: "Acompanhamos congressos, publicações e protocolos internacionais para oferecer sempre o tratamento mais moderno.",
              },
              {
                icon: BookOpen,
                titulo: "Educação do tutor",
                desc: "Explicamos cada exame, cada protocolo. Tutor informado é parceiro do tratamento e o pet evolui melhor.",
              },
              {
                icon: Calendar,
                titulo: "Acompanhamento próximo",
                desc: "Suporte por WhatsApp pós-consulta. Ajustamos protocolo quando necessário sem precisar nova visita.",
              },
            ].map((v) => (
              <div key={v.titulo} className="rounded-2xl bg-white/5 p-7 ring-1 ring-white/10">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-accent text-brand-primary">
                  <v.icon className="size-6" strokeWidth={1.75} />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold tracking-tight">{v.titulo}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-white/70">{v.desc}</p>
              </div>
            ))}
          </Stagger>
        </Container>
      </section>
    </>
  );
}
