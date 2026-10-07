import React, { useState } from 'react';
import { UserAssessmentResult, AssessmentTest } from '../../../types/test.ts';
import { useI18n } from '../../../context/I18nContext.tsx';
import { M3Button } from '../../../design-system/m3/components/M3Button.tsx';
import { M3Card } from '../../../design-system/m3/components/M3Card.tsx';
import { M3LinearProgress } from '../../../design-system/m3/components/M3LinearProgress.tsx';
import { CheckCircle2, XCircle, Award, RotateCcw, ChevronDown, ChevronUp } from 'lucide-react';
import { CertificateModal } from './CertificateModal.tsx';

interface TestResultViewProps {
  test: AssessmentTest;
  result: UserAssessmentResult;
  userAnswers: Record<string, string>;
  onRetake: () => void;
  onBackToCatalog: () => void;
}

export const TestResultView: React.FC<TestResultViewProps> = ({
  test,
  result,
  userAnswers,
  onRetake,
  onBackToCatalog,
}) => {
  const { language, t } = useI18n();
  const [showReview, setShowReview] = useState(false);
  const [showCert, setShowCert] = useState(false);

  const minutes = Math.floor(result.timeSpentSeconds / 60);
  const seconds = result.timeSpentSeconds % 60;

  const passedTitle = language === 'uk'
    ? 'Діагностику успішно пройдено'
    : language === 'en'
    ? 'Assessment Completed Successfully'
    : 'Диагностика успешно пройдена';

  const attentionTitle = language === 'uk'
    ? 'Виявлено зону підвищеної вразливості'
    : language === 'en'
    ? 'Elevated Stress or Vulnerability Detected'
    : 'Выявлена зона повышенного стресса';

  const passedDesc = language === 'uk'
    ? 'Ваш когнітивний профіль оцифровано. Патерни та показники стійкості відповідають нормі.'
    : language === 'en'
    ? 'Your cognitive profile has been digitized. Self-regulation metrics indicate solid resilience.'
    : 'Ваш когнитивный профиль оцифрован. Показатели устойчивости соответствуют норме.';

  const attentionDesc = language === 'uk'
    ? 'Зафіксовано виток ресурсу або високий фоновий стрес. Рекомендуємо вивчити розбір відповідей або записатися на сесію.'
    : language === 'en'
    ? 'Energy leak or high sympathetic strain recorded. We recommend reviewing the detailed answers or booking a private session.'
    : 'Зафиксирована утечка ресурса или повышенный стресс. Рекомендуем изучить разбор ответов или записаться на консультацию.';

  return (
    <M3Card variant="elevated" className="p-6 sm:p-8 space-y-8">
      {/* Top Banner */}
      <div className="text-center max-w-lg mx-auto space-y-3">
        <div className="inline-flex p-3 rounded-full bg-[var(--md-sys-color-secondary-container)] mb-2">
          {result.passed ? (
            <Award className="w-10 h-10 text-[var(--md-sys-color-on-secondary-container)]" />
          ) : (
            <XCircle className="w-10 h-10 text-amber-500" />
          )}
        </div>
        <h2 className="text-[28px] font-normal text-[var(--md-sys-color-on-surface)]">
          {result.passed ? passedTitle : attentionTitle}
        </h2>
        <p className="text-[13px] text-[var(--md-sys-color-on-surface-variant)]">
          {result.passed ? passedDesc : attentionDesc}
        </p>
      </div>

      {/* Main Stats Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 bg-[var(--md-sys-color-surface-container)] rounded-[16px] border border-[var(--md-sys-color-outline-variant)]/40">
        <div>
          <span className="text-[11px] text-[var(--md-sys-color-on-surface-variant)] uppercase tracking-wider block">
            {language === 'uk' ? 'Підсумковий бал' : language === 'en' ? 'Score Index' : 'Итоговый балл'}
          </span>
          <span className="text-[28px] font-bold text-[var(--md-sys-color-on-surface)] font-mono tabular-nums">
            {result.scorePercent}%
          </span>
          <span className="text-[11px] text-[var(--md-sys-color-on-surface-variant)] block mt-0.5">
            {language === 'uk' ? 'Поріг' : language === 'en' ? 'Threshold' : 'Порог'}: {test.passingScorePercent}%
          </span>
        </div>
        <div>
          <span className="text-[11px] text-[var(--md-sys-color-on-surface-variant)] uppercase tracking-wider block">
            {language === 'uk' ? 'Відповідей' : language === 'en' ? 'Answers' : 'Ответов'}
          </span>
          <span className="text-[28px] font-bold text-[var(--md-sys-color-on-surface)] font-mono tabular-nums">
            {result.correctAnswersCount} / {result.totalQuestions}
          </span>
          <span className="text-[11px] text-[var(--md-sys-color-on-surface-variant)] block mt-0.5">
            {language === 'uk' ? 'Питань у сканері' : language === 'en' ? 'Questions in scanner' : 'Вопросов в сканере'}
          </span>
        </div>
        <div>
          <span className="text-[11px] text-[var(--md-sys-color-on-surface-variant)] uppercase tracking-wider block">
            {language === 'uk' ? 'Витрачений час' : language === 'en' ? 'Time Spent' : 'Затраченное время'}
          </span>
          <span className="text-[28px] font-bold text-[var(--md-sys-color-on-surface)] font-mono tabular-nums">
            {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
          </span>
          <span className="text-[11px] text-[var(--md-sys-color-on-surface-variant)] block mt-0.5">
            {language === 'uk' ? 'Ліміт' : language === 'en' ? 'Limit' : 'Лимит'}: {test.timeLimitMinutes} {t('common.minutes')}
          </span>
        </div>
        <div>
          <span className="text-[11px] text-[var(--md-sys-color-on-surface-variant)] uppercase tracking-wider block">
            {language === 'uk' ? 'Профайл' : language === 'en' ? 'Profile ID' : 'Профайл'}
          </span>
          <span className="text-[13px] font-mono text-[var(--md-sys-color-primary)] font-semibold block truncate mt-1.5">
            {result.certificateId}
          </span>
          <span className="text-[11px] text-emerald-600 dark:text-emerald-400 block mt-0.5 font-medium">
            ✓ {t('common.certified')}
          </span>
        </div>
      </div>

      {/* Domain Breakdown */}
      <div className="space-y-4">
        <h3 className="text-[14px] font-semibold text-[var(--md-sys-color-on-surface)]">
          {language === 'uk' ? 'Розподіл за шкалами та факторами' : language === 'en' ? 'Domain Breakdown & Metrics' : 'Распределение по шкалам и факторам'}
        </h3>
        <div className="space-y-3">
          {result.domainBreakdown.map(item => (
            <div key={item.domain} className="space-y-1">
              <div className="flex justify-between text-[12px] text-[var(--md-sys-color-on-surface-variant)]">
                <span>{item.domain}</span>
                <span className="font-mono tabular-nums font-medium text-[var(--md-sys-color-on-surface)]">{item.percentage}%</span>
              </div>
              <M3LinearProgress
                value={item.percentage}
                showPercent={false}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-[var(--md-sys-color-outline-variant)]/40">
        <M3Button
          variant="outlined"
          onClick={() => setShowReview(!showReview)}
          trailingIcon={showReview ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
        >
          {showReview
            ? (language === 'uk' ? 'Сховати розбір відповідей' : language === 'en' ? 'Hide Answers Breakdown' : 'Скрыть разбор ответов')
            : (language === 'uk' ? 'Детальний розбір кожного питання' : language === 'en' ? 'Detailed Question Review' : 'Подробный разбор каждого вопроса')}
        </M3Button>

        <div className="flex flex-wrap items-center gap-3">
          {result.passed && (
            <M3Button
              variant="filled"
              onClick={() => setShowCert(true)}
              icon={<Award className="w-4 h-4 text-amber-300" />}
            >
              {language === 'uk' ? 'Отримати сертифікат' : language === 'en' ? 'Get Certificate' : 'Получить сертификат'}
            </M3Button>
          )}
          <M3Button variant="filled-tonal" onClick={onBackToCatalog}>
            {language === 'uk' ? 'До каталогу сканерів' : language === 'en' ? 'All Scanners' : 'К списку тестов'}
          </M3Button>
          <M3Button variant="outlined" onClick={onRetake} icon={<RotateCcw className="w-3.5 h-3.5" />}>
            {language === 'uk' ? 'Пройти знову' : language === 'en' ? 'Retake' : 'Пройти заново'}
          </M3Button>
        </div>
      </div>

      {/* Detailed Review Section */}
      {showReview && (
        <div className="pt-6 border-t border-[var(--md-sys-color-outline-variant)]/40 space-y-6">
          <h3 className="text-[18px] font-medium text-[var(--md-sys-color-on-surface)]">
            {language === 'uk' ? 'Експертний аналіз відповідей та коментарі' : language === 'en' ? 'Expert Analysis & Theoretical Framework' : 'Экспертный анализ ответов и рекомендации'}
          </h3>
          <div className="space-y-6">
            {test.questions.map((q, idx) => {
              const selectedId = userAnswers[q.id];
              const isCorrect = selectedId === q.correctChoiceId;

              return (
                <div
                  key={q.id}
                  className={`p-5 rounded-[16px] border ${
                    isCorrect
                      ? 'border-emerald-300 dark:border-emerald-800 bg-emerald-500/5'
                      : 'border-amber-300 dark:border-amber-800 bg-amber-500/5'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <span className="text-[12px] font-semibold text-[var(--md-sys-color-on-surface-variant)]">
                      {language === 'uk' ? 'Питання' : language === 'en' ? 'Question' : 'Вопрос'} {idx + 1}. {q.skillDomain}
                    </span>
                    <span className="text-[12px] font-mono">
                      {isCorrect ? (
                        <span className="text-emerald-600 dark:text-emerald-400 font-semibold inline-flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5" /> {language === 'uk' ? 'Оптимально' : language === 'en' ? 'Aligned' : 'Верно'}
                        </span>
                      ) : (
                        <span className="text-amber-600 dark:text-amber-400 font-semibold inline-flex items-center gap-1">
                          <XCircle className="w-3.5 h-3.5" /> {language === 'uk' ? 'Зона уваги' : language === 'en' ? 'Vulnerable' : 'Внимание'}
                        </span>
                      )}
                    </span>
                  </div>

                  <p className="text-[14px] font-medium text-[var(--md-sys-color-on-surface)] mb-3">
                    {q.prompt}
                  </p>

                  <div className="bg-[var(--md-sys-color-surface-container)] rounded-[12px] p-3 text-[12px] text-[var(--md-sys-color-on-surface-variant)] leading-relaxed">
                    <strong className="text-[var(--md-sys-color-on-surface)] block mb-1">
                      {language === 'uk' ? 'Інсайт профайлера:' : language === 'en' ? 'Profiler Insight:' : 'Инсайт профайлера:'}
                    </strong>
                    {q.explanation}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Certificate Modal */}
      <CertificateModal
        result={result}
        isOpen={showCert}
        onClose={() => setShowCert(false)}
      />
    </M3Card>
  );
};
