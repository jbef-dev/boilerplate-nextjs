// import { theme } from "../../styles/theme";
// import { Footer } from '../footer/Footer'
// import { Navbar } from '../navbar/Navbar'

import { Fragment } from 'react'
import { Button } from '../Button'

type LayoutProps = {
  children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Fragment>
      <Button>KEKWWW</Button>
      {/* <Navbar /> */}
      <div>{children}</div>
      {/* <Footer /> */}
    </Fragment>
  )
}
