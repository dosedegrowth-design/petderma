# Plano de Migração SEO/Blog — WordPress → Next.js

> Objetivo: trazer os **597 posts** do site antigo (`petderma.com.br`, WordPress) para o site novo
> (Next.js) **sem perder ranqueamento orgânico**. Princípio inegociável: **mesma URL, mesmo conteúdo,
> mesmos metadados** — o Google não pode perceber a troca a não ser pela velocidade (melhor).

---

## 1. Inventário do site antigo (levantado via API)
- **597 posts** (`/wp-json/wp/v2/posts`, header `X-WP-Total: 597`), ~1 publicação/dia.
- **URL dos posts: na RAIZ com barra final** → `petderma.com.br/{slug}/` (ex: `/otite-cronica-em-caes/`).
  - Sem barra → **301** para a versão com barra. **Canonical = versão com barra.**
- **SEO: plugin RankMath** (title, meta description, canonical, OG no `<head>` renderizado — NÃO vem
  no `yoast_head_json` da REST; precisa raspar o `<head>` de cada post).
- **Sitemap**: `https://petderma.com.br/sitemap_index.xml` (200) → contém os sub-sitemaps de posts.
- **Imagens por post**: 1 featured (`_embedded.wp:featuredmedia[0].source_url`) + ~3 inline no
  `content.rendered` (`wp-content/uploads/...`) → **~4 imgs × 597 ≈ 2.400 imagens**.
- **Autor**: "Petderma" (único). 1 categoria ("petderma"). Tags por post.
- Campos REST disponíveis por post: `slug, date, modified, title, content.rendered, excerpt,
  featured_media, categories, tags, link`.

## 2. Estado do site novo
- Blog atual em `/blog/{slug}` com **15 posts novos** (conteúdo próprio, slugs diferentes — NÃO se
  sobrepõem aos 597). Dados em `src/lib/blog-data.ts`, rota `src/app/blog/[slug]`.
- Páginas: `/`, `/sobre`, `/equipe`, `/servicos`, `/servicos/[slug]`, `/unidades`, `/unidades/[slug]`,
  `/blog`, `/contato`.

## 3. Estratégia de URL (o que garante o ranking)
- **Servir os 597 posts na MESMA URL: raiz `/{slug}/` com barra final.**
- **`trailingSlash: true` no `next.config`** → o canonical do site novo fica idêntico
  (`petderma.com.br/{slug}/`). Zero mudança de URL = zero perda.
- Rota nova: **`src/app/[slug]/page.tsx`** (catch-all na raiz). O Next resolve rotas estáticas
  (`/sobre`, `/servicos`…) ANTES da dinâmica, então `/[slug]` só pega o que sobra (os posts).
  `generateStaticParams` lista os 597 slugs; slug desconhecido → `notFound()` (404 real).
- `/blog` continua como **índice/hub** listando todos os posts (link para as URLs de raiz). Os 15
  posts novos podem (opcional) migrar para a raiz também, por consistência (são novos, risco zero).

## 4. Pipeline de migração (script único, roda 1x)
Script Node (`scripts/migrate-wp.mjs`) que:

### 4.1 Conteúdo
1. Pagina `GET /wp-json/wp/v2/posts?per_page=100&page=N&_embed=1` (6 páginas) → 597 posts.
2. Para cada post, extrai: `slug, title, date, modified, excerpt, content.rendered, categorias, tags,
   featured image`.
3. **Limpa o HTML** do `content.rendered`: remove blocos/classes do WP/Elementor, scripts, comentários,
   estilos inline desnecessários; mantém headings, parágrafos, listas, imagens, links, tabelas.
4. Salva cada post como arquivo local no repo → **`content/posts/{slug}.json`** (ou `.md`/`.mdx`).
   Assim o site **não depende do WordPress** (que vai sair do ar).

### 4.2 Imagens (~2.400)
1. Coleta todas as URLs `wp-content/uploads/...` (featured + inline de cada post).
2. **Baixa + comprime** (sharp → WebP/AVIF, max ~1280px, q72).
3. **Reescreve os `src`** no HTML para o novo caminho.
4. **Onde hospedar** (decisão de custo/repo):
   - **Opção A — repo `public/posts-img/`**: simples, zero dependência. Risco: ~70–190 MB no git
     (usar git-lfs se incomodar). Recomendado se o volume comprimido ficar <150 MB.
   - **Opção B — Supabase Storage / Vercel Blob**: mantém o repo leve, URLs num CDN. +1 dependência.
   → Decidir após medir o peso real comprimido.

### 4.3 Metadados SEO (fidelidade RankMath)
- Como o RankMath não expõe na REST, o script **raspa o `<head>` de cada post** (`GET /{slug}/`) e
  extrai: `<title>`, `meta description`, `canonical`, `og:image`, `og:title`, `og:description`.
