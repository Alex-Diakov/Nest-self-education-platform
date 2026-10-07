import { EduService } from '../../types/service.ts';
import { SupportedLanguage } from '../../types/i18n.ts';

const SERVICES_DATA: Record<SupportedLanguage, EduService[]> = {
  uk: [
    {
      id: 'srv-breath-pacer',
      slug: 'breath-pacer',
      title: 'Регулятор вегетативного тонусу та дихання (4-7-8)',
      category: 'simulation',
      categoryLabel: 'Вегетативна регуляція',
      tagline: 'Миттєве гальмування симпатичної нервової системи та зняття тахікардії',
      description: 'Інтерактивний тренажер блукаючого нерва (vagus nerve). Керуйте візуальною фазою дихання для зниження рівня кортизолу та виходу з гострого стресу за 3 хвилини.',
      status: 'active',
      icon: 'Activity',
      metrics: [
        { label: 'Зниження ЧСС', value: '-18%' },
        { label: 'Час активації', value: '180 сек' },
        { label: 'Протокол', value: '4-7-8 Vagal' },
      ],
      features: [
        'Візуальна синхронізація фаз дихання з анімацією',
        'Підрахунок повних дихальних циклів',
        'Акустичні та тілесні маркери розслаблення діафрагми',
      ],
      capabilities: ['Зняття паніки', 'Стабілізація перед переговорами', 'Нормалізація сну'],
      interactiveType: 'breath-pacer',
    },
    {
      id: 'srv-distortion-analyzer',
      slug: 'distortion-analyzer',
      title: 'Деконструктор когнітивних спотворень',
      category: 'analytics',
      categoryLabel: 'Когнітивне перескладання',
      tagline: 'Виявлення та перевірка реалістичності тривожних автоматичних думок',
      description: 'Аналітичний сканер ірраціональних установок. Допомагає деконструювати катастрофізацію, читання думок та чорно-біле мислення у зважену раціональну формулу.',
      status: 'active',
      icon: 'Compass',
      metrics: [
        { label: 'Типових патернів', value: '12 категорій' },
        { label: 'Зниження тривоги', value: '-65%' },
        { label: 'Методика', value: 'КПТ / НЛП' },
      ],
      features: [
        'Миттєва класифікація когнітивного збою',
        'Оцінка соматичного напруження до і після аналізу',
        'Генерація раціонального контраргументу та нової опори',
      ],
      capabilities: ['Катастрофізація', 'Чорно-біле мислення', 'Гіперконтроль', 'Читання думок'],
      interactiveType: 'distortion-analyzer',
    },
    {
      id: 'srv-fear-matrix',
      slug: 'fear-matrix',
      title: 'Матриця декомпозиції страху та ціни помилки',
      category: 'simulation',
      categoryLabel: 'Прийняття рішень',
      tagline: 'Розкладання ірраціональної тривоги на керовані фактори ризику',
      description: 'Інструмент розрахунку ціни дії проти ціни бездіяльності. Переводить смутний страх майбутнього у математичну оцінку ймовірностей та плану хеджування.',
      status: 'active',
      icon: 'Network',
      metrics: [
        { label: 'Точність оцінки', value: '98%' },
        { label: 'Факторів ризику', value: '4 рівні' },
        { label: 'Результат', value: 'План дій' },
      ],
      features: [
        'Інтерактивний розрахунок індексу ірраціонального гальмування',
        'Порівняння ризику помилки з прихованими збитками від прокрастинації',
        'Формування конкретного антикризового буфера безпеки',
      ],
      capabilities: ['Страх масштабування', 'Переговорний ризик', 'Ціна бездіяльності'],
      interactiveType: 'fear-matrix',
    },
    {
      id: 'srv-flashcards',
      slug: 'flashcards',
      title: 'Тренажер когнітивного рефреймінгу переконань',
      category: 'ai',
      categoryLabel: 'Нейролінгвістичний рефреймінг',
      tagline: 'Швидке перепрограмування патернів самознецінення та синдрому самозванця',
      description: 'Колекція інтерактивних карток глибинного рефреймінгу за методологією Роберта Ділтса. Перетворює обмежуючі переконання на конструктивну внутрішню опору.',
      status: 'active',
      icon: 'Sparkles',
      metrics: [
        { label: 'Готових перепрошивок', value: '45 схем' },
        { label: 'Ефективність', value: '+82%' },
        { label: 'Метод', value: 'Sleight of Mouth' },
      ],
      features: [
        'Покрокова зміна рамки проблеми на рамку результату',
        'Візуальне перевертання картки із фіксацією інсайту',
        'Відстеження освоєних когнітивних шаблонів',
      ],
      capabilities: ['Синдром самозванця', 'Страх вразливості', 'Знецінення успіху'],
      interactiveType: 'flashcard-engine',
    },
  ],
  ru: [
    {
      id: 'srv-breath-pacer',
      slug: 'breath-pacer',
      title: 'Регулятор вегетативного тонуса и дыхания (4-7-8)',
      category: 'simulation',
      categoryLabel: 'Вегетативная регуляция',
      tagline: 'Мгновенное торможение симпатической нервной системы и снятие тахикардии',
      description: 'Интерактивный тренажер блуждающего нерва (vagus nerve). Управляйте визуальной фазой дыхания для снижения уровня кортизола и выхода из острого стресса за 3 минуты.',
      status: 'active',
      icon: 'Activity',
      metrics: [
        { label: 'Снижение ЧСС', value: '-18%' },
        { label: 'Время активации', value: '180 сек' },
        { label: 'Протокол', value: '4-7-8 Vagal' },
      ],
      features: [
        'Визуальная синхронизация фаз дыхания с плавной анимацией',
        'Подсчет завершенных дыхательных циклов',
        'Акустические и соматические маркеры расслабления диафрагмы',
      ],
      capabilities: ['Снятие паники', 'Стабилизация перед переговорами', 'Нормализация сна'],
      interactiveType: 'breath-pacer',
    },
    {
      id: 'srv-distortion-analyzer',
      slug: 'distortion-analyzer',
      title: 'Деконструктор когнитивных искажений',
      category: 'analytics',
      categoryLabel: 'Когнитивная пересборка',
      tagline: 'Выявление и проверка реалистичности тревожных автоматических мыслей',
      description: 'Аналитический сканер иррациональных установок. Помогает деконструировать катастрофизацию, чтение мыслей и черно-белое мышление во взвешенную формулу.',
      status: 'active',
      icon: 'Compass',
      metrics: [
        { label: 'Типовых паттернов', value: '12 категорий' },
        { label: 'Снижение тревоги', value: '-65%' },
        { label: 'Методика', value: 'КПТ / НЛП' },
      ],
      features: [
        'Мгновенная классификация когнитивного сбоя',
        'Оценка соматического напряжения до и после анализа',
        'Генерация рационального контраргумента и новой опоры',
      ],
      capabilities: ['Катастрофизация', 'Черно-белое мышление', 'Гиперконтроль', 'Чтение мыслей'],
      interactiveType: 'distortion-analyzer',
    },
    {
      id: 'srv-fear-matrix',
      slug: 'fear-matrix',
      title: 'Матрица декомпозиции страха и цены ошибки',
      category: 'simulation',
      categoryLabel: 'Принятие решений',
      tagline: 'Разложение иррациональной тревоги на управляемые факторы риска',
      description: 'Инструмент расчета цены действия против цены бездействия. Переводит смутный страх будущего в математическую оценку вероятностей и план хеджирования.',
      status: 'active',
      icon: 'Network',
      metrics: [
        { label: 'Точность оценки', value: '98%' },
        { label: 'Факторов риска', value: '4 уровня' },
        { label: 'Результат', value: 'План действий' },
      ],
      features: [
        'Интерактивный расчет индекса иррационального торможения',
        'Сравнение риска ошибки со скрытыми убытками от прокрастинации',
        'Формирование конкретного антикризисного буфера безопасности',
      ],
      capabilities: ['Страх масштабирования', 'Переговорный риск', 'Цена бездействия'],
      interactiveType: 'fear-matrix',
    },
    {
      id: 'srv-flashcards',
      slug: 'flashcards',
      title: 'Тренажер когнитивного рефрейминга убеждений',
      category: 'ai',
      categoryLabel: 'Нейролингвистический рефрейминг',
      tagline: 'Быстрая перепрошивка паттернов самообесценивания и синдрома самозванца',
      description: 'Коллекция интерактивных карточек глубинного рефрейминга по методологии Роберта Дилтса. Превращает ограничивающие установки в конструктивную внутреннюю опору.',
      status: 'active',
      icon: 'Sparkles',
      metrics: [
        { label: 'Готовых перепрошивок', value: '45 схем' },
        { label: 'Эффективность', value: '+82%' },
        { label: 'Метод', value: 'Фокусы языка' },
      ],
      features: [
        'Пошаговая смена рамки проблемы на рамку результата',
        'Визуальный переворот карточки с фиксацией инсайта',
        'Отслеживание освоенных когнитивных шаблонов',
      ],
      capabilities: ['Синдром самозванца', 'Страх уязвимости', 'Обесценивание успеха'],
      interactiveType: 'flashcard-engine',
    },
  ],
  en: [
    {
      id: 'srv-breath-pacer',
      slug: 'breath-pacer',
      title: 'Vagal Tone & Paced Respiration Regulator (4-7-8)',
      category: 'simulation',
      categoryLabel: 'Autonomic Regulation',
      tagline: 'Rapid sympathetic down-regulation and somatic panic dissipation',
      description: 'Interactive vagus nerve pacing simulator. Calibrate visual respiration phases to dampen cortisol and exit acute stress arousal within 3 minutes.',
      status: 'active',
      icon: 'Activity',
      metrics: [
        { label: 'Heart Rate Drop', value: '-18%' },
        { label: 'Activation Time', value: '180 sec' },
        { label: 'Protocol', value: '4-7-8 Vagal' },
      ],
      features: [
        'Visual respiration pacing with fluid expanding/contracting circle',
        'Completed respiratory cycle tracking',
        'Acoustic and somatic cues for diaphragmatic release',
      ],
      capabilities: ['Panic Dissipation', 'Pre-Negotiation Centering', 'Sleep Architecture'],
      interactiveType: 'breath-pacer',
    },
    {
      id: 'srv-distortion-analyzer',
      slug: 'distortion-analyzer',
      title: 'Cognitive Distortion Deconstructer',
      category: 'analytics',
      categoryLabel: 'Cognitive Refactoring',
      tagline: 'Real-time detection and disputation of automatic catastrophizing scripts',
      description: 'Analytical scanner for irrational executive biases. Deconstruct catastrophizing, mind-reading, and all-or-nothing thinking into rational grounding.',
      status: 'active',
      icon: 'Compass',
      metrics: [
        { label: 'Core Distortions', value: '12 classes' },
        { label: 'Anxiety Deflation', value: '-65%' },
        { label: 'Framework', value: 'CBT / NLP' },
      ],
      features: [
        'Instant heuristic classification of cognitive bias',
        'Pre/post somatic tension scoring',
        'Generation of grounded rational reframing counter-statements',
      ],
      capabilities: ['Catastrophizing', 'All-or-Nothing', 'Hyper-Control', 'Mind-Reading'],
      interactiveType: 'distortion-analyzer',
    },
    {
      id: 'srv-fear-matrix',
      slug: 'fear-matrix',
      title: 'Fear Deconstruction & Error Cost Matrix',
      category: 'simulation',
      categoryLabel: 'Decision Architecture',
      tagline: 'Decoupling irrational dread into hedgeable operational variables',
      description: 'Analytical matrix comparing the true downside of action against the compounding cost of inaction. Converts abstract dread into probability modeling.',
      status: 'active',
      icon: 'Network',
      metrics: [
        { label: 'Precision Rating', value: '98%' },
        { label: 'Risk Layers', value: '4 tiers' },
        { label: 'Output', value: 'Action Plan' },
      ],
      features: [
        'Interactive calculation of irrational friction index',
        'Side-by-side risk modeling of action vs. procrastination rot',
        'Concrete crisis safety buffer synthesis',
      ],
      capabilities: ['Scale Hesitation', 'Negotiation Risk', 'Cost of Inaction'],
      interactiveType: 'fear-matrix',
    },
    {
      id: 'srv-flashcards',
      slug: 'flashcards',
      title: 'Cognitive Reframing Flashcard Engine',
      category: 'ai',
      categoryLabel: 'Neurolinguistic Reframing',
      tagline: 'Rapid cognitive restructuring of impostor scripts and self-doubt',
      description: 'Interactive flashcard deck modeled on Robert Dilts’ Sleight of Mouth patterns. Systematically converts self-limiting beliefs into executive resilience.',
      status: 'active',
      icon: 'Sparkles',
      metrics: [
        { label: 'Reframing Decks', value: '45 models' },
        { label: 'Efficacy Score', value: '+82%' },
        { label: 'Pattern', value: 'Sleight of Mouth' },
      ],
      features: [
        'Structured transition from problem frame to outcome frame',
        'Haptic card flipping with insight consolidation',
        'Integrated mastery tracking across cognitive domains',
      ],
      capabilities: ['Impostor Syndrome', 'Vulnerability Armor', 'Success Sabotage'],
      interactiveType: 'flashcard-engine',
    },
  ],
};

class ToolService {
  getAllServices(lang: SupportedLanguage = 'uk'): EduService[] {
    return SERVICES_DATA[lang] || SERVICES_DATA.uk;
  }

  getServiceBySlug(slug: string, lang: SupportedLanguage = 'uk'): EduService | undefined {
    const list = this.getAllServices(lang);
    return list.find(s => s.slug === slug || s.id === slug);
  }

  getServicesByCategory(category: string, lang: SupportedLanguage = 'uk'): EduService[] {
    const list = this.getAllServices(lang);
    if (category === 'all') return list;
    return list.filter(s => s.category === category);
  }
}

export const toolService = new ToolService();
