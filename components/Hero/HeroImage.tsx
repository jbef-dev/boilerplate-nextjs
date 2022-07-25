import { useTheme } from '@emotion/react'
import styled from '@emotion/styled'
import { motion, Variants } from 'framer-motion'
import { StaticImageData } from 'next/future/image'
import Image, { ImageProps } from 'next/image'

interface HeroImageContainerProps {
  top: number | string
  left: number | string
  mask_opacity: number
}

const HeroImageContainer = styled(motion.div)<HeroImageContainerProps>(
  ({ top, left, mask_opacity: opacity, theme }) => ({
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    top: top,
    left: left,
    width: '100%',
    maxWidth: '500px',
    minWidth: '200px',
    zIndex: theme.layout.zIndex.negative,
    ['&:after']: {
      content: '""',
      position: 'absolute',
      height: '100%',
      width: '100%',
      top: 0,
      left: 0,
      right: 0,
      backgroundColor: theme.palette.grey[7],
      opacity: opacity,
      zIndex: theme.layout.zIndex.low,
    },
  })
)

interface HeroImageProps extends HeroImageContainerProps, ImageProps {
  src: string | StaticImageData
  alt: string | undefined
  delay: number
  top: number | string
  left: number | string
  mask_opacity: number
}

export const HeroImage = ({
  src,
  alt,
  delay,
  top,
  left,
  mask_opacity,
  ...props
}: HeroImageProps) => {
  const theme = useTheme()

  const imageVariants: Variants = {
    hidden: {
      opacity: 0,
      x: '-100%',
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  }

  return (
    <HeroImageContainer
      top={top}
      left={left}
      mask_opacity={mask_opacity}
      animate='hidden'
      variants={imageVariants}
      transition={{
        delay: delay,
        repeat: Infinity,
        repeatType: 'mirror',
        repeatDelay: delay,
        type: 'spring',
        duration: theme.animation.duration.long,
      }}
    >
      <Image src={src} alt={alt} {...props} />
    </HeroImageContainer>
  )
}
