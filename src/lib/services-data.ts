export type ServicoSlug =
  | "consultas-dermatologia"
  | "citologia-pele"
  | "raspado-cutaneo"
  | "parasitologico-cerumen"
  | "otoscopia"
  | "otoendoscopia"
  | "cultivo-micologico"
  | "cultura-antibiograma"
  | "biopsia-histopatologia"
  | "teste-alergico"
  | "crioterapia"
  | "microagulhamento"
  | "alergia-atopica"
  | "otite-cronica"
  | "sarna-demodicica"
  | "dermatite-bacteriana"
  | "micose";

export type ServicoCategoria = "exame" | "otologia" | "tratamento" | "condicao";

export type Servico = {
  slug: ServicoSlug;
  nome: string;
  shortName: string;
  resumo: string;
  hero: string;
  icone: string;
  foto: string;
  categoria: ServicoCategoria;
  cor: "accent" | "lavender" | "coral" | "sky" | "cream";
  quandoIndicado: string;
  sintomas?: string[];
  procedimento: string[];
  beneficios: string[];
  faqs: { pergunta: string; resposta: string }[];
};

const fotos = {
  consulta: "/photos/gallery/IMG_5707.jpg",
  exame: "/photos/gallery/IMG_5703.jpg",
  consultorio: "/photos/gallery/DSC04057.jpg",
  procedimento: "/photos/gallery/DSC03694.jpg",
  microscopio: "/photos/gallery/DSC03631.jpg",
  ouvido: "/photos/gallery/IMG_5701.jpg",
  pele: "/photos/gallery/DSC03670.jpg",
  pet1: "/photos/gallery/IMG_5704.jpg",
  pet2: "/photos/gallery/IMG_5694.jpg",
  pet3: "/photos/gallery/IMG_5692.jpg",
  pet4: "/photos/gallery/IMG_5693.jpg",
  pet5: "/photos/gallery/DSC01861.jpg",
  pet6: "/photos/gallery/DSC02455.jpg",
};

