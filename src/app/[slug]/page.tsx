import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Clock, Calendar } from "lucide-react";
import * as Accordion from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeUp } from "@/components/motion/FadeUp";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { Magnetic } from "@/components/motion/Magnetic";
import { POSTS, CATEGORIES, getPostBySlug, getRelatedPosts, type BlogPost } from "@/lib/blog-data";
import { SITE } from "@/lib/constants";

export const dynamicParams = false;

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.cover],
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author.name],
    },
    alternates: { canonical: `${SITE.url}/${post.slug}/` },
    robots: post.noindex ? { index: false, follow: true } : undefined,
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" });
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const cat = CATEGORIES.find((c) => c.slug === post.category);
  const related = getRelatedPosts(slug, 3);
  const url = `${SITE.url}/${post.slug}/`;

  const toc = post.content
    .filter((b) => b.type === "h2" || b.type === "h3")
    .map((b) => (b.type === "h2" || b.type === "h3" ? { id: b.id, text: b.text, level: b.type } : null))
    .filter((x): x is { id: string; text: string; level: "h2" | "h3" } => !!x);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: `${SITE.url}${post.cover}`,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt ?? post.publishedAt,
    author: { "@type": "Organization", name: post.author.name, url: SITE.url },
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      logo: { "@type": "ImageObject", url: `${SITE.url}/brand/logo.png` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Início", item: SITE.url },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE.url}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: url },
    ],
  };

  return (
    <>
      <section className="relative bg-gradient-to-br from-brand-violet-soft via-white to-brand-mint pt-28 md:pt-36">
        <Container size="default">
          <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-1.5 text-xs font-medium text-brand-secondary">
            <Link href="/" className="hover:text-brand-primary">Início</Link>
            <span>›</span>
            <Link href="/blog" className="hover:text-brand-primary">Blog</Link>
            <span>›</span>
            <span className="text-brand-primary">{post.title.slice(0, 40)}...</span>
          </nav>

          <FadeUp>
            <div className="flex flex-wrap items-center gap-3 text-sm">
              <span className={`inline-flex rounded-pill ${cat?.cor ?? "bg-brand-mint"} px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-brand-primary`}>
                {cat?.nome ?? "Geral"}
              </span>
              <span className="flex items-center gap-1 text-brand-secondary">
                <Clock className="size-3.5" />
                {post.readingMinutes} min de leitura
              </span>
              <span className="flex items-center gap-1 text-brand-secondary">
                <Calendar className="size-3.5" />
                {formatDate(post.publishedAt)}
              </span>
            </div>
            <h1 className="mt-5 text-balance font-display text-4xl font-bold leading-[1.1] tracking-tight text-brand-primary md:text-5xl lg:text-6xl">
              {post.title}
            </h1>
            <p className="mt-5 max-w-3xl text-balance text-lg leading-relaxed text-brand-secondary md:text-xl">
              {post.excerpt}
            </p>
          </FadeUp>
        </Container>

        <div className="mt-12">
          <Container size="lg">
            <FadeUp delay={0.1}>
              <div className="relative aspect-[16/9] overflow-hidden rounded-[2rem] shadow-card md:aspect-[2/1]">
                <Image src={post.cover} alt={post.coverAlt} fill sizes="100vw" priority className="object-cover" />
              </div>
            </FadeUp>
          </Container>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <Container size="lg">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <aside className="lg:col-span-3">
              <div className="lg:sticky lg:top-28">
                <span className="text-xs font-semibold uppercase tracking-widest text-brand-accent">Sumário</span>
                <nav className="mt-4 space-y-2 border-l border-brand-primary/10">
                  {toc.map((t) => (
                    <a
                      key={t.id}
                      href={`#${t.id}`}
                      className={`block border-l-2 -ml-px py-1.5 pl-4 text-sm transition-colors hover:border-brand-accent hover:text-brand-primary ${
                        t.level === "h3" ? "pl-7 text-brand-secondary" : "border-transparent text-brand-primary/80"
                      }`}
                    >
                      {t.text}
                    </a>
                  ))}
                </nav>
                <div className="mt-10 rounded-2xl bg-brand-violet-soft p-5 ring-1 ring-brand-primary/5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-accent text-brand-primary font-bold">P</div>
                    <div>
                      <p className="text-sm font-semibold text-brand-primary">{post.author.name}</p>
                      <p className="text-xs text-brand-secondary">{post.author.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </aside>

            <article className="lg:col-span-9">
              <div className="prose-pd">
                {post.content.map((block, i) => (
                  <ContentBlock key={i} block={block} />
                ))}

                <div className="my-10 rounded-[1.75rem] bg-brand-primary p-7 text-white shadow-card md:p-9">
                  <h3 className="font-display text-xl font-bold tracking-tight">Seu pet apresenta esses sinais?</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-white/75">
                    Agende uma avaliação dermatológica especializada na PetDerma. Identificamos a causa raiz e definimos o tratamento certo desde a primeira consulta.
                  </p>
                  <div className="mt-5">
                    <Magnetic>
                      <WhatsAppCTA
                        source={`blog-${post.slug}`}
                        message={`Olá! Li o artigo sobre ${post.title} no blog e gostaria de agendar uma consulta.`}
                        size="md"
                        variant="primary"
                      >
                        Agendar consulta
                      </WhatsAppCTA>
                    </Magnetic>
                  </div>
                </div>

                {post.faq && post.faq.length > 0 && (
                  <div className="mt-12">
                    <h2 className="font-display text-2xl font-bold tracking-tight text-brand-primary md:text-3xl">Perguntas frequentes</h2>
                    <Accordion.Root type="single" collapsible className="mt-6 divide-y divide-brand-primary/10">
                      {post.faq.map((item, i) => (
                        <Accordion.Item key={i} value={`faq-${i}`} className="group py-2">
                          <Accordion.Header>
                            <Accordion.Trigger className="flex w-full items-start justify-between gap-6 py-4 text-left transition-colors hover:text-brand-accent">
                              <span className="font-display text-base font-semibold tracking-tight text-brand-primary group-data-[state=open]:text-brand-accent">
                                {item.pergunta}
                              </span>
                              <Plus className="size-5 shrink-0 text-brand-primary transition-transform duration-300 group-data-[state=open]:rotate-45 group-data-[state=open]:text-brand-accent" />
                            </Accordion.Trigger>
                          </Accordion.Header>
                          <Accordion.Content className="overflow-hidden text-[15px] leading-relaxed text-brand-secondary data-[state=closed]:animate-[accordion-up_200ms_ease-out] data-[state=open]:animate-[accordion-down_200ms_ease-out]">
                            <div className="pb-4 pr-12">{item.resposta}</div>
                          </Accordion.Content>
                        </Accordion.Item>
                      ))}
                    </Accordion.Root>
                  </div>
                )}

                {post.tags && post.tags.length > 0 && (
                  <div className="mt-12 flex flex-wrap items-center gap-2 border-t border-brand-primary/10 pt-7">
                    <span className="text-xs font-bold uppercase tracking-widest text-brand-secondary">Tags:</span>
                    {post.tags.slice(0, 8).map((t) => (
                      <span key={t} className="rounded-pill bg-brand-violet-soft px-3 py-1 text-xs font-medium text-brand-primary">{t}</span>
                    ))}
                  </div>
                )}
              </div>
            </article>
          </div>
        </Container>
      </section>

      {related.length > 0 && (
        <section className="bg-brand-violet-soft py-16 md:py-20">
          <Container size="lg">
            <FadeUp className="mb-10 max-w-3xl text-center lg:text-left">
              <span className="text-xs font-semibold uppercase tracking-widest text-brand-accent">Continue lendo</span>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-brand-primary md:text-4xl">Artigos relacionados</h2>
            </FadeUp>
            <div className="grid gap-6 md:grid-cols-3">
              {related.map((p) => (
                <RelatedCard key={p.slug} post={p} />
              ))}
            </div>
          </Container>
        </section>
      )}

      <section className="py-12">
        <Container size="default" className="text-center">
          <Link href="/blog" className="inline-flex items-center gap-2 rounded-pill border border-brand-primary/15 bg-white px-6 py-3 text-sm font-semibold text-brand-primary transition-all hover:border-brand-accent hover:bg-brand-accent">
            <ArrowLeft className="size-4" />
            Voltar para o blog
          </Link>
        </Container>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  );
}

