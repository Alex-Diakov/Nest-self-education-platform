import React, { useState, useEffect } from 'react';
import { BlogArticle } from '../../../types/blog.ts';
import { useI18n } from '../../../context/I18nContext.tsx';
import { useToast } from '../../../context/ToastContext.tsx';
import { blogService } from '../../../services/blog/blogService.ts';

import { ArticleHeader } from './article/ArticleHeader.tsx';
import { ArticleExecutiveSummary } from './article/ArticleExecutiveSummary.tsx';
import { ArticleAudioPlayer } from './article/ArticleAudioPlayer.tsx';
import { ArticleTableOfContents } from './article/ArticleTableOfContents.tsx';
import { ArticleBody } from './article/ArticleBody.tsx';
import { ArticleKnowledgeCheck } from './article/ArticleKnowledgeCheck.tsx';
import { ArticleAuthorBio } from './article/ArticleAuthorBio.tsx';
import { ArticleNextReads } from './article/ArticleNextReads.tsx';
import { ArticleFloatingBar } from './article/ArticleFloatingBar.tsx';

interface ArticlePageProps {
  article: BlogArticle;
}

export const ArticlePage: React.FC<ArticlePageProps> = ({ article }) => {
  const { language } = useI18n();
  const { showToast } = useToast();

  const [readingProgress, setReadingProgress] = useState(0);
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'xlarge'>('normal');
  const [activeHeadingIndex, setActiveHeadingIndex] = useState(0);
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setReadingProgress(Math.min(100, Math.max(0, currentProgress)));
      }

      // Track active heading
      article.content.forEach((_, idx) => {
        const el = document.getElementById(`section-${idx}`);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 80) {
            setActiveHeadingIndex(idx);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.scrollTo({ top: 0, behavior: 'smooth' });

    return () => window.removeEventListener('scroll', handleScroll);
  }, [article]);

  const handleShare = () => {
    if (typeof navigator !== 'undefined' && navigator.share) {
      navigator.share({
        title: article.title,
        text: article.excerpt,
        url: window.location.href,
      }).catch(() => {});
    } else if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      const msg = language === 'uk'
        ? 'Посилання на матеріал скопійовано'
        : language === 'en'
        ? 'Article link copied to clipboard'
        : 'Ссылка на статью скопирована в буфер обмена';
      showToast(msg, 'success');
    }
  };

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
    const msg = !isBookmarked
      ? (language === 'uk' ? 'Матеріал збережено в закладки' : language === 'en' ? 'Article saved to bookmarks' : 'Статья сохранена в закладки')
      : (language === 'uk' ? 'Матеріал видалено із закладок' : language === 'en' ? 'Removed from bookmarks' : 'Статья удалена из закладок');
    showToast(msg, 'info');
  };

  const handleSelectSection = (idx: number) => {
    const el = document.getElementById(`section-${idx}`);
    if (el) {
      const yOffset = -100;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setActiveHeadingIndex(idx);
    }
  };

  // Curate next recommended reads
  const allArticles = blogService.getAllArticles(language);
  const relatedArticles = allArticles.filter(a => a.id !== article.id).slice(0, 2);

  return (
    <div className="relative">
      {/* 1. Slim Top Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 right-0 h-[3px] bg-[var(--md-sys-color-surface-container-high)] z-50 pointer-events-none">
        <div
          className="h-full bg-[var(--md-sys-color-primary)] transition-all duration-150 ease-out"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        {/* 2. Article Header with unboxed metadata and reading controls */}
        <ArticleHeader
          article={article}
          fontSize={fontSize}
          setFontSize={setFontSize}
          isBookmarked={isBookmarked}
          onBookmark={handleBookmark}
          onShare={handleShare}
        />

        {/* 3. Executive Summary / TL;DR & Hypotheses */}
        <ArticleExecutiveSummary
          takeaways={article.takeaways}
          keyQuestions={article.keyQuestions}
        />

        {/* Audio Narration Player */}
        <ArticleAudioPlayer
          title={article.title}
          durationMinutes={article.readTimeMinutes}
        />

        {/* 4. Main Two-Column Reading Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start pt-6 sm:pt-10">
          {/* Sticky Desktop Table of Contents (Col 1-4) */}
          <div className="hidden lg:block lg:col-span-4 sticky top-24">
            <ArticleTableOfContents
              sections={article.content}
              activeHeadingIndex={activeHeadingIndex}
              onSelectSection={handleSelectSection}
              tags={article.tags}
            />
          </div>

          {/* Long-form Article Body (Col 5-12) */}
          <main className="lg:col-span-8">
            <ArticleBody
              sections={article.content}
              fontSize={fontSize}
            />

            {/* Interactive EdTech Knowledge Checkpoint */}
            <ArticleKnowledgeCheck
              question={
                article.slug === 'why-nlp-works'
                  ? (language === 'en'
                      ? 'Which cognitive factor directly breaks the visceral adrenaline release loop in under 90 seconds?'
                      : language === 'ru'
                      ? 'Какой фактор напрямую разрывает вегетативную петлю выброса адреналина за 90 секунд?'
                      : 'Який фактор напряму розриває вегетативну петлю викиду адреналіну за 90 секунд?')
                  : article.slug === 'hidden-burnout-vacation'
                  ? (language === 'en'
                      ? 'Why does sudden quiet downtime trigger autonomic tachycardia in high-performing leaders?'
                      : language === 'ru'
                      ? 'Почему резкая тишина на отдыхе вызывает тахикардию и тревогу?'
                      : 'Чому різка тиша на відпочинку викликає тахікардію та тривогу?')
                  : (language === 'en'
                      ? 'Why are logical arguments ineffective against developmental childhood imprints?'
                      : language === 'ru'
                      ? 'Почему рациональные уговоры бессильны против ранних детских импринтов?'
                      : 'Чому раціональні аргументи безсилі проти ранніх дитячих імпринтів?')
              }
              options={
                article.slug === 'why-nlp-works'
                  ? [
                      {
                        id: 'a',
                        text: language === 'en' ? 'Recalibrating spatial submodalities (scale, distance, sound pitch)' : language === 'ru' ? 'Перекалибровка субмодальностей (масштаб, дистанция, тембр голоса)' : 'Перекалібрування субмодальностей (масштаб, дистанція, тембр голосу)',
                        isCorrect: true,
                      },
                      {
                        id: 'b',
                        text: language === 'en' ? 'Long-term analytical discussion of childhood memories' : language === 'ru' ? 'Многомесячный психоанализ детских обид' : 'Багатомісячний психоаналіз дитячих образ',
                        isCorrect: false,
                      },
                      {
                        id: 'c',
                        text: language === 'en' ? 'Suppressing physical sensations through sheer willpower' : language === 'ru' ? 'Подавление эмоций силой воли' : 'Придушення емоцій силою волі',
                        isCorrect: false,
                      },
                    ]
                  : [
                      {
                        id: 'a',
                        text: language === 'en' ? 'The amygdala reacts 250ms ahead of the neocortex, hardcoding somatic trauma' : language === 'ru' ? 'Миндалевидное тело реагирует быстрее неокортекса на 250мс, фиксируя телесный страх' : 'Мигдалеподібне тіло реагує швидше за неокортекс на 250мс, фіксуючи тілесний страх',
                        isCorrect: true,
                      },
                      {
                        id: 'b',
                        text: language === 'en' ? 'Adults simply lack sufficient self-discipline' : language === 'ru' ? 'Взрослым просто не хватает силы воли' : 'Дорослим просто бракує сили волі',
                        isCorrect: false,
                      },
                      {
                        id: 'c',
                        text: language === 'en' ? 'Imprints are imaginary and disappear on their own' : language === 'ru' ? 'Импринты со временем проходят сами' : 'Імпринти з часом минають самі',
                        isCorrect: false,
                      },
                    ]
              }
              explanation={
                language === 'en'
                  ? 'Subcortical survival templates encode in the limbic system before neocortex analysis. Modulation requires structural perceptual mechanics rather than intellectual willpower.'
                  : language === 'ru'
                  ? 'Лимбическая система реагирует на уровне автономных рефлексов. Пересборка требует работы со структурой восприятия, а не с абстрактной логикой.'
                  : 'Лімбічна система реагує на рівні автономних рефлексів. Перескладання потребує роботи зі структурою сприйняття, а не з абстрактною логікою.'
              }
            />

            {/* 5. Author Biography & Private Consultation Box */}
            <ArticleAuthorBio author={article.author} />
          </main>
        </div>

        {/* 6. Curated Next Reads Footer */}
        <ArticleNextReads articles={relatedArticles} />
      </div>

      {/* 7. Floating Reading Companion Pill */}
      <ArticleFloatingBar
        progress={readingProgress}
        isBookmarked={isBookmarked}
        onBookmark={handleBookmark}
        onShare={handleShare}
      />
    </div>
  );
};
