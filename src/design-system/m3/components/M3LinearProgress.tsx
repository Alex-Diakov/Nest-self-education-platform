import React from 'react';

export interface M3LinearProgressProps {
  value: number; // 0 to 100
  max?: number;
  label?: string;
  showPercent?: boolean;
  className?: string;
}

export const M3LinearProgress: React.FC<M3LinearProgressProps> = ({
  value,
  max = 100,
  label,
  showPercent = true,
  className = '',
}) => {
  const percent = Math.min(100, Math.max(0, Math.round((value / max) * 100)));

  return (
    <div className={`w-full ${className}`}>
      {(label || showPercent) && (
        <div className="flex justify-between items-center text-[12px] text-[var(--md-sys-color-on-surface-variant)] mb-1.5 font-medium">
          {label && <span>{label}</span>}
          {showPercent && (
            <span className="font-mono tabular-nums text-[var(--md-sys-color-on-surface)]">
              {percent}%
            </span>
          )}
        </div>
      )}
      <div className="w-full h-1 bg-[var(--md-sys-color-surface-container-highest)] rounded-full overflow-hidden">
        <div
          className="h-full bg-[var(--md-sys-color-primary)] rounded-full transition-all duration-300"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
};
