import { PropsWithChildren } from 'react'
import { HTMLMotionProps } from 'framer-motion'
import { BasicButtonProps, BtnBasic } from './BasicVariant'
import { BtnSquare, SquareButtonProps } from './SquareVariant'

export type ButtonVariant = 'basic' | 'square'

export interface BaseButtonProps {
  btnVariant: ButtonVariant
  bgColor?: string
  bgHover?: string
  bgLight?: string
  bgDark?: string
  icon?: true | React.ReactNode | 'none'
}

export type OverrideButtonProps<T, U> = Omit<T, keyof U> & U

// join all variants
type ButtonProps = BasicButtonProps | SquareButtonProps

export const Button = (
  props: ButtonProps & PropsWithChildren<HTMLMotionProps<'button'>>
) => {
  const { btnVariant, bgColor, bgHover, bgLight, bgDark, icon, children, ...rest } =
    props

  switch (btnVariant) {
    case 'basic':
      return (
        <BtnBasic
          btnVariant='basic'
          bgColor={bgColor}
          bgHover={bgHover}
          icon={icon}
          {...rest}
        >
          {children}
        </BtnBasic>
      )
    case 'square':
      return (
        <BtnSquare
          btnVariant='square'
          bgColor={bgColor}
          bgLight={bgLight}
          bgDark={bgDark}
          icon={icon}
          {...rest}
        >
          {children}
        </BtnSquare>
      )
  }
}
