// ////////////////////////////////////////////
// LOCALES
// ////////////////////////////////////////////
import esMessages from './es'
import enMessages from './en'
// import frMessages from './fr'

// using as const makes it so that only the values provided are accepted
// export const LOCALES = ['en', 'es', 'fr'] as const
export const LOCALES = ['en', 'es'] as const
export type Locales = typeof LOCALES[number]

export type IntlMessages = typeof enMessages

type Messages = {
  [k in Locales]: IntlMessages
}

export const messages: Messages = {
  en: enMessages,
  es: esMessages,
  // fr: frMessages,
}
