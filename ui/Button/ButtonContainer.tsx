import type { PropsWithChildren } from 'react'
import { ButtonFlavors, ButtonSizes } from './types'
import React from 'react'
import clsx, { ClassValue } from 'clsx'

export interface ButtonContainerProps {
  flavor: ButtonFlavors
  size: ButtonSizes
  isLoading: boolean
}

const flavors: { [k in ButtonFlavors]: ClassValue } = {
  basic: clsx('bg-primary-main text-white rounded hover:bg-primary-darkest'),
  squared: undefined,
  outlined: clsx(
    'rounded ring-2 text-primary-darkest ring-primary-main hover:bg-white/10 hover:ring-4'
  ),
}

export const ButtonContainer = (
  props: PropsWithChildren<ButtonContainerProps>
) => {
  const { isLoading, flavor, children, ...rest } = props

  return (
    <div
      className={clsx(
        'group flex cursor-pointer items-center justify-center gap-4 px-4 py-2',
        'duration-200 ease-in-out',
        flavors[flavor]
      )}
      {...rest}
    >
      {children}
    </div>
  )
}
