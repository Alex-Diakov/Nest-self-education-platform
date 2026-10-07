import React, { useState, useEffect } from 'react';
import { AssessmentTest, UserAssessmentResult } from '../../../types/test.ts';
import { testService } from '../../../services/tests/testService.ts';
import { useI18n } from '../../../context/I18nContext.tsx';
import { M3Button } from '../../../design-system/m3/components/M3Button.tsx';
import { M3Card } from '../../../design-system/m3/components/M3Card.tsx';
import { Clock, ArrowLeft, ArrowRight, Check } from 'lucide-react';
import { TestResultView } from './TestResultView.tsx';

interface TestRunnerProps {
  test: AssessmentTest;
  onExit: () => void;
}

export const TestRunner: React.FC<TestRunnerProps> = ({ test, onExit }) => {
  const { language, t } = useI18n();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [secondsRemaining, setSecondsRemaining] = useState(test.timeLimitMinutes * 60);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [result, setResult] = useState<UserAssessmentResult | null>(null);

  useEffect(() => {
    if (isSubmitted) return;

    const timer = setInterval(() => {
      setSecondsRemaining(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmitTest();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isSubmitted]);

  const handleSelectChoice = (questionId: string, choiceId: string) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: choiceId,
    }));
  };

  const handleSubmitTest = () => {
    const timeSpent = test.timeLimitMinutes * 60 - secondsRemaining;
    const evaluation = testService.evaluateTestSubmission(test.id, answers, timeSpent, language);
    setResult(evaluation);
    setIsSubmitted(true);
  };

  const handleRetake = () => {
    setAnswers({});
    setCurrentQuestionIndex(0);
    setSecondsRemaining(test.timeLimitMinutes * 60);
    setIsSubmitted(false);
    setResult(null);
  };

  if (isSubmitted && result) {
    return (
      <TestResultView
        test={test}
        result={result}
        userAnswers={answers}
        onRetake={handleRetake}
        onBackToCatalog={onExit}
      />
    );
  }

  const currentQ = test.questions[currentQuestionIndex];
  const minutes = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;
  const answeredCount = Object.keys(answers).length;
  const isLastQuestion = currentQuestionIndex === test.questions.length - 1;

  const cancelLabel = language === 'uk' ? 'Перервати' : language === 'en' ? 'Exit' : 'Прервать';
  const prevLabel = language === 'uk' ? 'Попереднє' : language === 'en' ? 'Previous' : 'Предыдущий';
  const nextLabel = language === 'uk' ? 'Наступне' : language === 'en' ? 'Next' : 'Следующий';
  const finishLabel = language === 'uk' ? 'Завершити діагностику' : language === 'en' ? 'Complete Assessment' : 'Завершить тест';

  return (
    <M3Card variant="elevated" className="overflow-hidden">
      {/* Test Runner Top Control Bar */}
      <div className="p-4 sm:p-6 bg-[var(--md-sys-color-surface-container-highest)] text-[var(--md-sys-color-on-surface)] flex flex-wrap items-center justify-between gap-4 border-b border-[var(--md-sys-color-outline-variant)]/40">
        <div>
          <span className="text-[11px] font-mono uppercase tracking-wider text-[var(--md-sys-color-primary)] font-semibold">
            {test.domain} · {test.timeLimitMinutes} {t('common.minutes')}
          </span>
          <h2 className="text-[18px] sm:text-[20px] font-medium text-[var(--md-sys-color-on-surface)]">{test.title}</h2>
        </div>

        <div className="flex items-center gap-4">
          {/* Real-time timer */}
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--md-sys-color-surface-container)] text-[var(--md-sys-color-on-surface)] font-mono text-[13px] tabular-nums border border-[var(--md-sys-color-outline-variant)]/40">
            <Clock className="w-4 h-4 text-[var(--md-sys-color-primary)]" />
            <span>
              {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
            </span>
          </div>

          <M3Button
            size="sm"
            variant="outlined"
            onClick={onExit}
          >
            {cancelLabel}
          </M3Button>
        </div>
      </div>

      {/* Progress & Question Index Stepper */}
      <div className="px-4 sm:px-6 py-2.5 sm:py-3 bg-[var(--md-sys-color-surface-container)] border-b border-[var(--md-sys-color-outline-variant)]/40 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[11px] sm:text-[12px] text-[var(--md-sys-color-on-surface-variant)]">
        <div className="flex items-center gap-2">
          <span>
            {language === 'uk' ? `Питання ${currentQuestionIndex + 1} із ${test.questions.length}` : language === 'en' ? `Question ${currentQuestionIndex + 1} of ${test.questions.length}` : `Вопрос ${currentQuestionIndex + 1} из ${test.questions.length}`}
          </span>
          <span aria-hidden="true">·</span>
          <span>
            {language === 'uk' ? `Відповіли: ${answeredCount} із ${test.questions.length}` : language === 'en' ? `Answered: ${answeredCount} of ${test.questions.length}` : `Отвечено: ${answeredCount} из ${test.questions.length}`}
          </span>
        </div>

        {/* Stepper Dots with horizontal scroll on small devices */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 max-w-full">
          {test.questions.map((q, idx) => {
            const hasAnswer = answers[q.id] !== undefined;
            const isCurrent = idx === currentQuestionIndex;

            return (
              <button
                key={q.id}
                onClick={() => setCurrentQuestionIndex(idx)}
                className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full text-[11px] font-mono flex items-center justify-center transition-colors cursor-pointer m3-state-layer shrink-0 ${
                  isCurrent
                    ? 'bg-[var(--md-sys-color-primary)] text-[var(--md-sys-color-on-primary)] font-semibold shadow-xs'
                    : hasAnswer
                    ? 'bg-[var(--md-sys-color-secondary-container)] text-[var(--md-sys-color-on-secondary-container)]'
                    : 'bg-[var(--md-sys-color-surface-container-highest)] text-[var(--md-sys-color-on-surface-variant)] hover:opacity-80'
                }`}
              >
                {idx + 1}
              </button>
            );
          })}
        </div>
      </div>

      {/* Question Body */}
      <div className="p-4 sm:p-8 space-y-4 sm:space-y-6">
        <div>
          <span className="text-[12px] font-semibold text-[var(--md-sys-color-primary)] uppercase tracking-wider block mb-1">
            {language === 'uk' ? 'Фактор' : language === 'en' ? 'Domain' : 'Фактор'}: {currentQ.skillDomain}
          </span>
          <h3 className="text-[18px] font-normal text-[var(--md-sys-color-on-surface)] leading-snug">
            {currentQ.prompt}
          </h3>
        </div>

        {currentQ.codeContext && (
          <div className="bg-[var(--md-sys-color-surface-container-lowest)] text-[var(--md-sys-color-on-surface)] rounded-[12px] p-4 font-mono text-[12px] overflow-x-auto border border-[var(--md-sys-color-outline-variant)]/40">
            <code>{currentQ.codeContext}</code>
          </div>
        )}

        {/* Choices with M3 state layer */}
        <div className="space-y-3">
          {currentQ.choices.map((choice, i) => {
            const isSelected = answers[currentQ.id] === choice.id;

            return (
              <label
                key={choice.id}
                onClick={() => handleSelectChoice(currentQ.id, choice.id)}
                className={`m3-state-layer flex items-start gap-3 p-4 rounded-[12px] border text-[14px] transition-all cursor-pointer ${
                  isSelected
                    ? 'border-[var(--md-sys-color-primary)] bg-[var(--md-sys-color-primary-container)]/30 text-[var(--md-sys-color-on-surface)] ring-1 ring-[var(--md-sys-color-primary)]'
                    : 'border-[var(--md-sys-color-outline-variant)]/70 hover:border-[var(--md-sys-color-outline)] bg-[var(--md-sys-color-surface)] text-[var(--md-sys-color-on-surface)]'
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 mt-0.5 text-[11px] font-mono transition-colors ${
                    isSelected
                      ? 'border-[var(--md-sys-color-primary)] bg-[var(--md-sys-color-primary)] text-[var(--md-sys-color-on-primary)]'
                      : 'border-[var(--md-sys-color-outline)] bg-transparent text-[var(--md-sys-color-on-surface-variant)]'
                  }`}
                >
                  {String.fromCharCode(65 + i)}
                </div>
                <div className="flex-1 font-normal leading-relaxed">
                  {choice.text}
                </div>
              </label>
            );
          })}
        </div>
      </div>

      {/* Bottom Navigation Controls */}
      <div className="p-4 sm:p-6 bg-[var(--md-sys-color-surface-container-low)] border-t border-[var(--md-sys-color-outline-variant)]/40 flex flex-wrap items-center justify-between gap-3">
        <M3Button
          size="md"
          variant="outlined"
          disabled={currentQuestionIndex === 0}
          onClick={() => setCurrentQuestionIndex(i => i - 1)}
          icon={<ArrowLeft className="w-3.5 h-3.5" />}
          className="min-h-[44px]"
        >
          {prevLabel}
        </M3Button>

        <div className="flex items-center gap-2 sm:gap-3">
          {!isLastQuestion ? (
            <M3Button
              size="md"
              variant="filled"
              onClick={() => setCurrentQuestionIndex(i => i + 1)}
              trailingIcon={<ArrowRight className="w-3.5 h-3.5" />}
              className="min-h-[44px]"
            >
              {nextLabel}
            </M3Button>
          ) : (
            <M3Button
              size="md"
              variant="filled"
              onClick={handleSubmitTest}
              icon={<Check className="w-3.5 h-3.5" />}
              className="min-h-[44px]"
            >
              {finishLabel}
            </M3Button>
          )}
        </div>
      </div>
    </M3Card>
  );
};
