// Casos resolvidos — fonte única (home + página de detalhe /casos/[slug])
// Conforme o cliente envia foto + texto de cada caso, preencher os campos abaixo.
// Campos opcionais (queixa, diagnostico, tratamento, resultado, galeria, depoimento)
// só aparecem na página de detalhe quando preenchidos.

export type CasoImg = { src: string; legenda?: string };

export type Caso = {
  slug: string;
  condicao: string;        // ex: "Otite crônica"
  pet: string;             // ex: "Mel"
  raca: string;            // ex: "Golden Retriever"
  tempo: string;           // ex: "3 semanas"
  resumo: string;          // frase curta (card + topo da página)
  fotoCard: string;        // imagem do card na home
  fotoHero?: string;       // imagem grande no topo da página de detalhe (cai pra fotoCard)
  galeria?: CasoImg[];     // antes/depois, exames, etc.
  queixa?: string;         // o que o tutor relatou
  diagnostico?: string;    // o que encontramos / exames
  tratamento?: string;     // protocolo aplicado
  resultado?: string;      // desfecho
  depoimento?: { texto: string; autor: string };
  unidade?: string;        // ex: "Campo Belo"
  profissional?: string;   // ex: "Dr. Douglas Bessa"
};

export const CASOS: Caso[] = [
  {
    slug: "otite-cronica-mel",
    condicao: "Otite crônica",
    pet: "Mel",
    raca: "Golden Retriever",
    tempo: "3 semanas",
    resumo: "Otites de repetição que voltavam mesmo com tratamento — até a causa de base ser identificada.",
    fotoCard: "/photos/consultorio-1.jpg",
  },
  {
    slug: "dermatite-atopica-theo",
    condicao: "Dermatite atópica",
    pet: "Theo",
    raca: "Shih Tzu",
    tempo: "2 meses",
    resumo: "Coceira intensa e lesões na pele controladas com protocolo individualizado.",
    fotoCard: "/photos/consultorio-2.jpg",
  },
  {
    slug: "sarna-demodicica-luna",
    condicao: "Sarna demodícica",
    pet: "Luna",
    raca: "SRD",
    tempo: "6 semanas",
    resumo: "Falhas de pelo e feridas tratadas até a pele se recuperar por completo.",
    fotoCard: "/photos/consultorio-3.jpg",
  },
  {
    slug: "pioderma-profundo-bento",
    condicao: "Pioderma profundo",
    pet: "Bento",
    raca: "Bulldog",
    tempo: "4 semanas",
    resumo: "Infecção bacteriana profunda resolvida com diagnóstico preciso e tratamento direcionado.",
    fotoCard: "/photos/consultorio-4.jpg",
  },
];

export function getCaso(slug: string) {
  return CASOS.find((c) => c.slug === slug);
}
