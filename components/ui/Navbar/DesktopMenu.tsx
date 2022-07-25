import styled from '@emotion/styled'
import { HTMLMotionProps, LayoutGroup, motion } from 'framer-motion'
import { PropsWithChildren } from 'react'

const DesktopMenuContainer = styled(motion.div)(({ theme }) => ({
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

const LangSelectorContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  height: 'inherit',
  [`@media (max-width: ${theme.breakpoints.md})`]: {
    display: 'none',
  },
}))

interface DesktopMenuProps extends HTMLMotionProps<'div'> {
  langSelector: React.ReactNode
}

export const DesktopMenu = ({
  langSelector,
  children,
  ...props
}: PropsWithChildren<DesktopMenuProps>) => {
  return (
    <>
      <DesktopMenuContainer {...props}>
        <LayoutGroup id='desktop'>{children}</LayoutGroup>
      </DesktopMenuContainer>
      <LangSelectorContainer>{langSelector}</LangSelectorContainer>
    </>
  )
}
