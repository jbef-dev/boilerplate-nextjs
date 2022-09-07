import { Footer } from '@components/Footer/Footer'
import { Header } from '../Header/Header'
import { LogoAnimation } from '@components/LogoAnimation/LogoAnimation'
import { useRouter } from 'next/router'
import { CookiePopup } from '@/ui/CookiePopup/CookiePopup'

type LayoutProps = {
  children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  const router = useRouter()

  return (
    <>
      <Header />
      {
        // Rerender only when navigating to home path '/'
        router.asPath === '/' && <LogoAnimation />
      }
      <main className='overflow-hidden pt-16'>{children}</main>
      <CookiePopup />
      <Footer />
    </>
  )
}
