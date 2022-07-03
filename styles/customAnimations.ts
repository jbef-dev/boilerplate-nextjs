const duration = {
  fastest: 0.1,
  veryFast: 0.19,
  fast: 0.28,
  normal: 0.35,
  slow: 0.45,
  long: 2,
}

const bounce = {
  none: 0,
  low: 0.2,
  mid: 0.4,
  high: 0.65,
  max: 0.8,
}

const customAnimations = {
  duration: duration,
  bounce: bounce,
  css: {
    slow: '1s ease-in-out',
    standard: '0.35s ease-in-out',
    fast: '0.21s ease-in-out',
  },
  framer: {
    tweenFast: { type: 'tween', duration: duration.fastest },
    tween: { type: 'tween', duration: duration.fast },

    fast: { type: 'spring', duration: duration.fast, bounce: bounce.mid },
    normal: { type: 'spring', duration: duration.normal, bounce: bounce.low },
    slow: { type: 'spring', duration: duration.slow, bounce: bounce.mid },
    bouncy: { type: 'spring', duration: duration.normal, bounce: bounce.high },

    menuOpen: { type: 'spring', duration: duration.normal, bounce: bounce.low },
    menuClose: {
      type: 'spring',
      duration: duration.normal,
      bounce: bounce.none,
    },
  },
}

export default customAnimations
