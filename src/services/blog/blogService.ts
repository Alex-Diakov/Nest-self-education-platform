import { BlogArticle } from '../../types/blog.ts';
import { SupportedLanguage } from '../../types/i18n.ts';
import { ARTICLES_TRANSLATIONS } from './articlesI18n.ts';

export const ARTICLES: BlogArticle[] = [
  {
    id: 'nlp-reimprinting-ai',
    slug: 'nlp-reimprinting-ai',
    title: 'Как освободить себя от травм которые мешают двигатся в перед . Техника реимпринтинг в современых ии условий использования топовые ии модели для симуляции среды терапевтической сесии . (Жесткая история от потребности )',
    excerpt: 'Пошаговый разбор протокола реимпринтинга Роберта Дилтса в комбинации с современными диалоговыми моделями для безопасной симуляции терапевтического диалога и перепрошивки ранних импринтов.',
    category: 'nlp',
    categoryLabel: 'НЛП',
    readTimeMinutes: 12,
    publishedDate: '2026-06-24',
    author: {
      name: 'NextSelf Lab',
      role: 'Исследовательская группа',
      affiliation: 'Лаборатория психотехнологий NextSelf',
      avatarInitials: 'NL'
    },
    tags: ['НЛП', 'Реимпринтинг', 'ИИ-симуляция', 'Травмы', 'Психотехнологии'],
    featured: true,
    content: [
      {
        heading: 'Анатомия раннего импринта',
        body: [
          'Импринты — это ранние слепки опыта, которые мозг зафиксировал в момент максимальной уязвимости. Когда ребенок или подросток сталкивается с ситуацией отвержения, публичного унижения или бессилия, его нервная система записывает алгоритм выживания: «не высовывайся», «контролируй всё до мелочей», «не доверяй никому».',
          'Спустя 15–20 лет человек становится взрослым предпринимателем или экспертом, но в стрессовых ситуациях руль перехватывает именно тот испуганный ребенок.'
        ],
        callout: {
          type: 'insight',
          text: 'Травма фиксируется не фактом события, а чувством одиночества и беспомощности в момент его проживания.'
        }
      },
      {
        heading: 'Техника реимпринтинга (Re-imprinting) в связке с ИИ-моделями',
        body: [
          'Классический реимпринтинг, созданный Робертом Дилтсом, требует глубокой работы с линией времени (Timeline). В современных реалиях диалоговые ИИ-модели позволяют создать безопасную контролируемую среду для калибровки и моделирования терапевтического диалога.',
          'Взрослый Я с позиции силы и опыта наблюдает за ситуацией извне, снимая эмоциональный заряд и вводя недостающие ресурсы поддержки.'
        ],
        callout: {
          type: 'methodology',
          text: 'Передача внутреннего ресурса безопасности снимает необходимость тратить до 80% энергии на гиперконтроль.'
        }
      }
    ]
  },
  {
    id: 'why-nlp-works',
    slug: 'why-nlp-works',
    title: 'Почему НЛП работает там, где ломается академическая наука',
    excerpt: 'Чтобы разобраться, почему НЛП показывает результат там, где традиционная наука буксует, важно обратиться к кибернетике и конструктивистскому взгляду на мышление.',
    category: 'anxiety',
    categoryLabel: 'Тревожные расстройства',
    readTimeMinutes: 22,
    publishedDate: '2026-04-08',
    author: {
      name: 'Александр Дьяков',
      role: 'Основатель NextSelf',
      affiliation: 'NextSelf Foundation',
      avatarInitials: 'АД'
    },
    tags: ['НЛП', 'Кибернетика', 'Тревожные расстройства', 'Александр Дьяков'],
    content: [
      {
        heading: 'Кибернетический взгляд на структуру субъективного опыта',
        body: [
          'Академическая психология часто тратит месяцы на классификацию проблемы и поиск причин в далеком детстве. Но когда человек приходит с приступом паники, ему нужен инструмент быстрого действия.',
          'Нейролингвистическое программирование задает инженерный вопрос: «Как именно устроена ваша тревога? Какова структура вашего субъективного восприятия?»'
        ],
        callout: {
          type: 'insight',
          text: 'Карта — не территория. Но изменение субъективной карты мгновенно меняет вегетативный отклик нервной системы.'
        }
      },
      {
        heading: 'Субмодальности и нейрофизиология',
        body: [
          'Любая тревожная мысль закодирована в мозге через субмодальности: размер, цветность, локализацию внутреннего голоса. Изменение этих характеристик позволяет снизить амплитуду физиологической реакции за 90 секунд.'
        ]
      }
    ]
  },
  {
    id: 'hidden-burnout-vacation',
    slug: 'hidden-burnout-vacation',
    title: 'Скрытое выгорание: почему отдых на выходных вызывает панику',
    excerpt: 'Почему в отпуске случаются панические атаки? Узнайте, как хронический стресс ломает нейробиологию отдыха и как правильно выходить из скрытого выгорания.',
    category: 'burnout',
    categoryLabel: 'Выгорание и стресс',
    readTimeMinutes: 7,
    publishedDate: '2026-02-21',
    author: {
      name: 'Александр Дьяков',
      role: 'Основатель NextSelf',
      affiliation: 'NextSelf Foundation',
      avatarInitials: 'АД'
    },
    tags: ['Выгорание', 'Стресс', 'Нейробиология', 'Александр Дьяков'],
    content: [
      {
        heading: 'Феномен адреналинового обвала (Adrenaline Crash)',
        body: [
          'Когда человек месяцами работает в режиме постоянного стресса, надпочечники непрерывно синтезируют кортизол. Организм привыкает к высокой стимуляции.',
          'Внезапная остановка на выходных воспринимается первобытным мозгом не как покой, а как потенциальная опасность: «Тишина означает, что хищник рядом».'
        ],
        callout: {
          type: 'warning',
          text: 'Резкий переход от сверхнагрузки к полному бездействию часто провоцирует соматические сбои и панические атаки.'
        }
      },
      {
        heading: 'Правильный ступенчатый протокол перезагрузки',
        body: [
          'Переход к отдыху должен быть мягким: умеренная физическая активность, контрастные водные процедуры, активация парасимпатики через удлиненный выдох.'
        ]
      }
    ]
  }
];

