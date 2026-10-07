import React, { ReactNode } from 'react';

export type M3BadgeVariant = 'primary' | 'secondary' | 'tertiary' | 'outline' | 'verified' | 'warning' | 'neutral';
export type M3BadgeSize = 'sm' | 'md';

export interface M3BadgeProps {
  children: ReactNode;
  variant?: M3BadgeVariant;
  size?: M3BadgeSize;
  icon?: ReactNode;
  className?: string;
}

export const M3Badge: React.FC<M3BadgeProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  className = '',
}) => {
  const sizeClasses = {
    sm: 'text-[10px] px-2 py-0.5 gap-1',
    md: 'text-[11px] sm:text-[12px] px-2.5 py-1 gap-1.5',
  }[size];

  const variantClasses: Record<M3BadgeVariant, string> = {
    primary: 'bg-[var(--md-sys-color-primary-container)] text-[var(--md-sys-color-on-primary-container)] font-medium',
    secondary: 'bg-[var(--md-sys-color-secondary-container)] text-[var(--md-sys-color-on-secondary-container)] font-medium',
    tertiary: 'bg-[var(--md-sys-color-tertiary-container)] text-[var(--md-sys-color-on-tertiary-container)] font-medium',
    outline: 'border border-[var(--md-sys-color-outline-variant)] text-[var(--md-sys-color-on-surface-variant)] bg-transparent',
    verified: 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20 font-medium',
    warning: 'bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/20 font-medium',
    neutral: 'bg-[var(--md-sys-color-surface-container-high)] text-[var(--md-sys-color-on-surface-variant)]',
  };

  return (
    <span
      className={`inline-flex items-center tracking-wide font-sans rounded-[var(--radius-badge,6px)] uppercase shrink-0 select-none ${sizeClasses} ${variantClasses[variant]} ${className}`}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};
