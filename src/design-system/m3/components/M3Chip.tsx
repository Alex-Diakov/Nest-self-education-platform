import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import { Check } from 'lucide-react';

export type M3ChipVariant = 'filter' | 'assist' | 'suggestion';

export interface M3ChipProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: M3ChipVariant;
  selected?: boolean;
  icon?: ReactNode;
  count?: number;
}

export const M3Chip: React.FC<M3ChipProps> = ({
  children,
  variant = 'filter',
  selected = false,
  icon,
  count,
  className = '',
  ...props
}) => {
  const baseClasses = 'm3-state-layer inline-flex items-center justify-center h-8 px-3 rounded-[var(--radius-chip,9999px)] text-[13px] font-medium font-sans tracking-[0.1px] transition-all cursor-pointer whitespace-nowrap gap-1.5 select-none shrink-0';

  let stateClasses = '';

  if (variant === 'filter') {
    if (selected) {
      stateClasses = 'bg-[var(--md-sys-color-secondary-container)] text-[var(--md-sys-color-on-secondary-container)] font-semibold border-0 shadow-2xs';
    } else {
      stateClasses = 'bg-transparent text-[var(--md-sys-color-on-surface-variant)] border border-[var(--md-sys-color-outline-variant)] hover:border-[var(--md-sys-color-outline)] hover:text-[var(--md-sys-color-on-surface)]';
    }
  } else {
    // assist or suggestion
    stateClasses = 'bg-transparent text-[var(--md-sys-color-on-surface)] border border-[var(--md-sys-color-outline-variant)] hover:border-[var(--md-sys-color-outline)]';
  }

  return (
    <button
      type="button"
      className={`${baseClasses} ${stateClasses} ${className}`}
      {...props}
    >
      {selected && variant === 'filter' && (
        <Check className="w-3.5 h-3.5 text-[var(--md-sys-color-on-secondary-container)] stroke-[2.5]" />
      )}
      {!selected && icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {count !== undefined && (
        <span className="text-[11px] font-mono tabular-nums opacity-75">
          ({count})
        </span>
      )}
    </button>
  );
};
