import { Footer } from '@/components/Footer/Footer'
import styled from '@emotion/styled'
import { Header } from '../Header/Header'

type LayoutProps = {
  children: React.ReactNode
}

const MainContainer = styled.div(({ theme }) => ({
  paddingTop: theme.layout.header.height,
  minHeight: `calc(100vh - ${theme.layout.footer.height})`,
}))

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <MainContainer>{children}</MainContainer>
      {/* <Footer /> */}
    </>
  )
}
