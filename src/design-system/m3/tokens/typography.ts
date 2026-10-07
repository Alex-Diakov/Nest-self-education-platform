/**
 * Material Design 3 Typography Scale Tokens
 * Reference: https://m3.material.io/styles/typography/type-scale-tokens
 */

export const M3_TYPOGRAPHY = {
  // Display (e-Ukraine Head)
  displayLarge: 'text-[57px] leading-[64px] tracking-[-0.25px] font-normal font-display',
  displayMedium: 'text-[45px] leading-[52px] tracking-[0px] font-normal font-display',
  displaySmall: 'text-[36px] leading-[44px] tracking-[0px] font-normal font-display',

  // Headline (e-Ukraine Head)
  headlineLarge: 'text-[32px] leading-[40px] tracking-[0px] font-normal font-display',
  headlineMedium: 'text-[28px] leading-[36px] tracking-[0px] font-normal font-display',
  headlineSmall: 'text-[24px] leading-[32px] tracking-[0px] font-normal font-display',

  // Title (e-Ukraine)
  titleLarge: 'text-[22px] leading-[28px] tracking-[0px] font-normal font-sans',
  titleMedium: 'text-[16px] leading-[24px] tracking-[0.15px] font-medium font-sans',
  titleSmall: 'text-[14px] leading-[20px] tracking-[0.1px] font-medium font-sans',

  // Label (e-Ukraine)
  labelLarge: 'text-[14px] leading-[20px] tracking-[0.1px] font-medium font-sans',
  labelMedium: 'text-[12px] leading-[16px] tracking-[0.5px] font-medium font-sans',
  labelSmall: 'text-[11px] leading-[16px] tracking-[0.5px] font-medium font-sans',

  // Body (e-Ukraine)
  bodyLarge: 'text-[16px] leading-[24px] tracking-[0.5px] font-normal font-sans',
  bodyMedium: 'text-[14px] leading-[20px] tracking-[0.25px] font-normal font-sans',
  bodySmall: 'text-[12px] leading-[16px] tracking-[0.4px] font-normal font-sans',
} as const;

export type M3TypographyRole = keyof typeof M3_TYPOGRAPHY;
