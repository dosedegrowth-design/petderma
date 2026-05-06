import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Phone, Clock, MessageCircle, Mail } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/ui/Container";
import { FadeUp } from "@/components/motion/FadeUp";
import { Stagger } from "@/components/motion/Stagger";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { UNIDADES, SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contato — Agende sua consulta",
  description:
    "Entre em contato com a PetDerma. WhatsApp, telefone e endereços das 3 unidades em São Paulo. Atendemos seg–sex 8h às 18h, sáb 8h às 17h.",
};

export default function ContatoPage() {
  return (
    <>
      <PageHero
        eyebrow="Fale com a gente"
        title={
          <>
            Como podemos ajudar o <span className="text-brand-accent">seu pet</span> hoje?
          </>
        }
        description="Atendimento rápido por WhatsApp em qualquer uma das 3 unidades. Tire dúvidas, agende ou peça orientação inicial."
        crumbs={[{ label: "Início", href: "/" }, { label: "Contato" }]}
      />

      {/* WhatsApp grande */}
      <section className="py-16 md:py-20">
        <Container size="lg">
          <FadeUp className="mx-auto max-w-3xl text-center">
            <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_40px_-8px_rgb(37_211_102/0.5)]">
              <MessageCircle className="size-10" />
            </div>
            <h2 className="mt-6 font-display text-3xl font-bold tracking-tight text-brand-primary md:text-4xl">
              Atendimento direto pelo WhatsApp
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-brand-secondary">
              Nosso canal preferido. Resposta rápida em horário comercial. Pode mandar fotos, dúvidas e agendar tudo por aqui.
            </p>
          </FadeUp>

          <Stagger staggerDelay={0.08} className="mt-12 grid gap-5 md:grid-cols-3">
            {UNIDADES.map((u) => (
              <div
                key={u.slug}
                className="flex h-full flex-col rounded-[1.75rem] bg-white p-7 shadow-soft ring-1 ring-brand-primary/5 transition-all hover:-translate-y-1 hover:shadow-card"
              >
                <span className="text-xs font-bold uppercase tracking-widest text-brand-accent">
                  {u.cidade}
                </span>
                <h3 className="mt-1 font-display text-2xl font-bold tracking-tight text-brand-primary">
                  {u.nome}
                </h3>

                <div className="mt-5 flex-1 space-y-2.5 text-sm text-brand-secondary">
                  <p className="flex items-start gap-2">
                    <MapPin className="mt-0.5 size-4 shrink-0 text-brand-accent" />
                    {u.endereco}
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone className="size-4 shrink-0 text-brand-accent" />
                    <a href={`tel:+${u.telefone}`} className="hover:text-brand-primary">
                      {u.telefoneDisplay}
                    </a>
                  </p>
                  <p className="flex items-start gap-2">
                    <Clock className="mt-0.5 size-4 shrink-0 text-brand-accent" />
                    {u.horario.semana}
                  </p>
                </div>

                <div className="mt-6">
                  <WhatsAppCTA
                    source={`contato-${u.slug}`}
                    unidade={u.slug}
                    size="md"
                    variant="primary"
                    className="w-full"
                  >
                    Conversar pelo WhatsApp
                  </WhatsAppCTA>
                </div>
              </div>
            ))}
          </Stagger>
        </Container>
      </section>

      {/* Outros canais */}
      <section className="bg-brand-violet-soft py-16 md:py-20">
        <Container size="lg">
          <FadeUp className="mb-10 max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-accent">
              Outros canais
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-brand-primary md:text-4xl">
              Prefere outro caminho?
            </h2>
          </FadeUp>

          <div className="grid gap-5 md:grid-cols-2">
            <a
              href={SITE.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-5 rounded-[1.75rem] bg-white p-7 ring-1 ring-brand-primary/5 transition-all hover:-translate-y-1 hover:shadow-card"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#f09433] via-[#dc2743] to-[#bc1888] text-white">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-6">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </div>
              <div>
                <h3 className="font-display text-xl font-bold tracking-tight text-brand-primary">
                  Instagram
                </h3>
                <p className="mt-1 text-[15px] text-brand-secondary">
                  Acompanhe casos, dicas de cuidados e bastidores das unidades.
                </p>
                <span className="mt-3 inline-flex text-sm font-semibold text-brand-accent">
                  @petderma →
                </span>
              </div>
            </a>

            <a
              href="mailto:contato@petderma.com.br"
              className="group flex items-start gap-5 rounded-[1.75rem] bg-white p-7 ring-1 ring-brand-primary/5 transition-all hover:-translate-y-1 hover:shadow-card"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-primary text-brand-accent">
                <Mail className="size-6" strokeWidth={1.75} />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold tracking-tight text-brand-primary">
                  E-mail
                </h3>
                <p className="mt-1 text-[15px] text-brand-secondary">
                  Para parcerias, encaminhamentos e questões administrativas.
                </p>
                <span className="mt-3 inline-flex text-sm font-semibold text-brand-accent">
                  contato@petderma.com.br →
                </span>
              </div>
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
