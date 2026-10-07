import React, { ReactNode } from 'react';
import { M3Container } from '../m3/components/M3Container.tsx';

export interface CatalogLayoutProps {
  badge?: string;
  badgeKicker?: string;
  title: string;
  subtitle?: string;
  action?: ReactNode;
  filters?: ReactNode;
  children: ReactNode;
  bottomBanner?: ReactNode;
  className?: string;
}

export const CatalogLayout: React.FC<CatalogLayoutProps> = ({
  badge,
  badgeKicker = 'NextSelf Lab',
  title,
  subtitle,
  action,
  filters,
  children,
  bottomBanner,
  className = '',
}) => {
  return (
    <M3Container size="max" className={`py-6 sm:py-10 space-y-8 sm:space-y-12 ${className}`}>
      {/* 1. Standardized Editorial Page Header */}
      <header className="space-y-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="max-w-3xl space-y-2 sm:space-y-3">
            {badge && (
              <div className="flex items-center gap-2 text-[11px] sm:text-[12px] font-medium text-[var(--md-sys-color-primary)] tracking-wide">
                <span>{badge}</span>
                <span aria-hidden="true">·</span>
                <span>{badgeKicker}</span>
              </div>
            )}
            <h1 className="text-fluid-headline font-normal text-[var(--md-sys-color-on-surface)] leading-tight text-balance-mobile">
              {title}
            </h1>
            {subtitle && (
              <p className="text-[14px] sm:text-[16px] leading-[22px] sm:leading-[24px] text-[var(--md-sys-color-on-surface-variant)]">
                {subtitle}
              </p>
            )}
          </div>

          {action && <div className="shrink-0 self-start md:self-auto">{action}</div>}
        </div>

        {/* 2. Optional Filter / Search Chips Row */}
        {filters && (
          <div className="pt-2 border-t border-[var(--md-sys-color-outline-variant)]/40">
            {filters}
          </div>
        )}
      </header>

      {/* 3. Main Catalog Body (Cards Grid or List) */}
      <main className="space-y-8">
        {children}
      </main>

      {/* 4. Optional Bottom Conversion Banner */}
      {bottomBanner && (
        <aside className="pt-4">
          {bottomBanner}
        </aside>
      )}
    </M3Container>
  );
};
