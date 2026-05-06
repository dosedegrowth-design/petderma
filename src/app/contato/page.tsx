import type { Metadata } from "next";
import { MapPin, Phone, Clock, MessageCircle, Mail, Navigation } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/ui/Container";
import { FadeUp } from "@/components/motion/FadeUp";
import { Stagger } from "@/components/motion/Stagger";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { ContactForm } from "@/components/ContactForm";
import { UNIDADES, SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contato — Agende sua consulta",
  description:
    "Entre em contato com a PetDerma. Formulário, WhatsApp e telefones das 3 unidades em SP. Atendimento Seg-Sex 8h às 18h, Sáb 8h às 17h.",
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
        description="Envie sua mensagem pelo formulário ou fale direto pelo WhatsApp da unidade mais próxima. Resposta rápida em horário comercial."
        crumbs={[{ label: "Início", href: "/" }, { label: "Contato" }]}
      />

      {/* Form + Sidebar */}
      <section className="py-16 md:py-20">
        <Container size="lg">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Form */}
            <FadeUp className="lg:col-span-7">
              <div className="rounded-[2rem] bg-white p-8 shadow-card ring-1 ring-brand-primary/5 md:p-10">
                <span className="text-xs font-semibold uppercase tracking-widest text-brand-accent">
                  Envie uma mensagem
                </span>
                <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-brand-primary md:text-4xl">
                  Conte sobre seu pet
                </h2>
                <p className="mt-4 text-base text-brand-secondary">
                  Preencha os campos abaixo e entraremos em contato em até 24h em horário comercial.
                </p>

                <div className="mt-8">
                  <ContactForm />
                </div>
              </div>
            </FadeUp>

            {/* Sidebar — Quick channels */}
            <FadeUp delay={0.1} className="lg:col-span-5">
              <div className="lg:sticky lg:top-28">
                <div className="rounded-[2rem] bg-brand-primary p-8 text-white shadow-card md:p-10">
                  <span className="text-xs font-semibold uppercase tracking-widest text-brand-accent">
                    Atendimento direto
                  </span>
                  <h3 className="mt-3 font-display text-2xl font-bold tracking-tight">
                    Prefere falar agora?
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/70">
                    Para resposta imediata, fale pelo WhatsApp da unidade mais próxima.
                  </p>

                  <div className="mt-6 space-y-3">
                    {UNIDADES.map((u) => (
                      <div
                        key={u.slug}
                        className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div className="min-w-0 flex-1">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-brand-accent">
                              {u.cidade}
                            </span>
                            <p className="mt-0.5 font-display text-base font-bold tracking-tight">
                              {u.nome}
                            </p>
                            <p className="mt-1 text-xs text-white/60">{u.endereco}</p>
                          </div>
                        </div>

                        <div className="mt-3 space-y-2">
                          <WhatsAppCTA
                            source={`contato-sidebar-${u.slug}`}
                            unidade={u.slug}
                            size="sm"
                            variant="primary"
                            className="w-full"
                          >
                            Falar pelo WhatsApp
                          </WhatsAppCTA>
                          <div className="grid grid-cols-2 gap-2">
                            <a
                              href={`tel:+${u.telefone}`}
                              className="inline-flex h-10 items-center justify-center gap-1.5 rounded-pill border border-white/20 px-3 text-xs font-semibold text-white transition-all hover:border-brand-accent hover:bg-white/5"
                            >
                              <Phone className="size-3.5" />
                              Ligar
                            </a>
                            <a
                              href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                                `${u.endereco}, ${u.cidade}`
                              )}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex h-10 items-center justify-center gap-1.5 rounded-pill border border-white/20 px-3 text-xs font-semibold text-white transition-all hover:border-brand-accent hover:bg-white/5"
                            >
                              <Navigation className="size-3.5" />
                              Traçar rota
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-7 flex items-start gap-3 border-t border-white/10 pt-7 text-sm">
                    <Clock className="mt-0.5 size-4 shrink-0 text-brand-accent" />
                    <div className="text-white/70">
                      <p className="font-semibold text-white">Horário de atendimento</p>
                      <p className="mt-1">Seg-Sex: 8h às 18h</p>
                      <p>Sábados: 8h às 17h</p>
                      <p>Feriados: 8h às 14h</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>
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
              Conecte-se com a PetDerma
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
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="size-6"
                >
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
