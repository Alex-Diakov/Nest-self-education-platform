/**
 * Centralized Font System Configuration for NextSelf
 * Official font: e-Ukraine (https://thedigital.gov.ua/fonts)
 *
 * This configuration makes changing fonts across the entire application effortless.
 * Simply change the font family names or CSS variables below to update the entire app instantly.
 */

export interface FontConfig {
  name: string;
  familyPrimary: string;
  familyDisplay: string;
  familyMono: string;
}

export const ACTIVE_FONT_CONFIG: FontConfig = {
  name: 'e-Ukraine (Ministry of Digital Transformation)',
  familyPrimary: "'e-Ukraine', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  familyDisplay: "'e-Ukraine Head', 'e-Ukraine', sans-serif",
  familyMono: "'JetBrains Mono', ui-monospace, SFMono-Regular, monospace",
};

/**
 * Utility to switch fonts dynamically at runtime across the entire website
 */
export function setGlobalFont(primary: string, display?: string) {
  if (typeof document === 'undefined') return;
  document.documentElement.style.setProperty('--font-family-primary', primary);
  document.documentElement.style.setProperty('--font-family-display', display || primary);
}
