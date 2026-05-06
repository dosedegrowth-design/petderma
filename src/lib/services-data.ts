export type ServicoSlug =
  | "alergia-atopica"
  | "otite-cronica"
  | "sarna-demodicica"
  | "dermatite-bacteriana"
  | "micose";

export type Servico = {
  slug: ServicoSlug;
  nome: string;
  shortName: string;
  resumo: string;
  hero: string;
  cor: "accent" | "lavender" | "coral" | "sky" | "cream";
  sintomas: string[];
  diagnostico: string[];
  tratamento: string[];
  faqs: { pergunta: string; resposta: string }[];
};

export const SERVICOS_DETAIL: Servico[] = [
  {
    slug: "alergia-atopica",
    nome: "Alergia Atópica em Cães e Gatos",
    shortName: "Alergia Atópica",
    resumo:
      "Investigação e tratamento personalizado para pets com coceira crônica, vermelhidão e lambedura excessiva.",
    hero: "Seu pet se coça sem parar? Pode ser dermatite atópica.",
    cor: "accent",
    sintomas: [
      "Coceira intensa e contínua, especialmente em patas, orelhas e barriga",
      "Lambedura excessiva ou mordidas em si mesmo",
      "Vermelhidão na pele, manchas escuras ou caspa",
      "Otites recorrentes (frequentemente sintoma associado)",
      "Pelagem opaca ou queda localizada de pelos",
      "Inquietação, dificuldade para dormir devido à coceira",
    ],
    diagnostico: [
      "Anamnese detalhada com histórico do pet, ambiente e dieta",
      "Exame físico completo da pele, ouvidos e patas",
      "Citologia para identificar infecções secundárias",
      "Raspado cutâneo para descartar parasitas",
      "Dieta de eliminação para investigar alergia alimentar",
      "Teste sorológico para alérgenos ambientais quando indicado",
    ],
    tratamento: [
      "Plano nutricional específico (dieta hipoalergênica)",
      "Medicação imunomoduladora (oclacitinibe, lokivetmab)",
      "Banhos terapêuticos com xampus medicamentosos",
      "Controle ambiental (ácaros, mofo, pólen)",
      "Imunoterapia personalizada para alérgenos identificados",
      "Acompanhamento mensal nos primeiros 3 meses",
    ],
    faqs: [
      {
        pergunta: "Alergia atópica tem cura?",
        resposta:
          "Não tem cura, mas com tratamento correto é totalmente controlável. A maioria dos pets vive sem coceira após 2-3 meses de protocolo bem ajustado.",
      },
      {
        pergunta: "Quanto tempo até ver melhora?",
        resposta:
          "Coceira reduz significativamente em 7-14 dias com a medicação certa. Cura das lesões e melhora da pelagem em 4-8 semanas.",
      },
      {
        pergunta: "Meu pet precisa tomar remédio para sempre?",
        resposta:
          "Depende do caso. Alguns precisam de manutenção contínua, outros só em surtos sazonais. Definimos o protocolo após investigação completa.",
      },
    ],
  },
  {
    slug: "otite-cronica",
    nome: "Otite Crônica em Cães e Gatos",
    shortName: "Otite Crônica",
    resumo:
      "Tratamento especializado para infecções de ouvido recorrentes e otite que não cede com tratamento padrão.",
    hero: "Seu pet balança a cabeça toda hora ou tem mau cheiro no ouvido?",
    cor: "lavender",
    sintomas: [
      "Pet balança a cabeça com frequência",
      "Coça as orelhas com as patas ou contra o chão",
      "Mau cheiro saindo do canal auditivo",
      "Cera escura, amarelada ou com sangue",
      "Vermelhidão, inchaço ou crostas dentro da orelha",
      "Dor ao toque, lateralização da cabeça",
      "Perda de equilíbrio em casos graves",
    ],
    diagnostico: [
      "Otoscopia tradicional para visualizar canal externo",
      "Otoendoscopia (videotoscopia) — visualização completa do canal e tímpano",
      "Citologia do cerúmen — identifica bactérias, fungos e ácaros",
      "Cultura e antibiograma para casos resistentes",
      "Avaliação de causas predisponentes (alergia, anatomia)",
    ],
    tratamento: [
      "Limpeza profunda do canal sob sedação quando necessário",
      "Antibióticos ou antifúngicos direcionados pelo antibiograma",
      "Anti-inflamatórios tópicos e sistêmicos",
      "Tratamento da causa primária (alergia, hipotireoidismo)",
      "Protocolo de manutenção para evitar recidiva",
      "Crioterapia em casos de proliferação tecidual crônica",
    ],
    faqs: [
      {
        pergunta: "Otite recorrente é normal?",
        resposta:
          "Não. Otite que volta repetidamente sempre tem uma causa primária (alergia, anatomia, hipotireoidismo). Tratar só o sintoma não resolve.",
      },
      {
        pergunta: "Posso usar produto humano para limpar a orelha?",
        resposta:
          "Não recomendamos. Cotonete pode empurrar cera para o tímpano. Produtos humanos podem ter pH ou ingredientes inadequados.",
      },
      {
        pergunta: "Otoendoscopia é necessária?",
        resposta:
          "Para casos crônicos sim. Permite ver áreas do canal que a otoscopia normal não alcança e identificar pólipos, corpos estranhos ou perfuração de tímpano.",
      },
    ],
  },
  {
    slug: "sarna-demodicica",
    nome: "Sarna Demodícica em Cães",
    shortName: "Sarna Demodícica",
    resumo:
      "Tratamento moderno e eficaz para sarna demodícica generalizada e localizada com protocolos atualizados.",
    hero: "Falhas no pelo, vermelhidão ou pele engrossada? Pode ser sarna demodícica.",
    cor: "coral",
    sintomas: [
      "Falhas no pelo (alopecia) localizadas ou generalizadas",
      "Vermelhidão e descamação da pele",
      "Pele engrossada e escurecida em casos crônicos",
      "Pústulas ou crostas em infecções secundárias",
      "Pode ter coceira ou ser assintomática",
      "Lesões frequentemente em face, patas e tronco",
    ],
    diagnostico: [
      "Raspado cutâneo profundo (técnica padrão para diagnosticar Demodex)",
      "Tricograma para análise dos pelos",
      "Citologia para identificar infecção bacteriana secundária",
      "Avaliação de imunidade em casos generalizados",
      "Investigação de causas predisponentes (idade, raça, comorbidades)",
    ],
    tratamento: [
      "Antiparasitários modernos (afoxolaner, fluralaner, sarolaner)",
      "Tratamento de infecções bacterianas secundárias com antibiograma",
      "Banhos terapêuticos com xampus específicos",
      "Suporte nutricional e imunológico",
      "Raspados de controle a cada 4 semanas",
      "Critério de cura: 2 raspados negativos consecutivos",
    ],
    faqs: [
      {
        pergunta: "Sarna demodícica é contagiosa?",
        resposta:
          "Não para humanos nem para outros pets adultos. O parasita Demodex é transmitido apenas da mãe para os filhotes nas primeiras semanas de vida.",
      },
      {
        pergunta: "Demora para curar?",
        resposta:
          "Com os antiparasitários modernos, a maioria dos casos cura em 8-12 semanas. Casos crônicos podem levar 4-6 meses.",
      },
      {
        pergunta: "Pode voltar?",
        resposta:
          "Em pets adultos, recidiva é rara após cura completa. Em filhotes, a forma juvenil tem ótimo prognóstico.",
      },
    ],
  },
  {
    slug: "dermatite-bacteriana",
    nome: "Dermatite Bacteriana (Pioderma) em Cães e Gatos",
    shortName: "Dermatite Bacteriana",
    resumo:
      "Diagnóstico preciso e tratamento direcionado para infecções bacterianas de pele superficiais e profundas.",
    hero: "Feridas, pústulas ou crostas que não saram? Pode ser pioderma.",
    cor: "sky",
    sintomas: [
      "Pústulas (bolinhas com pus) na pele",
      "Crostas circulares (collarettes epidérmicos)",
      "Vermelhidão, inchaço e calor no local",
      "Mau cheiro vindo da pele",
      "Coceira variável (de leve a intensa)",
      "Lesões em barriga, axilas, virilhas, pescoço ou pés",
      "Em casos profundos: nódulos, fístulas e secreção",
    ],
    diagnostico: [
      "Citologia das lesões (identifica tipo de bactéria)",
      "Cultura e antibiograma para casos recorrentes ou resistentes",
      "Investigação de causa primária (alergia, endocrinopatia)",
      "Hemograma e bioquímica em casos graves",
      "Biópsia em pioderma profunda quando indicado",
    ],
    tratamento: [
      "Antibioticoterapia direcionada (3-6 semanas para superficial)",
      "Banhos antissépticos com clorexidina",
      "Tratamento da causa primária (essencial para evitar recidiva)",
      "Anti-inflamatórios em casos com prurido intenso",
      "Acompanhamento citológico para confirmar cura",
      "Pioderma profunda pode exigir 8-12 semanas de tratamento",
    ],
    faqs: [
      {
        pergunta: "Pioderma volta sempre?",
        resposta:
          "Sim, se a causa primária não for tratada. Por isso investigamos alergia, hipotireoidismo, Cushing e outras condições subjacentes.",
      },
      {
        pergunta: "Posso parar o antibiótico quando parecer melhor?",
        resposta:
          "Nunca. Antibiótico tem que ser usado pelo tempo prescrito. Parar antes gera resistência bacteriana e recidiva mais grave.",
      },
      {
        pergunta: "Banho com xampu de farmácia ajuda?",
        resposta:
          "Pode piorar. Xampus humanos têm pH inadequado para pets. Use só os indicados pelo dermatologista.",
      },
    ],
  },
  {
    slug: "micose",
    nome: "Micoses em Cães e Gatos",
    shortName: "Micoses (Dermatofitose)",
    resumo:
      "Diagnóstico micológico e tratamento de dermatofitose, malasseziose e outras infecções fúngicas.",
    hero: "Manchas circulares com queda de pelo? Pode ser micose (zoonose).",
    cor: "cream",
    sintomas: [
      "Manchas circulares com queda de pelo",
      "Descamação da pele afetada",
      "Borda avermelhada ou crostas",
      "Pode ter coceira leve ou ser assintomática",
      "Lesões em face, orelhas, patas e tronco",
      "Em gatos: especialmente comum em filhotes e raças de pelo longo",
    ],
    diagnostico: [
      "Lâmpada de Wood (algumas espécies fluorescem)",
      "Tricograma — exame microscópico dos pelos",
      "Cultivo micológico — padrão ouro (resultado em 2-3 semanas)",
      "Citologia para Malassezia (levedura)",
      "Diferencial com sarna, alergia e endocrinopatias",
    ],
    tratamento: [
      "Antifúngicos sistêmicos (itraconazol, fluconazol)",
      "Banhos com xampu antifúngico (cetoconazol, miconazol)",
      "Pomada tópica em lesões localizadas",
      "Higienização do ambiente (esporos sobrevivem por meses)",
      "Tosa em pets de pelo longo para facilitar tratamento",
      "Cultura de controle ao final do tratamento",
    ],
    faqs: [
      {
        pergunta: "Micose passa para humanos?",
        resposta:
          "Sim, é uma zoonose. Cuidado especial com crianças, idosos e imunossuprimidos. Use luvas ao manipular o pet em tratamento.",
      },
      {
        pergunta: "Por quanto tempo o pet fica contagioso?",
        resposta:
          "Até 2 cultivos micológicos negativos (geralmente 6-10 semanas de tratamento).",
      },
      {
        pergunta: "Preciso higienizar a casa toda?",
        resposta:
          "Sim. Esporos do fungo sobrevivem por até 18 meses no ambiente. Aspiração frequente, lavagem de tapetes/camas e desinfetantes específicos são essenciais.",
      },
    ],
  },
];

