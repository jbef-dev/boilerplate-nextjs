import { IntlMessages } from '@/config/locale/localeConfig'
import customAnimations from '@/styles/customAnimations'
import { FlexRow } from '@/ui/Containers/Flex'
import clsx from 'clsx'
import { motion, useInView, Variants } from 'framer-motion'
import Image, { ImageProps } from 'next/future/image'
import { ReactNode, useRef } from 'react'
import { useIntl } from 'react-intl'

interface ServiceSectionProps {
  icon: ReactNode
  title: keyof IntlMessages
  content: keyof IntlMessages
  image: ImageProps['src']
  reverse?: boolean
}

export const ServiceSection = ({
  icon,
  title,
  content,
  image,
  reverse,
}: ServiceSectionProps) => {
  const intl = useIntl()

  const ref = useRef<HTMLDivElement>(null)

  const inview = useInView(ref, { once: true })

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
    <MotionContainer
      ref={ref}
      grow
      className='max-w-screen-lg flex-col gap-5'
      initial={'initial'}
      animate={inview ? 'appear' : 'initial'}
      variants={variants}
      transition={customAnimations.framer.normal}
    >
      <FlexRow centerContent className='gap-3 text-3xl font-bold text-gray-800'>
        <span>{icon}</span>
        <span>{intl.formatMessage({ id: title })}</span>
      </FlexRow>
      <FlexRow
        className={clsx([
          'flex-col gap-7 text-lg font-medium text-gray-800 md:flex-row',
          { 'md:flex-row-reverse': reverse },
        ])}
        centerContent
      >
        <Image
          className='h-auto w-full rounded'
          src={image}
          placeholder='blur'
          alt={title}
          loading='eager'
          height={400}
          width={400}
        />
        <span>{intl.formatMessage({ id: content })}</span>
      </FlexRow>
    </MotionContainer>
  )
}
