import styled from '@emotion/styled'
import { LayoutGroup, motion, Variants } from 'framer-motion'
import { PropsWithChildren, ReactNode, useRef } from 'react'
import { useTheme } from '@emotion/react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { useCarousel } from './useFreeCarousel'

const CarouselContainer = styled('div', {
  shouldForwardProp: () => true,
})(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  alignItems: 'start',
  flexDirection: 'column',
  gap: theme.spacing[4],
  padding: `${theme.spacing[4]} 0`,
  width: '100%',
  borderRadius: theme.border.radius.sm,
  maxWidth: theme.breakpoints.xl,
  overflow: 'hidden',
}))

const CarouselWrapper = styled(motion.div)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: `0 ${theme.spacing[2]}`,
  gap: `clamp(${theme.spacing[3]}, 3vw, ${theme.spacing[7]} )`,
  cursor: 'grab',
}))

const NavButton = styled(motion.button)<{ direction: 'left' | 'right' }>(
  ({ theme, ...props }) => ({
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    top: 0,
    left: props.direction === 'left' ? theme.spacing[3] : 'none',
    right: props.direction === 'right' ? theme.spacing[3] : 'none',
    bottom: 0,
    height: 'min-content',
    padding: `clamp(${theme.spacing[2]}, 2vw, ${theme.spacing[3]})`,
    fontSize: `clamp(${theme.font.size[3]}, 2vw, ${theme.font.size[5]})`,
    color: 'white',
    margin: 'auto',
    borderRadius: theme.border.radius.sm,
    backgroundColor: theme.palette.primary.lightest,
    zIndex: theme.layout.zIndex.low,

    [`@media (max-width: ${theme.breakpoints.sm})`]: {
      display: 'none',
    },
  })
)

interface ItemContainerProps {
  minwidth: string
  midwidth: string
  maxwidth: string
}

const ItemContainer = styled(motion.div)<ItemContainerProps>(
  ({ theme, ...props }) => ({
    position: 'relative',
    display: 'flex',
    width: `clamp(${props.minwidth}, ${props.midwidth}, ${props.maxwidth})`,
    borderRadius: theme.border.radius.sm,
    boxShadow: theme.shadows[0],
    overflow: 'hidden',
  })
)

interface CarouselProps<T> extends ItemContainerProps {
  items: Array<T>
  children: ReactNode[]
  onElementClick?: (p: any) => void // Add extra functionality on element click
}

export const FreeCarousel = <T extends Record<string, any>>({
  items,
  minwidth,
  midwidth,
  maxwidth,
  onElementClick,
  children,
  ...props
}: PropsWithChildren<CarouselProps<T>>) => {
  const carouselRef = useRef<HTMLDivElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const theme = useTheme()

  const { handleElClick, handleDrag, handleNavClick, animation } =
    useCarousel<T>({
      minwidth: minwidth,
      midwidth: midwidth,
      maxwidth: maxwidth,
      onElementClick: onElementClick,
    })

  const containerVariants: Variants = {
    rest: { y: 0 },
    hover: { y: '-3%' },
  }

  return (
    <>
      <CarouselContainer ref={carouselRef} {...props}>
        <NavButton
          variants={{ hover: { x: '-3px' } }}
          whileHover='hover'
          whileTap='hover'
          direction='left'
          onClick={() => handleNavClick(carouselRef, wrapperRef, 'left')}
        >
          <FaChevronLeft />
        </NavButton>
        <NavButton
          variants={{ hover: { x: '3px' } }}
          whileHover='hover'
          whileTap='hover'
          direction='right'
          onClick={() => handleNavClick(carouselRef, wrapperRef, 'right')}
        >
          <FaChevronRight />
        </NavButton>
        <LayoutGroup id='carousel'>
          <CarouselWrapper
            ref={wrapperRef}
            drag='x'
            animate={animation}
            transition={theme.animation.framer.normal}
            dragConstraints={carouselRef}
            onDrag={handleDrag}
          >
            {items &&
              children.map((child, i) => (
                <ItemContainer
                  key={items[i]?.id}
                  minwidth={minwidth}
                  midwidth={midwidth}
                  maxwidth={maxwidth}
                  variants={containerVariants}
                  initial={false}
                  animate='rest'
                  whileTap='hover'
                  whileHover='hover'
                  transition={theme.animation.framer.menuOpen}
                  onTouchEnd={e => handleElClick(e, items[i])}
                  onMouseUp={e => handleElClick(e, items[i])}
                  layoutId={`item-${items[i]!.id}`}
                >
                  {child}
                </ItemContainer>
              ))}
          </CarouselWrapper>
        </LayoutGroup>
      </CarouselContainer>
    </>
  )
}
