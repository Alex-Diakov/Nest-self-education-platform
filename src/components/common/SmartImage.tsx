import React, { useState } from 'react';
import { User, BookOpen, Award, Sparkles, Image as ImageIcon } from 'lucide-react';

export type AspectRatioPreset = '16:9' | '4:3' | '1:1' | '3:4' | 'auto';
export type ImageFallbackCategory = 'author' | 'blog' | 'offering' | 'certificate' | 'general';

export interface SmartImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src?: string;
  alt: string;
  aspectRatio?: AspectRatioPreset;
  category?: ImageFallbackCategory;
  fallbackInitials?: string;
  className?: string;
  containerClassName?: string;
}

export const SmartImage: React.FC<SmartImageProps> = ({
  src,
  alt,
  aspectRatio = '16:9',
  category = 'general',
  fallbackInitials,
  className = '',
  containerClassName = '',
  ...props
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const aspectRatioClass = {
    '16:9': 'aspect-video',
    '4:3': 'aspect-[4/3]',
    '1:1': 'aspect-square',
    '3:4': 'aspect-[3/4]',
    'auto': '',
  }[aspectRatio];

  const renderFallbackIcon = () => {
    switch (category) {
      case 'author':
        return <User className="w-1/3 h-1/3 max-w-12 max-h-12 opacity-60 text-[var(--md-sys-color-primary)]" />;
      case 'blog':
        return <BookOpen className="w-1/3 h-1/3 max-w-10 max-h-10 opacity-60 text-[var(--md-sys-color-primary)]" />;
      case 'offering':
        return <Sparkles className="w-1/3 h-1/3 max-w-10 max-h-10 opacity-60 text-[var(--md-sys-color-secondary)]" />;
      case 'certificate':
        return <Award className="w-1/3 h-1/3 max-w-10 max-h-10 opacity-60 text-[var(--md-sys-color-tertiary)]" />;
      default:
        return <ImageIcon className="w-1/3 h-1/3 max-w-10 max-h-10 opacity-60 text-[var(--md-sys-color-on-surface-variant)]" />;
    }
  };

  const showFallback = !src || hasError;

  return (
    <div
      className={`relative overflow-hidden bg-[var(--md-sys-color-surface-container)] rounded-[var(--radius-card,20px)] ${aspectRatioClass} ${containerClassName}`}
    >
      {/* 1. Elegant Fallback Surface (shown while loading or when image is absent) */}
      {showFallback ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center select-none bg-gradient-to-br from-[var(--md-sys-color-surface-container)] to-[var(--md-sys-color-surface-container-high)]">
          {fallbackInitials ? (
            <span className="font-display font-bold text-2xl sm:text-3xl text-[var(--md-sys-color-primary)] opacity-80">
              {fallbackInitials}
            </span>
          ) : (
            renderFallbackIcon()
          )}
          <span className="text-[11px] font-mono tracking-wider uppercase text-[var(--md-sys-color-on-surface-variant)]/70 mt-2 line-clamp-1 max-w-[85%]">
            {alt}
          </span>
        </div>
      ) : (
        <>
          {/* Skeleton placeholder while loading */}
          {!isLoaded && (
            <div className="absolute inset-0 flex items-center justify-center animate-pulse bg-[var(--md-sys-color-surface-container-high)]" />
          )}

          {/* Real Loaded Image */}
          <img
            src={src}
            alt={alt}
            loading="lazy"
            decoding="async"
            onLoad={() => setIsLoaded(true)}
            onError={() => setHasError(true)}
            className={`w-full h-full object-cover transition-opacity duration-300 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            } ${className}`}
            {...props}
          />
        </>
      )}
    </div>
  );
};
