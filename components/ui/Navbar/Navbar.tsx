import { useTheme } from '@emotion/react'
import styled from '@emotion/styled'
import { motion, Variants } from 'framer-motion'
import Image, { ImageProps } from 'next/future/image'
import { useRouter } from 'next/router'
import { MouseEvent } from 'react'
import { useIntl } from 'react-intl'
import { HamburgerIcon } from './HamburgerIcon'
import { NavItem } from './NavItem'
import { MobileMenu } from './MobileMenu'
import { DesktopMenu } from './DesktopMenu'
import { NavbarLink } from '@/utils/constants'
import { useNavbar } from './hooks/useNavbar'

const NavContainer = styled(motion.nav)(({ theme }) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  display: 'flex',
  width: '100%',
  padding: `0 ${theme.spacing[4]}`,
  height: theme.layout.header.height,
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: theme.layout.zIndex.high,
}))

const NavWrapper = styled.div(({ theme }) => ({
  display: 'flex',
  position: 'relative',
  height: theme.layout.header.height,
  width: '100%',
  maxWidth: theme.breakpoints.xl,
  justifyContent: 'space-between',
  alignItems: 'center',
}))

const HamburguerContainer = styled.button(({ theme }) => ({
  display: 'none',
  alignItems: 'center',
  height: '100%',
  zIndex: theme.layout.zIndex.high,

  [`@media (max-width: ${theme.breakpoints.md})`]: {
    display: 'flex',
  },
}))

const LogoContainer = styled.div(({ theme }) => ({
  display: 'flex',
  position: 'relative',
  alignItems: 'center',
  height: '70%',
  width: 220,
  cursor: 'pointer',
  zIndex: theme.layout.zIndex.high,
}))

const HoverItem = styled(motion.svg)(({ theme }) => ({
  position: 'absolute',
  width: '8px',
  left: 'calc(50% - 4px)',
  top: '100%',
  height: '3px',
  borderRadius: theme.border.radius.xs,
  backgroundColor: theme.palette.accent.main,
}))

const UnderlineItem = styled(motion.svg)(({ theme }) => ({
  position: 'absolute',
  width: '100%',
  left: 0,
  top: '100%',
  height: '3px',
  borderRadius: theme.border.radius.xs,
  backgroundColor: theme.palette.accent.main,
}))

interface NavbarProps {
  navbarLinks: NavbarLink[]
  logoSrc: ImageProps['src']
  langSelector: React.ReactNode
}

export const Navbar = (props: NavbarProps) => {
  const { navbarLinks, logoSrc, langSelector } = props

  const intl = useIntl()
  const theme = useTheme()

  const router = useRouter()
  const {
    active,
    open,
    hover,
    show,
    y,
    handleNavigate,
    hoverControl,
    toggleOpen,
  } = useNavbar()

  const items = navbarLinks.map(link => (
    <motion.div
      key={link.label}
      style={{ position: 'relative' }}
      initial={false}
      variants={{
        open: {
          translateX: 0,
          opacity: 1,
        },
        closed: {
          translateX: '100%',
          opacity: 0,
        },
      }}
      transition={theme.animation.framer.normal}
      animate
    >
      <NavItem
        link={link}
        selected={active === link.link}
        onClick={(e: MouseEvent) => handleNavigate(e, link.link)}
        onHoverStart={() => hoverControl(link.link)}
      >
        {intl.formatMessage({ id: link.label })}
      </NavItem>
      {active === link.link && (
        <UnderlineItem
          key={link.label + 'underline'}
          transition={theme.animation.framer.normal}
          layoutId='underline'
        />
      )}
      {hover === link.link && (
        <HoverItem
          key={link.label + 'hoverline'}
          transition={theme.animation.framer.normal}
          layoutId='hoverline'
        />
      )}
    </motion.div>
  ))

  const navContainerVariants: Variants = {
    top: {
      backgroundColor: 'rgba(255,255,255,0)',
      translateY: 0,
    },
    show: {
      backgroundColor: theme.palette.surface.light[0],
      translateY: 0,
    },
    hide: {
      backgroundColor: theme.palette.surface.light[0],
      translateY: '-100%',
    },
  }

  return (
    <NavContainer
      variants={navContainerVariants}
      initial={false}
      animate={show ? (y === 0 ? 'top' : 'show') : 'hide'}
      transition={theme.animation.framer.fast}
    >
      <NavWrapper>
        <LogoContainer
          onClick={(e: React.MouseEvent) => handleNavigate(e, '/')}
        >
          <Image
            alt='Logo'
            src={logoSrc}
            height={80}
            width={300}
            style={{ objectFit: 'contain', height: '100%' }}
          />
        </LogoContainer>

        <HamburguerContainer
          aria-label={
            open
              ? intl.formatMessage({ id: 'navbar.menu.open' })
              : intl.formatMessage({ id: 'navbar.menu.close' })
          }
          title={
            open
              ? intl.formatMessage({ id: 'navbar.menu.open' })
              : intl.formatMessage({ id: 'navbar.menu.close' })
          }
          onClick={() => toggleOpen()}
        >
          <HamburgerIcon open={open} />
        </HamburguerContainer>

        <MobileMenu
          open={open}
          langSelector={langSelector}
          onHoverEnd={() => {
            hoverControl(router.asPath)
          }}
        >
          {items}
        </MobileMenu>

        <DesktopMenu
          langSelector={langSelector}
          onHoverEnd={() => {
            hoverControl(router.asPath)
          }}
        >
          {items}
        </DesktopMenu>
      </NavWrapper>
    </NavContainer>
  )
}
