import { POSTS_MIGRADOS } from "./blog-migrados";
export type BlogCategory =
  | "alergias"
  | "otologia"
  | "parasitas"
  | "infeccoes"
  | "cuidados"
  | "casos-clinicos"
  | "noticias";

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  cover: string;
  coverAlt: string;
  category: BlogCategory;
  tags: string[];
  publishedAt: string; // ISO date
  updatedAt?: string;
  readingMinutes: number;
  author: {
    name: string;
    role: string;
    avatar?: string;
  };
  // Markdown-like content (rendered as React)
  content: ContentBlock[];
  faq?: { pergunta: string; resposta: string }[];
  related?: string[]; // related post slugs
  noindex?: boolean; // conteúdo magro — não indexar
};

export type ContentBlock =
  | { type: "h2"; text: string; id: string }
  | { type: "h3"; text: string; id: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "quote"; text: string; cite?: string }
  | { type: "callout"; variant: "info" | "warning" | "tip"; title: string; text: string }
  | { type: "image"; src: string; alt: string; caption?: string };

export const CATEGORIES: { slug: BlogCategory; nome: string; descricao: string; cor: string }[] = [
  { slug: "alergias", nome: "Alergias", descricao: "Dermatites alérgicas, atópicas e alimentares", cor: "bg-brand-mint" },
  { slug: "otologia", nome: "Otologia", descricao: "Otites, ouvidos e canal auditivo", cor: "bg-brand-violet-soft" },
  { slug: "parasitas", nome: "Parasitas", descricao: "Sarnas, pulgas, ácaros e carrapatos", cor: "bg-brand-cream" },
  { slug: "infeccoes", nome: "Infecções", descricao: "Bacterianas, fúngicas e zoonoses", cor: "bg-brand-sky" },
  { slug: "cuidados", nome: "Cuidados Gerais", descricao: "Dia a dia, banho, alimentação e prevenção", cor: "bg-brand-cream-2" },
  { slug: "casos-clinicos", nome: "Casos Clínicos", descricao: "Histórias reais de pets tratados", cor: "bg-brand-blush" },
  { slug: "noticias", nome: "Notícias", descricao: "Atualidades em dermatologia veterinária", cor: "bg-brand-violet-soft" },
];

