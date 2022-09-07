import customAnimations from '@/styles/customAnimations'
import { AnimatePresence, motion } from 'framer-motion'
import { setCookie, parseCookies } from 'nookies'
import { useEffect, useState } from 'react'
import { FaCookieBite } from 'react-icons/fa'
import { useIntl } from 'react-intl'
import { Button } from '../Button/Button'

export const CookiePopup = () => {
  const intl = useIntl()

  const [open, setOpen] = useState<boolean>(false)

  useEffect(() => {
    const cookies = parseCookies()
    cookies.NEXT_COOKIE_CONSENT === undefined && setOpen(true)
  }, [])

  const handleButtonClick = (cookieList: 'true' | 'false') => {
    setCookie(null, 'NEXT_COOKIE_CONSENT', cookieList, {
      maxAge: 99999999,
      path: '/',
    })
    setOpen(false)
  }

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className='fixed bottom-0 left-0 right-0 flex w-full items-center justify-center p-4'
          key='cookiePopup'
          // initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '100%' }}
          transition={customAnimations.framer.normal}
        >
          <div className='flex w-10/12 min-w-[10rem] max-w-screen-sm justify-around gap-3 rounded-lg bg-accent-main p-4'>
            <div className='flex items-center justify-center'>
              <FaCookieBite className='text-3xl text-gray-900' />
            </div>

            <div className='flex items-center justify-center text-sm font-medium text-gray-800'>
              We use third party cookies to improve user experience.
            </div>

            <div className='flex flex-col items-stretch justify-center gap-3'>
              <Button
                flavor='basic'
                size='sm'
                onClick={() => handleButtonClick('true')}
              >
                {intl.formatMessage({ id: 'button.accept' })}
              </Button>
              <Button
                size='sm'
                flavor='outlined'
                onClick={() => handleButtonClick('false')}
              >
                {intl.formatMessage({ id: 'button.decline' })}
              </Button>
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
