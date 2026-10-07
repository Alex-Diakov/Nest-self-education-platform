import { EducationalOffering, ConsultationRequest } from '../../types/offering.ts';
import { SupportedLanguage } from '../../types/i18n.ts';
import { storageService } from '../storage/storageService.ts';

const OFFERINGS_UK: EducationalOffering[] = [
  {
    id: 'mindset-blocks',
    slug: 'mindset-blocks',
    title: 'Робота з мисленням та глибинними блоками',
    category: 'mentorship',
    categoryLabel: 'Когнітивне перескладання',
    shortDescription: 'Годі витрачати сили на боротьбу з наслідками. Розпізнайте обмежуючі переконання та поверніть собі право керувати своїми реакціями.',
    fullDescription: 'Інтенсивний індивідуальний курс із виявлення прихованих когнітивних викривлень, самосаботажу та вторинних вигод. Ми даємо чіткий алгоритм перепрошивки шаблонів мислення для виходу на принципово новий рівень особистої ефективності.',
    targetAudience: [
      'Підприємці, що вперлися у фінансову чи управлінську стелю',
      'Експерти та керівники, які страждають від синдрому самозванця',
      'Всі, хто втомився від постійного внутрішнього критика'
    ],
    outcomes: [
      'Усвідомлення та вимкнення 5+ ключових блоків самосаботажу',
      'Вміння швидко гасити самокритику та повертатися у фокус',
      'Твердий внутрішній спокій при ухваленні ризикованих рішень'
    ],
    format: 'Індивідуальні сесії + домашні протоколи',
    duration: '4 тижні (12 годин практики)',
    mentorsCount: 1,
    plans: [
      {
        id: 'mb-standard',
        name: 'Базовий трек',
        price: '18 000 ₴',
        period: 'за 4 тижні',
        description: 'Діагностика, 4 сесії та практичні завдання для самостійного відпрацювання.',
        features: ['4 персональні сесії по 60 хв', 'Індивідуальна карта когнітивних викривлень', 'Підтримка в Telegram']
      },
      {
        id: 'mb-vip',
        name: 'VIP Супровід',
        price: '36 000 ₴',
        period: 'за 4 тижні',
        description: 'Повний супровід із персональним наставництвом Олександра Дьякова.',
        features: ['8 сесій по 75 хв', 'Щоденний зворотний зв’язок', 'Аудит бізнес-переговорів'],
        popular: true
      }
    ]
  },
  {
    id: 'fears-phobias',
    slug: 'fears-phobias',
    title: 'Страхи та фобії — крок назустріч своїй свободі',
    category: 'mentorship',
    categoryLabel: 'Подолання бар’єрів',
    shortDescription: 'Страхи та фобії заважають діяти й масштабуватися? Опрацюйте глибинні рефлекси та реакції нервової системи.',
    fullDescription: 'Інженерна переробка фобічних контурів нервової системи. Використовуємо доказові протоколи експозиції, субмодального перекодування та реімпринтингу.',
    targetAudience: [
      'Люди, які відчувають страх публічних виступів або переговорів',
      'Ті, хто страждає на фобії перельотів або замкнутих просторів',
      'Амбітні спеціалісти, заблоковані страхом засудження'
    ],
    outcomes: [
      'Повне згасання гострої фобічної реакції на ключовий тригер',
      'Повернення свободи пересування та сміливих соціальних дій',
      'Навичка миттєвої саморегуляції при перших ознаках тривоги'
    ],
    format: 'Онлайн-сесії з десенсибілізацією',
    duration: '3 тижні (9 годин)',
    mentorsCount: 1,
    plans: [
      {
        id: 'fp-standard',
        name: 'Інтенсивний трек',
        price: '14 000 ₴',
        period: 'за програму',
        description: 'Швидке позбавлення від ізольованої фобії за протоколом VKD.',
        features: ['3 сесії по 90 хв', 'Аудіопротоколи саморегуляції', 'Тестування у реальності']
      }
    ]
  },
  {
    id: 'ocd-breakout',
    slug: 'ocd-breakout',
    title: 'ОКР — вихід із замкненого кола нав’язливих думок',
    category: 'mentorship',
    categoryLabel: 'Усвідомленість та гнучкість',
    shortDescription: 'Нав’язливі думки та ритуали крадуть час і сили? Розвивайте гнучкість мислення та послабте хватку тривожних патернів.',
    fullDescription: 'Практична програма виходу із замкненого циклу «Нав’язлива думка → Тривога → Ритуал → Тимчасове полегшення».',
    targetAudience: [
      'Ті, хто втомився нескінченно перевіряти двері, пошту та звіти',
      'Люди з нав’язливими думками про контроль та чистоту',
      'Керівники з патологічним мікроменеджментом через тривогу'
    ],
    outcomes: [
      'Зниження частоти нав’язливих думок на 70%+',
      'Відмова від виснажливих ритуалів і економія 2–4 годин на день',
      'Здобуття психологічної гнучкості та свободи дій'
    ],
    format: 'Протокол ERP + когнітивна терапія',
    duration: '4 тижні',
    mentorsCount: 1,
    plans: [
      {
        id: 'ocd-full',
        name: 'Комплексний протокол',
        price: '19 000 ₴',
        period: 'за 4 тижні',
        description: 'Покроковий курс експозиції із запобіганням реакціям.',
        features: ['6 сесій по 60 хв', 'Щоденник експозицій', 'План запобігання зривам']
      }
    ]
  },
  {
    id: 'anxiety-management',
    slug: 'anxiety-management',
    title: 'Управління тривогою — здобуття внутрішньої опори',
    category: 'advisory',
    categoryLabel: 'Ресурс та спокій',
    shortDescription: 'Хронічне занепокоєння виснажує? Опануйте практичні інструменти мислення для виходу зі стану тривоги.',
    fullDescription: 'Системний протокол перемикання вегетативної нервової системи з режиму постійного виснаження у режим відновлення.',
    targetAudience: [
      'Спеціалісти з високим рівнем фонового стресу та вигорання',
      'Ті, хто страждає на безсоння через потік думок перед сном',
      'Підприємці у фазі кризи або невизначеності'
    ],
    outcomes: [
      'Нормалізація сну та легке засинання',
      'Зниження фонової тривожності на 80%',
      'Відновлення енергії для роботи та життя'
    ],
    format: 'Нейрокоучинг + тілесні практики',
    duration: '4 тижні',
    mentorsCount: 1,
    plans: [
      {
        id: 'am-group',
        name: 'Базовий трек',
        price: '15 000 ₴',
        period: 'за програму',
        description: 'Опанування інструментів саморегуляції та відновлення сну.',
        features: ['4 індивідуальні сесії', 'Протокол сну 4-7-8', 'Аудит стресових факторів']
      }
    ]
  },
  {
    id: 'dyakov-strategic-session',
    slug: 'dyakov-strategic-session',
    title: 'Персональна діагностична сесія з Олександром Дьяковим',
    category: 'certification',
    categoryLabel: 'Індивідуальна робота 1 на 1',
    shortDescription: 'Глибокий аудит точки «А», виявлення кореневої причини пробуксовки та персональний покроковий план змін.',
    fullDescription: 'Індивідуальна 90-хвилинна сесія із засновником NextSelf Олександром Дьяковим. Розбір саме вашої ситуації без загальних порад — тільки точна психологічна оптика і перевірені алгоритми.',
    targetAudience: [
      'Фаундери та керівники в точці переходу або кризи',
      'Люди, які хочуть отримати чесну незалежну оцінку своїх патернів',
      'Ті, кому потрібен чіткий індивідуальний план трансформації'
    ],
    outcomes: [
      'Оцифрована карта ваших уразливостей та точок витоку ресурсу',
      'Зняття гострого психологічного напруження щодо складної дилеми',
      'Покрокова дорожня карта дій на 60 днів'
    ],
    format: 'Інтенсивна відеосесія 90 хв + аудіозапис',
    duration: '1 сесія (90 хвилин)',
    mentorsCount: 1,
    plans: [
      {
        id: 'ds-single',
        name: 'Діагностична сесія',
        price: '6 000 ₴',
        period: 'за сесію',
        description: 'Повний 90-хвилинний аудит вашого запиту та стратегічний розбір.',
        features: ['90 хв індивідуальної сесії', 'Письмова карта рекомендацій', 'Підтримка 7 днів після зустрічі'],
        popular: true
      }
    ]
  }
];

