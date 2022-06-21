import { Navbar } from '@components/Navbar/Navbar'
import styled from '@emotion/styled'

type LayoutProps = {
  children: React.ReactNode
}

const MainContainer = styled.div(({ theme }) => ({
  paddingTop: theme.layout.header.height,
  display: 'flex',
  flexDirection: 'column',
  minHeight: `100vh-${theme.layout.footer.height}px`,
  // minHeight: `100vh`,
}))

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />
      <MainContainer>{children}</MainContainer>
      {/* <Footer /> */}
    </>
  )
}
