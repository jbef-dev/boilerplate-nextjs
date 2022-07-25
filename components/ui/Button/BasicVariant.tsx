import { PropsWithChildren } from 'react'
import styled from '@emotion/styled'
import { Variants } from 'framer-motion'
import { useTheme } from '@emotion/react'
import { BaseButtonProps, OverrideButtonProps } from './Button'
import { BaseContainer, BaseIconContainer, BaseText } from './BaseBtnComponents'
import { Icon } from './Icon'

const BtnContainer = styled(BaseContainer)<{
  bgColor?: BaseButtonProps['bgColor']
}>(({ theme }) => ({
  padding: `${theme.spacing[2]} ${theme.spacing[5]}`,
  gap: theme.spacing[5],
}))

const BtnText = styled(BaseText)(() => ({
  padding: 0,
}))

const BtnIconContainer = styled(BaseIconContainer)(() => ({
  padding: 0,
}))

export type BasicButtonProps = OverrideButtonProps<
  BaseButtonProps,
  { btnVariant: 'basic'; bgLight?: never; bgDark?: never }
>

export const BtnBasic = (props: PropsWithChildren<BasicButtonProps>) => {
  const { btnVariant, bgColor, bgHover, icon, children, ...rest } = props
  const theme = useTheme()

  const btnVariants: Variants = {
    hover: {
      backgroundColor: bgHover || theme.palette.primary.lightest,
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
      {icon && (
        <BtnIconContainer>
          <Icon icon={icon} />
        </BtnIconContainer>
      )}
    </BtnContainer>
  )
}
