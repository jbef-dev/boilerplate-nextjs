import { useTheme } from '@emotion/react'
import { AnimatePresence, motion } from 'framer-motion'
import { setCookie, parseCookies } from 'nookies'
import { useEffect, useState } from 'react'
import { FaCookieBite } from 'react-icons/fa'
import { Button } from '../Button/Button'
import { FlexContainer } from '../Containers/FlexContainer'

export const CookiePopup = () => {
  const theme = useTheme()

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
          key='cookiePopup'
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '100%' }}
          transition={theme.animation.framer.normal}
          style={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            width: '100vw',
            maxWidth: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: theme.spacing[4],
              borderRadius: theme.border.radius.xl,
              padding: theme.spacing[4],
              width: '80%',
              minWidth: theme.breakpoints.xs,
              maxWidth: theme.breakpoints.md,
              backgroundColor: theme.palette.surface.light[2],
            }}
          >
            <FlexContainer
              centerContent
              p={theme.spacing[2]}
              style={{
                borderRadius: '50%',
                lineHeight: 1,
                backgroundColor: theme.palette.surface.light[0],
              }}
            >
              <FaCookieBite
                size={theme.font.size[8]}
                color={theme.palette.text.dark[2]}
              />
            </FlexContainer>
            <div
              style={{
                fontSize: theme.font.size[3],
                fontWeight: theme.font.weight.medium,
              }}
            >
              We use third party cookies to improve user experience.
            </div>
            <FlexContainer
              direction='column'
              p={'0'}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'stretch',
                justifyContent: 'center',
                gap: theme.spacing[3],
              }}
            >
              <Button
                flavor='basic'
                size='sm'
                onClick={() => handleButtonClick('true')}
              >
                Accept
              </Button>
              <Button
                size='sm'
                flavor='outlined'
                onClick={() => handleButtonClick('false')}
              >
                Decline
              </Button>
            </FlexContainer>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
