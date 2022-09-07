import { ButtonFlavors, ButtonProps, ButtonSizes } from './types'
import { DefaultIcon } from './DefaultIcon'
import { LoadingSpinner } from './LoadingSpinner'

// type IconContainerProps = Omit<ButtonIconProps, 'icon'> & { isHover: boolean }

// type FlavorProps = Omit<IconContainerProps, 'flavor'>

// const iconContainerFlavors = (
//   { size, bgDark, bgColor, isHover, isLoading }: FlavorProps,
//   theme: Theme
// ): FlavorCSS => {
//   const minWidth: { [k in ButtonSizes]: CSSProperties['fontSize'] } = {
//     sm: theme.font.size[8],
//     md: theme.font.size[9],
//     lg: theme.font.size[10],
//   }
//   return {
//     basic: {},
//     squared: {
//       aspectRatio: '1/1',
//       minWidth: minWidth[size],
//       backgroundColor: isLoading ? 'unset' : isHover ? bgColor : bgDark,
//     },
//     outlined: {},
//   }
// }

interface ButtonIconProps {
  flavor: ButtonFlavors
  size: ButtonSizes
  icon: ButtonProps['icon']
  isLoading: boolean
}

export const ButtonIcon = (props: ButtonIconProps) => {
  const { icon, flavor, isLoading, ...rest } = props

  switch (icon) {
    case true:
      return (
        <div className='flex items-center justify-center transition-all group-hover:translate-x-1'>
          {isLoading ? <LoadingSpinner /> : <DefaultIcon />}
        </div>
      )
    case false || undefined:
      return null
    default:
      return (
        <div {...rest}>
          <div className='flex items-center justify-center transition-all group-hover:translate-x-1'>
            {isLoading ? <LoadingSpinner /> : icon}
          </div>
        </div>
      )
  }
}
