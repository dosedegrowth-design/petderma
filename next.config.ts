import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // URLs com barra final (igual ao site antigo / WordPress) — preserva canonical no cutover
  trailingSlash: true,
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 365,
    deviceSizes: [360, 480, 640, 768, 1024, 1280, 1536, 1920],
    imageSizes: [64, 128, 200, 260, 320, 480],
  },
  async redirects() {
    return [
      { source: "/quem-somos", destination: "/sobre", permanent: true },
      { source: "/galeria-de-fotos", destination: "/sobre", permanent: true },
      { source: "/faq", destination: "/#faq", permanent: true },
      { source: "/petderma-unidade-campo-belo", destination: "/unidades/campo-belo", permanent: true },
      { source: "/petderma-unidade-tatuape", destination: "/unidades/tatuape", permanent: true },
      { source: "/petderma-unidade-sao-jose-dos-campos", destination: "/unidades/sao-jose-dos-campos", permanent: true },
    ];
  },
};

export default nextConfig;
