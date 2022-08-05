import { CSSProperties } from 'react'
import styled from '@emotion/styled'
import { Theme } from '@emotion/react'
import { ButtonFlavors, ButtonProps, ButtonSizes, FlavorCSS } from './types'
import { NotUndefined } from '@util/utilityTypes'

interface ButtonTextProps {
  flavor: ButtonFlavors
  size: NotUndefined<ButtonProps['size']>
}

export const ButtonText = styled('div')<ButtonTextProps>(
  ({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: theme.font.weight.medium,
    letterSpacing: '0.5px',
  }),
  ({ flavor, size, theme }) => buttonTextFlavors({ size }, theme)[flavor]
)

const buttonTextFlavors = (
  { size }: Omit<ButtonTextProps, 'flavor'>,
  theme: Theme
): FlavorCSS => {
  const spacingX: {
    [k in ButtonSizes]: CSSProperties['gap']
  } = {
    sm: theme.spacing[3],
    md: theme.spacing[4],
    lg: theme.spacing[5],
  }
  const fontSize: { [k in ButtonSizes]: CSSProperties['fontSize'] } = {
    sm: theme.font.size[2],
    md: theme.font.size[3],
    lg: theme.font.size[4],
  }
  return {
    basic: {
      fontSize: fontSize[size],
    },
    squared: {
      padding: `0 ${spacingX[size]}`,
      fontSize: fontSize[size],
    },
    outlined: {
      fontSize: fontSize[size],
    },
  }
}
