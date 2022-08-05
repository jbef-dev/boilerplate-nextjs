import styled from '@emotion/styled'
import { useIntl } from 'react-intl'
import image_hero from '@/public/image_hero.png'
import Image from 'next/future/image'
import { useTheme } from '@emotion/react'
import { Button } from '@ui/Button/Button'
import Link from 'next/link'
import { FaTelegram } from 'react-icons/fa'

const HeroContainer = styled('div')(({ theme }) => ({
  position: 'relative',
  paddingTop: theme.layout.header.height,
  marginTop: `calc(-1 * ${theme.layout.header.height})`,
  display: 'flex',
  width: '100%',
  justifyContent: 'center',
  height: `clamp(${theme.size[14]}, 60vw, ${theme.size[15]})`,
  backgroundColor: theme.palette.surface.light[1],
  overflow: 'hidden',
  clipPath: 'polygon(100% 0, 100% 93%, 50% 100%, 0 93%, 0 0)',
  [`@media (max-width: ${theme.breakpoints.md})`]: {
    height: `calc(${theme.size[14]} + ${theme.spacing[8]})`,
  },
}))

const HeroWrapper = styled('div')(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  // padding: `clamp(${theme.spacing[7]}, 5vw, ${theme.spacing[6]})`,
  paddingBottom: 0,
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  maxWidth: theme.breakpoints.xl,
}))

const HeroTextContainer = styled('div')(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  left: `clamp(${theme.spacing[5]}, 5vw, ${theme.spacing[11]} )`,
  gap: theme.spacing[3],
  zIndex: theme.layout.zIndex.low,
  maxWidth: `min(${theme.size[14]}, 50% )`,
  marginRight: `-${theme.spacing[8]}`,
  [`@media (max-width: ${theme.breakpoints.md})`]: {
    position: 'absolute',
    maxWidth: '85%',
    left: '5vw',
  },
}))

const HeroTitle = styled('h1')(({ theme }) => ({
  color: theme.palette.text.dark[0],
  fontSize: `clamp(${theme.font.size[9]}, 8vw, ${theme.font.size[10]})`,
  fontWeight: theme.font.weight.extrabold,
  lineHeight: 1.1,
  margin: 0,
}))

const HeroSubtitle = styled('h4')(({ theme }) => ({
  color: theme.palette.text.dark[1],
  fontSize: theme.font.size[5],
  fontWeight: theme.font.weight.semibold,
  lineHeight: 1.2,
  margin: 0,
}))

const HeroImageContainer = styled('div')(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  alignSelf: 'end',
  alignItems: 'end',
  justifyContent: 'flex-start',
  paddingTop: theme.spacing[6],
  height: '100%',
  zIndex: 0,
  [`@media (max-width: ${theme.breakpoints.md})`]: {
    position: 'absolute',
    left: '10vw',
    width: '100%',
    ['&:after']: {
      content: '""',
      position: 'absolute',
      height: '100%',
      width: '100%',
      top: 0,
      left: 0,
      right: 0,
      backgroundColor: theme.palette.surface.light[1],
      opacity: 0.5,
      zIndex: theme.layout.zIndex.low,
    },
  },
}))

const HeroImage = styled(Image)(() => ({
  objectFit: 'contain',
  height: '100%',
  width: 'auto',
}))

export const Hero = () => {
  const intl = useIntl()
  const theme = useTheme()

  return (
    <HeroContainer>
      <HeroWrapper>
        <HeroTextContainer>
          <HeroTitle>
            {intl.formatMessage({ id: 'index.page.hero1' }, { br: <br /> })}
          </HeroTitle>
          <HeroSubtitle>
            {intl.formatMessage(
              { id: 'index.page.hero2' },
              { kekw: 'Español' }
            )}
          </HeroSubtitle>
          <Link href='/contact' passHref>
            <Button
              flavor='squared'
              size='md'
              bgColor={theme.palette.primary.main}
              icon={<FaTelegram />}
            >
              Contact
            </Button>
          </Link>
        </HeroTextContainer>
        <HeroImageContainer>
          <HeroImage
            src={image_hero}
            alt='hero Image'
            loading='eager'
            priority={true}
            width={700}
            height={700}
          />
        </HeroImageContainer>
      </HeroWrapper>
    </HeroContainer>
  )
}
