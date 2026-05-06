import { Hero } from "@/components/home/Hero";
import { Marquee } from "@/components/home/Marquee";
import { Problemas } from "@/components/home/Problemas";
import { Diferenciais } from "@/components/home/Diferenciais";
import { Processo } from "@/components/home/Processo";
import { Casos } from "@/components/home/Casos";
import { NossoEspaco } from "@/components/home/NossoEspaco";
import { Equipe } from "@/components/home/Equipe";
import { Depoimentos } from "@/components/home/Depoimentos";
import { Unidades } from "@/components/home/Unidades";
import { BlogSection } from "@/components/home/BlogSection";
import { FAQ } from "@/components/home/FAQ";
import { CTAFinal } from "@/components/home/CTAFinal";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <Problemas />
      <Diferenciais />
      <Processo />
      <Casos />
      <NossoEspaco />
      <Equipe />
      <Depoimentos />
      <Unidades />
      <BlogSection />
      <FAQ />
      <CTAFinal />
    </>
  );
}
