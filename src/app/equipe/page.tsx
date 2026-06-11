import type { Metadata } from "next";
import Image from "next/image";
import { Award, BookOpen, GraduationCap, Calendar, Heart, Microscope, MessageCircle } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/ui/Container";
import { FadeUp } from "@/components/motion/FadeUp";
import { Stagger } from "@/components/motion/Stagger";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { Magnetic } from "@/components/motion/Magnetic";

export const metadata: Metadata = {
  title: "Equipe PetDerma — Dermatologia Veterinária Especializada",
  description:
    "Conheça a equipe PetDerma: médicos veterinários dermatologistas, técnicos especializados e atendentes treinados para o melhor cuidado dermatológico em SP.",
};

const MARCOS = [
  { icon: GraduationCap, ano: "2012", text: "Início da PetDerma com foco em dermatologia veterinária" },
  { icon: BookOpen, ano: "2014", text: "Ampliação dos serviços e equipamentos diagnósticos" },
  { icon: Award, ano: "2018", text: "Tecnologia de otoendoscopia (poucas clínicas em SP)" },
  { icon: Calendar, ano: "Hoje", text: "+3.500 pets tratados em 3 unidades em SP" },
];

const VALORES = [
  {
    icon: Heart,
    titulo: "Atendimento humanizado",
    desc: "Cada pet é único, cada tutor merece atenção. Tratamos com a dedicação que daríamos aos nossos próprios animais.",
  },
  {
    icon: Microscope,
    titulo: "Excelência técnica",
    desc: "Equipamentos modernos, protocolos atualizados e atualização constante em congressos e publicações da área.",
  },
  {
    icon: MessageCircle,
    titulo: "Acompanhamento próximo",
    desc: "Suporte por WhatsApp pós-consulta. Ajustamos protocolo quando necessário sem precisar nova visita.",
  },
];

export default function EquipePage() {
  return (
    <>
      <PageHero
        eyebrow="Quem somos"
        title={
          <>
            Especialistas em <span className="text-brand-accent">dermatologia veterinária</span>
          </>
        }
        description="Equipe formada por médicos veterinários dermatologistas, técnicos especializados e atendentes treinados para garantir o melhor cuidado em cada uma das 3 unidades."
        crumbs={[{ label: "Início", href: "/" }, { label: "Equipe" }]}
      />

      {/* Hero da equipe */}
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
                  Nossa equipe
                </span>
                <h2 className="mt-3 font-display text-3xl font-bold leading-tight tracking-tight text-brand-primary md:text-4xl">
                  Uma equipe inteira dedicada à pele do seu pet
                </h2>
              </FadeUp>

              <FadeUp delay={0.1}>
                <p className="mt-6 text-[17px] leading-relaxed text-brand-secondary">
                  A PetDerma é mais que uma clínica veterinária — é um time de profissionais
                  apaixonados por dermatologia. Reunimos médicos veterinários dermatologistas
                  experientes, técnicos especializados em coleta e análise de exames, e
                  atendentes treinados para acolher cada tutor.
                </p>
                <p className="mt-4 text-[17px] leading-relaxed text-brand-secondary">
                  Acreditamos que a melhor medicina vem da combinação de{" "}
                  <strong className="font-semibold text-brand-primary">ciência atualizada</strong>{" "}
                  e <strong className="font-semibold text-brand-primary">cuidado humanizado</strong>.
                  Por isso investimos em formação contínua, equipamentos modernos e em ouvir
                  cada tutor como parte essencial do diagnóstico.
                </p>
              </FadeUp>

              <Stagger staggerDelay={0.08} className="mt-10 space-y-4">
                {MARCOS.map((m) => (
                  <div key={m.ano} className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-accent/15 text-brand-accent">
                      <m.icon className="size-5" strokeWidth={1.75} />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-brand-accent">
                        {m.ano}
                      </span>
                      <p className="text-base text-brand-primary">{m.text}</p>
                    </div>
                  </div>
                ))}
              </Stagger>

              <FadeUp delay={0.2} className="mt-10">
                <Magnetic>
                  <WhatsAppCTA source="equipe-page" size="lg" variant="dark">
                    Agendar consulta
                  </WhatsAppCTA>
                </Magnetic>
              </FadeUp>
            </div>
          </div>
        </Container>
      </section>

      {/* Valores */}
      <section className="bg-brand-primary py-16 text-white md:py-20">
        <Container size="lg">
          <FadeUp className="mb-12 max-w-3xl text-center lg:text-left">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-accent">
              Como trabalhamos
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight md:text-5xl">
              Os princípios que guiam nosso atendimento
            </h2>
          </FadeUp>

          <Stagger staggerDelay={0.1} className="grid gap-6 md:grid-cols-3">
            {VALORES.map((v) => (
              <div key={v.titulo} className="rounded-[1.75rem] bg-white/5 p-7 ring-1 ring-white/10">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-accent text-brand-primary">
                  <v.icon className="size-6" strokeWidth={1.75} />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold tracking-tight">{v.titulo}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-white/70">{v.desc}</p>
              </div>
            ))}
          </Stagger>
        </Container>
      </section>

      {/* Responsabilidade técnica */}
      <section className="py-16 md:py-20">
        <Container size="default" className="text-center">
          <FadeUp>
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-accent">
              Responsabilidade técnica
            </span>
            <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-brand-primary md:text-3xl">
              Atendimento sob responsabilidade veterinária registrada
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-brand-secondary">
              Todos os atendimentos realizados pela PetDerma seguem normas do CRMV-SP. Médicos
              veterinários e equipe técnica devidamente registrados.
            </p>
          </FadeUp>
        </Container>
      </section>
    </>
  );
}
