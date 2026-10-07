import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home, Trash2 } from 'lucide-react';
import { storageService } from '../../services/storage/storageService.ts';
import { M3Button } from '../../design-system/index.ts';

interface Props {
  children: ReactNode;
  fallbackTitle?: string;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
    errorInfo: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error, errorInfo: null };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('[NextSelf Crash Guard] Uncaught error caught by ErrorBoundary:', error, errorInfo);
    this.setState({ errorInfo });
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
  };

  private handleReload = () => {
    window.location.reload();
  };

  private handleClearCacheAndReset = () => {
    storageService.clearAppCache();
    window.location.hash = '';
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[50vh] flex items-center justify-center p-6 bg-[var(--md-sys-color-background)] text-[var(--md-sys-color-on-background)] font-sans">
          <div className="max-w-md w-full bg-[var(--md-sys-color-surface-container)] border border-[var(--md-sys-color-outline-variant)] rounded-[16px] p-6 sm:p-8 space-y-6 shadow-xl text-center">
            <div className="w-14 h-14 mx-auto rounded-full bg-[var(--md-sys-color-error-container)] text-[var(--md-sys-color-on-error-container)] flex items-center justify-center">
              <AlertTriangle className="w-7 h-7" />
            </div>

            <div className="space-y-2">
              <h2 className="text-[20px] font-semibold text-[var(--md-sys-color-on-surface)]">
                {this.props.fallbackTitle || 'Произошла непредвиденная ошибка'}
              </h2>
              <p className="text-[13px] text-[var(--md-sys-color-on-surface-variant)] leading-relaxed">
                Интерфейс временно защитил систему от сбоя. Ваши данные в безопасности. Вы можете перезапустить этот раздел или обновить кэш.
              </p>
            </div>

            {this.state.error && (
              <div className="p-3 bg-[var(--md-sys-color-surface-container-highest)] rounded-[8px] text-[11px] font-mono text-left text-[var(--md-sys-color-error)] overflow-x-auto max-h-32">
                {this.state.error.toString()}
              </div>
            )}

            <div className="flex flex-col gap-2.5 pt-2">
              <M3Button
                variant="filled"
                fullWidth
                size="lg"
                onClick={this.handleReset}
                icon={<RefreshCw className="w-4 h-4" />}
              >
                Попробовать снова
              </M3Button>

              <M3Button
                variant="outlined"
                fullWidth
                size="lg"
                onClick={this.handleReload}
                icon={<Home className="w-4 h-4" />}
              >
                Перезагрузить страницу
              </M3Button>

              <M3Button
                variant="text"
                fullWidth
                size="sm"
                onClick={this.handleClearCacheAndReset}
                icon={<Trash2 className="w-3.5 h-3.5" />}
                className="text-[var(--md-sys-color-on-surface-variant)] hover:text-[var(--md-sys-color-error)]"
              >
                Очистить поврежденный локальный кэш
              </M3Button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
