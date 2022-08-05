// import { Footer } from '@components/Footer/Footer'
import styled from '@emotion/styled'
import { Header } from '../Header/Header'
import { LogoAnimation } from '@components/LogoAnimation/LogoAnimation'
import { useRouter } from 'next/router'
import { CookiePopup } from '@/ui/CookiePopup/CookiePopup'

type LayoutProps = {
  children: React.ReactNode
}

const MainContainer = styled.div(({ theme }) => ({
  paddingTop: theme.layout.header.height,
  minHeight: `calc(100vh - ${theme.layout.footer.height})`,
}))

export const Layout = ({ children }: LayoutProps) => {
  const router = useRouter()

  return (
    <>
      <Header />
      {
        // Rerender only when navigating to home path '/'
        router.asPath === '/' && <LogoAnimation />
      }
      <MainContainer>{children}</MainContainer>
      <CookiePopup />
      {/* <Footer /> */}
    </>
  )
}
