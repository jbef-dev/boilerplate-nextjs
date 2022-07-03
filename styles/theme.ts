import customAnimations from './customAnimations'
import palette from './palette'
import font from './font'

// const sizes = {
//   0: '0px',
//   1: '4px',
//   2: '8px',
//   3: '12px',
//   4: '16px',
//   5: '24px',
//   6: '32px',
//   7: '48px',
//   8: '64px',
//   9: '96px',
//   10: '128px',
//   11: '192px',
//   12: '256px',
//   13: '384px',
//   14: '512px',
//   15: '640px',
//   16: '768px',
// }

const sizes = {
  0: '0em',
  1: '0.25em',
  2: '0.5em',
  3: '0.75em',
  4: '1em',
  5: '1.5em',
  6: '2em',
  7: '3em',
  8: '4em',
  9: '6em',
  10: '8em',
  11: '12em',
  12: '16em',
  13: '24em',
  14: '32em',
  15: '48em',
  16: '64em',
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
  size: sizes,
  spacing: sizes,
}

export type CustomTheme = typeof theme
