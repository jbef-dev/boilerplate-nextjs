import customAnimations from '@/styles/customAnimations'
import { FlexRow } from '@/ui/Containers/Flex'
import clsx from 'clsx'
import { motion, useInView, Variants } from 'framer-motion'
import Image, { StaticImageData } from 'next/future/image'
import { CSSProperties, ReactNode, useRef } from 'react'

interface MemberHighlightProps {
  title: string
  description: ReactNode
  imageSrc: string | StaticImageData
  bgColor?: CSSProperties['backgroundColor']
  reverse?: boolean
}

export const MemberHighlight = (props: MemberHighlightProps) => {
  const { title, description, imageSrc, bgColor, reverse = false } = props

  const ref = useRef<HTMLDivElement>(null)

  const inview = useInView(ref, { once: true, amount: 0.3 })

  const variants: Variants = {
    initial: {
      opacity: 0,
      x: reverse ? '20%' : '-20%',
    },
    appear: {
      opacity: 1,
      x: 0,
    },
  }

  const MotionContainer = motion(FlexRow)

  return (
    <FlexRow centerContent grow>
      <MotionContainer
        centerContent
        grow
        initial={'initial'}
        animate={inview ? 'appear' : 'initial'}
        variants={variants}
        transition={customAnimations.framer.normal}
        className={clsx([
          'flex-col-reverse gap-4 px-6 pb-6 lg:flex-row lg:px-0 lg:pb-0',
          { 'lg:flex-row-reverse': reverse },
        ])}
      >
        <FlexRow className='flex-col items-center gap-3 lg:items-start'>
          <span className='text-2xl font-bold text-gray-900 underline'>
            {title}
          </span>
          <span className='text-lg font-medium text-gray-800'>
            {description}
          </span>
        </FlexRow>

        <Image
          className='h-auto w-full max-w-md object-contain md:h-auto md:w-full'
          alt={title}
          src={imageSrc}
          placeholder='blur'
          loading='eager'
          height={400}
          width={400}
        />
      </MotionContainer>
    </FlexRow>
  )
}
