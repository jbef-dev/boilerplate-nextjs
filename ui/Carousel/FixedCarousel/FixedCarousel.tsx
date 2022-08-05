import { LayoutGroup, Variants } from 'framer-motion'
import { PropsWithChildren } from 'react'
import { useTheme } from '@emotion/react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { useCarouselFixed } from './useFixedCarousel'
import { CarouselProps } from '../Carousel'
import {
  CarouselContainer,
  CarouselWrapper,
  ItemContainer,
  NavButton,
} from '../Carousel.styles'

interface CarouselFixedVariantProps<T>
  extends Omit<CarouselProps<T>, 'variant'> {}

export const FixedCarousel = <T extends Record<string, any>>(
  props: PropsWithChildren<CarouselFixedVariantProps<T>>
) => {
  const theme = useTheme()

  const {
    items,
    minwidth,
    midwidth,
    maxwidth,
    elementGap = theme.spacing[0],
    onElementClick,
    children,
    autoScroll,
    ...rest
  } = props

  const {
    elementSizeCss,
    handleElClick,
    handleDrag,
    handleDragEnd,
    handleNavClick,
    position,
    setCounter,
  } = useCarouselFixed<T>({
    items: items,
    minwidth: minwidth,
    midwidth: midwidth,
    maxwidth: maxwidth,
    autoScroll: autoScroll,
    onElementClick: onElementClick,
  })

  const containerVariants: Variants = {
    rest: { y: 0 },
    hover: { y: '-3%' },
  }

  // ////////////////////////////////////////////////////////////////////
  // CHECKING THE LENGTH OF THE CHILDREN TO BE THE SAME AS ITEMS PASSED
  if (items.length !== children.length) return null
  // ////////////////////////////////////////////////////////////////////

  return (
    <>
      <CarouselContainer {...rest}>
        <NavButton
          variants={{ hover: { x: '-3px' } }}
          flavor='basic'
          whileHover='hover'
          whileTap='hover'
          direction='left'
          onClick={() => {
            handleNavClick('left')
            setCounter(undefined)
          }}
        >
          <FaChevronLeft />
        </NavButton>
        <NavButton
          variants={{ hover: { x: '3px' } }}
          flavor='basic'
          whileHover='hover'
          whileTap='hover'
          direction='right'
          onClick={() => {
            handleNavClick('right')
            setCounter(undefined)
          }}
        >
          <FaChevronRight />
        </NavButton>
        <LayoutGroup id='carousel'>
          <CarouselWrapper
            drag='x'
            dragSnapToOrigin
            dragTransition={{
              bounceStiffness: theme.animation.stiffness.max,
              bounceDamping: theme.animation.damping.max,
            }}
            elementSize={elementSizeCss}
            elementGap={elementGap}
            onDrag={handleDrag}
            transition={theme.animation.framer.fast}
            onDragEnd={(_, info) => handleDragEnd(info)}
          >
            {items &&
              children.map((child, index) => (
                <ItemContainer
                  key={items[index]?.id}
                  initial={{ left: 0, scale: 1 }}
                  animate={{
                    left: `calc(${
                      position * -1
                    } *(${elementSizeCss} + ${elementGap}))`,
                    scale: position === index ? 1 : 0.85,
                  }}
                  transition={theme.animation.framer.normal}
                  elementSize={elementSizeCss}
                  variants={containerVariants}
                  whileTap='hover'
                  whileHover='hover'
                  onTouchStart={() => setCounter(undefined)}
                  onHoverStart={() => setCounter(undefined)}
                  onTouchEnd={e => handleElClick(e, index, items[index])}
                  onMouseUp={e => handleElClick(e, index, items[index])}
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
