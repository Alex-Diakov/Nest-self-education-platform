import React from 'react';
import { Brain, Award, CheckCircle2, ArrowRight } from 'lucide-react';
import { useNavigation } from '../../context/NavigationContext.tsx';
import { useI18n } from '../../context/I18nContext.tsx';
import { getAboutContent } from '../../content/aboutContent.ts';
import { SmartImage } from '../../components/common/SmartImage.tsx';
import { MEDIA_MANIFEST } from '../../content/mediaManifest.ts';
import { M3Button } from '../../design-system/m3/components/M3Button.tsx';
import { M3Card } from '../../design-system/m3/components/M3Card.tsx';

export const AboutPage: React.FC = () => {
  const { navigateTo } = useNavigation();
  const { language, t } = useI18n();

  const content = getAboutContent(language);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-8 sm:space-y-16">
      {/* Editorial Hero Banner */}
      <div className="max-w-3xl space-y-2 sm:space-y-4">
        <div className="flex items-center gap-2 text-[11px] sm:text-[12px] font-medium text-[var(--md-sys-color-primary)] tracking-wide">
          <span>{content.header.kicker}</span>
        </div>
        <h1 className="text-fluid-headline font-normal leading-tight text-[var(--md-sys-color-on-surface)] text-balance-mobile">
          {content.header.title}
        </h1>
        <p className="text-[14px] sm:text-[18px] text-[var(--md-sys-color-on-surface-variant)] leading-relaxed">
          {content.header.subtitle}
        </p>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
        {content.facts.map((fact, idx) => (
          <M3Card key={idx} variant="filled" className="p-4 sm:p-6 text-center space-y-1 sm:space-y-2">
            <span className="text-[26px] sm:text-[36px] font-bold font-mono text-[var(--md-sys-color-primary)] block">
              {fact.number}
            </span>
            <span className="text-[11px] sm:text-[13px] text-[var(--md-sys-color-on-surface-variant)] block leading-snug">
              {fact.label}
            </span>
          </M3Card>
        ))}
      </div>

      {/* Author Bio & Approach Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-5 space-y-4">
          <M3Card variant="outlined" className="p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-16 h-16 shrink-0">
                <SmartImage
                  src={MEDIA_MANIFEST.author.portraitSquare.src}
                  alt={content.authorCard.name}
                  aspectRatio="1:1"
                  category="author"
                  fallbackInitials="ОД"
                  containerClassName="!rounded-full border border-[var(--md-sys-color-primary)]/20 shadow-2xs"
                />
              </div>
              <div>
                <h3 className="text-[20px] font-semibold text-[var(--md-sys-color-on-surface)]">
                  {content.authorCard.name}
                </h3>
                <p className="text-[12px] text-[var(--md-sys-color-on-surface-variant)]">
                  {content.authorCard.role}
                </p>
              </div>
            </div>

            <p className="text-[13px] text-[var(--md-sys-color-on-surface-variant)] leading-relaxed">
              {content.authorCard.bio}
            </p>

            <div className="pt-2 border-t border-[var(--md-sys-color-outline-variant)]/40 space-y-2 text-[12px] text-[var(--md-sys-color-on-surface-variant)]">
              <div className="flex items-center gap-2">
                <Brain className="w-4 h-4 text-[var(--md-sys-color-primary)] shrink-0" />
                <span>{content.authorCard.specialization}</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-[var(--md-sys-color-primary)] shrink-0" />
                <span>{content.authorCard.authorship}</span>
              </div>
            </div>
          </M3Card>
        </div>

        <div className="lg:col-span-7 space-y-6">
          <h2 className="text-[22px] sm:text-[26px] font-normal text-[var(--md-sys-color-on-surface)]">
            {content.principles.title}
          </h2>

          <div className="space-y-4">
            {content.principles.items.map((p, idx) => (
              <div key={idx} className="p-4 sm:p-5 rounded-[var(--radius-card,16px)] bg-[var(--md-sys-color-surface-container)] border border-[var(--md-sys-color-outline-variant)]/40 space-y-1.5">
                <h4 className="text-[15px] font-medium text-[var(--md-sys-color-on-surface)] flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[var(--md-sys-color-primary)] shrink-0" />
                  <span>{p.title}</span>
                </h4>
                <p className="text-[13px] text-[var(--md-sys-color-on-surface-variant)] leading-relaxed pl-6">
                  {p.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline Milestones */}
      <div className="space-y-6">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-[11px] font-semibold text-[var(--md-sys-color-primary)] uppercase tracking-wider">
            {content.timeline.kicker}
          </span>
          <h2 className="text-[24px] sm:text-[28px] font-normal text-[var(--md-sys-color-on-surface)]">
            {content.timeline.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {content.timeline.milestones.map((m, idx) => (
            <M3Card key={idx} variant="outlined" className="p-5 space-y-2.5">
              <span className="text-[20px] font-bold font-mono text-[var(--md-sys-color-primary)]">
                {m.year}
              </span>
              <h4 className="text-[15px] font-medium text-[var(--md-sys-color-on-surface)] leading-snug">
                {m.title}
              </h4>
              <p className="text-[12px] text-[var(--md-sys-color-on-surface-variant)] leading-relaxed">
                {m.description}
              </p>
            </M3Card>
          ))}
        </div>
      </div>

      {/* CTA Box */}
      <div className="p-6 sm:p-10 rounded-[var(--radius-card,24px)] bg-[var(--md-sys-color-primary-container)] text-[var(--md-sys-color-on-primary-container)] flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xs">
        <div className="space-y-2 max-w-xl">
          <h3 className="text-[22px] sm:text-[26px] font-normal font-display">
            {t('home.ctaBannerTitle')}
          </h3>
          <p className="text-[13px] sm:text-[14px] opacity-90 leading-relaxed">
            {t('home.ctaBannerSubtitle')}
          </p>
        </div>

        <M3Button
          variant="filled"
          size="lg"
          onClick={() => navigateTo('offerings', { itemId: 'dyakov-strategic-session' })}
          trailingIcon={<ArrowRight className="w-4 h-4" />}
          className="shrink-0 min-h-[48px]"
        >
          {t('home.ctaBannerBtn')}
        </M3Button>
      </div>
    </div>
  );
};
