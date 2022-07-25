import { Hero } from '@/components/Hero/Hero'
import { IGCarousel } from '@/components/IGCarousel/IGCarousel'
import { FlexContainer } from '@ui/Containers/FlexContainer'
import { PageContainer } from '@ui/Containers/PageContainer'
import { getInstagramPosts } from '@utils/getInstagramPosts'
import { useTheme } from '@emotion/react'
import type { InferGetStaticPropsType, NextPage } from 'next'
import { useIntl } from 'react-intl'
import { Button } from '@ui/Button/Button'
import { FaPhoneAlt, FaRegCalendarAlt } from 'react-icons/fa'
import { useRouter } from 'next/router'
import { ServicesGrid } from '@/components/ServicesGrid/ServicesGrid'

export const getStaticProps = async () => {
  const IG_posts = await getInstagramPosts()

  return {
    props: { IG_posts },
    revalidate: 600, // 10 min in seconds
  }
}

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  IG_posts,
}) => {
  const intl = useIntl()
  const theme = useTheme()
  const router = useRouter()

  return (
    <>
      <PageContainer
        title={intl.formatMessage({ id: 'index.title' })}
        description={intl.formatMessage({ id: 'index.description' })}
        gap={theme.spacing[4]}
        style={{ paddingTop: 0 }}
      >
        <Hero />

        <FlexContainer px='0' py='0' pxsm='0' pysm='0' centerContent>
          <FlexContainer
            // px='0'
            // py='0'
            centerContent
            style={{
              flexDirection: 'column',
              gap: theme.spacing[4],
              maxWidth: theme.breakpoints.xl,
            }}
          >
            <h2
              style={{
                fontSize: theme.font.size[8],
                fontWeight: theme.font.weight.bold,
                color: theme.palette.text.dark[0],
                margin: 0,
                textAlign: 'center',
              }}
            >
              {intl.formatMessage({ id: 'index.section1' })}
              <FaRegCalendarAlt
                style={{
                  marginLeft: theme.spacing[2],
                  color: theme.palette.accent.main,
                }}
              />
            </h2>
            <Button
              icon={<FaPhoneAlt />}
              btnVariant='basic'
              onClick={() => router.push('tel:+606516718')}
            >
              {intl.formatMessage({ id: 'button.call' })}
            </Button>
          </FlexContainer>
        </FlexContainer>

        <FlexContainer px='0' pxsm='0' py='0' centerContent>
          <IGCarousel IG_posts={IG_posts} />
        </FlexContainer>

        <FlexContainer px={theme.spacing[4]} centerContent>
          <ServicesGrid />
        </FlexContainer>

        <FlexContainer direction='column'>
          <h2>Documentation &rarr;</h2>
          <p>Find in-depth information about Next.js features and API.</p>

          <h2>Learn &rarr;</h2>
          <p>Learn about Next.js in an interactive course with quizzes!</p>

          <h2>Examples &rarr;</h2>
          <p>Discover and deploy boilerplate example Next.js projects.</p>

          <h2>Deploy &rarr;</h2>
          <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
        </FlexContainer>

        <div>
          <h2>Documentation &rarr;</h2>
          <p>Find in-depth information about Next.js features and API.</p>

          <h2>Learn &rarr;</h2>
          <p>Learn about Next.js in an interactive course with quizzes!</p>

          <h2>Examples &rarr;</h2>
          <p>Discover and deploy boilerplate example Next.js projects.</p>

          <h2>Deploy &rarr;</h2>
          <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
        </div>

        <div>
          <h2>Documentation &rarr;</h2>
          <p>Find in-depth information about Next.js features and API.</p>

          <h2>Learn &rarr;</h2>
          <p>Learn about Next.js in an interactive course with quizzes!</p>

          <h2>Examples &rarr;</h2>
          <p>Discover and deploy boilerplate example Next.js projects.</p>

          <h2>Deploy &rarr;</h2>
          <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
        </div>
      </PageContainer>
    </>
  )
}

export default Home
