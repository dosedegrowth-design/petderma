import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden bg-gradient-to-br from-brand-violet-soft via-white to-brand-mint pt-24">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-brand-accent-soft/30 blur-3xl"
      />
      <Container size="default" className="relative text-center">
        <p className="font-display text-[clamp(8rem,20vw,14rem)] font-bold leading-none tracking-tight text-brand-accent">
          404
        </p>
        <h1 className="mt-4 font-display text-3xl font-bold tracking-tight text-brand-primary md:text-5xl">
          Essa página fugiu de casa
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-base text-brand-secondary md:text-lg">
          A página que você procura não existe ou foi movida. Volte para o início ou fale com a gente pelo WhatsApp.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button asChild size="lg" variant="dark">
            <Link href="/">
              <ArrowLeft className="size-4" />
              Voltar para o início
            </Link>
          </Button>
          <WhatsAppCTA source="404" size="lg" variant="ghost">
            Falar pelo WhatsApp
          </WhatsAppCTA>
        </div>
      </Container>
    </section>
  );
}
