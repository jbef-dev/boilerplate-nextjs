import { useEffect, useState } from 'react'

export const useLogoAnimation = () => {
  const [visible, setVisible] = useState<boolean>(true)
  const [noScroll, setNoScroll] = useState<boolean>(false)

  useEffect(() => {
    setNoScroll(true)
  }, [])

  useEffect(() => {
    document.body.style.overflowY = noScroll ? 'hidden' : 'scroll'
    document.body.style.overflowX = 'hidden'
  }, [noScroll])

  const onCompleteAnimation = () => {
    setVisible(false)
    setNoScroll(false)
  }

  return { visible, onCompleteAnimation }
}
