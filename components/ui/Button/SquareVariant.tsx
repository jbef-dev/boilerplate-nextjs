import { PropsWithChildren } from 'react'
import styled from '@emotion/styled'
import { Variants } from 'framer-motion'
import { useTheme } from '@emotion/react'
import { BaseButtonProps, OverrideButtonProps } from './Button'

import { BaseContainer, BaseIconContainer, BaseText } from './BaseBtnComponents'
import { Icon } from './Icon'

const BtnContainer = styled(BaseContainer)(() => ({
  padding: 0,
  gap: 0,
}))

const BtnText = styled(BaseText)(({ theme }) => ({
  padding: `0 ${theme.spacing[4]}`,
}))

const BtnIconContainer = styled(BaseIconContainer)<{
  bgColor: BaseButtonProps['bgDark']
}>(({ bgColor, theme }) => ({
  aspectRatio: '1/1',
  padding: `0 ${theme.spacing[4]}`,
  backgroundColor: bgColor,
}))

export type SquareButtonProps = OverrideButtonProps<
  BaseButtonProps,
  {
    btnVariant: 'square'
    bgHover?: never
    icon?: true | React.ReactElement
    // icon: React.ReactNode | boolean
  }
>

export const BtnSquare = (props: PropsWithChildren<SquareButtonProps>) => {
  const theme = useTheme()

  const {
    btnVariant,
    bgColor: bgColor = theme.palette.primary.main,
    bgLight: bgLight = theme.palette.primary.lightest,
    bgDark: bgDark = theme.palette.primary.darkest,
    icon,
    children,
    ...rest
  } = props

  const btnVariants: Variants = {
    hover: {
      backgroundColor: bgLight,
    },
  }

  const btnIconContainerVariants: Variants = {
    hover: {
      backgroundColor: bgColor,
    },
  }

  const transition = theme.animation.framer.fast

  return (
    <BtnContainer
      bgColor={bgColor}
      variants={btnVariants}
      initial={false}
      whileHover='hover'
      whileTap='hover'
      transition={transition}
      {...rest}
    >
      <BtnText>{children}</BtnText>
      <BtnIconContainer
        bgColor={bgDark}
        variants={btnIconContainerVariants}
        transition={transition}
      >
        <Icon icon={icon} />
      </BtnIconContainer>
    </BtnContainer>
  )
}
