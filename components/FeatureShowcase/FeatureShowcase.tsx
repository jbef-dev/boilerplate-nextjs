import { FlexRow } from '@/ui/Containers/Flex'
import { FeatureElement } from './FeatureElement'
import { useIntl } from 'react-intl'

export const FeatureShowcase = () => {
  const intl = useIntl()

  return (
    <FlexRow
      grow
      centerContent
      className='max-w-screen-md flex-col justify-between gap-y-12 lg:flex-row'
    >
      <FeatureElement
        number={10}
        duration={1}
        increment={1}
        text={intl.formatMessage({ id: 'services.odontologia.title' })}
      />
      <FeatureElement
        number={200}
        duration={1.5}
        text={intl.formatMessage({ id: 'services.odontologia.title' })}
      />
      <FeatureElement
        number={350}
        duration={1.5}
        text={intl.formatMessage({ id: 'services.odontologia.title' })}
      />
    </FlexRow>
  )
}
