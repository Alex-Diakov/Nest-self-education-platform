import React, { useState, useEffect } from 'react';
import { Play, Pause, Volume2, RotateCcw } from 'lucide-react';
import { useI18n } from '../../../../context/I18nContext.tsx';

interface ArticleAudioPlayerProps {
  title: string;
  durationMinutes: number;
}

export const ArticleAudioPlayer: React.FC<ArticleAudioPlayerProps> = ({
  title,
  durationMinutes,
}) => {
  const { language } = useI18n();
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState<1 | 1.25 | 1.5>(1);
  const [secondsElapsed, setSecondsElapsed] = useState(0);

  const totalSeconds = durationMinutes * 60;

  useEffect(() => {
    let interval: any;
    if (isPlaying) {
      interval = setInterval(() => {
        setSecondsElapsed(prev => {
          if (prev >= totalSeconds) {
            setIsPlaying(false);
            return 0;
          }
          return prev + 1;
        });
      }, 1000 / playbackSpeed);
    }
    return () => clearInterval(interval);
  }, [isPlaying, playbackSpeed, totalSeconds]);

  const togglePlay = () => setIsPlaying(!isPlaying);

  const handleReset = () => {
    setIsPlaying(false);
    setSecondsElapsed(0);
  };

  const cycleSpeed = () => {
    if (playbackSpeed === 1) setPlaybackSpeed(1.25);
    else if (playbackSpeed === 1.25) setPlaybackSpeed(1.5);
    else setPlaybackSpeed(1);
  };

  const progressPercent = Math.min(100, (secondsElapsed / totalSeconds) * 100);
  const minutes = Math.floor(secondsElapsed / 60);
  const seconds = secondsElapsed % 60;

  return (
    <div className="my-6 p-4 sm:p-5 rounded-[20px] bg-[var(--md-sys-color-surface-container)] border border-[var(--md-sys-color-outline-variant)]/60 shadow-2xs space-y-3">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <button
            onClick={togglePlay}
            className="w-11 h-11 rounded-full bg-[var(--md-sys-color-primary)] text-[var(--md-sys-color-on-primary)] flex items-center justify-center shadow-sm hover:scale-105 active:scale-95 transition-all cursor-pointer shrink-0"
            aria-label={isPlaying ? 'Pause audio' : 'Play audio narration'}
          >
            {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current ml-0.5" />}
          </button>

          <div className="space-y-0.5 min-w-0">
            <span className="text-[11px] font-mono uppercase tracking-wider text-[var(--md-sys-color-primary)] font-semibold flex items-center gap-1.5">
              <Volume2 className="w-3.5 h-3.5" />
              <span>{language === 'en' ? 'Audio Edition' : language === 'ru' ? 'Аудио-версия' : 'Аудіо-версія'}</span>
            </span>
            <p className="text-[13px] font-medium text-[var(--md-sys-color-on-surface)] truncate">
              {title}
            </p>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-2 self-end sm:self-center">
          {/* Animated sound bars when playing */}
          <div className="flex items-end gap-0.5 h-4 px-2" aria-hidden="true">
            <span className={`w-0.5 bg-[var(--md-sys-color-primary)] rounded-full transition-all duration-300 ${isPlaying ? 'h-4 animate-pulse' : 'h-1.5'}`} />
            <span className={`w-0.5 bg-[var(--md-sys-color-primary)] rounded-full transition-all duration-200 ${isPlaying ? 'h-3 animate-pulse delay-75' : 'h-2'}`} />
            <span className={`w-0.5 bg-[var(--md-sys-color-primary)] rounded-full transition-all duration-300 ${isPlaying ? 'h-4 animate-pulse delay-150' : 'h-1'}`} />
            <span className={`w-0.5 bg-[var(--md-sys-color-primary)] rounded-full transition-all duration-150 ${isPlaying ? 'h-2 animate-pulse delay-100' : 'h-2.5'}`} />
          </div>

          <button
            onClick={cycleSpeed}
            className="px-2.5 py-1 rounded-full bg-[var(--md-sys-color-surface)] border border-[var(--md-sys-color-outline-variant)]/60 text-[11px] font-mono font-bold text-[var(--md-sys-color-on-surface)] hover:bg-[var(--md-sys-color-surface-container-high)] cursor-pointer"
            title="Швидкість відтворення"
          >
            {playbackSpeed}x
          </button>

          <button
            onClick={handleReset}
            className="p-1.5 rounded-full text-[var(--md-sys-color-on-surface-variant)] hover:text-[var(--md-sys-color-on-surface)] cursor-pointer"
            title="Скинути"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Progress timeline scrub */}
      <div className="space-y-1">
        <div className="w-full h-1.5 rounded-full bg-[var(--md-sys-color-surface-container-highest)] overflow-hidden">
          <div
            className="h-full bg-[var(--md-sys-color-primary)] rounded-full transition-all duration-200"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
        <div className="flex justify-between text-[10px] font-mono text-[var(--md-sys-color-on-surface-variant)]">
          <span>{String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}</span>
          <span>{durationMinutes}:00</span>
        </div>
      </div>
    </div>
  );
};
