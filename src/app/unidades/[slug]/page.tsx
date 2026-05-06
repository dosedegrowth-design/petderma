import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Clock, Navigation, ArrowUpRight, Car, Bus } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/ui/Container";
import { FadeUp } from "@/components/motion/FadeUp";
import { Stagger } from "@/components/motion/Stagger";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { Magnetic } from "@/components/motion/Magnetic";
import { PhotoCarousel } from "@/components/PhotoCarousel";
import { UNIDADES, type UnidadeSlug, SITE } from "@/lib/constants";

export function generateStaticParams() {
  return UNIDADES.map((u) => ({ slug: u.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const unidade = UNIDADES.find((u) => u.slug === slug);
  if (!unidade) return {};
  return {
    title: `Unidade ${unidade.nome} — Dermatologia Veterinária em ${unidade.cidade}`,
    description: `Clínica PetDerma em ${unidade.bairro}, ${unidade.cidade}. ${unidade.endereco}. Atendimento dermatológico especializado para cães e gatos.`,
  };
}

export default async function UnidadePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const unidade = UNIDADES.find((u) => u.slug === slug as UnidadeSlug);
  if (!unidade) notFound();

  const outras = UNIDADES.filter((u) => u.slug !== slug);

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "VeterinaryCare",
    name: `${SITE.name} — ${unidade.nome}`,
    image: `${SITE.url}/photos/consultorio-1.jpg`,
    address: {
      "@type": "PostalAddress",
      streetAddress: unidade.endereco,
      addressLocality: unidade.cidade,
      postalCode: unidade.cep,
      addressRegion: "SP",
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: unidade.coords.lat,
      longitude: unidade.coords.lng,
    },
    telephone: `+${unidade.telefone}`,
    medicalSpecialty: "Dermatology",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:00",
        closes: "17:00",
      },
    ],
  };

  return (
    <>
      <PageHero
        eyebrow={unidade.cidade}
        title={
          <>
            Unidade <span className="text-brand-accent">{unidade.nome}</span>
          </>
        }
        description={`Atendimento dermatológico especializado em ${unidade.bairro}, ${unidade.cidade}. Mesma equipe e padrão de qualidade das outras unidades.`}
        crumbs={[
          { label: "Início", href: "/" },
          { label: "Unidades", href: "/unidades" },
          { label: unidade.nome },
        ]}
      >
        <FadeUp delay={0.2} className="mt-8 flex flex-wrap gap-3">
          <Magnetic>
            <WhatsAppCTA
              source={`unidade-${unidade.slug}-hero`}
              unidade={unidade.slug}
              size="lg"
              variant="dark"
            >
              Agendar nessa unidade
            </WhatsAppCTA>
          </Magnetic>
          <a
            href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
              `${unidade.endereco}, ${unidade.cidade}`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-14 items-center gap-2 rounded-pill border-2 border-brand-primary px-9 text-base font-semibold text-brand-primary transition-all hover:bg-brand-primary hover:text-white"
          >
            <Navigation className="size-4" />
            Traçar rota
          </a>
        </FadeUp>
      </PageHero>

      {/* Galeria de fotos da unidade */}
      <section className="bg-gradient-to-b from-white to-brand-violet-soft py-12 md:py-16">
        <Container size="lg">
          <FadeUp className="mb-8 max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-accent">
              Conheça a unidade
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-brand-primary md:text-4xl">
              Por dentro da PetDerma {unidade.nome}
            </h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <PhotoCarousel
              photos={unidade.fotos.map((src, i) => ({
                src,
                alt: `Foto ${i + 1} da unidade ${unidade.nome}`,
              }))}
              slidesPerView={{ base: 1.15, sm: 2.2, lg: 3 }}
              aspectRatio="aspect-[4/3]"
              autoplay
            />
          </FadeUp>
        </Container>
      </section>

      {/* Mapa + Info */}
      <section className="py-12 md:py-16">
        <Container size="lg">
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
            {/* Mapa */}
            <FadeUp className="lg:col-span-8">
              <div className="aspect-[16/10] w-full overflow-hidden rounded-[1.75rem] ring-1 ring-brand-primary/5 shadow-soft">
                <iframe
                  src={unidade.mapEmbed}
                  className="h-full w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Mapa unidade ${unidade.nome}`}
                />
              </div>
            </FadeUp>

            {/* Info card */}
            <FadeUp delay={0.1} className="lg:col-span-4">
              <div className="sticky top-28 rounded-[1.75rem] bg-brand-primary p-7 text-white shadow-card">
                <h2 className="font-display text-xl font-bold tracking-tight">
                  Informações da unidade
                </h2>

                <div className="mt-6 space-y-5 text-sm">
                  <div>
                    <div className="flex items-center gap-2 text-brand-accent">
                      <MapPin className="size-4" />
                      <span className="text-xs font-semibold uppercase tracking-widest">
                        Endereço
                      </span>
                    </div>
                    <p className="mt-1.5 text-white/80">
                      {unidade.endereco}
                      <br />
                      {unidade.cidade} — {unidade.cep}
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 text-brand-accent">
                      <Phone className="size-4" />
                      <span className="text-xs font-semibold uppercase tracking-widest">
                        Telefone
                      </span>
                    </div>
                    <a
                      href={`tel:+${unidade.telefone}`}
                      className="mt-1.5 block text-base font-semibold text-white hover:text-brand-accent"
                    >
                      {unidade.telefoneDisplay}
                    </a>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 text-brand-accent">
                      <Clock className="size-4" />
                      <span className="text-xs font-semibold uppercase tracking-widest">
                        Horário
                      </span>
                    </div>
                    <ul className="mt-1.5 space-y-1 text-white/80">
                      <li>{unidade.horario.semana}</li>
                      <li>{unidade.horario.sabado}</li>
                      <li>{unidade.horario.feriado}</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-7 border-t border-white/10 pt-6">
                  <WhatsAppCTA
                    source={`unidade-${unidade.slug}-card`}
                    unidade={unidade.slug}
                    size="md"
                    variant="primary"
                    className="w-full"
                  >
                    Agendar consulta
                  </WhatsAppCTA>
                </div>
              </div>
            </FadeUp>
          </div>
        </Container>
      </section>

      {/* Como chegar */}
      <section className="bg-brand-violet-soft py-16 md:py-20">
        <Container size="lg">
          <FadeUp className="mb-10 max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-accent">
              Como chegar
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-brand-primary md:text-4xl">
              Fácil acesso de carro ou transporte público
            </h2>
          </FadeUp>

          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl bg-white p-7 ring-1 ring-brand-primary/5">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-accent/15">
                <Car className="size-6 text-brand-accent" strokeWidth={1.75} />
              </div>
              <h3 className="mt-5 font-display text-xl font-bold tracking-tight text-brand-primary">
                De carro
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-brand-secondary">
                Estacionamento na rua e em estabelecimentos próximos. Use o Waze ou Google Maps com o endereço {unidade.endereco}.
              </p>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  `${unidade.endereco}, ${unidade.cidade}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-accent hover:text-brand-primary"
              >
                Abrir no Google Maps
                <ArrowUpRight className="size-4" />
              </a>
            </div>

            <div className="rounded-2xl bg-white p-7 ring-1 ring-brand-primary/5">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-lavender/15">
                <Bus className="size-6 text-brand-lavender" strokeWidth={1.75} />
              </div>
              <h3 className="mt-5 font-display text-xl font-bold tracking-tight text-brand-primary">
                Transporte público
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-brand-secondary">
                Ônibus e estações próximas. Confirme com o atendente o melhor trajeto pelo WhatsApp ou consulte o app de transporte da sua cidade.
              </p>
              <WhatsAppCTA
                source={`unidade-${unidade.slug}-transporte`}
                unidade={unidade.slug}
                message={`Olá! Vou na unidade ${unidade.nome} e gostaria de saber qual o transporte público mais próximo.`}
                size="sm"
                variant="ghost"
                className="mt-4"
              >
                Perguntar pelo WhatsApp
              </WhatsAppCTA>
            </div>
          </div>
        </Container>
      </section>

      {/* Outras unidades */}
      <section className="py-16 md:py-20">
        <Container size="lg">
          <FadeUp className="mb-10 max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-accent">
              Outras unidades
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-brand-primary md:text-4xl">
              Conheça nossas outras localizações
            </h2>
          </FadeUp>

          <div className="grid gap-5 md:grid-cols-2">
            {outras.map((o) => (
              <Link
                key={o.slug}
                href={`/unidades/${o.slug}`}
                className="group block rounded-[1.5rem] bg-brand-violet-soft p-6 ring-1 ring-brand-primary/5 transition-all hover:-translate-y-1 hover:shadow-card"
              >
                <span className="text-xs font-bold uppercase tracking-widest text-brand-accent">
                  {o.cidade}
                </span>
                <h3 className="mt-1 font-display text-2xl font-bold tracking-tight text-brand-primary">
                  {o.nome}
                </h3>
                <p className="mt-2 text-sm text-brand-secondary">{o.endereco}</p>
                <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-primary">
                  Ver detalhes
                  <ArrowUpRight className="size-4 transition-transform group-hover:rotate-12" />
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
    </>
  );
}
