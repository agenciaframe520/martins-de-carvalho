export type Lang = 'pt' | 'de' | 'en' | 'es';

export const LANGS: { code: Lang; label: string; hreflang: string }[] = [
  { code: 'pt', label: 'PT', hreflang: 'pt-BR' },
  { code: 'de', label: 'DE', hreflang: 'de-DE' },
  { code: 'en', label: 'EN', hreflang: 'en-US' },
  { code: 'es', label: 'ES', hreflang: 'es-ES' },
];

export const SITE = 'https://www.martinsdecarvalho.com.br';
export const EMAIL = 'maria@martinsdecarvalho.com.br';
export const LINKEDIN = 'https://www.linkedin.com/in/mariamartinsdecarvalho4a619127';
export const PUBLICATIONS_URL = 'https://www.cloudcoaching.com.br/topicos/maria-pereira-martins-de-carvalho/';
export const WHATSAPP = '+5511963407781';

export function langHref(lang: Lang): string {
  return lang === 'pt' ? '/' : `/${lang}/`;
}

type Dict = {
  htmlLang: string;
  nav: { sobre: string; areas: string; publicacoes: string; contato: string };
  hero: { tagline: string; cta: string };
  sobre: {
    heading: string;
    p1: string;
    p2: string;
    languages: string;
  };
  areas: {
    heading: string;
    items: { title: string; desc: string }[];
  };
  publicacoes: {
    heading: string;
    intro: string;
    linkLabel: string;
  };
  contato: {
    heading: string;
    name: string;
    email: string;
    message: string;
    submit: string;
    success: string;
    languages: string;
  };
  sobreM: {
    heading: string;
    p1: string;
    formation: string[];
    languages: string;
    alt: string;
  };
  footer: { rights: string; linkedin: string };
  meta: { title: string; description: string };
};

