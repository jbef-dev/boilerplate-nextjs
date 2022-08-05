import React from 'react'
import { ButtonIcon } from './ButtonIcon'
import { useTheme } from '@emotion/react'
import { ButtonProps, FlavorMotionVariants } from './types'
import { ButtonContainer } from './ButtonContainer'
import { ButtonText } from './ButtonText'

/**
 * Custom `Button` component with different flavors (variants)
 *
 * @param flavor - The flavor of the button ('basic', 'squared', etc...)
 * @param icon - Whether to use icon or not (custom icon, true or false)
 * @param color - Color for the button text
 * @param bgColor - Background color for the button
 * @param bgHover - Background color for main part of button when hovered
 * @param bgLight - ('squared' flavor) Background color for main part of button when hovered
 * @param bgDark - ('squared' flavor) Background color for icon part of button when hovered
 * */
export const Button = React.forwardRef<HTMLDivElement, ButtonProps>(
  ({ flavor, ...props }, ref) => {
    const theme = useTheme()

    const {
      icon,
      bgHover,
      size = 'md',
      bgColor = theme.palette.primary.main,
      bgDark = theme.palette.primary.darkest,
      bgLight = theme.palette.primary.lightest,
      children,
      ...rest
    } = props

    const buttonVariants: FlavorMotionVariants = {
      basic: {
        hover: {
          backgroundColor: bgHover || theme.palette.primary.lightest,
        },
      },
      squared: {
        hover: {
          backgroundColor: bgLight,
        },
      },
      outlined: {
        hover: {
          backgroundColor: bgHover || '#ffffff20',
        },
      },
    }

    const transition = theme.animation.framer.fast

    return (
      <ButtonContainer
        flavor={flavor}
        ref={ref}
        size={size}
        variants={buttonVariants[flavor]}
        initial={false}
        whileHover='hover'
        whileTap='hover'
        transition={transition}
        bgColor={bgColor}
        {...rest}
      >
        <ButtonText flavor={flavor} size={size}>
          {children}
        </ButtonText>
        <ButtonIcon
          icon={icon}
          flavor={flavor}
          size={size}
          bgColor={bgColor}
          bgDark={bgDark}
        />
      </ButtonContainer>
    )
  }
)
