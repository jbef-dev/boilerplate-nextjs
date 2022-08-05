import { useTheme } from '@emotion/react'
import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { DentalClinic } from './DentalClinic'
import { Icon } from './Icon'

export const LogoAnimation = React.memo(() => {
  const theme = useTheme()

  const [visible, setVisible] = useState<boolean>(true)

  // TODO NOT WORKING!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  useEffect(() => {
    // document.body.style.overflow = 'hidden'
    if (visible === true) {
      console.log(visible)
      document.body.style.overflowY = 'hidden'
    } else {
      console.log(visible)
      document.body.style.overflowY = 'scroll'
    }
  }, [visible])

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0, transitionEnd: { display: 'none' } }}
      transition={{ delay: 2, duration: 0.5 }}
      style={{
        position: 'absolute',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        top: 0,
        left: 0,
        right: 0,
        width: '100vw',
        height: '100vh',
        maxWidth: '100%',
        // backgroundColor: '#ffffff',
        background: `linear-gradient(-45deg, ${theme.palette.surface.light[3]} 0%, ${theme.palette.surface.light[0]} 25%, ${theme.palette.surface.light[0]} 75%, ${theme.palette.surface.light[3]} 100%)`,
        zIndex: 99,
        overflow: 'hidden',
      }}
    >
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: '40%' }}
        transition={{ delay: 2, duration: 0.7 }}
        onAnimationComplete={() => setVisible(false)}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          width: '100%',
          maxWidth: theme.breakpoints.lg,
        }}
      >
        <motion.div
          initial={{ width: '45%', originX: 0 }}
          animate={{ width: '10%', originX: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <Icon />
        </motion.div>
        <motion.div
          initial={{ width: 0, originX: 0, x: '100vw' }}
          animate={{ width: '60%', originX: 0, x: 0 }}
          transition={{ delay: 0.8, duration: 0.7 }}
        >
          <DentalClinic />
        </motion.div>
      </motion.div>
    </motion.div>
  )
})

LogoAnimation.displayName = 'LogoAnimation'
