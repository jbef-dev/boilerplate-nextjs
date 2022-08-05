import { Theme } from '@emotion/react'
import { CSSProperties } from '@emotion/serialize'
import styled from '@emotion/styled'
import { HTMLAttributes, PropsWithRef, RefObject } from 'react'
import isPropValid from '@emotion/is-prop-valid'

interface ContainerProps {
  breakpoint?: keyof Theme['breakpoints']
  bgColor?: CSSProperties['backgroundColor']
  centerContent?: true
  direction?: CSSProperties['flexDirection']
  grow?: boolean
  p?: CSSProperties['padding']
  psm?: CSSProperties['padding']
  py?: CSSProperties['padding']
  px?: CSSProperties['padding']
  pysm?: CSSProperties['padding']
  pxsm?: CSSProperties['padding']
}

const Container = styled('main', {
  shouldForwardProp: (p: string) => isPropValid(p),
})<ContainerProps>(
  ({ bgColor, direction }) => ({
    display: 'flex',
    flexDirection: direction || 'row',
    backgroundColor: bgColor || 'unset',
  }),
  ({ grow }) => grow && { width: '100%' },
  ({ centerContent }) =>
    centerContent && {
      alignItems: 'center',
      justifyContent: 'center',
    },
  ({ p, psm, px, py, pxsm, pysm, theme, breakpoint }) => {
    const pXNormal = px || p || theme.spacing[6]
    const pYNormal = py || p || theme.spacing[7]
    const pXSmall = pxsm || px || psm || p || theme.spacing[6]
    const pYSmall = pysm || py || psm || p || theme.spacing[7]
    return {
      padding: `${pYNormal} ${pXNormal}`,

      [`@media (max-width: ${theme.breakpoints[breakpoint || 'sm']})`]: {
        padding: `${pYSmall} ${pXSmall}`,
      },
    }
  }
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
