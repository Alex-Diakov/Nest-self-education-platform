import { useEffect } from 'react';
import { useNavigation } from '../context/NavigationContext.tsx';
import { useI18n } from '../context/I18nContext.tsx';
import { SECTION_SEO } from '../services/seo/seoData.ts';
import { testService } from '../services/tests/testService.ts';
import { blogService } from '../services/blog/blogService.ts';
import { offeringsService } from '../services/offerings/offeringsService.ts';
import { toolService } from '../services/services/toolService.ts';

export function useSEO() {
  const { currentRoute } = useNavigation();
  const { language } = useI18n();

  useEffect(() => {
    if (typeof document === 'undefined') return;

    const baseSection = SECTION_SEO[currentRoute.page] || SECTION_SEO.home;
    const localized = baseSection[language] || baseSection.uk;

    let pageTitle = localized.title;
    let pageDescription = localized.description;
    let pageKeywords = localized.keywords || '';
    let itemSchema: Record<string, any> | null = null;

    // Dynamic resolution for item subviews with active language
    if (currentRoute.itemId) {
      if (currentRoute.page === 'tests') {
        const test = testService.getTestBySlug(currentRoute.itemId, language);
        if (test) {
          pageTitle = `${test.title} | NextSelf`;
          pageDescription = `${test.overview.slice(0, 160)}...`;
          pageKeywords = `${test.domain}, ${test.slug}, психологічний тест, когнітивний сканер, NextSelf`;
          itemSchema = {
            '@type': 'Quiz',
            '@id': `https://nextself.com/#/tests/${test.slug}`,
            'name': test.title,
            'description': test.overview,
            'timeRequired': `PT${test.timeLimitMinutes}M`,
            'inLanguage': language,
            'educationalLevel': test.difficultyLabel,
            'author': {
              '@type': 'Person',
              'name': 'Олександр Дьяков',
            },
          };
        }
      } else if (currentRoute.page === 'blog') {
        const article = blogService.getArticleBySlug(currentRoute.itemId, language);
        if (article) {
          pageTitle = `${article.title} | NextSelf`;
          pageDescription = `${article.excerpt.slice(0, 160)}...`;
          pageKeywords = `${article.categoryLabel}, ${article.tags.join(', ')}, NextSelf, психологія`;
          itemSchema = {
            '@type': 'Article',
            '@id': `https://nextself.com/#/blog/${article.slug}`,
            'headline': article.title,
            'description': article.excerpt,
            'datePublished': article.publishedDate,
            'inLanguage': language,
            'author': {
              '@type': 'Person',
              'name': article.author.name,
              'jobTitle': article.author.role,
            },
            'publisher': {
              '@type': 'Organization',
              'name': 'NextSelf',
            },
          };
        }
      } else if (currentRoute.page === 'offerings') {
        const offering = offeringsService.getOfferingBySlug(currentRoute.itemId, language);
        if (offering) {
          pageTitle = `${offering.title} | NextSelf`;
          pageDescription = `${offering.shortDescription.slice(0, 160)}...`;
          pageKeywords = `${offering.categoryLabel}, менторство, сесія, психотехнології, NextSelf`;
          itemSchema = {
            '@type': 'Service',
            '@id': `https://nextself.com/#/offerings/${offering.slug}`,
            'name': offering.title,
            'description': offering.shortDescription,
            'provider': {
              '@type': 'Person',
              'name': 'Олександр Дьяков',
            },
            'offers': offering.plans.map(plan => ({
              '@type': 'Offer',
              'name': plan.name,
              'price': plan.price,
              'description': plan.description,
            })),
          };
        }
      } else if (currentRoute.page === 'services') {
        const service = toolService.getServiceBySlug(currentRoute.itemId, language);
        if (service) {
          pageTitle = `${service.title} | NextSelf`;
          pageDescription = `${service.description.slice(0, 160)}...`;
          pageKeywords = `${service.categoryLabel}, ${service.slug}, симулятор, психотехнології, NextSelf`;
          itemSchema = {
            '@type': 'WebApplication',
            '@id': `https://nextself.com/#/services/${service.slug}`,
            'name': service.title,
            'description': service.description,
            'applicationCategory': 'HealthApplication',
            'operatingSystem': 'All',
            'inLanguage': language,
            'author': {
              '@type': 'Person',
              'name': 'Олександр Дьяков',
            },
          };
        }
      }
    }

    // 1. Update <title> and document language
    document.title = pageTitle;
    document.documentElement.lang = language;

    // Helper to set or create meta tags
    const setMetaTag = (selector: string, attrName: string, attrVal: string, content: string) => {
      let el = document.querySelector(selector) as HTMLMetaElement;
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attrName, attrVal);
        document.head.appendChild(el);
      }
      el.content = content;
    };

    // 2. Standard Meta Tags
    setMetaTag('meta[name="description"]', 'name', 'description', pageDescription);
    if (pageKeywords) {
      setMetaTag('meta[name="keywords"]', 'name', 'keywords', pageKeywords);
    }

    // 3. OpenGraph Social Share Card Tags
    const canonicalBase = typeof window !== 'undefined'
      ? `${window.location.origin}${window.location.pathname}`
      : 'https://nextself.com';
    const canonicalUrl = `${canonicalBase}#/${currentRoute.page}${currentRoute.itemId ? `/${currentRoute.itemId}` : ''}?lang=${language}`;

    setMetaTag('meta[property="og:title"]', 'property', 'og:title', pageTitle);
    setMetaTag('meta[property="og:description"]', 'property', 'og:description', pageDescription);
    setMetaTag('meta[property="og:type"]', 'property', 'og:type', currentRoute.itemId ? 'article' : 'website');
    setMetaTag('meta[property="og:url"]', 'property', 'og:url', canonicalUrl);
    setMetaTag('meta[property="og:site_name"]', 'property', 'og:site_name', 'NextSelf');

    // Locale mapping for OpenGraph
    const ogLocaleMap: Record<string, string> = {
      uk: 'uk_UA',
      ru: 'ru_RU',
      en: 'en_US',
    };
    setMetaTag('meta[property="og:locale"]', 'property', 'og:locale', ogLocaleMap[language] || 'uk_UA');

    // Remove existing alternate locales and re-add for the other supported languages
    document.querySelectorAll('meta[property="og:locale:alternate"]').forEach(el => el.remove());
    Object.entries(ogLocaleMap).forEach(([langKey, localeCode]) => {
      if (langKey !== language) {
        const altMeta = document.createElement('meta');
        altMeta.setAttribute('property', 'og:locale:alternate');
        altMeta.content = localeCode;
        document.head.appendChild(altMeta);
      }
    });

    // 4. Twitter Cards
    setMetaTag('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image');
    setMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', pageTitle);
    setMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description', pageDescription);

    // 5. Canonical Link
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = canonicalUrl;

    // 6. Multilingual Hreflang Alternates (SEO best practice)
    const setHreflang = (hreflang: string, langCode: string) => {
      let link = document.querySelector(`link[rel="alternate"][hreflang="${hreflang}"]`) as HTMLLinkElement;
      if (!link) {
        link = document.createElement('link');
        link.rel = 'alternate';
        link.hreflang = hreflang;
        document.head.appendChild(link);
      }
      link.href = `${canonicalBase}#/${currentRoute.page}${currentRoute.itemId ? `/${currentRoute.itemId}` : ''}?lang=${langCode}`;
    };

    setHreflang('uk', 'uk');
    setHreflang('ru', 'ru');
    setHreflang('en', 'en');
    setHreflang('x-default', 'uk');

    // 7. Schema.org Structured Data (JSON-LD)
    let schemaScript = document.getElementById('nextself-schema-ld') as HTMLScriptElement;
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.id = 'nextself-schema-ld';
      schemaScript.type = 'application/ld+json';
      document.head.appendChild(schemaScript);
    }

    const orgDescription = language === 'en'
      ? 'Applied Psychotechnology and Cognitive Profiling Laboratory by Oleksandr Diakov.'
      : language === 'ru'
      ? 'Лаборатория прикладных психотехнологий и поведенческого профайлинга Александра Дьякова.'
      : 'Лабораторія прикладних психотехнологій та поведінкового профайлінгу Олександра Дьякова.';

    const founderTitle = language === 'en'
      ? 'Applied Cognitive Researcher & Profiler'
      : language === 'ru'
      ? 'Исследователь, профайлер'
      : 'Дослідник, профайлер';

    const graphItems: any[] = [
      {
        '@type': 'ProfessionalService',
        '@id': 'https://nextself.com/#organization',
        'name': 'NextSelf',
        'url': 'https://nextself.com',
        'description': orgDescription,
        'founder': {
          '@type': 'Person',
          'name': 'Олександр Дьяков',
          'jobTitle': founderTitle,
        },
        'knowsAbout': [
          'Cognitive Refactoring',
          'Burnout Resolution',
          'Personality Profiling',
          'Applied Psychotechnology',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': 'https://nextself.com/#website',
        'url': 'https://nextself.com',
        'name': 'NextSelf',
        'inLanguage': language,
      },
    ];

    if (itemSchema) {
      graphItems.push(itemSchema);
    }

    schemaScript.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': graphItems,
    });
  }, [currentRoute, language]);
}
