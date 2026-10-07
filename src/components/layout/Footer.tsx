import React, { useState } from 'react';
import { useNavigation } from '../../context/NavigationContext.tsx';
import { useI18n } from '../../context/I18nContext.tsx';
import { DesignPresetsModal } from './DesignPresetsModal.tsx';
import { Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  const { navigateTo } = useNavigation();
  const { t, language } = useI18n();
  const [isPresetsOpen, setIsPresetsOpen] = useState(false);

  return (
    <footer className="bg-[var(--md-sys-color-surface-container)] text-[var(--md-sys-color-on-surface-variant)] border-t border-[var(--md-sys-color-outline-variant)]/60 text-sm transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 lg:gap-10">
          {/* Brand info */}
          <div className="space-y-3 sm:col-span-2 md:col-span-1">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[var(--md-sys-color-primary)]" />
              <span className="text-[20px] font-semibold tracking-tight text-[var(--md-sys-color-on-surface)] font-display">
                NextSelf
              </span>
            </div>
            <p className="text-[13px] leading-relaxed text-[var(--md-sys-color-on-surface-variant)]">
              {t('footer.tagline', 'Система прикладних психотехнологій та інженерного перескладання мислення.')}
            </p>
          </div>

          {/* Navigation sections */}
          <div>
            <h3 className="text-[12px] font-semibold text-[var(--md-sys-color-primary)] uppercase tracking-wider mb-3">
              {t('footer.navigationTitle', 'Навігація')}
            </h3>
            <ul className="space-y-2 text-[13px]">
              <li>
                <button
                  onClick={() => navigateTo('home')}
                  className="hover:text-[var(--md-sys-color-on-surface)] transition-colors cursor-pointer text-left py-1 inline-block"
                >
                  {t('nav.home', 'Головна')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('offerings')}
                  className="hover:text-[var(--md-sys-color-on-surface)] transition-colors cursor-pointer text-left py-1 inline-block"
                >
                  {t('nav.offerings', 'Напрями')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('blog')}
                  className="hover:text-[var(--md-sys-color-on-surface)] transition-colors cursor-pointer text-left py-1 inline-block"
                >
                  {t('nav.blog', 'База знань')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('tests')}
                  className="hover:text-[var(--md-sys-color-on-surface)] transition-colors cursor-pointer text-left py-1 inline-block"
                >
                  {t('nav.tests', 'Сканери та тести')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('about')}
                  className="hover:text-[var(--md-sys-color-on-surface)] transition-colors cursor-pointer text-left py-1 inline-block"
                >
                  {t('nav.about', 'Про автора')}
                </button>
              </li>
            </ul>
          </div>

          {/* Tests and Scanners */}
          <div>
            <h3 className="text-[12px] font-semibold text-[var(--md-sys-color-primary)] uppercase tracking-wider mb-3">
              {t('footer.scannersTitle', 'Діагностика')}
            </h3>
            <ul className="space-y-2 text-[13px]">
              <li>
                <button
                  onClick={() => navigateTo('tests', { itemId: 'financial-scanner' })}
                  className="hover:text-[var(--md-sys-color-on-surface)] transition-colors cursor-pointer text-left py-1 inline-block"
                >
                  {language === 'en' ? 'Financial Bottleneck Scanner' : language === 'ru' ? 'Финансовый сканер' : 'Фінансовий сканер'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('tests', { itemId: 'hidden-conflict' })}
                  className="hover:text-[var(--md-sys-color-on-surface)] transition-colors cursor-pointer text-left py-1 inline-block"
                >
                  {language === 'en' ? 'Latent Conflict Profiler' : language === 'ru' ? 'Тест на конфликтность' : 'Тест на конфліктність'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('tests', { itemId: 'pcl5-stress-audit' })}
                  className="hover:text-[var(--md-sys-color-on-surface)] transition-colors cursor-pointer text-left py-1 inline-block"
                >
                  {language === 'en' ? 'PCL-5 Stress Audit' : language === 'ru' ? 'Аудит стресса (PCL-5)' : 'Аудит стресу (PCL-5)'}
                </button>
              </li>
            </ul>
          </div>

          {/* Rules and Legal */}
          <div>
            <h3 className="text-[12px] font-semibold text-[var(--md-sys-color-primary)] uppercase tracking-wider mb-3">
              {t('footer.legalTitle', 'Етика та конфіденційність')}
            </h3>
            <p className="text-[12px] leading-relaxed text-[var(--md-sys-color-on-surface-variant)] mb-2">
              {t('footer.confidentiality')}
            </p>
            <p className="text-[11px] leading-relaxed opacity-75">
              {t('footer.ethicsNotice')}
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-[var(--md-sys-color-outline-variant)]/40 flex flex-col sm:flex-row items-center justify-between text-[12px] text-[var(--md-sys-color-on-surface-variant)] gap-3">
          <p>© 2026 NextSelf — Олександр Дьяков. {t('footer.rights', 'Всі права захищені.')}</p>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsPresetsOpen(true)}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-[6px] border border-[var(--md-sys-color-outline-variant)]/60 text-[11px] font-mono hover:text-[var(--md-sys-color-primary)] hover:border-[var(--md-sys-color-primary)] transition-colors cursor-pointer select-none"
              title="Лабораторія дизайну: перемикання пресетів та токенів"
            >
              <Sparkles className="w-3.5 h-3.5 text-[var(--md-sys-color-primary)]" />
              <span>Стилі та пресети</span>
            </button>
            <span className="opacity-75">Material Design 3 · Fluid i18n</span>
          </div>
        </div>
      </div>

      <DesignPresetsModal
        isOpen={isPresetsOpen}
        onClose={() => setIsPresetsOpen(false)}
      />
    </footer>
  );
};
