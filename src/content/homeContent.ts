import { SupportedLanguage } from '../types/i18n.ts';

export interface HomeFaqItem {
  q: string;
  a: string;
}

export interface HomePillar {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
}

export interface HomeTelemetryCard {
  tag: string;
  title: string;
  triggerLabel: string;
  triggerDesc: string;
  type: 'load' | 'relations' | 'growth' | 'potential';
}

export interface HomeContent {
  hero: {
    kicker: string;
    title: string;
    titleAccent: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    socialProofText: string;
    telemetryCards: HomeTelemetryCard[];
    stats: {
      number: string;
      label: string;
    }[];
  };
  pillarsSection: {
    kicker: string;
    title: string;
    subtitle: string;
    items: HomePillar[];
  };
  scannersSection: {
    kicker: string;
    title: string;
    subtitle: string;
    viewAllCta: string;
  };
  offeringsSection: {
    kicker: string;
    title: string;
    subtitle: string;
    viewAllCta: string;
  };
  blogSection: {
    kicker: string;
    title: string;
    subtitle: string;
    viewAllCta: string;
  };
  faqSection: {
    kicker: string;
    title: string;
    subtitle: string;
    items: HomeFaqItem[];
  };
  finalCta: {
    title: string;
    subtitle: string;
    primaryBtn: string;
    secondaryBtn: string;
  };
}

