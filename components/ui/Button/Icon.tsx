import { motion, Variants } from 'framer-motion'
import { useTheme } from '@emotion/react'
import { CustomIconContainer } from './BaseBtnComponents'

export const Icon = ({ icon }: { icon: boolean | React.ReactNode }) => {
  const theme = useTheme()

  const arrowHeadVariants: Variants = {
    hover: {
      x: '3px',
    },
  }

  const arrowBodyVariants: Variants = {
    hover: {
      opacity: 1,
      scaleX: 1,
    },
  }

  const customIconVariants: Variants = {
    hover: {
      x: theme.spacing[1],
    },
  }

  const transition = theme.animation.framer.fast

  switch (icon) {
    case true:
      return (
        <>
          <motion.svg
            viewBox='0 0 6 9'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className='arrow-icon'
            style={{
              overflow: 'visible',
              width: '9px',
            }}
          >
            <motion.g
              className='arrow-head'
              variants={arrowHeadVariants}
              transition={transition}
            >
              <path
                d='M1 1C4.5 4 5 4.38484 5 4.5C5 4.61516 4.5 5 1 8'
                stroke='currentColor'
                strokeWidth='1.5'
              />
            </motion.g>
            <motion.g
              className='arrow-body'
              initial={{ originX: 0, opacity: 0, scaleX: 0 }}
              variants={arrowBodyVariants}
              transition={transition}
            >
              <path d='M7 4.5H0' stroke='currentColor' strokeWidth='1.5' />
            </motion.g>
          </motion.svg>
        </>
      )
    case false:
      return null
    default:
      return (
        <CustomIconContainer
          variants={customIconVariants}
          transition={transition}
        >
          {icon}
        </CustomIconContainer>
      )
  }
}
