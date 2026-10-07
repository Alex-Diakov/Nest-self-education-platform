import React, { useState, useRef, useEffect } from 'react';
import { useI18n } from '../../context/I18nContext.tsx';
import { SupportedLanguage } from '../../types/i18n.ts';
import { Globe, ChevronDown, Check } from 'lucide-react';

interface LanguageSelectorProps {
  compact?: boolean;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({ compact = false }) => {
  const { language, setLanguage, availableLanguages } = useI18n();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentOption = availableLanguages.find(l => l.code === language) || availableLanguages[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleSelect = (code: SupportedLanguage) => {
    setLanguage(code);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-[var(--radius-btn,9999px)] border border-[var(--md-sys-color-outline-variant)]/60 bg-[var(--md-sys-color-surface-container)] hover:bg-[var(--md-sys-color-surface-container-high)] text-[var(--md-sys-color-on-surface)] transition-all cursor-pointer text-[12px] font-medium min-h-[36px]"
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-label="Выбор языка"
        title="Сменить язык интерфейса"
      >
        <span className="text-[13px]" aria-hidden="true">{currentOption.flag}</span>
        <span>{compact ? currentOption.shortLabel : currentOption.shortLabel}</span>
        <ChevronDown className={`w-3 h-3 text-[var(--md-sys-color-on-surface-variant)] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-1.5 w-40 rounded-[var(--radius-input,12px)] bg-[var(--md-sys-color-surface-container-high)] border border-[var(--md-sys-color-outline-variant)] shadow-lg py-1.5 z-50 animate-in fade-in zoom-in-95 duration-150">
          <div className="px-3 py-1 text-[10px] font-mono uppercase tracking-wider text-[var(--md-sys-color-on-surface-variant)] border-b border-[var(--md-sys-color-outline-variant)]/40 mb-1">
            Мова / Язык / Lang
          </div>
          {availableLanguages.map((option) => {
            const isSelected = option.code === language;
            return (
              <button
                key={option.code}
                onClick={() => handleSelect(option.code)}
                className={`w-full flex items-center justify-between px-3 py-2 text-left text-[12px] transition-colors cursor-pointer ${
                  isSelected
                    ? 'bg-[var(--md-sys-color-primary-container)] text-[var(--md-sys-color-on-primary-container)] font-semibold'
                    : 'text-[var(--md-sys-color-on-surface)] hover:bg-[var(--md-sys-color-surface-container-highest)]'
                }`}
              >
                <span className="flex items-center gap-2">
                  <span className="text-[14px]" aria-hidden="true">{option.flag}</span>
                  <span>{option.label}</span>
                </span>
                {isSelected && <Check className="w-3.5 h-3.5 text-[var(--md-sys-color-primary)]" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
