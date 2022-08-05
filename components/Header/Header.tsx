import { Navbar } from '@ui/Navbar/Navbar'
import logo from '@/public/logo.svg'
import { NAVBAR_LINKS } from '@/config/constants/pageContent'
import { LangSelect } from '@/ui/LangSelect/LangSelect'

export const Header = () => {
  return (
    <Navbar
      logoSrc={logo}
      navbarLinks={NAVBAR_LINKS}
      langSelector={<LangSelect />}
    />
  )
}
