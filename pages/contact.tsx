import { PageContainer } from '@/ui/Container/PageContainer'
import type { NextPage } from 'next'
import { useIntl } from 'react-intl'

const Home: NextPage = () => {
  const intl = useIntl()

  return (
    <PageContainer
      title={intl.formatMessage({ id: 'contact.title' })}
      description={intl.formatMessage({ id: 'contact.description' })}
    >
      <h1 style={{ fontSize: '20px' }}>
        {intl.formatMessage({ id: 'index.hero2' }, { kekw: 'lel' })}
      </h1>

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
    </PageContainer>
  )
}

export default Home
