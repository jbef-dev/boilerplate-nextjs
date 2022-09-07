import useOutsideClick from '@/hooks/useOutsideClick'
import { LOCALES } from '@config/locale/localeConfig'
import { LayoutGroup, motion, Variants } from 'framer-motion'
import { useRouter } from 'next/router'
import { CSSProperties, HTMLAttributes } from 'react'
import { MdOutlineTranslate } from 'react-icons/md'
import { useLangSelector } from './useLangSelector'
import customAnimations from '@/styles/customAnimations'

interface LanguageSelectorProps extends HTMLAttributes<HTMLDivElement> {
  bgColor?: CSSProperties['backgroundColor']
  bgHover?: CSSProperties['backgroundColor']
}

export const LangSelect = (props: LanguageSelectorProps) => {
  const router = useRouter()

  const { bgColor, bgHover, ...rest } = props

  const { open, handleOutsideClick, handleLangClick } = useLangSelector()

  const [ref] = useOutsideClick(handleOutsideClick, open)

  const dropdownVariants: Variants = {
    open: {
      display: 'flex',
      opacity: 1,
      height: 'auto',
      transition: {
        delayChildren: customAnimations.duration.fastest,
        staggerChildren: 0.09,
        staggerDirection: 1,
        ...customAnimations.framer.menuOpen,
      },
    },
    closed: {
      transitionEnd: { display: 'none' },
      opacity: 0,
      height: 0,
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
        delay: customAnimations.duration.normal,
        ...customAnimations.framer.menuClose,
      },
    },
  }

  const langItemVariants: Variants = {
    open: {
      y: 0,
      opacity: 1,
      transition: { ...customAnimations.framer.normal },
    },
    closed: {
      y: '-50%',
      opacity: 0,
      transition: { ...customAnimations.framer.normal },
    },
  }

  const items = LOCALES.map(locale => (
    <motion.button
      className='mb-2 flex w-full items-center justify-center text-gray-50 opacity-0 hover:bg-primary-lightest disabled:absolute disabled:hidden'
      key={locale}
      // bgHover={bgHover}
      disabled={locale === router.locale}
      onClick={() => handleLangClick(locale)}
      animate
      variants={langItemVariants}
    >
      {locale.toUpperCase()}
    </motion.button>
  ))

  return (
    <div
      className='relative flex w-20 items-center justify-center'
      {...rest}
    >
      <LayoutGroup>
        <div className='absolute top-1/4 flex flex-col items-center justify-center rounded bg-primary-main'>
          <button
            className='relative flex items-center justify-center gap-2 px-4 py-1 font-medium text-gray-50'
            ref={ref}
            onClick={() => handleOutsideClick()}
          >
            {router.locale?.toUpperCase()} <MdOutlineTranslate />
          </button>
          <motion.div
            className='relative flex w-full flex-col items-center justify-center font-normal'
            initial='closed'
            animate={open ? 'open' : 'closed'}
            variants={dropdownVariants}
          >
            {items}
          </motion.div>
        </div>
      </LayoutGroup>
    </div>
  )
}
