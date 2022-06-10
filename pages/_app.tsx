import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Layout } from '../components/Layout'
import { IntlProvider } from 'react-intl'
import es from '../lang/es.json'
import en from '../lang/en.json'
import { useRouter } from 'next/router'
import { Locales } from '../lang/config'

const messages = {
  en: en,
  es: es,
}

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
