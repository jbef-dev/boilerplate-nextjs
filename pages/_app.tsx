import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Layout } from '@components/layout/Layout'
import { IntlProvider } from 'react-intl'
import es from '@/lang/es.json'
import en from '@/lang/en.json'
import { useRouter } from 'next/router'
import { Locales } from '@/utils/langConfig'
import { ThemeProvider } from '@emotion/react'
import { theme } from 'styles/theme'

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
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </IntlProvider>
  )
}

export default MyApp
