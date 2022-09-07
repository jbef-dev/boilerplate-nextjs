import type { Variants } from 'framer-motion'
import { HTMLAttributes } from 'react'

export type ButtonFlavors = 'basic' | 'squared' | 'outlined'
export type ButtonSizes = 'sm' | 'md' | 'lg'

/**
 * Used to describe the `framer-motion` variants for each flavor and each
 * component inside the Button
 * */
export type FlavorMotionVariants = { [k in ButtonFlavors]: Variants }

export type ButtonProps = {
  flavor?: ButtonFlavors
  icon?: boolean | React.ReactNode
  isLoading?: boolean
  size?: ButtonSizes
} & HTMLAttributes<HTMLDivElement>
