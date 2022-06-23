import styled from '@emotion/styled'
import Head from 'next/head'
import { PropsWithChildren } from 'react'

interface StyledPageContainerProps {
  py?: string
  px?: string
  gap?: string
}

const StyledPageContainer = styled.main<StyledPageContainerProps>(
  ({ theme, ...props }) => ({
    display: 'flex',
    flexDirection: 'column',
    paddingTop: props.py || theme.spacing[8],
    paddingBottom: props.py || theme.spacing[8],
    paddingLeft: props.px || theme.spacing[6],
    paddingRight: props.px || theme.spacing[6],
    gap: props.gap || theme.spacing[7],
  })
)

interface PageContainerProps extends StyledPageContainerProps {
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
