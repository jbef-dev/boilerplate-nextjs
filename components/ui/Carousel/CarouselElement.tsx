import { useTheme } from '@emotion/react'
import styled from '@emotion/styled'
import { HTMLMotionProps, motion, Variants } from 'framer-motion'

interface StyledElProps {
  minwidth: string
  midwidth: string
  maxwidth: string
}

const ElContainer = styled(motion.div)<StyledElProps>(
  ({ theme, ...props }) => ({
    position: 'relative',
    display: 'flex',
    width: `clamp(${props.minwidth}, ${props.midwidth}, ${props.maxwidth})`,
    borderRadius: theme.border.radius.sm,
    boxShadow: theme.shadows[0],
    overflow: 'hidden',
  })
)

interface CarouselElementProps<T>
  extends StyledElProps,
    HTMLMotionProps<'div'> {
  item: T
  handleElClick: (
    e:
      | MouseEvent
      | React.MouseEvent<HTMLDivElement>
      | React.TouchEvent<HTMLDivElement>
      | TouchEvent
      | PointerEvent,
    item: T
  ) => void
}

export const CarouselElement = <T extends unknown>({
  item,
  minwidth,
  midwidth,
  maxwidth,
  handleElClick,
  children,
  ...props
}: CarouselElementProps<T>) => {
  const theme = useTheme()

  const containerVariants: Variants = {
    rest: { y: 0 },
    hover: { y: '-3%' },
  }

  return (
    <ElContainer
      minwidth={minwidth}
      midwidth={midwidth}
      maxwidth={maxwidth}
      variants={containerVariants}
      initial={false}
      animate='rest'
      whileTap='hover'
      whileHover='hover'
      transition={theme.animation.framer.menuOpen}
      onTouchEnd={e => handleElClick(e, item)}
      onMouseUp={e => handleElClick(e, item)}
      {...props}
    >
      {children}
    </ElContainer>
  )
}
