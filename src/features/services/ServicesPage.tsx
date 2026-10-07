import React, { useState, useEffect } from 'react';
import { toolService } from '../../services/services/toolService.ts';
import { EduService } from '../../types/service.ts';
import { useNavigation } from '../../context/NavigationContext.tsx';
import { useI18n } from '../../context/I18nContext.tsx';
import { InteractiveToolRunner } from './components/InteractiveToolRunner.tsx';
import { M3Chip, M3Button, M3Card, CatalogLayout } from '../../design-system/index.ts';
import { Play, Sparkles, Activity, Compass, Network } from 'lucide-react';

export const ServicesPage: React.FC = () => {
  const { currentRoute, navigateTo } = useNavigation();
  const { language } = useI18n();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeService, setActiveService] = useState<EduService | null>(null);

  const services = toolService.getServicesByCategory(selectedCategory, language);

  useEffect(() => {
    if (currentRoute.itemId) {
      const found = toolService.getServiceBySlug(currentRoute.itemId, language);
      if (found) {
        setActiveService(found);
      }
    } else {
      setActiveService(services[0] || null);
    }
  }, [currentRoute.itemId, language]);

  const categories = [
    {
      id: 'all',
      label: language === 'en' ? 'All Tools' : language === 'ru' ? 'Все инструменты' : 'Всі інструменти',
      count: toolService.getAllServices(language).length,
    },
    {
      id: 'simulation',
      label: language === 'en' ? 'Autonomic & Somatic' : language === 'ru' ? 'Вегетатика и дыхание' : 'Вегетатика та дихання',
    },
    {
      id: 'analytics',
      label: language === 'en' ? 'Cognitive Refactoring' : language === 'ru' ? 'Когнитивная пересборка' : 'Когнітивне перескладання',
    },
    {
      id: 'ai',
      label: language === 'en' ? 'Belief Restructuring' : language === 'ru' ? 'Рефрейминг убеждений' : 'Рефреймінг переконань',
    },
  ];

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Activity': return <Activity className="w-5 h-5 text-[var(--md-sys-color-primary)]" />;
      case 'Compass': return <Compass className="w-5 h-5 text-[var(--md-sys-color-primary)]" />;
      case 'Network': return <Network className="w-5 h-5 text-[var(--md-sys-color-primary)]" />;
      default: return <Sparkles className="w-5 h-5 text-[var(--md-sys-color-primary)]" />;
    }
  };

  return (
    <CatalogLayout
      badge={language === 'en' ? 'APPLIED PSYCHOTECHNOLOGY' : language === 'ru' ? 'ПРИКЛАДНЫЕ ПСИХОТЕХНОЛОГИИ' : 'ПРИКЛАДНІ ПСИХОТЕХНОЛОГІЇ'}
      badgeKicker={language === 'en' ? 'INTERACTIVE LABS' : language === 'ru' ? 'ИНТЕРАКТИВНЫЕ ЛАБОРАТОРИИ' : 'ІНТЕРАКТИВНІ ЛАБОРАТОРІЇ'}
      title={
        language === 'en'
          ? 'Interactive Somatic & Cognitive Recalibration Simulators'
          : language === 'ru'
          ? 'Интерактивные симуляторы и тренажеры саморегуляции'
          : 'Інтерактивні симулятори та тренажери саморегуляції'
      }
      subtitle={
        language === 'en'
          ? 'Practical interactive tools for real-time vagal tone stabilization, cognitive distortion disputation, and decision-risk deconstruction.'
          : language === 'ru'
          ? 'Практические инструменты для быстрой стабилизации вегетативного тонуса, деконструкции тревожных мыслей и анализа решений в реальном времени.'
          : 'Практичні інструменти для швидкої стабілізації вегетативного тонусу, деконструкції тривожних думок та аналізу рішень у реальному часі.'
      }
      filters={
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            {categories.map(cat => (
              <M3Chip
                key={cat.id}
                variant="filter"
                selected={selectedCategory === cat.id}
                count={cat.count}
                onClick={() => setSelectedCategory(cat.id)}
              >
                {cat.label}
              </M3Chip>
            ))}
          </div>
          <span className="text-xs text-[var(--md-sys-color-on-surface-variant)] font-mono hidden sm:inline-block">
            {language === 'en' ? 'NextSelf Vagal & Cognitive Engine' : language === 'ru' ? 'Нейробиологический движок NextSelf' : 'Нейробіологічний рушій NextSelf'}
          </span>
        </div>
      }
    >

      {/* Active Interactive Stage Runner */}
      {activeService && (
        <section aria-labelledby="active-runner-heading" className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 id="active-runner-heading" className="text-[14px] font-semibold uppercase tracking-wider text-[var(--md-sys-color-primary)]">
              {language === 'en' ? 'Active Simulator: ' : language === 'ru' ? 'Рабочая среда: ' : 'Робоча лабораторія: '}
              {activeService.title}
            </h2>
            <button
              onClick={() => setActiveService(null)}
              className="text-[12px] text-[var(--md-sys-color-on-surface-variant)] hover:text-[var(--md-sys-color-on-surface)] underline cursor-pointer"
            >
              {language === 'en' ? 'Collapse Simulator' : language === 'ru' ? 'Свернуть лабораторию' : 'Згорнути лабораторію'}
            </button>
          </div>
          <InteractiveToolRunner service={activeService} />
        </section>
      )}

      {/* Services Grid with M3 Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
        {services.map(service => {
          const isSelected = activeService?.id === service.id;

          return (
            <M3Card
              key={service.id}
              variant={isSelected ? 'elevated' : 'outlined'}
              className={`p-6 flex flex-col justify-between transition-all ${
                isSelected ? 'ring-2 ring-[var(--md-sys-color-primary)]' : ''
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="p-2.5 bg-[var(--md-sys-color-primary-container)] rounded-[12px]">
                    {getServiceIcon(service.icon)}
                  </div>
                  <div className="text-[12px] text-[var(--md-sys-color-on-surface-variant)] font-medium">
                    <span>{service.categoryLabel}</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-[18px] font-medium text-[var(--md-sys-color-on-surface)]">
                    {service.title}
                  </h3>
                  <p className="text-[13px] text-[var(--md-sys-color-primary)] font-medium mt-1">
                    {service.tagline}
                  </p>
                  <p className="text-[13px] text-[var(--md-sys-color-on-surface-variant)] mt-2 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-3 gap-2 py-3 border-y border-[var(--md-sys-color-outline-variant)]/40 text-xs">
                  {service.metrics.map(m => (
                    <div key={m.label}>
                      <span className="block font-semibold text-[var(--md-sys-color-on-surface)] font-mono tabular-nums text-[13px]">
                        {m.value}
                      </span>
                      <span className="text-[11px] text-[var(--md-sys-color-on-surface-variant)] leading-tight">
                        {m.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Features List */}
                <ul className="space-y-1.5 text-[12px] text-[var(--md-sys-color-on-surface-variant)]">
                  {service.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--md-sys-color-primary)] shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 mt-4 border-t border-[var(--md-sys-color-outline-variant)]/40 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-[12px] text-[var(--md-sys-color-on-surface-variant)]">
                  <span>{language === 'en' ? 'Status:' : language === 'ru' ? 'Статус:' : 'Статус:'}</span>
                  <span className="font-mono text-emerald-600 dark:text-emerald-400 font-medium">
                    {language === 'en' ? 'Ready to run' : language === 'ru' ? 'Готов к запуску' : 'Готовий до запуску'}
                  </span>
                </div>
                <M3Button
                  size="sm"
                  variant={isSelected ? 'filled' : 'outlined'}
                  onClick={() => {
                    setActiveService(service);
                    navigateTo('services', { itemId: service.slug });
                  }}
                  icon={<Play className="w-3.5 h-3.5" />}
                >
                  {isSelected
                    ? (language === 'en' ? 'Active on Stage' : language === 'ru' ? 'Активен на стенде' : 'Активний на стенді')
                    : (language === 'en' ? 'Launch Tool' : language === 'ru' ? 'Запустить сервис' : 'Запустити тренажер')}
                </M3Button>
              </div>
            </M3Card>
          );
        })}
      </div>
    </CatalogLayout>
  );
};
