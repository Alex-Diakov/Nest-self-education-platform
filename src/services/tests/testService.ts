import { AssessmentTest, UserAssessmentResult } from '../../types/test.ts';
import { SupportedLanguage } from '../../types/i18n.ts';
import { TESTS_TRANSLATIONS } from './testsI18n.ts';
import { storageService } from '../storage/storageService.ts';

export const ASSESSMENT_TESTS: AssessmentTest[] = [
  {
    id: 'financial-scanner',
    slug: 'financial-scanner',
    title: 'Финансовый Сканер | Аудит скрытых рисков и потери контроля',
    domain: 'Мышление и стратегии',
    difficulty: 'intermediate',
    difficultyLabel: '7 минут / 15 вопросов',
    timeLimitMinutes: 7,
    questionCount: 4,
    passingScorePercent: 70,
    overview: 'Оцифруйте паттерн, который блокирует ваш доход. Узнайте, почему вы сдаете позиции в переговорах, куда утекает ваша энергия и что на самом деле мешает вам пробить стеклянный потолок.',
    prerequisites: ['Опыт ведения переговоров или управления доходами', 'Готовность к честной оценке паттернов'],
    skillsTested: ['Оценка финансовых рисков', 'Паттерны самосаботажа', 'Переговорная устойчивость', 'Стеклянный потолок'],
    questions: [
      {
        id: 'fs-q1',
        prompt: 'В ситуации обсуждения повышения стоимости ваших услуг или ставки вы чаще всего чувствуете:',
        choices: [
          { id: 'c1', text: 'Уверенность в своей ценности и спокойную аргументацию' },
          { id: 'c2', text: 'Скрытую тревогу, желание быстрее согласиться на предложенную меньшую сумму' },
          { id: 'c3', text: 'Раздражение на клиента/руководство за необходимость «выпрашивать»' },
          { id: 'c4', text: 'Склонность затягивать разговор и откладывать его на потом' }
        ],
        correctChoiceId: 'c1',
        explanation: 'Склонность быстро соглашаться на меньшую сумму или откладывать разговор свидетельствует о паттерне страха уязвимости и самообесценивания, блокирующем пробитие финансового потолка.',
        skillDomain: 'Переговорная устойчивость',
        weight: 25
      },
      {
        id: 'fs-q2',
        prompt: 'Когда на счет поступает крупная сумма денег, ваша первая фоновая реакция:',
        choices: [
          { id: 'c1', text: 'Спокойствие, планомерное распределение по стратегическим фондам' },
          { id: 'c2', text: 'Подсознательное напряжение: «нужно срочно куда-то потратить или вложить, иначе пропадут»' },
          { id: 'c3', text: 'Страх грядущих проблем или мысли, что это случайная удача' },
          { id: 'c4', text: 'Снижение мотивации работать дальше до следующего кризиса' }
        ],
        correctChoiceId: 'c1',
        explanation: 'Тревожное стремление быстро избавиться от свободной ликвидности — классический триггер «горячих денег», коренящийся в скрытой установке небезопасности обладания ресурсом.',
        skillDomain: 'Паттерны самосаботажа',
        weight: 25
      },
      {
        id: 'fs-q3',
        prompt: 'Как вы реагируете на ситуацию, когда подчиненный или партнер совершает ошибку в проекте?',
        choices: [
          { id: 'c1', text: 'Анализирую системный сбой и обучаю сотрудника исправить процесс' },
          { id: 'c2', text: 'Забираю задачу себе со словами: «Проще сделать самому, чем переделывать»' },
          { id: 'c3', text: 'Впадаю в микроконтроль и начинаю проверять каждое действие' },
          { id: 'c4', text: 'Игнорирую проблему, надеясь, что она рассосется сама' }
        ],
        correctChoiceId: 'c1',
        explanation: 'Гиперконтроль и убеждение «легче сделать самому» — главная причина энергетического истощения и невозможности масштабировать бизнес выше определенного предела.',
        skillDomain: 'Оценка финансовых рисков',
        weight: 25
      },
      {
        id: 'fs-q4',
        prompt: 'При необходимости принять решение в условиях 50% неопределенности вы:',
        choices: [
          { id: 'c1', text: 'Формулирую гипотезу, ставлю ограничение на риск и быстро тестирую ее' },
          { id: 'c2', text: 'Бесконечно собираю данные, боясь принять неидеальное решение' },
          { id: 'c3', text: 'Перекладываю ответственность за выбор на партнеров или обстоятельства' },
          { id: 'c4', text: 'Действую на импульсивных эмоциях без предварительного просчета' }
        ],
        correctChoiceId: 'c1',
        explanation: 'Паралич анализа (Analysis Paralysis) — маркер скрытого страха ошибки и перфекционизма. Вектор развития — опора на себя и работа с допустимой ценой ошибки.',
        skillDomain: 'Стеклянный потолок',
        weight: 25
      }
    ]
  },
  {
    id: 'hidden-conflict',
    slug: 'hidden-conflict',
    title: 'Тест на скрытую конфликтность. Разберитесь в своих скрытых чертах',
    domain: 'Коммуникация и переговоры',
    difficulty: 'intermediate',
    difficultyLabel: '7 минут / 35 вопросов',
    timeLimitMinutes: 7,
    questionCount: 4,
    passingScorePercent: 70,
    overview: 'Оцените 7 скрытых черт своей личности от вспыльчивости до эгоцентризма. Узнайте, где ваша твердость помогает вам выживать, а где — становится главным барьером для доверия и карьерного роста.',
    prerequisites: ['Опыт командного взаимодействия', 'Искренность в ответах'],
    skillsTested: ['Эмоциональная реактивность', 'Границы в конфликте', 'Пассивная агрессия', 'Эмпатическое слушание'],
    questions: [
      {
        id: 'hc-q1',
        prompt: 'Когда собеседник открыто критикует предложенное вами решение на общем собрании, вы:',
        choices: [
          { id: 'c1', text: 'Отделяю свою личность от идеи и задаю уточняющие вопросы по сути' },
          { id: 'c2', text: 'Воспринимаю это как личную атаку и мгновенно перехожу в контрнаступление' },
          { id: 'c3', text: 'Замолкаю, соглашаюсь внешне, но внутри затаиваю обиду и дистанцируюсь' },
          { id: 'c4', text: 'Саркастично обесцениваю компетенции оппонента' }
        ],
        correctChoiceId: 'c1',
        explanation: 'Пассивная агрессия или резкая вспыльчивость сигнализируют о слабой дифференциации самооценки от внешних оценок. Зрелая реакция — сохранение исследовательской позиции.',
        skillDomain: 'Эмоциональная реактивность',
        weight: 25
      },
      {
        id: 'hc-q2',
        prompt: 'Если коллега систематически опаздывает со своей частью работы, как вы поступаете?',
        choices: [
          { id: 'c1', text: 'Обозначаю факт срыва дедлайна, влияние на проект и передоговариваюсь о правилах' },
          { id: 'c2', text: 'Терплю до последнего, а затем взрываюсь бурей эмоций' },
          { id: 'c3', text: 'Начинаю демонстративно вздыхать и игнорировать коллегу' },
          { id: 'c4', text: 'Жалуюсь руководству за спиной коллеги' }
        ],
        correctChoiceId: 'c1',
        explanation: 'Накопление напряжения с последующим взрывом или бойкотом разрушает доверие. Прямая ненасильственная коммуникация возвращает контроль над ситуацией.',
        skillDomain: 'Границы в конфликте',
        weight: 25
      },
      {
        id: 'hc-q3',
        prompt: 'Склонны ли вы проверять людей на преданность и искать скрытый подвох в добрых поступках?',
        choices: [
          { id: 'c1', text: 'Нет, ориентируюсь на факты и открыт к искреннему сотрудничеству' },
          { id: 'c2', text: 'Да, считаю, что каждый человек преследует исключительно корыстную выгоду' },
          { id: 'c3', text: 'Периодически устраиваю скрытые проверки близким и партнерам' },
          { id: 'c4', text: 'Трудно доверять, поэтому предпочитаю держать дистанцию' }
        ],
        correctChoiceId: 'c1',
        explanation: 'Гипербдительность и ожидание предательства — классический защитный механизм, сформированный травматическим опытом, блокирующий глубокие партнерства.',
        skillDomain: 'Пассивная агрессия',
        weight: 25
      },
      {
        id: 'hc-q4',
        prompt: 'В ходе спора, если вы осознаете свою неправоту, насколько легко вам признать это вслух?',
        choices: [
          { id: 'c1', text: 'Легко: «Я был неправ, спасибо, что обратил внимание на эти данные»' },
          { id: 'c2', text: 'Крайне тяжело, буду спорить до победного, меняя тему и аргументы' },
          { id: 'c3', text: 'Промолчу и сделаю вид, что спора не было' },
          { id: 'c4', text: 'Признаю, но буду долго заниматься самобичеванием' }
        ],
        correctChoiceId: 'c1',
        explanation: 'Способность признать ошибку без разрушения внутренней опоры отличает психологически зрелого лидера от эгоцентрического паттерна защиты.',
        skillDomain: 'Эмпатическое слушание',
        weight: 25
      }
    ]
  },
  {
    id: 'pcl5-stress-audit',
    slug: 'pcl5-stress-audit',
    title: 'Аудит стрессовых паттернов (PCL-5)',
    domain: 'Состояния и конфликты',
    difficulty: 'advanced',
    difficultyLabel: '⏱️ ~6 мин / 20 вопр.',
    timeLimitMinutes: 6,
    questionCount: 4,
    passingScorePercent: 75,
    overview: 'Пройдите диагностику по международному стандарту PCL-5. Узнайте, как непрожитые кризисы прошлого заставляют вашу нервную систему работать в режиме фоновой угрозы, и получите протокол восстановления.',
    prerequisites: ['Спокойная обстановка', 'Фокус на телесных и эмоциональных ощущениях'],
    skillsTested: ['Фоновая гипервозбудимость', 'Навязчивые воспоминания', 'Паттерны избегания', 'Негативные когнитивные сдвиги'],
    questions: [
      {
        id: 'pcl-q1',
        prompt: 'Как часто за последний месяц вы ощущали внезапное физическое напряжение, учащенное сердцебиение или ком в горле без очевидной внешней причины?',
        choices: [
          { id: 'c1', text: 'Практически никогда или в единичных случаях явного стресса' },
          { id: 'c2', text: 'Несколько раз в неделю, особенно по вечерам или при мысли о работе' },
          { id: 'c3', text: 'Ежедневно, тело находится в постоянной боевой готовности' },
          { id: 'c4', text: 'Постоянно, сопровождается приступами паники' }
        ],
        correctChoiceId: 'c1',
        explanation: 'Фоновая физиологическая готовность «бей или беги» при отсутствии реальной опасности свидетельствует о застрявшем стрессовом отклике в симпатической нервной системе.',
        skillDomain: 'Фоновая гипервозбудимость',
        weight: 25
      },
      {
        id: 'pcl-q2',
        prompt: 'Случается ли, что неприятные события прошлого внезапно всплывают в памяти против вашей воли и выбивают из колеи?',
        choices: [
          { id: 'c1', text: 'Нет, прошлое воспринимается как нейтральный опыт' },
          { id: 'c2', text: 'Иногда триггеры возвращают воспоминания, но я быстро переключаюсь' },
          { id: 'c3', text: 'Да, часто прокручиваю старые разговоры и ошибки, испытывая те же эмоции' },
          { id: 'c4', text: 'Воспоминания настолько яркие, будто событие происходит прямо сейчас' }
        ],
        correctChoiceId: 'c1',
        explanation: 'Интрузивные (навязчивые) воспоминания указывают на то, что мозг не завершил консолидацию памяти о кризисе. Здесь эффективны техники реимпринтинга и десенсибилизации.',
        skillDomain: 'Навязчивые воспоминания',
        weight: 25
      },
      {
        id: 'pcl-q3',
        prompt: 'Замечаете ли вы за собой стремление избегать определенных тем, мест или людей, чтобы не испытывать дискомфорт?',
        choices: [
          { id: 'c1', text: 'Нет, свободно коммуницирую и бываю в любых местах' },
          { id: 'c2', text: 'Стараюсь обходить стороной острые темы, вызывающие тревогу' },
          { id: 'c3', text: 'Систематически изолируюсь от социума, когда уровень стресса растет' },
          { id: 'c4', text: 'Сузил круг общения и активности до минимума из-за страха триггеров' }
        ],
        correctChoiceId: 'c1',
        explanation: 'Поведение избегания (Avoidance) временно снижает тревогу, но стратегически усиливает фобический контур. Работа с экспозицией помогает разорвать эту петлю.',
        skillDomain: 'Паттерны избегания',
        weight: 25
      },
      {
        id: 'pcl-q4',
        prompt: 'Насколько вам удается чувствовать искреннюю радость, расслабление и близость с другими людьми?',
        choices: [
          { id: 'c1', text: 'Регулярно испытываю тепло, радость и контакт с близкими' },
          { id: 'c2', text: 'Трудно расслабиться даже на отдыхе, чувствую фоновую тревогу' },
          { id: 'c3', text: 'Ощущаю эмоциональное онемение: ни сильной радости, ни сильной грусти' },
          { id: 'c4', text: 'Чувствую полное отчуждение от окружающего мира' }
        ],
        correctChoiceId: 'c1',
        explanation: 'Эмоциональное онемение — частая защитная реакция психики при перегрузке стрессом. Восстановление контакта с телом и ресурсом — первоочередная задача протокола.',
        skillDomain: 'Негативные когнитивные сдвиги',
        weight: 25
      }
    ]
  }
];

