import React, { ReactNode } from 'react';
import { M3Container } from '../m3/components/M3Container.tsx';

export interface EditorialArticleLayoutProps {
  header: ReactNode;
  summary?: ReactNode;
  toc?: ReactNode;
  children: ReactNode;
  authorBio?: ReactNode;
  nextReads?: ReactNode;
  floatingBar?: ReactNode;
  className?: string;
}

export const EditorialArticleLayout: React.FC<EditorialArticleLayoutProps> = ({
  header,
  summary,
  toc,
  children,
  authorBio,
  nextReads,
  floatingBar,
  className = '',
}) => {
  return (
    <article className={`pb-16 sm:pb-24 ${className}`}>
      {/* 1. Article Header Banner */}
      <M3Container size="max" className="pt-6 sm:pt-10">
        {header}
      </M3Container>

      {/* 2. Executive Summary (TL;DR) */}
      {summary && (
        <M3Container size="max" className="mt-8 sm:mt-12">
          <div className="max-w-[760px] mx-auto">
            {summary}
          </div>
        </M3Container>
      )}

      {/* 3. Reading Grid (Sticky TOC on XL screens + Golden Measure Content) */}
      <M3Container size="max" className="mt-10 sm:mt-14">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 items-start">
          {/* Main Reading Column (Max 720px for golden typographic rhythm) */}
          <div className="xl:col-span-8 xl:col-start-1 max-w-[720px] mx-auto xl:mx-0 w-full">
            {children}
            {authorBio && <div className="mt-12 sm:mt-16">{authorBio}</div>}
          </div>

          {/* Sticky Table of Contents Sidebar (Desktop only) */}
          {toc && (
            <aside className="hidden xl:block xl:col-span-4 sticky top-24 pl-6 border-l border-[var(--md-sys-color-outline-variant)]/40">
              {toc}
            </aside>
          )}
        </div>
      </M3Container>

      {/* 4. Next Reads Footer Section */}
      {nextReads && (
        <M3Container size="max" className="mt-16 sm:mt-24 pt-12 border-t border-[var(--md-sys-color-outline-variant)]/40">
          {nextReads}
        </M3Container>
      )}

      {/* 5. Floating Companion Bar */}
      {floatingBar}
    </article>
  );
};
