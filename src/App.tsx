import React from 'react';
import { M3ThemeProvider } from './design-system/m3/context/M3ThemeContext.tsx';
import { I18nProvider } from './context/I18nContext.tsx';
import { NavigationProvider, useNavigation } from './context/NavigationContext.tsx';
import { ToastProvider } from './context/ToastContext.tsx';
import { SearchModalProvider } from './context/SearchModalContext.tsx';
import { Header } from './components/layout/Header.tsx';
import { Footer } from './components/layout/Footer.tsx';
import { QuickSearchModal } from './components/layout/QuickSearchModal.tsx';
import { ToastContainer } from './components/layout/ToastContainer.tsx';
import { ErrorBoundary } from './components/common/ErrorBoundary.tsx';
import { ChevronRight } from 'lucide-react';

import { HomePage } from './features/home/HomePage.tsx';
import { ServicesPage } from './features/services/ServicesPage.tsx';
import { TestsPage } from './features/tests/TestsPage.tsx';
import { BlogPage } from './features/blog/BlogPage.tsx';
import { OfferingsPage } from './features/offerings/OfferingsPage.tsx';
import { AboutPage } from './features/about/AboutPage.tsx';
import { DashboardPage } from './features/dashboard/DashboardPage.tsx';
import { useSEO } from './hooks/useSEO.ts';

const AppContent: React.FC = () => {
  const { currentRoute, breadcrumbs, navigateTo } = useNavigation();
  useSEO();

  const renderActivePage = () => {
    switch (currentRoute.page) {
      case 'services':
        return <ServicesPage />;
      case 'tests':
        return <TestsPage />;
      case 'blog':
        return <BlogPage />;
      case 'offerings':
        return <OfferingsPage />;
      case 'about':
        return <AboutPage />;
      case 'dashboard':
        return <DashboardPage />;
      case 'home':
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[var(--md-sys-color-background)] text-[var(--md-sys-color-on-background)] font-sans transition-colors duration-200">
      {/* Top Navigation */}
      <Header />

      {/* Breadcrumbs for internal views (M3 Surface Container styling) */}
      {currentRoute.page !== 'home' && (
        <div className="bg-[var(--md-sys-color-surface-container-low)] border-b border-[var(--md-sys-color-outline-variant)]/40 py-2 sm:py-2.5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-1.5 sm:gap-2 text-[12px] sm:text-[13px] text-[var(--md-sys-color-on-surface-variant)] overflow-x-auto whitespace-nowrap py-0.5" aria-label="Хлебные крошки">
              {breadcrumbs.map((crumb, idx) => (
                <React.Fragment key={idx}>
                  {idx > 0 && <ChevronRight className="w-3.5 h-3.5 opacity-40 shrink-0" />}
                  {crumb.page ? (
                    <button
                      onClick={() => navigateTo(crumb.page!)}
                      className="hover:text-[var(--md-sys-color-primary)] transition-colors cursor-pointer shrink-0 font-medium hover:underline py-0.5"
                    >
                      {crumb.label}
                    </button>
                  ) : (
                    <span className="text-[var(--md-sys-color-on-surface)] font-medium truncate max-w-[200px] sm:max-w-md lg:max-w-xl">
                      {crumb.label}
                    </span>
                  )}
                </React.Fragment>
              ))}
            </nav>
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <main className="flex-1">
        {renderActivePage()}
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals and Overlays */}
      <QuickSearchModal />
      <ToastContainer />
    </div>
  );
};

export default function App() {
  return (
    <ErrorBoundary>
      <I18nProvider>
        <M3ThemeProvider>
          <ToastProvider>
            <SearchModalProvider>
              <NavigationProvider>
                <AppContent />
              </NavigationProvider>
            </SearchModalProvider>
          </ToastProvider>
        </M3ThemeProvider>
      </I18nProvider>
    </ErrorBoundary>
  );
}