class TestService {
  private applyTranslations(test: AssessmentTest, lang: SupportedLanguage = 'uk'): AssessmentTest {
    const override = TESTS_TRANSLATIONS[test.id]?.[lang] || TESTS_TRANSLATIONS[test.slug]?.[lang];
    if (!override) return test;
    return {
      ...test,
      ...override,
    };
  }

  getAllTests(lang: SupportedLanguage = 'uk'): AssessmentTest[] {
    return ASSESSMENT_TESTS.map(t => this.applyTranslations(t, lang));
  }

  getTestById(id: string, lang: SupportedLanguage = 'uk'): AssessmentTest | undefined {
    const test = ASSESSMENT_TESTS.find(t => t.id === id);
    return test ? this.applyTranslations(test, lang) : undefined;
  }

  getTestBySlug(slug: string, lang: SupportedLanguage = 'uk'): AssessmentTest | undefined {
    const test = ASSESSMENT_TESTS.find(t => t.slug === slug || t.id === slug);
    return test ? this.applyTranslations(test, lang) : undefined;
  }

  saveResult(result: UserAssessmentResult): void {
    const history = this.getResultsHistory();
    history.unshift(result);
    storageService.setItem('nextself_test_results', history.slice(0, 30));
  }

  getResultsHistory(): UserAssessmentResult[] {
    return storageService.getItem<UserAssessmentResult[]>('nextself_test_results', []);
  }

