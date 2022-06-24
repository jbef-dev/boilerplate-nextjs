import useOutsideClick from '@/utils/hooks/useOusideClick'
import { LOCALES } from '@/utils/localeConfig'
import { useTheme } from '@emotion/react'
import styled from '@emotion/styled'
import { LayoutGroup, motion, Variants } from 'framer-motion'
import { useRouter } from 'next/router'
import { setCookie } from 'nookies'
import { useState } from 'react'
import { MdOutlineTranslate } from 'react-icons/md'

const LangMenuContainer = styled.div(({ theme }) => ({
  position: 'relative',
  height: '100%',
  minWidth: 'max-content',
  fontSize: theme.font.size[3],
}))

const LangMenuWrapper = styled(motion.div)(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  top: '25%',
  right: 0,
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  // color: theme.palette.text.light[0],
  zIndex: theme.layout.zIndex.highest,
  backgroundColor: theme.palette.primary.main,
  borderRadius: theme.border.radius.xs,
}))

const LangButton = styled(motion.button)(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.text.light[0],
  padding: `${theme.spacing[1]} ${theme.spacing[3]}`,
  zIndex: theme.layout.zIndex.highest,
  fontWeight: theme.font.weight.medium,
}))

const DropDownMenu = styled(motion.div)(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: theme.layout.zIndex.high,
  fontWeight: theme.font.weight.regular,
  width: '100%',
}))

const LangItem = styled(motion.button)(({ theme }) => ({
  display: 'flex',
  opacity: 0,
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: theme.size[2],
  color: theme.palette.text.light[0],
  width: '100%',
  ['&:hover']: {
    backgroundColor: theme.palette.primary.light,
  },
  ['&:disabled']: {
    position: 'absolute',
    visibility: 'hidden',
  },
}))

export const LanguageSelector = () => {
  const router = useRouter()
  const theme = useTheme()

  const [open, setOpen] = useState<boolean>(false)

  const handleOutsideClick = () => setOpen(open => !open)
  const { ref } = useOutsideClick(handleOutsideClick, open)

  const dropdownVariants: Variants = {
    open: {
      display: 'flex',
      opacity: 1,
      height: 'auto',
      transition: {
        // when: 'beforeChildren',
        staggerChildren: theme.animation.duration.fastest,
        staggerDirection: 1,
        ...theme.animation.framer.menuOpen,
      },
    },
    closed: {
      transitionEnd: { display: 'none' },
      opacity: 0,
      height: 0,
      transition: {
        staggerChildren: theme.animation.duration.fastest,
        staggerDirection: -1,
        delay: theme.animation.duration.normal,
        // when: 'afterChildren',
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
      layout
      disabled={locale === router.locale}
      onClick={() => {
        setCookie(null, 'NEXT_LOCALE', locale, {
          maxAge: 99999999,
          path: '/',
        })
        router.push(router.asPath, undefined, { locale: locale })
      }}
      animate
      variants={langItemVariants}
    >
      {locale.toUpperCase()}
    </LangItem>
  ))

  return (
    <LangMenuContainer>
      <LayoutGroup id='languageSelector'>
        <LangMenuWrapper layout>
          <LangButton layout ref={ref} onClick={() => setOpen(open => !open)}>
            {router.locale?.toUpperCase()}{' '}
            <MdOutlineTranslate style={{ marginLeft: theme.size[2] }} />
          </LangButton>
          <DropDownMenu
            layout
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
