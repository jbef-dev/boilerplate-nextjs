import { FlexRow } from '@/ui/Containers/Flex'
import { CountUp } from '@/ui/CountUp/CountUp'

interface FeatureElementProps {
  number: number
  duration: number
  increment?: number
  text: string
}

export const FeatureElement = (props: FeatureElementProps) => {
  const { text, ...rest } = props

  return (
    <FlexRow centerContent className='flex-col'>
      <CountUp {...rest} />
      <span className='text-2xl font-semibold text-gray-800'>{text}</span>
    </FlexRow>
  )
}
