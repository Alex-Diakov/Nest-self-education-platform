import React, { ReactNode } from 'react';
import { Lightbulb, Wrench, AlertTriangle, Quote } from 'lucide-react';

export type M3CalloutVariant = 'insight' | 'methodology' | 'warning' | 'quote';

export interface M3CalloutProps {
  variant?: M3CalloutVariant;
  title?: string;
  author?: string;
  authorRole?: string;
  children: ReactNode;
  className?: string;
}

export const M3Callout: React.FC<M3CalloutProps> = ({
  variant = 'insight',
  title,
  author,
  authorRole,
  children,
  className = '',
}) => {
  if (variant === 'quote') {
    return (
      <blockquote
        className={`my-8 p-6 sm:p-8 rounded-[var(--radius-card,20px)] bg-[var(--md-sys-color-surface-container)] border-l-4 border-[var(--md-sys-color-primary)] relative ${className}`}
      >
        <Quote className="w-8 h-8 text-[var(--md-sys-color-primary)]/20 absolute top-4 right-4" />
        <div className="font-serif italic text-[17px] sm:text-[20px] text-[var(--md-sys-color-on-surface)] leading-relaxed relative z-10">
          «{children}»
        </div>
        {author && (
          <footer className="mt-4 pt-3 border-t border-[var(--md-sys-color-outline-variant)]/40 flex items-center gap-2 text-[12px] sm:text-[13px] text-[var(--md-sys-color-on-surface-variant)]">
            <span className="font-semibold text-[var(--md-sys-color-on-surface)]">{author}</span>
            {authorRole && <span>· {authorRole}</span>}
          </footer>
        )}
      </blockquote>
    );
  }

  const config = {
    insight: {
      border: 'border-l-4 border-[var(--md-sys-color-primary)]',
      bg: 'bg-[var(--md-sys-color-surface-container)]',
      icon: <Lightbulb className="w-4 h-4 text-[var(--md-sys-color-primary)] shrink-0" />,
      defaultTitle: 'Нейробіологічний інсайт',
    },
    methodology: {
      border: 'border-l-4 border-[var(--md-sys-color-secondary)]',
      bg: 'bg-[var(--md-sys-color-surface-container)]',
      icon: <Wrench className="w-4 h-4 text-[var(--md-sys-color-secondary)] shrink-0" />,
      defaultTitle: 'Інженерний протокол',
    },
    warning: {
      border: 'border-l-4 border-amber-500',
      bg: 'bg-amber-500/5 dark:bg-amber-500/10',
      icon: <AlertTriangle className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />,
      defaultTitle: 'Соматичне застереження',
    },
  }[variant];

  return (
    <aside
      className={`my-6 p-5 sm:p-6 rounded-[var(--radius-card,20px)] ${config.bg} ${config.border} border-t border-r border-b border-[var(--md-sys-color-outline-variant)]/30 space-y-2 ${className}`}
    >
      <div className="flex items-center gap-2 text-[13px] font-semibold text-[var(--md-sys-color-on-surface)]">
        {config.icon}
        <span>{title || config.defaultTitle}</span>
      </div>
      <div className="text-[14px] leading-relaxed text-[var(--md-sys-color-on-surface-variant)]">
        {children}
      </div>
    </aside>
  );
};
