import React, { useState, useEffect } from 'react';
import { EduService } from '../../../types/service.ts';
import { useI18n } from '../../../context/I18nContext.tsx';
import { Play, Pause, RotateCcw, ChevronRight, CheckCircle2, AlertTriangle, ShieldCheck, Heart } from 'lucide-react';
import { M3Button } from '../../../design-system/m3/components/M3Button.tsx';
import { M3Card } from '../../../design-system/m3/components/M3Card.tsx';

interface ToolRunnerProps {
  service: EduService;
  onClose?: () => void;
}

export const InteractiveToolRunner: React.FC<ToolRunnerProps> = ({ service }) => {
  const { language } = useI18n();

  // 1. BREATH PACER STATE (4-7-8 Protocol)
  const [breathActive, setBreathActive] = useState(false);
  const [breathPhase, setBreathPhase] = useState<'inhale' | 'hold' | 'exhale'>('inhale');
  const [phaseSecondsLeft, setPhaseSecondsLeft] = useState(4);
  const [completedCycles, setCompletedCycles] = useState(0);

  useEffect(() => {
    if (!breathActive) return;

    const timer = setInterval(() => {
      setPhaseSecondsLeft(prev => {
        if (prev > 1) return prev - 1;

        // Transition phases
        if (breathPhase === 'inhale') {
          setBreathPhase('hold');
          return 7;
        } else if (breathPhase === 'hold') {
          setBreathPhase('exhale');
          return 8;
        } else {
          setBreathPhase('inhale');
          setCompletedCycles(c => c + 1);
          return 4;
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [breathActive, breathPhase]);

  const handleResetBreath = () => {
    setBreathActive(false);
    setBreathPhase('inhale');
    setPhaseSecondsLeft(4);
    setCompletedCycles(0);
  };

  // 2. COGNITIVE DISTORTION ANALYZER STATE
  const distortionsData = {
    uk: [
      {
        id: 'dist-1',
        thought: '«Якщо ця угода зірветься, це повний крах мого бізнесу і репутації»',
        distortion: 'Катастрофізація (Catastrophizing)',
        tension: 90,
        reframing: 'Зрив однієї угоди — неприємна подія, але не фатальна. У мене є диверсифіковані активи, 10+ років досвіду і чіткий план дій.',
      },
      {
        id: 'dist-2',
        thought: '«Вони на нараді перезирнулися — певно, всі вважають мене некомпетентним»',
        distortion: 'Читання думок (Mind Reading)',
        tension: 75,
        reframing: 'Погляди колег можуть означати втому, згоду або сторонні думки. Без прямих фактів домислювати критику — це проєкція власної невпевненості.',
      },
      {
        id: 'dist-3',
        thought: '«Я зобов’язаний все контролювати сам, інакше команда обов’язково провалить терміни»',
        distortion: 'Гіперконтроль та обов’язковість (Should Statements)',
        tension: 85,
        reframing: 'Контролювати абсолютно все неможливо і призводить до вигорання. Ефективніше вибудувати прозорі KPI та точки синхронізації.',
      },
    ],
    ru: [
      {
        id: 'dist-1',
        thought: '«Если эта сделка сорвется, это полный крах моего бизнеса и репутации»',
        distortion: 'Катастрофизация (Catastrophizing)',
        tension: 90,
        reframing: 'Срыв одной сделки — неприятное событие, но не фатальное. У меня есть диверсифицированные активы, опыт и четкий план действий.',
      },
      {
        id: 'dist-2',
        thought: '«Они на совещании переглянулись — наверняка все считают меня некомпетентным»',
        distortion: 'Чтение мыслей (Mind Reading)',
        tension: 75,
        reframing: 'Взгляды коллег могут означать усталость, согласие или посторонние мысли. Додумывать критику без фактов — проекция внутренней неуверенности.',
      },
      {
        id: 'dist-3',
        thought: '«Я обязан всё контролировать сам, иначе команда обязательно сорвет сроки»',
        distortion: 'Гиперконтроль и долженствование (Should Statements)',
        tension: 85,
        reframing: 'Контролировать всё невозможно и ведет к выгоранию. Эффективнее выстроить прозрачные метрики и контрольные точки.',
      },
    ],
    en: [
      {
        id: 'dist-1',
        thought: '"If this negotiation collapses, it marks the absolute ruin of my enterprise"',
        distortion: 'Catastrophizing',
        tension: 90,
        reframing: 'A single deal friction is an operational variable, not an existential collapse. We have diversified cash flows and decade-tested protocols.',
      },
      {
        id: 'dist-2',
        thought: '"The board glanced at each other — they must perceive me as fraudulent"',
        distortion: 'Mind Reading',
        tension: 75,
        reframing: 'Counterpart expressions reflect cognitive processing or fatigue. Projecting condemnation without factual evidence is an impostor projection.',
      },
      {
        id: 'dist-3',
        thought: '"I must micromanage every deliverable, or the project will inevitably fail"',
        distortion: 'Hyper-Control & Tyranny of the Should',
        tension: 85,
        reframing: 'Total control is a neurobiological illusion that guarantees executive exhaustion. Scalable leverage requires calibrated milestones.',
      },
    ],
  };

  const [selectedDistortionId, setSelectedDistortionId] = useState<string>('dist-1');

  // 3. FEAR DECONSTRUCTION MATRIX STATE
  const [fearProbability, setFearProbability] = useState<number>(30);
  const [inactionCost, setInactionCost] = useState<number>(70);

  // 4. FLASHCARDS REFRAMING STATE
  const flashcardsData = {
    uk: [
      {
        limiting: '«Мені просто пощастило, незабаром усі дізнаються, що я не такий вже й крутий»',
        reframing: 'Успіх — це закономірний підсумок 10,000+ годин системних зусиль, помилок і рішень. Випадковий успіх не тримається роками.',
        method: 'Перевизначення критеріїв',
      },
      {
        limiting: '«Якщо я покажу втому чи вразливість, мене сприймуть як слабкого лідера»',
        reframing: 'Псевдонеуразливість викликає напругу і відчуження. Справжня сила лідера — у спокійному контакті з реальністю та визнанні меж ресурсу.',
        method: 'Зміна розміру фрейму',
      },
      {
        limiting: '«Я не можу відмовити важливому клієнту, інакше він піде до конкурентів»',
        reframing: 'Клієнти цінують стійкі кордони та експертну чесність. Безвідмовність приваблює токсичних замовників і знецінює послугу.',
        method: 'Розділення наміру та поведінки',
      },
    ],
    ru: [
      {
        limiting: '«Мне просто повезло, скоро все поймут, что я не такой уж и профессионал»',
        reframing: 'Успех — это закономерный итог 10,000+ часов системных усилий, ошибок и решений. Случайный успех не держится годами.',
        method: 'Переопределение критериев',
      },
      {
        limiting: '«Если я покажу усталость или уязвимость, меня сочтут слабым лидером»',
        reframing: 'Псевдонеуязвимость вызывает напряжение и отчуждение. Сила лидера — в спокойном контакте с реальностью и границами ресурса.',
        method: 'Смена размера фрейма',
      },
      {
        limiting: '«Я не могу отказать клиенту, иначе он уйдет к конкурентам»',
        reframing: 'Клиенты уважают твердые границы и экспертную честность. Безотказность привлекает токсичных заказчиков и обесценивает услугу.',
        method: 'Разделение намерения и поведения',
      },
    ],
    en: [
      {
        limiting: '"I was merely lucky; soon counterparts will discover I am an impostor"',
        reframing: 'Executive achievement is the direct result of 10,000+ hours of iterated grit. Random luck does not compound across decades.',
        method: 'Criteria Redefinition',
      },
      {
        limiting: '"Revealing somatic fatigue or doubt will expose me as an inadequate leader"',
        reframing: 'Pseudo-invulnerability breeds organizational alienation. Authentic leadership is grounded in transparent calibration of reality.',
        method: 'Frame Chunking',
      },
      {
        limiting: '"I cannot set strict boundaries with demanding clients, or revenue evaporates"',
        reframing: 'Counterparts revere unyielding professional boundaries. Unconditional accommodation attracts boundary-violating clients.',
        method: 'Intent vs. Execution Decoupling',
      },
    ],
  };

  const [cardIndex, setCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [learnedCount, setLearnedCount] = useState(0);

  const activeDistortions = distortionsData[language] || distortionsData.uk;
  const currentDistortion = activeDistortions.find(d => d.id === selectedDistortionId) || activeDistortions[0];

  const activeCards = flashcardsData[language] || flashcardsData.uk;
  const currentCard = activeCards[cardIndex] || activeCards[0];

  return (
    <div className="bg-[var(--md-sys-color-surface-container)] rounded-[var(--radius-card,20px)] border border-[var(--md-sys-color-outline-variant)]/60 p-4 sm:p-8 space-y-6">
      {/* 1. BREATH PACER */}
      {service.interactiveType === 'breath-pacer' && (
        <div className="space-y-6 max-w-2xl mx-auto text-center py-2 sm:py-6">
          <div className="space-y-2">
            <span className="text-[12px] font-mono uppercase tracking-wider text-[var(--md-sys-color-primary)] font-semibold">
              {language === 'en' ? 'Vagus Nerve Pacing (4-7-8)' : language === 'ru' ? 'Стимуляция блуждающего нерва (4-7-8)' : 'Стимуляція блукаючого нерва (4-7-8)'}
            </span>
            <h3 className="text-[20px] sm:text-[24px] font-normal text-[var(--md-sys-color-on-surface)]">
              {breathPhase === 'inhale'
                ? (language === 'en' ? 'Inhale through nose' : language === 'ru' ? 'Вдох носом (наполнение)' : 'Вдих носом (наповнення)')
                : breathPhase === 'hold'
                ? (language === 'en' ? 'Hold & suspend breath' : language === 'ru' ? 'Задержка дыхания' : 'Затримка дихання')
                : (language === 'en' ? 'Slow extended exhale' : language === 'ru' ? 'Плавный выдох ртом' : 'Плавний видих ротом')}
            </h3>
            <p className="text-[13px] text-[var(--md-sys-color-on-surface-variant)]">
              {language === 'en'
                ? 'Deep diaphragmatic expansion directly stimulates the parasympathetic braking system'
                : language === 'ru'
                ? 'Глубокое диафрагмальное дыхание напрямую включает парасимпатическую тормозную систему'
                : 'Глибоке діафрагмальне дихання напряму активує парасимпатичну гальмівну систему'}
            </p>
          </div>

          {/* Visual Breathing Circle */}
          <div className="relative flex items-center justify-center my-8">
            <div
              className={`w-44 h-44 sm:w-56 sm:h-56 rounded-full flex items-center justify-center transition-all duration-1000 ${
                breathPhase === 'inhale'
                  ? 'scale-110 bg-[var(--md-sys-color-primary)] text-[var(--md-sys-color-on-primary)] shadow-2xl shadow-[var(--md-sys-color-primary)]/30'
                  : breathPhase === 'hold'
                  ? 'scale-110 bg-[var(--md-sys-color-secondary)] text-[var(--md-sys-color-on-secondary)] ring-8 ring-[var(--md-sys-color-secondary-container)]'
                  : 'scale-90 bg-[var(--md-sys-color-surface-container-high)] text-[var(--md-sys-color-on-surface)] border-2 border-[var(--md-sys-color-primary)]'
              }`}
            >
              <div className="text-center space-y-1">
                <span className="text-[44px] sm:text-[56px] font-mono font-bold leading-none tabular-nums">
                  {phaseSecondsLeft}
                </span>
                <span className="block text-[11px] font-mono uppercase tracking-wider opacity-85">
                  {breathPhase.toUpperCase()}
                </span>
              </div>
            </div>
          </div>

          {/* Controls & Metrics */}
          <div className="flex items-center justify-center gap-3">
            <M3Button
              variant={breathActive ? 'outlined' : 'filled'}
              onClick={() => setBreathActive(!breathActive)}
              icon={breathActive ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            >
              {breathActive
                ? (language === 'en' ? 'Pause' : language === 'ru' ? 'Пауза' : 'Пауза')
                : (language === 'en' ? 'Start Respiration' : language === 'ru' ? 'Начать дыхание' : 'Розпочати дихання')}
            </M3Button>
            <M3Button variant="text" onClick={handleResetBreath} icon={<RotateCcw className="w-4 h-4" />}>
              {language === 'en' ? 'Reset' : language === 'ru' ? 'Сброс' : 'Скинути'}
            </M3Button>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--md-sys-color-surface)] border border-[var(--md-sys-color-outline-variant)]/60 text-[12px] font-mono text-[var(--md-sys-color-on-surface-variant)]">
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>
              {language === 'en' ? 'Completed cycles: ' : language === 'ru' ? 'Завершено циклов: ' : 'Завершено циклів: '}
              <strong className="text-[var(--md-sys-color-on-surface)]">{completedCycles}</strong>
            </span>
          </div>
        </div>
      )}

      {/* 2. COGNITIVE DISTORTION ANALYZER */}
      {service.interactiveType === 'distortion-analyzer' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            {/* List of intrusive thoughts */}
            <div className="md:col-span-5 space-y-3">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[var(--md-sys-color-primary)] font-semibold block">
                {language === 'en' ? '1. Select Intrusive Cognitive Bias' : language === 'ru' ? '1. Выберите тревожную мысль' : '1. Оберіть тривожну автоматичну думку'}
              </span>
              <div className="space-y-2">
                {activeDistortions.map(d => {
                  const isSelected = d.id === selectedDistortionId;
                  return (
                    <button
                      key={d.id}
                      onClick={() => setSelectedDistortionId(d.id)}
                      className={`w-full text-left p-3.5 rounded-[14px] text-[13px] leading-relaxed transition-all cursor-pointer border ${
                        isSelected
                          ? 'bg-[var(--md-sys-color-primary-container)] text-[var(--md-sys-color-on-primary-container)] border-[var(--md-sys-color-primary)] font-medium shadow-2xs'
                          : 'bg-[var(--md-sys-color-surface)] text-[var(--md-sys-color-on-surface-variant)] border-[var(--md-sys-color-outline-variant)]/50 hover:bg-[var(--md-sys-color-surface-container-high)]'
                      }`}
                    >
                      {d.thought}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Deconstructed analysis card */}
            <div className="md:col-span-7 bg-[var(--md-sys-color-surface)] p-5 sm:p-6 rounded-[18px] border border-[var(--md-sys-color-outline-variant)]/60 space-y-4">
              <div className="flex items-center justify-between border-b border-[var(--md-sys-color-outline-variant)]/40 pb-3">
                <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-medium text-[13px]">
                  <AlertTriangle className="w-4 h-4" />
                  <span>{currentDistortion.distortion}</span>
                </div>
                <span className="text-[11px] font-mono text-[var(--md-sys-color-on-surface-variant)]">
                  {language === 'en' ? 'Somatic Tension: ' : language === 'ru' ? 'Напряжение: ' : 'Соматична напруга: '}
                  <strong className="text-rose-500">{currentDistortion.tension}%</strong>
                </span>
              </div>

              <div className="space-y-2">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[var(--md-sys-color-on-surface-variant)] font-semibold block">
                  {language === 'en' ? 'Unconscious Cognitive Script' : language === 'ru' ? 'Исходный тревожный сценарий' : 'Вихідний тривожний сценарій'}
                </span>
                <p className="text-[14px] text-[var(--md-sys-color-on-surface)] italic bg-[var(--md-sys-color-surface-container)] p-3 rounded-[10px]">
                  {currentDistortion.thought}
                </p>
              </div>

              <div className="space-y-2 pt-2 border-t border-[var(--md-sys-color-outline-variant)]/40">
                <div className="flex items-center gap-2 text-[12px] font-medium text-emerald-600 dark:text-emerald-400">
                  <ShieldCheck className="w-4 h-4" />
                  <span>{language === 'en' ? 'Rational Cognitive Reframing Formula' : language === 'ru' ? 'Рациональная формула пересборки' : 'Раціональна формула перескладання'}</span>
                </div>
                <p className="text-[13px] leading-relaxed text-[var(--md-sys-color-on-surface)] bg-emerald-500/10 dark:bg-emerald-500/15 p-3.5 rounded-[12px] border border-emerald-500/20">
                  {currentDistortion.reframing}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 3. FEAR DECONSTRUCTION MATRIX */}
      {service.interactiveType === 'fear-matrix' && (
        <div className="space-y-6 max-w-3xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <M3Card variant="outlined" className="p-5 space-y-3">
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-[var(--md-sys-color-on-surface-variant)]">
                  {language === 'en' ? 'Estimated Disaster Risk' : language === 'ru' ? 'Вероятность худшего исхода' : 'Ймовірність найгіршого сценарію'}
                </span>
                <span className="font-bold text-[var(--md-sys-color-primary)] text-sm">{fearProbability}%</span>
              </div>
              <input
                type="range"
                min="5"
                max="95"
                value={fearProbability}
                onChange={e => setFearProbability(Number(e.target.value))}
                className="w-full accent-[var(--md-sys-color-primary)] cursor-pointer"
              />
              <p className="text-[11px] text-[var(--md-sys-color-on-surface-variant)] leading-tight">
                {language === 'en'
                  ? 'Subjective fear inflates perceived risk by up to 400% compared to verifiable market baselines'
                  : language === 'ru'
                  ? 'Субъективный страх завышает реальный риск до 4 раз относительно объективных фактов'
                  : 'Суб’єктивний страх завищує реальний ризик до 4 разів порівняно з фактами'}
              </p>
            </M3Card>

            <M3Card variant="outlined" className="p-5 space-y-3">
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-[var(--md-sys-color-on-surface-variant)]">
                  {language === 'en' ? 'Guaranteed Cost of Inaction' : language === 'ru' ? 'Цена бездействия и застоя' : 'Ціна бездіяльності та застою'}
                </span>
                <span className="font-bold text-[var(--md-sys-color-error)] text-sm">{inactionCost}%</span>
              </div>
              <input
                type="range"
                min="10"
                max="100"
                value={inactionCost}
                onChange={e => setInactionCost(Number(e.target.value))}
                className="w-full accent-[var(--md-sys-color-error)] cursor-pointer"
              />
              <p className="text-[11px] text-[var(--md-sys-color-on-surface-variant)] leading-tight">
                {language === 'en'
                  ? 'Compounding stagnation cost: energy leakage, lost opportunities, and self-doubt'
                  : language === 'ru'
                  ? 'Скрытые убытки: утечка ресурса, упущенные рыночные окна и рост неуверенности'
                  : 'Приховані збитки: витік ресурсу, втрачені можливості та зростання невпевненості'}
              </p>
            </M3Card>
          </div>

          <div className="p-5 rounded-[16px] bg-[var(--md-sys-color-surface)] border border-[var(--md-sys-color-outline-variant)]/60 flex items-center justify-between flex-wrap gap-4">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-[var(--md-sys-color-on-surface-variant)] block">
                {language === 'en' ? 'Rational Decision Calculus' : language === 'ru' ? 'Рациональный вердикт матрицы' : 'Раціональний вердикт матриці'}
              </span>
              <p className="text-[14px] font-medium text-[var(--md-sys-color-on-surface)] mt-1">
                {inactionCost > fearProbability
                  ? (language === 'en'
                      ? 'Action is mathematically safer than chronic hesitation. Cost of inaction exceeds downside risk.'
                      : language === 'ru'
                      ? 'Действие математически безопаснее бездействия. Ущерб от прокрастинации превышает цену ошибки.'
                      : 'Дія математично безпечніша за бездіяльність. Збитки від прокрастинації перевищують ціну помилки.')
                  : (language === 'en'
                      ? 'Create a preliminary risk hedge before full-scale execution.'
                      : language === 'ru'
                      ? 'Сформируйте буфер безопасности перед масштабированием.'
                      : 'Сформуйте буфер безпеки перед масштабуванням.')}
              </p>
            </div>
            <M3Button
              size="sm"
              variant="filled"
              onClick={() => {
                setFearProbability(20);
                setInactionCost(85);
              }}
            >
              {language === 'en' ? 'Recalibrate Variables' : language === 'ru' ? 'Откалибровать переменные' : 'Відкалібрувати змінні'}
            </M3Button>
          </div>
        </div>
      )}

      {/* 4. FLASHCARDS REFRAMING */}
      {service.interactiveType === 'flashcard-engine' && (
        <div className="max-w-xl mx-auto space-y-6 text-center">
          <div className="flex items-center justify-between text-xs font-mono text-[var(--md-sys-color-on-surface-variant)]">
            <span>
              {language === 'en' ? 'Card ' : language === 'ru' ? 'Карточка ' : 'Картка '}
              <strong className="text-[var(--md-sys-color-on-surface)]">{cardIndex + 1}</strong> / {activeCards.length}
            </span>
            <span className="text-[var(--md-sys-color-primary)] font-semibold">{currentCard.method}</span>
          </div>

          {/* Flipped Card */}
          <div
            onClick={() => setIsFlipped(!isFlipped)}
            className="min-h-[220px] p-6 rounded-[var(--radius-card,20px)] bg-[var(--md-sys-color-surface)] border border-[var(--md-sys-color-outline-variant)] shadow-sm flex flex-col justify-between cursor-pointer hover:border-[var(--md-sys-color-primary)] transition-all select-none"
          >
            <div className="space-y-2">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[var(--md-sys-color-on-surface-variant)]">
                {isFlipped
                  ? (language === 'en' ? 'Reframed Executive Mindset' : language === 'ru' ? 'Новая устойчивая опора' : 'Нова стійка опора')
                  : (language === 'en' ? 'Limiting Unconscious Script' : language === 'ru' ? 'Ограничивающее убеждение' : 'Обмежуюче переконання')}
              </span>
              <p
                className={`text-[16px] leading-relaxed transition-all ${
                  isFlipped ? 'text-emerald-700 dark:text-emerald-400 font-medium' : 'text-[var(--md-sys-color-on-surface)]'
                }`}
              >
                {isFlipped ? currentCard.reframing : currentCard.limiting}
              </p>
            </div>

            <div className="text-[12px] text-[var(--md-sys-color-primary)] font-medium pt-4">
              {isFlipped
                ? (language === 'en' ? 'Click to view original prompt' : language === 'ru' ? 'Кликните, чтобы вернуть исходный вопрос' : 'Клікніть, щоб повернути вихідне формулювання')
                : (language === 'en' ? 'Click card to reveal cognitive reframing' : language === 'ru' ? 'Кликните карточку для показа рефрейминга' : 'Клікніть картку, щоб розкрити рефреймінг')}
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex items-center justify-center gap-3">
            <M3Button
              variant="outlined"
              onClick={() => {
                setIsFlipped(false);
                setCardIndex((cardIndex + 1) % activeCards.length);
              }}
              trailingIcon={<ChevronRight className="w-4 h-4" />}
            >
              {language === 'en' ? 'Next Flashcard' : language === 'ru' ? 'Следующая карточка' : 'Наступна картка'}
            </M3Button>
            <M3Button
              variant="filled"
              onClick={() => {
                setLearnedCount(c => c + 1);
                setIsFlipped(false);
                setCardIndex((cardIndex + 1) % activeCards.length);
              }}
              icon={<CheckCircle2 className="w-4 h-4" />}
            >
              {language === 'en' ? 'Mastered Insight' : language === 'ru' ? 'Установка усвоена' : 'Установку засвоєно'}
            </M3Button>
          </div>

          <div className="text-[12px] font-mono text-[var(--md-sys-color-on-surface-variant)]">
            {language === 'en' ? 'Mastered insights: ' : language === 'ru' ? 'Освоено установок: ' : 'Освоєно установок: '}
            <strong className="text-[var(--md-sys-color-on-surface)]">{learnedCount}</strong>
          </div>
        </div>
      )}
    </div>
  );
};
