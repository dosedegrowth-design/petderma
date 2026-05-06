import type { MetadataRoute } from "next";
import { SITE, UNIDADES } from "@/lib/constants";
import { SERVICOS_DETAIL } from "@/lib/services-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const base: MetadataRoute.Sitemap = [
    { url: SITE.url, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE.url}/sobre`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE.url}/equipe`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE.url}/servicos`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE.url}/unidades`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE.url}/casos`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE.url}/contato`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  ];

  const servicosPages: MetadataRoute.Sitemap = SERVICOS_DETAIL.map((s) => ({
    url: `${SITE.url}/servicos/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const unidadesPages: MetadataRoute.Sitemap = UNIDADES.map((u) => ({
    url: `${SITE.url}/unidades/${u.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...base, ...servicosPages, ...unidadesPages];
}
