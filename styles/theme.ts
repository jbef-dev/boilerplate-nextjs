export const theme = {
  border: {
    radius: {
      xs: '2px',
      sm: '4px',
      md: '6px',
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
  font: {
    size: [
      '0px',
      '12px',
      '14px',
      '16px',
      '18px',
      '20px',
      '24px',
      '30px',
      '36px',
      '48px',
      '60px',
      '72px',
    ],
    weight: {
      light: 200,
      regular: 400,
      medium: 500,
      bold: 700,
      black: 900,
    },
  },
  framerAnimation: {
    standard: { type: 'spring', damping: 24, stiffness: 280 },
    infinite: { type: 'spring', damping: 24, stiffness: 280 },
  },
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
  },
  palette: {
    primary: {
      main: '#226093',
      light: '#7DA0C3',
    },
    accent: {
      main: '#7DA0C3',
      light: '#7DA0C3',
    },
    grey: {
      darkest: 'hsl(209,15%,28%)',
      dark: 'hsl(207,12%,43%)',
      mid: 'hsl(208,12%,58%)',
      light: 'hsl(210,16%,76%)',
      lightest: 'hsl(208,21%,88%)',
    },
    error: {
      main: '#FF4365',
      light: '#7DA0C3',
    },
    extra: {
      main: '#FFBC42',
      light: '#FFCD70',
    },
  },
  size: [
    '0px',
    '4px',
    '8px',
    '12px',
    '16px',
    '24px',
    '32px',
    '48px',
    '64px',
    '96px',
    '128px',
    '192px',
    '256px',
    '384px',
    '512px',
    '640px',
    '768px',
  ],
}

export type CustomTheme = typeof theme
