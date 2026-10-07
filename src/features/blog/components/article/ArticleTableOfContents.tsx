import React from 'react';
import { ArticleSection } from '../../../../types/blog.ts';
import { useI18n } from '../../../../context/I18nContext.tsx';
import { ListOrdered, ChevronRight, Share2, Copy } from 'lucide-react';
import { useToast } from '../../../../context/ToastContext.tsx';

interface ArticleTableOfContentsProps {
  sections: ArticleSection[];
  activeHeadingIndex: number;
  onSelectSection: (index: number) => void;
  tags?: string[];
}

export const ArticleTableOfContents: React.FC<ArticleTableOfContentsProps> = ({
  sections,
  activeHeadingIndex,
  onSelectSection,
  tags,
}) => {
  const { language } = useI18n();
  const { showToast } = useToast();

  const handleCopyLink = () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      const msg = language === 'uk'
        ? 'Пряме посилання на розділ скопійовано'
        : language === 'en'
        ? 'Section link copied to clipboard'
        : 'Ссылка на раздел скопирована';
      showToast(msg, 'success');
    }
  };

  return (
    <aside className="space-y-6">
      <div className="bg-[var(--md-sys-color-surface-container)] rounded-[20px] p-5 border border-[var(--md-sys-color-outline-variant)]/60 shadow-2xs space-y-4">
        <div className="flex items-center justify-between border-b border-[var(--md-sys-color-outline-variant)]/30 pb-3">
          <span className="text-[11px] font-mono uppercase tracking-wider text-[var(--md-sys-color-primary)] font-semibold flex items-center gap-1.5">
            <ListOrdered className="w-3.5 h-3.5" />
            <span>
              {language === 'en' ? 'Table of Contents' : language === 'ru' ? 'Содержание статьи' : 'Зміст матеріалу'}
            </span>
          </span>
          <span className="text-[11px] font-mono text-[var(--md-sys-color-on-surface-variant)]">
            {sections.length} {language === 'en' ? 'sections' : language === 'ru' ? 'раздела' : 'розділи'}
          </span>
        </div>

        <nav aria-label="Table of contents" className="space-y-1.5">
          {sections.map((section, idx) => {
            const isActive = activeHeadingIndex === idx;
            return (
              <button
                key={idx}
                onClick={() => onSelectSection(idx)}
                className={`w-full text-left p-2.5 rounded-[12px] text-[13px] leading-snug transition-all cursor-pointer flex items-center justify-between group ${
                  isActive
                    ? 'bg-[var(--md-sys-color-primary-container)] text-[var(--md-sys-color-on-primary-container)] font-medium shadow-2xs'
                    : 'text-[var(--md-sys-color-on-surface-variant)] hover:bg-[var(--md-sys-color-surface)] hover:text-[var(--md-sys-color-on-surface)]'
                }`}
              >
                <div className="flex items-center gap-2 min-w-0">
                  <span className="font-mono text-[11px] opacity-60 shrink-0">
                    0{idx + 1}
                  </span>
                  <span className="line-clamp-2">{section.heading}</span>
                </div>
                <ChevronRight
                  className={`w-3.5 h-3.5 shrink-0 ml-1.5 transition-transform ${
                    isActive ? 'text-[var(--md-sys-color-primary)] translate-x-0.5' : 'opacity-0 group-hover:opacity-60'
                  }`}
                />
              </button>
            );
          })}
        </nav>

        {/* Quick share action inside TOC */}
        <div className="pt-3 border-t border-[var(--md-sys-color-outline-variant)]/30 flex items-center justify-between">
          <button
            onClick={handleCopyLink}
            className="inline-flex items-center gap-1.5 text-[12px] text-[var(--md-sys-color-primary)] hover:underline cursor-pointer"
          >
            <Copy className="w-3 h-3" />
            <span>{language === 'en' ? 'Copy section link' : language === 'ru' ? 'Скопировать ссылку' : 'Скопіювати посилання'}</span>
          </button>
        </div>
      </div>

      {/* Tags / Categories */}
      {tags && tags.length > 0 && (
        <div className="space-y-2 p-2">
          <span className="text-[11px] font-mono uppercase tracking-wider text-[var(--md-sys-color-on-surface-variant)] font-semibold block">
            {language === 'en' ? 'Core Concepts' : language === 'ru' ? 'Ключевые понятия' : 'Ключові поняття'}
          </span>
          <div className="flex flex-wrap gap-1.5">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="text-[12px] text-[var(--md-sys-color-on-surface-variant)] bg-[var(--md-sys-color-surface-container)] px-2.5 py-1 rounded-md border border-[var(--md-sys-color-outline-variant)]/30 font-medium"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      )}
    </aside>
  );
};
