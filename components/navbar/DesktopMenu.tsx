import styled from '@emotion/styled'
import { HTMLMotionProps, LayoutGroup, motion } from 'framer-motion'
import { PropsWithChildren } from 'react'

const DesktopMenuContainer = styled(motion.div, {
  shouldForwardProp: () => true,
})(({ theme }) => ({
  display: 'flex',
  position: 'relative',
  justifyContent: 'center',
  alignItems: 'center',
  gap: theme.size[4],
  height: '100%',

  [`@media (max-width: ${theme.breakpoints.md})`]: {
    display: 'none',
  },
}))

export const DesktopMenu = ({
  children,
  ...props
}: PropsWithChildren<HTMLMotionProps<'div'>>) => {
  return (
    <DesktopMenuContainer {...props}>
      <LayoutGroup id='desktop'>{children}</LayoutGroup>
    </DesktopMenuContainer>
  )
}
