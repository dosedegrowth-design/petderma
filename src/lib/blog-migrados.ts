// Posts migrados do WordPress (gerado por scripts/migrate-blog-full.mjs -> blog-migrados.json)
import type { BlogPost } from "./blog-data";
import data from "./blog-migrados.json";

export const POSTS_MIGRADOS = data as unknown as BlogPost[];
