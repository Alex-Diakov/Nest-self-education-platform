/**
 * Internationalization (i18n) Type Definitions
 */

export type SupportedLanguage = 'uk' | 'ru' | 'en';

export interface LanguageOption {
  code: SupportedLanguage;
  label: string;
  shortLabel: string;
  flag: string;
}

export const SUPPORTED_LANGUAGES: LanguageOption[] = [
  { code: 'uk', label: 'Українська', shortLabel: 'УКР', flag: '🇺🇦' },
  { code: 'ru', label: 'Русский', shortLabel: 'РУС', flag: '🌐' },
  { code: 'en', label: 'English', shortLabel: 'ENG', flag: '🇬🇧' },
];

export interface TranslationDictionary {
  nav: {
    home: string;
    tests: string;
    offerings: string;
    blog: string;
    services: string;
    about: string;
    dashboard?: string;
    quickSearch: string;
    bookConsultation: string;
    themeTooltip: string;
    languageTooltip: string;
  };
  common: {
    readMore: string;
    learnMore: string;
    startTest: string;
    details: string;
    back: string;
    close: string;
    save: string;
    retry: string;
    reload: string;
    clearCache: string;
    submit: string;
    submitting: string;
    cancel: string;
    minutes: string;
    questions: string;
    searchPlaceholder: string;
    searchEmpty: string;
    allCategories: string;
    certified: string;
    share: string;
  };
  home: {
    heroBadge: string;
    heroTitle: string;
    heroSubtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    statsYears: string;
    statsYearsLabel: string;
    statsHours: string;
    statsHoursLabel: string;
    statsProfiles: string;
    statsProfilesLabel: string;
    statsResilience: string;
    statsResilienceLabel: string;
    vectorsBadge: string;
    vectorsTitle: string;
    vectorsSubtitle: string;
    scannersBadge: string;
    scannersTitle: string;
    scannersSubtitle: string;
    blogBadge: string;
    blogTitle: string;
    blogSubtitle: string;
    ctaBannerTitle: string;
    ctaBannerSubtitle: string;
    ctaBannerBtn: string;
  };
  footer: {
    tagline: string;
    aboutAuthor: string;
    authorRole: string;
    authorBio: string;
    navigationTitle: string;
    scannersTitle: string;
    legalTitle: string;
    confidentiality: string;
    ethicsNotice: string;
    rights: string;
  };
  booking: {
    modalTitle: string;
    modalSubtitle: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitBtn: string;
    successTitle: string;
    successSubtitle: string;
    closeBtn: string;
  };
  breadcrumbs: {
    home: string;
    tests: string;
    offerings: string;
    blog: string;
    services: string;
    about: string;
    dashboard?: string;
  };
  testsSection: {
    pageBadge: string;
    pageTitle: string;
    pageSubtitle: string;
    historyTitle: string;
    historyEmpty: string;
    startBtn: string;
    retakeBtn: string;
    timeLabel: string;
    questionsLabel: string;
    thresholdLabel: string;
  };
  offeringsSection: {
    pageBadge: string;
    pageTitle: string;
    pageSubtitle: string;
    audienceTitle: string;
    outcomesTitle: string;
    formatTitle: string;
    durationTitle: string;
    enrollBtn: string;
  };
  blogSection: {
    pageBadge: string;
    pageTitle: string;
    pageSubtitle: string;
    searchPlaceholder: string;
    allCategories: string;
    readArticle: string;
  };
}
