/**
 * Global Platform & Brand Configuration
 * Modifying values here updates global contact, founder, and metadata references across the entire application.
 */

export interface SiteConfig {
  brandName: string;
  tagline: Record<string, string>;
  founder: {
    name: Record<string, string>;
    role: Record<string, string>;
    affiliation: Record<string, string>;
    avatarInitials: string;
    experienceYears: number;
    hoursPracticed: number;
    profilesCount: number;
    email: string;
    telegramUsername: string;
  };
  navigation: {
    testsPath: string;
    offeringsPath: string;
    blogPath: string;
    servicesPath: string;
    aboutPath: string;
  };
}

export const SITE_CONFIG: SiteConfig = {
  brandName: 'NextSelf',
  tagline: {
    uk: 'Від внутрішнього хаосу до твердої опори',
    ru: 'От внутреннего хаоса к твердой опоре',
    en: 'From internal chaos to unshakable self-reliance',
  },
  founder: {
    name: {
      uk: 'Олександр Дьяков',
      ru: 'Александр Дьяков',
      en: 'Oleksandr Diakov',
    },
    role: {
      uk: 'Дослідник, профайлер, засновник NextSelf Lab',
      ru: 'Исследователь, профайлер, основатель NextSelf Lab',
      en: 'Applied Cognitive Researcher, Profiler & Founder',
    },
    affiliation: {
      uk: 'Лабораторія психотехнологій NextSelf',
      ru: 'Лаборатория психотехнологий NextSelf',
      en: 'NextSelf Psychotechnology Laboratory',
    },
    avatarInitials: 'ОД',
    experienceYears: 12,
    hoursPracticed: 12000,
    profilesCount: 10450,
    email: 'diakovoleksandr@gmail.com',
    telegramUsername: 'diakov_nextself',
  },
  navigation: {
    testsPath: '#/tests',
    offeringsPath: '#/offerings',
    blogPath: '#/blog',
    servicesPath: '#/services',
    aboutPath: '#/about',
  },
};
