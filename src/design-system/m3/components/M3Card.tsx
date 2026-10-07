import React, { HTMLAttributes } from 'react';

export type M3CardVariant = 'elevated' | 'filled' | 'outlined';

export interface M3CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: M3CardVariant;
  interactive?: boolean;
}

export const M3Card: React.FC<M3CardProps> = ({
  children,
  variant = 'outlined',
  interactive = false,
  className = '',
  ...props
}) => {
  const baseClasses = 'rounded-[var(--radius-card,20px)] transition-all duration-200 overflow-hidden';

  const variantClasses: Record<M3CardVariant, string> = {
    elevated: `bg-[var(--md-sys-color-surface-container-low)] text-[var(--md-sys-color-on-surface)] m3-elevation-1 ${
      interactive ? 'hover:m3-elevation-2 cursor-pointer m3-state-layer' : ''
    }`,
    filled: `bg-[var(--md-sys-color-surface-container-highest)] text-[var(--md-sys-color-on-surface)] ${
      interactive ? 'hover:brightness-95 cursor-pointer m3-state-layer' : ''
    }`,
    outlined: `bg-[var(--md-sys-color-surface)] text-[var(--md-sys-color-on-surface)] border border-[var(--md-sys-color-outline-variant)] ${
      interactive ? 'hover:border-[var(--md-sys-color-outline)] hover:m3-elevation-1 cursor-pointer m3-state-layer' : ''
    }`,
  };

  return (
    <div
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
