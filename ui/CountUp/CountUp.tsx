import { useCountUp } from '@/ui/CountUp/useCountUp'
import { useTheme } from '@emotion/react'
import { CSSProperties } from 'react'

/**
 * Custom component that displays a countup animation
 */
interface FeatureDivProps {
  /**
   * number - number to reach
   */
  number: number
  /**
   * duration? - the duration of the countup
   * @defaultvalue `1.5`
   */
  duration?: number
  /**
   * increment? - the amount by which it increments
   * @defaultvalue `1`
   */
  increment?: number
  textBefore?: string
  textAfter?: string
  color?: CSSProperties['color']
}

/**
 * Custom component that displays a countup animation
 *
 * @prop number - target number
 * @prop duration? - duration of the countup (default: 1.5)
 * @prop increment? - amount by which it increments (deafult: 1)
 */
export const CountUp = (props: FeatureDivProps) => {
  const theme = useTheme()

  const {
    color = theme.palette.primary.main,
    textBefore = '+',
    textAfter,
    ...rest
  } = props

  const { count, ref } = useCountUp(rest)

  return (
    <div
      ref={ref}
      style={{
        margin: 0,
        fontSize: theme.font.size[9],
        fontWeight: theme.font.weight.black,
        color: color,
      }}
    >
      {textBefore}
      {count}
      {textAfter}
    </div>
  )
}
