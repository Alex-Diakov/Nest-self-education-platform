import React, { useState, useEffect } from 'react';
import { testService } from '../../services/tests/testService.ts';
import { AssessmentTest, UserAssessmentResult } from '../../types/test.ts';
import { useNavigation } from '../../context/NavigationContext.tsx';
import { useI18n } from '../../context/I18nContext.tsx';
import { TestRunner } from './components/TestRunner.tsx';
import { M3Button, M3Card, CatalogLayout, InteractiveFlowLayout } from '../../design-system/index.ts';
import { CheckCircle2, Clock, HelpCircle, Award, Play, History } from 'lucide-react';

export const TestsPage: React.FC = () => {
  const { currentRoute, navigateTo } = useNavigation();
  const { language, t } = useI18n();
  const [activeTest, setActiveTest] = useState<AssessmentTest | null>(null);
  const [history, setHistory] = useState<UserAssessmentResult[]>([]);

  const tests = testService.getAllTests(language);

  useEffect(() => {
    setHistory(testService.getResultsHistory());
  }, [activeTest]);

  useEffect(() => {
    if (currentRoute.itemId) {
      const found = testService.getTestBySlug(currentRoute.itemId, language);
      setActiveTest(found || null);
    } else {
      setActiveTest(null);
    }
  }, [currentRoute.itemId, language]);

  const handleStartTest = (test: AssessmentTest) => {
    setActiveTest(test);
    navigateTo('tests', { itemId: test.slug });
  };

  const handleExitTest = () => {
    setActiveTest(null);
    navigateTo('tests');
  };

  if (activeTest) {
    return (
      <InteractiveFlowLayout maxWidth="max">
        <TestRunner test={activeTest} onExit={handleExitTest} />
      </InteractiveFlowLayout>
    );
  }

  return (
    <CatalogLayout
      badge={t('testsSection.pageBadge')}
      title={t('testsSection.pageTitle')}
      subtitle={t('testsSection.pageSubtitle')}
    >
      {/* Test History Bar */}
      {history.length > 0 && (
        <div className="bg-[var(--md-sys-color-secondary-container)] text-[var(--md-sys-color-on-secondary-container)] rounded-[20px] p-5">
          <div className="flex items-center gap-2 text-[13px] font-semibold mb-3">
            <History className="w-4 h-4" />
            <span>{t('testsSection.historyTitle')} ({history.length})</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {history.slice(0, 3).map((h, i) => (
              <div key={i} className="bg-[var(--md-sys-color-surface)] text-[var(--md-sys-color-on-surface)] p-3.5 rounded-[12px] border border-[var(--md-sys-color-outline-variant)]/60 text-xs flex justify-between items-center">
                <div>
                  <span className="font-semibold block truncate max-w-[180px]">
                    {h.testTitle}
                  </span>
                  <span className="text-[10px] text-[var(--md-sys-color-on-surface-variant)] font-mono">
                    {h.certificateId}
                  </span>
                </div>
                <div className="text-right font-mono">
                  <span className={`font-bold block ${h.passed ? 'text-emerald-600 dark:text-emerald-400' : 'text-amber-600'}`}>
                    {h.scorePercent}%
                  </span>
                  <span className="text-[10px] text-[var(--md-sys-color-on-surface-variant)]">
                    {h.passed ? (language === 'uk' ? 'Пройдено' : language === 'en' ? 'Passed' : 'Сдано') : (language === 'uk' ? 'Не складено' : language === 'en' ? 'Review' : 'Не сдано')}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tests Catalog Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {tests.map(test => {
          const lastResult = testService.getLastResultForTest(test.id);

          return (
            <M3Card
              key={test.id}
              variant="outlined"
              className="p-6 sm:p-7 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[12px] text-[var(--md-sys-color-on-surface-variant)]">
                    <span className="font-medium text-[var(--md-sys-color-on-surface)]">{test.domain}</span>
                    <span aria-hidden="true">·</span>
                    <span>{test.difficultyLabel}</span>
                  </div>
                  {lastResult && (
                    <span className="text-[12px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold">
                      {language === 'uk' ? 'Попередній бал' : language === 'en' ? 'Last Score' : 'Предыдущий балл'}: {lastResult.scorePercent}%
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="text-[18px] font-medium text-[var(--md-sys-color-on-surface)] leading-snug">
                    {test.title}
                  </h3>
                  <p className="text-[13px] text-[var(--md-sys-color-on-surface-variant)] mt-2 leading-relaxed">
                    {test.overview}
                  </p>
                </div>

                {/* Test parameters */}
                <div className="grid grid-cols-3 gap-3 py-3 border-y border-[var(--md-sys-color-outline-variant)]/40 text-xs">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[var(--md-sys-color-primary)] shrink-0" />
                    <div>
                      <span className="block font-semibold text-[var(--md-sys-color-on-surface)] font-mono tabular-nums text-[13px]">
                        {test.timeLimitMinutes} {t('common.minutes')}
                      </span>
                      <span className="text-[10px] text-[var(--md-sys-color-on-surface-variant)]">{t('testsSection.timeLabel')}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-[var(--md-sys-color-primary)] shrink-0" />
                    <div>
                      <span className="block font-semibold text-[var(--md-sys-color-on-surface)] font-mono tabular-nums text-[13px]">
                        {test.questionCount}
                      </span>
                      <span className="text-[10px] text-[var(--md-sys-color-on-surface-variant)]">{t('testsSection.questionsLabel')}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-[var(--md-sys-color-primary)] shrink-0" />
                    <div>
                      <span className="block font-semibold text-[var(--md-sys-color-on-surface)] font-mono tabular-nums text-[13px]">
                        {test.passingScorePercent}%
                      </span>
                      <span className="text-[10px] text-[var(--md-sys-color-on-surface-variant)]">{t('testsSection.thresholdLabel')}</span>
                    </div>
                  </div>
                </div>

                {/* Skills Tested */}
                <div>
                  <span className="text-[12px] font-semibold text-[var(--md-sys-color-on-surface)] block mb-1.5">
                    {language === 'uk' ? 'Фокус діагностики' : language === 'en' ? 'Diagnostic Focus' : 'Фокус диагностики'}:
                  </span>
                  <div className="flex flex-wrap gap-x-3 gap-y-1 text-[12px] text-[var(--md-sys-color-on-surface-variant)]">
                    {test.skillsTested.map((skill) => (
                      <span key={skill} className="flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[var(--md-sys-color-primary)] shrink-0" />
                        <span>{skill}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[var(--md-sys-color-outline-variant)]/40 flex items-center justify-between">
                <span className="text-[12px] text-[var(--md-sys-color-on-surface-variant)]">
                  {t('common.certified')}
                </span>
                <M3Button
                  size="sm"
                  variant="filled"
                  onClick={() => handleStartTest(test)}
                  icon={<Play className="w-3.5 h-3.5" />}
                >
                  {t('testsSection.startBtn')}
                </M3Button>
              </div>
            </M3Card>
          );
        })}
      </div>
    </CatalogLayout>
  );
};
