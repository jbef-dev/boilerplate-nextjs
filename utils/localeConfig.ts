import esMessages from '@/lang/es'
import enMessages from '@/lang/en'
import frMessages from '@/lang/fr'

// using as const makes it so that only the values provided are accepted
export const LOCALES = ['en', 'es', 'fr'] as const
export type Locales = typeof LOCALES[number]

export type IntlMessages = typeof enMessages

type Messages = {
  [k in Locales]: IntlMessages
}

export const messages: Messages = {
  en: enMessages,
  es: esMessages,
  fr: frMessages,
}

// strongly gyped ids for function and component as per docs:
// https://formatjs.io/docs/react-intl/
declare global {
  namespace FormatjsIntl {
    interface Message {
      ids: keyof IntlMessages
    }
    interface IntlConfig {
      locale: Locales
    }
  }
}
