import { Hero } from '@/components/Hero/Hero'
import { Button } from '@/ui/Button/Button'
import { Container } from '@/ui/Container/Container'
import { PageContainer } from '@/ui/Container/PageContainer'
import type { NextPage } from 'next'
import Image from 'next/image'
import { useIntl } from 'react-intl'

const Home: NextPage = () => {
  const intl = useIntl()

  return (
    <>
      <Hero />

      <PageContainer
        title={intl.formatMessage({ id: 'index.title' })}
        description={intl.formatMessage({ id: 'index.description' })}
      >
        <div>
          <Button>kekw</Button>
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
    </>
  )
}

export default Home
