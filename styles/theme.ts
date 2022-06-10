interface Theme {
  palette: {
    primary: { main: string }
    secondary: { main: string }
    error: { main: string }
    extra: { main: string; light: string }
  }
  shape: {
    borderRadius: number
  }
  header: {
    height: number
  }
  footer: {
    height: number
  }
  spacing: {
    xs: number
    sm: number
    md: number
    lg: number
    xl: number
  }
  fontSizes: {
    lg: number
    xl: number
    xxl: number
  }
  framerAnimation: {
    standard: Object
    infinite: Object
  }
}

export const theme: Theme = {
  palette: {
    primary: {
      main: '#226093',
    },
    secondary: {
      main: '#7DA0C3',
    },
    error: {
      main: '#FF4365',
    },
    extra: {
      main: '#FFBC42',
      light: '#FFCD70',
    },
  },
  shape: { borderRadius: 6 },
  header: {
    height: 65,
  },
  footer: {
    height: 210,
  },
  spacing: {
    xs: 1.5,
    sm: 2,
    md: 3,
    lg: 6,
    xl: 10,
  },
  fontSizes: {
    lg: 20,
    xl: 24,
    xxl: 34,
  },
  framerAnimation: {
    standard: { type: 'spring', damping: 24, stiffness: 280 },
    infinite: { type: 'spring', damping: 24, stiffness: 280 },
  },
}
