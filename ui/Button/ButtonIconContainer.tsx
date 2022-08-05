import React, { CSSProperties } from 'react'
import styled from '@emotion/styled'
import { isValidMotionProp, motion } from 'framer-motion'
import isPropValid from '@emotion/is-prop-valid'
import { ButtonIcon } from './ButtonIcon'
import { Theme, useTheme } from '@emotion/react'
import {
  ButtonFlavors,
  ButtonProps,
  ButtonSizes,
  FlavorCSS,
  FlavorMotionVariants,
} from './types'
import { NotUndefined } from '@util/utilityTypes'
import { ButtonContainer } from './ButtonContainer'
import { ButtonText } from './ButtonText'

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
