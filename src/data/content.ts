export const site = {
  name: "Miriam Souza",
  fullName: "Miriam Souza",
  role: "Psicóloga Clínica",
  crp: "Psicóloga Clínica — CRP 04/79446",
  city: "Contagem",
  state: "MG",
  address: {
    street: "Rua Antônio Bernardino Muniz, 143 - Centro",
    cityLine: "Contagem - MG, 32040-630",
    mapsUrl: "https://www.google.com/maps?q=Rua+Ant%C3%B4nio+Bernardino+Muniz,+143,+Centro,+Contagem+-+MG",
    embedQuery: "Rua Antônio Bernardino Muniz, 143, Centro, Contagem - MG",
  },
  phoneDisplay: "(31) 9 8337-6372",
  whatsappNumber: "5531983376372",
  whatsappMessage:
    "Olá, Miriam! Encontrei seu site e gostaria de saber mais sobre o acompanhamento psicológico.",
  email: "consultoriopsic1969@gmail.com",
  instagramHandle: "@psic.miriamsouza",
  instagramUrl: "https://www.instagram.com/psic.miriamsouza",
  hours: "Segunda a Sexta: 8h às 18h",
  hoursNote: "As consultas necessitam ser previamente agendadas.",
  modality: "Atendimento presencial em Contagem (MG) e online",
  metaDescription:
    "Miriam Souza é psicóloga clínica, com abordagem em TCC e Terapia Sistêmica Familiar, cuidando de mulheres, casais e famílias. Atendimento em Contagem (MG) e online.",
} as const;

export function whatsappLink(customMessage?: string) {
  const message = encodeURIComponent(customMessage ?? site.whatsappMessage);
  return `https://wa.me/${site.whatsappNumber}?text=${message}`;
}

export const nav = [
  { label: "Início", href: "#hero" },
  { label: "Especialidades", href: "#especialidades" },
  { label: "Sobre mim", href: "#sobre" },
  { label: "Consultório", href: "#consultorio" },
  { label: "Como funciona", href: "#processo" },
  { label: "FAQ", href: "#faq" },
] as const;

export const header = {
  ctaLabel: "Agendar consulta",
} as const;

export const hero = {
  eyebrow: site.crp,
  greeting: "Olá, sou",
  name: "Miriam Souza",
  subtitle:
    "Cuidando de mulheres e casais, com abordagem em TCC e Terapia Sistêmica Familiar, presencial em Contagem (MG) e online.",
  checklist: [
    "Mulheres, casais e famílias",
    "TCC e Terapia Sistêmica Familiar",
    "Atendimento presencial e online",
  ],
  ctaLabel: "Agendar consulta",
  ctaSecondaryLabel: "Sobre mim",
  ctaSecondaryHref: "#sobre",
  image: {
    src: "/images/jadi-hero-full.png",
    alt: "Miriam Souza em seu consultório",
  },
} as const;

export const heroStat = {
  value: "+200",
  label: "pessoas acompanhadas",
} as const;

export const heroMobile = {
  eyebrow: "PSICÓLOGA CLÍNICA",
  title: "Miriam Souza",
  tagline: "CUIDANDO DE MULHERES E CASAIS.",
  ctaLabel: "Mais informações",
  image: {
    src: "/images/jadi-hero-mobile-2.png",
    alt: "Miriam Souza sorrindo em seu consultório",
  },
} as const;

export const specialties = {
  items: [
    {
      icon: "Flower2",
      title: "Saúde Emocional da Mulher",
      description:
        "Acompanhamento voltado ao cuidado da ansiedade, depressão e fortalecimento da saúde emocional feminina, com escuta acolhedora e sem julgamentos.",
    },
    {
      icon: "Sparkle",
      title: "Terapia de Casal",
      description:
        "Espaço para fortalecer a comunicação e o vínculo do casal, trabalhando os relacionamentos com base em práticas científicas.",
    },
    {
      icon: "Rainbow",
      title: "Terapia Familiar Sistêmica",
      description:
        "Acompanhamento para famílias, com foco em compreender dinâmicas relacionais e promover mais equilíbrio emocional para todos.",
    },
  ],
} as const;

export const about = {
  eyebrow: "SOBRE A MIRIAM",
  greeting: "Olá, sou",
  title: "Miriam Souza",
  paragraphs: [
    "Sou psicóloga, com atendimento presencial e online para adolescentes, adultos, casais e famílias. Atuo no cuidado da ansiedade, depressão, saúde emocional da mulher, relacionamentos, terapia familiar e desenvolvimento emocional.",
    "Meu trabalho é pautado na ética, no acolhimento e em práticas baseadas em evidências, com abordagem em TCC e formação em Terapia Sistêmica Familiar.",
    "Ofereço um plano terapêutico individualizado para promover autoconhecimento, fortalecimento da saúde mental e qualidade de vida.",
  ],
  formationCard: {
    label: "Formação",
    text: "Psicologia, com abordagem em TCC e formação em Terapia Sistêmica Familiar.",
  },
  image: {
    src: "/images/jadi-sobre.png",
    alt: "Retrato de Miriam Souza",
  },
} as const;

export const gallery = {
  id: "consultorio",
  eyebrow: "AMBIENTE SEGURO E DE FÁCIL ACESSO",
  title: "Meu espaço de atendimento foi pensado para que você se sinta acolhido(a)",
  images: [
    {
      src: "/images/jadi-consultorio-01.png",
      alt: "Sala de atendimento, com sofá e poltrona",
    },
    {
      src: "/images/jadi-consultorio-02.png",
      alt: "Ambiente aconchegante da sala de atendimento",
    },
    {
      src: "/images/jadi-consultorio-03.png",
      alt: "Cantinho de leitura da sala de atendimento",
    },
  ],
} as const;

