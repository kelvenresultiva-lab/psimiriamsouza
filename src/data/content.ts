export const site = {
  name: "Giovanna Mendes",
  fullName: "Giovanna Mendes",
  role: "Psicóloga Clínica",
  crp: "Psicóloga Clínica — CRP 04/61587",
  city: "Uberlândia",
  state: "MG",
  address: {
    street: "Rua Cipriano Del Favero, 400, Sala 7 - Centro",
    cityLine: "Uberlândia - MG, 38400-160",
    mapsUrl: "https://www.google.com/maps?q=Rua+Cipriano+Del+Favero,+400,+Centro,+Uberl%C3%A2ndia+-+MG",
    embedQuery: "Rua Cipriano Del Favero, 400, Centro, Uberlândia - MG",
  },
  phoneDisplay: "(34) 9 9698-8008",
  whatsappNumber: "5534996988008",
  whatsappMessage:
    "Olá, Giovanna! Encontrei seu site e gostaria de saber mais sobre o acompanhamento psicológico.",
  email: "giovannamendes.psi@gmail.com",
  instagramHandle: "@giovannamendes.psi",
  instagramUrl: "https://www.instagram.com/giovannamendes.psi",
  hours: "Segunda a Sexta: 8h às 18h",
  hoursNote: "As consultas necessitam ser previamente agendadas.",
  modality: "Atendimento presencial em Uberlândia (MG) e online para todo o Brasil",
  metaDescription:
    "Giovanna Mendes é psicóloga clínica, especialista em Terapia Cognitivo-Comportamental para adolescentes, com atendimento em Uberlândia (MG) e online para todo o Brasil.",
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
  name: "Giovanna Mendes",
  subtitle:
    "Especialista em Terapia Cognitivo-Comportamental para adolescentes e jovens adultos, com atendimento presencial em Uberlândia (MG) e online para todo o Brasil.",
  checklist: [
    "Adolescentes e jovens adultos",
    "Terapia Cognitivo-Comportamental (TCC)",
    "Atendimento presencial e online",
  ],
  ctaLabel: "Agendar consulta",
  ctaSecondaryLabel: "Sobre mim",
  ctaSecondaryHref: "#sobre",
  image: {
    src: "/images/jadi-hero-full.png",
    alt: "Giovanna Mendes em seu consultório",
  },
} as const;

export const heroStat = {
  value: "+200",
  label: "pessoas acompanhadas",
} as const;

export const heroMobile = {
  eyebrow: "PSICÓLOGA CLÍNICA",
  title: "Giovanna Mendes",
  tagline: "UM ESPAÇO DE ESCUTA PARA ADOLESCENTES E JOVENS ADULTOS.",
  ctaLabel: "Mais informações",
  image: {
    src: "/images/jadi-hero-mobile-2.png",
    alt: "Giovanna Mendes sorrindo em seu consultório",
  },
} as const;

export const specialties = {
  items: [
    {
      icon: "Flower2",
      title: "Terapia Cognitivo-Comportamental",
      description:
        "Através de uma abordagem estruturada e baseada em evidências, auxilio crianças e adolescentes a compreenderem pensamentos, emoções e comportamentos, desenvolvendo estratégias práticas para enfrentar os desafios do dia a dia.",
    },
    {
      icon: "Sparkle",
      title: "Adolescentes",
      description:
        "Acompanho adolescentes em seus desafios emocionais, sociais e comportamentais, oferecendo um espaço seguro de escuta, acolhimento e desenvolvimento, respeitando as particularidades dessa fase da vida.",
    },
    {
      icon: "Rainbow",
      title: "Jovens Adultos",
      description:
        "Acompanho jovens adultos em momentos de mudanças, inseguranças e desafios emocionais, oferecendo um espaço acolhedor para fortalecer a autoestima, desenvolver autonomia e promover o bem-estar.",
    },
  ],
} as const;

