import styled from '@emotion/styled'
import { useIntl } from 'react-intl'

const HeroContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.size[4],
  paddingTop: theme.layout.header.height,
  marginTop: -1 * theme.layout.header.height,
  backgroundColor: theme.palette.accent.main,
}))

const HeroTitle = styled('h1')(({ theme }) => ({
  fontSize: theme.font.size[9],
}))

export const Hero = () => {
  const intl = useIntl()

  return (
    <HeroContainer>
      <HeroTitle>{intl.formatMessage({ id: 'index.hero1' })}</HeroTitle>
    </HeroContainer>
  )
}
