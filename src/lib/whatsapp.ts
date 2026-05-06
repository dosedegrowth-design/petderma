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

declare global {
  interface Window {
    va?: (event: string, payload: Record<string, unknown>) => void;
    gtag?: (event: string, name: string, payload: Record<string, unknown>) => void;
    clarity?: (event: string, name: string) => void;
  }
}

export function trackWhatsAppClick(source: string) {
  if (typeof window === "undefined") return;
  window.va?.("event", { name: "whatsapp_click", source });
  window.gtag?.("event", "whatsapp_click", { source });
  window.clarity?.("event", `whatsapp_${source}`);
}