export const dict: Record<Lang, Dict> = {
  pt: {
    htmlLang: 'pt-BR',
    nav: { sobre: 'Sobre', areas: 'Áreas', publicacoes: 'Publicações', contato: 'Contato' },
    hero: {
      tagline: 'Consultoria tributária e contabilidade<br>para empresas e pessoas físicas no Brasil e no exterior.',
      cta: 'Entre em contato',
    },
    sobre: {
      heading: 'Sobre o Escritório',
      p1: 'O Martins de Carvalho atende empresas e pessoas f\u00edsicas, muitas com opera\u00e7\u00f5es internacionais, que precisam de orienta\u00e7\u00e3o tribut\u00e1ria estrat\u00e9gica em um pa\u00eds onde as regras mudam o tempo todo.',
      p2: 'Combinamos mais de 25 anos de experiência no Brasil e na Alemanha com uma abordagem direta e acessível. Acompanhamos de perto as constantes mudanças na legislação, especialmente a Reforma Tributária (IBS/CBS), para oferecer orientação que protege seus interesses e aproveita oportunidades.',
      languages: '',
    },
    areas: {
      heading: 'Áreas de Atuação',
      items: [
        {
          title: 'Tributação Internacional',
          desc: 'Planejamento tributário para operações cross-border. Estruturação de investimentos estrangeiros, tratados para evitar dupla tributação, preços de transferência e compliance fiscal em múltiplas jurisdições.',
        },
        {
          title: 'Reforma Tributária (IBS/CBS)',
          desc: 'Consultoria estratégica para a transição do sistema tributário brasileiro (2026-2033). Análise de impacto, revisão de contratos, adequação de sistemas e planejamento para o novo IVA Dual que substitui PIS, Cofins, ICMS, ISS e IPI.',
        },
        {
          title: 'M&A e Reorganização Societária',
          desc: 'Due diligence tributária, identificação de riscos, estruturação de fusões e aquisições, reorganização corporativa e planejamento sucessório.',
        },
        {
          title: 'Contabilidade',
          desc: 'Contabilidade com foco em precisão, compliance e informação para decisões estratégicas, para empresas e pessoas físicas. Experiência com SAP e sistemas fiscais integrados.',
        },
      ],
    },
    publicacoes: {
      heading: 'Publicações e Artigos',
      intro: 'Mária publica regularmente sobre tributação, contabilidade e a Reforma Tributária brasileira.',
      linkLabel: 'Acessar todos os artigos no Cloud Coaching →',
    },
    contato: {
      heading: 'Contato',
      name: 'Nome',
      email: 'Email',
      message: 'Mensagem',
      submit: 'Enviar mensagem',
      success: 'Mensagem enviada. Obrigada, você receberá uma resposta em breve.',
      languages: 'Fale conosco para saber como podemos ajudar.',
    },
    sobreM: {
      heading: 'Sobre a Fundadora',
      p1: 'Mária Pereira Martins de Carvalho é advogada e contadora com mais de 25 anos de experiência adquirida em escritórios de advocacia, auditoria e coordenação de departamento jurídico. Tem amplo conhecimento em direito tributário e contabilidade, além de experiência em direito societário e contratual voltada para clientes estrangeiros. Sua formação sustenta a atuação do escritório:',
      formation: [
        'PhD em Direito Comparado — Direito Tributário Brasileiro e Alemão — Ruhr-Universität Bochum',
        'LL.M. em Direito Tributário e Econômico (Steuer und Wirtschaft) — Ruhr-Universität Bochum',
        'MBA em Accounting and Finance — USP/Esalq',
        'Bacharelado em Direito — Universidade Presbiteriana Mackenzie',
        'Ciências Contábeis — FECAP',
        'Planejamento Tributário — IBET',
      ],
      languages: '',
      alt: 'Retrato de Mária Pereira Martins de Carvalho',
    },
    footer: { rights: 'Todos os direitos reservados.', linkedin: 'LinkedIn' },
    meta: {
      title: 'Martins de Carvalho — Consultoria tributária e contabilidade',
      description: 'Consultoria tributária estratégica e contabilidade para empresas e pessoas físicas no Brasil e no exterior. Reforma Tributária (IBS/CBS), tributação internacional, M&A e contabilidade.',
    },
  },
  de: {
    htmlLang: 'de-DE',
    nav: { sobre: 'Über uns', areas: 'Leistungen', publicacoes: 'Publikationen', contato: 'Kontakt' },
    hero: {
      tagline: 'Steuerberatung und Rechnungslegung<br>für Unternehmen und Privatpersonen mit Aktivitäten in Brasilien und im Ausland.',
      cta: 'Kontakt aufnehmen',
    },
    sobre: {
      heading: 'Über die Kanzlei',
      p1: 'Martins de Carvalho betreut Unternehmen und Privatpersonen, viele mit internationalen Aktivitäten, die in einem Land mit ständig wechselnden Regeln strategische Steuerberatung benötigen.',
      p2: 'Wir verbinden über 25 Jahre Erfahrung in Brasilien und Deutschland mit einer direkten und zugänglichen Herangehensweise. Wir begleiten die ständigen Änderungen der Gesetzgebung, insbesondere die Steuerreform (IBS/CBS), um Strategien zu entwickeln, die Ihre Interessen schützen und Chancen nutzen.',
      languages: '',
    },
    areas: {
      heading: 'Leistungsbereiche',
      items: [
        {
          title: 'Internationale Besteuerung',
          desc: 'Steuerplanung für grenzüberschreitende Aktivitäten. Strukturierung ausländischer Investitionen, Doppelbesteuerungsabkommen, Verrechnungspreise und steuerliche Compliance in mehreren Rechtsgebieten.',
        },
        {
          title: 'Steuerreform (IBS/CBS)',
          desc: 'Strategische Beratung für den Übergang des brasilianischen Steuersystems (2026-2033). Folgenanalyse, Vertragsprüfung, Systemanpassung und Planung für die neue duale IVA, die PIS, Cofins, ICMS, ISS und IPI ersetzt.',
        },
        {
          title: 'M&A und Gesellschaftsreorganisation',
          desc: 'Steuerliche Due-Diligence, Risikoermittlung, Strukturierung von Fusionen und Akquisitionen, gesellschaftliche Reorganisation und Nachfolgeplanung.',
        },
        {
          title: 'Rechnungslegung',
          desc: 'Rechnungslegung mit Fokus auf Präzision, Compliance und entscheidungsrelevante Information, für Unternehmen und Privatpersonen. Erfahrung mit SAP und integrierten Steuersystemen.',
        },
      ],
    },
    publicacoes: {
      heading: 'Publikationen & Artikel',
      intro: 'Mária veröffentlicht regelmäßig Beiträge zu Steuerrecht, Rechnungslegung und der brasilianischen Steuerreform (auf Portugiesisch).',
      linkLabel: 'Alle Artikel auf Cloud Coaching aufrufen →',
    },
    contato: {
      heading: 'Kontakt',
      name: 'Name',
      email: 'Email',
      message: 'Nachricht',
      submit: 'Nachricht senden',
      success: 'Nachricht gesendet. Vielen Dank, Sie erhalten in Kürze eine Antwort.',
      languages: 'Sprechen Sie uns an. Wir zeigen Ihnen, wie wir helfen können.',
    },
    sobreM: {
      heading: 'Über die Gründerin',
      p1: 'Mária Pereira Martins de Carvalho ist Rechtsanw\u00e4ltin und Steuerberaterin mit \u00fcber 25 Jahren Erfahrung in Anwaltskanzleien, Wirtschaftspr\u00fcfung und Leitung der Rechtsabteilung. Umfassende Kenntnisse im Steuerrecht und Rechnungswesen sowie im Gesellschafts- und Vertragsrecht mit Fokus auf ausl\u00e4ndische Mandanten. Ihre Ausbildung untermauert die Arbeit der Kanzlei:',
      formation: [
        'Promotion im Vergleichenden Steuerrecht — Deutsches und brasilianisches Einkommensteuerrecht — Ruhr-Universität Bochum',
        'LL.M. Steuer- und Wirtschaftsrecht (Steuer und Wirtschaft) — Ruhr-Universität Bochum',
        'MBA Accounting and Finance — USP/Esalq',
        'Rechtswissenschaften — Universidade Presbiteriana Mackenzie',
        'Rechnungslegung — FECAP',
        'Steuerplanung — IBET',
      ],
      languages: '',
      alt: 'Porträt von Mária Pereira Martins de Carvalho',
    },
    footer: { rights: 'Alle Rechte vorbehalten.', linkedin: 'LinkedIn' },
    meta: {
      title: 'Martins de Carvalho — Steuerberatung & Rechnungslegung',
      description: 'Strategische Steuerberatung und Rechnungslegung für Unternehmen und Privatpersonen in Brasilien und im Ausland. Steuerreform (IBS/CBS), internationale Besteuerung, M&A und Rechnungslegung.',
    },
  },
  en: {
    htmlLang: 'en-US',
    nav: { sobre: 'About', areas: 'Practice', publicacoes: 'Publications', contato: 'Contact' },
    hero: {
      tagline: 'Tax advisory and accounting<br>for companies and individuals in Brazil and abroad.',
      cta: 'Contact us',
    },
    sobre: {
      heading: 'About the Firm',
      p1: 'Martins de Carvalho serves companies and individuals, many with international operations, that need strategic tax guidance in a country where the rules change constantly.',
      p2: 'We combine over 25 years of experience in Brazil and Germany with a direct and approachable style. We closely follow the constant changes in legislation, especially the Tax Reform (IBS/CBS), to provide guidance that protects your interests and leverages opportunities.',
      languages: '',
    },
    areas: {
      heading: 'Practice Areas',
      items: [
        {
          title: 'International Taxation',
          desc: 'Tax planning for cross-border operations. Structuring of foreign investments, double taxation treaties, transfer pricing and tax compliance across multiple jurisdictions.',
        },
        {
          title: 'Tax Reform (IBS/CBS)',
          desc: 'Strategic advisory for the transition of the Brazilian tax system (2026-2033). Impact analysis, contract review, systems adaptation and planning for the new Dual VAT that replaces PIS, Cofins, ICMS, ISS and IPI.',
        },
        {
          title: 'M&A and Corporate Reorganization',
          desc: 'Tax due diligence, risk identification, structuring of mergers and acquisitions, corporate reorganization and succession planning.',
        },
        {
          title: 'Accounting',
          desc: 'Accounting with a focus on accuracy, compliance and decision-grade information, for companies and individuals. Experience with SAP and integrated tax systems.',
        },
      ],
    },
    publicacoes: {
      heading: 'Publications & Articles',
      intro: 'Mária regularly writes about tax, accounting and the Brazilian Tax Reform (in Portuguese).',
      linkLabel: 'Access all articles on Cloud Coaching →',
    },
    contato: {
      heading: 'Contact',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      submit: 'Send message',
      success: 'Message sent. Thank you, you will hear back shortly.',
      languages: 'Get in touch. Let us know how we can help.',
    },
    sobreM: {
      heading: 'About the Founder',
      p1: 'M\u00e1ria Pereira Martins de Carvalho is a lawyer and accountant with over 25 years of experience acquired in law firms, auditing companies and legal department coordination. Extensive knowledge in tax law and accounting, as well as corporate and contract law focused on foreign clients. Her background underpins the firm\u2019s expertise:',
      formation: [
        'PhD in Comparative Law — German and Brazilian Income Tax — Ruhr Universität Bochum',
        'LL.M. Tax and Economic Law (Steuer und Wirtschaft) — Ruhr Universität Bochum',
        'MBA Accounting and Finance — USP/Esalq',
        'Bachelor of Law — Universidade Presbiteriana Mackenzie',
        'Accounting Sciences — FECAP',
        'Tax Planning — IBET',
      ],
      languages: '',
      alt: 'Portrait of Mária Pereira Martins de Carvalho',
    },
    footer: { rights: 'All rights reserved.', linkedin: 'LinkedIn' },
    meta: {
      title: 'Martins de Carvalho — Tax advisory and accounting',
      description: 'Strategic tax advisory and accounting for companies and individuals in Brazil and abroad. Tax Reform (IBS/CBS), international taxation, M&A and accounting.',
    },
  },
  es: {
    htmlLang: 'es-ES',
    nav: { sobre: 'Acerca de', areas: 'Servicios', publicacoes: 'Publicaciones', contato: 'Contacto' },
    hero: {
      tagline: 'Asesoría tributaria y contabilidad<br>para empresas y personas físicas en Brasil y en el exterior.',
      cta: 'Póngase en contacto',
    },
    sobre: {
      heading: 'Acerca del Despacho',
      p1: 'Martins de Carvalho atiende a empresas y personas físicas, muchas con operaciones internacionales, que necesitan orientación tributaria estratégica en un país donde las reglas cambian constantemente.',
      p2: 'Combinamos más de 25 años de experiencia en Brasil y Alemania con un enfoque directo y accesible. Seguimos de cerca los constantes cambios en la legislación, especialmente la Reforma Tributaria (IBS/CBS), para ofrecer orientación que protege sus intereses y aprovecha oportunidades.',
      languages: '',
    },
    areas: {
      heading: 'Áreas de Práctica',
      items: [
        {
          title: 'Tributación Internacional',
          desc: 'Planificación tributaria para operaciones cross-border. Estructuración de inversiones extranjeras, convenios para evitar la doble imposición, precios de transferencia y compliance fiscal en múltiples jurisdicciones.',
        },
        {
          title: 'Reforma Tributaria (IBS/CBS)',
          desc: 'Asesoría estratégica para la transición del sistema tributario brasileño (2026-2033). Análisis de impacto, revisión de contratos, adecuación de sistemas y planificación para el nuevo IVA Dual que sustituye a PIS, Cofins, ICMS, ISS e IPI.',
        },
        {
          title: 'M&A y Reorganización Societaria',
          desc: 'Due diligence tributario, identificación de riesgos, estructuración de operaciones de fusión y adquisición, reorganización corporativa y planificación sucesoria.',
        },
        {
          title: 'Contabilidad Empresarial',
          desc: 'Contabilidad con foco en precisión, compliance e información para decisiones estratégicas. Experiencia con SAP y sistemas fiscales integrados.',
        },
      ],
    },
    publicacoes: {
      heading: 'Publicaciones y Artículos',
      intro: 'Mária publica regularmente sobre tributación, contabilidad y la Reforma Tributaria brasileña (en portugués).',
      linkLabel: 'Acceder a todos los artículos en Cloud Coaching →',
    },
    contato: {
      heading: 'Contacto',
      name: 'Nombre',
      email: 'Email',
      message: 'Mensaje',
      submit: 'Enviar mensaje',
      success: 'Mensaje enviado. Gracias, recibirá respuesta en breve.',
      languages: 'Contáctenos. Descubra cómo podemos ayudar.',
    },
    sobreM: {
      heading: 'Acerca de la Fundadora',
      p1: 'Mária Pereira Martins de Carvalho es abogada y contadora con más de 25 años de experiencia adquirida en despachos de abogados, auditoría y coordinación de departamento jurídico. Amplio conocimiento en derecho tributario y contabilidad, así como en derecho societario y contractual orientado a clientes extranjeros. Su formación respalda la labor del despacho:',
      formation: [
        'Doctorado en Derecho Comparado — Derecho Tributario Alemán y Brasileño — Ruhr Universität Bochum',
        'LL.M. Derecho Tributario y Económico (Steuer und Wirtschaft) — Ruhr Universität Bochum',
        'MBA Accounting and Finance — USP/Esalq',
        'Derecho — Universidade Presbiteriana Mackenzie',
        'Ciencias Contables — FECAP',
        'Planificación Tributaria — IBET',
      ],
      languages: '',
      alt: 'Retrato de Mária Pereira Martins de Carvalho',
    },
    footer: { rights: 'Todos los derechos reservados.', linkedin: 'LinkedIn' },
    meta: {
      title: 'Martins de Carvalho — Asesoría tributaria y contabilidad',
      description: 'Asesoría tributaria estratégica y contabilidad para empresas y personas físicas en Brasil y en el exterior. Reforma Tributaria (IBS/CBS), tributación internacional, M&A y contabilidad.',
    },
  },
};