export const HOME_CONTENT: Record<SupportedLanguage, HomeContent> = {
  uk: {
    hero: {
      kicker: 'Екосистема прикладних психотехнологій та профайлінгу',
      title: 'Від внутрішнього хаосу',
      titleAccent: 'до твердої опори',
      subtitle: 'Системний підхід Олександра Дьякова до перескладання мислення. Доказова діагностика стресу, когнітивні сканери, подолання самосаботажу та персональне менторство для амбітних лідерів.',
      primaryCta: 'Пройти безкоштовну діагностику',
      secondaryCta: 'Дослідити програми',
      socialProofText: 'Вже зробили крок до себе 10,450+ людей',
      telemetryCards: [
        {
          tag: 'НАВАНТАЖЕННЯ',
          title: 'Витік енергії',
          triggerLabel: 'ПРИЧИНА: Гіперконтроль',
          triggerDesc: 'Необхідне скидання вегетативної напруги',
          type: 'load',
        },
        {
          tag: 'ВЗАЄМИНИ',
          title: 'Прихований тригер',
          triggerLabel: 'СЦЕНАРІЙ: Страх вразливості',
          triggerDesc: 'Реакція: Захист та відсторонення',
          type: 'relations',
        },
        {
          tag: 'РОЗВИТОК',
          title: 'Внутрішній блок',
          triggerLabel: 'БАР’ЄР: Страх помилки',
          triggerDesc: 'Вектор: Тверда опора на себе',
          type: 'growth',
        },
        {
          tag: 'ПОТЕНЦІАЛ',
          title: 'Прихований ресурс',
          triggerLabel: 'ВАША СИЛА',
          triggerDesc: 'Системне бачення процесів і глибина',
          type: 'potential',
        },
      ],
      stats: [
        { number: '10,450+', label: 'Оцифрованих профайлів' },
        { number: '12,000+', label: 'Годин практики' },
        { number: '12+', label: 'Років досліджень' },
        { number: '94%', label: 'Стійкість результатів' },
      ],
    },
    pillarsSection: {
      kicker: 'МЕТОДОЛОГІЯ ОЛЕКСАНДРА ДЬЯКОВА',
      title: 'Чотири контури психологічної стійкості',
      subtitle: 'Ми не витрачаємо місяці на безцільні розмови. Наш підхід розглядає психіку як інженерну кібернетичну систему управління зворотним зв’язком.',
      items: [
        {
          id: 'cognitive-deconstruction',
          number: '01',
          title: 'Когнітивна деконструкція',
          tagline: 'Аудит ментальних багів',
          description: 'Виявлення автоматичних викривлень, прихованих сценаріїв самосаботажу та паралізуючих установок.',
        },
        {
          id: 'stress-neurobiology',
          number: '02',
          title: 'Нейробіологія стресу',
          tagline: 'Керування вегетатикою',
          description: 'Швидка зупинка адреналінових обвалів, регуляція вагусного тонусу та відновлення фізіологічного спокою за 90 секунд.',
        },
        {
          id: 'submodality-recoding',
          number: '03',
          title: 'Субмодальне перекодування',
          tagline: 'Інженерія сприйняття',
          description: 'Зміна сенсорних параметрів внутрішнього досвіду (масштабу, дистанції, звуку) для ліквідації фонічного страху.',
        },
        {
          id: 'solid-core',
          number: '04',
          title: 'Тверда внутрішня опора',
          tagline: 'Автономія та масштаб',
          description: 'Стійка самооцінка, яка не залежить від схвалення оточення, оцінок ринку чи тимчасових криз.',
        },
      ],
    },
    scannersSection: {
      kicker: 'ВЕРИФІКОВАНА ДІАГНОСТИКА',
      title: 'Оцифруйте свій когнітивний профіль',
      subtitle: 'Точні психометричні сканери для виявлення прихованих точок витоку енергії, маркерів вигорання та синдрому самозванця.',
      viewAllCta: 'Усі сканери та тести',
    },
    offeringsSection: {
      kicker: 'ПРИКЛАДНІ ПРОГРАМИ ТА СЕСІЇ',
      title: 'Персональний супровід та менторство',
      subtitle: 'Індивідуальна робота з Олександром Дьяковим для усунення глибинних блоків та масштабування рішень.',
      viewAllCta: 'Усі напрями та тарифи',
    },
    blogSection: {
      kicker: 'БАЗА ЗНАНЬ ТА ДОСЛІДЖЕННЯ',
      title: 'Академічний журнал психотехнологій',
      subtitle: 'Інженерні лонгріди про роботу нервової системи, реімпринтинг, кібернетику мислення та захист від вигорання.',
      viewAllCta: 'Читати всі публікації',
    },
    faqSection: {
      kicker: 'ПОШИРЕНІ ЗАПИТАННЯ',
      title: 'Все, що потрібно знати про NextSelf',
      subtitle: 'Відповіді на ключові питання щодо методології, конфіденційності та очікуваних результатів.',
      items: [
        {
          q: 'Що таке NextSelf?',
          a: 'NextSelf — це система прикладних психотехнологій та поведінкового профайлінгу Олександра Дьякова. Ми об’єднали доказові методики (КПТ, нейролінгвістику, кібернетику мислення), щоб дати вам пульт керування своїм внутрішнім станом. Ми не застрягаємо роками у минулому — наш фокус на здорових, амбітних людях, яким потрібні точні інструменти для усунення тривоги, подолання внутрішніх блоків та побудови міцної опори для масштабування в бізнесі та житті.',
        },
        {
          q: 'Кому підходить платформа?',
          a: 'Підприємцям, керівникам, аналітикам та всім, хто звик діяти, але відчуває, що вперся в невидиму стелю або виснажений фоновим стресом. Це система для тих, хто шукає логічні, інженерні алгоритми перескладання себе замість езотеричних обіцянок.',
        },
        {
          q: 'З чого розпочати роботу?',
          a: 'Перший крок — оцифрувати точку «А». Пройдіть один із наших когнітивних сканерів (тестів), щоб побачити приховані сліпі зони та сценарії самосаботажу. Після діагностики система підсвітить точки витоку ресурсу та запропонує конкретні алгоритми для їх усунення.',
        },
        {
          q: 'Наскільки це безпечно та конфіденційно?',
          a: 'Повна приватність — це непорушний стандарт. Всі дані вашого профілювання та результати тестувань захищені та не передаються третім особам. Процес вашої внутрішньої трансформації залишається суворо конфіденційним.',
        },
        {
          q: 'Як швидко помітні перші результати?',
          a: 'Первинну ясність і розуміння своїх когнітивних багів ви отримуєте одразу після проходження діагностики. Стійка перебудова нейронних зв’язків та звичок — це системна інженерна робота. Платформа дає 100% робочих перевірених інструментів, а швидкість змін залежить від вашої готовності застосовувати їх у реальних стресових ситуаціях.',
        },
      ],
    },
    finalCta: {
      title: 'Готові вийти з когнітивного тупика на новий рівень?',
      subtitle: 'Пройдіть експрес-діагностику або запишіться на стратегічну консультацію з Олександром Дьяковим.',
      primaryBtn: 'Записатися на стратегічну сесію',
      secondaryBtn: 'Пройти тест безкоштовно',
    },
  },

  ru: {
    hero: {
      kicker: 'Экосистема прикладных психотехнологий и профайлинга',
      title: 'От внутреннего хаоса',
      titleAccent: 'к твердой опоре',
      subtitle: 'Системный подход Александра Дьякова к когнитивной пересборке. Доказательная диагностика стресса, сканеры уязвимостей, преодоление самосаботажа и личное менторство для лидеров.',
      primaryCta: 'Пройти бесплатную диагностику',
      secondaryCta: 'Изучить программы',
      socialProofText: 'Уже сделали шаг к себе 10,450+ человек',
      telemetryCards: [
        {
          tag: 'НАГРУЗКА',
          title: 'Утечка энергии',
          triggerLabel: 'ПРИЧИНА: Гиперконтроль',
          triggerDesc: 'Необходим сброс вегетативного напряжения',
          type: 'load',
        },
        {
          tag: 'ОТНОШЕНИЯ',
          title: 'Скрытый триггер',
          triggerLabel: 'СЦЕНАРИЙ: Страх уязвимости',
          triggerDesc: 'Реакция: Защита и отстранение',
          type: 'relations',
        },
        {
          tag: 'РАЗВИТИЕ',
          title: 'Внутренний блок',
          triggerLabel: 'БАРЬЕР: Страх ошибки',
          triggerDesc: 'Вектор: Твердая опора на себя',
          type: 'growth',
        },
        {
          tag: 'ПОТЕНЦИАЛ',
          title: 'Скрытый ресурс',
          triggerLabel: 'ВАША СИЛА',
          triggerDesc: 'Системное видение процессов и глубина',
          type: 'potential',
        },
      ],
      stats: [
        { number: '10,450+', label: 'Оцифрованных профилей' },
        { number: '12,000+', label: 'Часов практики' },
        { number: '12+', label: 'Лет исследований' },
        { number: '94%', label: 'Стойкость результатов' },
      ],
    },
    pillarsSection: {
      kicker: 'МЕТОДОЛОГИЯ АЛЕКСАНДРА ДЬЯКОВА',
      title: 'Четыре контура психологической устойчивости',
      subtitle: 'Мы не тратим месяцы на абстрактные беседы. Наш подход рассматривает психику как кибернетическую систему управления обратной связью.',
      items: [
        {
          id: 'cognitive-deconstruction',
          number: '01',
          title: 'Когнитивная деконструкция',
          tagline: 'Аудит ментальных багов',
          description: 'Выявление автоматических искажений, скрытых сценариев самосаботажа и парализующих установок.',
        },
        {
          id: 'stress-neurobiology',
          number: '02',
          title: 'Нейробиология стресса',
          tagline: 'Управление вегетатикой',
          description: 'Купирование адреналиновых обвалов, регуляция вагусного тонуса и возвращение покоя за 90 секунд.',
        },
        {
          id: 'submodality-recoding',
          number: '03',
          title: 'Субмодальное перекодирование',
          tagline: 'Инженерия восприятия',
          description: 'Изменение сенсорных параметров внутреннего опыта (масштаба, расстояния, звука) для снятия страха.',
        },
        {
          id: 'solid-core',
          number: '04',
          title: 'Твердая внутренняя опора',
          tagline: 'Автономия и масштаб',
          description: 'Устойчивая самооценка, не зависящая от мнения окружающих, внешних оценок или временных кризисов.',
        },
      ],
    },
    scannersSection: {
      kicker: 'ВЕРИФИЦИРОВАННАЯ ДИАГНОСТИКА',
      title: 'Оцифруйте свой когнитивный профиль',
      subtitle: 'Точные психометрические сканеры для выявления точек утечки ресурса, маркеров выгорания и синдрома самозванца.',
      viewAllCta: 'Все сканеры и тесты',
    },
    offeringsSection: {
      kicker: 'ПРИКЛАДНЫЕ ПРОГРАММЫ И СЕССИИ',
      title: 'Персональное сопровождение и наставничество',
      subtitle: 'Индивидуальная работа с Александром Дьяковым для снятия ключевых блоков и масштабного роста.',
      viewAllCta: 'Все программы и тарифы',
    },
    blogSection: {
      kicker: 'БАЗА ЗНАНИЙ И ИССЛЕДОВАНИЯ',
      title: 'Академический журнал психотехнологий',
      subtitle: 'Инженерные лонгриды о работе нервной системы, реимпринтинге, кибернетике мышления и защите от выгорания.',
      viewAllCta: 'Читать все публикации',
    },
    faqSection: {
      kicker: 'ЧАСТЫЕ ВОПРОСЫ',
      title: 'Всё, что важно знать о NextSelf',
      subtitle: 'Ответы на ключевые вопросы о методологии, конфиденциальности и первых результатах.',
      items: [
        {
          q: 'Что такое NextSelf?',
          a: 'NextSelf — это платформа прикладных психотехнологий. Мы объединили глубокий поведенческий профайлинг и доказательные методики (КПТ, нейролингвистику), чтобы дать вам пульт управления своим состоянием. Мы не копаемся годами в прошлом и не лечим клинические расстройства. Наш фокус — здоровые, амбициозные люди, которым нужны точные инструменты, чтобы убрать тревогу, преодолеть внутренние барьеры и выстроить прочную опору для масштаба в бизнесе и жизни.',
        },
        {
          q: 'Кому подходит платформа?',
          a: 'Тем, кто привык действовать, но чувствует, что уперся в невидимый барьер. Предпринимателям, аналитикам, руководителям и всем, кто устал от выгорания, фонового стресса и потери контроля над эмоциями. Это система для тех, кто ищет логичные, рабочие алгоритмы пересборки себя, а не эзотерические обещания.',
        },
        {
          q: 'С чего начать?',
          a: 'Первый шаг — оцифровать точку «А». Пройдите один из наших когнитивных сканеров (тестов), чтобы увидеть свои слепые зоны и скрытые сценарии, которые блокируют ваши результаты. После диагностики система покажет ваши уязвимости и предложит конкретные материалы и техники для их устранения.',
        },
        {
          q: 'Насколько это безопасно и конфиденциально?',
          a: 'Абсолютная приватность — это база. Все данные вашего профилирования, результаты тестов и история работы защищены. Процесс вашей внутренней трансформации полностью конфиденциален.',
        },
        {
          q: 'Как быстро я увижу результаты?',
          a: 'Первичную ясность и понимание своих багов вы получите сразу после прохождения диагностики. Но пересборка нейронных связей и привычек — это не магия, а архитектурная работа. Скорость зависит от вашей готовности регулярно применять полученные психотехнологии в реальных стрессовых ситуациях.',
        },
      ],
    },
    finalCta: {
      title: 'Готові вийти з когнітивного тупика на новий рівень?',
      subtitle: 'Пройдите экспресс-диагностику или запишитесь на стратегическую консультацию с Александром Дьяковым.',
      primaryBtn: 'Записаться на сессию',
      secondaryBtn: 'Пройти тест бесплатно',
    },
  },

  en: {
    hero: {
      kicker: 'Applied Psychotechnology & Profiling Ecosystem',
      title: 'From internal chaos',
      titleAccent: 'to unshakable self-reliance',
      subtitle: 'An engineered approach to cognitive refactoring by Oleksandr Diakov. Evidence-based autonomic diagnostics, vulnerability scanners, and executive mentorship for founders.',
      primaryCta: 'Take Free Diagnostic Assessment',
      secondaryCta: 'Explore Programs',
      socialProofText: 'Over 10,450+ individuals built solid inner grounding',
      telemetryCards: [
        {
          tag: 'LOAD',
          title: 'Energy Leak',
          triggerLabel: 'TRIGGER: Hyper-Control',
          triggerDesc: 'Vagal deceleration and autonomic release required',
          type: 'load',
        },
        {
          tag: 'RELATIONS',
          title: 'Latent Trigger',
          triggerLabel: 'SCRIPT: Vulnerability Fear',
          triggerDesc: 'Defensive distancing and armor reflex',
          type: 'relations',
        },
        {
          tag: 'GROWTH',
          title: 'Cognitive Bottleneck',
          triggerLabel: 'BARRIER: Error Dread',
          triggerDesc: 'Vector: Unshakable self-reliance',
          type: 'growth',
        },
        {
          tag: 'POTENTIAL',
          title: 'Inner Reserve',
          triggerLabel: 'YOUR STRENGTH',
          triggerDesc: 'Systemic process intuition and strategic depth',
          type: 'potential',
        },
      ],
      stats: [
        { number: '10,450+', label: 'Digitized Profiles' },
        { number: '12,000+', label: 'Practiced Hours' },
        { number: '12+', label: 'Years of Research' },
        { number: '94%', label: 'Retention Rate' },
      ],
    },
    pillarsSection: {
      kicker: 'OLEKSANDR DIAKOV’S METHODOLOGY',
      title: 'Four Vectors of Psychological Resilience',
      subtitle: 'We eliminate protracted abstract psychoanalysis. Our framework models cognition as a cybernetic feedback control loop.',
      items: [
        {
          id: 'cognitive-deconstruction',
          number: '01',
          title: 'Cognitive Deconstruction',
          tagline: 'Mental bug audit',
          description: 'Isolating automatic distortions, subconscious self-sabotage loops, and paralyzing limiting beliefs.',
        },
        {
          id: 'stress-neurobiology',
          number: '02',
          title: 'Stress Neurobiology',
          tagline: 'Autonomic regulation',
          description: 'Halting adrenaline crashes, stimulating vagal nerve tone, and reclaiming autonomic equilibrium in 90s.',
        },
        {
          id: 'submodality-recoding',
          number: '03',
          title: 'Submodality Recoding',
          tagline: 'Perception engineering',
          description: 'Modulating subjective sensory parameters (scale, distance, audio pitch) to extinguish phobic reflex loops.',
        },
        {
          id: 'solid-core',
          number: '04',
          title: 'Unshakable Self-Reliance',
          tagline: 'Autonomy & Scale',
          description: 'Solid internal anchoring immune to external validation, market turbulence, or temporary operational crises.',
        },
      ],
    },
    scannersSection: {
      kicker: 'VERIFIED DIAGNOSTICS',
      title: 'Quantify Your Cognitive Profile',
      subtitle: 'Precision psychometric scanners to uncover energy depletion vectors, burnout markers, and impostor patterns.',
      viewAllCta: 'All Scanners & Tests',
    },
    offeringsSection: {
      kicker: 'APPLIED PROGRAMS & SESSIONS',
      title: 'Executive Mentorship & Strategy',
      subtitle: 'Intensive 1-on-1 consultations with Oleksandr Diakov to dismantle cognitive bottlenecks.',
      viewAllCta: 'All Programs & Rates',
    },
    blogSection: {
      kicker: 'KNOWLEDGE BASE & RESEARCH',
      title: 'Academic Journal of Psychotechnology',
      subtitle: 'Technical long-forms on nervous system dynamics, timeline re-imprinting, and burnout prevention.',
      viewAllCta: 'Read All Publications',
    },
    faqSection: {
      kicker: 'FREQUENTLY ASKED QUESTIONS',
      title: 'Everything You Need to Know About NextSelf',
      subtitle: 'Direct answers concerning methodology, privacy standards, and tangible milestones.',
      items: [
        {
          q: 'What is NextSelf?',
          a: 'NextSelf is an executive applied psychotechnology and behavioral profiling platform created by Oleksandr Diakov. We integrate evidence-based protocols (CBT, applied neurolinguistics, cybernetic cognition) to deliver a precision dashboard for your internal state. We do not dwell on past grievances; our focus is on high-performing decision-makers seeking engineered tools to dissolve anxiety, eliminate self-sabotage, and build unbreakable inner resilience.',
        },
        {
          q: 'Who is this platform designed for?',
          a: 'Executives, founders, and professionals who execute at high velocity but find themselves hitting a cognitive ceiling, vegetative burnout, or chronic stress. It is built for analytical minds demanding verifiable psychological frameworks rather than esoteric platitudes.',
        },
        {
          q: 'Where should I start?',
          a: 'The foundational first step is quantifying your baseline. Take one of our validated psychometric scanners to illuminate unconscious cognitive bottlenecks. Upon completion, the system maps your vulnerabilities and prescribes targeted recalibration vectors.',
        },
        {
          q: 'How secure and confidential is my diagnostic data?',
          a: 'Absolute privacy is paramount. All assessment outcomes, profiling metrics, and private inquiry histories remain strictly encrypted and confidential in accordance with international standards.',
        },
        {
          q: 'How rapidly will tangible results emerge?',
          a: 'Immediate diagnostic clarity and vulnerability mapping occur upon completing an assessment. However, neural habit reconsolidation is an architectural pursuit. Velocity depends on your discipline in executing our psychotechnology protocols under real-world pressure.',
        },
      ],
    },
    finalCta: {
      title: 'Ready to Break Through Cognitive Ceilings to New Heights?',
      subtitle: 'Take an assessment or reserve a private strategic consultation with Oleksandr Diakov.',
      primaryBtn: 'Book Strategic Session',
      secondaryBtn: 'Take Free Assessment',
    },
  },
};

export function getHomeContent(lang: SupportedLanguage = 'uk'): HomeContent {
  return HOME_CONTENT[lang] || HOME_CONTENT.uk;
}
