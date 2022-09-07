import '@styles/globals.css'
import type { AppProps } from 'next/app'
import { Layout } from '@components/Layout/Layout'
import { IntlProvider } from 'react-intl'
import { useRouter } from 'next/router'
import { messages, Locales } from '@config/locale/localeConfig'

function MyApp({ Component, pageProps }: AppProps) {
  const { locale, defaultLocale } = useRouter()

  return (
    <IntlProvider
      locale={locale as Locales}
      defaultLocale={defaultLocale}
      messages={messages[locale as Locales]}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </IntlProvider>
  )
}

export default MyApp
