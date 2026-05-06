"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeUp } from "@/components/motion/FadeUp";
import { FAQ_ITEMS } from "@/lib/constants";

export function FAQ() {
  return (
    <section id="faq" className="py-20 md:py-24">
      <Container size="default">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 lg:items-start">
          <FadeUp className="lg:col-span-5 lg:sticky lg:top-24 lg:self-start">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-accent">
              Perguntas frequentes
            </span>
            <h2 className="mt-3 text-balance font-display text-4xl font-bold leading-tight tracking-tight text-brand-primary md:text-5xl">
              Tudo que você queria perguntar antes de marcar
            </h2>
            <p className="mt-5 text-lg text-brand-secondary">
              Não encontrou o que procurava?{" "}
              <a
                href="https://wa.me/5511989812898"
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline font-semibold text-brand-primary"
              >
                Pergunte pelo WhatsApp
              </a>
              .
            </p>
          </FadeUp>

          <div className="lg:col-span-7">
            <Accordion.Root type="single" collapsible className="divide-y divide-brand-primary/10">
              {FAQ_ITEMS.map((item, i) => (
                <Accordion.Item
                  key={item.pergunta}
                  value={`item-${i}`}
                  className="group py-2"
                >
                  <Accordion.Header>
                    <Accordion.Trigger className="flex w-full items-start justify-between gap-6 py-5 text-left transition-colors hover:text-brand-accent">
                      <span className="font-display text-lg font-semibold tracking-tight text-brand-primary group-data-[state=open]:text-brand-accent">
                        {item.pergunta}
                      </span>
                      <Plus className="size-5 shrink-0 text-brand-primary transition-transform duration-300 group-data-[state=open]:rotate-45 group-data-[state=open]:text-brand-accent" />
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content className="overflow-hidden text-[15px] leading-relaxed text-brand-secondary data-[state=closed]:animate-[accordion-up_200ms_ease-out] data-[state=open]:animate-[accordion-down_200ms_ease-out]">
                    <div className="pb-5 pr-12">{item.resposta}</div>
                  </Accordion.Content>
                </Accordion.Item>
              ))}
            </Accordion.Root>
          </div>
        </div>
      </Container>

      {/* JSON-LD FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FAQ_ITEMS.map((q) => ({
              "@type": "Question",
              name: q.pergunta,
              acceptedAnswer: { "@type": "Answer", text: q.resposta },
            })),
          }),
        }}
      />
    </section>
  );
}
