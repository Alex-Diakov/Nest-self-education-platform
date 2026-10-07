import React, { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react';
import { SupportedLanguage, LanguageOption, TranslationDictionary, SUPPORTED_LANGUAGES } from '../types/i18n.ts';
import { ukTranslations } from '../locales/uk.ts';
import { ruTranslations } from '../locales/ru.ts';
import { enTranslations } from '../locales/en.ts';
import { storageService } from '../services/storage/storageService.ts';

interface I18nContextType {
  language: SupportedLanguage;
  setLanguage: (lang: SupportedLanguage) => void;
  t: (path: string, fallback?: string) => string;
  dict: TranslationDictionary;
  availableLanguages: LanguageOption[];
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

const STORAGE_LANG_KEY = 'nextself_language_v1';

const TRANSLATIONS: Record<SupportedLanguage, TranslationDictionary> = {
  uk: ukTranslations,
  ru: ruTranslations,
  en: enTranslations,
};

function extractLanguageFromUrl(): SupportedLanguage | null {
  if (typeof window === 'undefined') return null;

  // 1. Check window.location.search (?lang=...)
  const searchParams = new URLSearchParams(window.location.search);
  const searchLang = searchParams.get('lang');
  if (searchLang === 'uk' || searchLang === 'ru' || searchLang === 'en') {
    return searchLang;
  }

  // 2. Check window.location.hash query string (#/tests?lang=... or #/page/item?lang=...)
  const hash = window.location.hash;
  if (hash.includes('?')) {
    const hashQuery = hash.split('?')[1];
    const hashParams = new URLSearchParams(hashQuery);
    const hashLang = hashParams.get('lang');
    if (hashLang === 'uk' || hashLang === 'ru' || hashLang === 'en') {
      return hashLang;
    }
  }

  return null;
}

function detectInitialLanguage(): SupportedLanguage {
  // Priority 1: Direct URL query param (?lang=uk|ru|en)
  const urlLang = extractLanguageFromUrl();
  if (urlLang) {
    return urlLang;
  }

  // Priority 2: Stored preference in localStorage
  const saved = storageService.getItem<SupportedLanguage | null>(STORAGE_LANG_KEY, null);
  if (saved && (saved === 'uk' || saved === 'ru' || saved === 'en')) {
    return saved;
  }

  // Priority 3: Browser language detection
  if (typeof navigator !== 'undefined' && navigator.language) {
    const nav = navigator.language.toLowerCase();
    if (nav.startsWith('uk')) return 'uk';
    if (nav.startsWith('ru')) return 'ru';
    if (nav.startsWith('en')) return 'en';
  }

  // Default fallback language: Ukrainian (primary locale)
  return 'uk';
}

function syncUrlWithLanguage(lang: SupportedLanguage) {
  if (typeof window === 'undefined') return;

  const currentHash = window.location.hash || '#/';
  const [pathPart, queryPart] = currentHash.split('?');
  const params = new URLSearchParams(queryPart || '');

  params.set('lang', lang);

  const updatedHash = `${pathPart}?${params.toString()}`;

  // Use replaceState to avoid cluttering browser history with language-only changes
  if (window.location.hash !== updatedHash) {
    window.history.replaceState(null, '', updatedHash);
  }
}

export const I18nProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<SupportedLanguage>(detectInitialLanguage);

  const dict = TRANSLATIONS[language] || TRANSLATIONS.uk;

  // Sync document element attributes
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = language;
      document.documentElement.dir = 'ltr';
    }
  }, [language]);

  // Synchronize URL query parameter when language changes
  const setLanguage = useCallback((lang: SupportedLanguage) => {
    setLanguageState(lang);
    storageService.setItem(STORAGE_LANG_KEY, lang);
    syncUrlWithLanguage(lang);

    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang;
    }
  }, []);

  // Listen to popstate and hashchange events for external URL changes (e.g., browser Back/Forward or manual edit)
  useEffect(() => {
    const handleUrlChange = () => {
      const detected = extractLanguageFromUrl();
      if (detected && detected !== language) {
        setLanguageState(detected);
        storageService.setItem(STORAGE_LANG_KEY, detected);
      }
    };

    window.addEventListener('popstate', handleUrlChange);
    window.addEventListener('hashchange', handleUrlChange);
    return () => {
      window.removeEventListener('popstate', handleUrlChange);
      window.removeEventListener('hashchange', handleUrlChange);
    };
  }, [language]);

  /**
   * Helper to resolve nested dot-notation paths like 'nav.tests' or 'home.heroTitle'
   */
  const t = useCallback((path: string, fallback?: string): string => {
    const parts = path.split('.');
    let current: any = dict;

    for (const part of parts) {
      if (current === undefined || current === null) break;
      current = current[part];
    }

    if (typeof current === 'string') {
      return current;
    }

    return fallback !== undefined ? fallback : path;
  }, [dict]);

  return (
    <I18nContext.Provider
      value={{
        language,
        setLanguage,
        t,
        dict,
        availableLanguages: SUPPORTED_LANGUAGES,
      }}
    >
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = (): I18nContextType => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
};
