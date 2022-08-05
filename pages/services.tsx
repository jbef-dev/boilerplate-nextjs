import { PageContainer } from '@ui/Containers/PageContainer'
import { useTheme } from '@emotion/react'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useIntl } from 'react-intl'
import { Button } from '@ui/Button/Button'
import { FaTelegram } from 'react-icons/fa'

const Home: NextPage = () => {
  const intl = useIntl()
  const router = useRouter()
  const theme = useTheme()

  return (
    <PageContainer title={'title'} description={'desc'}>
      <h1 style={{ fontSize: '20px' }}>
        {/* Welcome to <a href="https://nextjs.org">Next.js!</a> */}
        {/* <FormattedMessage id='index.hero1' /> */}
        {intl.formatMessage({ id: 'index.page.hero2' }, { kekw: 'lel' })}
      </h1>

      <Button
        icon
        // icon={<FaTelegram fontSize={theme.font.size[6]} />}
        flavor='basic'
        size='md'
        // btntype='square'
        bgColor={theme.palette.primary.main}
        // bglight={theme.palette.primary.lightest}
        // bgdark={theme.palette.primary.darkest}
        // bgHover={theme.palette.primary.lightest}
        onClick={() => router.push('/contact')}
      >
        Contact
      </Button>

      <p>
        Get started by editing <code>pages/index.tsx</code>
      </p>
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
  )
}

export default Home
