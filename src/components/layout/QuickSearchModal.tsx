import React, { useState, useEffect } from 'react';
import { Search, BookOpen, CheckCircle, Wrench, GraduationCap, X } from 'lucide-react';
import { useSearchModal } from '../../context/SearchModalContext.tsx';
import { useNavigation } from '../../context/NavigationContext.tsx';
import { useI18n } from '../../context/I18nContext.tsx';
import { toolService } from '../../services/services/toolService.ts';
import { blogService } from '../../services/blog/blogService.ts';
import { testService } from '../../services/tests/testService.ts';
import { offeringsService } from '../../services/offerings/offeringsService.ts';

export const QuickSearchModal: React.FC = () => {
  const { isOpen, closeSearch } = useSearchModal();
  const { navigateTo } = useNavigation();
  const { language, t } = useI18n();
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) closeSearch();
        else setQuery('');
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, closeSearch]);

  if (!isOpen) return null;

  const q = query.trim().toLowerCase();

  const services = q ? toolService.getAllServices(language).filter(s =>
    s.title.toLowerCase().includes(q) || s.tagline.toLowerCase().includes(q)
  ) : [];

  const articles = q ? blogService.getAllArticles(language).filter(a =>
    a.title.toLowerCase().includes(q) || a.excerpt.toLowerCase().includes(q) || a.tags.some((tag: string) => tag.toLowerCase().includes(q))
  ) : [];

  const tests = q ? testService.getAllTests(language).filter(test =>
    test.title.toLowerCase().includes(q) || test.skillsTested.some((s: string) => s.toLowerCase().includes(q))
  ) : [];

  const offerings = q ? offeringsService.getAllOfferings(language).filter(o =>
    o.title.toLowerCase().includes(q) || o.shortDescription.toLowerCase().includes(q)
  ) : [];

  const hasResults = services.length > 0 || articles.length > 0 || tests.length > 0 || offerings.length > 0;

  const placeholderText = language === 'uk'
    ? 'Пошук по сканерах, статтях, напрямах...'
    : language === 'en'
    ? 'Search scanners, articles, programs...'
    : 'Поиск по сканерам, статьям, направлениям...';

  const emptyHintText = language === 'uk'
    ? 'Введіть ключове слово (наприклад: «тривога», «вигорання», «профайлінг», «переговори»)'
    : language === 'en'
    ? 'Type a keyword (e.g. "burnout", "anxiety", "profiling", "negotiation")'
    : 'Введите ключевое слово (например: «тревога», «выгорание», «профайлинг», «переговоры»)';

  const noResultsText = language === 'uk'
    ? `За запитом «${query}» нічого не знайдено.`
    : language === 'en'
    ? `No results found for "${query}".`
    : `По запросу «${query}» ничего не найдено.`;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-4 sm:pt-20 p-2.5 sm:p-4">
      {/* M3 Scrim */}
      <div
        className="fixed inset-0 bg-[var(--md-sys-color-scrim)]/40 backdrop-blur-xs transition-opacity"
        onClick={closeSearch}
      />

      {/* M3 Dialog / Search Surface */}
      <div className="relative w-full max-w-2xl bg-[var(--md-sys-color-surface-container-high)] text-[var(--md-sys-color-on-surface)] rounded-[var(--radius-dialog,24px)] m3-elevation-3 border border-[var(--md-sys-color-outline-variant)]/40 overflow-hidden z-10 transition-all max-h-[85vh] flex flex-col">
        {/* Search Top Bar */}
        <div className="flex items-center px-4 sm:px-5 py-3 sm:py-4 border-b border-[var(--md-sys-color-outline-variant)]/40 gap-2 sm:gap-3 shrink-0">
          <Search className="w-5 h-5 text-[var(--md-sys-color-on-surface-variant)] shrink-0" />
          <input
            autoFocus
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder={placeholderText}
            className="w-full text-[15px] sm:text-[16px] bg-transparent border-0 text-[var(--md-sys-color-on-surface)] focus:outline-hidden placeholder:text-[var(--md-sys-color-on-surface-variant)]/70 py-1"
          />
          <button
            onClick={closeSearch}
            className="m3-state-layer min-w-[40px] min-h-[40px] flex items-center justify-center text-[var(--md-sys-color-on-surface-variant)] hover:text-[var(--md-sys-color-on-surface)] rounded-[var(--radius-btn,9999px)] shrink-0"
            aria-label="Закрыть поиск"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results Area */}
        <div className="p-3 sm:p-4 overflow-y-auto divide-y divide-[var(--md-sys-color-outline-variant)]/30 flex-1">
          {!q && (
            <div className="py-8 text-center text-[13px] text-[var(--md-sys-color-on-surface-variant)]">
              {emptyHintText}
            </div>
          )}

          {q && !hasResults && (
            <div className="py-8 text-center text-[14px] text-[var(--md-sys-color-on-surface-variant)]">
              {noResultsText}
            </div>
          )}

          {/* Diagnostic Tests Matches */}
          {tests.length > 0 && (
            <div className="py-3">
              <span className="text-[11px] font-semibold text-[var(--md-sys-color-primary)] uppercase tracking-wider block mb-2 px-2">
                {language === 'uk' ? 'Діагностичні сканери' : language === 'en' ? 'Diagnostic Scanners' : 'Диагностические сканеры'}
              </span>
              <div className="space-y-1">
                {tests.map(test => (
                  <button
                    key={test.id}
                    onClick={() => {
                      navigateTo('tests', { itemId: test.slug });
                      closeSearch();
                    }}
                    className="w-full text-left p-3 rounded-[12px] hover:bg-[var(--md-sys-color-surface-container-highest)] flex items-start gap-3 transition-colors cursor-pointer m3-state-layer"
                  >
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-[14px] font-medium text-[var(--md-sys-color-on-surface)]">
                        {test.title}
                      </h4>
                      <p className="text-[12px] text-[var(--md-sys-color-on-surface-variant)] line-clamp-1">{test.overview}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Offerings Matches */}
          {offerings.length > 0 && (
            <div className="py-3">
              <span className="text-[11px] font-semibold text-[var(--md-sys-color-primary)] uppercase tracking-wider block mb-2 px-2">
                {language === 'uk' ? 'Напрями та сесії' : language === 'en' ? 'Programs & Sessions' : 'Направления и сессии'}
              </span>
              <div className="space-y-1">
                {offerings.map(o => (
                  <button
                    key={o.id}
                    onClick={() => {
                      navigateTo('offerings', { itemId: o.slug });
                      closeSearch();
                    }}
                    className="w-full text-left p-3 rounded-[12px] hover:bg-[var(--md-sys-color-surface-container-highest)] flex items-start gap-3 transition-colors cursor-pointer m3-state-layer"
                  >
                    <GraduationCap className="w-4 h-4 text-[var(--md-sys-color-primary)] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-[14px] font-medium text-[var(--md-sys-color-on-surface)]">
                        {o.title}
                      </h4>
                      <p className="text-[12px] text-[var(--md-sys-color-on-surface-variant)] line-clamp-1">{o.shortDescription}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Articles Matches */}
          {articles.length > 0 && (
            <div className="py-3">
              <span className="text-[11px] font-semibold text-[var(--md-sys-color-primary)] uppercase tracking-wider block mb-2 px-2">
                {language === 'uk' ? 'База знань та матеріали' : language === 'en' ? 'Articles & Protocols' : 'База знаний и статьи'}
              </span>
              <div className="space-y-1">
                {articles.map(a => (
                  <button
                    key={a.id}
                    onClick={() => {
                      navigateTo('blog', { itemId: a.slug });
                      closeSearch();
                    }}
                    className="w-full text-left p-3 rounded-[12px] hover:bg-[var(--md-sys-color-surface-container-highest)] flex items-start gap-3 transition-colors cursor-pointer m3-state-layer"
                  >
                    <BookOpen className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-[14px] font-medium text-[var(--md-sys-color-on-surface)]">
                        {a.title}
                      </h4>
                      <p className="text-[12px] text-[var(--md-sys-color-on-surface-variant)] line-clamp-1">{a.excerpt}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Services Matches */}
          {services.length > 0 && (
            <div className="py-3">
              <span className="text-[11px] font-semibold text-[var(--md-sys-color-primary)] uppercase tracking-wider block mb-2 px-2">
                {language === 'uk' ? 'Інтерактивні інструменти' : language === 'en' ? 'Interactive Tools' : 'Интерактивные сервисы'}
              </span>
              <div className="space-y-1">
                {services.map(s => (
                  <button
                    key={s.id}
                    onClick={() => {
                      navigateTo('services', { itemId: s.slug });
                      closeSearch();
                    }}
                    className="w-full text-left p-3 rounded-[12px] hover:bg-[var(--md-sys-color-surface-container-highest)] flex items-start gap-3 transition-colors cursor-pointer m3-state-layer"
                  >
                    <Wrench className="w-4 h-4 text-[var(--md-sys-color-primary)] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-[14px] font-medium text-[var(--md-sys-color-on-surface)]">
                        {s.title}
                      </h4>
                      <p className="text-[12px] text-[var(--md-sys-color-on-surface-variant)] line-clamp-1">{s.tagline}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Info */}
        <div className="px-4 py-2.5 bg-[var(--md-sys-color-surface-container)] border-t border-[var(--md-sys-color-outline-variant)]/40 flex items-center justify-between text-[11px] text-[var(--md-sys-color-on-surface-variant)] shrink-0">
          <span>Esc для виходу</span>
          <span className="font-mono">NextSelf Search</span>
        </div>
      </div>
    </div>
  );
};
