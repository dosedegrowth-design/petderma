import { parse } from "node-html-parser";
import sharp from "sharp";
import { writeFileSync, mkdirSync, existsSync } from "fs";

const WP = "https://petderma.com.br/wp-json/wp/v2";
const IMG_DIR = "public/photos/blog";
mkdirSync(IMG_DIR, { recursive: true });
const UA = { "User-Agent": "Mozilla/5.0" };

const dec = (s = "") =>
  s.replace(/&#8211;/g, "–").replace(/&#8212;/g, "—").replace(/&#8217;/g, "'").replace(/&#8216;/g, "'")
   .replace(/&#8220;/g, "“").replace(/&#8221;/g, "”").replace(/&#8230;/g, "…").replace(/&nbsp;/g, " ")
   .replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"')
   .replace(/&#0?39;/g, "'").replace(/&#8594;/g, "→").replace(/&hellip;/g, "…")
   .replace(/&#171;|&laquo;/g, "«").replace(/&#187;|&raquo;/g, "»").replace(/\s+/g, " ").trim();
const stripTags = (h = "") => dec(h.replace(/<[^>]+>/g, " "));
const slugify = (t) => dec(t).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "")
  .replace(/[^a-z0-9\s-]/g, "").trim().replace(/\s+/g, "-").slice(0, 60);

function categoria(title, txt) {
  const t = title.toLowerCase();
  const m = (s) => {
    if (/otite|ouvido|otoscop|cer[uú]men|canal auditiv|otoendoscop/.test(s)) return "otologia";
    if (/sarna|demod|escabiose|pulga|carrapat|[áa]caro|parasit|piolho|leishman/.test(s)) return "parasitas";
    if (/pioderma|bacterian|f[uú]ngic|micose|dermatofit|antif[uú]ngic|antibiograma|interdigital|abscesso/.test(s)) return "infeccoes";
    if (/al[ée]rg|at[óo]pic|atopia|hipersensib|coceira|prurido|lambedura|picada|urtic/.test(s)) return "alergias";
    if (/nutri|[ôo]mega|probi[óo]tic|microbioma|aliment|banho|hidratant|dermocosm|fotoprote|suplement|vitamina|integrativa|preven|cuidado/.test(s)) return "cuidados";
    return null;
  };
  return m(t) || m(txt.slice(0, 600).toLowerCase()) || "cuidados";
}

async function baixaImg(url, dest) {
  try {
    if (existsSync(dest)) return true;
    const r = await fetch(url, { headers: UA });
    if (!r.ok) return null;
    const buf = Buffer.from(await r.arrayBuffer());
    const out = await sharp(buf).rotate().resize({ width: 1200, withoutEnlargement: true }).jpeg({ quality: 72, mozjpeg: true }).toBuffer();
    writeFileSync(dest, out);
    return true;
  } catch { return null; }
}
async function metaDesc(link, excerpt) {
  try {
    const r = await fetch(link, { headers: UA });
    const h = await r.text();
    const m = h.match(/<meta name="description" content="([^"]*)"/i) || h.match(/<meta property="og:description" content="([^"]*)"/i);
    if (m && m[1]) return dec(m[1]).slice(0, 300);
  } catch {}
  return stripTags(excerpt).slice(0, 200);
}
// lista é TOC se todos os <li> forem só um link âncora (#...)
function ehTOC(node) {
  const lis = node.querySelectorAll("li");
  if (!lis.length) return false;
  return lis.every((li) => {
    const a = li.querySelector("a");
    return a && (a.getAttribute("href") || "").startsWith("#");
  });
}
function htmlParaBlocos(html, imgMap) {
  const root = parse(html);
  const blocks = [];
  const walk = (parent) => {
    for (const node of parent.childNodes) {
      if (node.nodeType !== 1) continue;
      const tag = node.rawTagName?.toLowerCase();
      if (!tag) continue;
      if (["div", "section", "article", "main", "header", "nav"].includes(tag)) { walk(node); continue; }
      if (tag === "h2" || tag === "h3") {
        const text = stripTags(node.innerHTML);
        if (text) blocks.push({ type: tag, text, id: slugify(text) });
      } else if (tag === "p") {
        const img = node.querySelector("img");
        if (img && stripTags(node.innerHTML).length < 3) {
          const src = img.getAttribute("src");
          if (imgMap[src]) blocks.push({ type: "image", src: imgMap[src], alt: img.getAttribute("alt") || "" });
        } else {
          const text = stripTags(node.innerHTML);
          if (text && text.length > 1) blocks.push({ type: "p", text });
        }
      } else if (tag === "ul" || tag === "ol") {
        if (ehTOC(node)) continue; // pula índice/TOC do WP
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

// ---- 1) todas as tags (id -> nome) ----
const tagMap = {};
for (let page = 1; page <= 10; page++) {
  const r = await fetch(`${WP}/tags?per_page=100&page=${page}&_fields=id,name`, { headers: UA });
  if (!r.ok) break;
  const arr = await r.json();
  if (!arr.length) break;
  for (const t of arr) tagMap[t.id] = dec(t.name);
}
console.error(`tags carregadas: ${Object.keys(tagMap).length}`);

// ---- 2) todos os posts ----
let all = [];
for (let page = 1; page <= 10; page++) {
  const r = await fetch(`${WP}/posts?per_page=100&page=${page}&_embed=1`, { headers: UA });
  if (!r.ok) break;
  const arr = await r.json();
  if (!arr.length) break;
  all = all.concat(arr);
  console.error(`fetch posts pág ${page}: +${arr.length} (total ${all.length})`);
}

const out = [];
let done = 0;
async function processa(p) {
  const slug = p.slug;
  const title = dec(p.title.rendered);
  const html = p.content.rendered;
  const root = parse(html);
  const imgMap = {};
  const featured = p._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
  let cover = "/photos/atendimento.jpg";
  if (featured && await baixaImg(featured, `public/photos/blog/${slug}-cover.jpg`)) cover = `/photos/blog/${slug}-cover.jpg`;
  const inline = [...new Set(root.querySelectorAll("img").map((i) => i.getAttribute("src")).filter((s) => s && /wp-content\/uploads/.test(s)))];
  let n = 0;
  for (const src of inline) { n++; const d = `/photos/blog/${slug}-${n}.jpg`; if (await baixaImg(src, `public${d}`)) imgMap[src] = d; }
  if (cover === "/photos/atendimento.jpg" && Object.values(imgMap)[0]) cover = Object.values(imgMap)[0];

  const blocks = htmlParaBlocos(html, imgMap);
  const txt = stripTags(html);
  const words = txt.split(/\s+/).length;
  const excerpt = await metaDesc(p.link, p.excerpt.rendered);
  const tags = (p.tags || []).map((id) => tagMap[id]).filter(Boolean);

  out.push({
    slug, title, excerpt, cover, coverAlt: title,
    category: categoria(title, txt),
    tags,
    publishedAt: p.date, updatedAt: p.modified,
    readingMinutes: Math.max(2, Math.round(words / 200)),
    author: { name: "Equipe PetDerma", role: "Dermatologia Veterinária" },
    content: blocks,
  });
  done++;
  if (done % 25 === 0) console.error(`processados ${done}/${all.length}`);
}

// concorrência limitada
const CONC = 6;
for (let i = 0; i < all.length; i += CONC) {
  await Promise.all(all.slice(i, i + CONC).map(processa));
}

// ordena por data desc
out.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
writeFileSync("src/lib/blog-migrados.json", JSON.stringify(out));
console.error(`\n>> ${out.length} posts -> src/lib/blog-migrados.json`);
