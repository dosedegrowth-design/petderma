import { parse } from "node-html-parser";
import sharp from "sharp";
import { writeFileSync, mkdirSync } from "fs";

const WP = "https://petderma.com.br/wp-json/wp/v2";
const N = Number(process.argv[2] || 10);
const IMG_DIR = "public/photos/blog";
mkdirSync(IMG_DIR, { recursive: true });

const dec = (s = "") =>
  s.replace(/&#8211;/g, "–").replace(/&#8212;/g, "—").replace(/&#8217;/g, "'").replace(/&#8216;/g, "'")
   .replace(/&#8220;/g, "“").replace(/&#8221;/g, "”").replace(/&#8230;/g, "…").replace(/&nbsp;/g, " ")
   .replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"')
   .replace(/&#0?39;/g, "'").replace(/&#8594;/g, "→").replace(/&hellip;/g, "…").trim();

const stripTags = (h = "") => dec(h.replace(/<[^>]+>/g, " ").replace(/\s+/g, " "));
const slugify = (t) => dec(t).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "")
  .replace(/[^a-z0-9\s-]/g, "").trim().replace(/\s+/g, "-").slice(0, 60);

function categoria(title, txt) {
  const s = (title + " " + txt).toLowerCase();
  if (/\b(otite|ouvido|otoscop|cer[uú]men|canal auditiv|otoendoscop)/.test(s)) return "otologia";
  if (/\b(sarna|demod|escabiose|pulga|carrapat|[áa]caro|parasit|piolho)/.test(s)) return "parasitas";
  if (/\b(pioderma|bacterian|f[uú]ngic|micose|dermatofit|fungo|antif[uú]ngic|antibiograma|infec[çc])/.test(s)) return "infeccoes";
  if (/\b(al[ée]rg|at[óo]pic|atopia|hipersensib|dermatite|coceira|prurido)/.test(s)) return "alergias";
  if (/\b(banho|hidratant|dermocosm|fotoprote|nutri[çc]|alimenta[çc]|preven[çc]|probi[óo]tic|microbioma|shampoo|pele saud)/.test(s)) return "cuidados";
  return "cuidados";
}

async function baixaImg(url, dest) {
  try {
    const r = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0" } });
    if (!r.ok) return null;
    const buf = Buffer.from(await r.arrayBuffer());
    const out = await sharp(buf).rotate().resize({ width: 1200, withoutEnlargement: true }).jpeg({ quality: 72, mozjpeg: true }).toBuffer();
    writeFileSync(dest, out);
    return true;
  } catch { return null; }
}

async function metaDesc(link, excerpt) {
  try {
    const r = await fetch(link, { headers: { "User-Agent": "Mozilla/5.0" } });
    const h = await r.text();
    const m = h.match(/<meta name="description" content="([^"]*)"/i) || h.match(/<meta property="og:description" content="([^"]*)"/i);
    if (m && m[1]) return dec(m[1]).slice(0, 300);
  } catch {}
  return stripTags(excerpt).slice(0, 200);
}

function htmlParaBlocos(html, slug, imgMap) {
  const root = parse(html);
  const blocks = [];
  const walk = (parent) => {
  for (const node of parent.childNodes) {
    if (node.nodeType !== 1) continue;
    const tag = node.rawTagName?.toLowerCase();
    if (!tag) continue;
    // entra em containers (div/section/article/main/header) que envolvem o conteúdo
    if (["div", "section", "article", "main", "header"].includes(tag)) {
      walk(node);
      continue;
    }
    if (tag === "h2" || tag === "h3") {
      const text = stripTags(node.innerHTML);
      if (text) blocks.push({ type: tag, text, id: slugify(text) });
    } else if (tag === "p") {
      const img = node.querySelector("img");
      if (img && stripTags(node.innerHTML).length < 3) {
        const src = img.getAttribute("src");
        if (imgMap[src]) blocks.push({ type: "image", src: imgMap[src], alt: img.getAttribute("alt") || "", caption: undefined });
      } else {
        const text = stripTags(node.innerHTML);
        if (text && text.length > 1) blocks.push({ type: "p", text });
      }
    } else if (tag === "ul" || tag === "ol") {
      const items = node.querySelectorAll("li").map((li) => stripTags(li.innerHTML)).filter(Boolean);
      if (items.length) blocks.push({ type: tag, items });
    } else if (tag === "blockquote") {
      const text = stripTags(node.innerHTML);
      if (text) blocks.push({ type: "quote", text });
    } else if (tag === "figure") {
      const img = node.querySelector("img");
      const src = img?.getAttribute("src");
      if (src && imgMap[src]) {
        const cap = node.querySelector("figcaption");
        blocks.push({ type: "image", src: imgMap[src], alt: img.getAttribute("alt") || "", caption: cap ? stripTags(cap.innerHTML) : undefined });
      }
    }
  }
  };
  walk(root);
  return blocks;
}

const posts = await (await fetch(`${WP}/posts?per_page=${N}&_embed=1`, { headers: { "User-Agent": "Mozilla/5.0" } })).json();
const out = [];

for (const p of posts) {
  const slug = p.slug;
  const title = dec(p.title.rendered);
  const html = p.content.rendered;
  const root = parse(html);

  // coleta imagens (featured + inline) e baixa
  const imgMap = {};
  const featured = p._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
  const coverPath = `/photos/blog/${slug}-cover.jpg`;
  let coverOk = featured ? await baixaImg(featured, `public${coverPath}`) : null;

  const inlineImgs = root.querySelectorAll("img").map((i) => i.getAttribute("src")).filter(Boolean);
  let n = 0;
  for (const src of [...new Set(inlineImgs)]) {
    if (!/wp-content\/uploads/.test(src)) continue;
    n++;
    const dest = `/photos/blog/${slug}-${n}.jpg`;
    if (await baixaImg(src, `public${dest}`)) imgMap[src] = dest;
  }
  // se não tem featured, usa a 1a inline como cover
  let cover = coverOk ? coverPath : (Object.values(imgMap)[0] || "/photos/atendimento.jpg");

  const blocks = htmlParaBlocos(html, slug, imgMap);
  const txt = stripTags(html);
  const words = txt.split(/\s+/).length;
  const excerpt = await metaDesc(p.link, p.excerpt.rendered);

  out.push({
    slug, title,
    excerpt,
    cover, coverAlt: title,
    category: categoria(title, txt),
    tags: [],
    publishedAt: p.date, updatedAt: p.modified,
    readingMinutes: Math.max(2, Math.round(words / 200)),
    author: { name: "Equipe PetDerma", role: "Dermatologia Veterinária" },
    content: blocks,
  });
  console.error(`ok ${slug} (${blocks.length} blocos, ${n} imgs)`);
}

const ts = `// AUTOGERADO pela migração do WordPress — ${out.length} posts. Não editar à mão.
import type { BlogPost } from "./blog-data";

export const POSTS_MIGRADOS: BlogPost[] = ${JSON.stringify(out, null, 2)};
`;
writeFileSync("src/lib/blog-migrados.ts", ts);
console.error(`\n>> ${out.length} posts -> src/lib/blog-migrados.ts`);
