import { motion } from 'framer-motion'
import Image, { ImageProps } from 'next/future/image'
import { useRouter } from 'next/router'
import { useIntl } from 'react-intl'
import { HamburgerIcon } from './HamburgerIcon'
import { NavItem } from './NavItem'
import { MobileMenu } from './MobileMenu'
import { DesktopMenu } from './DesktopMenu'
import { NavbarLink } from '@config/constants/pageContent'
import { useNavbar } from './useNavbar'
import Link from 'next/link'
import customAnimations from '@/styles/customAnimations'
import clsx from 'clsx'

interface NavbarProps {
  navbarLinks: NavbarLink[]
  logoSrc: ImageProps['src']
  langSelector: React.ReactNode
}

export const Navbar = (props: NavbarProps) => {
  const { navbarLinks, logoSrc, langSelector } = props

  const intl = useIntl()

  const router = useRouter()
  const { active, open, hover, show, y, hoverControl, toggleOpen } = useNavbar()

  const items = navbarLinks.map(link => (
    <motion.div
      key={link.label}
      className='relative'
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
      transition={customAnimations.framer.normal}
      animate
    >
      <NavItem
        link={link}
        selected={active === link.link}
        onClick={() => window.scrollTo({ top: 0 })}
        onMouseEnter={() => hoverControl(link.link)}
      >
        {intl.formatMessage({ id: link.label })}
      </NavItem>
      {active === link.link && (
        <motion.svg
          className='absolute left-0 top-[90%] h-[3px] w-full rounded bg-accent-main'
          key={link.label + 'underline'}
          transition={customAnimations.framer.normal}
          layoutId='underline'
        />
      )}
      {(hover === link.link || active === link.link) && (
        <motion.svg
          className='absolute top-[90%] left-0 right-0 mx-auto h-[3px] w-2 rounded bg-accent-main'
          key={link.label + 'hoverline'}
          transition={customAnimations.framer.normal}
          layoutId='hoverline'
        />
      )}
    </motion.div>
  ))

  return (
    <>
      <header
        className={clsx([
          'fixed top-0 left-0 z-40 flex w-full items-center justify-center overflow-visible py-0 px-4 drop-shadow-navbar transition-all duration-300',
          show
            ? y === 0
              ? 'translate-y-0 bg-white/0'
              : 'translate-y-0 bg-white'
            : '-translate-y-full bg-white',
        ])}
      >
        <div className='relative flex h-16 w-full max-w-screen-2xl items-center justify-between'>
          <Link
            href='/'
            className='relative flex h-10 w-[220px] cursor-pointer items-center'
            onClick={() => window.scrollTo({ top: 0 })}
          >
            <Image
              alt='Logo'
              className='h-full object-contain'
              src={logoSrc}
              height={80}
              width={300}
            />
          </Link>

          <button
            className='z-50 flex h-full items-center lg:hidden'
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
          </button>

          <MobileMenu
            open={open}
            langSelector={langSelector}
            handleClose={toggleOpen}
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
        </div>
      </header>
    </>
  )
}
