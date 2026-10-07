import React, { useEffect, ReactNode } from 'react';
import { X } from 'lucide-react';

export interface M3DialogProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  subtitle?: string;
  icon?: ReactNode;
  children: ReactNode;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
}

export const M3Dialog: React.FC<M3DialogProps> = ({
  isOpen,
  onClose,
  title,
  subtitle,
  icon,
  children,
  maxWidth = 'md',
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const maxWidthClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2xl': 'max-w-2xl',
  }[maxWidth];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* M3 Scrim with touch dismiss */}
      <div
        className="fixed inset-0 bg-[var(--md-sys-color-scrim)]/40 backdrop-blur-xs transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* M3 Dialog Container */}
      <div
        role="dialog"
        aria-modal="true"
        className={`relative w-full ${maxWidthClasses} bg-[var(--md-sys-color-surface-container-high)] text-[var(--md-sys-color-on-surface)] rounded-[var(--radius-dialog,24px)] m3-elevation-3 overflow-hidden z-10 transition-transform my-auto sm:my-8 p-5 sm:p-8 space-y-4 sm:space-y-5 border border-[var(--md-sys-color-outline-variant)]/40 max-h-[92vh] flex flex-col`}
      >
        {icon && (
          <div className="text-[var(--md-sys-color-secondary)] mb-1 shrink-0">
            {icon}
          </div>
        )}

        <div className="flex items-start justify-between gap-3 shrink-0">
          <div className="space-y-1">
            {title && (
              <h2 className="text-[20px] sm:text-[24px] font-normal leading-snug font-display text-[var(--md-sys-color-on-surface)]">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-[12px] sm:text-[14px] leading-[18px] sm:leading-[20px] text-[var(--md-sys-color-on-surface-variant)]">
                {subtitle}
              </p>
            )}
          </div>
          <button
            onClick={onClose}
            className="m3-state-layer min-w-[44px] min-h-[44px] flex items-center justify-center text-[var(--md-sys-color-on-surface-variant)] hover:text-[var(--md-sys-color-on-surface)] rounded-full transition-colors shrink-0"
            aria-label="Закрыть диалог"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="overflow-y-auto pr-1 flex-1">
          {children}
        </div>
      </div>
    </div>
  );
};
