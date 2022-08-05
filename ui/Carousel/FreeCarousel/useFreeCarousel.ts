import { useAnimation } from 'framer-motion'
import { RefObject, useState } from 'react'

interface useCarouselProps {
  minwidth: string
  midwidth: string
  maxwidth: string
  onElementClick?: (p: any) => void
}

export const useCarousel = <T extends Record<string, any>>({
  minwidth,
  midwidth,
  maxwidth,
  onElementClick,
}: useCarouselProps) => {
  const [isDrag, setIsDrag] = useState<boolean>(false)

  const handleElClick = (
    e:
      | MouseEvent
      | React.MouseEvent<HTMLDivElement>
      | React.TouchEvent<HTMLDivElement>
      | TouchEvent
      | PointerEvent,
    item: T | undefined
  ) => {
    e.preventDefault()
    if (!isDrag) {
      onElementClick && onElementClick(item) // run extra functionality only if provided
    }
    setIsDrag(false)
  }

  const handleDrag = () => setIsDrag(true)

  const animation = useAnimation()

  const elementSizeCss = `clamp(${minwidth}, ${midwidth}, ${maxwidth})`

  // ////////////////////////////////////////////////////////////
  // Pending check on mobile ios and Edge, pending further testing
  // ////////////////////////////////////////////////////////////
  const translateXForElement = (element: HTMLDivElement) => {
    const transform = element.style.transform
    if (!transform || transform.indexOf('translateX(') < 0) {
      return 0
    }
    const extractTranslateX = transform.match(/translateX\((-?\d+)/)
    return extractTranslateX &&
      extractTranslateX[1] &&
      extractTranslateX.length === 2
      ? parseInt(extractTranslateX[1], 10)
      : 0
  }

  const handleNavClick = (
    carouselRef: RefObject<HTMLDivElement>,
    wrapperRef: RefObject<HTMLDivElement>,
    direction: 'left' | 'right'
  ) => {
    if (!wrapperRef.current) return

    const xPos = translateXForElement(wrapperRef.current)
    const emUnit = parseFloat(getComputedStyle(wrapperRef.current).fontSize)
    const minStep = Number(minwidth.replace('em', '')) * emUnit
    const midStep =
      (document.documentElement.clientWidth *
        Number(midwidth.replace('vw', ''))) /
      100
    const maxStep = Number(maxwidth.replace('em', '')) * emUnit

    const step =
      midStep < minStep ? minStep : midStep > maxStep ? maxStep : midStep
    var newXPosition: number

    const xMax = carouselRef.current
      ? carouselRef.current.scrollWidth - carouselRef.current.offsetWidth
      : 0

    switch (direction) {
      case 'right':
        newXPosition = xPos - step
        animation.start({
          x: newXPosition < -1 * xMax ? -1 * xMax : newXPosition,
        })
        // console.log('xpos '+xPos)
        // console.log('xmax '+xMax)
        // console.log('step '+step)
        // console.log('newXpos '+newXPosition)
        break

      case 'left':
        newXPosition = xPos + step
        animation.start({
          x: newXPosition > 0 ? 0 : newXPosition,
        })
        // console.log(newXPosition)
        break
    }
  }
  // ////////////////////////////////////////////////////////////

  return {
    animation,
    elementSizeCss,
    handleDrag,
    handleElClick,
    handleNavClick,
  }
}