- Fallback: se faltar, usa `title` + `excerpt` do post.
- Guarda junto no JSON do post (`seoTitle`, `seoDescription`, `ogImage`).

## 5. Renderização no Next
- **`src/app/[slug]/page.tsx`**:
  - `generateStaticParams()` → 597 slugs (SSG).
  - `generateMetadata()` → title (seoTitle), description (seoDescription), `alternates.canonical`
    (`/{slug}/`), Open Graph (ogImage), `robots` index.
  - Render do conteúdo com `dangerouslySetInnerHTML` dentro de um container **`.prose`** (Tailwind
    Typography) estilizado na identidade Petderma.
  - **Article JSON-LD** (`@type: BlogPosting`): headline, datePublished=`date`, dateModified=`modified`,
    author (Petderma), image (featured), publisher (logo), mainEntityOfPage (canonical).
  - CTA de WhatsApp + posts relacionados no fim.
- **`/blog`** (índice): lista os 597 + 15, com busca/categoria, paginação. Cards linkando para `/{slug}/`.

## 6. Sitemap + robots
- **`src/app/sitemap.ts`** (nativo do Next): gera `sitemap.xml` com TODAS as URLs (posts em `/{slug}/` +
  páginas institucionais), com `lastModified` = `modified`.
- **`src/app/robots.ts`**: permite tudo + aponta para o sitemap.
- Após o cutover: **submeter o novo sitemap no Google Search Console** e remover o sitemap antigo.

## 7. Redirects (`next.config` `redirects()` ou `middleware`)
Posts: **nenhum** (mesma URL). Apenas:
| URL antiga | Destino novo | Tipo |
|---|---|---|
| `/{slug}` (sem barra) | `/{slug}/` | 308 (trailingSlash automático) |
| `/quem-somos/` | `/sobre/` | 301 |
| `/galeria-de-fotos/` | `/sobre/` (ou nova galeria) | 301 |
| `/faq/` | `/faq/` (criar) ou `/#faq` | 301 |
| `/petderma-unidade-campo-belo/` | `/unidades/campo-belo/` | 301 |
| `/petderma-unidade-tatuape/` | `/unidades/tatuape/` | 301 |
| `/petderma-unidade-sao-jose-dos-campos/` | `/unidades/sjc/` | 301 |
| `/contato/`, `/servicos/`, `/blog/` | iguais (manter) | — |
- Conferir no `sitemap_index.xml` se há outras URLs indexadas (categorias, tags, autor) e mapear.

## 8. Checklist de cutover (zero perda)
1. Build do site novo com os 597 posts + sitemap + redirects.
2. **Script de validação**: lê todas as URLs do `sitemap_index.xml` antigo e confere que cada uma
   responde **200** no site novo (deploy de preview) — relatório de qualquer 404.
3. Conferir amostra de posts: conteúdo completo, imagens carregando, title/description corretos,
   JSON-LD válido (Rich Results Test).
4. **Virar o DNS** de `petderma.com.br` para a Vercel (apontar A/CNAME) — só depois do passo 2 passar 100%.
5. No **Search Console**: adicionar/confirmar a propriedade, submeter o novo `sitemap.xml`, usar
   "Inspeção de URL" em alguns posts, monitorar **Cobertura** e **404s** por 2–4 semanas.
6. Manter o WordPress no ar por ~30 dias como segurança (sem indexar — ou já desligado após validação).

## 9. Riscos & mitigação
- **Imagem quebrada pós-cutover** (WP sai do ar) → por isso baixamos TODAS as imagens antes (4.2).
- **URL diferente** → evitado servindo na raiz com barra (`trailingSlash:true`).
- **Meta/JSON-LD diferente** → raspamos o RankMath e replicamos (4.3 + 5).
- **Conteúdo truncado/sujo** → limpeza de HTML + validação por amostra.
- **Repo pesado** → comprimir imagens; se >150 MB, mover pra Storage/Blob.
- **Posts novos publicados durante a migração** → rodar o script de novo perto do cutover (idempotente).

## 10. Fases de execução
- **F1 — Script de export** (conteúdo + meta + imagens) → gera `content/posts/*.json` + imagens.
- **F2 — Rota raiz `/[slug]`** + `.prose` + `generateMetadata` + JSON-LD.
- **F3 — Sitemap + robots + redirects** (config).
- **F4 — Índice `/blog`** atualizado (597+15, busca/categoria).
- **F5 — Validação** (200 em todas as URLs do sitemap antigo) + ajustes.
- **F6 — Cutover DNS** + Search Console + monitoramento.

> Recomendação: começar por um **piloto de ~10 posts** ponta a ponta (F1→F2→F3) para validar o
> resultado visual e de SEO antes de rodar os 597.
