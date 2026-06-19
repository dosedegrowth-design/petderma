import type { Metadata, Viewport } from "next";
import { Archivo } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";
import "./globals.css";
import { ScrollProgress } from "@/components/motion/ScrollProgress";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyWhatsApp } from "@/components/StickyWhatsApp";
import { ExitIntentPopup } from "@/components/ExitIntentPopup";
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
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE.url}/#organization`,
      name: SITE.fullName,
      url: SITE.url,
      logo: { "@type": "ImageObject", url: `${SITE.url}/brand/logo.png` },
      image: `${SITE.url}/photos/hero.jpg`,
      description: SITE.description,
      sameAs: [SITE.social.instagram, SITE.social.facebook, SITE.social.linkedin],
      contactPoint: UNIDADES.map((u) => ({
        "@type": "ContactPoint",
        telephone: `+${u.telefone}`,
        contactType: "reservations",
        areaServed: "BR",
        availableLanguage: "Portuguese",
      })),
    },
    {
      "@type": "WebSite",
      "@id": `${SITE.url}/#website`,
      url: SITE.url,
      name: SITE.name,
      inLanguage: "pt-BR",
      publisher: { "@id": `${SITE.url}/#organization` },
    },
    {
  "@type": "VeterinaryCare",
  "@id": `${SITE.url}/#clinic`,
  name: SITE.name,
  description: SITE.description,
  url: SITE.url,
  image: `${SITE.url}/photos/hero.jpg`,
  logo: `${SITE.url}/brand/logo.png`,
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
    },
  ],
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
        <ExitIntentPopup />
        <Analytics />
        <SpeedInsights />
        {/* Microsoft Clarity */}
        <Script id="ms-clarity" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","TODO_CLARITY_ID");`}
        </Script>
        {/* Chat (Atendimento) */}
        <Script id="chatwoot-widget" strategy="afterInteractive">
          {`(function(d,t){var BASE_URL="https://develop.aifocus.dev";var g=d.createElement(t),s=d.getElementsByTagName(t)[0];g.src=BASE_URL+"/packs/js/sdk.js";g.async=true;s.parentNode.insertBefore(g,s);g.onload=function(){window.chatwootSDK.run({websiteToken:'UqJEud6UNKZgzF95Y6M7U9ax',baseUrl:BASE_URL})}})(document,"script");`}
        </Script>
      </body>
    </html>
  );
}
