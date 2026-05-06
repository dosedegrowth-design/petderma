import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeUp } from "@/components/motion/FadeUp";
import { cn } from "@/lib/cn";

type Crumb = { label: string; href?: string };

export function PageHero({
  eyebrow,
  title,
  description,
  crumbs,
  variant = "light",
  className,
  children,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  crumbs?: Crumb[];
  variant?: "light" | "dark";
  className?: string;
  children?: React.ReactNode;
}) {
  const isDark = variant === "dark";

  return (
    <section
      className={cn(
        "relative overflow-hidden pb-12 pt-32 md:pb-16 md:pt-36",
        isDark
          ? "bg-brand-primary text-white"
          : "bg-gradient-to-br from-brand-violet-soft via-white to-brand-mint",
        className
      )}
    >
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute -left-40 -top-40 h-[400px] w-[400px] rounded-full blur-3xl",
          isDark ? "bg-brand-accent/20" : "bg-brand-accent-soft/30"
        )}
      />
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute -right-40 top-20 h-[400px] w-[400px] rounded-full blur-3xl",
          isDark ? "bg-brand-lavender/15" : "bg-brand-lavender/20"
        )}
      />

      <Container size="lg" className="relative">
        {crumbs && crumbs.length > 0 && (
          <nav
            aria-label="Breadcrumb"
            className={cn(
              "mb-6 flex flex-wrap items-center justify-center gap-1.5 text-xs font-medium lg:justify-start",
              isDark ? "text-white/60" : "text-brand-secondary"
            )}
          >
            {crumbs.map((c, i) => (
              <span key={i} className="flex items-center gap-1.5">
                {i > 0 && <ChevronRight className="size-3" />}
                {c.href ? (
                  <Link
                    href={c.href}
                    className={cn(
                      "transition-colors hover:underline",
                      isDark ? "hover:text-white" : "hover:text-brand-primary"
                    )}
                  >
                    {c.label}
                  </Link>
                ) : (
                  <span className={isDark ? "text-white" : "text-brand-primary"}>
                    {c.label}
                  </span>
                )}
              </span>
            ))}
          </nav>
        )}

        <FadeUp className="text-center lg:text-left">
          {eyebrow && (
            <span
              className={cn(
                "text-xs font-semibold uppercase tracking-widest",
                isDark ? "text-brand-accent" : "text-brand-accent"
              )}
            >
              {eyebrow}
            </span>
          )}
          <h1
            className={cn(
              "mt-3 text-balance font-display text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl md:text-5xl lg:text-6xl",
              isDark ? "text-white" : "text-brand-primary"
            )}
          >
            {title}
          </h1>
          {description && (
            <p
              className={cn(
                "mx-auto mt-5 max-w-2xl text-base leading-relaxed sm:text-lg lg:mx-0",
                isDark ? "text-white/70" : "text-brand-secondary"
              )}
            >
              {description}
            </p>
          )}
        </FadeUp>

        {children}
      </Container>
    </section>
  );
}
