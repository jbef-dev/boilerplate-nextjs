import { Theme } from '@emotion/react'
import { CSSProperties } from '@emotion/serialize'
import styled from '@emotion/styled'
import { HTMLAttributes, PropsWithRef, RefObject } from 'react'
import isPropValid from '@emotion/is-prop-valid'

interface ContainerProps {
  // py?:
  //   | CSSProperties['padding']
  //   | Record<'sm' | 'normal', CSSProperties['padding']>
  breakpoint?: keyof Theme['breakpoints']
  py?: CSSProperties['padding']
  px?: CSSProperties['padding']
  pysm?: CSSProperties['padding']
  pxsm?: CSSProperties['padding']
  centerContent?: true
  direction?: CSSProperties['flexDirection']
}

const Container = styled('main', {
  shouldForwardProp: (p: string) => isPropValid(p),
})<ContainerProps>(
  ({ theme, pysm, pxsm, py, px, centerContent, direction, breakpoint }) => ({
    display: 'flex',
    flexDirection: direction || 'row',
    width: '100%',
    padding: `${py || theme.spacing[7]} ${px || theme.spacing[6]}`,
    // paddingTop: typeof py === 'object' ? py.sm : 0,
    alignItems: centerContent ? 'center' : 'unset',
    justifyContent: centerContent ? 'center' : 'unset',

    [`@media (max-width: ${theme.breakpoints[breakpoint || 'sm']})`]: {
      padding: `${pysm || theme.spacing[5]} ${pxsm || theme.spacing[4]}`,
    },
  })
)

interface FlexContainerProps
  extends ContainerProps,
    HTMLAttributes<HTMLDivElement> {}

export const FlexContainer = (
  props: PropsWithRef<FlexContainerProps> & {
    refAlt?: RefObject<HTMLDivElement>
  }
) => {
  const { children, refAlt, ...rest } = props

  return (
    <Container ref={refAlt} {...rest}>
      {children}
    </Container>
  )
}
