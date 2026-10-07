import React from 'react';
import { ArrowUp, Share2, Bookmark } from 'lucide-react';
import { useI18n } from '../../../../context/I18nContext.tsx';

interface ArticleFloatingBarProps {
  progress: number;
  isBookmarked: boolean;
  onBookmark: () => void;
  onShare: () => void;
}

export const ArticleFloatingBar: React.FC<ArticleFloatingBarProps> = ({
  progress,
  isBookmarked,
  onBookmark,
  onShare,
}) => {
  const { language } = useI18n();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Only show when the user has scrolled past 10%
  if (progress < 10) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40">
      <div className="flex items-center gap-3 px-4 py-2 rounded-[var(--radius-btn,9999px)] bg-[var(--md-sys-color-surface-container-high)]/95 backdrop-blur-md border border-[var(--md-sys-color-outline-variant)]/60 shadow-lg text-[13px] text-[var(--md-sys-color-on-surface)] transition-all">
        {/* Progress Circular Badge */}
        <div className="flex items-center gap-1.5 font-mono text-[11px] font-bold text-[var(--md-sys-color-primary)]">
          <span>{Math.round(progress)}%</span>
          <span className="text-[10px] text-[var(--md-sys-color-on-surface-variant)] uppercase">
            {language === 'en' ? 'read' : language === 'ru' ? 'прочитано' : 'прочитано'}
          </span>
        </div>

        <span className="w-px h-4 bg-[var(--md-sys-color-outline-variant)]/60" />

        {/* Share Button */}
        <button
          onClick={onShare}
          className="p-1.5 rounded-[var(--radius-btn,9999px)] hover:bg-[var(--md-sys-color-surface)] text-[var(--md-sys-color-on-surface-variant)] hover:text-[var(--md-sys-color-on-surface)] transition-colors cursor-pointer"
          title="Поділитися"
        >
          <Share2 className="w-3.5 h-3.5" />
        </button>

        {/* Bookmark Button */}
        <button
          onClick={onBookmark}
          className={`p-1.5 rounded-[var(--radius-btn,9999px)] hover:bg-[var(--md-sys-color-surface)] transition-colors cursor-pointer ${
            isBookmarked
              ? 'text-[var(--md-sys-color-primary)]'
              : 'text-[var(--md-sys-color-on-surface-variant)] hover:text-[var(--md-sys-color-on-surface)]'
          }`}
          title="Зберегти"
        >
          <Bookmark className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-current' : ''}`} />
        </button>

        <span className="w-px h-4 bg-[var(--md-sys-color-outline-variant)]/60" />

        {/* Scroll to Top */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-1 text-[11px] font-mono text-[var(--md-sys-color-on-surface-variant)] hover:text-[var(--md-sys-color-primary)] transition-colors cursor-pointer"
        >
          <ArrowUp className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Top</span>
        </button>
      </div>
    </div>
  );
};
