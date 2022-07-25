import { Navbar } from '../ui/Navbar/Navbar'
import logo from '@/public/logo.svg'
import { NAVBAR_LINKS } from '@/config/constants/pageContent'
import { LanguageSelector } from '@ui/LangSelector/LanguageSelector'

export const Header = () => {
  return (
    <Navbar
      logoSrc={logo}
      navbarLinks={NAVBAR_LINKS}
      langSelector={<LanguageSelector />}
    />
  )
}