export const SERVICOS_DETAIL: Servico[] = [
  {
    slug: "consultas-dermatologia",
    nome: "Consultas em Dermatologia Veterinária",
    shortName: "Consulta Dermatológica",
    resumo: "Avaliação completa da pele, pelos e ouvidos do seu pet com diagnóstico preciso e plano personalizado.",
    hero: "Consulta dermatológica completa para o seu pet",
    icone: "/servicos-icons/citologia.png",
    foto: fotos.consulta,
    categoria: "exame",
    cor: "accent",
    quandoIndicado: "Problemas gerais de pele, pelagem, ouvidos e patas. Coceira, vermelhidão, queda de pelos, mau cheiro ou qualquer alteração dermatológica.",
    procedimento: [
      "Anamnese detalhada com histórico, ambiente e alimentação do pet",
      "Exame físico completo da pele, pelos, orelhas e patas",
      "Avaliação de comportamento e qualidade de vida",
      "Solicitação de exames complementares quando indicado",
      "Plano de tratamento personalizado com retorno via WhatsApp",
    ],
    beneficios: [
      "Diagnóstico preciso por especialista com 12+ anos de experiência",
      "Acompanhamento direto pós-consulta",
      "Equipamentos modernos para diagnóstico no local",
      "Atendimento humanizado para tutor e pet",
    ],
    faqs: [
      { pergunta: "Quanto tempo dura uma consulta?", resposta: "Em média 45 minutos a 1 hora. Casos complexos podem incluir exames complementares no mesmo atendimento." },
      { pergunta: "Preciso levar exames anteriores?", resposta: "Sim, sempre que possível. Resultados anteriores ajudam a entender a evolução e evitar repetição." },
      { pergunta: "Atendem cães e gatos?", resposta: "Sim, todos os portes, raças e idades. Inclusive pets idosos e filhotes." },
    ],
  },
  {
    slug: "citologia-pele",
    nome: "Citologia da Pele",
    shortName: "Citologia da Pele",
    resumo: "Exame microscópico das células da pele para identificar inflamações, bactérias, fungos e células anormais.",
    hero: "Citologia: o primeiro exame para identificar a causa da lesão de pele",
    icone: "/servicos-icons/citologia.png",
    foto: fotos.microscopio,
    categoria: "exame",
    cor: "lavender",
    quandoIndicado: "Lesões de pele, vermelhidão, pústulas, secreções, suspeita de pioderma, malasseziose ou tumores.",
    procedimento: [
      "Coleta de material por aposição com lâmina ou fita adesiva",
      "Procedimento rápido e indolor, sem sedação",
      "Coloração específica para visualização microscópica",
      "Análise por veterinário dermatologista",
      "Resultado disponível no mesmo dia",
    ],
    beneficios: [
      "Diagnóstico imediato sem laboratório externo",
      "Identifica bactérias, fungos e células inflamatórias",
      "Permite escolher o tratamento certo desde o início",
    ],
    faqs: [
      { pergunta: "Dói para o pet?", resposta: "Não. É um exame rápido e indolor, sem cortes ou agulhas." },
      { pergunta: "Em quanto tempo sai o resultado?", resposta: "No mesmo dia, geralmente em poucos minutos." },
    ],
  },
  {
    slug: "raspado-cutaneo",
    nome: "Raspado Cutâneo",
    shortName: "Raspado Cutâneo",
    resumo: "Procedimento essencial para diagnosticar sarnas, ácaros e outras doenças parasitárias da pele.",
    hero: "Raspado cutâneo: o exame padrão para diagnosticar sarnas",
    icone: "/servicos-icons/raspado.png",
    foto: fotos.pele,
    categoria: "exame",
    cor: "coral",
    quandoIndicado: "Suspeita de sarna demodícica, sarna sarcóptica, ácaros, falhas no pelo (alopecia), descamação intensa ou crostas.",
    procedimento: [
      "Identificação dos pontos em áreas suspeitas",
      "Aplicação de óleo mineral para coleta",
      "Raspagem superficial ou profunda conforme suspeita",
      "Análise microscópica imediata",
      "Resultado e plano de tratamento na mesma consulta",
    ],
    beneficios: [
      "Padrão ouro para diagnóstico de sarnas",
      "Resultado imediato no consultório",
      "Permite iniciar tratamento moderno no mesmo dia",
    ],
    faqs: [
      { pergunta: "É doloroso?", resposta: "Levemente desconfortável, mas rápido. Sem necessidade de sedação." },
      { pergunta: "Sarna demodícica é contagiosa?", resposta: "Não para humanos nem pets adultos. Sarna sarcóptica é zoonose." },
    ],
  },
  {
    slug: "parasitologico-cerumen",
    nome: "Parasitológico de Cerúmen",
    shortName: "Parasitológico de Cerúmen",
    resumo: "Exame do cerúmen que detecta ácaros (Otodectes) e parasitas no canal auditivo, fundamental em otites.",
    hero: "Identificando ácaros e parasitas no canal auditivo",
    icone: "/servicos-icons/parasitologico.png",
    foto: fotos.ouvido,
    categoria: "exame",
    cor: "sky",
    quandoIndicado: "Otite com coceira intensa, cera escura tipo café moído, balança a cabeça com frequência, especialmente em filhotes e gatos.",
    procedimento: [
      "Coleta delicada do cerúmen com swab estéril",
      "Análise microscópica imediata",
      "Identificação de Otodectes cynotis e outros parasitas",
      "Avaliação simultânea por citologia",
    ],
    beneficios: [
      "Diagnóstico imediato de ácaros do ouvido",
      "Tratamento direcionado evita uso desnecessário de antibióticos",
      "Combinado com otoscopia oferece visão completa",
    ],
    faqs: [
      { pergunta: "Otite por ácaros é comum?", resposta: "Sim, principalmente em filhotes, gatos jovens e ambientes com vários animais." },
    ],
  },
  {
    slug: "otoscopia",
    nome: "Otoscopia Veterinária",
    shortName: "Otoscopia",
    resumo: "Avaliação detalhada do canal auditivo externo e tímpano para investigar otites e outras alterações.",
    hero: "Otoscopia: avaliação completa do canal auditivo",
    icone: "/servicos-icons/otoscopia.png",
    foto: fotos.ouvido,
    categoria: "otologia",
    cor: "lavender",
    quandoIndicado: "Otites, corpos estranhos suspeitos, balanço de cabeça, mau cheiro no ouvido, secreções ou desconforto auditivo.",
    procedimento: [
      "Posicionamento confortável do pet",
      "Inspeção do pavilhão auricular externo",
      "Introdução suave do otoscópio com cones de tamanhos variados",
      "Visualização de canal auditivo, tímpano e estruturas",
      "Documentação de achados e plano de tratamento",
    ],
    beneficios: [
      "Avaliação direta sem invasividade",
      "Identifica otite externa, corpos estranhos, neoplasias",
      "Define necessidade de exame mais profundo (otoendoscopia)",
    ],
    faqs: [
      { pergunta: "Pet precisa ficar sedado?", resposta: "Geralmente não. Sedação só em pets muito sensíveis ou com dor intensa." },
    ],
  },
  {
    slug: "otoendoscopia",
    nome: "Otoendoscopia / Videotoscopia",
    shortName: "Otoendoscopia",
    resumo: "Exame com câmera HD que permite visualizar profundamente o canal auditivo. Indispensável em otites crônicas.",
    hero: "Otoendoscopia: visão completa do ouvido em alta definição",
    icone: "/servicos-icons/otoscopia.png",
    foto: fotos.procedimento,
    categoria: "otologia",
    cor: "accent",
    quandoIndicado: "Otites crônicas e recorrentes, suspeita de pólipos, neoplasias, corpos estranhos profundos ou perfuração de tímpano.",
    procedimento: [
      "Sedação leve para conforto e qualidade da visualização",
      "Limpeza profunda do canal auditivo quando necessário",
      "Introdução do videoendoscópio com câmera HD",
      "Visualização do canal completo e estruturas profundas",
      "Documentação fotográfica/vídeo dos achados",
      "Procedimentos terapêuticos no mesmo ato quando possível",
    ],
    beneficios: [
      "Tecnologia que poucas clínicas em SP oferecem",
      "Diagnóstico preciso de otites crônicas",
      "Permite procedimentos terapêuticos em tempo real",
      "Imagens HD para acompanhamento da evolução",
    ],
    faqs: [
      { pergunta: "Por que sedar?", resposta: "Permite limpeza profunda sem dor, melhor visualização e procedimentos terapêuticos no mesmo ato." },
      { pergunta: "Quando é indicada?", resposta: "Em otites recorrentes, casos crônicos, suspeita de pólipos ou quando otoscopia comum não é conclusiva." },
    ],
  },
  {
    slug: "cultivo-micologico",
    nome: "Cultivo Micológico",
    shortName: "Cultivo Micológico",
    resumo: "Exame laboratorial padrão ouro para identificar fungos causadores de micoses e dermatofitoses.",
    hero: "Cultivo micológico: confirmação definitiva de micose",
    icone: "/servicos-icons/cultivo-micologico.png",
    foto: fotos.exame,
    categoria: "exame",
    cor: "cream",
    quandoIndicado: "Suspeita de dermatofitose (zoonose), lesões circulares com queda de pelo, descamação, especialmente em filhotes e gatos persas.",
    procedimento: [
      "Coleta de pelos e escamas das lesões",
      "Inoculação em meio específico (DTM)",
      "Incubação por 2-3 semanas com avaliações periódicas",
      "Identificação de espécie quando há crescimento",
      "Resultado e plano de tratamento personalizado",
    ],
    beneficios: [
      "Padrão ouro para diagnóstico de micose",
      "Identifica espécie do fungo (impacto no risco zoonótico)",
      "Permite tratamento direcionado e descontaminação ambiental",
    ],
    faqs: [
      { pergunta: "Por que demora 2-3 semanas?", resposta: "Os fungos crescem lentamente em meio de cultura. Esse é o tempo necessário para identificação confiável." },
      { pergunta: "Micose passa para humanos?", resposta: "Sim, é uma zoonose. O diagnóstico definitivo é importante para proteção da família." },
    ],
  },
  {
    slug: "cultura-antibiograma",
    nome: "Cultura e Antibiograma",
    shortName: "Cultura e Antibiograma",
    resumo: "Identifica a bactéria presente e testa quais antibióticos são eficazes. Essencial em infecções recorrentes.",
    hero: "Cultura e antibiograma: tratamento bacteriano direcionado",
    icone: "/servicos-icons/cultura-antibiograma.png",
    foto: fotos.microscopio,
    categoria: "exame",
    cor: "sky",
    quandoIndicado: "Piodermas recorrentes, otites resistentes, suspeita de Pseudomonas, infecções que não respondem ao tratamento empírico.",
    procedimento: [
      "Coleta estéril do material com swab",
      "Envio para laboratório especializado",
      "Cultivo em meios apropriados",
      "Identificação da espécie bacteriana",
      "Teste de sensibilidade a múltiplos antibióticos",
      "Resultado em 5-7 dias úteis",
    ],
    beneficios: [
      "Evita uso desnecessário de antibióticos errados",
      "Reduz risco de resistência bacteriana",
      "Tratamento mais rápido e eficaz em casos complexos",
    ],
    faqs: [
      { pergunta: "Por que não usar logo um antibiótico forte?", resposta: "Antibiótico errado piora o quadro e cria resistência. Antibiograma garante o medicamento certo desde o início." },
    ],
  },
  {
    slug: "biopsia-histopatologia",
    nome: "Biópsia e Histopatologia",
    shortName: "Biópsia e Histopatologia",
    resumo: "Coleta e análise de fragmento de pele em laboratório especializado. Fundamental para diagnosticar tumores e doenças autoimunes.",
    hero: "Biópsia: diagnóstico definitivo para casos complexos",
    icone: "/servicos-icons/biopsia.png",
    foto: fotos.procedimento,
    categoria: "exame",
    cor: "coral",
    quandoIndicado: "Tumores cutâneos, nódulos, lesões que não respondem a tratamento, suspeita de doenças autoimunes ou lesões raras.",
    procedimento: [
      "Anestesia local ou sedação leve",
      "Coleta de fragmento da lesão com punch",
      "Sutura do local quando necessário",
      "Conservação em formol e envio ao laboratório",
      "Análise por patologista veterinário",
      "Resultado em 7-14 dias com plano de tratamento",
    ],
    beneficios: [
      "Diagnóstico definitivo em casos sem resposta clínica clara",
      "Diferencia tumores benignos de malignos",
      "Identifica doenças autoimunes raras",
    ],
    faqs: [
      { pergunta: "Pet precisa ficar internado?", resposta: "Não. É procedimento ambulatorial, com alta no mesmo dia." },
      { pergunta: "Vai deixar cicatriz?", resposta: "Pequena cicatriz que costuma desaparecer em algumas semanas." },
    ],
  },
  {
    slug: "teste-alergico",
    nome: "Teste Alérgico Intradérmico",
    shortName: "Teste Alérgico",
    resumo: "Exame específico para descobrir quais substâncias causam alergia em pets com dermatite atópica.",
    hero: "Identifique exatamente o que causa alergia no seu pet",
    icone: "/servicos-icons/teste-alergico.png",
    foto: fotos.pet1,
    categoria: "exame",
    cor: "lavender",
    quandoIndicado: "Cães e gatos com dermatite atópica diagnosticada, candidatos a imunoterapia, coceira crônica sem resposta.",
    procedimento: [
      "Suspensão de antialérgicos antes do teste (8-30 dias)",
      "Tricotomia em área lateral do tórax",
      "Aplicação de pequenas quantidades de alérgenos comuns",
      "Leitura das reações após 15-30 minutos",
      "Identificação dos alérgenos positivos",
      "Preparo de imunoterapia personalizada quando indicada",
    ],
    beneficios: [
      "Permite tratamento de longo prazo com imunoterapia",
      "Reduz dependência de medicações sintomáticas",
      "Taxa de sucesso de 60-70% em pets bem selecionados",
    ],
    faqs: [
      { pergunta: "Em quanto tempo a imunoterapia faz efeito?", resposta: "Geralmente 6 a 12 meses para resposta completa, com melhora gradual desde os primeiros meses." },
    ],
  },
  {
    slug: "crioterapia",
    nome: "Crioterapia Veterinária",
    shortName: "Crioterapia",
    resumo: "Tratamento que utiliza baixas temperaturas para remover verrugas, tumores benignos e lesões cutâneas com mínima invasão.",
    hero: "Crioterapia: remoção de lesões com mínima invasão",
    icone: "/servicos-icons/crioterapia.png",
    foto: fotos.procedimento,
    categoria: "tratamento",
    cor: "sky",
    quandoIndicado: "Verrugas, papilomas, tumores cutâneos benignos pequenos, ceratoses e lesões hiperplásicas.",
    procedimento: [
      "Avaliação clínica e citológica da lesão",
      "Aplicação de nitrogênio líquido na lesão",
      "Congelamento controlado (1-3 ciclos conforme tamanho)",
      "Sedação leve em lesões maiores",
      "Acompanhamento em 7-14 dias para avaliar cicatrização",
    ],
    beneficios: [
      "Sem cortes nem suturas",
      "Procedimento ambulatorial rápido",
      "Recuperação rápida sem cone elizabetano em muitos casos",
      "Excelente resultado estético",
    ],
    faqs: [
      { pergunta: "Pet sente dor?", resposta: "Pode haver leve desconforto. Sedação é considerada em pets sensíveis ou múltiplas lesões." },
      { pergunta: "Lesão pode voltar?", resposta: "Em lesões benignas pequenas, recidiva é rara." },
    ],
  },
  {
    slug: "microagulhamento",
    nome: "Microagulhamento Veterinário",
    shortName: "Microagulhamento",
    resumo: "Terapia que estimula a renovação da pele e o crescimento dos pelos em casos selecionados.",
    hero: "Microagulhamento: estímulo natural à regeneração da pele",
    icone: "/servicos-icons/microagulhamento.png",
    foto: fotos.pet2,
    categoria: "tratamento",
    cor: "accent",
    quandoIndicado: "Alopecia, cicatrizes hipertróficas, hiperpigmentação, melhora da textura da pele em pets selecionados.",
    procedimento: [
      "Avaliação prévia para selecionar candidatos adequados",
      "Sedação leve ou anestesia local conforme caso",
      "Aplicação de microagulhas estéreis na área",
      "Combinação com produtos tópicos quando indicado",
      "Sessões em série com intervalo de 4-6 semanas",
    ],
    beneficios: [
      "Tratamento minimamente invasivo",
      "Estimula colágeno e regeneração natural",
      "Sem efeitos colaterais sistêmicos",
    ],
    faqs: [
      { pergunta: "Quantas sessões?", resposta: "Geralmente 3 a 6 sessões com intervalo de 4-6 semanas." },
    ],
  },
  // ============ CONDIÇÕES ============
  {
    slug: "alergia-atopica",
    nome: "Alergia Atópica em Cães e Gatos",
    shortName: "Alergia Atópica",
    resumo: "Investigação e tratamento personalizado para pets com coceira crônica, vermelhidão e lambedura excessiva.",
    hero: "Seu pet se coça sem parar? Pode ser dermatite atópica.",
    icone: "/servicos-icons/teste-alergico.png",
    foto: fotos.pet3,
    categoria: "condicao",
    cor: "accent",
    quandoIndicado: "Pets com coceira persistente, vermelhidão, otites recorrentes, lambedura de patas, especialmente raças predispostas (Bulldog Francês, Shar-Pei, Westie, Labrador, Golden, Boxer, Shih Tzu).",
    sintomas: [
      "Coceira intensa e contínua, especialmente em patas, orelhas e barriga",
      "Lambedura excessiva ou mordidas em si mesmo",
      "Vermelhidão na pele, manchas escuras ou caspa",
      "Otites recorrentes (frequentemente sintoma associado)",
      "Pelagem opaca ou queda localizada de pelos",
    ],
    procedimento: [
      "Anamnese detalhada com histórico, ambiente e dieta",
      "Exame físico completo da pele, ouvidos e patas",
      "Citologia para identificar infecções secundárias",
      "Raspado cutâneo para descartar parasitas",
      "Dieta de eliminação para investigar alergia alimentar",
      "Teste sorológico para alérgenos ambientais quando indicado",
    ],
    beneficios: [
      "Plano de tratamento individualizado",
      "Imunoterapia personalizada disponível",
      "Acompanhamento via WhatsApp para ajustes",
    ],
    faqs: [
      { pergunta: "Alergia atópica tem cura?", resposta: "Não tem cura, mas é totalmente controlável. A maioria dos pets vive sem coceira após 2-3 meses de protocolo bem ajustado." },
      { pergunta: "Quanto tempo até ver melhora?", resposta: "Coceira reduz em 7-14 dias com a medicação certa. Pelagem em 4-8 semanas." },
      { pergunta: "Meu pet precisa tomar remédio para sempre?", resposta: "Depende. Alguns precisam de manutenção contínua, outros só em surtos sazonais." },
    ],
  },
  {
    slug: "otite-cronica",
    nome: "Otite Crônica em Cães e Gatos",
    shortName: "Otite Crônica",
    resumo: "Tratamento especializado para infecções de ouvido recorrentes que não cedem com tratamento padrão.",
    hero: "Seu pet balança a cabeça toda hora ou tem mau cheiro no ouvido?",
    icone: "/servicos-icons/otoscopia.png",
    foto: fotos.pet4,
    categoria: "condicao",
    cor: "lavender",
    quandoIndicado: "Otites recorrentes (mais de 2 episódios/ano), pets com pavilhão caído (Cocker, Basset), com pelo no canal (Poodle, Shih Tzu) ou com dermatite atópica.",
    sintomas: [
      "Pet balança a cabeça com frequência",
      "Coça as orelhas com as patas",
      "Mau cheiro saindo do canal auditivo",
      "Cera escura, amarelada ou com sangue",
      "Vermelhidão, inchaço ou crostas dentro da orelha",
      "Dor ao toque, lateralização da cabeça",
    ],
    procedimento: [
      "Otoscopia tradicional para visualizar canal externo",
      "Otoendoscopia para casos crônicos e complexos",
      "Citologia do cerúmen — bactérias, fungos e ácaros",
      "Cultura e antibiograma para casos resistentes",
      "Avaliação de causas predisponentes (alergia, hipotireoidismo)",
    ],
    beneficios: [
      "Investigação completa da causa primária",
      "Otoendoscopia disponível no consultório",
      "Tratamento direcionado evita recidivas",
    ],
    faqs: [
      { pergunta: "Otite recorrente é normal?", resposta: "Não. Sempre tem uma causa primária. Tratar só o sintoma não resolve." },
      { pergunta: "Posso usar produto humano?", resposta: "Não. Cotonete pode empurrar cera. Produtos humanos têm pH inadequado." },
      { pergunta: "Otoendoscopia é necessária?", resposta: "Para casos crônicos sim. Mostra áreas que a otoscopia normal não alcança." },
    ],
  },
  {
    slug: "sarna-demodicica",
    nome: "Sarna Demodícica em Cães",
    shortName: "Sarna Demodícica",
    resumo: "Tratamento moderno e eficaz para sarna demodícica generalizada e localizada com protocolos atualizados.",
    hero: "Falhas no pelo, vermelhidão ou pele engrossada? Pode ser sarna demodícica.",
    icone: "/servicos-icons/raspado.png",
    foto: fotos.pet5,
    categoria: "condicao",
    cor: "coral",
    quandoIndicado: "Filhotes com falhas localizadas, cães adultos com lesões generalizadas, raças predispostas (Pit Bull, Bulldog, Rottweiler, Shar-Pei).",
    sintomas: [
      "Falhas no pelo (alopecia) localizadas ou generalizadas",
      "Vermelhidão e descamação da pele",
      "Pele engrossada e escurecida em casos crônicos",
      "Pústulas ou crostas em infecções secundárias",
      "Pode ter coceira ou ser assintomática",
    ],
    procedimento: [
      "Raspado cutâneo profundo (técnica padrão)",
      "Tricograma para análise dos pelos",
      "Citologia para identificar infecção secundária",
      "Avaliação de imunidade em casos generalizados",
      "Investigação de causas predisponentes",
    ],
    beneficios: [
      "Antiparasitários modernos com alta eficácia",
      "Critério rigoroso de cura (2 raspados negativos)",
      "Suporte nutricional e imunológico complementar",
    ],
    faqs: [
      { pergunta: "Sarna demodícica é contagiosa?", resposta: "Não para humanos nem outros pets adultos." },
      { pergunta: "Demora para curar?", resposta: "Com antiparasitários modernos, a maioria cura em 8-12 semanas." },
    ],
  },
  {
    slug: "dermatite-bacteriana",
    nome: "Dermatite Bacteriana (Pioderma)",
    shortName: "Dermatite Bacteriana",
    resumo: "Diagnóstico preciso e tratamento direcionado para infecções bacterianas de pele superficiais e profundas.",
    hero: "Feridas, pústulas ou crostas que não saram? Pode ser pioderma.",
    icone: "/servicos-icons/cultura-antibiograma.png",
    foto: fotos.pet6,
    categoria: "condicao",
    cor: "sky",
    quandoIndicado: "Pets com pústulas, feridas que não cicatrizam, mau cheiro, especialmente associado a alergia atópica ou endocrinopatias.",
    sintomas: [
      "Pústulas (bolinhas com pus) na pele",
      "Crostas circulares (collarettes epidérmicos)",
      "Vermelhidão, inchaço e calor no local",
      "Mau cheiro vindo da pele",
      "Coceira variável (de leve a intensa)",
    ],
    procedimento: [
      "Citologia das lesões",
      "Cultura e antibiograma para casos recorrentes",
      "Investigação de causa primária",
      "Tratamento antibiótico direcionado (3-6 semanas)",
      "Banhos antissépticos com clorexidina",
    ],
    beneficios: [
      "Antibiograma evita resistência bacteriana",
      "Tratamento da causa primária previne recidiva",
      "Acompanhamento citológico para confirmar cura",
    ],
    faqs: [
      { pergunta: "Pioderma volta sempre?", resposta: "Sim, se a causa primária não for tratada." },
      { pergunta: "Posso parar o antibiótico antes?", resposta: "Nunca. Parar antes gera resistência e recidiva mais grave." },
    ],
  },
  {
    slug: "micose",
    nome: "Micoses em Cães e Gatos",
    shortName: "Micoses",
    resumo: "Diagnóstico micológico e tratamento de dermatofitose, malasseziose e outras infecções fúngicas.",
    hero: "Manchas circulares com queda de pelo? Pode ser micose (zoonose).",
    icone: "/servicos-icons/cultivo-micologico.png",
    foto: fotos.pet1,
    categoria: "condicao",
    cor: "cream",
    quandoIndicado: "Lesões circulares com queda de pelo, descamação, especialmente em filhotes, gatos persas e ambientes com vários animais.",
    sintomas: [
      "Manchas circulares com queda de pelo",
      "Descamação da pele afetada",
      "Borda avermelhada ou crostas",
      "Pode ter coceira leve ou ser assintomática",
      "Lesões em face, orelhas, patas e tronco",
    ],
    procedimento: [
      "Lâmpada de Wood para triagem",
      "Tricograma microscópico",
      "Cultivo micológico — padrão ouro",
      "Citologia para Malassezia",
      "Diferencial com sarna e endocrinopatias",
    ],
    beneficios: [
      "Identificação da espécie do fungo",
      "Plano de tratamento + descontaminação ambiental",
      "Acompanhamento até cura confirmada",
    ],
    faqs: [
      { pergunta: "Micose passa para humanos?", resposta: "Sim, é uma zoonose. Cuidado com crianças, idosos e imunossuprimidos." },
      { pergunta: "Por quanto tempo o pet fica contagioso?", resposta: "Até 2 cultivos micológicos negativos (6-10 semanas)." },
      { pergunta: "Preciso higienizar a casa toda?", resposta: "Sim. Esporos sobrevivem por até 18 meses no ambiente." },
    ],
  },
];

