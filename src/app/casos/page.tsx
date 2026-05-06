import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/ui/Container";
import { FadeUp } from "@/components/motion/FadeUp";
import { Stagger } from "@/components/motion/Stagger";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { Magnetic } from "@/components/motion/Magnetic";

export const metadata: Metadata = {
  title: "Casos Resolvidos — Antes e Depois",
  description:
    "Veja resultados reais de pets tratados na PetDerma. Casos de otite, dermatite atópica, sarna, pioderma e outros tratamentos dermatológicos.",
};

const CASOS = [
  {
    foto: "/photos/consultorio-1.jpg",
    condicao: "Otite crônica",
    pet: "Mel — Golden Retriever",
    tempo: "3 semanas",
    descricao: "Otite recorrente bilateral resistente a tratamentos anteriores. Investigação revelou alergia atópica como causa primária.",
    categoria: "otite",
  },
  {
    foto: "/photos/consultorio-2.jpg",
    condicao: "Dermatite atópica",
    pet: "Theo — Shih Tzu",
    tempo: "2 meses",
    descricao: "Coceira intensa há 2 anos sem diagnóstico. Identificada hipersensibilidade a ácaros. Imunoterapia personalizada.",
    categoria: "alergia",
  },
  {
    foto: "/photos/consultorio-3.jpg",
    condicao: "Sarna demodícica",
    pet: "Luna — SRD",
    tempo: "6 semanas",
    descricao: "Sarna generalizada em filhote. Tratamento com antiparasitário moderno + suporte nutricional. Cura completa em 6 semanas.",
    categoria: "parasita",
  },
  {
    foto: "/photos/consultorio-4.jpg",
    condicao: "Pioderma profunda",
    pet: "Bento — Bulldog",
    tempo: "4 semanas",
    descricao: "Infecção bacteriana profunda em dobras cutâneas. Cultura identificou Staphylococcus resistente. Antibiótico direcionado.",
    categoria: "infeccao",
  },
  {
    foto: "/photos/atendimento.jpg",
    condicao: "Alergia alimentar",
    pet: "Mia — Poodle",
    tempo: "8 semanas",
    descricao: "Coceira e diarreia há 1 ano. Dieta de eliminação revelou hipersensibilidade a frango. Mudança de alimentação resolveu.",
    categoria: "alergia",
  },
  {
    foto: "/photos/equipe.jpg",
    condicao: "Otite externa fúngica",
    pet: "Rex — Cocker Spaniel",
    tempo: "3 semanas",
    descricao: "Otite causada por Malassezia. Otoendoscopia mostrou canal completamente obstruído por cera. Limpeza e antifúngico.",
    categoria: "otite",
  },
  {
    foto: "/photos/consultorio-1.jpg",
    condicao: "Micose corporal",
    pet: "Nina — Persa",
    tempo: "10 semanas",
    descricao: "Micose disseminada em gata persa. Cultivo identificou Microsporum canis. Tratamento sistêmico + ambiental.",
    categoria: "micose",
  },
  {
    foto: "/photos/consultorio-2.jpg",
    condicao: "Dermatite por pulga",
    pet: "Toby — Vira-lata",
    tempo: "2 semanas",
    descricao: "Hipersensibilidade à saliva da pulga. Controle parasitário + corticoide tópico. Pelagem recuperada em 1 mês.",
    categoria: "alergia",
  },
];

export default function CasosPage() {
  return (
    <>
      <PageHero
        eyebrow="Resultados reais"
        title={
          <>
            Pets que <span className="text-brand-accent">voltaram a brilhar</span>
          </>
        }
        description="Cada caso é único. Cada protocolo é desenhado para o pet em questão. Veja resultados reais com consentimento dos tutores."
        crumbs={[{ label: "Início", href: "/" }, { label: "Casos" }]}
      />

      <section className="py-16 md:py-20">
        <Container size="lg">
          <Stagger staggerDelay={0.08} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CASOS.map((caso) => (
              <article
                key={caso.condicao + caso.pet}
                className="group flex flex-col overflow-hidden rounded-[1.75rem] bg-white shadow-soft ring-1 ring-brand-primary/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-card"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-brand-violet-soft">
                  <Image
                    src={caso.foto}
                    alt={`Caso de ${caso.condicao} — ${caso.pet}`}
                    fill
                    sizes="(min-width: 1024px) 350px, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/70 via-transparent to-transparent" />

                  <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-pill bg-white/95 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-brand-primary backdrop-blur-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-accent" />
                    Tratado em {caso.tempo}
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-xl font-bold leading-tight tracking-tight text-brand-primary">
                    {caso.condicao}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-brand-accent">{caso.pet}</p>
                  <p className="mt-3 flex-1 text-[15px] leading-relaxed text-brand-secondary">
                    {caso.descricao}
                  </p>
                </div>
              </article>
            ))}
          </Stagger>

          <FadeUp delay={0.3} className="mt-16 flex justify-center">
            <p className="rounded-pill border border-brand-primary/10 bg-brand-violet-soft px-6 py-3 text-sm text-brand-secondary">
              <strong className="text-brand-primary">Mais casos em breve.</strong> Atualizamos mensalmente com consentimento dos tutores.
            </p>
          </FadeUp>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-brand-primary py-16 text-white md:py-20">
        <Container size="default" className="text-center">
          <FadeUp>
            <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
              Seu pet pode ser o próximo caso resolvido
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-white/70">
              Agende uma avaliação dermatológica e descubra o que está causando o desconforto do seu pet.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Magnetic>
                <WhatsAppCTA source="casos-cta" size="lg" variant="primary">
                  Agendar consulta
                </WhatsAppCTA>
              </Magnetic>
              <Link
                href="/servicos"
                className="inline-flex h-14 items-center gap-2 rounded-pill border-2 border-white/20 px-9 text-base font-semibold text-white transition-all hover:border-white hover:bg-white/10"
              >
                Ver serviços
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </FadeUp>
        </Container>
      </section>
    </>
  );
}
