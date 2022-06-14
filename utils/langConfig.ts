import es from '@/lang/es.json'
import en from '@/lang/en.json'
import fr from '@/lang/fr.json'

// using as const makes it so that only the values provided are accepted
export const locales = ['en', 'es', 'fr'] as const
export type Locales = typeof locales[number]

type IntlMessages = typeof en

type Messages = {
  [k in Locales]: IntlMessages
}

export const messages: Messages = {
  en: en,
  es: es,
  fr: fr,
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
