import { Hero } from "@/components/home/Hero";
import { Marquee } from "@/components/home/Marquee";
import { Problemas } from "@/components/home/Problemas";
import { Processo } from "@/components/home/Processo";
import { Casos } from "@/components/home/Casos";
import { Equipe } from "@/components/home/Equipe";
import { Diferenciais } from "@/components/home/Diferenciais";
import { Depoimentos } from "@/components/home/Depoimentos";
import { Unidades } from "@/components/home/Unidades";
import { FAQ } from "@/components/home/FAQ";
import { CTAFinal } from "@/components/home/CTAFinal";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <Problemas />
      <Processo />
      <Casos />
      <Equipe />
      <Diferenciais />
      <Depoimentos />
      <Unidades />
      <FAQ />
      <CTAFinal />
    </>
  );
}
