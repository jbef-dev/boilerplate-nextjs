const customAnimations = {
  css: {
    slow: '1s ease-in-out',
    standard: '0.35s ease-in-out',
    fast: '0.21s ease-in-out',
  },
  framer: {
    fast: { type: 'spring', damping: 30, stiffness: 380 },
    tween: { type: 'tween', duration: 0.21 },
    standard: { type: 'spring', damping: 24, stiffness: 260 },
    slow: { type: 'spring', damping: 28, stiffness: 230 },
    bouncy: { type: 'spring', damping: 20, stiffness: 180 },
    infinite: { type: 'spring', damping: 24, stiffness: 280 },
  },
}

export default customAnimations
