import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Layout } from '@ui/Layout/Layout'
import { IntlProvider } from 'react-intl'
import { useRouter } from 'next/router'
import { messages, Locales } from '@/utils/localeConfig'
import { ThemeProvider } from '@emotion/react'
import { theme } from 'styles/theme'

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