class BlogService {
  private applyTranslations(article: BlogArticle, lang: SupportedLanguage = 'uk'): BlogArticle {
    const override = ARTICLES_TRANSLATIONS[article.id]?.[lang] || ARTICLES_TRANSLATIONS[article.slug]?.[lang];
    if (!override) return article;
    return {
      ...article,
      ...override,
    };
  }

  getAllArticles(lang: SupportedLanguage = 'uk'): BlogArticle[] {
    return ARTICLES.map(a => this.applyTranslations(a, lang));
  }

  getFeaturedArticle(lang: SupportedLanguage = 'uk'): BlogArticle | undefined {
    return this.getAllArticles(lang)[0];
  }

  getArticleBySlug(slug: string, lang: SupportedLanguage = 'uk'): BlogArticle | undefined {
    const article = ARTICLES.find(a => a.slug === slug || a.id === slug);
    return article ? this.applyTranslations(article, lang) : undefined;
  }

  getCategories(lang: SupportedLanguage = 'uk'): { id: string; label: string; count: number }[] {
    const articles = this.getAllArticles(lang);
    const counts: Record<string, { label: string; count: number }> = {};

    articles.forEach(a => {
      if (!counts[a.category]) {
        counts[a.category] = { label: a.categoryLabel, count: 0 };
      }
      counts[a.category].count += 1;
    });

    const categoryList = Object.entries(counts).map(([id, info]) => ({
      id,
      label: info.label,
      count: info.count
    }));

    const allLabel = lang === 'uk' ? 'Всі матеріали' : lang === 'en' ? 'All Publications' : 'Все материалы';

    return [
      { id: 'all', label: allLabel, count: articles.length },
      ...categoryList
    ];
  }

  searchArticles(query: string, category: string = 'all', lang: SupportedLanguage = 'uk'): BlogArticle[] {
    const q = query.trim().toLowerCase();
    const articles = this.getAllArticles(lang);

    return articles.filter(article => {
      const matchesCategory = category === 'all' || article.category === category;
      if (!matchesCategory) return false;

      if (!q) return true;

      const matchesTitle = article.title.toLowerCase().includes(q);
      const matchesExcerpt = article.excerpt.toLowerCase().includes(q);
      const matchesTags = article.tags.some(t => t.toLowerCase().includes(q));

      return matchesTitle || matchesExcerpt || matchesTags;
    });
  }
}

export const blogService = new BlogService();
