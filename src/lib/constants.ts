export const SITE = {
  name: "PetDerma",
  fullName: "PetDerma — Dermatologia Veterinária",
  url: "https://petderma.com.br",
  description:
    "Referência em Dermatologia Veterinária em São Paulo. +12 anos cuidando da pele do seu pet com diagnóstico no local e tratamento personalizado.",
  social: {
    instagram: "https://www.instagram.com/petderma/",
    facebook:
      "https://www.facebook.com/PetDerma-A-pele-do-seu-pet-em-boas-m%c3%a3os-110616205791746",
    linkedin: "https://www.linkedin.com/in/douglas-bessa-294166122/",
  },
} as const;

export const UNIDADES = [
  {
    slug: "campo-belo",
    nome: "Campo Belo",
    cidade: "São Paulo",
    bairro: "Campo Belo",
    endereco: "Rua República do Iraque, 1497",
    cep: "04611-002",
    telefone: "5511989812898",
    telefoneDisplay: "(11) 98981-2898",
    horario: { semana: "Seg–Sex 8h às 18h", sabado: "Sáb 8h às 17h", feriado: "Feriados 8h às 14h" },
    coords: { lat: -23.6219, lng: -46.6711 },
    mapEmbed: "https://www.google.com/maps?q=Rua+República+do+Iraque,+1497,+São+Paulo&output=embed",
  },
  {
    slug: "tatuape",
    nome: "Tatuapé",
    cidade: "São Paulo",
    bairro: "Tatuapé",
    endereco: "Rua Itapeti, 272",
    cep: "03306-040",
    telefone: "5511989812898",
    telefoneDisplay: "(11) 98981-2898",
    horario: { semana: "Seg–Sex 8h às 18h", sabado: "Sáb 8h às 17h", feriado: "Feriados 8h às 14h" },
    coords: { lat: -23.5400, lng: -46.5764 },
    mapEmbed: "https://www.google.com/maps?q=Rua+Itapeti,+272,+São+Paulo&output=embed",
  },
  {
    slug: "sao-jose-dos-campos",
    nome: "São José dos Campos",
    cidade: "São José dos Campos",
    bairro: "Centro",
    endereco: "R. Carlos Maria Auricchio, 75",
    cep: "12245-750",
    telefone: "5512991768686",
    telefoneDisplay: "(12) 99176-8686",
    horario: { semana: "Seg–Sex 8h às 18h", sabado: "Sáb 8h às 17h", feriado: "Feriados 8h às 14h" },
    coords: { lat: -23.2237, lng: -45.9009 },
    mapEmbed: "https://www.google.com/maps?q=R.+Carlos+Maria+Auricchio,+75,+São+José+dos+Campos&output=embed",
  },
] as const;

export type UnidadeSlug = (typeof UNIDADES)[number]["slug"];

export const NAV_ITEMS = [
  { label: "Sobre", href: "/sobre" },
  { label: "Serviços", href: "/servicos" },
  { label: "Casos", href: "/casos" },
  { label: "Unidades", href: "/unidades" },
  { label: "Equipe", href: "/equipe" },
  { label: "Contato", href: "/contato" },
] as const;

export const PROBLEMAS = [
  {
    icon: "Hand",
    titulo: "Coceira excessiva",
    descricao: "Pet se coça ou lambe sem parar?",
    href: "#servicos",
  },
  {
    icon: "Ear",
    titulo: "Otite recorrente",
    descricao: "Infecções de ouvido que voltam?",
    href: "#servicos",
  },
  {
    icon: "Droplet",
    titulo: "Manchas e feridas",
    descricao: "Lesões na pele que não saram",
    href: "#servicos",
  },
  {
    icon: "Sparkles",
    titulo: "Queda de pelo",
    descricao: "Falhas no pelo ou pelagem opaca",
    href: "#servicos",
  },
  {
    icon: "Wind",
    titulo: "Mau cheiro",
    descricao: "Odor persistente na pele ou orelhas",
    href: "#servicos",
  },
  {
    icon: "Bug",
    titulo: "Sarna e parasitas",
    descricao: "Pulgas, ácaros e infestações",
    href: "#servicos",
  },
] as const;

