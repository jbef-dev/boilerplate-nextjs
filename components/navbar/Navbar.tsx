import logo from '@/public/jbef_logo.png'
import { useTheme } from '@emotion/react'
import styled from '@emotion/styled'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { MouseEvent, useEffect, useState } from 'react'
import { useIntl } from 'react-intl'
import { HamburgerIcon } from './HamburgerIcon'
import { NavItem } from './NavItem'
import { MobileMenu } from './MobileMenu'
import { DesktopMenu } from './DesktopMenu'
import { LanguageSelector } from './LanguageSelector'
import { NAVBAR_LINKS } from '@/utils/constants'

const NavContainer = styled(motion.nav)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  display: 'flex',
  width: '100%',
  padding: `0 ${theme.size[4]}`,
  height: theme.layout.header.height,
  alignItems: 'center',
  justifyContent: 'center',
}))

const NavWrapper = styled.div(({ theme }) => ({
  display: 'flex',
  position: 'relative',
  height: theme.layout.header.height,
  width: '100%',
  maxWidth: theme.breakpoints.xl,
  justifyContent: 'space-around',
  alignItems: 'center',
}))

const HamburguerContainer = styled.div(({ theme }) => ({
  display: 'none',
  alignItems: 'center',
  gap: theme.size[1],

  [`@media (max-width: ${theme.breakpoints.md})`]: {
    display: 'flex',
  },
}))

const LogoContainer = styled.div(({ theme }) => ({
  display: 'flex',
  position: 'relative',
  alignItems: 'center',
  height: '100%',
  width: theme.layout.header.height,
  cursor: 'pointer',
  zIndex: theme.layout.zIndex.high,
}))

// WORKING WITH DOT AND THEN UNDERLINE MOVE TO IT
const UnderlineItem = styled(motion.svg)<{
  selected: boolean
}>(({ theme, ...props }) => ({
  position: 'absolute',
  width: props.selected ? '100%' : '0px',
  left: props.selected ? 0 : 'calc(50% - 0px)',
  top: '100%',
  height: '3px',
  borderRadius: theme.border.radius.xs,
  right: 0,
  background: theme.palette.accent.main,
}))

export const Navbar: React.FC = () => {
  const router = useRouter()
  const intl = useIntl()
  const theme = useTheme()

  const [open, setOpen] = useState<boolean>(false)
  const [active, setActive] = useState<string>(router.asPath)
  const [hover, setHover] = useState<string>()

  useEffect(() => {
    setActive(router.asPath)
  }, [router.asPath])

  useEffect(() => {
    document.body.style.overflowY = open ? 'hidden' : 'scroll'
  }, [open])

  const handleNavigate = (e: React.MouseEvent, link: string) => {
    e.preventDefault()
    setOpen(false)
    setHover(undefined)
    setActive(link)
    router.push(link)
  }

  // THIS HAS DOT APPEAR BELOW AND THEN UNDERLINE MOVES TO IT
  const items = NAVBAR_LINKS.map(link => (
    <NavItem
      key={link.label}
      link={link}
      selected={active === link.link}
      onClick={(e: MouseEvent) => handleNavigate(e, link.link)}
      onHoverStart={() => {
        active === '/' && setHover(link.link)
      }}
      variants={{
        open: { opacity: 1, transition: { duration: 0.05 } },
        closed: { opacity: 0, transition: { duration: 0.05 } },
      }}
      animate
    >
      {intl.formatMessage({ id: link.label })}
      <AnimatePresence exitBeforeEnter>
        {(active === link.link || hover === link.link) && (
          <UnderlineItem
            key={link.link}
            selected={active === link.link}
            transition={theme.animation.framer.tween}
            layoutId='underline'
            exit={{ originX: '50%', scaleX: 0 }}
          />
        )}
      </AnimatePresence>
    </NavItem>
  ))

  return (
    <NavContainer>
      <NavWrapper>
        <LogoContainer
          onClick={(e: React.MouseEvent) => handleNavigate(e, '/')}
        >
          <Image alt='Logo' src={logo} layout='fill' objectFit='contain' />
        </LogoContainer>

        <HamburguerContainer>
          <button
            aria-label={`${open ? 'open' : 'close'} menu button`}
            onClick={() => setOpen(!open)}
            style={{
              zIndex: theme.layout.zIndex.high,
            }}
          >
            <HamburgerIcon open={open} />
          </button>
        </HamburguerContainer>

        <MobileMenu open={open}>{items}</MobileMenu>
        <DesktopMenu
          onHoverEnd={() => {
            active === '/' && setHover(router.asPath)
          }}
        >
          {items}
        </DesktopMenu>
        <LanguageSelector />
      </NavWrapper>
    </NavContainer>
  )
}
