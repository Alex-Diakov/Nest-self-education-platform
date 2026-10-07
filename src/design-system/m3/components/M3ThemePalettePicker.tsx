import React, { useState, useRef, useEffect } from 'react';
import { useM3Theme } from '../context/M3ThemeContext.tsx';
import { Palette, Moon, Sun } from 'lucide-react';
import { M3ThemeSeed } from '../tokens/colors.ts';

export const M3ThemePalettePicker: React.FC = () => {
  const { isDark, toggleDarkMode, themeSeed, setThemeSeed, availableSeeds } = useM3Theme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      window.addEventListener('mousedown', handleClickOutside);
    }
    return () => window.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  return (
    <div className="relative inline-flex items-center gap-1.5" ref={dropdownRef}>
      {/* Light / Dark Mode Toggle Button */}
      <button
        type="button"
        onClick={toggleDarkMode}
        className="m3-state-layer w-10 h-10 rounded-full flex items-center justify-center text-[var(--md-sys-color-on-surface-variant)] hover:text-[var(--md-sys-color-on-surface)] transition-colors cursor-pointer"
        title={isDark ? 'Переключить на светлую тему' : 'Переключить на темную тему'}
        aria-label="Переключение светлой и темной темы"
      >
        {isDark ? <Sun className="w-5 h-5 text-amber-300" /> : <Moon className="w-5 h-5" />}
      </button>

      {/* Palette Picker Trigger */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="m3-state-layer w-10 h-10 rounded-full flex items-center justify-center text-[var(--md-sys-color-on-surface-variant)] hover:text-[var(--md-sys-color-on-surface)] transition-colors cursor-pointer"
        title="Динамическая палитра Material 3"
        aria-label="Настройка палитры Material 3"
      >
        <Palette className="w-5 h-5" />
      </button>

      {/* Palette Dropdown Popover */}
      {isOpen && (
        <div className="absolute right-0 top-12 z-50 w-64 p-4 rounded-[16px] bg-[var(--md-sys-color-surface-container-high)] text-[var(--md-sys-color-on-surface)] border border-[var(--md-sys-color-outline-variant)]/50 m3-elevation-3 space-y-3 animate-in fade-in zoom-in-95">
          <div className="text-[12px] font-medium tracking-[0.4px] text-[var(--md-sys-color-on-surface-variant)] uppercase">
            Динамический акцент (M3 Seed)
          </div>

          <div className="space-y-1.5">
            {availableSeeds.map((seed) => {
              const isSelected = themeSeed === seed.id;
              return (
                <button
                  key={seed.id}
                  onClick={() => {
                    setThemeSeed(seed.id as M3ThemeSeed);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center justify-between p-2 rounded-[8px] text-[13px] transition-all cursor-pointer m3-state-layer ${
                    isSelected
                      ? 'bg-[var(--md-sys-color-secondary-container)] text-[var(--md-sys-color-on-secondary-container)] font-semibold'
                      : 'hover:bg-[var(--md-sys-color-surface-container-highest)] text-[var(--md-sys-color-on-surface)]'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span
                      className="w-4 h-4 rounded-full border border-black/10 shrink-0"
                      style={{ backgroundColor: seed.hex }}
                    />
                    <span>{seed.name}</span>
                  </div>
                  {isSelected && (
                    <span className="text-[11px] font-mono text-[var(--md-sys-color-primary)]">
                      ● Активна
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          <div className="pt-2 border-t border-[var(--md-sys-color-outline-variant)]/40 flex items-center justify-between text-[11px] text-[var(--md-sys-color-on-surface-variant)]">
            <span>Material You Tonal Scale</span>
            <span className="font-mono">M3 2026</span>
          </div>
        </div>
      )}
    </div>
  );
};
