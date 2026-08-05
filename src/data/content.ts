export const site = {
  name: "Miriam Souza",
  fullName: "Miriam Souza",
  role: "Psicóloga Clínica",
  crp: "Psicóloga Clínica — CRP 04/79446",
  city: "Contagem",
  state: "MG",
  address: {
    street: "Rua Antônio Bernardino Muniz, 143 - Sala 309, Centro",
    cityLine: "Contagem - MG, 32040-630",
    mapsUrl: "https://www.google.com/maps?q=Rua+Ant%C3%B4nio+Bernardino+Muniz,+143,+Centro,+Contagem+-+MG",
    embedQuery: "Rua Antônio Bernardino Muniz, 143, Centro, Contagem - MG",
  },
  phoneDisplay: "(31) 9 8337-6372",
  whatsappNumber: "5531983376372",
  whatsappMessage:
    "Olá, Miriam! Quero agendar minha primeira sessão e saber mais sobre o acompanhamento psicológico.",
  email: "consultoriopsic1969@gmail.com",
  instagramHandle: "@psic.miriamsouza",
  instagramUrl: "https://www.instagram.com/psic.miriamsouza",
  hours: "Segunda a Sexta: 8h às 18h",
  hoursNote: "As consultas necessitam ser previamente agendadas.",
  modality: "Atendimento presencial em Contagem (MG) e online para todo o Brasil",
  metaDescription:
    "Miriam Souza é psicóloga clínica em Contagem (MG), especialista em ansiedade, autoestima, relacionamentos e terapia de casal. Atendimento presencial e online, com abordagem em TCC e Psicologia Sistêmica.",
} as const;
export function whatsappLink(customMessage?: string) {
  const message = encodeURIComponent(customMessage ?? site.whatsappMessage);
  return `https://wa.me/${site.whatsappNumber}?text=${message}`;
}
export const nav = [
  { label: "Início", href: "/#hero" },
  { label: "Especialidades", href: "/#especialidades" },
  { label: "Sobre mim", href: "/#sobre" },
  { label: "Consultório", href: "/#consultorio" },
  { label: "Como funciona", href: "/#processo" },
  { label: "FAQ", href: "/#faq" },
  { label: "Blog", href: "/blog" },
] as const;
export const header = {
  ctaLabel: "Agende sua primeira sessão",
} as const;
export const hero = {
  eyebrow: site.crp,
  greeting: "Olá, eu sou",
  name: "Miriam Souza",
  subtitle:
    "Você sente que carrega tudo sozinha, mesmo quando não devia? Ofereço um espaço seguro e acolhedor para você entender o que sente, fortalecer sua autoestima e construir uma vida emocional mais equilibrada.",
  checklist: [
    "Ansiedade, autoestima e relacionamentos",
    "TCC com olhar sistêmico",
    "Atendimento presencial e online",
  ],
  ctaLabel: "Agende sua primeira sessão",
  ctaSecondaryLabel: "Conhecer meu trabalho",
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
  tagline: "Você não precisa enfrentar tudo sozinha(o). Aqui, você encontra um espaço acolhedor para cuidar de si e fortalecer sua autoestima.",
  ctaLabel: "Iniciar meu processo",
  image: {
    src: "/images/jadi-hero-mobile-2.png",
    alt: "Miriam Souza sorrindo em seu consultório",
  },
} as const;
export const specialties = {
  items: [
    {
      icon: "Flower2",
      title: "Ansiedade e Autoestima",
      description:
        "Você sente uma ansiedade que não passa, insegurança ou dificuldade em se valorizar? Trabalho para fortalecer sua autoestima e trazer mais equilíbrio para o seu dia a dia.",
    },
    {
      icon: "Sparkle",
      title: "Relacionamentos e Terapia de Casal",
      description:
        "Conflitos familiares, dependência emocional ou dificuldades no casal? Ofereço um espaço para fortalecer vínculos e construir relações mais saudáveis.",
    },
    {
      icon: "Rainbow",
      title: "Desenvolvimento Emocional",
      description:
        "Sensação de estar perdida, esgotada ou com dificuldade para tomar decisões? Trabalho o autoconhecimento e o desenvolvimento de estratégias para você lidar melhor com os desafios da vida.",
    },
  ],
} as const;
export const about = {
  eyebrow: "SOBRE A MIRIAM",
  greeting: "Olá, sou",
  title: "Miriam Souza",
  paragraphs: [
    "Atuo com atendimento presencial e online para adultos, com foco em mulheres que desejam superar feridas emocionais, fortalecer a autoestima e construir uma vida emocional mais saudável. Também atendo homens, casais e famílias.",
    "Trabalho com ansiedade, depressão, autoestima, relacionamentos, inteligência emocional, terapia de casal, conflitos familiares, dependência emocional, luto e desenvolvimento pessoal — além de acompanhar pessoas com sintomas relacionados ao TDAH na vida adulta, dentro dos limites da minha atuação clínica.",
    "Meu compromisso é oferecer um espaço seguro, ético e acolhedor para que cada pessoa desenvolva recursos emocionais e construa uma vida com mais equilíbrio e significado. Integro a Terapia Cognitivo-Comportamental com um olhar sistêmico e uma escuta sensível, promovendo um processo terapêutico personalizado.",
  ],
  formationCard: {
    label: "Formação",
    text: "Psicóloga, com abordagem em TCC associada a recursos da Psicologia Sistêmica.",
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
      alt: "Mesa de trabalho da Miriam Souza, com quadros decorativos na parede",
    },
    {
      src: "/images/jadi-consultorio-02.png",
      alt: "Ambiente de atendimento com poltronas para os pacientes",
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
  title: "Sua primeira sessão",
  paragraphs: [
    "A primeira sessão é um momento de acolhimento, escuta e avaliação da sua história, suas demandas e seus objetivos — permitindo a construção de um plano terapêutico individualizado, feito sob medida para você.",
    "O acompanhamento segue com sessões regulares, com escuta qualificada e direcionamento terapêutico de acordo com suas necessidades, promovendo autoconhecimento e mais qualidade de vida ao longo do tempo.",
  ],
  progressBars: [
    { label: "Escuta acolhedora", value: 100 },
    { label: "Compromisso com o processo", value: 97 },
  ],
  ctaLabel: "Agende sua primeira sessão",
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
  eyebrow: "COMO A TERAPIA PODE TE AJUDAR",
  title: "O que muda no seu dia a dia",
  subtitle:
    "A terapia proporciona equilíbrio emocional, autoconhecimento e mais segurança para tomar decisões — com um trabalho pautado na ética e no acolhimento.",
  items: [
    {
      number: "01",
      title: "Redução da ansiedade",
      description:
        "Desenvolva estratégias reais para lidar com a ansiedade do dia a dia, com mais equilíbrio emocional.",
    },
    {
      number: "02",
      title: "Fortalecimento da autoestima",
      description:
        "Construa uma relação mais saudável com você mesma, reconhecendo seu valor e suas conquistas.",
    },
    {
      number: "03",
      title: "Melhora nos relacionamentos",
      description:
        "Fortaleça vínculos e desenvolva uma comunicação mais saudável com quem você ama.",
    },
    {
      number: "04",
      title: "Mais segurança para decidir",
      description:
        "Ganhe clareza e confiança para tomar decisões importantes na sua vida, sem culpa ou insegurança.",
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
      "Muita gente adia a terapia por medo de ser julgada, por não saber como funciona o processo, ou por acreditar que precisa resolver tudo sozinha. Mas buscar ajuda é o primeiro passo para o equilíbrio emocional que você merece.",
      "Esse processo acontece a partir da relação de confiança entre psicóloga e paciente — por isso, é importante encontrar uma profissional qualificada, ética e responsável, com quem você se sinta à vontade.",
    ],
    ctaLabel: "Quero iniciar meu processo terapêutico",
  },
  items: [
    {
      question: "Como funciona a primeira sessão?",
      answer:
        "É um momento de acolhimento, escuta e avaliação da sua história, suas demandas e seus objetivos, permitindo a construção de um plano terapêutico individualizado.",
    },
    {
      question: "A Miriam atende convênio?",
      answer:
        "O atendimento é particular. Emito documentação para solicitação de reembolso quando o seu convênio oferece esse benefício.",
    },
    {
      question: "Qual público a Miriam atende?",
      answer:
        "Atendo principalmente adultos e casais, com foco especial em mulheres que desejam fortalecer a autoestima e construir uma vida emocional mais saudável. Também atendo homens e famílias.",
    },
    {
      question: "Como funciona a consulta online?",
      answer:
        "As consultas online seguem a mesma estrutura das presenciais, com a mesma duração e o mesmo cuidado na avaliação, para pacientes de todo o Brasil.",
    },
    {
      question: "Vocês fazem diagnóstico ou passam medicação?",
      answer:
        "Não. Psicólogos não prescrevem medicação — isso é atribuição exclusiva de médicos psiquiatras. O acompanhamento psicológico trabalha por meio de avaliação e escuta, com devolutivas claras sobre o que é observado ao longo do processo.",
    },
    {
      question: "Como sei se preciso de terapia?",
      answer:
        "Se você sente ansiedade, tristeza persistente, sobrecarga emocional, dificuldade nos relacionamentos ou a sensação de estar perdida na vida, esse já é um bom motivo para buscar apoio.",
    },
  ],
} as const;
export const footer = {
  about:
    "Um espaço seguro, ético e acolhedor para você desenvolver recursos emocionais e construir uma vida com mais equilíbrio e significado.",
  quickLinksTitle: "Links rápidos",
  hoursTitle: "Horário de atendimento",
  ctaLabel: "Agende sua primeira sessão",
  rightsText: `© ${new Date().getFullYear()} ${site.name} — ${site.role}. Todos os direitos reservados.`,
} as const;