import { FlexContainer } from '@/ui/Containers/FlexContainer'
import { CountUp } from '@/ui/CountUp/CountUp'
import { useTheme } from '@emotion/react'
import styled from '@emotion/styled'

const CounterText = styled('span')(({ theme }) => ({
  fontSize: theme.font.size[5],
  fontWeight: theme.font.weight.semibold,
  color: theme.palette.text.dark[0],
}))

interface FeatureElementProps {
  number: number
  duration: number
  increment?: number
  text: string
}

export const FeatureElement = (props: FeatureElementProps) => {
  const { text, ...rest } = props
  const theme = useTheme()

  return (
    <FlexContainer
      centerContent
      direction='column'
      p='0'
      pysm={theme.spacing[4]}
    >
      <CountUp {...rest} />
      <CounterText>{text}</CounterText>
    </FlexContainer>
  )
}
