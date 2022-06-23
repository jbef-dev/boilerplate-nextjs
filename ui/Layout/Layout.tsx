import { Footer } from '@/components/Footer/Footer'
import { Navbar } from '@components/Navbar/Navbar'
import styled from '@emotion/styled'

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
      <Navbar />
      <MainContainer>{children}</MainContainer>
      <Footer />
    </>
  )
}
