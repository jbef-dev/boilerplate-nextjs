import { useTheme } from '@emotion/react'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import {
  HamburguerContainer,
  LogoContainer,
  MobileMenu,
  NavContainer,
  NavLinkContainer,
  NavWrapper,
} from './Navbar.styled'
import { NavItem } from './NavMenuLarge'

interface Link {
  link: string
  label: string
}

const links: Link[] = [
  { link: '/', label: 'HOME' },
  { link: '/services', label: 'SERVICES' },
  { link: '/about-us', label: 'ABOUT US' },
  { link: '/contact', label: 'CONTACT US' },
]

export const Navbar: React.FC = () => {
  const theme = useTheme()
  const router = useRouter()

  const [open, setOpen] = useState<boolean>(false)
  const [active, setActive] = useState<string>(router.asPath)

  useEffect(() => {
    setActive(router.asPath)
  }, [router.asPath])

  const handleNavigate = (e: React.MouseEvent, link: string) => {
    e.preventDefault()
    setOpen(false)
    router.push(link)
  }

  const items = links.map(link => (
    <NavItem
      key={link.label}
      link={link}
      selected={active === link.link}
      onClick={(e: React.MouseEvent) => handleNavigate(e, link.link)}
    >
      {link.label}
    </NavItem>
  ))

  const dropdownVariants = {
    open: { x: 0 },
    closed: { x: '-100%' },
  }

  return (
    <NavContainer>
      <NavWrapper>
        <LogoContainer
          onClick={(e: React.MouseEvent) => handleNavigate(e, '/')}
        >
          <img
            alt='CNG Lawyers logo'
            src='/logo.svg'
            loading='lazy'
            width='128px'
            height='50px'
          />
        </LogoContainer>

        <HamburguerContainer>
          {/* NOT IMPLEMENTED YET */}
          {/* <ContactButton */}
          {/*   size='small' */}
          {/*   btnFontSize='sm' */}
          {/*   onClick={(e: React.MouseEvent) => { */}
          {/*     viewContact() */}
          {/*     handleNavigate(e, '/contact') */}
          {/*   }} */}
          {/* > */}
          {/*   Contact us */}
          {/* </ContactButton> */}
          <button
            aria-label={`${open ? 'open' : 'close'} menu button`}
            onClick={() => setOpen(!open)}
          >
            {/* {!open ? ( */}
            {/*   <MenuRounded fontSize='large' /> */}
            {/* ) : ( */}
            {/*   <CloseRounded fontSize='large' /> */}
            {/* )} */}
          </button>
        </HamburguerContainer>

        <NavLinkContainer>{items}</NavLinkContainer>

        <MobileMenu
          // component={motion.div}
          initial={open ? 'open' : 'closed'}
          animate={open ? 'open' : 'closed'}
          variants={dropdownVariants}
          transition={theme.framerAnimation.standard}
        >
          {items}
        </MobileMenu>
      </NavWrapper>
    </NavContainer>
  )
}
