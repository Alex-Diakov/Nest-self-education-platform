import React from 'react';
import { useToast } from '../../context/ToastContext.tsx';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export const ToastContainer: React.FC = () => {
  const { toasts, dismissToast } = useToast();

  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-6 right-4 sm:right-6 left-4 sm:left-auto z-50 flex flex-col gap-2.5 max-w-md pointer-events-none">
      {toasts.map(toast => {
        const icons = {
          success: <CheckCircle2 className="w-5 h-5 text-emerald-300 shrink-0 mt-0.5" />,
          error: <AlertCircle className="w-5 h-5 text-rose-300 shrink-0 mt-0.5" />,
          info: <Info className="w-5 h-5 text-[var(--md-sys-color-inverse-primary)] shrink-0 mt-0.5" />,
        }[toast.type];

        return (
          <div
            key={toast.id}
            role="status"
            className="pointer-events-auto flex items-center justify-between gap-3 px-4 py-3 bg-[var(--md-sys-color-inverse-surface)] text-[var(--md-sys-color-inverse-on-surface)] rounded-[var(--radius-input,12px)] m3-elevation-3 transition-all animate-in fade-in slide-in-from-bottom-3"
          >
            <div className="flex items-center gap-3">
              {icons}
              <div className="text-[14px] leading-tight font-sans">
                {toast.message}
              </div>
            </div>
            <button
              onClick={() => dismissToast(toast.id)}
              className="m3-state-layer p-1 text-[var(--md-sys-color-inverse-on-surface)]/70 hover:text-[var(--md-sys-color-inverse-on-surface)] rounded-full shrink-0"
              aria-label="Скрыть уведомление"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        );
      })}
    </div>
  );
};
