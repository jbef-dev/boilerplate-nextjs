import useOutsideClick from '@hooks/useOusideClick'
import { LOCALES } from '@config/locale/localeConfig'
import { useTheme } from '@emotion/react'
import { LayoutGroup, Variants } from 'framer-motion'
import { useRouter } from 'next/router'
import { CSSProperties, HTMLAttributes } from 'react'
import { MdOutlineTranslate } from 'react-icons/md'
import { useLangSelector } from './useLangSelector'
import {
  DropDownMenu,
  LangButton,
  LangItem,
  LangMenuContainer,
  LangMenuWrapper,
} from './LangSelect.styles'

interface LanguageSelectorProps extends HTMLAttributes<HTMLDivElement> {
  bgColor?: CSSProperties['backgroundColor']
  bgHover?: CSSProperties['backgroundColor']
}

export const LangSelect = (props: LanguageSelectorProps) => {
  const router = useRouter()
  const theme = useTheme()

  const { bgColor, bgHover, ...rest } = props

  const { open, handleOutsideClick, handleLangClick } = useLangSelector()

  const [ref] = useOutsideClick(handleOutsideClick, open)

  const dropdownVariants: Variants = {
    open: {
      display: 'flex',
      opacity: 1,
      height: 'auto',
      transition: {
        delayChildren: theme.animation.duration.fastest,
        staggerChildren: 0.09,
        staggerDirection: 1,
        ...theme.animation.framer.menuOpen,
      },
    },
    closed: {
      transitionEnd: { display: 'none' },
      opacity: 0,
      height: 0,
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
        delay: theme.animation.duration.normal,
        ...theme.animation.framer.menuClose,
      },
    },
  }

  const langItemVariants: Variants = {
    open: {
      y: 0,
      opacity: 1,
      transition: { ...theme.animation.framer.normal },
    },
    closed: {
      y: '-50%',
      opacity: 0,
      transition: { ...theme.animation.framer.normal },
    },
  }

  const items = LOCALES.map(locale => (
    <LangItem
      key={locale}
      bgHover={bgHover}
      disabled={locale === router.locale}
      onClick={() => handleLangClick(locale)}
      animate
      variants={langItemVariants}
    >
      {locale.toUpperCase()}
    </LangItem>
  ))

  return (
    <LangMenuContainer {...rest}>
      <LayoutGroup>
        <LangMenuWrapper bgColor={bgColor}>
          <LangButton ref={ref} onClick={() => handleOutsideClick()}>
            {router.locale?.toUpperCase()} <MdOutlineTranslate />
          </LangButton>
          <DropDownMenu
            initial='closed'
            animate={open ? 'open' : 'closed'}
            variants={dropdownVariants}
          >
            {items}
          </DropDownMenu>
        </LangMenuWrapper>
      </LayoutGroup>
    </LangMenuContainer>
  )
}
