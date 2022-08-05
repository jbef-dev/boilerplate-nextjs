import { IntlMessages, Locales } from '@config/locale/localeConfig'

// strongly typed ids for function and component as per docs:
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
