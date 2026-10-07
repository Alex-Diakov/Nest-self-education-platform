import React, { useState } from 'react';
import { Search, Menu, X, ArrowUpRight } from 'lucide-react';
import { useNavigation } from '../../context/NavigationContext.tsx';
import { useSearchModal } from '../../context/SearchModalContext.tsx';
import { useI18n } from '../../context/I18nContext.tsx';
import { PageId } from '../../types/navigation.ts';
import { M3ThemePalettePicker } from '../../design-system/m3/components/M3ThemePalettePicker.tsx';
import { LanguageSelector } from './LanguageSelector.tsx';
import { M3Button } from '../../design-system/m3/components/M3Button.tsx';

export const Header: React.FC = () => {
  const { currentRoute, navigateTo } = useNavigation();
  const { openSearch } = useSearchModal();
  const { t } = useI18n();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: PageId; label: string }[] = [
    { id: 'home', label: t('nav.home', 'Головна') },
    { id: 'tests', label: t('nav.tests', 'Сканери та тести') },
    { id: 'offerings', label: t('nav.offerings', 'Напрями') },
    { id: 'blog', label: t('nav.blog', 'База знань') },
    { id: 'services', label: t('nav.services', 'Сервіси') },
    { id: 'about', label: t('nav.about', 'Про автора') },
  ];

  const handleNavClick = (id: PageId) => {
    navigateTo(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[var(--md-sys-color-surface)] text-[var(--md-sys-color-on-surface)] border-b border-[var(--md-sys-color-outline-variant)]/60 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Zone 1: NextSelf Brand Wordmark */}
          <button
            onClick={() => handleNavClick('home')}
            className="text-[20px] sm:text-[22px] leading-none font-semibold tracking-tight text-[var(--md-sys-color-on-surface)] font-display hover:opacity-85 transition-opacity cursor-pointer text-left flex items-center gap-2 py-2"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[var(--md-sys-color-primary)]" />
            <span className="font-bold">NextSelf</span>
          </button>

          {/* Zone 2: Desktop Navigation Pills */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Основна навігація">
            {navItems.map(item => {
              const isActive = currentRoute.page === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`m3-state-layer text-[13px] lg:text-[14px] font-medium tracking-[0.1px] transition-all cursor-pointer px-3.5 py-1.5 rounded-[var(--radius-btn,9999px)] whitespace-nowrap ${
                    isActive
                      ? 'bg-[var(--md-sys-color-secondary-container)] text-[var(--md-sys-color-on-secondary-container)] font-semibold shadow-2xs'
                      : 'text-[var(--md-sys-color-on-surface-variant)] hover:text-[var(--md-sys-color-on-surface)]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Actions (Search, Language, M3 Theme Picker, Consultation CTA, Mobile Menu) */}
          <div className="flex items-center gap-1 sm:gap-2">
            <button
              onClick={openSearch}
              className="m3-state-layer w-9 h-9 sm:w-10 sm:h-10 rounded-[var(--radius-btn,9999px)] flex items-center justify-center text-[var(--md-sys-color-on-surface-variant)] hover:text-[var(--md-sys-color-on-surface)] transition-colors cursor-pointer"
              title="Пошук (Cmd+K)"
              aria-label="Пошук по платформі"
            >
              <Search className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            {/* Language Selector */}
            <LanguageSelector compact />

            {/* M3 Palette & Mode Picker */}
            <M3ThemePalettePicker />

            <div className="hidden sm:block ml-1">
              <M3Button
                size="sm"
                variant="filled"
                onClick={() => handleNavClick('offerings')}
                trailingIcon={<ArrowUpRight className="w-3.5 h-3.5" />}
              >
                {t('nav.bookConsultation', 'Записатися')}
              </M3Button>
            </div>

            {/* Mobile menu toggle with 48px touch target */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden m3-state-layer w-10 h-10 rounded-[var(--radius-btn,9999px)] flex items-center justify-center text-[var(--md-sys-color-on-surface-variant)] hover:text-[var(--md-sys-color-on-surface)]"
              aria-label={mobileMenuOpen ? 'Закрити меню' : 'Відкрити меню'}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer (Accessible, touch-friendly) */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[var(--md-sys-color-outline-variant)] bg-[var(--md-sys-color-surface-container)] px-4 pt-3 pb-6 space-y-2 shadow-xl animate-in fade-in slide-in-from-top-2">
          <div className="flex items-center justify-between pb-2 border-b border-[var(--md-sys-color-outline-variant)]/40 px-1">
            <span className="text-[12px] font-medium text-[var(--md-sys-color-on-surface-variant)]">Мова інтерфейсу:</span>
            <LanguageSelector />
          </div>

          <div className="space-y-1 pt-1">
            {navItems.map(item => {
              const isActive = currentRoute.page === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-[var(--radius-btn,9999px)] text-[15px] font-medium transition-colors m3-state-layer min-h-[48px] flex items-center ${
                    isActive
                      ? 'bg-[var(--md-sys-color-secondary-container)] text-[var(--md-sys-color-on-secondary-container)] font-semibold'
                      : 'text-[var(--md-sys-color-on-surface-variant)] hover:text-[var(--md-sys-color-on-surface)]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          <div className="pt-3">
            <M3Button
              fullWidth
              size="lg"
              variant="filled"
              onClick={() => handleNavClick('offerings')}
              className="min-h-[48px]"
            >
              {t('nav.bookConsultation', 'Записатися на консультацію')}
            </M3Button>
          </div>
        </div>
      )}
    </header>
  );
};
