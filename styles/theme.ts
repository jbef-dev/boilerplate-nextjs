import customAnimations from './customAnimations'
import palette from './palette'
import font from './font'

const sizes = {
  0: '0px',
  1: '4px',
  2: '8px',
  3: '12px',
  4: '16px',
  5: '24px',
  6: '32px',
  7: '48px',
  8: '64px',
  9: '96px',
  10: '128px',
  11: '192px',
  12: '256px',
  13: '384px',
  14: '512px',
  15: '640px',
  16: '768px',
}

export const theme = {
  border: {
    radius: {
      xs: '3px',
      sm: '4px',
      md: '6px',
      lg: '8px',
      xl: '10px',
    },

    width: {
      xs: '1px',
      sm: '2px',
      md: '4px',
      lg: '8px',
      xl: '10px',
    },
  },
  breakpoints: {
    xs: '0px',
    sm: '600px',
    md: '900px',
    lg: '1200px',
    xl: '1536px',
  },
  font: font,
  animation: customAnimations,
  layout: {
    body: {
      width: '100%',
    },
    footer: {
      height: sizes[12],
    },
    header: {
      height: sizes[8],
    },
    zIndex: {
      lowest: 0,
      low: 10,
      mid: 50,
      high: 70,
      highest: 100,
    },
  },
  palette: palette,
  size: sizes,
  spacing: sizes,
}

export type CustomTheme = typeof theme
