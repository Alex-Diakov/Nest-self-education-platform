import React, { ReactNode } from 'react';

export interface LandingLayoutProps {
  hero: ReactNode;
  children: ReactNode;
  finalCta?: ReactNode;
  className?: string;
}

export const LandingLayout: React.FC<LandingLayoutProps> = ({
  hero,
  children,
  finalCta,
  className = '',
}) => {
  return (
    <div className={`space-y-14 sm:space-y-20 pb-16 sm:pb-20 ${className}`}>
      {/* 1. Hero Full-Bleed Section */}
      <section aria-label="Hero">
        {hero}
      </section>

      {/* 2. Content Sections Stack */}
      <main className="space-y-14 sm:space-y-20">
        {children}
      </main>

      {/* 3. Final Conversion CTA Banner */}
      {finalCta && (
        <aside aria-label="Call to action">
          {finalCta}
        </aside>
      )}
    </div>
  );
};
