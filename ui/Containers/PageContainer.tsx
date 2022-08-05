import { Theme } from '@emotion/react'
import styled from '@emotion/styled'
import Head from 'next/head'
import { CSSProperties, HTMLAttributes, PropsWithChildren } from 'react'

interface StyledPageContainerProps {
  breakpoint?: keyof Theme['breakpoints']
  gap?: string | number
  gapsm?: string | number
  p?: CSSProperties['padding']
  psm?: CSSProperties['padding']
  py?: CSSProperties['padding']
  px?: CSSProperties['padding']
  pysm?: CSSProperties['padding']
  pxsm?: CSSProperties['padding']
}

const StyledPageContainer = styled.main<StyledPageContainerProps>(
  {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  ({ gap, gapsm, p, psm, px, py, pxsm, pysm, theme, breakpoint }) => {
    const pXNormal = px || p || 0
    const pYNormal = py || p || theme.spacing[7]
    const pXSmall = pxsm || px || psm || p || 0
    const pYSmall = pysm || py || psm || p || theme.spacing[7]
    const gapNormal = gap || theme.spacing[8]
    const gapSmall = gapsm || gap || theme.spacing[5]
    return {
      padding: `${pYNormal} ${pXNormal}`,
      gap: gapNormal,

      [`@media (max-width: ${theme.breakpoints[breakpoint || 'sm']})`]: {
        padding: `${pYSmall} ${pXSmall}`,
        gap: gapSmall,
      },
    }
  }
)

interface PageContainerProps
  extends StyledPageContainerProps,
    HTMLAttributes<HTMLDivElement> {
  title: string
  description: string
}

export const PageContainer = ({
  children,
  title,
  description,
  ...props
}: PropsWithChildren<PageContainerProps>) => {
  return (
    <StyledPageContainer {...props}>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {children}
    </StyledPageContainer>
  )
}