export const PROCESSO = [
  {
    numero: "01",
    titulo: "Avaliação clínica",
    descricao:
      "Anamnese detalhada com histórico do pet, exame físico completo e identificação dos sintomas dermatológicos.",
  },
  {
    numero: "02",
    titulo: "Diagnóstico no local",
    descricao:
      "Realizamos citologia, raspado cutâneo, otoscopia e cultura no próprio consultório. Resultado em até 24h.",
  },
  {
    numero: "03",
    titulo: "Plano personalizado",
    descricao:
      "Tratamento direcionado para a condição específica do seu pet, com acompanhamento via WhatsApp.",
  },
] as const;

export const DIFERENCIAIS = [
  {
    icon: "FlaskConical",
    titulo: "Exames realizados no local",
    descricao: "Citologia, raspado, otoscopia e cultura. Resultado em até 24h sem precisar enviar para laboratório externo.",
  },
  {
    icon: "Microscope",
    titulo: "Otoendoscopia / Videotoscopia",
    descricao: "Equipamento que permite visualizar todo o canal auditivo. Poucas clínicas em SP têm essa tecnologia.",
  },
  {
    icon: "Snowflake",
    titulo: "Crioterapia + microagulhamento",
    descricao: "Tratamentos minimamente invasivos para lesões de pele e estímulo de regeneração.",
  },
  {
    icon: "MessageCircle",
    titulo: "Acompanhamento por WhatsApp",
    descricao: "Suporte direto pós-consulta para tirar dúvidas, ajustar tratamentos e enviar fotos da evolução.",
  },
] as const;

export const SERVICOS = [
  "Consultas em Dermatologia",
  "Citologia da Pele",
  "Raspado Cutâneo",
  "Parasitológico de Cerúmen",
  "Otoscopia",
  "Cultivo Micológico",
  "Cultura e Antibiograma",
  "Crioterapia",
  "Microagulhamento Veterinário",
  "Otoendoscopia",
] as const;

export const FAQ_ITEMS = [
  {
    pergunta: "Quanto custa uma consulta dermatológica?",
    resposta:
      "O valor varia conforme a unidade e o tipo de avaliação. Entre em contato pelo WhatsApp para receber a tabela atualizada.",
  },
  {
    pergunta: "Preciso de encaminhamento de outro veterinário?",
    resposta:
      "Não. Você pode agendar diretamente com a gente. Se já tiver exames anteriores, traga junto na consulta.",
  },
  {
    pergunta: "Vocês atendem casos de emergência?",
    resposta:
      "Atendemos urgências dermatológicas em horário comercial. Para emergências fora desse horário, consulte um pronto-socorro veterinário 24h.",
  },
  {
    pergunta: "Vocês fazem exames de alergia?",
    resposta:
      "Sim. Trabalhamos com investigação completa de alergias alimentares e ambientais (atópica), incluindo dieta de eliminação e teste sorológico quando indicado.",
  },
  {
    pergunta: "Qual a diferença entre veterinário geral e dermatologista?",
    resposta:
      "O dermatologista é especializado em doenças da pele, pelos, unhas e ouvidos. Casos crônicos ou recorrentes geralmente exigem investigação mais profunda do que a consulta geral consegue oferecer.",
  },
  {
    pergunta: "Quanto tempo dura uma consulta?",
    resposta:
      "Em média 45 minutos a 1 hora. Casos complexos podem incluir exames complementares no mesmo atendimento.",
  },
  {
    pergunta: "Atendem cães e gatos?",
    resposta:
      "Sim, atendemos cães e gatos de todas as raças e idades, incluindo pets idosos com necessidades dermatológicas específicas.",
  },
  {
    pergunta: "Vocês têm convênio ou plano de saúde pet?",
    resposta:
      "Trabalhamos com alguns convênios. Confirme com a unidade da sua preferência pelo WhatsApp.",
  },
] as const;

export const STATS = [
  { numero: 3500, sufixo: "+", label: "pets tratados" },
  { numero: 12, sufixo: "+", label: "anos de experiência" },
  { numero: 3, sufixo: "", label: "unidades em SP" },
  { numero: 24, sufixo: "h", label: "para resultado de exames" },
] as const;