export const SERVICOS_BASICOS = [
  {
    nome: "Consulta Dermatológica Completa",
    descricao: "Avaliação detalhada da pele, pelos, ouvidos e patas com plano de tratamento personalizado.",
    icon: "Stethoscope",
  },
  {
    nome: "Citologia da Pele",
    descricao: "Análise microscópica para identificar bactérias, fungos e células anormais. Resultado no mesmo dia.",
    icon: "Microscope",
  },
  {
    nome: "Raspado Cutâneo",
    descricao: "Exame essencial para diagnosticar parasitas como Demodex e Sarcoptes. Resultado imediato.",
    icon: "Scan",
  },
  {
    nome: "Parasitológico de Cerúmen",
    descricao: "Identifica ácaros do ouvido (Otodectes) e outros parasitas auriculares.",
    icon: "Ear",
  },
  {
    nome: "Otoscopia e Otoendoscopia",
    descricao: "Visualização completa do canal auditivo. Otoendoscopia para casos crônicos e complexos.",
    icon: "Eye",
  },
  {
    nome: "Cultivo Micológico",
    descricao: "Padrão ouro para diagnóstico de micoses. Resultado em 2-3 semanas.",
    icon: "FlaskConical",
  },
  {
    nome: "Cultura e Antibiograma",
    descricao: "Identifica bactéria causadora e testa qual antibiótico funciona. Essencial em casos recorrentes.",
    icon: "TestTube",
  },
  {
    nome: "Crioterapia Veterinária",
    descricao: "Tratamento minimamente invasivo para verrugas, lesões hiperplásicas e tumores cutâneos pequenos.",
    icon: "Snowflake",
  },
  {
    nome: "Microagulhamento",
    descricao: "Técnica que estimula regeneração da pele em alopecias e cicatrizes.",
    icon: "Sparkles",
  },
  {
    nome: "Videotoscopia",
    descricao: "Otoendoscopia avançada com câmera para diagnóstico e procedimentos no canal auditivo.",
    icon: "Video",
  },
] as const;

export const PROFISSIONAIS = [
  {
    nome: "Dr. Douglas Bessa",
    cargo: "Médico Veterinário Dermatologista",
    crmv: "CRMV-SP 12345",
    foto: "/photos/dr-douglas.jpg",
    bio: "Especialista em dermatologia veterinária com mais de 12 anos de experiência. Acredita que ouvir o tutor é tão importante quanto examinar o pet. Já atendeu mais de 3.500 pets em casos de alergias, otites crônicas e doenças de pele complexas.",
    formacao: [
      { ano: "2012", titulo: "Graduação em Medicina Veterinária" },
      { ano: "2014", titulo: "Especialização em Dermatologia Veterinária" },
      { ano: "2018", titulo: "Pós-graduação em Otologia Avançada" },
    ],
  },
] as const;
