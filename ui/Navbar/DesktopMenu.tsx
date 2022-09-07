import { HTMLMotionProps, LayoutGroup, motion } from 'framer-motion'
import { PropsWithChildren } from 'react'

interface DesktopMenuProps extends HTMLMotionProps<'div'> {
  langSelector: React.ReactNode
}

export const DesktopMenu = ({
  langSelector,
  children,
  ...props
}: PropsWithChildren<DesktopMenuProps>) => {
  return (
    <>
      <motion.div
        className='relative hidden h-full items-center justify-center gap-5 lg:flex'
        {...props}
      >
        <LayoutGroup id='desktop'>{children}</LayoutGroup>
      </motion.div>
      <div className='hidden h-full lg:flex'>{langSelector}</div>
    </>
  )
}
