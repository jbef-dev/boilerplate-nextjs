import { OverrideProps } from '@util/utilityTypes'
import { CSSInterpolation } from '@emotion/css'
import { HTMLMotionProps, Variants } from 'framer-motion'
import { CSSProperties } from 'react'

export type ButtonFlavors = 'basic' | 'squared' | 'outlined'
export type ButtonSizes = 'sm' | 'md' | 'lg'

export type FlavorCSS = { [k in ButtonFlavors]: CSSInterpolation }

/**
 * Used to describe the `framer-motion` variants for each flavor and each
 * component inside the Button
 * */
export type FlavorMotionVariants = { [k in ButtonFlavors]: Variants }

export interface BaseButtonProps {
  icon?: true | React.ReactNode
  color?: CSSProperties['color'] | undefined
  bgColor?: CSSProperties['backgroundColor']
  size?: ButtonSizes
  bgHover?: CSSProperties['backgroundColor'] | undefined
  bgLight?: CSSProperties['backgroundColor'] | undefined
  bgDark?: CSSProperties['backgroundColor'] | undefined
}

/**
 *
 * Useful to override props from another type or interface
 * */

type BasicProps = OverrideProps<
  BaseButtonProps,
  { bgLight?: never; bgDark?: never }
>

type SquaredProps = OverrideProps<
  BaseButtonProps,
  { bgHover?: never; icon: true | React.ReactElement }
>

type OutlinedProps = OverrideProps<
  BaseButtonProps,
  { bgLight?: never; bgDark?: never }
>

/**
 *
 * Props for `Button` component, joining all possible flavors
 * */
export type ButtonProps = (
  | (BasicProps & { flavor: 'basic' })
  | (SquaredProps & { flavor: 'squared' })
  | (OutlinedProps & { flavor: 'outlined' })
) &
  HTMLMotionProps<'div'>
