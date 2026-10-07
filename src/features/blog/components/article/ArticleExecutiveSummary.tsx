import React from 'react';
import { useI18n } from '../../../../context/I18nContext.tsx';
import { Sparkles, HelpCircle, CheckCircle } from 'lucide-react';

interface ArticleExecutiveSummaryProps {
  takeaways?: string[];
  keyQuestions?: string[];
}

export const ArticleExecutiveSummary: React.FC<ArticleExecutiveSummaryProps> = ({
  takeaways,
  keyQuestions,
}) => {
  const { language } = useI18n();

  if ((!takeaways || takeaways.length === 0) && (!keyQuestions || keyQuestions.length === 0)) {
    return null;
  }

  return (
    <section aria-label="Executive Summary" className="my-8 sm:my-12">
      <div className="bg-[var(--md-sys-color-surface-container)] rounded-[var(--radius-card,20px)] border border-[var(--md-sys-color-outline-variant)]/60 p-6 sm:p-8 shadow-2xs space-y-6">
        {/* Section Heading Badge */}
        <div className="flex items-center justify-between border-b border-[var(--md-sys-color-outline-variant)]/40 pb-4 flex-wrap gap-2">
          <div className="flex items-center gap-2 text-[12px] sm:text-[13px] font-mono font-semibold uppercase tracking-wider text-[var(--md-sys-color-primary)]">
            <Sparkles className="w-4 h-4" />
            <span>
              {language === 'en'
                ? 'Executive Briefing & Key Hypotheses'
                : language === 'ru'
                ? 'Краткий исполнительный бриф (TL;DR)'
                : 'Короткий виконавчий бриф (TL;DR)'}
            </span>
          </div>
          <span className="text-[11px] font-mono text-[var(--md-sys-color-on-surface-variant)]">
            {language === 'en' ? 'Time-to-absorb: ~90s' : language === 'ru' ? 'Время освоения: ~90 сек' : 'Час засвоєння: ~90 сек'}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          {/* Left Column: Key Questions */}
          {keyQuestions && keyQuestions.length > 0 && (
            <div className="md:col-span-5 space-y-3">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[var(--md-sys-color-on-surface-variant)] font-semibold flex items-center gap-1.5">
                <HelpCircle className="w-3.5 h-3.5 text-[var(--md-sys-color-secondary)]" />
                <span>
                  {language === 'en' ? 'Key Questions Investigated' : language === 'ru' ? 'Вопросы исследования' : 'Досліджувані питання'}
                </span>
              </span>
              <ul className="space-y-2">
                {keyQuestions.map((q, i) => (
                  <li
                    key={i}
                    className="text-[13px] sm:text-[14px] leading-snug text-[var(--md-sys-color-on-surface-variant)] p-2.5 bg-[var(--md-sys-color-surface)]/60 rounded-[12px] border border-[var(--md-sys-color-outline-variant)]/30"
                  >
                    «{q}»
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Right Column: Key Takeaways */}
          {takeaways && takeaways.length > 0 && (
            <div className={`${keyQuestions && keyQuestions.length > 0 ? 'md:col-span-7' : 'md:col-span-12'} space-y-3`}>
              <span className="text-[11px] font-mono uppercase tracking-wider text-[var(--md-sys-color-primary)] font-semibold flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                <span>
                  {language === 'en' ? 'Verified Conclusions' : language === 'ru' ? 'Ключевые выводы' : 'Ключові висновки'}
                </span>
              </span>
              <ul className="space-y-2.5">
                {takeaways.map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-[14px] leading-relaxed text-[var(--md-sys-color-on-surface)]">
                    <span className="p-0.5 mt-0.5 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 shrink-0">
                      <CheckCircle className="w-3.5 h-3.5 stroke-[2.5]" />
                    </span>
                    <span className="font-normal">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