function ContentBlock({ block }: { block: BlogPost["content"][number] }) {
  switch (block.type) {
    case "h2":
      return <h2 id={block.id} className="mt-12 scroll-mt-32 font-display text-2xl font-bold tracking-tight text-brand-primary md:text-3xl">{block.text}</h2>;
    case "h3":
      return <h3 id={block.id} className="mt-8 scroll-mt-32 font-display text-xl font-semibold tracking-tight text-brand-primary md:text-2xl">{block.text}</h3>;
    case "p":
      return <p className="mt-5 text-[17px] leading-[1.75] text-brand-primary/85">{block.text}</p>;
    case "ul":
      return (
        <ul className="mt-5 space-y-2.5">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-[16px] leading-relaxed text-brand-primary/85">
              <span className="mt-2.5 inline-block size-1.5 shrink-0 rounded-full bg-brand-accent" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol className="mt-5 space-y-3">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-4 text-[16px] leading-relaxed text-brand-primary/85">
              <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-accent text-xs font-bold text-brand-primary">{i + 1}</span>
              <span>{item}</span>
            </li>
          ))}
        </ol>
      );
    case "quote":
      return (
        <blockquote className="my-8 border-l-4 border-brand-accent bg-brand-mint p-6 text-[18px] leading-relaxed text-brand-primary/90">
          {block.text}
          {block.cite && <cite className="mt-2 block text-sm text-brand-secondary">— {block.cite}</cite>}
        </blockquote>
      );
    case "callout": {
      const variants = {
        info: "bg-brand-sky border-brand-primary/10",
        tip: "bg-brand-mint border-brand-accent/30",
        warning: "bg-brand-cream border-brand-coral/40",
      };
      return (
        <div className={`my-8 rounded-2xl border-l-4 p-5 md:p-6 ${variants[block.variant]}`}>
          <p className="text-xs font-bold uppercase tracking-widest text-brand-accent">{block.title}</p>
          <p className="mt-2 text-[15px] leading-relaxed text-brand-primary">{block.text}</p>
        </div>
      );
    }
    case "image":
      return (
        <figure className="my-8">
          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
            <Image src={block.src} alt={block.alt} fill sizes="100vw" className="object-cover" />
          </div>
          {block.caption && <figcaption className="mt-3 text-center text-xs text-brand-secondary">{block.caption}</figcaption>}
        </figure>
      );
    default:
      return null;
  }
}

function RelatedCard({ post }: { post: BlogPost }) {
  const cat = CATEGORIES.find((c) => c.slug === post.category);
  return (
    <Link href={`/${post.slug}`} className="group flex h-full flex-col overflow-hidden rounded-[1.5rem] bg-white shadow-soft ring-1 ring-brand-primary/5 transition-all hover:-translate-y-1 hover:shadow-card">
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image src={post.cover} alt={post.coverAlt} fill sizes="(min-width: 1024px) 33vw, 50vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <span className={`inline-flex w-fit rounded-pill ${cat?.cor ?? "bg-brand-mint"} px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-brand-primary`}>{cat?.nome ?? "Geral"}</span>
        <h3 className="mt-3 font-display text-lg font-bold leading-tight tracking-tight text-brand-primary line-clamp-2">{post.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-secondary line-clamp-2">{post.excerpt}</p>
        <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-primary">
          Ler artigo
          <ArrowUpRight className="size-4 transition-transform group-hover:rotate-12" />
        </div>
      </div>
    </Link>
  );
}
