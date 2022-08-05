import { CSSProperties } from 'react'
import styled from '@emotion/styled'
import isPropValid from '@emotion/is-prop-valid'
import { isValidMotionProp, motion } from 'framer-motion'

export const LangMenuContainer = styled.div(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: theme.size[9],
  fontSize: theme.font.size[3], // 1rem
  zIndex: theme.layout.zIndex.highest,
}))

interface LangMenuWrapperProps {
  bgColor?: CSSProperties['backgroundColor']
}

export const LangMenuWrapper = styled('div')<LangMenuWrapperProps>(
  ({ bgColor, theme }) => ({
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    top: '20%',
    flexDirection: 'column',
    backgroundColor: bgColor || theme.palette.primary.main,
    borderRadius: theme.border.radius.sm,
  })
)

export const LangButton = styled('button')(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: theme.spacing[2],
  color: theme.palette.text.light[0],
  padding: `${theme.spacing[2]} ${theme.spacing[4]}`,
  zIndex: theme.layout.zIndex.highest,
  fontWeight: theme.font.weight.medium,
  lineHeight: 1,
}))

export const DropDownMenu = styled(motion.div)(({ theme }) => ({
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

export const LangItem = styled(motion.button, {
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
