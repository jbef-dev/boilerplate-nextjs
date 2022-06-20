import { useTheme } from '@emotion/react'
import styled from '@emotion/styled'
import { AnimatePresence, LayoutGroup, motion, Variants } from 'framer-motion'
import { PropsWithChildren } from 'react'

const MobileMenuContainer = styled(motion.div, {
  shouldForwardProp: () => true,
})(({ theme }) => ({
  position: 'fixed',
  display: 'none',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: theme.size[4],
  padding: theme.size[4],
  height: '100vh',
  width: '100vw',
  // height: `calc(100% - ${theme.layout.header.height}px)`,
  // top: theme.layout.header.height,
  top: 0,
  left: 0,
  right: 0,
  zIndex: theme.layout.zIndex.mid,
  border: 0,
  overflow: 'hidden',
  backgroundColor: theme.palette.grey.lightest,

  [`@media (max-width: ${theme.breakpoints.md})`]: {
    display: 'flex',
  },
}))

interface NavMenuProps {
  open: boolean
}

export const MobileMenu = ({
  children,
  open,
  ...props
}: PropsWithChildren<NavMenuProps>) => {
  const theme = useTheme()

  const dropdownVariants: Variants = {
    open: {
      display: 'flex',
      y: 0,
      transition: {
        delayChildren: 0.08,
        staggerChildren: 0.08,
        ...theme.animation.framer.tween,
      },
    },
    closed: {
      transitionEnd: { display: 'none' },
      y: '-100%',
      transition: {
        delay: 0.24,
        staggerChildren: 0.08,
        staggerDirection: -1,
        when: 'afterChildren',
        ...theme.animation.framer.tween,
      },
    },
  }

  return (
    <AnimatePresence exitBeforeEnter>
      <MobileMenuContainer
        initial={open ? 'open' : 'closed'}
        animate={open ? 'open' : 'closed'}
        variants={dropdownVariants}
        {...props}
      >
        <LayoutGroup id='mobile'>{children}</LayoutGroup>
      </MobileMenuContainer>
    </AnimatePresence>
  )
}