const OFFERINGS_EN: EducationalOffering[] = [
  {
    id: 'mindset-blocks',
    slug: 'mindset-blocks',
    title: 'Cognitive Refactoring & Subconscious Blocks',
    category: 'mentorship',
    categoryLabel: 'Cognitive Engineering',
    shortDescription: 'Stop fighting symptoms. Identify limiting cognitive constructs and regain authoritative control over your emotional reflexes.',
    fullDescription: 'An intensive 1-on-1 private protocol targeting subconscious cognitive biases, self-sabotaging routines, and secondary gains.',
    targetAudience: [
      'Founders and executives hitting income or scale plateaus',
      'High performers grappling with imposter syndrome',
      'Anyone exhausted by persistent inner self-criticism'
    ],
    outcomes: [
      'Deconstruction of 5+ primary sabotaging neural patterns',
      'Rapid inner-critic neutralisation and razor focus recovery',
      'Unshakable calm when executing high-risk business decisions'
    ],
    format: 'Private 1-on-1 sessions + daily homework protocols',
    duration: '4 weeks (12 hours of practice)',
    mentorsCount: 1,
    plans: [
      {
        id: 'mb-standard',
        name: 'Standard Track',
        price: '$450',
        period: 'for 4 weeks',
        description: 'Diagnostic assessment, 4 sessions, and actionable homework protocols.',
        features: ['4 private sessions (60 min each)', 'Personalized cognitive bias map', 'Messenger support']
      },
      {
        id: 'mb-vip',
        name: 'VIP Executive Track',
        price: '$900',
        period: 'for 4 weeks',
        description: 'Full immersion with direct mentorship from Oleksandr Diakov.',
        features: ['8 deep sessions (75 min each)', 'Daily tactical feedback', 'Negotiation strategy audit'],
        popular: true
      }
    ]
  },
  {
    id: 'fears-phobias',
    slug: 'fears-phobias',
    title: 'Fears & Phobias Protocol — Step Into Unbounded Freedom',
    category: 'mentorship',
    categoryLabel: 'Barrier Dissolution',
    shortDescription: 'Do subconscious fears impede your decisive action? Recondition deep nervous system reflexes and move forward fearlessly.',
    fullDescription: 'Engineering extinction of phobic neurological circuits utilizing evidence-based systematic desensitization and submodality recoding.',
    targetAudience: [
      'Leaders experiencing stage fright or negotiation anxiety',
      'Individuals dealing with situational fears (flights, confinement)',
      'Specialists held back by fear of judgment'
    ],
    outcomes: [
      'Complete extinction of acute phobic response to key triggers',
      'Restoration of behavioral autonomy and bold social initiative',
      'Mastery of instant physiological regulation techniques'
    ],
    format: 'Online sessions with calibrated exposure',
    duration: '3 weeks (9 hours)',
    mentorsCount: 1,
    plans: [
      {
        id: 'fp-standard',
        name: 'Intensive Track',
        price: '$350',
        period: 'per program',
        description: 'Rapid isolated fear resolution using calibrated protocols.',
        features: ['3 sessions (90 min each)', 'Audio regulation tracks', 'Real-world field validation']
      }
    ]
  },
  {
    id: 'ocd-breakout',
    slug: 'ocd-breakout',
    title: 'OCD & Intrusive Thought Disruption Protocol',
    category: 'mentorship',
    categoryLabel: 'Psychological Flexibility',
    shortDescription: 'Do obsessive loops deplete your daily bandwidth? Expand mental flexibility and break free from exhausting thought spirals.',
    fullDescription: 'A systematic intervention disrupting the cycle of Intrusive Thought → Spike Anxiety → Compulsive Ritual → Fleeting Relief.',
    targetAudience: [
      'Those exhausted by constant checking routines and micro-rituals',
      'Individuals burdened by intrusive worry loops',
      'Leaders exhibiting obsessive micromanagement born of anxiety'
    ],
    outcomes: [
      '70%+ reduction in intrusive thought frequency and intensity',
      'Elimination of compulsive habits, saving 2-4 hours daily',
      'Substantial boost in psychological resilience'
    ],
    format: 'ERP Protocol + Cognitive Behavioral Restructuring',
    duration: '4 weeks',
    mentorsCount: 1,
    plans: [
      {
        id: 'ocd-full',
        name: 'Comprehensive Protocol',
        price: '$480',
        period: 'for 4 weeks',
        description: 'Structured exposure with response prevention pathway.',
        features: ['6 sessions (60 min each)', 'Exposure tracking workbook', 'Relapse prevention toolkit']
      }
    ]
  },
  {
    id: 'anxiety-management',
    slug: 'anxiety-management',
    title: 'Anxiety Mastery — Reclaim Neuro-Somatic Balance',
    category: 'advisory',
    categoryLabel: 'Energy & Rest',
    shortDescription: 'Chronic stress depleting your energy reserves? Acquire applied cognitive tools to reset anxiety and activate deep restorative recovery.',
    fullDescription: 'A clinical protocol transitioning your autonomic nervous system from chronic sympathetic fight-or-flight into parasympathetic restoration.',
    targetAudience: [
      'Professionals facing chronic burnout and executive exhaustion',
      'Individuals suffering insomnia caused by racing thoughts',
      'Entrepreneurs navigating uncertainty and high-stakes crises'
    ],
    outcomes: [
      'Sleep cycle normalization and effortless sleep onset',
      '80% reduction in background somatic tension',
      'Renewed physical and cognitive vitality'
    ],
    format: 'Neuro-coaching + somatic regulation',
    duration: '4 weeks',
    mentorsCount: 1,
    plans: [
      {
        id: 'am-group',
        name: 'Foundation Track',
        price: '$380',
        period: 'per program',
        description: 'Master self-regulation tools and restore sleep architecture.',
        features: ['4 private sessions', '4-7-8 Somatic protocol', 'Cortisol triggers audit']
      }
    ]
  },
  {
    id: 'dyakov-strategic-session',
    slug: 'dyakov-strategic-session',
    title: 'Private Strategic Diagnostic with Oleksandr Diakov',
    category: 'certification',
    categoryLabel: '1-on-1 Advisory',
    shortDescription: 'Invest 90 minutes in absolute clarity. Deep diagnosis of current bottlenecks, root-cause identification, and a 60-day roadmap.',
    fullDescription: 'A confidential 90-minute strategic consultation with NextSelf founder Oleksandr Diakov. Direct behavioral profiling without fluff.',
    targetAudience: [
      'Founders and executives at pivot points or leadership crossroads',
      'Leaders requiring an unvarnished audit of cognitive blind spots',
      'Those demanding an exact blueprint for mindset transformation'
    ],
    outcomes: [
      'Digitized map of hidden vulnerabilities and energy drain points',
      'Immediate de-escalation of acute decision-making paralysis',
      'Actionable step-by-step implementation plan for 60 days'
    ],
    format: 'Intensive 90-minute video session + full audio summary',
    duration: '1 session (90 minutes)',
    mentorsCount: 1,
    plans: [
      {
        id: 'ds-single',
        name: 'Strategic Consultation',
        price: '$150',
        period: 'per session',
        description: 'Comprehensive 90-minute analysis of your challenge.',
        features: ['90 min private consultation', 'Written strategy blueprint', '7 days of post-session text support'],
        popular: true
      }
    ]
  }
];

