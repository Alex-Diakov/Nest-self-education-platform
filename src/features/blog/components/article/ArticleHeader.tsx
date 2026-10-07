import React from 'react';
import { BlogArticle } from '../../../../types/blog.ts';
import { useI18n } from '../../../../context/I18nContext.tsx';
import { useNavigation } from '../../../../context/NavigationContext.tsx';
import { ArrowLeft, Clock, Calendar, Bookmark, Share2, CheckCircle2 } from 'lucide-react';

interface ArticleHeaderProps {
  article: BlogArticle;
  fontSize: 'normal' | 'large' | 'xlarge';
  setFontSize: (size: 'normal' | 'large' | 'xlarge') => void;
  isBookmarked: boolean;
  onBookmark: () => void;
  onShare: () => void;
}

export const ArticleHeader: React.FC<ArticleHeaderProps> = ({
  article,
  fontSize,
  setFontSize,
  isBookmarked,
  onBookmark,
  onShare,
}) => {
  const { language, t } = useI18n();
  const { navigateTo } = useNavigation();

  return (
    <div className="border-b border-[var(--md-sys-color-outline-variant)]/30 pb-8 sm:pb-12">
      {/* Top Utility Bar: Back Navigation + Reading Customization */}
      <div className="flex items-center justify-between gap-4 py-3 mb-8">
        <button
          onClick={() => navigateTo('blog')}
          className="group inline-flex items-center gap-2 text-[13px] font-medium text-[var(--md-sys-color-on-surface-variant)] hover:text-[var(--md-sys-color-primary)] transition-colors cursor-pointer py-1"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span>{language === 'en' ? 'Knowledge Base' : language === 'ru' ? 'База знаний' : 'База знань'}</span>
          <span className="opacity-40">/</span>
          <span className="text-[var(--md-sys-color-primary)] font-semibold">{article.categoryLabel}</span>
        </button>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          {/* Typography Scale Toggle */}
          <div className="flex items-center bg-[var(--md-sys-color-surface-container)] rounded-[var(--radius-badge,8px)] p-0.5 border border-[var(--md-sys-color-outline-variant)]/40 text-[11px] font-mono">
            <button
              onClick={() => setFontSize('normal')}
              className={`px-2 py-1 rounded-[var(--radius-badge,4px)] transition-colors cursor-pointer ${
                fontSize === 'normal'
                  ? 'bg-[var(--md-sys-color-primary)] text-[var(--md-sys-color-on-primary)] font-bold shadow-2xs'
                  : 'text-[var(--md-sys-color-on-surface-variant)] hover:text-[var(--md-sys-color-on-surface)]'
              }`}
              title="Стандартний розмір шрифту (17px)"
            >
              A
            </button>
            <button
              onClick={() => setFontSize('large')}
              className={`px-2 py-1 rounded-[var(--radius-badge,4px)] transition-colors cursor-pointer ${
                fontSize === 'large'
                  ? 'bg-[var(--md-sys-color-primary)] text-[var(--md-sys-color-on-primary)] font-bold shadow-2xs'
                  : 'text-[var(--md-sys-color-on-surface-variant)] hover:text-[var(--md-sys-color-on-surface)]'
              }`}
              title="Збільшений розмір шрифту (19px)"
            >
              A+
            </button>
            <button
              onClick={() => setFontSize('xlarge')}
              className={`px-2 py-1 rounded-[var(--radius-badge,4px)] transition-colors cursor-pointer hidden sm:inline-block ${
                fontSize === 'xlarge'
                  ? 'bg-[var(--md-sys-color-primary)] text-[var(--md-sys-color-on-primary)] font-bold shadow-2xs'
                  : 'text-[var(--md-sys-color-on-surface-variant)] hover:text-[var(--md-sys-color-on-surface)]'
              }`}
              title="Максимальний розмір шрифту (21px)"
            >
              A++
            </button>
          </div>

          {/* Bookmark Button */}
          <button
            onClick={onBookmark}
            className={`p-2 rounded-[var(--radius-badge,8px)] border transition-all cursor-pointer ${
              isBookmarked
                ? 'bg-[var(--md-sys-color-primary-container)] text-[var(--md-sys-color-primary)] border-[var(--md-sys-color-primary)] shadow-2xs'
                : 'bg-[var(--md-sys-color-surface-container)] text-[var(--md-sys-color-on-surface-variant)] border-[var(--md-sys-color-outline-variant)]/40 hover:text-[var(--md-sys-color-on-surface)]'
            }`}
            title={language === 'en' ? 'Save article' : language === 'ru' ? 'В закладки' : 'Зберегти статтю'}
          >
            <Bookmark className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-current' : ''}`} />
          </button>

          {/* Share Button */}
          <button
            onClick={onShare}
            className="p-2 rounded-[var(--radius-badge,8px)] bg-[var(--md-sys-color-surface-container)] text-[var(--md-sys-color-on-surface-variant)] border border-[var(--md-sys-color-outline-variant)]/40 hover:text-[var(--md-sys-color-on-surface)] transition-all cursor-pointer shadow-2xs"
            title={language === 'en' ? 'Share publication' : language === 'ru' ? 'Поделиться' : 'Поділитися'}
          >
            <Share2 className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Editorial Header Hierarchy */}
      <div className="space-y-4 sm:space-y-6">
        {/* Unboxed Metadata (Zero-Pill Discipline) */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-[12px] sm:text-[13px] font-mono text-[var(--md-sys-color-on-surface-variant)]">
          <span className="font-semibold text-[var(--md-sys-color-primary)] uppercase tracking-wider">
            {article.categoryLabel}
          </span>
          <span aria-hidden="true" className="opacity-40">·</span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" />
            <span>{article.readTimeMinutes} {t('common.minutes')}</span>
          </span>
          <span aria-hidden="true" className="opacity-40">·</span>
          <span className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" />
            <span>{article.publishedDate}</span>
          </span>
          {article.updatedDate && (
            <>
              <span aria-hidden="true" className="opacity-40">·</span>
              <span className="text-[11px] opacity-75">
                {language === 'en' ? `Updated ${article.updatedDate}` : language === 'ru' ? `Обновлено: ${article.updatedDate}` : `Оновлено: ${article.updatedDate}`}
              </span>
            </>
          )}
        </div>

        {/* Headline */}
        <h1 className="text-fluid-display font-normal text-[var(--md-sys-color-on-surface)] leading-[1.18] tracking-tight text-balance-mobile">
          {article.title}
        </h1>

        {/* Subtitle / Editorial Hook */}
        {article.subtitle && (
          <p className="text-[17px] sm:text-[21px] font-normal leading-[1.5] text-[var(--md-sys-color-on-surface-variant)] italic max-w-4xl text-balance-mobile">
            {article.subtitle}
          </p>
        )}

        {/* Author Byline with Verified Badge */}
        <div className="flex items-center gap-3.5 pt-4">
          <div className="w-12 h-12 rounded-full bg-[var(--md-sys-color-primary-container)] text-[var(--md-sys-color-on-primary-container)] flex items-center justify-center font-bold text-[14px] shrink-0 border border-[var(--md-sys-color-primary)]/20 shadow-2xs">
            {article.author.avatarInitials}
          </div>
          <div>
            <div className="flex items-center gap-1.5 text-[15px] font-medium text-[var(--md-sys-color-on-surface)]">
              <span>{article.author.name}</span>
              {article.author.verified && (
                <CheckCircle2 className="w-4 h-4 text-[var(--md-sys-color-primary)] fill-[var(--md-sys-color-primary)]/20" />
              )}
            </div>
            <div className="text-[12px] text-[var(--md-sys-color-on-surface-variant)]">
              {article.author.role} · <span className="text-[var(--md-sys-color-primary)]">{article.author.affiliation}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
