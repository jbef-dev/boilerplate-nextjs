import en from '../lang/en.json'

type IntlMessageKeys = keyof typeof en

const locales = ['en', 'es'] as const
export type Locales = typeof locales[number]

// strongly gyped ids for function and component as per docs:
// https://formatjs.io/docs/react-intl/
declare global {
  namespace FormatjsIntl {
    interface Message {
      ids: IntlMessageKeys
    }
    interface IntlConfig {
      locale: Locales
    }
  }
}
