import { CSSProperties, HTMLAttributes, ReactNode } from 'react'
import { CarouselFixedVariant } from './CarouselFixed'
import { CarouselFreeVariant } from './FreeVariant'

export interface CarouselProps<T> extends HTMLAttributes<HTMLDivElement> {
  variant: 'free' | 'fixed'
  items: Array<T>
  minwidth: string
  midwidth: string
  maxwidth: string
  children: ReactNode[]
  elementGap?: CSSProperties['gap']
  autoScroll?: boolean
  onElementClick?: (p: any) => void // Add extra functionality on element click
}

export const Carousel = <T extends Record<string, any>>(
  props: CarouselProps<T>
) => {
  const { variant, autoScroll, children, ...rest } = props

  switch (variant) {
    case 'fixed':
      return (
        <CarouselFixedVariant autoScroll={autoScroll} {...rest}>
          {children}
        </CarouselFixedVariant>
      )
    case 'free':
      return <CarouselFreeVariant {...rest}>{children}</CarouselFreeVariant>
  }
}
