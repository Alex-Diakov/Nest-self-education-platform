import React, { useState } from 'react';
import { useI18n } from '../../../../context/I18nContext.tsx';
import { HelpCircle, CheckCircle2, AlertCircle, RotateCcw } from 'lucide-react';

interface KnowledgeCheckProps {
  question: string;
  options: { id: string; text: string; isCorrect: boolean }[];
  explanation: string;
}

export const ArticleKnowledgeCheck: React.FC<KnowledgeCheckProps> = ({
  question,
  options,
  explanation,
}) => {
  const { language } = useI18n();
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const selectedOption = options.find(o => o.id === selectedId);
  const isCorrect = selectedOption?.isCorrect;

  const handleSelect = (id: string) => {
    if (submitted) return;
    setSelectedId(id);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSelectedId(null);
    setSubmitted(false);
  };

  return (
    <div className="my-8 sm:my-10 p-6 rounded-[22px] bg-[var(--md-sys-color-surface-container)] border border-[var(--md-sys-color-primary)]/30 shadow-xs space-y-4">
      <div className="flex items-center justify-between border-b border-[var(--md-sys-color-outline-variant)]/40 pb-3">
        <span className="text-[11px] font-mono uppercase tracking-widest text-[var(--md-sys-color-primary)] font-bold flex items-center gap-1.5">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>{language === 'en' ? 'Interactive Knowledge Check' : language === 'ru' ? 'Интерактивный чекпоинт знаний' : 'Інтерактивний чекпоінт знань'}</span>
        </span>
        {submitted && (
          <button
            onClick={handleReset}
            className="text-[11px] font-mono text-[var(--md-sys-color-on-surface-variant)] hover:text-[var(--md-sys-color-primary)] flex items-center gap-1 cursor-pointer"
          >
            <RotateCcw className="w-3 h-3" />
            <span>{language === 'en' ? 'Try Again' : language === 'ru' ? 'Повторить' : 'Спробувати знову'}</span>
          </button>
        )}
      </div>

      <h4 className="text-[16px] sm:text-[17px] font-medium text-[var(--md-sys-color-on-surface)] leading-snug">
        {question}
      </h4>

      {/* Choices */}
      <div className="space-y-2.5">
        {options.map(opt => {
          const isSelected = selectedId === opt.id;
          let btnClass = 'bg-[var(--md-sys-color-surface)] border-[var(--md-sys-color-outline-variant)]/50 text-[var(--md-sys-color-on-surface)] hover:bg-[var(--md-sys-color-surface-container-high)]';

          if (submitted) {
            if (opt.isCorrect) {
              btnClass = 'bg-emerald-500/10 border-emerald-500 text-emerald-950 dark:text-emerald-200 font-medium';
            } else if (isSelected && !opt.isCorrect) {
              btnClass = 'bg-rose-500/10 border-rose-500 text-rose-950 dark:text-rose-200';
            }
          }

          return (
            <button
              key={opt.id}
              onClick={() => handleSelect(opt.id)}
              disabled={submitted}
              className={`w-full text-left p-3.5 rounded-[14px] border text-[13px] sm:text-[14px] transition-all cursor-pointer flex items-center justify-between ${btnClass}`}
            >
              <span>{opt.text}</span>
              {submitted && opt.isCorrect && (
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 ml-2" />
              )}
              {submitted && isSelected && !opt.isCorrect && (
                <AlertCircle className="w-4 h-4 text-rose-600 dark:text-rose-400 shrink-0 ml-2" />
              )}
            </button>
          );
        })}
      </div>

      {/* Feedback banner */}
      {submitted && (
        <div
          className={`p-4 rounded-[14px] text-[13px] leading-relaxed border ${
            isCorrect
              ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-950 dark:text-emerald-200'
              : 'bg-amber-500/10 border-amber-500/30 text-amber-950 dark:text-amber-200'
          }`}
        >
          <strong className="block mb-0.5">
            {isCorrect
              ? (language === 'en' ? 'Precisely correct!' : language === 'ru' ? 'В точку!' : 'Абсолютно вірно!')
              : (language === 'en' ? 'Not quite accurate:' : language === 'ru' ? 'Не совсем так:' : 'Не зовсім так:')}
          </strong>
          {explanation}
        </div>
      )}
    </div>
  );
};
