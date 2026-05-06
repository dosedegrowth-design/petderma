import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Clock } from "lucide-react";
import { SITE, UNIDADES } from "@/lib/constants";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-brand-primary text-white">
      {/* Decorative gradient blob */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-40 h-96 w-96 rounded-full bg-brand-accent/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-brand-lavender/15 blur-3xl"
      />

      <Container size="lg" className="relative py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Image
              src="/brand/logo.png"
              alt={SITE.name}
              width={150}
              height={50}
              className="h-12 w-auto brightness-0 invert"
            />
            <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-white/70">
              Referência em Dermatologia Veterinária em São Paulo. Cuidamos da pele e do
              bem-estar do seu pet com diagnóstico no local e tratamento personalizado.
            </p>
            <div className="mt-6 flex gap-3">
              <SocialLink href={SITE.social.instagram} icon={<InstagramSvg />} label="Instagram" />
              <SocialLink href={SITE.social.facebook} icon={<FacebookSvg />} label="Facebook" />
              <SocialLink href={SITE.social.linkedin} icon={<LinkedinSvg />} label="LinkedIn" />
            </div>
          </div>

          {/* Unidades */}
          <div className="lg:col-span-5">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-brand-accent">
              Nossas unidades
            </h3>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {UNIDADES.map((u) => (
                <div key={u.slug} className="text-sm">
                  <p className="text-base font-semibold text-white">{u.nome}</p>
                  <div className="mt-2 space-y-1.5 text-white/65">
                    <p className="flex items-start gap-2">
                      <MapPin className="mt-0.5 size-3.5 shrink-0 text-brand-accent" />
                      <span>{u.endereco}</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <Phone className="size-3.5 shrink-0 text-brand-accent" />
                      <a href={`tel:+${u.telefone}`} className="hover:text-white">
                        {u.telefoneDisplay}
                      </a>
                    </p>
                    <p className="flex items-start gap-2">
                      <Clock className="mt-0.5 size-3.5 shrink-0 text-brand-accent" />
                      <span>{u.horario.semana}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-brand-accent">
              Navegue
            </h3>
            <ul className="mt-6 space-y-3 text-sm text-white/70">
              <li><Link href="/sobre" className="hover:text-white">Sobre</Link></li>
              <li><Link href="/servicos" className="hover:text-white">Serviços</Link></li>
              <li><Link href="/unidades" className="hover:text-white">Unidades</Link></li>
              <li><Link href="/equipe" className="hover:text-white">Equipe</Link></li>
              <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
              <li><Link href="/contato" className="hover:text-white">Contato</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8">
          <div className="flex flex-col items-start justify-between gap-4 text-xs text-white/50 sm:flex-row sm:items-center">
            <p>© {new Date().getFullYear()} {SITE.name}. Todos os direitos reservados.</p>
            <p>Responsável Técnico: Dr. Douglas Bessa — CRMV-SP</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}

function InstagramSvg() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}
function FacebookSvg() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="size-4">
      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
    </svg>
  );
}
function LinkedinSvg() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="size-4">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zm1.78 13.02H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/80 transition-all hover:-translate-y-0.5 hover:border-brand-accent hover:bg-brand-accent hover:text-brand-primary"
    >
      {icon}
    </a>
  );
}
