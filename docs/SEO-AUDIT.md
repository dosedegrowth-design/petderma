# Auditoria de SEO — petderma.vercel.app (jun/2026)

Auditoria técnica (crawl real) + análise estratégica (agente SEO/AEO/GEO).

## Nota geral: 8/10 — base forte, faltam dados estruturados e ajustes finos

## ✅ O que já está bom
- HTTPS + HSTS, robots liberado, sitemap (645 URLs)
- 1 H1 por página, viewport, todas indexáveis (sem noindex)
- Open Graph (title/desc/image) em todas as páginas
- JSON-LD Article + Breadcrumb nos posts
- 528/528 posts indexados cobertos na raiz `/{slug}/` + 6 redirects 301 (cutover-ready)
- Meta descriptions presentes (0 faltando), média 130 chars
- **Canonical em todas as páginas** ✅ (corrigido nesta auditoria)

## 📊 Achados priorizados

| Prio | Item | Impacto | Status |
|---|---|---|---|
| **P0** | Canonical em todas as páginas | Alto | ✅ FEITO |
| **P0** | Ativar 301 do petderma.com.br → novo (no cutover) | Crítico | pendente (cutover) |
| **P0** | Organization/VeterinaryCare schema na home | Alto | a fazer |
| **P1** | LocalBusiness schema por unidade (NAP, geo, horário) | Alto | a fazer |
| **P1** | FAQPage schema em serviços + posts principais | Alto | a fazer |
| **P1** | Person schema dos veterinários + author nos posts | Médio-alto | a fazer |
| **P1** | 196 descrições curtas (<120 chars) — completar | Médio | a fazer |
| **P1** | 385 títulos >65 chars — encurtar (ao menos top tráfego) | Médio | a fazer |
| **P2** | Resposta direta (lede) no início dos posts (AEO/GEO) | Médio-alto | a fazer |
| **P2** | llms.txt na raiz (AEO futuro) | Baixo hoje | a fazer |
| **P2** | 5 posts com conteúdo magro — expandir ou noindex | Médio | a fazer |
| **P2** | 7 posts sem cover própria (OG genérico) | Baixo | a fazer |
| **P2** | 1 título + 6 descrições duplicadas | Baixo | a fazer |
| **P2** | Google Business Profile completo (3 unidades) | Alto local | externo |

## 🤖 AEO/GEO (otimização pra IA — ChatGPT, Perplexity, Google SGE)
O site tem material perfeito (600+ artigos clínicos) mas falta:
1. **Resposta direta nos 2-3 primeiros parágrafos** de cada post (o "lede" que a IA extrai como resposta)
2. **FAQPage schema** (alta extratabilidade)
3. **Listas/tabelas** em vez de parágrafos corridos (mais citável)
4. **Mencionar localização** (SP/Campo Belo/Tatuapé) no contexto clínico → queries locais
5. **llms.txt** apontando autoridade + unidades

## 🚩 Único ponto urgente
A janela entre migrar e ativar os 301s do domínio antigo: enquanto petderma.com.br não redireciona, o site novo constrói autoridade do zero. Os P0 (canonical ✅ + 301s no cutover) têm que estar prontos antes do go-live.
