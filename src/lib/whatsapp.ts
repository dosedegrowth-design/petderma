import { UNIDADES, type UnidadeSlug } from "./constants";

type WhatsAppOpts = {
  unidade?: UnidadeSlug;
  message?: string;
  source: string;
};

export function buildWhatsAppLink({ unidade, message, source }: WhatsAppOpts) {
  const target = UNIDADES.find((u) => u.slug === unidade) ?? UNIDADES[0];
  const txt =
    message ??
    `Olá! Vim pelo site (${source}) e gostaria de agendar uma consulta dermatológica${
      unidade ? ` na unidade ${target.nome}` : ""
    }.`;
  return `https://wa.me/${target.telefone}?text=${encodeURIComponent(txt)}`;
}

export function trackWhatsAppClick(source: string) {
  if (typeof window === "undefined") return;
  // Vercel Analytics
  // @ts-expect-error - va is injected at runtime
  if (window.va) window.va("event", { name: "whatsapp_click", source });
  // GA4
  // @ts-expect-error - gtag is injected at runtime
  if (window.gtag) window.gtag("event", "whatsapp_click", { source });
  // Microsoft Clarity
  // @ts-expect-error - clarity is injected at runtime
  if (window.clarity) window.clarity("event", `whatsapp_${source}`);
}
