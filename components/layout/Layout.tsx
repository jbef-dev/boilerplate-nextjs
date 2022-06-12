import { Button } from '@components/button/Button'
import { Navbar } from '@components/navbar/Navbar'

type LayoutProps = {
  children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />
      <div>
        <Button>KEKWWW</Button>
        {children}
      </div>
      {/* <Footer /> */}
    </>
  )
}
