import styled from '@emotion/styled'
import { isValidMotionProp, LayoutGroup, motion, Variants } from 'framer-motion'
import { CSSProperties, PropsWithChildren } from 'react'
import { useTheme } from '@emotion/react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { useCarouselFixed } from './hooks/useCarouselFixed'
import isPropValid from '@emotion/is-prop-valid'
import { CarouselProps } from './Carousel'

const CarouselContainer = styled('div')(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  maxWidth: theme.breakpoints.xl,
  overflow: 'hidden',
}))

const CarouselWrapper = styled(motion.div, {
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
  left: `calc(50% - (0.5 * ${elementSize} ) )`,
  cursor: 'grab',
}))

const NavButton = styled(motion.button)<{ direction: 'left' | 'right' }>(
  ({ direction, theme }) => ({
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    top: 0,
    left: direction === 'left' ? theme.spacing[3] : 'none',
    right: direction === 'right' ? theme.spacing[3] : 'none',
    bottom: 0,
    height: 'min-content',
    padding: `clamp(${theme.spacing[2]}, 2vw, ${theme.spacing[3]})`,
    fontSize: `clamp(${theme.font.size[3]}, 2vw, ${theme.font.size[5]})`,
    color: 'white',
    margin: 'auto',
    borderRadius: theme.border.radius.sm,
    backgroundColor: theme.palette.primary.lightest,
    zIndex: theme.layout.zIndex.low,
  })
)

const ItemContainer = styled(motion.div, {
  shouldForwardProp: (p: string) => isValidMotionProp(p) || isPropValid(p),
})<{ elementSize: string }>(({ theme, elementSize }) => ({
  position: 'relative',
  display: 'flex',
  height: '100%',
  width: elementSize,
  borderRadius: theme.border.radius.sm,
  boxShadow: theme.shadows[0],
  overflow: 'hidden',
  cursor: 'pointer',
}))

interface CarouselFixedVariantProps<T>
  extends Omit<CarouselProps<T>, 'variant'> {}

export const CarouselFixedVariant = <T extends Record<string, any>>(
  props: PropsWithChildren<CarouselFixedVariantProps<T>>
) => {
  const theme = useTheme()

  const {
    items,
    minwidth,
    midwidth,
    maxwidth,
    elementGap: elementGap = theme.spacing[2],
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

  const navButtonVariants: Variants = {
    hover: { x: '-3px' },
  }

  // ////////////////////////////////////////////////////////////////////
  // CHECKING THE LENGTH OF THE CHILDREN TO BE THE SAME AS ITEMS PASSED
  if (items.length !== children.length) return null
  // ////////////////////////////////////////////////////////////////////

  return (
    <>
      <CarouselContainer {...rest}>
        <NavButton
          variants={navButtonVariants}
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
          variants={navButtonVariants}
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
              children.map((child, i) => (
                <ItemContainer
                  key={items[i]?.id}
                  // key={i}
                  initial={{ left: 0, scale: 1 }}
                  animate={{
                    left: `calc(${
                      position * -1
                    } *(${elementSizeCss} + ${elementGap}))`,
                    scale: position === i ? 1 : 0.85,
                  }}
                  transition={theme.animation.framer.normal}
                  elementSize={elementSizeCss}
                  variants={containerVariants}
                  whileTap='hover'
                  whileHover='hover'
                  onTouchStart={() => setCounter(undefined)}
                  onHoverStart={() => setCounter(undefined)}
                  onTouchEnd={e => handleElClick(e, i, items[i])}
                  onMouseUp={e => handleElClick(e, i, items[i])}
                >
                  {child}
                </ItemContainer>
              ))}
          </CarouselWrapper>
        </LayoutGroup>
        {/* <div */}
        {/*   style={{ */}
        {/*     alignSelf: 'center', */}
        {/*     height: '10px', */}
        {/*     width: '90%', */}
        {/*     backgroundColor: 'red', */}
        {/*   }} */}
        {/* > */}
        {/*   <motion.div */}
        {/*     style={{ */}
        {/*       content: '""', */}
        {/*       height: 'inherit', */}
        {/*       width: '5%', */}
        {/*       backgroundColor: 'green', */}
        {/*       // x, */}
        {/*     }} */}
        {/*   ></motion.div> */}
        {/* </div> */}
      </CarouselContainer>
    </>
  )

  // return <Kekw items={items} />
}