export const testimonials = {
  eyebrow: "DEPOIMENTOS",
  title: "Histórias reais de confiança e cuidado",
  isPlaceholder: true,
  items: [
    {
      name: "Paciente em acompanhamento",
      rating: 5,
      text: "A Miriam me ajudou a entender minha ansiedade e a fortalecer minha autoestima. Me senti acolhida em cada sessão.",
    },
    {
      name: "Casal em acompanhamento",
      rating: 5,
      text: "A terapia de casal com a Miriam transformou nossa comunicação. Hoje conseguimos nos entender muito melhor.",
    },
    {
      name: "Paciente em acompanhamento",
      rating: 5,
      text: "Um espaço de escuta sem julgamentos, com uma abordagem séria e baseada em evidências. Recomendo muito.",
    },
  ],
} as const;

export const process = {
  eyebrow: "COMO FUNCIONA MEU TRABALHO",
  title: "Um processo claro para sua evolução",
  paragraphs: [
    "Primeira conversa para compreender sua história, demandas e momento de vida. A partir daí, construímos juntos um plano terapêutico individualizado, com base em TCC e Terapia Sistêmica Familiar.",
    "O acompanhamento segue com sessões regulares, com escuta qualificada e direcionamento terapêutico de acordo com suas necessidades, promovendo autoconhecimento e mais qualidade de vida ao longo do tempo.",
  ],
  progressBars: [
    { label: "Escuta acolhedora", value: 100 },
    { label: "Compromisso com o processo", value: 97 },
  ],
  ctaLabel: "Agendar consulta",
  stat: {
    value: "+200",
    label: "Atendimentos realizados",
  },
  image: {
    src: "/images/jadi-processo.png",
    alt: "Miriam Souza sentada, anotando durante uma sessão de atendimento",
  },
} as const;

export const reasons = {
  eyebrow: "ALGUNS BENEFÍCIOS DA TERAPIA",
  title: "Quatro motivos para começar agora",
  subtitle:
    "Um trabalho pautado na ética, no acolhimento e em práticas baseadas em evidências, para promover mais qualidade de vida.",
  items: [
    {
      number: "01",
      title: "Práticas baseadas em evidências",
      description:
        "Técnicas de TCC e Terapia Sistêmica Familiar escolhidas com base científica, ajustadas às suas necessidades.",
    },
    {
      number: "02",
      title: "Plano individualizado",
      description:
        "Cada acompanhamento é construído sob medida, respeitando sua história e seus objetivos.",
    },
    {
      number: "03",
      title: "Cuidado com relacionamentos",
      description:
        "Suporte especializado para casais e famílias que buscam fortalecer vínculos e melhorar a comunicação.",
    },
    {
      number: "04",
      title: "Retorno sempre garantido",
      description:
        "Encaixe prioritário quando você precisar. Você não fica sem suporte entre uma sessão e outra.",
    },
  ],
} as const;

export const faq = {
  eyebrow: "DÚVIDAS FREQUENTES",
  title: "Ainda tem dúvidas?",
  featured: {
    eyebrow: "DÚVIDAS FREQUENTES",
    title: "Por que buscar acompanhamento psicológico?",
    paragraphs: [
      "A terapia é um espaço para encontrar mais clareza diante dos seus conflitos e dificuldades, com o apoio de uma profissional. Com práticas baseadas em evidências, é possível trabalhar ansiedade, depressão, relacionamentos e desenvolvimento emocional de forma estruturada.",
      "Esse processo acontece a partir da relação de confiança entre psicóloga e paciente — por isso, é importante encontrar uma profissional qualificada, ética e responsável, com quem você se sinta à vontade.",
    ],
    ctaLabel: "Mais informações",
  },
  items: [
    {
      question: "A Miriam atende convênio?",
      answer:
        "O atendimento é particular, com emissão de recibo para solicitar reembolso junto ao seu plano de saúde, quando aplicável.",
    },
    {
      question: "Como funciona a consulta online?",
      answer:
        "As consultas online seguem a mesma estrutura das presenciais, com a mesma duração e o mesmo cuidado na avaliação.",
    },
    {
      question: "A Miriam atende terapia de casal?",
      answer:
        "Sim! Além do atendimento individual, a Miriam realiza terapia de casal, com foco em fortalecer a comunicação e o vínculo.",
    },
    {
      question: "Com que frequência são as consultas de retorno?",
      answer:
        "Varia conforme o quadro clínico, mas em geral as sessões acontecem semanalmente ou quinzenalmente, com encaixe prioritário se necessário.",
    },
    {
      question: "Como faço para agendar minha primeira sessão?",
      answer:
        "É só me chamar no WhatsApp. Vamos conversar sobre o que te trouxe até aqui e encontrar o melhor horário para começar.",
    },
  ],
} as const;

export const footer = {
  about:
    "Espaço de escuta psicológica com ética, acolhimento e compromisso com a sua singularidade.",
  quickLinksTitle: "Links rápidos",
  hoursTitle: "Horário de atendimento",
  ctaLabel: "Agendar consulta",
  rightsText: `© ${new Date().getFullYear()} ${site.name} — ${site.role}. Todos os direitos reservados.`,
} as const;