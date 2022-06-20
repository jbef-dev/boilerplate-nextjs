import customAnimations from './customAnimations'
import palette from './palette'
import font from './font'

export const theme = {
  border: {
    radius: {
      xs: '2px',
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
      height: 210,
    },
    header: {
      height: 65,
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
  size: {
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
  },
}

export type CustomTheme = typeof theme
