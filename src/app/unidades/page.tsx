import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Phone, Clock, ArrowUpRight, Navigation } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/ui/Container";
import { FadeUp } from "@/components/motion/FadeUp";
import { Stagger } from "@/components/motion/Stagger";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { UNIDADES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Unidades — Dermatologia Veterinária em São Paulo",
  description:
    "Atendemos em 3 unidades estratégicas: Campo Belo, Tatuapé e São José dos Campos. Encontre a clínica PetDerma mais próxima de você.",
};

export default function UnidadesPage() {
  return (
    <>
      <PageHero
        eyebrow="Onde estamos"
        title={
          <>
            3 unidades para cuidar do seu pet{" "}
            <span className="text-brand-accent">pertinho de você</span>
          </>
        }
        description="Mesma equipe especializada, mesmo padrão de atendimento, em 3 endereços estratégicos em São Paulo."
        crumbs={[{ label: "Início", href: "/" }, { label: "Unidades" }]}
      />

      <section className="py-16 md:py-20">
        <Container size="lg">
          <Stagger staggerDelay={0.1} className="grid gap-8 lg:grid-cols-3">
            {UNIDADES.map((u) => (
              <article
                key={u.slug}
                className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] bg-white shadow-soft ring-1 ring-brand-primary/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-card"
              >
                {/* Map */}
                <div className="aspect-[4/3] w-full overflow-hidden bg-brand-violet-soft">
                  <iframe
                    src={u.mapEmbed}
                    className="h-full w-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Mapa unidade ${u.nome}`}
                  />
                </div>

                <div className="flex flex-1 flex-col p-7">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-brand-accent">
                      {u.cidade}
                    </span>
                    <h2 className="mt-1 font-display text-2xl font-bold tracking-tight text-brand-primary">
                      {u.nome}
                    </h2>
                  </div>

                  <div className="mt-5 space-y-3 text-sm">
                    <div className="flex items-start gap-2.5">
                      <MapPin className="mt-0.5 size-4 shrink-0 text-brand-accent" />
                      <span className="text-brand-secondary">
                        {u.endereco}
                        <br />
                        {u.cidade} — {u.cep}
                      </span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Phone className="size-4 shrink-0 text-brand-accent" />
                      <a
                        href={`tel:+${u.telefone}`}
                        className="text-brand-secondary hover:text-brand-primary"
                      >
                        {u.telefoneDisplay}
                      </a>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <Clock className="mt-0.5 size-4 shrink-0 text-brand-accent" />
                      <span className="text-brand-secondary">
                        {u.horario.semana}
                        <br />
                        {u.horario.sabado}
                      </span>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-1 items-end">
                    <div className="flex w-full flex-col gap-2">
                      <WhatsAppCTA
                        source={`unidades-index-${u.slug}`}
                        unidade={u.slug}
                        size="md"
                        variant="dark"
                        className="w-full"
                      >
                        Agendar nessa unidade
                      </WhatsAppCTA>
                      <Link
                        href={`/unidades/${u.slug}`}
                        className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-pill border-2 border-brand-primary/10 px-5 text-sm font-semibold text-brand-primary transition-all hover:border-brand-primary"
                      >
                        Ver detalhes da unidade
                        <ArrowUpRight className="size-4 transition-transform group-hover:rotate-12" />
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </Stagger>
        </Container>
      </section>
    </>
  );
}
