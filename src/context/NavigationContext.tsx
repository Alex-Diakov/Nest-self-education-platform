import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { PageId, RouteState } from '../types/navigation.ts';
import { useI18n } from './I18nContext.tsx';
import { testService } from '../services/tests/testService.ts';
import { blogService } from '../services/blog/blogService.ts';
import { offeringsService } from '../services/offerings/offeringsService.ts';
import { toolService } from '../services/services/toolService.ts';

interface NavigationContextType {
  currentRoute: RouteState;
  navigateTo: (page: PageId, options?: { itemId?: string; subview?: string }) => void;
  goBack: () => void;
  breadcrumbs: { label: string; page?: PageId }[];
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

/**
 * Robust hash parser that correctly isolates the path from query parameters (such as ?lang=en)
 */
function parseHash(hash: string): RouteState {
  const clean = hash.replace(/^#\/?/, '').trim();
  if (!clean) return { page: 'home' };

  // Separate the path from any query parameters (?lang=...)
  const [pathOnly] = clean.split('?');
  const parts = pathOnly.split('/').filter(Boolean);
  const page = (parts[0] || 'home') as PageId;
  const validPages: PageId[] = ['home', 'services', 'blog', 'tests', 'offerings', 'about', 'dashboard'];

  if (!validPages.includes(page)) {
    return { page: 'home' };
  }

  return {
    page,
    itemId: parts[1] || undefined,
    subview: parts[2] || undefined,
  };
}

export const NavigationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { language, t } = useI18n();
  const [history, setHistory] = useState<RouteState[]>([{ page: 'home' }]);
  const [currentRoute, setCurrentRoute] = useState<RouteState>(() => {
    if (typeof window !== 'undefined') {
      return parseHash(window.location.hash);
    }
    return { page: 'home' };
  });

  useEffect(() => {
    const handleHashChange = () => {
      const parsed = parseHash(window.location.hash);
      setCurrentRoute(parsed);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: PageId, options?: { itemId?: string; subview?: string }) => {
    const newRoute: RouteState = {
      page,
      itemId: options?.itemId,
      subview: options?.subview,
    };

    setHistory(prev => [...prev, currentRoute]);
    setCurrentRoute(newRoute);

    let newHash = `#/${page}`;
    if (options?.itemId) newHash += `/${options.itemId}`;
    if (options?.subview) newHash += `/${options.subview}`;

    // Preserve language query parameter across in-app navigation
    newHash += `?lang=${language}`;

    if (typeof window !== 'undefined') {
      window.location.hash = newHash;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const goBack = () => {
    if (history.length > 1) {
      const prev = history[history.length - 1];
      setHistory(h => h.slice(0, -1));
      navigateTo(prev.page, { itemId: prev.itemId, subview: prev.subview });
    } else {
      navigateTo('home');
    }
  };

  // Human-readable titles for navigation pages (synchronized with Header & Locale)
  const pageNames: Record<PageId, string> = {
    home: t('breadcrumbs.home', 'Головна'),
    tests: t('breadcrumbs.tests', 'Сканери та тести'),
    offerings: t('breadcrumbs.offerings', 'Напрями'),
    blog: t('breadcrumbs.blog', 'База знань'),
    services: t('breadcrumbs.services', 'Сервіси'),
    about: t('breadcrumbs.about', 'Про автора'),
    dashboard: t('breadcrumbs.dashboard', 'Мій кабінет'),
  };

  const getItemTitle = (page: PageId, itemId: string): string => {
    switch (page) {
      case 'tests': {
        const test = testService.getTestBySlug(itemId, language);
        return test ? test.title : itemId;
      }
      case 'blog': {
        const article = blogService.getArticleBySlug(itemId, language);
        return article ? article.title : itemId;
      }
      case 'offerings': {
        const offering = offeringsService.getOfferingBySlug(itemId, language);
        return offering ? offering.title : itemId;
      }
      case 'services': {
        const service = toolService.getServiceBySlug(itemId, language);
        return service ? service.title : itemId;
      }
      default:
        return itemId;
    }
  };

  // Build readable breadcrumbs with correct links
  const breadcrumbs: { label: string; page?: PageId }[] = [
    { label: t('breadcrumbs.home', 'Головна'), page: currentRoute.page !== 'home' ? 'home' : undefined },
  ];

  if (currentRoute.page !== 'home') {
    breadcrumbs.push({
      label: pageNames[currentRoute.page] || currentRoute.page,
      // If there is an active item (sub-page), clicking the parent section navigates back to the parent section
      page: currentRoute.itemId ? currentRoute.page : undefined,
    });
  }

  if (currentRoute.itemId) {
    breadcrumbs.push({
      label: getItemTitle(currentRoute.page, currentRoute.itemId),
      page: undefined, // Current active page is not a clickable link
    });
  }

  return (
    <NavigationContext.Provider value={{ currentRoute, navigateTo, goBack, breadcrumbs }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = (): NavigationContextType => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};