  getLastResultForTest(testId: string): UserAssessmentResult | null {
    const history = this.getResultsHistory();
    return history.find(r => r.testId === testId) || null;
  }

  evaluateTestSubmission(
    testId: string,
    answers: Record<string, string>,
    timeSpentSeconds: number,
    lang: SupportedLanguage = 'uk'
  ): UserAssessmentResult {
    const test = this.getTestById(testId, lang) || ASSESSMENT_TESTS[0];
    let correctCount = 0;
    const domainStats: Record<string, { correct: number; total: number }> = {};

    test.questions.forEach(q => {
      if (!domainStats[q.skillDomain]) {
        domainStats[q.skillDomain] = { correct: 0, total: 0 };
      }
      domainStats[q.skillDomain].total += 1;

      if (answers[q.id] === q.correctChoiceId) {
        correctCount += 1;
        domainStats[q.skillDomain].correct += 1;
      }
    });

    const totalQuestions = test.questions.length;
    const scorePercent = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;
    const passed = scorePercent >= test.passingScorePercent;

    const domainBreakdown = Object.entries(domainStats).map(([domain, stat]) => ({
      domain,
      percentage: Math.round((stat.correct / stat.total) * 100),
    }));

    const result: UserAssessmentResult = {
      testId: test.id,
      testTitle: test.title,
      completedAt: new Date().toISOString(),
      scorePercent,
      correctAnswersCount: correctCount,
      totalQuestions,
      passed,
      timeSpentSeconds,
      domainBreakdown,
      certificateId: `NS-${Math.random().toString(36).substring(2, 9).toUpperCase()}`
    };

    this.saveResult(result);
    return result;
  }
}

export const testService = new TestService();
