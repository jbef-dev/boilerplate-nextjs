import { FlexContainer } from '@ui/Containers/FlexContainer'
import styled from '@emotion/styled'
import { useTheme } from '@emotion/react'
import { FeatureElement } from './FeatureElement'
import { useIntl } from 'react-intl'

const Container = styled(FlexContainer)(({ theme }) => ({
  gap: theme.spacing[4],
  justifyContent: 'space-evenly',
  lineHeight: 1.2,
  [`@media (max-width: ${theme.breakpoints.md})`]: {
    flexDirection: 'column',
  },
}))

export const FeatureShowcase = () => {
  const theme = useTheme()
  const intl = useIntl()

  return (
    <Container grow centerContent px={0} py={theme.spacing[4]}>
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
    </Container>
  )
}
