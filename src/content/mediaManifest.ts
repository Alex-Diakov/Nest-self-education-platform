/**
 * -----------------------------------------------------------------------------
 * NEXTSELF MEDIA ASSET REGISTRY
 * -----------------------------------------------------------------------------
 * Central map of all photographic, graphic, and banner assets.
 * When you upload new photos to /public/assets/, update or verify the paths here.
 */

export interface MediaAsset {
  src: string;
  alt: string;
  aspectRatio: '16:9' | '4:3' | '1:1' | '3:4';
  description?: string;
}

export const MEDIA_MANIFEST = {
  author: {
    portraitMain: {
      src: '/assets/author/portrait-main.webp',
      alt: 'Олександр Дьяков — дослідник, профайлер',
      aspectRatio: '3:4',
      description: 'Вертикальний портрет автора для сторінки «Про автора»',
    } as MediaAsset,
    portraitSquare: {
      src: '/assets/author/portrait-square.webp',
      alt: 'Олександр Дьяков',
      aspectRatio: '1:1',
      description: 'Квадратний аватар для шапки, карток статей та відгуків',
    } as MediaAsset,
    heroWorkspace: {
      src: '/assets/author/hero-workspace.webp',
      alt: 'Лабораторія психотехнологій NextSelf',
      aspectRatio: '16:9',
      description: 'Атмосферний кадр робочого процесу для головного екрана',
    } as MediaAsset,
  },

  blog: {
    reimprinting: {
      src: '/assets/blog/nlp-reimprinting.webp',
      alt: 'Реімпринтинг у сучасних умовах ШІ',
      aspectRatio: '16:9',
    } as MediaAsset,
    cybernetics: {
      src: '/assets/blog/cybernetics-anxiety.webp',
      alt: 'Кібернетика мислення та субмодальності',
      aspectRatio: '16:9',
    } as MediaAsset,
    burnout: {
      src: '/assets/blog/burnout-crash.webp',
      alt: 'Приховане вигорання та адреналіновий обвал',
      aspectRatio: '16:9',
    } as MediaAsset,
  },

  offerings: {
    mindset: {
      src: '/assets/offerings/mindset-blocks.webp',
      alt: 'Робота з мисленням та когнітивними блоками',
      aspectRatio: '16:9',
    } as MediaAsset,
    fears: {
      src: '/assets/offerings/fears-phobias.webp',
      alt: 'Подолання страхів та фобічних реакцій',
      aspectRatio: '16:9',
    } as MediaAsset,
    ocd: {
      src: '/assets/offerings/ocd-breakout.webp',
      alt: 'Вихід із кола нав’язливих думок (ОКР)',
      aspectRatio: '16:9',
    } as MediaAsset,
    strategic: {
      src: '/assets/offerings/strategic-session.webp',
      alt: 'Стратегічна діагностична сесія',
      aspectRatio: '16:9',
    } as MediaAsset,
  },

  og: {
    defaultShare: {
      src: '/assets/og/og-share.webp',
      alt: 'NextSelf — Прикладні психотехнології Олександра Дьякова',
      aspectRatio: '16:9',
    } as MediaAsset,
  },
};
