import { HTMLAttributes } from 'react'
import clsx from 'clsx'

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  // breakpoint?: keyof Theme['breakpoints']
  // bgColor?: CSSProperties['backgroundColor']
  centerContent?: true
  // direction?: CSSProperties['flexDirection']
  // gap?: CSSProperties['gap']
  // gapsm?: CSSProperties['gap']
  // maxW?: CSSProperties['maxWidth']
  grow?: boolean
  // p?: CSSProperties['padding']
  // psm?: CSSProperties['padding']
  // py?: CSSProperties['padding']
  // px?: CSSProperties['padding']
  // pysm?: CSSProperties['padding']
  // pxsm?: CSSProperties['padding']
  // sx?: CSSInterpolation
}

export const FlexRow = (props: ContainerProps) => {
  const { centerContent = false, grow = false, className, children } = props

  return (
    <div
      className={clsx([
        'flex',
        {
          'items-center justify-center': centerContent,
          'w-full': grow,
        },
        className,
      ])}
    >
      {children}
    </div>
  )
}
