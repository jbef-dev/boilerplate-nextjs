import customAnimations from './customAnimations'
import palette from './palette'
import font from './font'

const sizes = {
  0: '0rem',
  1: '0.25rem',
  2: '0.5rem',
  3: '0.75rem',
  4: '1rem',
  5: '1.5rem',
  6: '2rem',
  7: '3rem',
  8: '4rem',
  9: '6rem',
  10: '8rem',
  11: '12rem',
  12: '16rem',
  13: '24rem',
  14: '32rem',
  15: '48rem',
  16: '64rem',
}

export const theme = {
  border: {
    radius: {
      xs: '3px',
      sm: '4px',
      md: '7px',
      lg: '12px',
      xl: '16px',
    },

    width: {
      xs: '1px',
      sm: '2px',
      md: '3px',
      lg: '6px',
      xl: '8px',
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
      negative: -1,
      lowest: 0,
      low: 10,
      mid: 50,
      high: 70,
      highest: 100,
    },
  },
  palette: palette,
  shadows: {
    0: '0px 7px 20px rgba(43, 8, 37, 0.2)',
  },
  size: sizes,
  spacing: sizes,
}

export type CustomTheme = typeof theme
