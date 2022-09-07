import type { Transition } from 'framer-motion'

const duration = {
  fastest: 0.1,
  veryFast: 0.19,
  fast: 0.28,
  normal: 0.35,
  slow: 0.45,
  verySlow: 0.61,
  slowest: 0.83,
  long: 2,
}

const bounce = {
  none: 0,
  low: 0.2,
  mid: 0.4,
  high: 0.65,
  max: 0.8,
}

const stiffness = {
  low: 180,
  mid: 250,
  high: 380,
  max: 550,
}

const damping = {
  low: 10,
  mid: 25,
  high: 30,
  max: 50,
}

const cssAnimations = {
  slow: '1s ease-in-out',
  standard: '0.35s ease-in-out',
  fast: '0.21s ease-in-out',
  fadeColor: '0.15s ease-in-out',
}

const customAnimations = {
  duration: duration,
  bounce: bounce,
  stiffness: stiffness,
  damping: damping,
  css: cssAnimations,
  framer: {
    tweenFast: { type: 'tween', duration: duration.fastest },
    tween: { type: 'tween', duration: duration.fast },

    fastest: {
      type: 'spring',
      duration: duration.fastest,
      bounce: bounce.none,
    },
    veryFast: {
      type: 'spring',
      duration: duration.veryFast,
      bounce: bounce.low,
    },
    fast: <Transition>{
      type: 'spring',
      duration: duration.fast,
      bounce: bounce.low,
    },
    normal: <Transition>{
      type: 'spring',
      stiffness: stiffness.mid,
      damping: damping.mid,
    },
    slow: { type: 'spring', duration: duration.slow, bounce: bounce.mid },

    modalInOut: {
      type: 'spring',
      duration: duration.verySlow,
      bounce: bounce.low,
    },

    appear: { type: 'spring', duration: duration.verySlow, bounce: bounce.low },

    menuOpen: { type: 'spring', duration: duration.normal, bounce: bounce.low },
    menuClose: {
      type: 'spring',
      duration: duration.normal,
      bounce: bounce.none,
    },

    bouncy: { type: 'spring', duration: duration.normal, bounce: bounce.high },
  },
}

export default customAnimations
