import type { Metadata, Viewport } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";
import { ScrollProgress } from "@/components/motion/ScrollProgress";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyWhatsApp } from "@/components/StickyWhatsApp";
import { SITE, UNIDADES } from "@/lib/constants";

const archivo = Archivo({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-archivo",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — Dermatologia Veterinária em São Paulo`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "dermatologista veterinário SP",
    "dermatologia veterinária São Paulo",
    "veterinário Campo Belo",
    "veterinário Tatuapé",
    "veterinário São José dos Campos",
    "alergia em cães",
    "otite cachorro",
    "sarna pet",
    "dermatite atópica",
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE.url,
    siteName: SITE.name,
    title: SITE.fullName,
    description: SITE.description,
    images: ["/photos/hero.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.fullName,
    description: SITE.description,
    images: ["/photos/hero.jpg"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#180A32",
  width: "device-width",
  initialScale: 1,
};

const veterinaryCareSchema = {
  "@context": "https://schema.org",
  "@type": "VeterinaryCare",
  name: SITE.name,
  description: SITE.description,
  url: SITE.url,
  image: `${SITE.url}/photos/hero.jpg`,
  priceRange: "$$",
  medicalSpecialty: "Dermatology",
  sameAs: [SITE.social.instagram, SITE.social.facebook, SITE.social.linkedin],
  location: UNIDADES.map((u) => ({
    "@type": "VeterinaryCare",
    name: `${SITE.name} — ${u.nome}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: u.endereco,
      addressLocality: u.cidade,
      postalCode: u.cep,
      addressRegion: "SP",
      addressCountry: "BR",
    },
    telephone: `+${u.telefone}`,
    geo: { "@type": "GeoCoordinates", latitude: u.coords.lat, longitude: u.coords.lng },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:00",
        closes: "17:00",
      },
    ],
  })),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={archivo.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(veterinaryCareSchema) }}
        />
      </head>
      <body className="font-sans antialiased">
        <ScrollProgress />
        <Header />
        <main>{children}</main>
        <Footer />
        <StickyWhatsApp />
      </body>
    </html>
  );
}
