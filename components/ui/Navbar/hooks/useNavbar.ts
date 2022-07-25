import { useRouter } from 'next/router'
import { MouseEvent, useCallback, useEffect, useState } from 'react'

export const useNavbar = () => {
  const router = useRouter()

  const [open, setOpen] = useState<boolean>(false)
  const [active, setActive] = useState<string | undefined>(router.asPath)
  const [hover, setHover] = useState<string | undefined>(router.asPath)

  const [show, setShow] = useState<boolean>(true)
  const [y, setY] = useState<number>(0)
  const [deltaY, setDeltaY] = useState<number>(0)
  const [scrollDir, setScrollDir] = useState<'down' | 'up'>()

  const hoverControl = (value: string | undefined) => setHover(old => value)
  const toggleOpen = () => setOpen(o => !o)

  const navbarControl = useCallback(() => {
    const increment = 150
    if (typeof window !== 'undefined') {
      if (window.scrollY > y) {
        setScrollDir('down')
        if (window.scrollY > deltaY + increment) {
          setShow(false)
        }
      } else {
        setScrollDir('up')
        if (window.scrollY < deltaY - increment) {
          setShow(true)
        }
      }
      setY(window.scrollY)
    }
  }, [y, deltaY, router.asPath])

  useEffect(() => {
    show ? setActive(router.asPath) : setActive(undefined)
  }, [show])

  useEffect(() => {
    window.addEventListener('scroll', navbarControl)
    return () => {
      window.removeEventListener('scroll', navbarControl)
    }
  }, [navbarControl])

  useEffect(() => {
    setDeltaY(window.scrollY)
  }, [scrollDir])

  useEffect(() => {
    setOpen(false)
    setActive(router.asPath)
    setHover(undefined)
  }, [router.asPath, router.locale, setOpen])

  const handleNavigate = (e: React.MouseEvent, link: string) => {
    e.preventDefault()
    window.scrollTo({ top: 0 })
    router.push(link)
  }

  return {
    active,
    open,
    hover,
    show,
    y,
    handleNavigate,
    hoverControl,
    toggleOpen,
  }
}
