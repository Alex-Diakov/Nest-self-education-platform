import React, { useState } from 'react';
import { blogService } from '../../services/blog/blogService.ts';
import { useNavigation } from '../../context/NavigationContext.tsx';
import { useI18n } from '../../context/I18nContext.tsx';
import { ArticlePage } from './components/ArticlePage.tsx';
import { M3Chip, M3Card, CatalogLayout } from '../../design-system/index.ts';
import { Search, ArrowRight, Clock, BookOpen } from 'lucide-react';

export const BlogPage: React.FC = () => {
  const { currentRoute, navigateTo } = useNavigation();
  const { language, t } = useI18n();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // 1. If viewing a specific article via slug (#/blog/:slug), render the dedicated Editorial Article Page!
  if (currentRoute.itemId) {
    const article = blogService.getArticleBySlug(currentRoute.itemId, language);
    if (article) {
      return <ArticlePage article={article} />;
    }
  }

  // 2. Otherwise render the Editorial Blog Index
  const categories = blogService.getCategories(language);
  const articles = blogService.searchArticles(searchQuery, selectedCategory, language);
  const featured = articles.find(a => a.featured) || articles[0];
  const regularArticles = articles.filter(a => a.id !== featured?.id);

  return (
    <CatalogLayout
      badge={t('blogSection.pageBadge')}
      badgeKicker={language === 'en' ? 'Cognitive Science & Profiling' : language === 'ru' ? 'Когнитивистика и профайлинг' : 'Когнітивістика та профайлінг'}
      title={t('blogSection.pageTitle')}
      subtitle={t('blogSection.pageSubtitle')}
      filters={
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 py-1">
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

          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-[var(--md-sys-color-on-surface-variant)] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder={t('blogSection.searchPlaceholder')}
              className="w-full pl-10 pr-4 py-2 text-[13px] bg-[var(--md-sys-color-surface)] border border-[var(--md-sys-color-outline-variant)] rounded-[var(--radius-input,12px)] text-[var(--md-sys-color-on-surface)] placeholder:text-[var(--md-sys-color-on-surface-variant)]/70 focus:outline-hidden focus:border-[var(--md-sys-color-primary)]"
            />
          </div>
        </div>
      }
    >

      {/* Featured Article Card (Substack / Atlantic Editorial Style) */}
      {featured && !searchQuery && selectedCategory === 'all' && (
        <section aria-labelledby="featured-article-heading">
          <h2 id="featured-article-heading" className="sr-only">
            {language === 'uk' ? 'Головний матеріал' : language === 'en' ? 'Featured Publication' : 'Главный материал'}
          </h2>
          <M3Card
            variant="elevated"
            interactive
            onClick={() => navigateTo('blog', { itemId: featured.slug })}
            className="p-6 sm:p-10 group cursor-pointer"
          >
            <div className="max-w-4xl space-y-4">
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[var(--md-sys-color-on-surface-variant)]">
                <span className="font-semibold text-[var(--md-sys-color-primary)] uppercase tracking-wider">
                  {featured.categoryLabel}
                </span>
                <span aria-hidden="true">·</span>
                <span>{featured.publishedDate}</span>
                <span aria-hidden="true">·</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{featured.readTimeMinutes} {t('common.minutes')}</span>
                </span>
              </div>

              <h3 className="text-[20px] sm:text-[28px] font-normal text-[var(--md-sys-color-on-surface)] group-hover:text-[var(--md-sys-color-primary)] transition-colors leading-tight">
                {featured.title}
              </h3>

              <p className="text-[14px] sm:text-[16px] text-[var(--md-sys-color-on-surface-variant)] leading-relaxed">
                {featured.excerpt}
              </p>

              <div className="pt-4 flex items-center justify-between border-t border-[var(--md-sys-color-outline-variant)]/30">
                <div className="flex items-center gap-2 text-[13px] text-[var(--md-sys-color-on-surface-variant)]">
                  <div className="w-7 h-7 rounded-full bg-[var(--md-sys-color-primary-container)] text-[var(--md-sys-color-on-primary-container)] flex items-center justify-center font-bold text-[11px]">
                    {featured.author.avatarInitials}
                  </div>
                  <span>{featured.author.name}</span>
                </div>

                <span className="text-[13px] text-[var(--md-sys-color-primary)] font-medium group-hover:underline flex items-center gap-1">
                  {t('blogSection.readArticle')}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          </M3Card>
        </section>
      )}

      {/* Regular Articles Grid */}
      <section aria-labelledby="all-articles-heading" className="space-y-6">
        <h2 id="all-articles-heading" className="sr-only">
          {language === 'uk' ? 'Список матеріалів' : language === 'en' ? 'Publications' : 'Список статей'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(searchQuery || selectedCategory !== 'all' ? articles : regularArticles).map(article => (
            <M3Card
              key={article.id}
              variant="outlined"
              interactive
              onClick={() => navigateTo('blog', { itemId: article.slug })}
              className="p-6 flex flex-col justify-between group cursor-pointer"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-[var(--md-sys-color-on-surface-variant)]">
                  <span className="font-semibold text-[var(--md-sys-color-primary)]">{article.categoryLabel}</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{article.readTimeMinutes} {t('common.minutes')}</span>
                  </span>
                </div>

                <h3 className="text-[17px] font-medium text-[var(--md-sys-color-on-surface)] group-hover:text-[var(--md-sys-color-primary)] transition-colors leading-snug line-clamp-2">
                  {article.title}
                </h3>

                <p className="text-[13px] text-[var(--md-sys-color-on-surface-variant)] leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[var(--md-sys-color-outline-variant)]/40 flex items-center justify-between text-[12px]">
                <span className="text-[var(--md-sys-color-on-surface-variant)]">{article.author.name}</span>
                <span className="text-[var(--md-sys-color-primary)] font-medium group-hover:underline flex items-center gap-1">
                  {language === 'en' ? 'Read article' : language === 'ru' ? 'Читать' : 'Читати'}
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </M3Card>
          ))}
        </div>

        {articles.length === 0 && (
          <div className="text-center py-12 bg-[var(--md-sys-color-surface-container)] rounded-[20px] p-8 space-y-3">
            <BookOpen className="w-8 h-8 text-[var(--md-sys-color-on-surface-variant)] mx-auto opacity-50" />
            <p className="text-[15px] font-medium text-[var(--md-sys-color-on-surface)]">
              {t('common.searchEmpty')}
            </p>
            <p className="text-[13px] text-[var(--md-sys-color-on-surface-variant)]">
              {language === 'en' ? 'Try changing your search keywords or filter category.' : language === 'ru' ? 'Попробуйте изменить поисковый запрос или фильтр.' : 'Спробуйте змінити пошуковий запит або обрати іншу категорію.'}
            </p>
          </div>
        )}
      </section>
    </CatalogLayout>
  );
};
