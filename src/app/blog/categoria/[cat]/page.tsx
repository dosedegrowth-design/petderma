import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Clock } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/ui/Container";
import { FadeUp } from "@/components/motion/FadeUp";
import { Stagger } from "@/components/motion/Stagger";
import { POSTS, CATEGORIES } from "@/lib/blog-data";

export const dynamicParams = false;

export function generateStaticParams() {
  return CATEGORIES.map((c) => ({ cat: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ cat: string }> }): Promise<Metadata> {
  const { cat } = await params;
  const categoria = CATEGORIES.find((c) => c.slug === cat);
  if (!categoria) return { title: "Categoria não encontrada" };
  return {
    title: `${categoria.nome} — Blog PetDerma`,
    description: `Artigos sobre ${categoria.nome.toLowerCase()}: ${categoria.descricao}.`,
    alternates: { canonical: `/blog/categoria/${cat}` },
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" });
}

export default async function CategoriaPage({ params }: { params: Promise<{ cat: string }> }) {
  const { cat } = await params;
  const categoria = CATEGORIES.find((c) => c.slug === cat);
  if (!categoria) notFound();

  const posts = POSTS.filter((p) => p.category === cat).sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );

  return (
    <>
      <PageHero
        eyebrow="Blog PetDerma"
        title={<>{categoria.nome}</>}
        description={categoria.descricao}
        crumbs={[{ label: "Início", href: "/" }, { label: "Blog", href: "/blog" }, { label: categoria.nome }]}
      />

      {/* Filtro de categorias */}
      <section className="border-b border-brand-primary/5 bg-white py-6">
        <Container size="lg">
          <div className="flex items-center gap-2 overflow-x-auto">
            <Link href="/blog" className="shrink-0 rounded-pill border border-brand-primary/10 bg-white px-5 py-2 text-sm font-semibold text-brand-primary transition-all hover:border-brand-accent hover:bg-brand-accent">
              Todos
            </Link>
            {CATEGORIES.map((c) => (
              <Link
                key={c.slug}
                href={`/blog/categoria/${c.slug}`}
                className={`shrink-0 rounded-pill px-5 py-2 text-sm font-semibold transition-all ${
                  c.slug === cat
                    ? "bg-brand-primary text-white"
                    : "border border-brand-primary/10 bg-white text-brand-primary hover:border-brand-accent hover:bg-brand-accent"
                }`}
              >
                {c.nome}
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Grid */}
      <section className="bg-brand-violet-soft py-16 md:py-20">
        <Container size="lg">
          {posts.length === 0 ? (
            <FadeUp>
              <div className="rounded-[1.75rem] bg-white p-10 text-center ring-1 ring-brand-primary/5">
                <p className="text-base text-brand-secondary">
                  Ainda não temos artigos nesta categoria. Veja{" "}
                  <Link href="/blog" className="font-semibold text-brand-accent">todos os artigos</Link>.
                </p>
              </div>
            </FadeUp>
          ) : (
            <Stagger staggerDelay={0.06} className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/${post.slug}`}
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
                      <span className={`inline-flex items-center rounded-pill ${categoria.cor} px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-brand-primary`}>
                        {categoria.nome}
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
              ))}
            </Stagger>
          )}
        </Container>
      </section>
    </>
  );
}
