import { IntlMessages } from '@config/locale/localeConfig'

// ////////////////////////////////////////////
// Navbar Links
// ////////////////////////////////////////////
export interface NavbarLink {
  link: string
  label: keyof IntlMessages
}

export const NAVBAR_LINKS: NavbarLink[] = [
  {
    link: '/',
    label: 'navbar.home',
  },
  {
    link: '/services',
    label: 'navbar.services',
  },
  {
    link: '/about',
    label: 'navbar.about',
  },
  {
    link: '/contact',
    label: 'navbar.contact',
  },
]

////////////////////////////////////////////
// Footer
// ////////////////////////////////////////////
interface IFooterContact {
  [key: string]: string
}

export const CONTACT_INFO: IFooterContact = {
  addr: 'C/ Pedro Lorca 29, 3rd floor',
  addr2: 'Torrevieja - 03181',
  addr3: 'Alicante (Spain)',
  telf1: '+34 711 01 12 93',
  email: 'info@cnglawyers.com',
}

interface IFooterCol {
  title: string
  links: { label: string; link: string }[]
}

export const FOOTER_GROUPS: IFooterCol[] = [
  {
    title: 'Services',
    links: [
      { label: 'Conveyancing', link: '/services' },
      { label: 'Inheritance', link: '/services' },
      { label: 'Legal Representation', link: '/services' },
      { label: 'Tax Advice', link: '/services' },
    ],
  },
  {
    title: 'About us',
    links: [{ label: 'About us', link: '/about-us' }],
  },
  {
    title: 'Contact us',
    links: [
      { label: 'Reach out to us', link: '/contact' },
      { label: 'Whatsapp', link: '/contact' },
    ],
  },
]