export const SERVICOS_BY_CATEGORIA = {
  exame: SERVICOS_DETAIL.filter((s) => s.categoria === "exame"),
  otologia: SERVICOS_DETAIL.filter((s) => s.categoria === "otologia"),
  tratamento: SERVICOS_DETAIL.filter((s) => s.categoria === "tratamento"),
  condicao: SERVICOS_DETAIL.filter((s) => s.categoria === "condicao"),
};

export const CATEGORIAS_INFO = [
  {
    slug: "condicao" as const,
    titulo: "Condições Tratadas",
    subtitulo: "Especialidade em casos complexos",
    descricao: "Páginas dedicadas para as condições dermatológicas mais comuns, com sintomas, diagnóstico e tratamento detalhados.",
  },
  {
    slug: "exame" as const,
    titulo: "Exames Diagnósticos",
    subtitulo: "Realizados no local com resultado em até 24h",
    descricao: "Diagnóstico preciso é a base do tratamento eficaz. Realizamos no consultório os principais exames dermatológicos.",
  },
  {
    slug: "otologia" as const,
    titulo: "Avaliações Otológicas",
    subtitulo: "Tecnologia para ouvidos saudáveis",
    descricao: "Otoscopia comum e otoendoscopia (videotoscopia) para diagnóstico completo de otites, especialmente crônicas.",
  },
  {
    slug: "tratamento" as const,
    titulo: "Tratamentos Especializados",
    subtitulo: "Procedimentos modernos e minimamente invasivos",
    descricao: "Crioterapia, microagulhamento e outros tratamentos avançados para condições específicas.",
  },
];

export const PROFISSIONAIS = [
  {
    nome: "Equipe PetDerma",
    cargo: "Dermatologia Veterinária",
    foto: "/photos/equipe.jpg",
    bio: "Equipe formada por médicos veterinários dermatologistas, técnicos especializados e atendentes treinados para garantir o melhor cuidado dermatológico em cada uma das 3 unidades.",
  },
] as const;
