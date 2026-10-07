/**
 * -----------------------------------------------------------------------------
 * NEXTSELF THEME & DESIGN PRESETS CONTROLLER
 * -----------------------------------------------------------------------------
 * Allows switching the complete visual personality of the application
 * at runtime or defining your custom design during the redesign phase.
 */

export interface DesignPreset {
  id: string;
  name: string;
  description: string;
  tokens: {
    fontPrimary: string;
    fontDisplay: string;
    fontSerif?: string;
    radiusBtn: string;
    radiusCard: string;
    radiusInput: string;
    radiusDialog: string;
    radiusChip: string;
    readingLineHeight: string;
    readingFontSize: string;
  };
}

export const DESIGN_PRESETS: Record<string, DesignPreset> = {
  'editorial-modern': {
    id: 'editorial-modern',
    name: 'Editorial Modern (Default)',
    description: 'Humanistic typography (e-Ukraine), soft organic card radii (20px), pill buttons, maximum readability.',
    tokens: {
      fontPrimary: "'e-Ukraine', system-ui, sans-serif",
      fontDisplay: "'e-Ukraine Head', 'e-Ukraine', sans-serif",
      fontSerif: "'Georgia', serif",
      radiusBtn: '9999px',
      radiusCard: '20px',
      radiusInput: '12px',
      radiusDialog: '24px',
      radiusChip: '9999px',
      readingLineHeight: '1.85',
      readingFontSize: '18px',
    },
  },

  'swiss-minimal': {
    id: 'swiss-minimal',
    name: 'Swiss Architectural',
    description: 'Crisp geometric lines (8px card radius, 6px buttons), high typographic contrast, no redundant ornamentation.',
    tokens: {
      fontPrimary: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      fontDisplay: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      fontSerif: "'Merriweather', Georgia, serif",
      radiusBtn: '8px',
      radiusCard: '12px',
      radiusInput: '8px',
      radiusDialog: '16px',
      radiusChip: '8px',
      readingLineHeight: '1.75',
      readingFontSize: '17px',
    },
  },

  'literary-journal': {
    id: 'literary-journal',
    name: 'Literary Journal (The Atlantic / New Yorker)',
    description: 'Warm intellectual mood with serif headers, classic 16px cards, understated borders, deep reading immersion.',
    tokens: {
      fontPrimary: "'e-Ukraine', Georgia, serif",
      fontDisplay: "'Georgia', 'Times New Roman', serif",
      fontSerif: "'Georgia', serif",
      radiusBtn: '12px',
      radiusCard: '16px',
      radiusInput: '8px',
      radiusDialog: '20px',
      radiusChip: '12px',
      readingLineHeight: '1.9',
      readingFontSize: '19px',
    },
  },

  'executive-monochrome': {
    id: 'executive-monochrome',
    name: 'Executive Tech Lab (Stripe / Linear)',
    description: 'Precision engineering aesthetic: sharp buttons (4px), dark accents, refined micro-borders, dense telemetry.',
    tokens: {
      fontPrimary: "'e-Ukraine', ui-sans-serif, system-ui, sans-serif",
      fontDisplay: "'e-Ukraine Head', ui-sans-serif, system-ui, sans-serif",
      fontSerif: "'JetBrains Mono', monospace",
      radiusBtn: '6px',
      radiusCard: '8px',
      radiusInput: '6px',
      radiusDialog: '12px',
      radiusChip: '6px',
      readingLineHeight: '1.7',
      readingFontSize: '16px',
    },
  },
};

/**
 * Apply a preset to the document root dynamically
 */
export function applyDesignPreset(presetId: string): boolean {
  if (typeof document === 'undefined') return false;

  const preset = DESIGN_PRESETS[presetId];
  if (!preset) return false;

  const root = document.documentElement;
  const { tokens } = preset;

  root.style.setProperty('--font-family-primary', tokens.fontPrimary);
  root.style.setProperty('--font-family-display', tokens.fontDisplay);
  if (tokens.fontSerif) {
    root.style.setProperty('--font-family-serif', tokens.fontSerif);
  }
  root.style.setProperty('--radius-btn', tokens.radiusBtn);
  root.style.setProperty('--radius-card', tokens.radiusCard);
  root.style.setProperty('--radius-input', tokens.radiusInput);
  root.style.setProperty('--radius-dialog', tokens.radiusDialog);
  root.style.setProperty('--radius-chip', tokens.radiusChip);
  root.style.setProperty('--reading-line-height', tokens.readingLineHeight);
  root.style.setProperty('--reading-font-size', tokens.readingFontSize);

  return true;
}

/**
 * Apply custom individual design tokens (ideal for fine-tuning in Figma/Dev)
 */
export function setDesignToken(name: string, value: string): void {
  if (typeof document === 'undefined') return;
  const propertyName = name.startsWith('--') ? name : `--${name}`;
  document.documentElement.style.setProperty(propertyName, value);
}
