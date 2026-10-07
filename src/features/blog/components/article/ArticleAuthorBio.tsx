import React from 'react';
import { BlogAuthor } from '../../../../types/blog.ts';
import { useI18n } from '../../../../context/I18nContext.tsx';
import { useNavigation } from '../../../../context/NavigationContext.tsx';
import { M3Button } from '../../../../design-system/m3/components/M3Button.tsx';
import { SmartImage } from '../../../../components/common/SmartImage.tsx';
import { MEDIA_MANIFEST } from '../../../../content/mediaManifest.ts';
import { CheckCircle2, ArrowRight } from 'lucide-react';

interface ArticleAuthorBioProps {
  author: BlogAuthor;
}

export const ArticleAuthorBio: React.FC<ArticleAuthorBioProps> = ({ author }) => {
  const { language } = useI18n();
  const { navigateTo } = useNavigation();

  return (
    <section aria-label="Author Profile" className="my-12 sm:my-16">
      <div className="bg-[var(--md-sys-color-surface-container)] rounded-[var(--radius-card,20px)] p-6 sm:p-10 border border-[var(--md-sys-color-outline-variant)]/60 shadow-xs space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 shrink-0">
              <SmartImage
                src={MEDIA_MANIFEST.author.portraitSquare.src}
                alt={author.name}
                aspectRatio="1:1"
                category="author"
                fallbackInitials={author.avatarInitials}
                containerClassName="!rounded-full border-2 border-[var(--md-sys-color-surface)] shadow-2xs"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-[18px] sm:text-[20px] font-medium text-[var(--md-sys-color-on-surface)]">
                  {author.name}
                </h3>
                {author.verified && (
                  <CheckCircle2 className="w-4 h-4 text-[var(--md-sys-color-primary)] fill-[var(--md-sys-color-primary)]/20" />
                )}
              </div>
              <p className="text-[13px] text-[var(--md-sys-color-primary)] font-medium">
                {author.role} · {author.affiliation}
              </p>
            </div>
          </div>

          <M3Button
            size="md"
            variant="filled"
            onClick={() => navigateTo('offerings')}
            trailingIcon={<ArrowRight className="w-4 h-4" />}
            className="w-full sm:w-auto justify-center"
          >
            {language === 'en' ? 'Book Private Session' : language === 'ru' ? 'Записаться на сессию' : 'Записатися на сесію'}
          </M3Button>
        </div>

        {author.bio && (
          <p className="text-[14px] leading-relaxed text-[var(--md-sys-color-on-surface-variant)] pt-4 border-t border-[var(--md-sys-color-outline-variant)]/40">
            {author.bio}
          </p>
        )}
      </div>
    </section>
  );
};
