import { useTheme } from '@emotion/react'
import styled from '@emotion/styled'
import {
  AnimatePresence,
  HTMLMotionProps,
  LayoutGroup,
  motion,
  Variants,
} from 'framer-motion'
import { PropsWithChildren } from 'react'

const MobileMenuContainer = styled(motion.div)<{ open: boolean }>(
  ({ theme }) => ({
    position: 'fixed',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: theme.size[4],
    padding: theme.size[4],
    height: '100vh',
    width: '100vw',
    top: 0,
    left: 0,
    right: 0,
    zIndex: theme.layout.zIndex.mid,
    border: 0,
    overflow: 'hidden',
    backgroundColor: theme.palette.grey[7],
    fontSize: theme.font.size[6],
    touchAction: 'none',

    [`@media (max-width: ${theme.breakpoints.md})`]: {
      display: 'flex',
      gap: `clamp(${theme.spacing[1]}, 2vh, ${theme.spacing[4]})`,
    },
  })
)

interface MobileMenuProps extends PropsWithChildren<HTMLMotionProps<'div'>> {
  open: boolean
  langSelector: React.ReactNode
}

export const MobileMenu = ({
  open,
  langSelector,
  children,
  ...props
}: MobileMenuProps) => {
  const theme = useTheme()

  const dropdownVariants: Variants = {
    open: {
      display: 'flex',
      x: 0,
      transition: {
        staggerChildren: theme.animation.duration.fastest,
        type: 'spring',
        duration: theme.animation.duration.slow,
      },
    },
    closed: {
      transitionEnd: { display: 'none' },
      x: '100%',
      transition: {
        staggerChildren: theme.animation.duration.fastest,
        staggerDirection: -1,
        delay: theme.animation.duration.fastest * 3,
        // when: 'afterChildren',
        type: 'spring',
        duration: theme.animation.duration.slow,
      },
    },
  }

  return (
    <AnimatePresence exitBeforeEnter>
      <MobileMenuContainer
        open={open}
        initial='closed'
        animate={open ? 'open' : 'closed'}
        variants={dropdownVariants}
        {...props}
      >
        <div
          style={{
            marginBottom: `clamp(${theme.spacing[7]}, 15vh, ${theme.spacing[10]} )`,
          }}
        >
          {langSelector}
        </div>
        <LayoutGroup id='mobile'>{children}</LayoutGroup>
      </MobileMenuContainer>
    </AnimatePresence>
  )
}