export const POSTS: BlogPost[] = [
  ...POSTS_MIGRADOS,
  // ============ POST 1 ============
  {
    slug: "dermatite-atopica-em-caes-guia-completo",
    title: "Dermatite Atópica em Cães: Guia Completo para Tutores",
    excerpt:
      "Tudo o que você precisa saber sobre dermatite atópica canina: causas, sintomas, diagnóstico, tratamentos modernos e como conviver com a condição.",
    cover: "/photos/atendimento.jpg",
    coverAlt: "Veterinário examinando a pele de um cão",
    category: "alergias",
    tags: ["dermatite atópica", "alergia", "coceira", "cães", "imunoterapia"],
    publishedAt: "2026-04-20",
    updatedAt: "2026-05-02",
    readingMinutes: 9,
    author: { name: "Equipe PetDerma", role: "Dermatologia Veterinária" },
    content: [
      {
        type: "p",
        text: "A dermatite atópica é uma das doenças de pele mais comuns em cães e uma das principais causas de coceira crônica. Estima-se que afete entre 10% e 15% da população canina, com incidência crescente nos centros urbanos como São Paulo. Apesar de incômoda, é uma condição totalmente controlável quando diagnosticada corretamente.",
      },
      {
        type: "callout",
        variant: "info",
        title: "Em resumo",
        text: "Dermatite atópica é uma alergia genética a substâncias do ambiente (ácaros, pólen, mofo). Não tem cura, mas tem ótimo controle com tratamento individualizado. Quanto antes diagnosticar, melhor a qualidade de vida do pet.",
      },
      { type: "h2", id: "o-que-e", text: "O que é dermatite atópica" },
      {
        type: "p",
        text: "A dermatite atópica é uma doença inflamatória crônica e geneticamente predisposta. O sistema imunológico do cão reage de forma exagerada a alérgenos ambientais que normalmente seriam inofensivos: ácaros da poeira, pólen, mofo, plantas e até alguns alimentos. Essa reação produz coceira intensa, vermelhidão e infecções secundárias na pele.",
      },
      {
        type: "p",
        text: "A condição costuma se manifestar entre 6 meses e 3 anos de idade. Algumas raças têm predisposição genética mais alta: Bulldog Francês, Shar-Pei, West Highland White Terrier, Labrador, Golden Retriever, Boxer e Shih Tzu estão entre as mais afetadas.",
      },
      { type: "h2", id: "sintomas", text: "Como identificar os sintomas" },
      {
        type: "p",
        text: "Os sinais costumam aparecer gradualmente e podem ser confundidos com outras condições. Os mais frequentes são:",
      },
      {
        type: "ul",
        items: [
          "Coceira persistente, especialmente em patas, orelhas, axilas e barriga",
          "Lambedura excessiva nas patas (deixa pelos amarronzados pela saliva)",
          "Vermelhidão e descamação da pele",
          "Otites de repetição — dermatite atópica é a causa #1 de otite crônica",
          "Manchas escurecidas e pele engrossada em áreas crônicas",
          "Mau cheiro corporal por infecções secundárias",
          "Inquietação noturna devido à coceira",
        ],
      },
      {
        type: "callout",
        variant: "warning",
        title: "Atenção",
        text: "Coceira que dura mais de 2-3 semanas SEMPRE merece avaliação dermatológica. Quanto mais cedo, mais simples o tratamento e menor o sofrimento do pet.",
      },
      { type: "h2", id: "diagnostico", text: "Como é feito o diagnóstico" },
      {
        type: "p",
        text: "Não existe um exame único que confirme dermatite atópica. O diagnóstico é feito por exclusão e investigação cuidadosa. Na PetDerma, seguimos protocolo internacional baseado nos critérios de Favrot (2010):",
      },
      {
        type: "ol",
        items: [
          "Anamnese detalhada — histórico do pet, ambiente, dieta, sazonalidade",
          "Exame clínico completo da pele, patas, ouvidos e orelhas",
          "Citologia para identificar infecções bacterianas ou fúngicas secundárias",
          "Raspado cutâneo para excluir parasitas (sarna)",
          "Dieta de eliminação (8-12 semanas) para excluir alergia alimentar",
          "Teste sorológico ou intradérmico para identificar alérgenos específicos",
        ],
      },
      { type: "h2", id: "tratamento", text: "Tratamentos modernos disponíveis" },
      {
        type: "h3",
        id: "medicacao",
        text: "Medicação direcionada",
      },
      {
        type: "p",
        text: "A medicina veterinária avançou muito nos últimos 10 anos. Hoje temos opções específicas, com menos efeitos colaterais que os antigos corticoides:",
      },
      {
        type: "ul",
        items: [
          "Oclacitinibe (Apoquel): inibidor seletivo da via JAK, controla coceira em 24-48h",
          "Lokivetmab (Cytopoint): anticorpo monoclonal injetável com efeito de 4-8 semanas",
          "Ciclosporina: imunossupressor para casos graves ou crônicos",
          "Corticoides tópicos pontuais para controle de surtos agudos",
        ],
      },
      {
        type: "h3",
        id: "imunoterapia",
        text: "Imunoterapia personalizada",
      },
      {
        type: "p",
        text: "Após identificar os alérgenos específicos do pet (ácaros, pólen, mofo etc), preparamos uma solução de dessensibilização individualizada. O cão recebe doses crescentes durante 12 meses para 'reeducar' o sistema imune. Taxa de sucesso de 60-70% em casos bem selecionados.",
      },
      {
        type: "h3",
        id: "manejo",
        text: "Manejo ambiental e banhos",
      },
      {
        type: "ul",
        items: [
          "Banhos terapêuticos a cada 7-10 dias com xampu medicamentoso",
          "Aspiração frequente de tapetes e camas",
          "Coleiras antiparasitárias para prevenir hipersensibilidade à pulga",
          "Evitar passeios em horários de maior pólen (manhã cedo e fim de tarde no outono)",
          "Suplementação com ômega 3 (EPA/DHA) para suporte da barreira cutânea",
        ],
      },
      { type: "h2", id: "convivencia", text: "Convivência com a condição" },
      {
        type: "p",
        text: "Dermatite atópica não tem cura, mas tem excelente controle. Com o protocolo certo, mais de 85% dos pets vivem sem coceira ou com surtos esporádicos curtos. A maioria precisa de medicação contínua em doses baixas, e revisões a cada 3-6 meses.",
      },
      {
        type: "callout",
        variant: "tip",
        title: "Dica importante",
        text: "Mantenha um diário de surtos: anote datas, sintomas e gatilhos suspeitos. Isso ajuda muito o veterinário a ajustar o tratamento e identificar padrões sazonais.",
      },
    ],
    faq: [
      {
        pergunta: "Dermatite atópica é hereditária?",
        resposta:
          "Sim. É uma doença geneticamente predisposta. Cães com pais ou irmãos atópicos têm risco aumentado. Por isso recomendamos que pets com diagnóstico não sejam usados para reprodução.",
      },
      {
        pergunta: "Posso tratar com remédio caseiro?",
        resposta:
          "Não. Dermatite atópica exige medicação prescrita por veterinário. Remédios humanos podem ser tóxicos (Benadryl em algumas raças, antihistamínicos com ibuprofeno). Sempre consulte o profissional.",
      },
      {
        pergunta: "Meu pet vai precisar tomar remédio para sempre?",
        resposta:
          "Geralmente sim, mas em doses cada vez menores. Pets bem controlados ficam só com manutenção (banhos + suplementação) e medicação esporádica em surtos. Imunoterapia pode reduzir a necessidade de medicação.",
      },
    ],
    related: ["otite-cronica-em-caes-guia-completo", "como-identificar-sarna-no-pet"],
  },

  // ============ POST 2 ============
  {
    slug: "otite-cronica-em-caes-guia-completo",
    title: "Otite Crônica em Cães: Por Que Volta Sempre e Como Resolver",
    excerpt:
      "Otite recorrente nunca é apenas otite. Entenda as causas profundas, por que tratamentos comuns falham e quando procurar um dermatologista veterinário.",
    cover: "/photos/consultorio-1.jpg",
    coverAlt: "Veterinário examinando ouvido de cão com otoscópio",
    category: "otologia",
    tags: ["otite", "ouvido", "otoendoscopia", "cães", "Malassezia"],
    publishedAt: "2026-04-15",
    updatedAt: "2026-05-01",
    readingMinutes: 8,
    author: { name: "Equipe PetDerma", role: "Dermatologia Veterinária" },
    content: [
      {
        type: "p",
        text: "Otite é uma das queixas mais comuns na clínica veterinária e uma das mais mal tratadas. Não é raro receber tutores que já passaram por 4 ou 5 veterinários, gastaram fortunas em medicamentos, e o pet continua com a mesma otite. Por que isso acontece? Porque otite recorrente quase nunca é apenas otite.",
      },
      {
        type: "callout",
        variant: "info",
        title: "Em resumo",
        text: "Otite recorrente é sintoma — não é doença. Tratar só o ouvido sem investigar a causa primária é garantia de recidiva. Em 80% dos casos crônicos, a verdadeira causa é alergia.",
      },
      { type: "h2", id: "anatomia", text: "Anatomia do ouvido canino" },
      {
        type: "p",
        text: "O canal auditivo do cão tem formato de 'L', com uma porção vertical longa e uma horizontal mais curta. Esse design dificulta a saída natural de cera, umidade e secreções, criando ambiente perfeito para proliferação de bactérias e leveduras (Malassezia).",
      },
      {
        type: "p",
        text: "Cães com pavilhão auricular caído (Cocker, Basset, Beagle), pelo dentro do canal (Poodle, Shih Tzu) ou anatomia estreita têm risco aumentado.",
      },
      { type: "h2", id: "causas", text: "Por que a otite volta" },
      {
        type: "p",
        text: "A medicina veterinária moderna usa o modelo PSPP (Primary, Secondary, Predisposing, Perpetuating) para entender a otite. Tratar só os agentes secundários (bactérias, fungos) sem resolver a causa primária é o erro mais comum.",
      },
      {
        type: "h3",
        id: "causas-primarias",
        text: "Causas primárias mais comuns",
      },
      {
        type: "ul",
        items: [
          "Dermatite atópica (responsável por 60-80% das otites recorrentes)",
          "Alergia alimentar",
          "Hipotireoidismo e outras endocrinopatias",
          "Pólipos e tumores no canal",
          "Corpos estranhos (sementes de capim, especialmente em verões)",
          "Doenças autoimunes (raras mas existem)",
        ],
      },
      {
        type: "h3",
        id: "agentes-secundarios",
        text: "Agentes secundários (oportunistas)",
      },
      {
        type: "ul",
        items: [
          "Malassezia pachydermatis (levedura) — mais de 70% das otites",
          "Staphylococcus pseudintermedius (bactéria)",
          "Pseudomonas aeruginosa (bactéria mais resistente)",
          "Otodectes cynotis (ácaro do ouvido — comum em filhotes)",
        ],
      },
      { type: "h2", id: "sintomas", text: "Sinais que merecem atenção" },
      {
        type: "ul",
        items: [
          "Pet balança a cabeça com frequência",
          "Coça as orelhas com as patas ou contra o chão",
          "Mau cheiro saindo do canal",
          "Cera escura, amarelada ou com sangue",
          "Vermelhidão ou inchaço no canal externo",
          "Lateralização da cabeça (sinal de envolvimento mais profundo)",
          "Dor ao toque ou ao abrir a boca",
          "Em casos graves: perda de equilíbrio, andar em círculos, surdez",
        ],
      },
      { type: "h2", id: "diagnostico", text: "Diagnóstico correto" },
      {
        type: "p",
        text: "Diagnóstico bem feito é o que separa otite resolvida de otite que volta. Na PetDerma usamos protocolo completo:",
      },
      {
        type: "ol",
        items: [
          "Otoscopia tradicional para visualizar canal externo e tímpano",
          "Otoendoscopia (videotoscopia) — câmera HD que mostra todo o canal e estruturas profundas, identifica perfuração, pólipos e corpos estranhos",
          "Citologia do cerúmen — identifica leveduras, bactérias, células inflamatórias",
          "Cultura e antibiograma — para casos resistentes ou com Pseudomonas",
          "Raspado e parasitológico se houver suspeita de ácaros",
          "Investigação de alergia (dermatite atópica concomitante)",
        ],
      },
      {
        type: "callout",
        variant: "warning",
        title: "Tímpano perfurado",
        text: "Em otites crônicas, o tímpano pode estar perfurado sem que o tutor perceba. Limpeza com produto errado nesse caso pode causar surdez permanente. Por isso a otoscopia detalhada é essencial antes de qualquer limpeza profunda.",
      },
      { type: "h2", id: "tratamento", text: "Tratamento moderno" },
      {
        type: "h3",
        id: "limpeza",
        text: "Limpeza do canal",
      },
      {
        type: "p",
        text: "Em casos crônicos, fazemos a limpeza profissional sob sedação leve para garantir conforto e profundidade adequada. Isso é importante porque cera acumulada bloqueia o efeito da medicação tópica.",
      },
      {
        type: "h3",
        id: "medicacao-direcionada",
        text: "Medicação direcionada",
      },
      {
        type: "p",
        text: "Antibiótico ou antifúngico escolhido com base na citologia (e antibiograma quando indicado). Tratar 'no escuro' gera resistência bacteriana e prolonga o sofrimento do pet.",
      },
      {
        type: "h3",
        id: "tratamento-causa",
        text: "Tratamento da causa primária",
      },
      {
        type: "p",
        text: "Sem isso, a otite volta. Se o pet tem dermatite atópica concomitante, tratamos as duas condições juntas. Se é alergia alimentar, fazemos dieta de eliminação. Se é hipotireoidismo, reposição hormonal. É aqui que muitos veterinários falham — e onde o dermatologista veterinário faz a diferença.",
      },
    ],
    faq: [
      {
        pergunta: "Posso usar cotonete para limpar o ouvido do meu pet?",
        resposta:
          "Não. Cotonete empurra cera mais fundo no canal e pode lesionar o tímpano. Use solução otológica veterinária aplicando dentro do canal e massageando suavemente — depois deixe o pet balançar a cabeça e enxugue só o pavilhão externo com gaze.",
      },
      {
        pergunta: "Quanto tempo demora pra curar uma otite?",
        resposta:
          "Otite aguda simples: 7-14 dias. Otite crônica: 4-8 semanas com a causa primária controlada. Casos com Pseudomonas resistente podem levar mais tempo. O importante é completar o tratamento mesmo se parecer melhor — parar antes garante recidiva.",
      },
      {
        pergunta: "Otoendoscopia é necessária mesmo?",
        resposta:
          "Para otites crônicas e recorrentes, sim. Otoscopia tradicional só vê parte do canal. Otoendoscopia mostra estruturas profundas que podem estar perpetuando a inflamação — pólipos, corpos estranhos, perfuração de tímpano. Em casos crônicos, é o que define o tratamento correto.",
      },
    ],
    related: ["dermatite-atopica-em-caes-guia-completo", "como-identificar-sarna-no-pet"],
  },

  // ============ POST 3 ============
  {
    slug: "como-identificar-sarna-no-pet",
    title: "Como Identificar Sarna no Seu Pet (e Por Que o Diagnóstico Correto Importa)",
    excerpt:
      "Sarna demodícica e sarcóptica têm sintomas parecidos mas tratamentos completamente diferentes. Saiba diferenciar e quando procurar ajuda especializada.",
    cover: "/photos/consultorio-3.jpg",
    coverAlt: "Cão filhote sendo examinado por veterinária",
    category: "parasitas",
    tags: ["sarna", "demodex", "sarcoptes", "ácaros", "filhotes"],
    publishedAt: "2026-04-10",
    readingMinutes: 7,
    author: { name: "Equipe PetDerma", role: "Dermatologia Veterinária" },
    content: [
      {
        type: "p",
        text: "Quando um tutor diz 'meu cachorro tem sarna', geralmente está falando de duas doenças completamente diferentes. Sarna demodícica e sarna sarcóptica são causadas por ácaros distintos, têm comportamentos diferentes e exigem tratamentos específicos. Confundir as duas pode atrasar o tratamento certo em meses.",
      },
      {
        type: "callout",
        variant: "info",
        title: "Em resumo",
        text: "Demodex: ácaro do próprio pet, não contagia humanos. Sarcoptes: contagioso (zoonose), causa coceira intensa imediata. Diagnóstico simples por raspado cutâneo. Tratamento moderno é eficaz em ambos.",
      },
      { type: "h2", id: "demodicica", text: "Sarna Demodícica (demodex)" },
      {
        type: "p",
        text: "Causada pelo ácaro Demodex canis, que vive normalmente nos folículos pilosos de qualquer cão. O problema surge quando há proliferação anormal — geralmente por imaturidade imunológica (filhotes), imunossupressão (cães adultos com Cushing, hipotireoidismo) ou estresse intenso.",
      },
      {
        type: "h3",
        id: "tipos-demodex",
        text: "Formas clínicas",
      },
      {
        type: "ul",
        items: [
          "Localizada (juvenil): pequenas áreas sem pelo (até 4 lesões), pet adulto frequentemente cura sozinho — bom prognóstico",
          "Generalizada (juvenil): mais de 4 lesões ou área extensa, pet com menos de 18 meses — exige tratamento",
          "Generalizada (adulta): aparece em pets com mais de 4 anos — sempre investigar causa imunossupressora",
          "Pododemodicose: localizada apenas nas patas, frequentemente com infecção secundária",
        ],
      },
      {
        type: "h3",
        id: "sintomas-demodex",
        text: "Sintomas típicos",
      },
      {
        type: "ul",
        items: [
          "Falhas no pelo (alopecia) localizadas ou generalizadas",
          "Vermelhidão e descamação na pele",
          "Pode ter coceira leve ou ser totalmente assintomática",
          "Pústulas ou crostas em casos com infecção bacteriana secundária (pioderma demodécica)",
          "Pele engrossada e escurecida em quadros crônicos",
        ],
      },
      {
        type: "callout",
        variant: "info",
        title: "Boa notícia",
        text: "Demodex NÃO contagia humanos nem outros pets adultos. Filhotes adquirem o ácaro da mãe nas primeiras horas de vida — não há transmissão posterior.",
      },
      { type: "h2", id: "sarcoptica", text: "Sarna Sarcóptica (escabiose canina)" },
      {
        type: "p",
        text: "Causada pelo Sarcoptes scabiei var. canis. Diferente do Demodex, esse ácaro NÃO faz parte da microbiota normal — é sempre um patógeno. Cava túneis na pele para depositar ovos, causando coceira intensa e imediata.",
      },
      {
        type: "h3",
        id: "sintomas-sarcoptes",
        text: "Sintomas característicos",
      },
      {
        type: "ul",
        items: [
          "Coceira INTENSA, principalmente em borda das orelhas, cotovelos, axilas e abdômen",
          "Lesões com crostas amareladas",
          "Vermelhidão difusa",
          "Pet inquieto, dorme mal, pode até perder peso pela coceira contínua",
          "Reflexo otopodal positivo (coçar a orelha provoca movimento de coçar com a pata) — sinal clássico",
        ],
      },
      {
        type: "callout",
        variant: "warning",
        title: "Atenção: zoonose",
        text: "Sarcoptes scabiei var. canis pode transmitir para humanos! Causa coceira temporária e desconforto. Crianças, idosos e imunossuprimidos devem ter cuidado especial. Use luvas ao manipular o pet em tratamento.",
      },
      { type: "h2", id: "diagnostico", text: "Como é feito o diagnóstico" },
      {
        type: "p",
        text: "Raspado cutâneo profundo é o exame padrão para ambas. A diferença está na técnica:",
      },
      {
        type: "ul",
        items: [
          "Demodex: raspado profundo até sangrar, em múltiplos pontos. Visualização microscópica fácil — costuma encontrar muitos ácaros",
          "Sarcoptes: raspado superficial em borda de lesão. Sensibilidade baixa (encontra em só 30% dos casos), o diagnóstico costuma ser baseado em sinais clínicos + resposta ao tratamento",
        ],
      },
      { type: "h2", id: "tratamento-moderno", text: "Tratamento atual" },
      {
        type: "p",
        text: "A medicina veterinária revolucionou o tratamento de sarnas nos últimos anos. Os antiparasitários modernos (afoxolaner, fluralaner, sarolaner, lotilaner) tratam ambos os tipos com segurança e eficácia. Geralmente são administrados via oral ou tópica, em 1-3 doses dependendo da gravidade.",
      },
      {
        type: "p",
        text: "Para sarna demodícica generalizada, pode-se associar antibiótico se houver pioderma secundária. Banhos com xampu antisséptico ajudam a controlar a inflamação. O acompanhamento com raspados de controle a cada 4 semanas é essencial — só consideramos cura após 2 raspados negativos consecutivos.",
      },
      { type: "h2", id: "prevencao", text: "Prevenção" },
      {
        type: "ul",
        items: [
          "Antiparasitários mensais (que cobrem ácaros) previnem ambas as sarnas",
          "Evitar contato com cães desconhecidos com lesões de pele",
          "Manter ambiente limpo e seco",
          "Em adoção de filhote, fazer checagem dermatológica precoce",
          "Não usar coleira ou produtos de outros pets sem higienizar",
        ],
      },
    ],
    faq: [
      {
        pergunta: "Sarna demodícica em filhote sempre precisa de tratamento?",
        resposta:
          "Não. A forma localizada juvenil (até 4 lesões em filhote com menos de 1 ano) frequentemente cura sozinha em 6-8 semanas com o amadurecimento do sistema imune. A forma generalizada sempre exige tratamento.",
      },
      {
        pergunta: "Posso pegar sarna do meu cachorro?",
        resposta:
          "Sarna demodícica não. Sarna sarcóptica sim — é zoonose. Causa coceira temporária em humanos (1-3 semanas) que some sozinha após o tratamento do animal e higienização do ambiente.",
      },
      {
        pergunta: "Quanto tempo dura o tratamento?",
        resposta:
          "Sarcóptica: 2-4 semanas geralmente resolve. Demodícica generalizada: 8-12 semanas em média, pode chegar a 6 meses em casos crônicos. O critério de cura é sempre 2 raspados negativos consecutivos.",
      },
    ],
    related: ["dermatite-atopica-em-caes-guia-completo", "otite-cronica-em-caes-guia-completo"],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return POSTS.find((p) => p.slug === slug);
}

export function getRelatedPosts(slug: string, limit = 3): BlogPost[] {
  const post = getPostBySlug(slug);
  if (!post) return [];
  const relatedSlugs = post.related ?? [];
  const direct = relatedSlugs.map((s) => getPostBySlug(s)).filter((p): p is BlogPost => !!p);
  if (direct.length >= limit) return direct.slice(0, limit);
  // Preencher com mesma categoria se faltar
  const sameCategory = POSTS.filter(
    (p) => p.slug !== slug && p.category === post.category && !relatedSlugs.includes(p.slug)
  );
  return [...direct, ...sameCategory].slice(0, limit);
}

export function getPostsByCategory(cat: BlogCategory): BlogPost[] {
  return POSTS.filter((p) => p.category === cat);
}

export function getCategoryBySlug(slug: BlogCategory) {
  return CATEGORIES.find((c) => c.slug === slug);
}
