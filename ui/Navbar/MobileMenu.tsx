import {
  AnimatePresence,
  HTMLMotionProps,
  LayoutGroup,
  motion,
  Variants,
} from 'framer-motion'
import { PropsWithChildren } from 'react'
import svgIcon from '@/public/icon.svg'
import Image from 'next/future/image'
import customAnimations from '@/styles/customAnimations'
import { useModal } from '@/hooks/useModal'

interface MobileMenuProps extends PropsWithChildren<HTMLMotionProps<'div'>> {
  open: boolean
  langSelector: React.ReactNode
  handleClose: () => void
}

export const MobileMenu = ({
  open,
  langSelector,
  handleClose,
  children,
  ...props
}: MobileMenuProps) => {
  const { onOverlayClick } = useModal({ open: open, handleClose: handleClose })

  const menuVariants: Variants = {
    open: {
      display: 'flex',
      x: 0,
      transition: {
        staggerChildren: customAnimations.duration.fastest,
        type: 'tween',
        duration: customAnimations.duration.fast,
      },
    },
    closed: {
      transitionEnd: { display: 'none' },
      x: '100%',
      transition: {
        staggerChildren: customAnimations.duration.fastest,
        staggerDirection: -1,
        delay: customAnimations.duration.fastest * 3,
        type: 'tween',
        duration: customAnimations.duration.fast,
      },
    },
  }

  const overlayVariants: Variants = {
    open: {
      display: 'flex',
      opacity: 1,
    },
    closed: {
      transitionEnd: { display: 'none' },
      opacity: 0,
    },
  }

  return (
    <AnimatePresence>
      <motion.aside
        className={
          'fixed top-0 bottom-0 right-0 z-40 flex h-screen w-1/2 min-w-[15rem] touch-none flex-col items-center justify-center gap-3 overflow-hidden rounded-md bg-gray-50 p-4 lg:hidden lg:gap-2.5'
        }
        initial='closed'
        animate={open ? 'open' : 'closed'}
        variants={menuVariants}
        {...props}
      >
        <div className='z-40 mb-28'>{langSelector}</div>
        <Image
          src={svgIcon}
          loading='eager'
          alt='icon'
          className='absolute top-12 right-[6vw] -rotate-45 scale-150 opacity-[0.15]'
        />
        <Image
          src={svgIcon}
          loading='eager'
          alt='icon'
          className='absolute bottom-4 left-[5vw] rotate-[15deg] scale-150 opacity-[0.13]'
        />
        <LayoutGroup id='mobile'>{children}</LayoutGroup>
      </motion.aside>
      <motion.div
        className='fixed top-0 left-0 z-20 h-screen w-screen bg-black/50'
        onClick={onOverlayClick}
        variants={overlayVariants}
        initial='closed'
        animate={open ? 'open' : 'closed'}
      />
    </AnimatePresence>
  )
}
