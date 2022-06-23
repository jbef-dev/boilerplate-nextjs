import styled from '@emotion/styled'
import { PropsWithChildren } from 'react'

interface StyledContainerProps {
  padding?: string
  gap?: string
  bgColor?: string
}

const StyledContainer = styled.main<ContainerProps>(({ theme, ...props }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: props.padding || theme.spacing[4],
  gap: props.gap || theme.spacing[8],
  backgroundColor: props.bgColor || theme.palette.surface.light[0],
}))

interface ContainerProps extends StyledContainerProps {}

export const Container = ({
  children,
  ...props
}: PropsWithChildren<ContainerProps>) => {
  return <StyledContainer {...props}>{children}</StyledContainer>
}
