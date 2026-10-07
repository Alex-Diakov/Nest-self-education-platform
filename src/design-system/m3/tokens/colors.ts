/**
 * Material Design 3 Color System Tokens
 * Reference: https://m3.material.io/styles/color/the-color-system/color-roles
 */

export interface M3ColorScheme {
  primary: string;
  onPrimary: string;
  primaryContainer: string;
  onPrimaryContainer: string;

  secondary: string;
  onSecondary: string;
  secondaryContainer: string;
  onSecondaryContainer: string;

  tertiary: string;
  onTertiary: string;
  tertiaryContainer: string;
  onTertiaryContainer: string;

  error: string;
  onError: string;
  errorContainer: string;
  onErrorContainer: string;

  background: string;
  onBackground: string;

  surface: string;
  onSurface: string;
  surfaceVariant: string;
  onSurfaceVariant: string;

  outline: string;
  outlineVariant: string;

  // M3 Surface Containers
  surfaceContainerLowest: string;
  surfaceContainerLow: string;
  surfaceContainer: string;
  surfaceContainerHigh: string;
  surfaceContainerHighest: string;

  inverseSurface: string;
  inverseOnSurface: string;
  inversePrimary: string;

  shadow: string;
  scrim: string;
  surfaceTint: string;
}

export type M3ThemeSeed = 'indigo' | 'emerald' | 'burgundy' | 'cobalt';

export interface M3ThemePalette {
  name: string;
  seedHex: string;
  light: M3ColorScheme;
  dark: M3ColorScheme;
}

