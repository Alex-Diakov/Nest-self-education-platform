import React, { ButtonHTMLAttributes, ReactNode } from 'react';

export type M3ButtonVariant = 'filled' | 'filled-tonal' | 'elevated' | 'outlined' | 'text' | 'fab';

export interface M3ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: M3ButtonVariant;
  icon?: ReactNode;
  trailingIcon?: ReactNode;
  fullWidth?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const M3Button: React.FC<M3ButtonProps> = ({
  children,
  variant = 'filled',
  icon,
  trailingIcon,
  fullWidth = false,
  size = 'md',
  className = '',
  disabled,
  ...props
}) => {
  const baseClasses = 'm3-state-layer inline-flex items-center justify-center font-medium font-sans transition-all duration-200 cursor-pointer select-none whitespace-nowrap shrink-0 disabled:opacity-38 disabled:pointer-events-none';

  const sizeClasses = {
    sm: 'h-8 px-3 text-[12px] gap-1.5 rounded-[var(--radius-btn,9999px)]',
    md: 'h-10 px-5 text-[14px] tracking-[0.1px] gap-2 rounded-[var(--radius-btn,9999px)]',
    lg: 'h-12 px-6 text-[15px] gap-2.5 rounded-[var(--radius-btn,9999px)]',
  }[size];

  const variantClasses: Record<M3ButtonVariant, string> = {
    filled: 'bg-[var(--md-sys-color-primary)] text-[var(--md-sys-color-on-primary)] shadow-xs hover:shadow-sm active:shadow-xs',
    'filled-tonal': 'bg-[var(--md-sys-color-secondary-container)] text-[var(--md-sys-color-on-secondary-container)]',
    elevated: 'bg-[var(--md-sys-color-surface-container-low)] text-[var(--md-sys-color-primary)] m3-elevation-1 hover:m3-elevation-2 active:m3-elevation-1',
    outlined: 'border border-[var(--md-sys-color-outline)] text-[var(--md-sys-color-primary)] bg-transparent',
    text: 'text-[var(--md-sys-color-primary)] bg-transparent px-3',
    fab: 'h-14 px-5 text-[14px] font-semibold rounded-[16px] bg-[var(--md-sys-color-primary-container)] text-[var(--md-sys-color-on-primary-container)] m3-elevation-3 hover:m3-elevation-4 active:m3-elevation-3 gap-3',
  };

  const widthClass = fullWidth ? 'w-full' : '';

  return (
    <button
      className={`${baseClasses} ${variant === 'fab' ? '' : sizeClasses} ${variantClasses[variant]} ${widthClass} ${className}`}
      disabled={disabled}
      {...props}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      {children && <span>{children}</span>}
      {trailingIcon && <span className="shrink-0">{trailingIcon}</span>}
    </button>
  );
};
