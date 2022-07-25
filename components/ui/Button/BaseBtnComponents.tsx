import styled from '@emotion/styled'
import { isValidMotionProp, motion } from 'framer-motion'
import { BaseButtonProps } from './Button'
import isPropValid from '@emotion/is-prop-valid'

interface BaseContainerProps {
  bgColor: BaseButtonProps['bgColor']
}

export const BaseContainer = styled(motion.button, {
  shouldForwardProp: (p: string) => isValidMotionProp(p) || isPropValid(p),
})<BaseContainerProps>(({ bgColor, theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  color: theme.palette.text.light[0],
  backgroundColor: bgColor || theme.palette.primary.main,
  borderRadius: theme.border.radius.sm,
  overflow: 'hidden',
}))

export const BaseText = styled.div(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: theme.font.weight.regular,
}))

export const BaseIconContainer = styled(motion.div)(() => ({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}))

export const CustomIconContainer = styled(motion.div)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}))
