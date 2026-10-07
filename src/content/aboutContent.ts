import { SupportedLanguage } from '../types/i18n.ts';

export interface AboutFact {
  number: string;
  label: string;
}

export interface AboutMilestone {
  year: string;
  title: string;
  description: string;
}

export interface AboutPrinciple {
  title: string;
  text: string;
}

export interface AboutContent {
  header: {
    kicker: string;
    title: string;
    subtitle: string;
  };
  facts: AboutFact[];
  authorCard: {
    name: string;
    role: string;
    bio: string;
    specialization: string;
    authorship: string;
  };
  principles: {
    title: string;
    items: AboutPrinciple[];
  };
  timeline: {
    kicker: string;
    title: string;
    milestones: AboutMilestone[];
  };
}

export const ABOUT_CONTENT: Record<SupportedLanguage, AboutContent> = {
  uk: {
    header: {
      kicker: 'Про автора та платформу · NextSelf Lab · Олександр Дьяков',
      title: 'Від внутрішнього хаосу до твердої опори: філософія NextSelf',
      subtitle: 'NextSelf — це система прикладних психотехнологій та когнітивного профайлінгу. Ми поєднали глибоке дослідження поведінкових патернів і доказові методики (КПТ, нейролінгвістику), щоб дати вам точний пульт керування власним станом.',
    },
    facts: [
      { number: '10,450+', label: 'Оцифрованих профайлів' },
      { number: '12,000+', label: 'Годин індивідуальної роботи' },
      { number: '12+', label: 'Років досліджень та практики' },
      { number: '94%', label: 'Стійкий результат змін' },
    ],
    authorCard: {
      name: 'Олександр Дьяков',
      role: 'Дослідник, профайлер, засновник лабораторії NextSelf',
      bio: '12+ років приватної практики, понад 12,000 годин індивідуальної роботи з лідерами та підприємцями. Автор психометричних сканерів та протоколів когнітивної стабілізації.',
      specialization: 'Спеціалізація: когнітивне перескладання та фобії',
      authorship: 'Автор психометричних сканерів NextSelf',
    },
    principles: {
      title: 'Фундаментальні принципи нашого підходу',
      items: [
        {
          title: 'Доказовість та нейробіологія',
          text: 'Ми не спираємося на містику чи абстрактні теорії. Всі інструменти мають під собою фундамент когнітивістики, нейрофізіології стресу та перевірених протоколів.',
        },
        {
          title: 'Інженерна точність',
          text: 'Замість безкінечних розмов про минуле ми оцифровуємо поточну проблему: які тригери запускають тривогу, де виникає ступор і яка точна послідовність дій повертає контроль.',
        },
        {
          title: 'Повна конфіденційність',
          text: 'Результати діагностики та деталі сесій захищені стандартами приватності. Безпека ваших даних — абсолютний пріоритет.',
        },
      ],
    },
    timeline: {
      kicker: 'ХРОНОЛОГІЯ',
      title: 'Еволюція методології NextSelf',
      milestones: [
        {
          year: '2014',
          title: 'Початок прикладних досліджень психіки',
          description: 'Вивчення кібернетичних моделей мислення, когнітивно-поведінкових патернів та нейролінгвістичних структур.',
        },
        {
          year: '2018',
          title: 'Розробка авторської системи профайлінгу',
          description: 'Створення методології експрес-діагностики прихованих блоків, страхів та енергетичних витоків особистості.',
        },
        {
          year: '2022',
          title: 'Оцифрування алгоритмів трансформації',
          description: 'Переведення глибинних психотехнологій у покрокові протоколи, зрозумілі кожній людині без надлишкової термінології.',
        },
        {
          year: '2026',
          title: 'Запуск екосистеми NextSelf',
          description: 'Об’єднання доказової науки, поведінкових сканерів та персонального супроводу в єдину інженерну платформу.',
        },
      ],
    },
  },

  ru: {
    header: {
      kicker: 'Об авторе и платформе · NextSelf Lab · Александр Дьяков',
      title: 'От внутреннего хаоса к твердой опоре: философия NextSelf',
      subtitle: 'NextSelf — это экосистема прикладных психотехнологий. Мы объединили глубокий поведенческий профайлинг и доказательные методики, чтобы дать вам точный пульт управления своим состоянием.',
    },
    facts: [
      { number: '10,450+', label: 'Оцифрованных профилей' },
      { number: '12,000+', label: 'Часов глубокой работы' },
      { number: '12+', label: 'Лет изучения психики' },
      { number: '94%', label: 'Стойкий результат изменений' },
    ],
    authorCard: {
      name: 'Александр Дьяков',
      role: 'Исследователь, профайлер, основатель лаборатории NextSelf',
      bio: '12+ лет практики, более 12,000 часов индивидуальной работы с предпринимателями. Автор психометрических сканеров и протоколов стабилизации.',
      specialization: 'Специализация: когнитивная пересборка и фобии',
      authorship: 'Автор психометрических сканеров NextSelf',
    },
    principles: {
      title: 'Фундаментальные принципы нашего подхода',
      items: [
        {
          title: 'Доказательность и нейробиология',
          text: 'Мы не опираемся на мистику или абстрактные теории. Все инструменты базируются на когнитивистике и нейрофизиологии стресса.',
        },
        {
          title: 'Инженерная точность',
          text: 'Вместо бесконечных разговоров о прошлом мы оцифровываем текущую проблему и находим точные рычаги изменений.',
        },
        {
          title: 'Полная конфиденциальность',
          text: 'Результаты диагностики и детали сессий защищены строгими стандартами конфиденциальности.',
        },
      ],
    },
    timeline: {
      kicker: 'ХРОНОЛОГИЯ',
      title: 'Эволюция методологии NextSelf',
      milestones: [
        {
          year: '2014',
          title: 'Начало прикладных исследований психики',
          description: 'Изучение кибернетических моделей мышления, когнитивно-поведенческих паттернов и нейролингвистических структур.',
        },
        {
          year: '2018',
          title: 'Разработка авторской системы профайлинга',
          description: 'Создание методологии экспресс-диагностики скрытых блоков, страхов и энергетических утечек личности.',
        },
        {
          year: '2022',
          title: 'Оцифровка алгоритмов самопомощи',
          description: 'Перевод глубоких психотехнологий в пошаговые цифровые протоколы, понятные каждому человеку без сложной терминологии.',
        },
        {
          year: '2026',
          title: 'Запуск цифровой экосистемы NextSelf',
          description: 'Объединение доказательной науки, поведенческих сканеров и сообщества специалистов в единую платформу.',
        },
      ],
    },
  },

  en: {
    header: {
      kicker: 'About Author & Methodology · NextSelf Lab · Oleksandr Diakov',
      title: 'From Internal Chaos to Unshakable Self-Reliance: NextSelf Philosophy',
      subtitle: 'NextSelf is an applied psychotechnology ecosystem. We fuse deep behavioral profiling with evidence-based methodologies (CBT, NLP) to equip you with an engineering console for your emotional and cognitive state.',
    },
    facts: [
      { number: '10,450+', label: 'Digitized Profiles' },
      { number: '12,000+', label: 'Hours of 1-on-1 Sessions' },
      { number: '12+', label: 'Years of Applied Research' },
      { number: '94%', label: 'Long-term Retention Rate' },
    ],
    authorCard: {
      name: 'Oleksandr Diakov',
      role: 'Applied Cognitive Researcher, Profiler & Founder of NextSelf Lab',
      bio: '12+ years of private practice, 12,000+ hours of individual strategy sessions with founders. Architect of psychometric scanners and cognitive refactoring algorithms.',
      specialization: 'Specialization: Cognitive Refactoring & Phobia Dissolution',
      authorship: 'Creator of NextSelf Diagnostic Scanners',
    },
    principles: {
      title: 'Core Principles of Our Approach',
      items: [
        {
          title: 'Evidence-Based & Neurobiology',
          text: 'No mysticism or abstract conjectures. All protocols are grounded in cognitive science, the neurobiology of stress, and validated clinical frameworks.',
        },
        {
          title: 'Engineering Precision',
          text: 'Rather than ruminating endlessly on the distant past, we map current executive bottlenecks with exact actionable steps.',
        },
        {
          title: 'Strict Confidentiality',
          text: 'Client confidentiality and private diagnostic telemetry are safeguarded under strict privacy standards.',
        },
      ],
    },
    timeline: {
      kicker: 'TIMELINE',
      title: 'Evolution of NextSelf Methodology',
      milestones: [
        {
          year: '2014',
          title: 'Initiation of Applied Research',
          description: 'Investigation of cybernetic cognitive frameworks, behavioral patterns, and neurolinguistic structures.',
        },
        {
          year: '2018',
          title: 'Proprietary Profiling Framework',
          description: 'Development of rapid profiling protocols detecting subconscious sabotaging constructs and energy depletion points.',
        },
        {
          year: '2022',
          title: 'Digitization of Self-Help Protocols',
          description: 'Translating applied cognitive methodologies into accessible step-by-step algorithms free of esoteric jargon.',
        },
        {
          year: '2026',
          title: 'Launch of NextSelf Digital Platform',
          description: 'Integration of evidence-based cognitive science, behavioral diagnostics, and 1-on-1 mentorship into a unified platform.',
        },
      ],
    },
  },
};

export function getAboutContent(lang: SupportedLanguage = 'uk'): AboutContent {
  return ABOUT_CONTENT[lang] || ABOUT_CONTENT.uk;
}
