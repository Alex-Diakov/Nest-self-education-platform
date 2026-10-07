import { SupportedLanguage } from '../../types/i18n.ts';
import { PageId } from '../../types/navigation.ts';

export interface PageSEOMetadata {
  title: string;
  description: string;
  keywords?: string;
  type?: 'website' | 'article';
}

export const SECTION_SEO: Record<PageId, Record<SupportedLanguage, PageSEOMetadata>> = {
  home: {
    uk: {
      title: 'NextSelf — Профілювання особистості | Від хаосу до твердої опори',
      description: 'NextSelf — система прикладних психотехнологій та поведінкового профайлінгу Олександра Дьякова. Діагностика стресу, зняття тривоги та внутрішня опора.',
      keywords: 'профайлінг особистості, психотехнології, зняття тривоги, вигорання, Олександр Дьяков, NextSelf',
    },
    ru: {
      title: 'NextSelf — Профилирование личности | От внутреннего хаоса к твердой опоре',
      description: 'NextSelf — платформа прикладных психотехнологий и поведенческого профайлинга Александра Дьякова. Диагностика стресса, преодоление выгорания и внутренняя опора.',
      keywords: 'профайлинг личности, психотехнологии, снятие тревоги, выгорание, Александр Дьяков, NextSelf',
    },
    en: {
      title: 'NextSelf — Applied Psychotechnology & Personality Profiling',
      description: 'NextSelf is a cognitive engineering and behavioral profiling platform by Oleksandr Diakov. Overcome burnout, dissolve anxiety, and build resilience.',
      keywords: 'personality profiling, applied psychology, cognitive refactoring, burnout recovery, Oleksandr Diakov, NextSelf',
    },
  },
  tests: {
    uk: {
      title: 'Психометричні сканери та діагностика особистості | NextSelf',
      description: 'Пройдіть онлайн-діагностику за 5–7 хвилин: фінансовий сканер, аудит стресу (PCL-5), вигорання та виявлення прихованих конфліктів.',
      keywords: 'психологічні тести онлайн, аудит стресу, тест на вигорання, фінансовий сканер, PCL-5',
    },
    ru: {
      title: 'Психометрические сканеры и диагностика личности | NextSelf',
      description: 'Пройдите онлайн-диагностику за 5–7 минут: финансовый сканер, аудит стресса (PCL-5), выгорание и скрытые конфликтные сценарии.',
      keywords: 'психологические тесты онлайн, аудит стресса, тест на выгорание, финансовый сканер, PCL-5',
    },
    en: {
      title: 'Psychometric Scanners & Behavioral Assessments | NextSelf',
      description: 'Complete 5-7 minute cognitive assessments: Financial Bottlenecks, PCL-5 Stress Audit, Burnout Index, and Subconscious Conflicts.',
      keywords: 'psychometric tests, stress audit, burnout diagnostic, cognitive profiling, PCL-5',
    },
  },
  offerings: {
    uk: {
      title: 'Вектори внутрішньої трансформації та сесії | NextSelf',
      description: 'Індивідуальні програми перескладання мислення з Олександром Дьяковим: усунення тривоги, робота з глибинними блоками, відновлення ресурсу.',
      keywords: 'консультації психолога, профайлінг, опрацювання блоків, персональний супровід',
    },
    ru: {
      title: 'Векторы внутренней трансформации и сессии | NextSelf',
      description: 'Индивидуальные программы пересборки мышления с Александром Дьяковым: устранение тревоги, работа с глубинными блоками, преодоление выгорания.',
      keywords: 'консультации психолога, профайлинг, проработка блоков, персональное наставничество',
    },
    en: {
      title: 'Mindset Transformation Vectors & Private Sessions | NextSelf',
      description: 'Private 1-on-1 cognitive coaching and psychological refactoring with Oleksandr Diakov: anxiety resolution, mindset blocks, and high performance.',
      keywords: 'psychological consulting, cognitive coaching, mindset refactoring, private mentorship',
    },
  },
  blog: {
    uk: {
      title: 'База знань: нейробіологія, психотехнології, НЛП | NextSelf',
      description: 'Дослідницькі статті Олександра Дьякова про кібернетику мислення, нейробіологію стресу, подолання прокрастинації та прикладні протоколи.',
      keywords: 'статті з психології, нейробіологія, НЛП, боротьба з прокрастинацією, когнітивістика',
    },
    ru: {
      title: 'База знаний: нейробиология, психотехнологии, НЛП | NextSelf',
      description: 'Исследовательские статьи Александра Дьякова о кибернетике мышления, нейробиологии стресса, преодолении прокрастинации и прикладных протоколах.',
      keywords: 'статьи по психологии, нейробиология, НЛП, борьба с прокрастинацией, когнитивистика',
    },
    en: {
      title: 'Knowledge Base: Neurobiology & Cognitive Protocols | NextSelf',
      description: 'Research insights by Oleksandr Diakov on cybernetic cognition, stress neurobiology, procrastination elimination, and contemporary NLP protocols.',
      keywords: 'psychology articles, neurobiology of stress, cognitive science, applied NLP protocols',
    },
  },
  services: {
    uk: {
      title: 'Інтерактивні інструменти та когнітивні тренажери | NextSelf',
      description: 'Практичні симулятори та інтерактивні алгоритми опрацювання ментальних патернів у реальному часі.',
      keywords: 'когнітивні тренажери, інтерактивні тести, симулятори мислення',
    },
    ru: {
      title: 'Интерактивные инструменты и когнитивные тренажеры | NextSelf',
      description: 'Практические симуляторы и интерактивные алгоритмы проработки ментальных паттернов в реальном времени.',
      keywords: 'когнитивные тренажеры, интерактивные тесты, симуляторы мышления',
    },
    en: {
      title: 'Interactive Tools & Cognitive Simulators | NextSelf',
      description: 'Interactive execution environments and cognitive training sandboxes to recondition psychological reflexes in real-time.',
      keywords: 'cognitive tools, mindset simulators, psychology sandboxes',
    },
  },
  about: {
    uk: {
      title: 'Олександр Дьяков — Дослідник, профайлер, засновник NextSelf',
      description: '12+ років практики, понад 12,000 годин консультацій. Автор системи прикладних психотехнологій та когнітивного профайлінгу NextSelf.',
      keywords: 'Олександр Дьяков, психолог профайлер, засновник NextSelf, біографія',
    },
    ru: {
      title: 'Александр Дьяков — Исследователь, профайлер, основатель NextSelf',
      description: '12+ лет практики, более 12,000 часов консультаций. Создатель системы прикладных психотехнологий и когнитивного профайлинга NextSelf.',
      keywords: 'Александр Дьяков, психолог профайлер, создатель NextSelf, биография',
    },
    en: {
      title: 'Oleksandr Diakov — Research Psychologist, Profiler, NextSelf Founder',
      description: '12+ years of private practice, over 12,000 hours of 1-on-1 consultations. Architect of the NextSelf cognitive refactoring system.',
      keywords: 'Oleksandr Diakov, research psychologist, behavioral profiler, NextSelf founder',
    },
  },
  dashboard: {
    uk: {
      title: 'Особистий кабінет студента | NextSelf EdTech',
      description: 'Відстежуйте оцифрований прогрес, верифіковані сертифікати та результати діагностики.',
      keywords: 'кабінет студента, сертифікати, прогрес, NextSelf',
    },
    ru: {
      title: 'Личный кабинет студента | NextSelf EdTech',
      description: 'Отслеживайте оцифрованный прогресс, верифицированные сертификаты и результаты диагностики.',
      keywords: 'кабинет студента, сертификаты, прогресс, NextSelf',
    },
    en: {
      title: 'Practitioner & Student Dashboard | NextSelf EdTech',
      description: 'Track digitized competencies, verified certificates, and diagnostic history.',
      keywords: 'student dashboard, credentials, competencies, NextSelf',
    },
  },
};
