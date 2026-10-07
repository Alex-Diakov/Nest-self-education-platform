import React, { InputHTMLAttributes, forwardRef, useState } from 'react';

export interface M3TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  helperText?: string;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
}

export const M3TextField = forwardRef<HTMLInputElement, M3TextFieldProps>(({
  label,
  error,
  helperText,
  leadingIcon,
  trailingIcon,
  className = '',
  value,
  defaultValue,
  onFocus,
  onBlur,
  id,
  ...props
}, ref) => {
  const [isFocused, setIsFocused] = useState(false);
  const inputId = id || `m3-input-${Math.random().toString(36).substring(2, 9)}`;

  const hasValue = (value !== undefined && String(value).length > 0) || (defaultValue !== undefined && String(defaultValue).length > 0);
  const isFloated = isFocused || hasValue;

  return (
    <div className="w-full relative pt-2">
      <div
        className={`relative flex items-center min-h-[56px] px-4 rounded-[var(--radius-input,12px)] border transition-all duration-200 bg-[var(--md-sys-color-surface)] ${
          error
            ? 'border-[var(--md-sys-color-error)] ring-1 ring-[var(--md-sys-color-error)]'
            : isFocused
            ? 'border-[var(--md-sys-color-primary)] ring-2 ring-[var(--md-sys-color-primary)]/20'
            : 'border-[var(--md-sys-color-outline)] hover:border-[var(--md-sys-color-on-surface)]'
        } ${className}`}
      >
        {leadingIcon && (
          <span className="mr-3 text-[var(--md-sys-color-on-surface-variant)] shrink-0">
            {leadingIcon}
          </span>
        )}

        <div className="relative flex-1 h-full py-2">
          {/* M3 Floating Label */}
          <label
            htmlFor={inputId}
            className={`absolute left-0 transition-all duration-200 pointer-events-none select-none ${
              isFloated
                ? '-top-4 text-[12px] font-medium tracking-[0.4px] px-1 bg-[var(--md-sys-color-surface)] ' +
                  (error
                    ? 'text-[var(--md-sys-color-error)]'
                    : isFocused
                    ? 'text-[var(--md-sys-color-primary)]'
                    : 'text-[var(--md-sys-color-on-surface-variant)]')
                : 'top-2 text-[15px] text-[var(--md-sys-color-on-surface-variant)]'
            }`}
          >
            {label}
          </label>

          <input
            ref={ref}
            id={inputId}
            value={value}
            defaultValue={defaultValue}
            onFocus={(e) => {
              setIsFocused(true);
              onFocus?.(e);
            }}
            onBlur={(e) => {
              setIsFocused(false);
              onBlur?.(e);
            }}
            className="w-full bg-transparent text-[16px] text-[var(--md-sys-color-on-surface)] outline-hidden pt-1"
            {...props}
          />
        </div>

        {trailingIcon && (
          <span className="ml-3 text-[var(--md-sys-color-on-surface-variant)] shrink-0">
            {trailingIcon}
          </span>
        )}
      </div>

      {/* Supporting/Error Text */}
      {(error || helperText) && (
        <p
          className={`px-4 pt-1 text-[12px] tracking-[0.4px] ${
            error
              ? 'text-[var(--md-sys-color-error)] font-medium'
              : 'text-[var(--md-sys-color-on-surface-variant)]'
          }`}
        >
          {error || helperText}
        </p>
      )}
    </div>
  );
});

M3TextField.displayName = 'M3TextField';
