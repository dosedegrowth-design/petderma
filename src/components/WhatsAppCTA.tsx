"use client";

import { Button, type ButtonProps } from "@/components/ui/Button";
import { buildWhatsAppLink, trackWhatsAppClick } from "@/lib/whatsapp";
import type { UnidadeSlug } from "@/lib/constants";
import { MessageCircle } from "lucide-react";

type Props = Omit<ButtonProps, "asChild" | "onClick"> & {
  unidade?: UnidadeSlug;
  message?: string;
  source: string;
  showIcon?: boolean;
  children?: React.ReactNode;
};

export function WhatsAppCTA({
  unidade,
  message,
  source,
  showIcon = true,
  children = "Agendar pelo WhatsApp",
  ...buttonProps
}: Props) {
  const href = buildWhatsAppLink({ unidade, message, source });
  return (
    <Button asChild {...buttonProps}>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackWhatsAppClick(source)}
      >
        {showIcon && <MessageCircle className="size-5" aria-hidden />}
        {children}
      </a>
    </Button>
  );
}
