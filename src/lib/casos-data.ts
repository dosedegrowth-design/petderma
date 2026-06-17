// Casos resolvidos — fonte única (home + página de detalhe /casos/[slug])
// Texto otimizado a partir do material clínico do Dr. Douglas Bessa.
// IMAGENS: trocar os arquivos em /public/photos/casos/{slug}.jpg pelos antes/depois reais.

export type CasoImg = { src: string; legenda?: string };

export type Caso = {
  slug: string;
  condicao: string;        // ex: "Blefarite alérgica"
  resumo: string;          // frase curta (card + topo da página)
  texto: string[];         // parágrafos do corpo da página de detalhe
  fotoCard: string;        // imagem do card na home
  fotoAntesDepois?: string;// imagem antes/depois na página de detalhe (cai pra fotoCard)
  raca?: string;
  tempo?: string;          // ex: "6 semanas" (badge "Tratado em X")
  pet?: string;
  unidade?: string;
  profissional?: string;
  depoimento?: { texto: string; autor: string };
};

export const CASOS: Caso[] = [
  {
    slug: "blefarite-alergica",
    condicao: "Blefarite alérgica",
    resumo: "Vermelhidão e inflamação ao redor dos olhos controladas ao tratar a causa de base.",
    fotoCard: "/photos/casos/blefarite-alergica.jpg",
    profissional: "Dr. Douglas Bessa",
    texto: [
      "A blefarite é a inflamação das pálpebras — e costuma aparecer como vermelhidão, inchaço e coceira ao redor dos olhos, comprometendo o conforto e o bem-estar do pet.",
      "Na maioria dos pacientes ela não é um problema isolado: está associada a doenças alérgicas, especialmente a dermatite atópica canina. Outras causas possíveis incluem infecções bacterianas, demodicose (ácaros), doenças autoimunes e alergias alimentares.",
      "Por isso, o tratamento precisa ir além de aliviar os sintomas. Identificar e tratar a causa primária é o que evita as recidivas e devolve qualidade de vida ao paciente.",
      "Com diagnóstico precoce e acompanhamento especializado, foi possível controlar a blefarite e preservar tanto a saúde ocular quanto a dermatológica deste paciente — como mostra a evolução nas imagens. 🐾",
    ],
  },
  {
    slug: "pioderma-cronico",
    condicao: "Pioderma crônico",
    resumo: "Infecção de pele profunda e recorrente resolvida ao tratar a doença de base.",
    fotoCard: "/photos/casos/pioderma-cronico.jpg",
    profissional: "Dr. Douglas Bessa",
    texto: [
      "As piodermites crônicas e recorrentes exigem muito mais do que tratar a infecção em si.",
      "Boa parte desses pacientes tem uma doença de base — como dermatite atópica, alergia alimentar ou alterações hormonais — que favorece o reaparecimento frequente das lesões na pele.",
      "Neste caso, além de controlar a infecção, identificar e tratar a causa primária foi fundamental para restaurar a saúde da pele e reduzir o risco de novas recidivas.",
      "Com diagnóstico preciso e acompanhamento especializado, alcançamos um controle duradouro e devolvemos qualidade de vida ao paciente. 🐾",
    ],
  },
  {
    slug: "pioderma-recorrente",
    condicao: "Pioderma recorrente",
    resumo: "Lesões de pele persistentes controladas ao investigar a causa por trás da infecção.",
    fotoCard: "/photos/casos/pioderma-recorrente.jpg",
    profissional: "Dr. Douglas Bessa",
    texto: [
      "Piodermites recorrentes são um grande desafio, principalmente quando existe uma doença de base associada.",
      "Muitas vezes, as infecções de pele persistentes estão ligadas a problemas alérgicos ou a doenças endócrinas, como hipotireoidismo e hiperadrenocorticismo. Por isso, tratar apenas a infecção não basta.",
      "Com a investigação correta, identificamos e controlamos a causa primária — e não só a consequência.",
      "O resultado é um controle duradouro, com menos recidivas e muito mais conforto e qualidade de vida para o paciente. 🐾",
    ],
  },
  {
    slug: "demodiciose-generalizada",
    condicao: "Demodiciose generalizada",
    resumo: "Perda intensa de pelos e inflamação revertidas, com recuperação completa da pelagem.",
    fotoCard: "/photos/casos/demodiciose-generalizada.jpg",
    profissional: "Dr. Douglas Bessa",
    texto: [
      "A demodiciose canina é causada pela proliferação excessiva do ácaro Demodex, naturalmente presente na pele. Na forma generalizada, provoca perda intensa de pelos, inflamação e feridas.",
      "Este paciente chegou com um quadro generalizado, com grande perda de pelagem e a pele bastante comprometida.",
      "Após o diagnóstico correto e o tratamento adequado, houve recuperação completa da pelagem e uma melhora marcante na qualidade de vida — como as imagens mostram. 🐾",
    ],
  },
  {
    slug: "dermatite-atopica-ocular",
    condicao: "Alergia com coceira nos olhos",
    resumo: "Coceira e inflamação ao redor dos olhos controladas com tratamento individualizado.",
    fotoCard: "/photos/casos/dermatite-atopica-ocular.jpg",
    profissional: "Dr. Douglas Bessa",
    texto: [
      "As alergias em cães frequentemente causam coceira e inflamação ao redor dos olhos, comprometendo o conforto e a qualidade de vida do paciente.",
      "Com um diagnóstico preciso e um tratamento individualizado, é possível controlar os sintomas de forma eficaz — reduzindo a coceira, melhorando a saúde da pele e devolvendo o bem-estar ao pet.",
      "Vale lembrar: a dermatite atópica não tem cura, mas tem controle. E o controle adequado faz toda a diferença na vida do seu melhor amigo. 🐾",
    ],
  },
  {
    slug: "dermatite-atopica-canina",
    condicao: "Dermatite atópica canina",
    resumo: "Inflamação intensa e queda de pelos revertidas — sem uso contínuo de corticoide.",
    fotoCard: "/photos/casos/dermatite-atopica-canina.jpg",
    profissional: "Dr. Douglas Bessa",
    texto: [
      "Caso de dermatite atópica com intensa inflamação da pele, vermelhidão e perda de pelos.",
      "Após uma investigação dermatológica completa e a instituição de um tratamento individualizado, foi possível controlar os sintomas e promover a recuperação da pele e da pelagem.",
      "O melhor: tudo isso sem a necessidade do uso contínuo de corticoides — priorizando a saúde do paciente a longo prazo. 🐾",
    ],
  },
];

export function getCaso(slug: string) {
  return CASOS.find((c) => c.slug === slug);
}