const OFFERINGS_RU: EducationalOffering[] = [
  {
    id: 'mindset-blocks',
    slug: 'mindset-blocks',
    title: 'Работа с мышлением и глубинными блоками',
    category: 'mentorship',
    categoryLabel: 'Когнитивная пересборка',
    shortDescription: 'Хватит тратить энергию на борьбу с последствиями. Распознайте ограничивающие убеждения и верните себе право решать, как реагировать на этот мир.',
    fullDescription: 'Интенсивный персонализированный курс по выявлению скрытых когнитивных искажений, самосаботажа и вторичных выгод. Мы даем ясный алгоритм перепрошивки мыслительных шаблонов для выхода на принципиально новый уровень личной эффективности.',
    targetAudience: [
      'Предприниматели, упершиеся в финансовый или управленческий потолок',
      'Эксперты и руководители, страдающие от синдрома самозванца',
      'Все, кто устал от постоянного внутреннего критика'
    ],
    outcomes: [
      'Осознание и отключение 5+ ключевых блоков самосаботажа',
      'Умение быстро гасить самокритику и возвращаться в фокус',
      'Твердое внутреннее спокойствие при принятии рискованных решений'
    ],
    format: 'Индивидуальные сессии + домашние протоколы',
    duration: '4 недели (12 часов практики)',
    mentorsCount: 1,
    plans: [
      {
        id: 'mb-standard',
        name: 'Базовый трек',
        price: '$450',
        period: 'за 4 недели',
        description: 'Диагностика, 4 сессии и практические задания для самостоятельной отработки.',
        features: ['4 персональные сессии по 60 мин', 'Индивидуальная карта когнитивных искажений', 'Поддержка в чате']
      },
      {
        id: 'mb-vip',
        name: 'VIP Сопровождение',
        price: '$900',
        period: 'за 4 недели',
        description: 'Полное сопровождение с личным наставничеством Александра Дьякова.',
        features: ['8 сессий по 75 мин', 'Ежедневная обратная связь', 'Аудит бизнес-переговоров'],
        popular: true
      }
    ]
  },
  {
    id: 'fears-phobias',
    slug: 'fears-phobias',
    title: 'Страхи и фобии — шагните навстречу своей свободе',
    category: 'mentorship',
    categoryLabel: 'Преодоление барьеров',
    shortDescription: 'Страхи и фобии мешают Вам действовать и реализовывать желаемое? Проработайте глубинные убеждения и реакции, чтобы смело двигаться к целям.',
    fullDescription: 'Инженерная переработка фобических контуров нервной системы. Используем доказанные протоколы экспозиции, субмодального перекодирования и реимпринтинга.',
    targetAudience: [
      'Люди, испытывающие страх публичных выступлений или переговоров',
      'Те, кто страдает фобиями полетов, транспорта или замкнутых пространств',
      'Амбициозные специалисты, заблокированные страхом осуждения'
    ],
    outcomes: [
      'Полное угасание острой фобической реакции на ключевой триггер',
      'Возвращение свободы передвижения и смелых социальных действий',
      'Навык мгновенной саморегуляции при первых признаках тревоги'
    ],
    format: 'Онлайн-сессии с десенсибилизацией',
    duration: '3 недели (9 часов)',
    mentorsCount: 1,
    plans: [
      {
        id: 'fp-standard',
        name: 'Интенсивный трек',
        price: '$350',
        period: 'за программу',
        description: 'Быстрое избавление от изолированной фобии по протоколу VKD.',
        features: ['3 сессии по 90 мин', 'Аудиопротоколы саморегуляции', 'Тестирование в реальности']
      }
    ]
  },
  {
    id: 'ocd-breakout',
    slug: 'ocd-breakout',
    title: 'ОКР — выйдите из круга навязчивых мыслей',
    category: 'mentorship',
    categoryLabel: 'Осознанность и гибкость',
    shortDescription: 'Навязчивые мысли и ритуалы контролируют Вашу жизнь? Сфокусируйтесь на развитии гибкости мышления и осознанности, чтобы ослабить хватку ОКР.',
    fullDescription: 'Практическая программа выхода из замкнутого цикла «Навязчивая мысль → Тревога → Ритуал → Временное облегчение».',
    targetAudience: [
      'Те, кто устал бесконечно перепроверять двери, почту, отчеты и сообщения',
      'Люди с навязчивыми мыслями о здоровье, чистоте или контроле',
      'Руководители, страдающие патологическим микроменеджментом из-за тревоги'
    ],
    outcomes: [
      'Снижение частоты и интенсивности навязчивых мыслей на 70%+',
      'Отказ от изнуряющих ритуалов и экономия 2–4 часов времени в день',
      'Обретение психологической гибкости и свободы выбора'
    ],
    format: 'Протокол ERP + когнитивная терапия',
    duration: '4 недели',
    mentorsCount: 1,
    plans: [
      {
        id: 'ocd-full',
        name: 'Комплексный протокол',
        price: '$480',
        period: 'за 4 недели',
        description: 'Пошаговый курс экспозиции с предотвращением реакций.',
        features: ['6 сессий по 60 мин', 'Дневник экспозиций', 'План предотвращения срывов']
      }
    ]
  },
  {
    id: 'anxiety-management',
    slug: 'anxiety-management',
    title: 'Управление тревогой — обретите внутреннюю силу',
    category: 'advisory',
    categoryLabel: 'Ресурс и спокойствие',
    shortDescription: 'Хроническое беспокойство истощает? Освойте практические инструменты мастерства мышления для выхода из состояния тревоги и раскрытия ресурса.',
    fullDescription: 'Системный протокол переключения вегетативной нервной системы из режима постоянного истощения в режим восстановления и созидания.',
    targetAudience: [
      'Специалисты с высоким уровнем фонового стресса и выгорания',
      'Те, кто страдает бессонницей из-за потока тревожных мыслей перед сном',
      'Предприниматели в фазе кризиса или неопределенности'
    ],
    outcomes: [
      'Нормализация сна и легкое засыпание без снотворных',
      'Снижение фоновой тревожности на 80%',
      'Восстановление энергии для работы и личной жизни'
    ],
    format: 'Нейрокоучинг + телесные практики',
    duration: '4 недели',
    mentorsCount: 1,
    plans: [
      {
        id: 'am-group',
        name: 'Базовый трек',
        price: '$380',
        period: 'за программу',
        description: 'Освоение инструментов саморегуляции и восстановление сна.',
        features: ['4 индивидуальные сессии', 'Протокол сна 4-7-8', 'Аудит уровня кортизола']
      }
    ]
  },
  {
    id: 'dyakov-strategic-session',
    slug: 'dyakov-strategic-session',
    title: 'Персональная стратегическая сессия с Александром Дьяковым',
    category: 'certification',
    categoryLabel: 'Индивидуальная работа 1 на 1',
    shortDescription: 'Инвестируйте 90 минут в свое будущее. Глубокий аудит точки «А», выявление корневой причины застревания и персональный пошаговый план изменений.',
    fullDescription: 'Индивидуальная 90-минутная сессия с основателем NextSelf Александром Дьяковым. Разбор именно вашей ситуации без общих советов — только точечная психологическая оптика и проверенные психотехнологии.',
    targetAudience: [
      'Предприниматели и руководители в точке перехода или кризиса',
      'Те, кто хочет получить честный независимый взгляд на свои скрытые паттерны',
      'Люди, которым нужен четкий пошаговый план трансформации'
    ],
    outcomes: [
      'Оцифрованная карта ваших уязвимостей и точек утечки ресурса',
      'Снятие острого психологического напряжения по ключевой дилемме',
      'Пошаговая дорожная карта действий на 60 дней'
    ],
    format: 'Интенсивная видеосессия 90 мин + аудиозапись выводов',
    duration: '1 сессия (90 минут)',
    mentorsCount: 1,
    plans: [
      {
        id: 'ds-single',
        name: 'Диагностическая сессия',
        price: '$150',
        period: 'за сессию',
        description: 'Полный 90-минутный аудит вашего запроса и стратегический разбор.',
        features: ['90 мин индивидуальной сессии', 'Письменная карта рекомендаций', 'Поддержка 7 дней после встречи'],
        popular: true
      }
    ]
  }
];

