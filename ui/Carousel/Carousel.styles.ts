import styled from '@emotion/styled'
import { Button } from '@ui/Button/Button'
import { isValidMotionProp, motion } from 'framer-motion'
import isPropValid from '@emotion/is-prop-valid'
import { CSSProperties } from 'react'

export const CarouselWrapper = styled(motion.div, {
  shouldForwardProp: (p: string) => isValidMotionProp(p) || isPropValid(p),
})<{
  elementSize: string
  elementGap: CSSProperties['gap']
}>(({ theme, elementSize, elementGap }) => ({
  position: 'relative',
  display: 'flex',
  paddingTop: theme.spacing[5],
  paddingBottom: theme.spacing[5],
  gap: elementGap || theme.spacing[2],
  alignItems: 'center',
  left: `calc(50% - (0.5 * ${elementSize}))`,
  cursor: 'grab',
}))

export const CarouselContainer = styled('div')(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  maxWidth: theme.breakpoints.xl,
  overflow: 'hidden',
}))

export const NavButton = styled(Button)<{ direction: 'left' | 'right' }>(
  ({ direction, theme }) => ({
    position: 'absolute',
    top: 0,
    left: direction === 'left' ? theme.spacing[3] : 'none',
    right: direction === 'right' ? theme.spacing[3] : 'none',
    bottom: 0,
    height: 'min-content',
    padding: theme.spacing[2],
    fontSize: `clamp(${theme.font.size[4]}, 2vw, ${theme.font.size[5]})`,
    margin: 'auto',
    borderRadius: theme.border.radius.md,
    backgroundColor: theme.palette.primary.lightest,
    zIndex: theme.layout.zIndex.low,
  })
)

export const ItemContainer = styled(motion.div, {
  shouldForwardProp: (p: string) => isValidMotionProp(p) || isPropValid(p),
})<{ elementSize: string }>(({ theme, elementSize }) => ({
  position: 'relative',
  display: 'flex',
  height: '100%',
  width: elementSize,
  borderRadius: theme.border.radius.md,
  boxShadow: theme.shadows[0],
  overflow: 'hidden',
  cursor: 'pointer',
}))
