import React from 'react';
import { ArticleSection } from '../../../../types/blog.ts';
import { Lightbulb, ShieldCheck, AlertTriangle, Quote } from 'lucide-react';

interface ArticleBodyProps {
  sections: ArticleSection[];
  fontSize: 'normal' | 'large' | 'xlarge';
}

export const ArticleBody: React.FC<ArticleBodyProps> = ({ sections, fontSize }) => {
  const fontSizeStyle =
    fontSize === 'normal'
      ? 'text-[17px] sm:text-[18px] leading-[1.85]'
      : fontSize === 'large'
      ? 'text-[19px] sm:text-[20px] leading-[1.9]'
      : 'text-[21px] sm:text-[22px] leading-[1.95]';

  return (
    <article className="max-w-[720px] mx-auto space-y-12 sm:space-y-16">
      {sections.map((section, sIdx) => (
        <section
          key={sIdx}
          id={`section-${sIdx}`}
          className="space-y-6 sm:space-y-8 scroll-mt-28"
        >
          {/* Section Kicker & Heading */}
          <div className="space-y-2 border-b border-[var(--md-sys-color-outline-variant)]/40 pb-4">
            <span className="text-[12px] font-mono uppercase tracking-widest text-[var(--md-sys-color-primary)] font-bold">
              0{sIdx + 1} · {section.readMinutes ? `${section.readMinutes} min read` : 'PART'}
            </span>
            <h2 className="text-[24px] sm:text-[30px] font-normal text-[var(--md-sys-color-on-surface)] leading-[1.25] tracking-tight text-balance-mobile">
              {section.heading}
            </h2>
            {section.subheading && (
              <p className="text-[15px] sm:text-[16px] text-[var(--md-sys-color-on-surface-variant)] italic">
                {section.subheading}
              </p>
            )}
          </div>

          {/* Section Body Paragraphs with Drop Cap on the First Paragraph */}
          <div className="space-y-6">
            {section.body.map((paragraph, pIdx) => {
              const isFirstParagraph = sIdx === 0 && pIdx === 0;

              if (isFirstParagraph) {
                const firstLetter = paragraph.charAt(0);
                const restOfParagraph = paragraph.slice(1);

                return (
                  <p
                    key={pIdx}
                    className={`${fontSizeStyle} text-[var(--md-sys-color-on-surface)] font-normal tracking-[-0.01em]`}
                  >
                    <span className="float-left text-[56px] sm:text-[64px] leading-[0.8] pr-3 pt-2 font-serif font-bold text-[var(--md-sys-color-primary)] select-none">
                      {firstLetter}
                    </span>
                    {restOfParagraph}
                  </p>
                );
              }

              return (
                <p
                  key={pIdx}
                  className={`${fontSizeStyle} text-[var(--md-sys-color-on-surface)] font-normal tracking-[-0.01em]`}
                >
                  {paragraph}
                </p>
              );
            })}
          </div>

          {/* Pull Quote Block */}
          {section.quote && (
            <figure className="my-8 py-6 px-6 sm:px-8 bg-[var(--md-sys-color-surface-container)] rounded-[var(--radius-card,20px)] border-l-4 border-[var(--md-sys-color-primary)] space-y-3 shadow-2xs">
              <Quote className="w-6 h-6 text-[var(--md-sys-color-primary)] opacity-40 -mb-1" />
              <blockquote className="text-[18px] sm:text-[21px] font-normal leading-relaxed text-[var(--md-sys-color-on-surface)] italic">
                «{section.quote.text}»
              </blockquote>
              {section.quote.attribution && (
                <figcaption className="text-[13px] font-mono text-[var(--md-sys-color-primary)] font-semibold uppercase tracking-wider pt-1">
                  — {section.quote.attribution}
                </figcaption>
              )}
            </figure>
          )}

          {/* Editorial Callout */}
          {section.callout && (
            <aside
              aria-label={section.callout.label || 'Insight'}
              className={`rounded-[var(--radius-card,20px)] p-6 border-l-4 space-y-2.5 my-6 shadow-2xs ${
                section.callout.type === 'insight'
                  ? 'bg-blue-500/10 border-blue-500 text-blue-950 dark:text-blue-100'
                  : section.callout.type === 'methodology'
                  ? 'bg-emerald-500/10 border-emerald-500 text-emerald-950 dark:text-emerald-100'
                  : 'bg-amber-500/10 border-amber-500 text-amber-950 dark:text-amber-100'
              }`}
            >
              <div className="flex items-center gap-2 font-mono text-[12px] uppercase tracking-wider font-semibold">
                {section.callout.type === 'insight' && <Lightbulb className="w-4 h-4 text-blue-500" />}
                {section.callout.type === 'methodology' && <ShieldCheck className="w-4 h-4 text-emerald-500" />}
                {section.callout.type === 'warning' && <AlertTriangle className="w-4 h-4 text-amber-500" />}
                <span>{section.callout.label || 'КЛЮЧОВИЙ ІНСАЙТ'}</span>
              </div>
              <p className="text-[15px] sm:text-[16px] leading-relaxed font-normal">
                {section.callout.text}
              </p>
            </aside>
          )}

          {/* Actionable Protocol Steps */}
          {section.protocolSteps && section.protocolSteps.length > 0 && (
            <div className="my-8 space-y-4">
              <span className="text-[12px] font-mono uppercase tracking-widest text-[var(--md-sys-color-primary)] font-bold block">
                ПРОТОКОЛ ПРАКТИЧНОГО ЗАСТОСУВАННЯ
              </span>
              <div className="grid grid-cols-1 gap-3">
                {section.protocolSteps.map((step, stepIdx) => (
                  <div
                    key={stepIdx}
                    className="p-5 rounded-[var(--radius-card,16px)] bg-[var(--md-sys-color-surface-container)] border border-[var(--md-sys-color-outline-variant)]/60 flex items-start gap-4 shadow-2xs"
                  >
                    <span className="w-9 h-9 rounded-full bg-[var(--md-sys-color-primary-container)] text-[var(--md-sys-color-on-primary-container)] font-mono font-bold text-sm flex items-center justify-center shrink-0">
                      {step.step}
                    </span>
                    <div className="space-y-1">
                      <h3 className="text-[15px] font-medium text-[var(--md-sys-color-on-surface)]">
                        {step.title}
                      </h3>
                      <p className="text-[13px] sm:text-[14px] leading-relaxed text-[var(--md-sys-color-on-surface-variant)]">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>
      ))}
    </article>
  );
};
