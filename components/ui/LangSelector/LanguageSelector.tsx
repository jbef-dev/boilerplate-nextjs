import useOutsideClick from '@hooks/useOusideClick'
import { LOCALES } from '@config/locale/localeConfig'
import { useTheme } from '@emotion/react'
import styled from '@emotion/styled'
import { isValidMotionProp, LayoutGroup, motion, Variants } from 'framer-motion'
import { useRouter } from 'next/router'
import { CSSProperties, HTMLAttributes } from 'react'
import { MdOutlineTranslate } from 'react-icons/md'
import isPropValid from '@emotion/is-prop-valid'
import { useLangSelector } from './hooks/useLangSelector'

const LangMenuContainer = styled.div(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  width: theme.size[8],
  fontSize: theme.font.size[3],
  zIndex: theme.layout.zIndex.highest,
}))

interface LangMenuWrapperProps {
  bgColor?: CSSProperties['backgroundColor']
}

const LangMenuWrapper = styled('div')<LangMenuWrapperProps>(
  ({ bgColor, theme }) => ({
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    top: '25%',
    width: theme.size[8],
    flexDirection: 'column',
    backgroundColor: bgColor || theme.palette.primary.main,
    borderRadius: theme.border.radius.xs,
  })
)

const LangButton = styled('button')(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: theme.spacing[2],
  color: theme.palette.text.light[0],
  padding: `${theme.spacing[1]} ${theme.spacing[2]}`,
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

interface LangItemProps {
  bgHover?: CSSProperties['backgroundColor']
}

const LangItem = styled(motion.button, {
  shouldForwardProp: (p: string) => isPropValid(p) || isValidMotionProp(p),
})<LangItemProps>(({ bgHover, theme }) => ({
  display: 'flex',
  opacity: 0,
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: theme.size[2],
  color: theme.palette.text.light[0],
  width: '100%',
  ['&:hover']: {
    backgroundColor: bgHover || theme.palette.primary.light,
  },
  ['&:disabled']: {
    position: 'absolute',
    visibility: 'hidden',
  },
}))

interface LanguageSelectorProps
  extends LangMenuWrapperProps,
    LangItemProps,
    HTMLAttributes<HTMLDivElement> {
  // menu: 'desktop' | 'mobile'
}

export const LanguageSelector = (props: LanguageSelectorProps) => {
  const router = useRouter()
  const theme = useTheme()

  const { bgColor, bgHover, ...rest } = props

  const { open, handleOutsideClick, handleLangClick } = useLangSelector()

  const { ref } = useOutsideClick(handleOutsideClick, open)

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
      <LayoutGroup id='languageSelector'>
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
