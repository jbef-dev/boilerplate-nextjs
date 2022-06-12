import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useIntl } from 'react-intl'
// import { useIntl } from '../utils/CustomIntl'

const Home: NextPage = () => {
  const intl = useIntl()

  return (
    <div>
      <Head>
        <title>{intl.formatMessage({ id: 'index.title' })}</title>
        <meta
          name='description'
          content={intl.formatMessage({ id: 'index.description' })}
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <h1 style={{ fontSize: '20px' }}>
          {/* Welcome to <a href="https://nextjs.org">Next.js!</a> */}
          {/* <FormattedMessage id='index.hero1' /> */}
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
      </main>

      <footer>
        Powered by{' '}
        <span>
          <Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
        </span>
      </footer>
    </div>
  )
}

export default Home