export const about = {
  eyebrow: "SOBRE A GIOVANNA",
  greeting: "Olá, sou",
  title: "Giovanna Mendes",
  paragraphs: [
    "Sou formada em Psicologia, especialista em Terapia Cognitivo-Comportamental Multicomponentes, com um olhar clínico voltado às demandas específicas de adolescentes e jovens adultos.",
    "Atendo com base em TCC, unindo rigor técnico e cuidado humano — cada acompanhamento é individualizado e ajustado a cada retorno, respeitando o tempo e a história de cada pessoa.",
    "Atendo presencialmente em Uberlândia (MG) e, online, para todo o Brasil, sempre com compromisso técnico e ético em cada sessão.",
  ],
  formationCard: {
    label: "Formação",
    text: "Psicologia, especialista em TCC para adolescentes.",
  },
  image: {
    src: "/images/jadi-sobre.png",
    alt: "Retrato de Giovanna Mendes",
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
      text: "A Giovanna me ajudou a entender coisas que eu carregava há anos sem saber nomear. Me senti acolhido desde a primeira sessão.",
    },
    {
      name: "Paciente em acompanhamento",
      rating: 5,
      text: "Um espaço de escuta sem julgamentos. Consegui entender melhor minhas reações e hoje lido com mais equilíbrio com o dia a dia.",
    },
    {
      name: "Paciente em acompanhamento",
      rating: 5,
      text: "O acompanhamento com abordagem em TCC me ajudou a desenvolver estratégias práticas para lidar com a ansiedade. Recomendo muito.",
    },
  ],
} as const;

export const process = {
  eyebrow: "COMO FUNCIONA MEU TRABALHO",
  title: "Um processo claro para sua evolução",
  paragraphs: [
    "Primeira conversa para compreender sua história, demandas e momento de vida. A partir daí, construímos juntos um plano terapêutico baseado em TCC, com objetivos claros e passos que fazem sentido para você.",
    "O acompanhamento segue com sessões regulares, com escuta qualificada e direcionamento terapêutico de acordo com suas necessidades, trabalhando sua evolução emocional com mais consciência e autonomia ao longo do tempo.",
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
    alt: "Giovanna Mendes sentada, anotando durante uma sessão de atendimento",
  },
} as const;

export const reasons = {
  eyebrow: "ALGUNS BENEFÍCIOS DA TERAPIA",
  title: "Quatro motivos para começar agora",
  subtitle:
    "Psicoterapia de verdade não é sobre respostas prontas — é sobre ser ouvido com atenção, tempo e cuidado em cada etapa do processo.",
  items: [
    {
      number: "01",
      title: "Tempo de escuta real",
      description:
        "Cada sessão tem a duração combinada, sem pressa e sem hora marcada de forma corrida. Você fala, eu escuto de verdade.",
    },
    {
      number: "02",
      title: "Devolutiva por escrito",
      description:
        "Ao final do processo de avaliação, você recebe um documento com minhas percepções e o direcionamento do acompanhamento.",
    },
    {
      number: "03",
      title: "Abordagem com critério",
      description:
        "Cada técnica é escolhida com base em evidências científicas (TCC), com revisão constante ao longo do processo.",
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
      "A terapia é um espaço para encontrar mais clareza diante dos seus conflitos e dificuldades, com o apoio de uma profissional. No acompanhamento psicológico baseado em TCC, existem técnicas práticas que ajudam cada pessoa a reconhecer e trabalhar o que a tem incomodado no dia a dia.",
      "Esse processo acontece a partir da relação de confiança entre psicóloga e paciente — por isso, é importante encontrar uma profissional qualificada, ética e responsável, com quem você se sinta à vontade.",
    ],
    ctaLabel: "Mais informações",
  },
  items: [
    {
      question: "A Giovanna atende convênio?",
      answer:
        "O atendimento é particular, com emissão de recibo para solicitar reembolso junto ao seu plano de saúde, quando aplicável.",
    },
    {
      question: "Como funciona a consulta online?",
      answer:
        "As consultas online seguem a mesma estrutura das presenciais, com a mesma duração e o mesmo cuidado na avaliação, para pacientes de todo o Brasil.",
    },
    {
      question: "Com que frequência são as consultas de retorno?",
      answer:
        "Varia conforme o quadro clínico, mas em geral as sessões acontecem semanalmente ou quinzenalmente, com encaixe prioritário se necessário.",
    },
    {
      question: "A Giovanna atende adolescentes?",
      answer:
        "Sim! O foco do atendimento é justamente adolescentes e jovens adultos, com abordagem baseada em TCC Multicomponentes.",
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