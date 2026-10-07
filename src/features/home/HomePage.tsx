import React, { useState } from 'react';
import { useNavigation } from '../../context/NavigationContext.tsx';
import { useI18n } from '../../context/I18nContext.tsx';
import { getHomeContent, HomeTelemetryCard } from '../../content/homeContent.ts';
import { testService } from '../../services/tests/testService.ts';
import { offeringsService } from '../../services/offerings/offeringsService.ts';
import { blogService } from '../../services/blog/blogService.ts';
import { M3Button } from '../../design-system/m3/components/M3Button.tsx';
import { M3Card } from '../../design-system/m3/components/M3Card.tsx';
import {
  ArrowRight,
  Zap,
  Sparkles,
  ChevronDown,
  ChevronUp,
  Lock,
  HeartHandshake,
  CheckCircle2,
  Clock,
  Brain
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const { navigateTo } = useNavigation();
  const { language, t } = useI18n();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const content = getHomeContent(language);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const featuredTests = testService.getAllTests(language).slice(0, 3);
  const featuredOfferings = offeringsService.getAllOfferings(language).slice(0, 4);
  const featuredArticles = blogService.getAllArticles(language).slice(0, 3);

  const renderTelemetryIcon = (type: HomeTelemetryCard['type']) => {
    switch (type) {
      case 'load':
        return <Zap className="w-3.5 h-3.5" />;
      case 'relations':
        return <HeartHandshake className="w-3.5 h-3.5" />;
      case 'growth':
        return <Lock className="w-3.5 h-3.5" />;
      case 'potential':
        return <Sparkles className="w-3.5 h-3.5" />;
    }
  };

  return (
    <div className="space-y-14 sm:space-y-20 pb-16 sm:pb-20">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-8 sm:pt-14 pb-12 sm:pb-18 border-b border-[var(--md-sys-color-outline-variant)]/40 bg-[var(--md-sys-color-surface-container-low)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Hero Column */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-6">
              <div className="inline-flex items-center gap-2 text-[11px] sm:text-[12px] font-semibold tracking-[0.5px] uppercase text-[var(--md-sys-color-primary)]">
                <span>NextSelf</span>
                <span aria-hidden="true">·</span>
                <span>{content.hero.kicker}</span>
              </div>

              <h1 className="text-fluid-display font-normal text-[var(--md-sys-color-on-surface)] text-balance-mobile">
                {content.hero.title} <span className="text-[var(--md-sys-color-primary)] font-normal">{content.hero.titleAccent}</span>
              </h1>

              <p className="text-[14px] sm:text-[16px] leading-[22px] sm:leading-[26px] text-[var(--md-sys-color-on-surface-variant)] max-w-2xl text-balance-mobile">
                {content.hero.subtitle}
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <M3Button
                  size="lg"
                  variant="filled"
                  onClick={() => navigateTo('tests')}
                  trailingIcon={<ArrowRight className="w-4 h-4" />}
                  className="w-full sm:w-auto justify-center min-h-[48px]"
                >
                  {content.hero.primaryCta}
                </M3Button>
                <M3Button
                  size="lg"
                  variant="outlined"
                  onClick={() => navigateTo('offerings')}
                  className="w-full sm:w-auto justify-center min-h-[48px]"
                >
                  {content.hero.secondaryCta}
                </M3Button>
              </div>

              {/* Social Proof Avatars */}
              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-[var(--md-sys-color-outline-variant)]/40">
                <div className="flex -space-x-2 shrink-0">
                  {['ОД', 'АК', 'МБ', 'ІС'].map((initials, idx) => (
                    <div
                      key={idx}
                      className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[var(--md-sys-color-primary-container)] text-[var(--md-sys-color-on-primary-container)] border-2 border-[var(--md-sys-color-surface)] flex items-center justify-center text-[10px] sm:text-[11px] font-semibold"
                    >
                      {initials}
                    </div>
                  ))}
                </div>
                <div className="text-[12px] sm:text-[13px] text-[var(--md-sys-color-on-surface-variant)]">
                  {content.hero.socialProofText}
                </div>
              </div>
            </div>

            {/* Right Hero Column: 4 Dynamic Telemetry Cards */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
              {content.hero.telemetryCards.map((card, i) => (
                <M3Card
                  key={i}
                  variant="filled"
                  className={`p-4 space-y-2 ${card.type === 'potential' ? 'bg-[var(--md-sys-color-primary-container)]/30 border border-[var(--md-sys-color-primary)]/30' : ''}`}
                >
                  <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-[var(--md-sys-color-primary)] font-semibold">
                    <span>{card.tag}</span>
                    {renderTelemetryIcon(card.type)}
                  </div>
                  <h3 className="text-[14px] font-medium text-[var(--md-sys-color-on-surface)]">
                    {card.title}
                  </h3>
                  <div className="text-[12px] text-[var(--md-sys-color-on-surface-variant)] space-y-0.5 pt-1">
                    <p className={`font-semibold ${card.type === 'potential' ? 'text-[var(--md-sys-color-primary)]' : 'text-[var(--md-sys-color-on-surface)]'}`}>
                      {card.triggerLabel}
                    </p>
                    <p className="opacity-90">
                      {card.triggerDesc}
                    </p>
                  </div>
                </M3Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. METHODOLOGY PILLARS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
        <div className="max-w-3xl space-y-2 sm:space-y-3">
          <span className="text-[11px] sm:text-[12px] font-semibold text-[var(--md-sys-color-primary)] uppercase tracking-wider block">
            {content.pillarsSection.kicker}
          </span>
          <h2 className="text-fluid-headline font-normal text-[var(--md-sys-color-on-surface)] text-balance-mobile">
            {content.pillarsSection.title}
          </h2>
          <p className="text-[13px] sm:text-[15px] leading-[20px] sm:leading-[24px] text-[var(--md-sys-color-on-surface-variant)]">
            {content.pillarsSection.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {content.pillarsSection.items.map(pillar => (
            <M3Card key={pillar.id} variant="outlined" className="p-5 sm:p-6 space-y-3">
              <span className="text-[20px] font-mono font-bold text-[var(--md-sys-color-primary)]">
                {pillar.number}
              </span>
              <div className="space-y-1">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[var(--md-sys-color-on-surface-variant)] font-semibold block">
                  {pillar.tagline}
                </span>
                <h3 className="text-[17px] font-medium text-[var(--md-sys-color-on-surface)]">
                  {pillar.title}
                </h3>
              </div>
              <p className="text-[13px] leading-relaxed text-[var(--md-sys-color-on-surface-variant)]">
                {pillar.description}
              </p>
            </M3Card>
          ))}
        </div>
      </section>

      {/* 3. SELF-DIAGNOSTIC SCANNERS CATALOG */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="max-w-2xl space-y-2">
            <span className="text-[11px] sm:text-[12px] font-semibold text-[var(--md-sys-color-primary)] uppercase tracking-wider block">
              {content.scannersSection.kicker}
            </span>
            <h2 className="text-fluid-headline font-normal text-[var(--md-sys-color-on-surface)] text-balance-mobile">
              {content.scannersSection.title}
            </h2>
            <p className="text-[13px] sm:text-[15px] leading-[20px] sm:leading-[24px] text-[var(--md-sys-color-on-surface-variant)]">
              {content.scannersSection.subtitle}
            </p>
          </div>
          <M3Button
            variant="outlined"
            onClick={() => navigateTo('tests')}
            trailingIcon={<ArrowRight className="w-4 h-4" />}
            className="shrink-0 self-start sm:self-auto"
          >
            {content.scannersSection.viewAllCta}
          </M3Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredTests.map(test => (
            <M3Card
              key={test.id}
              variant="outlined"
              interactive
              onClick={() => navigateTo('tests', { itemId: test.slug })}
              className="p-6 flex flex-col justify-between group cursor-pointer"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-[var(--md-sys-color-on-surface-variant)]">
                  <span className="font-semibold text-[var(--md-sys-color-primary)] uppercase tracking-wider">
                    {test.domain}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{test.timeLimitMinutes} {t('common.minutes')}</span>
                  </span>
                </div>
                <h3 className="text-[18px] font-medium text-[var(--md-sys-color-on-surface)] group-hover:text-[var(--md-sys-color-primary)] transition-colors leading-snug">
                  {test.title}
                </h3>
                <p className="text-[13px] text-[var(--md-sys-color-on-surface-variant)] line-clamp-2 leading-relaxed">
                  {test.overview}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[var(--md-sys-color-outline-variant)]/40 flex items-center justify-between text-xs">
                <span className="text-[var(--md-sys-color-on-surface-variant)]">
                  {test.questions.length} {language === 'uk' ? 'питань' : language === 'en' ? 'questions' : 'вопросов'}
                </span>
                <span className="text-[var(--md-sys-color-primary)] font-medium group-hover:underline flex items-center gap-1">
                  {language === 'uk' ? 'Пройти сканер' : language === 'en' ? 'Start Assessment' : 'Пройти сканер'}
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </M3Card>
          ))}
        </div>
      </section>

      {/* 4. OFFERINGS & MENTORSHIP SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="max-w-2xl space-y-2">
            <span className="text-[11px] sm:text-[12px] font-semibold text-[var(--md-sys-color-primary)] uppercase tracking-wider block">
              {content.offeringsSection.kicker}
            </span>
            <h2 className="text-fluid-headline font-normal text-[var(--md-sys-color-on-surface)] text-balance-mobile">
              {content.offeringsSection.title}
            </h2>
            <p className="text-[13px] sm:text-[15px] leading-[20px] sm:leading-[24px] text-[var(--md-sys-color-on-surface-variant)]">
              {content.offeringsSection.subtitle}
            </p>
          </div>
          <M3Button
            variant="outlined"
            onClick={() => navigateTo('offerings')}
            trailingIcon={<ArrowRight className="w-4 h-4" />}
            className="shrink-0 self-start sm:self-auto"
          >
            {content.offeringsSection.viewAllCta}
          </M3Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredOfferings.map(offering => (
            <M3Card
              key={offering.id}
              variant="outlined"
              interactive
              onClick={() => navigateTo('offerings', { itemId: offering.slug })}
              className="p-6 sm:p-8 flex flex-col justify-between group cursor-pointer"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono text-[var(--md-sys-color-primary)] font-semibold">
                  <span>{offering.categoryLabel}</span>
                  <span aria-hidden="true">·</span>
                  <span>{offering.duration}</span>
                </div>
                <h3 className="text-[20px] font-medium text-[var(--md-sys-color-on-surface)] group-hover:text-[var(--md-sys-color-primary)] transition-colors leading-snug">
                  {offering.title}
                </h3>
                <p className="text-[13px] text-[var(--md-sys-color-on-surface-variant)] line-clamp-3 leading-relaxed">
                  {offering.shortDescription}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-[var(--md-sys-color-outline-variant)]/40 flex items-center justify-between text-xs">
                <span className="font-mono font-semibold text-[var(--md-sys-color-on-surface)] text-[14px]">
                  {offering.plans[0]?.price}
                </span>
                <span className="text-[var(--md-sys-color-primary)] font-medium group-hover:underline flex items-center gap-1">
                  {language === 'uk' ? 'Детальніше' : language === 'en' ? 'Details' : 'Подробнее'}
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </M3Card>
          ))}
        </div>
      </section>

      {/* 5. ACADEMIC BLOG RECENT PUBLICATIONS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="max-w-2xl space-y-2">
            <span className="text-[11px] sm:text-[12px] font-semibold text-[var(--md-sys-color-primary)] uppercase tracking-wider block">
              {content.blogSection.kicker}
            </span>
            <h2 className="text-fluid-headline font-normal text-[var(--md-sys-color-on-surface)] text-balance-mobile">
              {content.blogSection.title}
            </h2>
            <p className="text-[13px] sm:text-[15px] leading-[20px] sm:leading-[24px] text-[var(--md-sys-color-on-surface-variant)]">
              {content.blogSection.subtitle}
            </p>
          </div>
          <M3Button
            variant="outlined"
            onClick={() => navigateTo('blog')}
            trailingIcon={<ArrowRight className="w-4 h-4" />}
            className="shrink-0 self-start sm:self-auto"
          >
            {content.blogSection.viewAllCta}
          </M3Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredArticles.map(article => (
            <M3Card
              key={article.id}
              variant="outlined"
              interactive
              onClick={() => navigateTo('blog', { itemId: article.slug })}
              className="p-6 flex flex-col justify-between group cursor-pointer"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-[var(--md-sys-color-on-surface-variant)]">
                  <span className="font-semibold text-[var(--md-sys-color-primary)] uppercase tracking-wider">
                    {article.categoryLabel}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{article.readTimeMinutes} {t('common.minutes')}</span>
                  </span>
                </div>
                <h3 className="text-[18px] font-medium text-[var(--md-sys-color-on-surface)] group-hover:text-[var(--md-sys-color-primary)] transition-colors leading-snug line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-[13px] text-[var(--md-sys-color-on-surface-variant)] line-clamp-2 leading-relaxed">
                  {article.excerpt}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[var(--md-sys-color-outline-variant)]/40 flex items-center justify-between text-xs">
                <span className="text-[var(--md-sys-color-on-surface-variant)]">
                  {article.author.name}
                </span>
                <span className="text-[var(--md-sys-color-primary)] font-medium group-hover:underline flex items-center gap-1">
                  {language === 'uk' ? 'Читати' : language === 'en' ? 'Read' : 'Читать'}
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </M3Card>
          ))}
        </div>
      </section>

      {/* 6. FAQ SECTION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-[11px] sm:text-[12px] font-semibold text-[var(--md-sys-color-primary)] uppercase tracking-wider block">
            {content.faqSection.kicker}
          </span>
          <h2 className="text-fluid-headline font-normal text-[var(--md-sys-color-on-surface)]">
            {content.faqSection.title}
          </h2>
          <p className="text-[13px] sm:text-[15px] text-[var(--md-sys-color-on-surface-variant)]">
            {content.faqSection.subtitle}
          </p>
        </div>

        <div className="space-y-3">
          {content.faqSection.items.map((item, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-[var(--radius-card,20px)] bg-[var(--md-sys-color-surface-container)] border border-[var(--md-sys-color-outline-variant)]/60 overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer hover:bg-[var(--md-sys-color-surface-container-high)] transition-colors"
                >
                  <span className="text-[15px] sm:text-[16px] font-medium text-[var(--md-sys-color-on-surface)] leading-snug">
                    {item.q}
                  </span>
                  <span className="text-[var(--md-sys-color-on-surface-variant)] shrink-0">
                    {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-[13px] sm:text-[14px] leading-relaxed text-[var(--md-sys-color-on-surface-variant)] border-t border-[var(--md-sys-color-outline-variant)]/30">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 7. FINAL CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-14 rounded-[var(--radius-card,24px)] bg-[var(--md-sys-color-primary-container)] text-[var(--md-sys-color-on-primary-container)] flex flex-col md:flex-row items-start md:items-center justify-between gap-8 shadow-xs">
          <div className="space-y-2 max-w-2xl">
            <h2 className="text-[24px] sm:text-[32px] font-normal leading-tight font-display">
              {content.finalCta.title}
            </h2>
            <p className="text-[14px] sm:text-[16px] opacity-90 leading-relaxed">
              {content.finalCta.subtitle}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0 w-full sm:w-auto">
            <M3Button
              variant="filled"
              size="lg"
              onClick={() => navigateTo('offerings', { itemId: 'dyakov-strategic-session' })}
              trailingIcon={<ArrowRight className="w-4 h-4" />}
              className="w-full sm:w-auto justify-center min-h-[48px]"
            >
              {content.finalCta.primaryBtn}
            </M3Button>
            <M3Button
              variant="outlined"
              size="lg"
              onClick={() => navigateTo('tests')}
              className="w-full sm:w-auto justify-center min-h-[48px] border-[var(--md-sys-color-on-primary-container)]/40 text-[var(--md-sys-color-on-primary-container)]"
            >
              {content.finalCta.secondaryBtn}
            </M3Button>
          </div>
        </div>
      </section>
    </div>
  );
};
