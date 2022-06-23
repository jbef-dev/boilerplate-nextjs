import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useIntl } from 'react-intl'
import dr_abel from '@/public/dr_abel_martinez.png'

const HeroContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.size[4],
  paddingTop: theme.layout.header.height,
  marginTop: `calc(-1 * ${theme.layout.header.height})`,
  backgroundColor: theme.palette.grey[7],
}))

const HeroWrapper = styled('div')(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}))

const HeroImage = styled(motion.div)(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  // height: '40%',
  // width: '100%',
}))

const HeroTitle = styled('h1')(({ theme }) => ({
  fontSize: theme.font.size[9],
}))

export const Hero = () => {
  const intl = useIntl()

  return (
    <HeroContainer>
      <HeroWrapper>
        <div>
          <HeroTitle>{intl.formatMessage({ id: 'index.hero1' })}</HeroTitle>
        </div>
        <HeroImage>
          <Image
            src={dr_abel}
            // height='200px'
            // width='200px'
            layout='fill'
            objectFit='contain'
          />
        </HeroImage>
      </HeroWrapper>
    </HeroContainer>
  )
}
