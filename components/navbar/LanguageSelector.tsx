import useOutsideClick from '@/utils/hooks/useOusideClick'
import { LOCALES } from '@/utils/localeConfig'
import { useTheme } from '@emotion/react'
import styled from '@emotion/styled'
import { AnimatePresence, LayoutGroup, motion, Variants } from 'framer-motion'
import { useRouter } from 'next/router'
import { setCookie } from 'nookies'
import { useState } from 'react'
import { MdOutlineTranslate } from 'react-icons/md'

const LangMenuContainer = styled.div(({ theme }) => ({
  position: 'relative',
  height: '100%',
  minWidth: 'max-content',
}))

const LangMenuWrapper = styled(motion.div)(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  top: '25%',
  right: 0,
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  border: theme.border.width.xs,
  // color: theme.palette.text.light[0],
  zIndex: theme.layout.zIndex.highest,
  backgroundColor: theme.palette.primary.main,
}))

const LangButton = styled(motion.button)(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: theme.border.width.xs,
  color: theme.palette.text.light[0],
  padding: `${theme.size[2]} ${theme.size[3]}`,
  zIndex: theme.layout.zIndex.highest,
  backgroundColor: theme.palette.primary.main,
  fontSize: theme.font.size[3],
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
}))

const LangItem = styled(motion.button)<{ open: boolean }>(
  ({ theme, ...props }) => ({
    display: 'flex',
    opacity: 0,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: theme.size[2],
    color: theme.palette.text.light[0],
    ['&:disabled']: {
      position: 'absolute',
      visibility: 'hidden',
    },
  })
)

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
        when: 'beforeChildren',
        staggerChildren: 0.1,
        staggerDirection: 1,
        ...theme.animation.framer.tween,
      },
    },
    closed: {
      transitionEnd: { display: 'none' },
      opacity: 0,
      height: 0,
      transition: {
        staggerChildren: 0.1,
        staggerDirection: -1,
        when: 'afterChildren',
        ...theme.animation.framer.tween,
      },
    },
  }

  const langItemVariants: Variants = {
    open: {
      y: 0,
      opacity: 1,
      transition: { ...theme.animation.framer.tween },
    },
    closed: {
      y: '-50%',
      opacity: 0,
      transition: { ...theme.animation.framer.tween },
    },
  }

  const items = LOCALES.map(locale => (
    <LangItem
      key={locale}
      layout
      open={open}
      variants={langItemVariants}
      animate
      disabled={locale === router.locale}
      exit={{
        y: '-100%',
        opacity: 0,
        transition: { ...theme.animation.framer.tween },
      }}
      onClick={() => {
        setCookie(null, 'NEXT_LOCALE', locale, {
          maxAge: 99999999,
          path: '/',
        })
        router.push(router.asPath, undefined, { locale: locale })
      }}
    >
      {locale.toUpperCase()}
    </LangItem>
  ))

  return (
    <LangMenuContainer>
      <LayoutGroup id='languageSelector'>
        <LangMenuWrapper layout transition={theme.animation.framer.tween}>
          <LangButton layout ref={ref} onClick={() => setOpen(open => !open)}>
            {router.locale?.toUpperCase()}{' '}
            <MdOutlineTranslate style={{ marginLeft: theme.size[2] }} />
          </LangButton>
          <DropDownMenu
            layout
            variants={dropdownVariants}
            initial={false}
            animate={open ? 'open' : 'closed'}
          >
            <AnimatePresence>{items}</AnimatePresence>
          </DropDownMenu>
        </LangMenuWrapper>
      </LayoutGroup>
    </LangMenuContainer>
  )
}
