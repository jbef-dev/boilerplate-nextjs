import { PropsWithChildren } from 'react'
import { ButtonFlavors, ButtonProps } from './types'
import { NotUndefined } from '@/types/utilityTypes'
import clsx from 'clsx'

// interface StyledTextProps extends ButtonTextProps {}

// const StyledText = styled('div')<StyledTextProps>(
//   ({ theme }) => ({
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     fontWeight: theme.font.weight.medium,
//     letterSpacing: '0.5px',
//   }),
//   ({ flavor, size, theme }) => buttonTextFlavors({ size }, theme)[flavor]
//   // ({ isLoading }) => ({})
// )

// const buttonTextFlavors = (
//   { size }: Omit<ButtonTextProps, 'flavor'>,
//   theme: Theme
// ): FlavorCSS => {
//   const spacingX: {
//     [k in ButtonSizes]: CSSProperties['gap']
//   } = {
//     sm: theme.spacing[3],
//     md: theme.spacing[4],
//     lg: theme.spacing[5],
//   }
//   const fontSize: { [k in ButtonSizes]: CSSProperties['fontSize'] } = {
//     sm: theme.font.size[2],
//     md: theme.font.size[3],
//     lg: theme.font.size[4],
//   }
//   return {
//     basic: {
//       fontSize: fontSize[size],
//     },
//     squared: {
//       padding: `0 ${spacingX[size]}`,
//       fontSize: fontSize[size],
//     },
//     outlined: {
//       fontSize: fontSize[size],
//     },
//   }
// }

interface ButtonTextProps {
  flavor: ButtonFlavors
  size: NotUndefined<ButtonProps['size']>
  isLoading?: ButtonProps['isLoading']
}

export const ButtonText = (props: PropsWithChildren<ButtonTextProps>) => {
  const { flavor, size, isLoading, children } = props

  return (
    <div
      className={clsx(
        'flex items-center justify-center text-base font-medium tracking-wider'
      )}
    >
      {children}
    </div>
  )
}
