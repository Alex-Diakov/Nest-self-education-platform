import { SupportedLanguage } from './i18n.ts';

export type LocalizedField<T = string> = {
  uk: T;
  ru?: T;
  en?: T;
};

/**
 * Safely resolves a localized field with fallback to Ukrainian (default) or Russian
 */
export function resolveLocalized<T>(
  field: LocalizedField<T> | T | undefined,
  lang: SupportedLanguage,
  defaultLang: SupportedLanguage = 'uk'
): T {
  if (field === undefined || field === null) {
    return '' as unknown as T;
  }

  // If already plain string or object
  if (typeof field !== 'object' || (!('uk' in field) && !('ru' in field) && !('en' in field))) {
    return field as T;
  }

  const localized = field as LocalizedField<T>;

  if (localized[lang] !== undefined && localized[lang] !== '') {
    return localized[lang] as T;
  }

  // Fallback to default language
  if (localized[defaultLang] !== undefined && localized[defaultLang] !== '') {
    return localized[defaultLang] as T;
  }

  // Fallback to any available
  return (localized.uk || localized.ru || localized.en || '') as T;
}
