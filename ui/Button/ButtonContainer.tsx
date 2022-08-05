import { CSSProperties } from 'react'
import styled from '@emotion/styled'
import { isValidMotionProp, motion } from 'framer-motion'
import isPropValid from '@emotion/is-prop-valid'
import { Theme } from '@emotion/react'
import { ButtonFlavors, ButtonProps, ButtonSizes, FlavorCSS } from './types'
import { NotUndefined } from '@util/utilityTypes'

export interface ButtonContainerProps {
  flavor: ButtonFlavors
  size: NotUndefined<ButtonProps['size']>
  bgColor: NotUndefined<ButtonProps['bgColor']>
}

export const ButtonContainer = styled(motion.div, {
  shouldForwardProp: (p: string) => isValidMotionProp(p) || isPropValid(p),
})<ButtonContainerProps>(
  ({ bgColor, theme }) => ({
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.text.light[0],
    backgroundColor: bgColor,
    borderRadius: theme.border.radius.sm,
    overflow: 'hidden',
    cursor: 'pointer',
  }),
  ({ flavor, bgColor, size, theme }) =>
    containerFlavors({ flavor, bgColor, size }, theme)[flavor]
)

const containerFlavors = (
  { size, bgColor }: ButtonContainerProps,
  theme: Theme
): FlavorCSS => {
  const spacingX: {
    [k in ButtonSizes]: CSSProperties['gap']
  } = {
    sm: theme.spacing[3],
    md: theme.spacing[4],
    lg: theme.spacing[5],
  }
  return {
    basic: {
      padding: `${theme.spacing[2]} ${spacingX[size]}`,
      gap: spacingX[size],
    },
    squared: {
      justifyContent: 'space-between',
      padding: 0,
    },
    outlined: {
      padding: `${theme.spacing[2]} ${spacingX[size]}`,
      gap: spacingX[size],
      backgroundColor: 'unset',
      color: theme.palette.primary.main,
      // this allows for the border to be on the inside
      // and not enlarge the button unnecessarily
      ['&:after']: {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        borderRadius: 'inherit',
        borderWidth: '2px',
        borderStyle: 'solid',
        borderColor: bgColor,
      },
    },
  }
}
