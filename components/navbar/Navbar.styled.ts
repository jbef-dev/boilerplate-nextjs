import styled, { StyledOptions } from '@emotion/styled'
import { motion } from 'framer-motion'

export const NavContainer = styled.nav(({ theme }) => ({
  // position: 'fixed',
  width: '100%',
  padding: `${theme.size[1]} ${theme.size[4]}`,
  // backgroundColor: theme.palette.primary.light,
  height: theme.layout.header.height,
  alignItems: 'center',
  justifyContent: 'center',
}))

export const NavWrapper = styled.div(({ theme }) => ({
  display: 'flex',
  height: '100%',
  justifyContent: 'space-between',
  alignItems: 'center',
}))

export const HamburguerContainer = styled.div(({ theme }) => ({
  display: 'none',
  alignItems: 'center',
  gap: theme.size[1],

  [`@media (max-width: ${theme.breakpoints.md})`]: {
    display: 'flex',
  },
}))

export const LogoContainer = styled.div(({ theme }) => ({
  display: 'flex',
  position: 'relative',
  alignItems: 'center',
  height: '100%',
  cursor: 'pointer',
}))

export const NavLinkContainer = styled.div(({ theme }) => ({
  display: 'none',
  alignItems: 'center',
  gap: theme.size[4],
  // backgroundColor:'green',

  [`@media (min-width: ${theme.breakpoints.md})`]: {
    display: 'flex',
  },
}))

export const MobileMenu = styled(motion.div, {
  shouldForwardProp: () => true,
})(({ theme }) => ({
  position: 'absolute',
  display: 'none',
  flexDirection: 'column',
  gap: theme.size[4],
  padding: theme.size[4],
  // py: theme.custom.spacing.md,
  // px: theme.custom.spacing.lg,
  height: `calc(100% - ${theme.layout.header.height}px)`,
  top: theme.layout.header.height,
  left: 0,
  right: 0,
  zIndex: 90,
  border: 0,
  borderRadius: 0,
  overflow: 'hidden',
  backgroundColor: 'white',

  [`@media (max-width: ${theme.breakpoints.md})`]: {
    display: 'flex',
  },
}))
