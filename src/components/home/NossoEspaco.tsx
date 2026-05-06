"use client";

import { Container } from "@/components/ui/Container";
import { FadeUp } from "@/components/motion/FadeUp";
import { PhotoCarousel } from "@/components/PhotoCarousel";

const PHOTOS = [
  { src: "/photos/gallery/IMG_5707.jpg", alt: "Atendimento dermatológico veterinário" },
  { src: "/photos/gallery/IMG_5703.jpg", alt: "Equipe PetDerma examinando pet" },
  { src: "/photos/gallery/DSC04057.jpg", alt: "Consultório PetDerma" },
  { src: "/photos/gallery/IMG_5704.jpg", alt: "Veterinária com pet" },
  { src: "/photos/gallery/DSC03694.jpg", alt: "Procedimento dermatológico" },
  { src: "/photos/gallery/IMG_5701.jpg", alt: "Veterinário cuidando do pet" },
  { src: "/photos/gallery/DSC03631.jpg", alt: "Equipamento veterinário" },
  { src: "/photos/gallery/IMG_5692.jpg", alt: "Atendimento humanizado" },
  { src: "/photos/gallery/DSC03670.jpg", alt: "Sala de procedimentos" },
  { src: "/photos/gallery/IMG_5693.jpg", alt: "Equipe da clínica" },
  { src: "/photos/gallery/DSC01861.jpg", alt: "Consulta veterinária" },
  { src: "/photos/gallery/IMG_5694.jpg", alt: "Cuidado com o pet" },
];

export function NossoEspaco() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-brand-violet-soft py-20 md:py-24">
      <Container size="lg">
        <FadeUp className="mb-10 max-w-3xl text-center lg:text-left">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-accent">
            Nosso espaço
          </span>
          <h2 className="mt-3 text-balance font-display text-4xl font-bold leading-tight tracking-tight text-brand-primary md:text-5xl lg:text-6xl">
            Um ambiente pensado para o{" "}
            <span className="text-brand-accent">conforto</span> do seu pet
          </h2>
          <p className="mt-5 max-w-2xl text-lg text-brand-secondary">
            Equipamentos modernos, atendimento humanizado e ambiente acolhedor.
            Conheça por dentro a rotina das nossas unidades.
          </p>
        </FadeUp>

        <FadeUp delay={0.1}>
          <PhotoCarousel
            photos={PHOTOS}
            slidesPerView={{ base: 1.15, sm: 2.2, lg: 3.2 }}
            aspectRatio="aspect-[3/4]"
            autoplay
          />
        </FadeUp>
      </Container>
    </section>
  );
}
