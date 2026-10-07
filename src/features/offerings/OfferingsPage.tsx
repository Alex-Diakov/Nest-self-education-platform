import React, { useState, useEffect } from 'react';
import { offeringsService } from '../../services/offerings/offeringsService.ts';
import { EducationalOffering, OfferingPlan } from '../../types/offering.ts';
import { useNavigation } from '../../context/NavigationContext.tsx';
import { useI18n } from '../../context/I18nContext.tsx';
import { BookingModal } from './components/BookingModal.tsx';
import { M3Button, M3Card, CatalogLayout } from '../../design-system/index.ts';
import { Check, ArrowUpRight } from 'lucide-react';

export const OfferingsPage: React.FC = () => {
  const { currentRoute } = useNavigation();
  const { language, t } = useI18n();
  const [selectedOffering, setSelectedOffering] = useState<EducationalOffering | null>(null);
  const [selectedPlan, setSelectedPlan] = useState<OfferingPlan | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const offerings = offeringsService.getAllOfferings(language);

  useEffect(() => {
    if (currentRoute.itemId) {
      const found = offeringsService.getOfferingBySlug(currentRoute.itemId, language);
      if (found) {
        setSelectedOffering(found);
        setTimeout(() => {
          const el = document.getElementById(found.slug);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      }
    }
  }, [currentRoute.itemId, language]);

  const handleOpenBooking = (offering: EducationalOffering, plan?: OfferingPlan) => {
    setSelectedOffering(offering);
    setSelectedPlan(plan || null);
    setIsModalOpen(true);
  };

  return (
    <CatalogLayout
      badge={t('offeringsSection.pageBadge')}
      title={t('offeringsSection.pageTitle')}
      subtitle={t('offeringsSection.pageSubtitle')}
    >
      {/* Offerings Stack */}
      <div className="space-y-12">
        {offerings.map(offering => (
          <section
            key={offering.id}
            id={offering.slug}
          >
            <M3Card
              variant="outlined"
              className="p-6 sm:p-10 space-y-8"
            >
              {/* Header info */}
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-6 border-b border-[var(--md-sys-color-outline-variant)]/40">
                <div className="space-y-3 max-w-2xl">
                  <div className="flex items-center gap-2 text-[12px] text-[var(--md-sys-color-primary)] font-semibold">
                    <span>{offering.categoryLabel}</span>
                    <span aria-hidden="true">·</span>
                    <span>{offering.duration}</span>
                    <span aria-hidden="true">·</span>
                    <span>{offering.format}</span>
                  </div>
                  <h2 className="text-[26px] sm:text-[30px] font-normal text-[var(--md-sys-color-on-surface)]">
                    {offering.title}
                  </h2>
                  <p className="text-[14px] text-[var(--md-sys-color-on-surface-variant)] leading-relaxed">
                    {offering.fullDescription}
                  </p>
                </div>

                <div className="shrink-0 flex flex-col sm:flex-row lg:flex-col gap-3">
                  <M3Button
                    variant="filled"
                    onClick={() => handleOpenBooking(offering)}
                    trailingIcon={<ArrowUpRight className="w-4 h-4" />}
                  >
                    {t('offeringsSection.enrollBtn')}
                  </M3Button>
                </div>
              </div>

              {/* Target & Outcomes 2-col */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[13px] leading-relaxed">
                <div className="space-y-2">
                  <h3 className="font-semibold text-[var(--md-sys-color-on-surface)] uppercase tracking-wider text-[11px]">
                    {t('offeringsSection.audienceTitle')}:
                  </h3>
                  <ul className="space-y-2 text-[var(--md-sys-color-on-surface-variant)]">
                    {offering.targetAudience.map((target, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--md-sys-color-primary)] shrink-0 mt-2" />
                        <span>{target}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2">
                  <h3 className="font-semibold text-[var(--md-sys-color-on-surface)] uppercase tracking-wider text-[11px]">
                    {t('offeringsSection.outcomesTitle')}:
                  </h3>
                  <ul className="space-y-2 text-[var(--md-sys-color-on-surface-variant)]">
                    {offering.outcomes.map((outcome, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Pricing / Modules Tiers */}
              <div className="pt-6 border-t border-[var(--md-sys-color-outline-variant)]/40">
                <h3 className="text-[16px] font-medium text-[var(--md-sys-color-on-surface)] mb-4">
                  {language === 'uk' ? 'Варіанти участі та тарифи' : language === 'en' ? 'Tiers & Pricing' : 'Варианты участия и тарифы'}
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {offering.plans.map(plan => (
                    <M3Card
                      key={plan.id}
                      variant={plan.popular ? 'elevated' : 'outlined'}
                      className={`p-6 flex flex-col justify-between transition-all ${
                        plan.popular ? 'ring-2 ring-[var(--md-sys-color-primary)] bg-[var(--md-sys-color-primary-container)]/10' : ''
                      }`}
                    >
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <h4 className="text-[16px] font-medium text-[var(--md-sys-color-on-surface)]">{plan.name}</h4>
                          {plan.popular && (
                            <span className="text-[11px] font-semibold text-[var(--md-sys-color-primary)] bg-[var(--md-sys-color-primary-container)] px-2.5 py-0.5 rounded-full">
                              {language === 'uk' ? 'Рекомендовано' : language === 'en' ? 'Recommended' : 'Популярный'}
                            </span>
                          )}
                        </div>
                        <p className="text-[13px] text-[var(--md-sys-color-on-surface-variant)]">{plan.description}</p>
                        <div className="pt-2">
                          <span className="text-[28px] font-mono font-bold text-[var(--md-sys-color-on-surface)]">{plan.price}</span>
                          <span className="text-[12px] text-[var(--md-sys-color-on-surface-variant)] ml-2">/ {plan.period}</span>
                        </div>
                        <ul className="space-y-2 pt-2 text-[12px] text-[var(--md-sys-color-on-surface-variant)]">
                          {plan.features.map((feat, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                              <Check className="w-3.5 h-3.5 text-[var(--md-sys-color-primary)] shrink-0" />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-6">
                        <M3Button
                          fullWidth
                          variant={plan.popular ? 'filled' : 'outlined'}
                          onClick={() => handleOpenBooking(offering, plan)}
                        >
                          {t('offeringsSection.enrollBtn')}
                        </M3Button>
                      </div>
                    </M3Card>
                  ))}
                </div>
              </div>
            </M3Card>
          </section>
        ))}
      </div>

      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        offering={selectedOffering}
        selectedPlan={selectedPlan}
      />
    </CatalogLayout>
  );
};