class OfferingsService {
  private getOfferingList(lang: SupportedLanguage = 'uk'): EducationalOffering[] {
    switch (lang) {
      case 'uk':
        return OFFERINGS_UK;
      case 'en':
        return OFFERINGS_EN;
      case 'ru':
      default:
        return OFFERINGS_RU;
    }
  }

  getAllOfferings(lang: SupportedLanguage = 'uk'): EducationalOffering[] {
    return this.getOfferingList(lang);
  }

  getOfferingBySlug(slug: string, lang: SupportedLanguage = 'uk'): EducationalOffering | undefined {
    const list = this.getOfferingList(lang);
    return list.find(o => o.slug === slug) || OFFERINGS_UK.find(o => o.slug === slug);
  }

  getOfferingsByCategory(category: string, lang: SupportedLanguage = 'uk'): EducationalOffering[] {
    const list = this.getOfferingList(lang);
    if (!category || category === 'all') return list;
    return list.filter(o => o.category === category);
  }

  submitConsultationRequest(request: Omit<ConsultationRequest, 'id' | 'submittedAt' | 'status'>): ConsultationRequest {
    const fullRequest: ConsultationRequest = {
      ...request,
      id: `req_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      submittedAt: new Date().toISOString(),
      status: 'received',
    };

    const existing = storageService.getItem<ConsultationRequest[]>('consultation_requests_v1', []);
    storageService.setItem('consultation_requests_v1', [fullRequest, ...existing]);

    return fullRequest;
  }

  getStoredRequests(): ConsultationRequest[] {
    return storageService.getItem<ConsultationRequest[]>('consultation_requests_v1', []);
  }
}

export const offeringsService = new OfferingsService();
export const OFFERINGS = OFFERINGS_UK;
