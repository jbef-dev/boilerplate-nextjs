import React, { CSSProperties } from 'react'
import styled from '@emotion/styled'
import { isValidMotionProp, motion, Variants } from 'framer-motion'
import isPropValid from '@emotion/is-prop-valid'
import { Theme, useTheme } from '@emotion/react'
import {
  ButtonFlavors,
  ButtonProps,
  ButtonSizes,
  FlavorCSS,
  FlavorMotionVariants,
} from './types'
import { NotUndefined } from '@util/utilityTypes'

interface IconContainerProps {
  flavor: ButtonFlavors
  size: NotUndefined<ButtonProps['size']>
  bgDark: NotUndefined<ButtonProps['bgDark']>
}

export const IconContainer = styled(motion.div, {
  shouldForwardProp: (p: string) => isValidMotionProp(p) || isPropValid(p),
})<IconContainerProps>(
  {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ({ flavor, size, bgDark, theme }) =>
    iconContainerFlavors({ size, bgDark }, theme)[flavor]
)

const iconContainerFlavors = (
  { size, bgDark }: Omit<IconContainerProps, 'flavor'>,
  theme: Theme
): FlavorCSS => {
  const minWidth: { [k in ButtonSizes]: CSSProperties['fontSize'] } = {
    sm: theme.font.size[8],
    md: theme.font.size[9],
    lg: theme.font.size[10],
  }
  return {
    basic: {},
    squared: {
      aspectRatio: '1/1',
      minWidth: minWidth[size],
      backgroundColor: bgDark,
    },
    outlined: {},
  }
}

export const CustomIconContainer = styled(motion.div)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

interface ButtonIconProps {
  flavor: ButtonFlavors
  size: NotUndefined<ButtonProps['size']>
  bgDark: NotUndefined<ButtonProps['bgDark']>
  bgColor: NotUndefined<ButtonProps['bgColor']>
  icon?: ButtonProps['icon']
}

export const ButtonIcon = (props: ButtonIconProps) => {
  const theme = useTheme()

  const { icon, ...rest } = props

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

  const iconContainerVariants: FlavorMotionVariants = {
    basic: {
      hover: {},
    },
    squared: {
      hover: {
        backgroundColor: props.bgColor,
      },
    },
    outlined: {
      hover: {},
    },
  }

  const customIconTransition = theme.animation.framer.fast

  switch (icon) {
    case true:
      return (
        <IconContainer variants={iconContainerVariants[props.flavor]} {...rest}>
          <motion.svg
            viewBox='1 0 5 9'
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
              transition={customIconTransition}
            >
              <path
                d='M1 1C4.5 4 5 4.38484 5 4.5C5 4.61516 4.5 5 1 8'
                stroke='currentColor'
                strokeWidth='1.4'
              />
            </motion.g>
            <motion.g
              className='arrow-body'
              initial={{ originX: 0, opacity: 0, scaleX: 0 }}
              variants={arrowBodyVariants}
              transition={customIconTransition}
            >
              <path d='M7 4.5H0' stroke='currentColor' strokeWidth='1.4' />
            </motion.g>
          </motion.svg>
        </IconContainer>
      )
    case false:
      return null
    default:
      return (
        <IconContainer variants={iconContainerVariants[props.flavor]} {...rest}>
          <CustomIconContainer
            variants={customIconVariants}
            transition={customIconTransition}
          >
            {icon}
          </CustomIconContainer>
        </IconContainer>
      )
  }
}
