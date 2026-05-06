"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Award, Calendar, GraduationCap, BookOpen } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeUp } from "@/components/motion/FadeUp";
import { ParallaxImage } from "@/components/motion/ParallaxImage";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { Magnetic } from "@/components/motion/Magnetic";

const MARCOS = [
  { icon: GraduationCap, ano: "2012", text: "Início da PetDerma com foco em dermatologia veterinária" },
  { icon: BookOpen, ano: "2014", text: "Ampliação dos serviços e equipamentos diagnósticos" },
  { icon: Award, ano: "2018", text: "Tecnologia de otoendoscopia (poucas clínicas em SP)" },
  { icon: Calendar, ano: "Hoje", text: "+3.500 pets tratados em 3 unidades em SP" },
];

export function Equipe() {
  return (
    <section className="relative overflow-hidden py-20 md:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-1/4 h-[500px] w-[500px] rounded-full bg-brand-accent/10 blur-3xl"
      />

      <Container size="lg" className="relative">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
          {/* Image */}
          <div className="relative lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="relative aspect-[4/5] w-full max-w-md"
            >
              <div
                aria-hidden
                className="absolute -left-6 -top-6 h-full w-full rounded-[2rem] bg-brand-accent"
              />
              <ParallaxImage
                src="/photos/equipe.jpg"
                alt="Equipe PetDerma — Dermatologia Veterinária"
                intensity={6}
                containerClassName="relative h-full w-full rounded-[2rem] shadow-float"
              />

              {/* Decorative paw */}
              <motion.div
                aria-hidden
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-8 -right-8"
              >
                <Image src="/design/circulo-patas.png" alt="" width={120} height={120} />
              </motion.div>
            </motion.div>
          </div>

          {/* Content */}
          <div className="lg:col-span-7">
            <FadeUp>
              <span className="text-xs font-semibold uppercase tracking-widest text-brand-accent">
                Quem somos
              </span>
              <h2 className="mt-3 text-balance font-display text-4xl font-bold leading-tight tracking-tight text-brand-primary md:text-5xl">
                Uma equipe especializada em dermatologia veterinária
              </h2>
            </FadeUp>

            <FadeUp delay={0.1}>
              <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-brand-secondary">
                A PetDerma reúne médicos veterinários dermatologistas, técnicos especializados
                e atendentes treinados para oferecer um cuidado completo. Mais de uma década
                dedicada a casos complexos de alergias, otites crônicas e doenças de pele em
                cães e gatos.{" "}
                <strong className="font-semibold text-brand-primary">
                  Acreditamos que ouvir o tutor é tão importante quanto examinar o pet.
                </strong>
              </p>
            </FadeUp>

            {/* Timeline */}
            <div className="mt-10 space-y-5">
              {MARCOS.map((item, i) => (
                <motion.div
                  key={item.ano}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-start gap-4"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-accent/10 text-brand-accent">
                    <item.icon className="size-5" strokeWidth={1.75} />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-accent">
                      {item.ano}
                    </span>
                    <p className="text-base text-brand-primary">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <FadeUp delay={0.2} className="mt-10">
              <Magnetic>
                <WhatsAppCTA source="equipe" size="lg" variant="dark">
                  Agendar consulta
                </WhatsAppCTA>
              </Magnetic>
            </FadeUp>
          </div>
        </div>
      </Container>
    </section>
  );
}
