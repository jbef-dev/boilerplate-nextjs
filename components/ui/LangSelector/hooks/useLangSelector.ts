import { useRouter } from 'next/router'
import { useState } from 'react'
import { setCookie } from 'nookies'

export const useLangSelector = () => {
  const [open, setOpen] = useState<boolean>(false)

  const handleOutsideClick = () => setOpen(open => !open)
  const router = useRouter()

  const handleLangClick = (locale: string) => {
    setCookie(null, 'NEXT_LOCALE', locale, {
      maxAge: 99999999,
      path: '/',
    })
    router.push(router.asPath, undefined, { locale: locale })
  }

  return {
    open,
    handleOutsideClick,
    handleLangClick,
  }
}
