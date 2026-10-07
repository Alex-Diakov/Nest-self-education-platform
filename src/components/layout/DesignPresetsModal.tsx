import React, { useState } from 'react';
import { M3Dialog } from '../../design-system/m3/components/M3Dialog.tsx';
import { M3Button } from '../../design-system/m3/components/M3Button.tsx';
import { M3Badge } from '../../design-system/m3/components/M3Badge.tsx';
import { DESIGN_PRESETS, applyDesignPreset, setDesignToken } from '../../design-system/tokens/themePresets.ts';
import { Palette, Check, Sparkles, Sliders } from 'lucide-react';

export interface DesignPresetsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DesignPresetsModal: React.FC<DesignPresetsModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [activePresetId, setActivePresetId] = useState<string>('editorial-modern');
  const [activeRadiusBtn, setActiveRadiusBtn] = useState<string>('9999px');

  const handleSelectPreset = (id: string) => {
    setActivePresetId(id);
    applyDesignPreset(id);
  };

  const handleSetButtonRadius = (val: string) => {
    setActiveRadiusBtn(val);
    setDesignToken('radius-btn', val);
  };

  return (
    <M3Dialog
      isOpen={isOpen}
      onClose={onClose}
      title="Лабораторія дизайну та пресетів"
      subtitle="Тестуйте різні візуальні архетипи та скруглення наживо перед фінальним редизайном"
      icon={<Palette className="w-6 h-6 text-[var(--md-sys-color-primary)]" />}
      maxWidth="lg"
    >
      <div className="space-y-6 pt-2">
        {/* Preset Selector */}
        <div className="space-y-3">
          <label className="text-[12px] font-mono uppercase tracking-wider text-[var(--md-sys-color-primary)] font-semibold flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Готові візуальні архетипи (Theme Presets)</span>
          </label>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {Object.values(DESIGN_PRESETS).map(preset => {
              const isSelected = activePresetId === preset.id;
              return (
                <button
                  key={preset.id}
                  onClick={() => handleSelectPreset(preset.id)}
                  className={`p-3.5 rounded-[var(--radius-card,16px)] text-left border transition-all cursor-pointer select-none space-y-1.5 ${
                    isSelected
                      ? 'bg-[var(--md-sys-color-secondary-container)] text-[var(--md-sys-color-on-secondary-container)] border-[var(--md-sys-color-primary)] ring-2 ring-[var(--md-sys-color-primary)]/20'
                      : 'bg-[var(--md-sys-color-surface)] text-[var(--md-sys-color-on-surface)] border-[var(--md-sys-color-outline-variant)] hover:border-[var(--md-sys-color-outline)]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-[14px]">{preset.name}</span>
                    {isSelected && <Check className="w-4 h-4 text-[var(--md-sys-color-primary)]" />}
                  </div>
                  <p className="text-[11px] opacity-80 leading-snug line-clamp-2">
                    {preset.description}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Live Button Radius Switcher */}
        <div className="space-y-2 pt-2 border-t border-[var(--md-sys-color-outline-variant)]/40">
          <label className="text-[12px] font-mono uppercase tracking-wider text-[var(--md-sys-color-primary)] font-semibold flex items-center gap-1.5">
            <Sliders className="w-3.5 h-3.5" />
            <span>Форма кнопок на сайті (--radius-btn)</span>
          </label>

          <div className="flex flex-wrap gap-2">
            {[
              { label: 'Плавні / Pill (9999px)', val: '9999px' },
              { label: 'Сучасні (8px)', val: '8px' },
              { label: 'Строгі / Sharp (2px)', val: '2px' },
            ].map(item => (
              <button
                key={item.val}
                onClick={() => handleSetButtonRadius(item.val)}
                className={`px-3 py-1.5 rounded-[8px] text-[12px] font-medium border cursor-pointer transition-colors ${
                  activeRadiusBtn === item.val
                    ? 'bg-[var(--md-sys-color-primary)] text-[var(--md-sys-color-on-primary)] border-transparent'
                    : 'bg-transparent text-[var(--md-sys-color-on-surface)] border-[var(--md-sys-color-outline-variant)]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive UI Kit Preview Row */}
        <div className="p-4 rounded-[12px] bg-[var(--md-sys-color-surface-container)] border border-[var(--md-sys-color-outline-variant)]/40 space-y-3">
          <span className="text-[11px] font-mono text-[var(--md-sys-color-on-surface-variant)] uppercase tracking-wider block">
            Живий тест компонентів у поточному стилі:
          </span>
          <div className="flex flex-wrap items-center gap-3">
            <M3Button variant="filled" size="sm">
              Головна кнопка
            </M3Button>
            <M3Button variant="outlined" size="sm">
              Контурна
            </M3Button>
            <M3Badge variant="verified" size="sm">
              Верифіковано
            </M3Badge>
            <M3Badge variant="warning" size="sm">
              Стрес-тригер
            </M3Badge>
          </div>
        </div>

        {/* Playbook Reference */}
        <div className="text-[12px] text-[var(--md-sys-color-on-surface-variant)] bg-[var(--md-sys-color-surface)] p-3 rounded-[8px] border border-[var(--md-sys-color-outline-variant)]/30 space-y-1">
          <p className="font-semibold text-[var(--md-sys-color-on-surface)]">
            💡 Як зафіксувати дизайн назавжди:
          </p>
          <p>
            Відкрийте файл <code className="font-mono text-[var(--md-sys-color-primary)]">src/design-system/tokens/design-tokens.css</code> і вкажіть ваші фінальні значення шрифтів та кольорів. Деталі у <code className="font-mono text-[var(--md-sys-color-primary)]">REDESIGN_PLAYBOOK.md</code>.
          </p>
        </div>

        <div className="flex justify-end pt-2">
          <M3Button variant="filled" onClick={onClose}>
            Зрозуміло, закрити
          </M3Button>
        </div>
      </div>
    </M3Dialog>
  );
};
