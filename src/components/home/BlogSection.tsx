import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeUp } from "@/components/motion/FadeUp";
import { Stagger } from "@/components/motion/Stagger";
import { POSTS, CATEGORIES } from "@/lib/blog-data";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export function BlogSection() {
  const posts = [...POSTS]
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, 3);

  return (
    <section className="relative overflow-hidden py-20 md:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-1/3 h-[400px] w-[400px] rounded-full bg-brand-accent-soft/20 blur-3xl"
      />

      <Container size="lg" className="relative">
        <div className="flex flex-col items-center gap-6 md:flex-row md:items-end md:justify-between">
          <FadeUp className="max-w-2xl text-center md:text-left">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-accent">
              Blog PetDerma
            </span>
            <h2 className="mt-3 text-balance font-display text-4xl font-bold leading-tight tracking-tight text-brand-primary md:text-5xl lg:text-6xl">
              Conhecimento veterinário<br className="hidden sm:block" /> que faz a{" "}
              <span className="text-brand-accent">diferença</span>
            </h2>
          </FadeUp>

          <FadeUp delay={0.1}>
            <Link
              href="/blog"
              className="inline-flex h-12 items-center gap-2 rounded-pill border-2 border-brand-primary px-6 text-sm font-semibold text-brand-primary transition-all hover:bg-brand-primary hover:text-white"
            >
              Ver todos os artigos
              <ArrowRight className="size-4" />
            </Link>
          </FadeUp>
        </div>

        <Stagger staggerDelay={0.08} className="mt-12 grid gap-6 md:grid-cols-3">
          {posts.map((post) => {
            const cat = CATEGORIES.find((c) => c.slug === post.category);
            return (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] bg-white shadow-soft ring-1 ring-brand-primary/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-card"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={post.cover}
                    alt={post.coverAlt}
                    fill
                    sizes="(min-width: 1024px) 33vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute left-4 top-4">
                    <span
                      className={`inline-flex items-center rounded-pill ${
                        cat?.cor ?? "bg-brand-mint"
                      } px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-brand-primary`}
                    >
                      {cat?.nome ?? "Geral"}
                    </span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-3 text-xs text-brand-secondary">
                    <span className="flex items-center gap-1">
                      <Clock className="size-3.5" />
                      {post.readingMinutes} min
                    </span>
                    <span>•</span>
                    <span>{formatDate(post.publishedAt)}</span>
                  </div>

                  <h3 className="mt-3 font-display text-xl font-bold leading-tight tracking-tight text-brand-primary line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="mt-2 flex-1 text-[15px] leading-relaxed text-brand-secondary line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-primary">
                    Ler artigo
                    <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:rotate-12 group-hover:translate-x-0.5" />
                  </div>
                </div>
              </Link>
            );
          })}
        </Stagger>
      </Container>
    </section>
  );
}
