import React from 'react';
import { BlogArticle } from '../../../../types/blog.ts';
import { useI18n } from '../../../../context/I18nContext.tsx';
import { useNavigation } from '../../../../context/NavigationContext.tsx';
import { M3Card, M3Button } from '../../../../design-system/index.ts';
import { Clock, ArrowRight } from 'lucide-react';

interface ArticleNextReadsProps {
  articles: BlogArticle[];
}

export const ArticleNextReads: React.FC<ArticleNextReadsProps> = ({ articles }) => {
  const { language, t } = useI18n();
  const { navigateTo } = useNavigation();

  if (articles.length === 0) return null;

  return (
    <footer className="mt-16 sm:mt-24 pt-12 border-t border-[var(--md-sys-color-outline-variant)]/40 space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <span className="text-[11px] font-mono uppercase tracking-widest text-[var(--md-sys-color-primary)] font-bold block">
            {language === 'en' ? 'EDITORIAL SELECTIONS' : language === 'ru' ? 'РЕДАКЦИОННЫЕ РЕКОМЕНДАЦИИ' : 'РЕДАКЦІЙНІ РЕКОМЕНДАЦІЇ'}
          </span>
          <h2 className="text-[22px] sm:text-[26px] font-normal text-[var(--md-sys-color-on-surface)] mt-1">
            {language === 'en' ? 'Continue Reading' : language === 'ru' ? 'Продолжайте чтение' : 'Продовжуйте читання'}
          </h2>
        </div>
        <M3Button
          variant="text"
          size="sm"
          onClick={() => navigateTo('blog')}
          trailingIcon={<ArrowRight className="w-4 h-4" />}
        >
          {language === 'en' ? 'All Publications' : language === 'ru' ? 'Все статьи' : 'Всі матеріали'}
        </M3Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {articles.map(article => (
          <M3Card
            key={article.id}
            variant="outlined"
            interactive
            onClick={() => {
              navigateTo('blog', { itemId: article.slug });
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="p-6 sm:p-8 flex flex-col justify-between group cursor-pointer"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-[var(--md-sys-color-on-surface-variant)]">
                <span className="font-semibold text-[var(--md-sys-color-primary)] uppercase tracking-wider">
                  {article.categoryLabel}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{article.readTimeMinutes} {t('common.minutes')}</span>
                </span>
              </div>

              <h3 className="text-[18px] sm:text-[20px] font-medium text-[var(--md-sys-color-on-surface)] group-hover:text-[var(--md-sys-color-primary)] transition-colors leading-snug line-clamp-2">
                {article.title}
              </h3>

              <p className="text-[13px] text-[var(--md-sys-color-on-surface-variant)] line-clamp-2 leading-relaxed">
                {article.excerpt}
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-[var(--md-sys-color-outline-variant)]/40 flex items-center justify-between text-[12px]">
              <span className="text-[var(--md-sys-color-on-surface-variant)]">{article.author.name}</span>
              <span className="text-[var(--md-sys-color-primary)] font-medium group-hover:underline flex items-center gap-1">
                {language === 'en' ? 'Read publication' : language === 'ru' ? 'Читать' : 'Читати'}
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </M3Card>
        ))}
      </div>
    </footer>
  );
};
