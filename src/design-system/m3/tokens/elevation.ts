/**
 * Material Design 3 Elevation & Tonal Surface Tokens
 * Reference: https://m3.material.io/styles/elevation/overview
 */

export type M3ElevationLevel = 0 | 1 | 2 | 3 | 4 | 5;

export interface M3ElevationSpec {
  shadow: string;
  tintOpacity: number;
  surfaceContainerRole: 'surface' | 'surfaceContainerLow' | 'surfaceContainer' | 'surfaceContainerHigh' | 'surfaceContainerHighest';
}

export const M3_ELEVATIONS: Record<M3ElevationLevel, M3ElevationSpec> = {
  0: {
    shadow: 'none',
    tintOpacity: 0,
    surfaceContainerRole: 'surface',
  },
  1: {
    shadow: '0px 1px 3px 1px rgba(0, 0, 0, 0.12), 0px 1px 2px 0px rgba(0, 0, 0, 0.24)',
    tintOpacity: 0.05,
    surfaceContainerRole: 'surfaceContainerLow',
  },
  2: {
    shadow: '0px 2px 6px 2px rgba(0, 0, 0, 0.12), 0px 1px 2px 0px rgba(0, 0, 0, 0.24)',
    tintOpacity: 0.08,
    surfaceContainerRole: 'surfaceContainer',
  },
  3: {
    shadow: '0px 4px 8px 3px rgba(0, 0, 0, 0.12), 0px 1px 3px 0px rgba(0, 0, 0, 0.24)',
    tintOpacity: 0.11,
    surfaceContainerRole: 'surfaceContainerHigh',
  },
  4: {
    shadow: '0px 6px 10px 4px rgba(0, 0, 0, 0.12), 0px 2px 3px 0px rgba(0, 0, 0, 0.24)',
    tintOpacity: 0.12,
    surfaceContainerRole: 'surfaceContainerHighest',
  },
  5: {
    shadow: '0px 8px 12px 6px rgba(0, 0, 0, 0.12), 0px 4px 4px 0px rgba(0, 0, 0, 0.24)',
    tintOpacity: 0.14,
    surfaceContainerRole: 'surfaceContainerHighest',
  }
};
