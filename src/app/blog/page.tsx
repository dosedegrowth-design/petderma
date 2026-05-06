import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock, Calendar } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/ui/Container";
import { FadeUp } from "@/components/motion/FadeUp";
import { Stagger } from "@/components/motion/Stagger";
import { POSTS, CATEGORIES } from "@/lib/blog-data";

export const metadata: Metadata = {
  title: "Blog — Dermatologia Veterinária para Tutores",
  description:
    "Artigos especializados em dermatologia veterinária. Dicas, guias e novidades sobre saúde da pele, alergias, otites e cuidados com cães e gatos.",
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export default function BlogPage() {
  const posts = [...POSTS].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
  const featured = posts[0];
  const rest = posts.slice(1);

  return (
    <>
      <PageHero
        eyebrow="Blog PetDerma"
        title={
          <>
            Conhecimento veterinário <span className="text-brand-accent">para tutores</span>
          </>
        }
        description="Guias completos, dicas práticas e atualizações sobre dermatologia veterinária. Conteúdo especializado para você cuidar melhor do seu pet."
        crumbs={[{ label: "Início", href: "/" }, { label: "Blog" }]}
      />

      {/* Categories filter */}
      <section className="border-b border-brand-primary/5 bg-white py-6">
        <Container size="lg">
          <div className="flex items-center gap-2 overflow-x-auto">
            <Link
              href="/blog"
              className="shrink-0 rounded-pill bg-brand-primary px-5 py-2 text-sm font-semibold text-white"
            >
              Todos
            </Link>
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.slug}
                href={`/blog/categoria/${cat.slug}`}
                className="shrink-0 rounded-pill border border-brand-primary/10 bg-white px-5 py-2 text-sm font-semibold text-brand-primary transition-all hover:border-brand-accent hover:bg-brand-accent"
              >
                {cat.nome}
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Featured post */}
      {featured && (
        <section className="py-12 md:py-16">
          <Container size="lg">
            <FadeUp>
              <Link
                href={`/blog/${featured.slug}`}
                className="group block overflow-hidden rounded-[2rem] bg-white shadow-card ring-1 ring-brand-primary/5 transition-all hover:shadow-float"
              >
                <div className="grid lg:grid-cols-12">
                  <div className="relative aspect-[16/10] lg:col-span-7 lg:aspect-auto">
                    <Image
                      src={featured.cover}
                      alt={featured.coverAlt}
                      fill
                      sizes="(min-width: 1024px) 60vw, 100vw"
                      priority
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute left-5 top-5">
                      <span className="inline-flex items-center gap-1.5 rounded-pill bg-white/95 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-brand-primary backdrop-blur-sm">
                        <span className="h-1.5 w-1.5 rounded-full bg-brand-accent" />
                        Em destaque
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col justify-center p-8 lg:col-span-5 lg:p-12">
                    <div className="flex items-center gap-3 text-xs">
                      <span className="rounded-pill bg-brand-mint px-3 py-1 font-bold uppercase tracking-wider text-brand-accent">
                        {CATEGORIES.find((c) => c.slug === featured.category)?.nome}
                      </span>
                      <span className="flex items-center gap-1 text-brand-secondary">
                        <Clock className="size-3.5" />
                        {featured.readingMinutes} min
                      </span>
                    </div>

                    <h2 className="mt-5 font-display text-3xl font-bold leading-tight tracking-tight text-brand-primary md:text-4xl">
                      {featured.title}
                    </h2>
                    <p className="mt-4 text-base leading-relaxed text-brand-secondary">
                      {featured.excerpt}
                    </p>

                    <div className="mt-6 flex items-center gap-3 text-sm">
                      <Calendar className="size-4 text-brand-accent" />
                      <span className="text-brand-secondary">{formatDate(featured.publishedAt)}</span>
                    </div>

                    <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-accent">
                      Ler artigo completo
                      <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:rotate-12 group-hover:translate-x-0.5" />
                    </div>
                  </div>
                </div>
              </Link>
            </FadeUp>
          </Container>
        </section>
      )}

      {/* Posts grid */}
      <section className="bg-brand-violet-soft py-16 md:py-20">
        <Container size="lg">
          <FadeUp className="mb-10 max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-accent">
              Mais artigos
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-brand-primary md:text-4xl">
              Para todos os tutores
            </h2>
          </FadeUp>

          <Stagger staggerDelay={0.06} className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </Stagger>

          {rest.length === 0 && (
            <FadeUp delay={0.1}>
              <div className="rounded-[1.75rem] bg-white p-10 text-center ring-1 ring-brand-primary/5">
                <p className="text-base text-brand-secondary">
                  Mais artigos em breve. Acompanhe nossas redes para receber atualizações.
                </p>
              </div>
            </FadeUp>
          )}
        </Container>
      </section>
    </>
  );
}

function BlogCard({ post }: { post: (typeof POSTS)[number] }) {
  const cat = CATEGORIES.find((c) => c.slug === post.category);
  return (
    <Link
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
          <span className={`inline-flex items-center rounded-pill ${cat?.cor ?? "bg-brand-mint"} px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-brand-primary`}>
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
}
