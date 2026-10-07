import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { M3ColorScheme, M3ThemeSeed, M3_PALETTES } from '../tokens/colors.ts';
import { storageService } from '../../../services/storage/storageService.ts';

interface M3ThemeContextType {
  isDark: boolean;
  toggleDarkMode: () => void;
  setDarkMode: (dark: boolean) => void;
  themeSeed: M3ThemeSeed;
  setThemeSeed: (seed: M3ThemeSeed) => void;
  scheme: M3ColorScheme;
  availableSeeds: { id: M3ThemeSeed; name: string; hex: string }[];
}

const M3ThemeContext = createContext<M3ThemeContextType | undefined>(undefined);

const THEME_SEED_STORAGE_KEY = 'm3_theme_seed_v1';
const THEME_DARK_STORAGE_KEY = 'm3_theme_dark_v1';

export const M3ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [themeSeed, setThemeSeedState] = useState<M3ThemeSeed>(() => {
    return storageService.getItem<M3ThemeSeed>(THEME_SEED_STORAGE_KEY, 'indigo');
  });

  const [isDark, setIsDarkState] = useState<boolean>(() => {
    return storageService.getItem<boolean>(THEME_DARK_STORAGE_KEY, false);
  });

  const palette = M3_PALETTES[themeSeed] || M3_PALETTES.indigo;
  const scheme = isDark ? palette.dark : palette.light;

  useEffect(() => {
    if (typeof document === 'undefined') return;

    const root = document.documentElement;

    // Apply color CSS variables
    root.style.setProperty('--md-sys-color-primary', scheme.primary);
    root.style.setProperty('--md-sys-color-on-primary', scheme.onPrimary);
    root.style.setProperty('--md-sys-color-primary-container', scheme.primaryContainer);
    root.style.setProperty('--md-sys-color-on-primary-container', scheme.onPrimaryContainer);

    root.style.setProperty('--md-sys-color-secondary', scheme.secondary);
    root.style.setProperty('--md-sys-color-on-secondary', scheme.onSecondary);
    root.style.setProperty('--md-sys-color-secondary-container', scheme.secondaryContainer);
    root.style.setProperty('--md-sys-color-on-secondary-container', scheme.onSecondaryContainer);

    root.style.setProperty('--md-sys-color-tertiary', scheme.tertiary);
    root.style.setProperty('--md-sys-color-on-tertiary', scheme.onTertiary);
    root.style.setProperty('--md-sys-color-tertiary-container', scheme.tertiaryContainer);
    root.style.setProperty('--md-sys-color-on-tertiary-container', scheme.onTertiaryContainer);

    root.style.setProperty('--md-sys-color-error', scheme.error);
    root.style.setProperty('--md-sys-color-on-error', scheme.onError);
    root.style.setProperty('--md-sys-color-error-container', scheme.errorContainer);
    root.style.setProperty('--md-sys-color-on-error-container', scheme.onErrorContainer);

    root.style.setProperty('--md-sys-color-background', scheme.background);
    root.style.setProperty('--md-sys-color-on-background', scheme.onBackground);

    root.style.setProperty('--md-sys-color-surface', scheme.surface);
    root.style.setProperty('--md-sys-color-on-surface', scheme.onSurface);
    root.style.setProperty('--md-sys-color-surface-variant', scheme.surfaceVariant);
    root.style.setProperty('--md-sys-color-on-surface-variant', scheme.onSurfaceVariant);

    root.style.setProperty('--md-sys-color-outline', scheme.outline);
    root.style.setProperty('--md-sys-color-outline-variant', scheme.outlineVariant);

    root.style.setProperty('--md-sys-color-surface-container-lowest', scheme.surfaceContainerLowest);
    root.style.setProperty('--md-sys-color-surface-container-low', scheme.surfaceContainerLow);
    root.style.setProperty('--md-sys-color-surface-container', scheme.surfaceContainer);
    root.style.setProperty('--md-sys-color-surface-container-high', scheme.surfaceContainerHigh);
    root.style.setProperty('--md-sys-color-surface-container-highest', scheme.surfaceContainerHighest);

    root.style.setProperty('--md-sys-color-inverse-surface', scheme.inverseSurface);
    root.style.setProperty('--md-sys-color-inverse-on-surface', scheme.inverseOnSurface);
    root.style.setProperty('--md-sys-color-inverse-primary', scheme.inversePrimary);

    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }

    // Set background and text directly on body
    document.body.style.backgroundColor = scheme.background;
    document.body.style.color = scheme.onBackground;
  }, [scheme, isDark]);

  const setThemeSeed = (seed: M3ThemeSeed) => {
    setThemeSeedState(seed);
    storageService.setItem(THEME_SEED_STORAGE_KEY, seed);
  };

  const toggleDarkMode = () => {
    const next = !isDark;
    setIsDarkState(next);
    storageService.setItem(THEME_DARK_STORAGE_KEY, next);
  };

  const setDarkMode = (dark: boolean) => {
    setIsDarkState(dark);
    storageService.setItem(THEME_DARK_STORAGE_KEY, dark);
  };

  const availableSeeds = Object.entries(M3_PALETTES).map(([key, pal]) => ({
    id: key as M3ThemeSeed,
    name: pal.name,
    hex: pal.seedHex,
  }));

  return (
    <M3ThemeContext.Provider
      value={{
        isDark,
        toggleDarkMode,
        setDarkMode,
        themeSeed,
        setThemeSeed,
        scheme,
        availableSeeds,
      }}
    >
      {children}
    </M3ThemeContext.Provider>
  );
};

export const useM3Theme = (): M3ThemeContextType => {
  const context = useContext(M3ThemeContext);
  if (!context) {
    throw new Error('useM3Theme must be used within M3ThemeProvider');
  }
  return context;
};
