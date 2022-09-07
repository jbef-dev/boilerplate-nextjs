import React from 'react'
import { ButtonIcon } from './ButtonIcon'
import { ButtonProps } from './types'
import { ButtonContainer } from './ButtonContainer'
import { ButtonText } from './ButtonText'

/**
 * Custom `Button` component with different flavors (variants)
 *
 * @param props.flavor - The flavor of the button ('basic', 'squared', etc...)
 * @param props.icon - Whether to use icon or not (custom icon, true or false)
 * @param props.color - Color for the button text
 * @param props.bgColor - Background color for the button
 * @param props.bgHover - Background color for main part of button when hovered
 * @param props.bgLight - ('squared' flavor) Background color for main part of button when hovered
 * @param props.bgDark - ('squared' flavor) Background color for icon part of button when hovered
 * */
export const Button = (props: ButtonProps) => {
  // const {
  //   flavor,
  //   isLoading = false,
  //   size = 'md',
  //   bgColor = theme.palette.primary.main,
  //   bgDark = theme.palette.primary.darkest,
  //   bgLight = theme.palette.primary.lightest,
  //   bgHover = theme.palette.primary.lightest,
  //   icon,
  //   children,
  //   ...rest
  // } = props

  const {
    flavor = 'basic',
    icon,
    size = 'md',
    isLoading = false,
    children,
    ...rest
  } = props

  const commonProps = { flavor, isLoading, size }

  return (
    <ButtonContainer {...commonProps} {...rest}>
      <ButtonText {...commonProps}>{children}</ButtonText>
      <ButtonIcon icon={icon} {...commonProps} />
    </ButtonContainer>
  )
}