export const M3_PALETTES: Record<M3ThemeSeed, M3ThemePalette> = {
  indigo: {
    name: 'Академический индиго',
    seedHex: '#4258BD',
    light: {
      primary: '#4258BD',
      onPrimary: '#FFFFFF',
      primaryContainer: '#DFE0FF',
      onPrimaryContainer: '#00105C',

      secondary: '#5C5D72',
      onSecondary: '#FFFFFF',
      secondaryContainer: '#E1E0F9',
      onSecondaryContainer: '#191A2C',

      tertiary: '#77536D',
      onTertiary: '#FFFFFF',
      tertiaryContainer: '#FFD7F3',
      onTertiaryContainer: '#2D1227',

      error: '#BA1A1A',
      onError: '#FFFFFF',
      errorContainer: '#FFDAD6',
      onErrorContainer: '#410002',

      background: '#FEFBFF',
      onBackground: '#1B1B21',

      surface: '#FEFBFF',
      onSurface: '#1B1B21',
      surfaceVariant: '#E3E1EC',
      onSurfaceVariant: '#46464F',

      outline: '#777680',
      outlineVariant: '#C7C5D0',

      surfaceContainerLowest: '#FFFFFF',
      surfaceContainerLow: '#F7F2FA',
      surfaceContainer: '#F2EDF6',
      surfaceContainerHigh: '#ECE7F0',
      surfaceContainerHighest: '#E6E1EA',

      inverseSurface: '#303036',
      inverseOnSurface: '#F3F0F7',
      inversePrimary: '#BCC2FF',

      shadow: '#000000',
      scrim: '#000000',
      surfaceTint: '#4258BD',
    },
    dark: {
      primary: '#BCC2FF',
      onPrimary: '#08258E',
      primaryContainer: '#283FA4',
      onPrimaryContainer: '#DFE0FF',

      secondary: '#C5C4DD',
      onSecondary: '#2E2F42',
      secondaryContainer: '#444559',
      onSecondaryContainer: '#E1E0F9',

      tertiary: '#E6BAD7',
      onTertiary: '#45263D',
      tertiaryContainer: '#5D3C54',
      onTertiaryContainer: '#FFD7F3',

      error: '#FFB4AB',
      onError: '#690005',
      errorContainer: '#93000A',
      onErrorContainer: '#FFDAD6',

      background: '#131318',
      onBackground: '#E5E1E9',

      surface: '#131318',
      onSurface: '#E5E1E9',
      surfaceVariant: '#46464F',
      onSurfaceVariant: '#C7C5D0',

      outline: '#91909A',
      outlineVariant: '#46464F',

      surfaceContainerLowest: '#0E0E13',
      surfaceContainerLow: '#1B1B20',
      surfaceContainer: '#1F1F25',
      surfaceContainerHigh: '#2A292F',
      surfaceContainerHighest: '#35343A',

      inverseSurface: '#E5E1E9',
      inverseOnSurface: '#303036',
      inversePrimary: '#4258BD',

      shadow: '#000000',
      scrim: '#000000',
      surfaceTint: '#BCC2FF',
    }
  },
  emerald: {
    name: 'Изумрудный шалфей',
    seedHex: '#006C4C',
    light: {
      primary: '#006C4C',
      onPrimary: '#FFFFFF',
      primaryContainer: '#8EF6C6',
      onPrimaryContainer: '#002114',

      secondary: '#4D6356',
      onSecondary: '#FFFFFF',
      secondaryContainer: '#D0E8D7',
      onSecondaryContainer: '#0A1F15',

      tertiary: '#3D6373',
      onTertiary: '#FFFFFF',
      tertiaryContainer: '#C1E9FB',
      onTertiaryContainer: '#001F29',

      error: '#BA1A1A',
      onError: '#FFFFFF',
      errorContainer: '#FFDAD6',
      onErrorContainer: '#410002',

      background: '#FBFDF9',
      onBackground: '#191C1A',

      surface: '#FBFDF9',
      onSurface: '#191C1A',
      surfaceVariant: '#DBE5DE',
      onSurfaceVariant: '#404944',

      outline: '#707973',
      outlineVariant: '#BFC9C2',

      surfaceContainerLowest: '#FFFFFF',
      surfaceContainerLow: '#F5F7F3',
      surfaceContainer: '#EFF1ED',
      surfaceContainerHigh: '#E9EBE7',
      surfaceContainerHighest: '#E3E5E2',

      inverseSurface: '#2E312E',
      inverseOnSurface: '#F0F1ED',
      inversePrimary: '#72D9AB',

      shadow: '#000000',
      scrim: '#000000',
      surfaceTint: '#006C4C',
    },
    dark: {
      primary: '#72D9AB',
      onPrimary: '#003825',
      primaryContainer: '#005238',
      onPrimaryContainer: '#8EF6C6',

      secondary: '#B4CCBC',
      onSecondary: '#20352A',
      secondaryContainer: '#364B3F',
      onSecondaryContainer: '#D0E8D7',

      tertiary: '#A5CDDE',
      onTertiary: '#063544',
      tertiaryContainer: '#234C5B',
      onTertiaryContainer: '#C1E9FB',

      error: '#FFB4AB',
      onError: '#690005',
      errorContainer: '#93000A',
      onErrorContainer: '#FFDAD6',

      background: '#111412',
      onBackground: '#E1E3DF',

      surface: '#111412',
      onSurface: '#E1E3DF',
      surfaceVariant: '#404944',
      onSurfaceVariant: '#BFC9C2',

      outline: '#8A938D',
      outlineVariant: '#404944',

      surfaceContainerLowest: '#0C0F0D',
      surfaceContainerLow: '#191C1A',
      surfaceContainer: '#1D201E',
      surfaceContainerHigh: '#282B28',
      surfaceContainerHighest: '#333633',

      inverseSurface: '#E1E3DF',
      inverseOnSurface: '#2E312E',
      inversePrimary: '#006C4C',

      shadow: '#000000',
      scrim: '#000000',
      surfaceTint: '#72D9AB',
    }
  },
  burgundy: {
    name: 'Бордовый вельвет',
    seedHex: '#8C4A60',
    light: {
      primary: '#8C4A60',
      onPrimary: '#FFFFFF',
      primaryContainer: '#FFD9E2',
      onPrimaryContainer: '#3A071D',

      secondary: '#74565F',
      onSecondary: '#FFFFFF',
      secondaryContainer: '#FFD9E2',
      onSecondaryContainer: '#2B151C',

      tertiary: '#7C5635',
      onTertiary: '#FFFFFF',
      tertiaryContainer: '#FFDCBF',
      onTertiaryContainer: '#2D1600',

      error: '#BA1A1A',
      onError: '#FFFFFF',
      errorContainer: '#FFDAD6',
      onErrorContainer: '#410002',

      background: '#FFF8F8',
      onBackground: '#201A1B',

      surface: '#FFF8F8',
      onSurface: '#201A1B',
      surfaceVariant: '#F2DDE1',
      onSurfaceVariant: '#514347',

      outline: '#837377',
      outlineVariant: '#D5C2C6',

      surfaceContainerLowest: '#FFFFFF',
      surfaceContainerLow: '#FBF1F2',
      surfaceContainer: '#F5EBEC',
      surfaceContainerHigh: '#EFE5E7',
      surfaceContainerHighest: '#E9E0E1',

      inverseSurface: '#362E30',
      inverseOnSurface: '#FAEEEF',
      inversePrimary: '#FFB0C8',

      shadow: '#000000',
      scrim: '#000000',
      surfaceTint: '#8C4A60',
    },
    dark: {
      primary: '#FFB0C8',
      onPrimary: '#541D32',
      primaryContainer: '#703348',
      onPrimaryContainer: '#FFD9E2',

      secondary: '#E3BDC6',
      onSecondary: '#422931',
      secondaryContainer: '#5B3F47',
      onSecondaryContainer: '#FFD9E2',

      tertiary: '#EFBD94',
      onTertiary: '#472A0C',
      tertiaryContainer: '#613F20',
      onTertiaryContainer: '#FFDCBF',

      error: '#FFB4AB',
      onError: '#690005',
      errorContainer: '#93000A',
      onErrorContainer: '#FFDAD6',

      background: '#181213',
      onBackground: '#ECE0E1',

      surface: '#181213',
      onSurface: '#ECE0E1',
      surfaceVariant: '#514347',
      onSurfaceVariant: '#D5C2C6',

      outline: '#9E8C90',
      outlineVariant: '#514347',

      surfaceContainerLowest: '#120D0E',
      surfaceContainerLow: '#201A1B',
      surfaceContainer: '#241E1F',
      surfaceContainerHigh: '#2F282A',
      surfaceContainerHighest: '#3A3334',

      inverseSurface: '#ECE0E1',
      inverseOnSurface: '#362E30',
      inversePrimary: '#8C4A60',

      shadow: '#000000',
      scrim: '#000000',
      surfaceTint: '#FFB0C8',
    }
  },
  cobalt: {
    name: 'Кобальтовый инжиниринг',
    seedHex: '#0061A4',
    light: {
      primary: '#0061A4',
      onPrimary: '#FFFFFF',
      primaryContainer: '#D1E4FF',
      onPrimaryContainer: '#001D36',

      secondary: '#535F70',
      onSecondary: '#FFFFFF',
      secondaryContainer: '#D7E3F7',
      onSecondaryContainer: '#101C2B',

      tertiary: '#6B5778',
      onTertiary: '#FFFFFF',
      tertiaryContainer: '#F2DAFF',
      onTertiaryContainer: '#251431',

      error: '#BA1A1A',
      onError: '#FFFFFF',
      errorContainer: '#FFDAD6',
      onErrorContainer: '#410002',

      background: '#FDFBFF',
      onBackground: '#1A1C1E',

      surface: '#FDFBFF',
      onSurface: '#1A1C1E',
      surfaceVariant: '#DFE2EB',
      onSurfaceVariant: '#43474E',

      outline: '#73777F',
      outlineVariant: '#C3C7D0',

      surfaceContainerLowest: '#FFFFFF',
      surfaceContainerLow: '#F7F9FD',
      surfaceContainer: '#F1F4F9',
      surfaceContainerHigh: '#EBEFF4',
      surfaceContainerHighest: '#E5E9EE',

      inverseSurface: '#2F3033',
      inverseOnSurface: '#F1F0F4',
      inversePrimary: '#9ECAFF',

      shadow: '#000000',
      scrim: '#000000',
      surfaceTint: '#0061A4',
    },
    dark: {
      primary: '#9ECAFF',
      onPrimary: '#003258',
      primaryContainer: '#00497D',
      onPrimaryContainer: '#D1E4FF',

      secondary: '#BBC7DB',
      onSecondary: '#253140',
      secondaryContainer: '#3B4858',
      onSecondaryContainer: '#D7E3F7',

      tertiary: '#D6BEE4',
      onTertiary: '#3B2948',
      tertiaryContainer: '#523F5F',
      onTertiaryContainer: '#F2DAFF',

      error: '#FFB4AB',
      onError: '#690005',
      errorContainer: '#93000A',
      onErrorContainer: '#FFDAD6',

      background: '#1A1C1E',
      onBackground: '#E2E2E6',

      surface: '#1A1C1E',
      onSurface: '#E2E2E6',
      surfaceVariant: '#43474E',
      onSurfaceVariant: '#C3C7D0',

      outline: '#8D9199',
      outlineVariant: '#43474E',

      surfaceContainerLowest: '#0F1113',
      surfaceContainerLow: '#1A1C1E',
      surfaceContainer: '#1E2022',
      surfaceContainerHigh: '#292A2D',
      surfaceContainerHighest: '#333538',

      inverseSurface: '#E2E2E6',
      inverseOnSurface: '#2F3033',
      inversePrimary: '#0061A4',

      shadow: '#000000',
      scrim: '#000000',
      surfaceTint: '#9ECAFF',
    }
  }
};
