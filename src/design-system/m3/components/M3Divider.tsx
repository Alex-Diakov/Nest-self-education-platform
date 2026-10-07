import React from 'react';

export interface M3DividerProps {
  spacing?: 'none' | 'sm' | 'md' | 'lg';
  className?: string;
}

export const M3Divider: React.FC<M3DividerProps> = ({
  spacing = 'md',
  className = '',
}) => {
  const marginClasses = {
    none: 'my-0',
    sm: 'my-3 sm:my-4',
    md: 'my-6 sm:my-8',
    lg: 'my-10 sm:my-14',
  }[spacing];

  return (
    <hr
      className={`border-0 border-t border-[var(--md-sys-color-outline-variant)]/40 w-full ${marginClasses} ${className}`}
    />
  );
};
