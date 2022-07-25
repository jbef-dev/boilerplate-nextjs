import styled from '@emotion/styled'
import Head from 'next/head'
import { HTMLAttributes, PropsWithChildren } from 'react'

interface StyledPageContainerProps {
  py?: string | number
  px?: string | number
  pysm?: string | number
  pxsm?: string | number
  gap?: string | number
  gapsm?: string | number
}

const StyledPageContainer = styled.main<StyledPageContainerProps>(
  ({ theme, pysm, pxsm, py, px, gap, gapsm }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    // padding: `${py || theme.spacing[8]} ${px || theme.spacing[0]}`,
    padding: `${py || theme.spacing[8]} 0`,
    gap: gap || theme.spacing[7],

    [`@media (max-width: ${theme.breakpoints.sm})`]: {
      // padding: `${pysm || theme.spacing[6]} ${pxsm || theme.spacing[0]}`,
      padding: `${pysm || theme.spacing[6]} 0`,
      gap: gapsm || theme.spacing[5],
    },
  })
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
