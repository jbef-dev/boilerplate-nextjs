import { motion } from 'framer-motion'
import React from 'react'
import { DentalClinic } from './DentalClinic'
import { Icon } from './Icon'
import { useLogoAnimation } from './useLogoAnimation'

export const LogoAnimation = React.memo(() => {
  const { visible, onCompleteAnimation } = useLogoAnimation()

  // const baseUnit = 0.2
  const baseUnit = 0.25

  return visible ? (
    <motion.div
      className='from fixed top-0 left-0 right-0 z-50 flex h-screen w-screen max-w-full items-center justify-center overflow-hidden bg-gradient-to-br from-gray-300 via-white to-gray-300'
      initial={{ opacity: 1 }}
      animate={{ opacity: 0, transitionEnd: { display: 'none' } }}
      transition={{ delay: 6 * baseUnit, duration: 2 * baseUnit }}
    >
      <motion.div
        className='flex h-full w-full max-w-screen-xl items-center justify-center'
        initial={{ y: 0 }}
        animate={{ y: '40%' }}
        transition={{ delay: 6 * baseUnit, duration: 1.5 * baseUnit }}
        onAnimationComplete={onCompleteAnimation}
      >
        <motion.div
          initial={{ width: '45%', originX: 0 }}
          animate={{ width: '10%', originX: 0 }}
          transition={{ delay: 3 * baseUnit, duration: 2 * baseUnit }}
        >
          <Icon />
        </motion.div>
        <motion.div
          initial={{ width: 0, originX: 0, x: '100vw' }}
          animate={{ width: '60%', originX: 0, x: 0 }}
          // transition={{ delay: 2.25 * baseUnit, duration: 3 * baseUnit }}
          transition={{ delay: 3 * baseUnit, duration: 2 * baseUnit }}
        >
          <DentalClinic />
        </motion.div>
      </motion.div>
    </motion.div>
  ) : null
})

LogoAnimation.displayName = 'LogoAnimation'
