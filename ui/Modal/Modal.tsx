import { useModal } from './useModal'
import { useTheme } from '@emotion/react'
import styled from '@emotion/styled'
import { AnimatePresence, motion, Variants } from 'framer-motion'
import { HTMLAttributes, PropsWithChildren, MouseEvent } from 'react'
import { IoClose } from 'react-icons/io5'
import { useIntl } from 'react-intl'

const Overlay = styled(motion.div)(({ theme }) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  height: '100vh',
  width: '100vw',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'hsla(0, 0%, 0%, 0.6)',
  zIndex: theme.layout.zIndex.highest,
  overflow: 'hidden',
  ['&, & *']: {
    touchAction: 'none',
  },
}))

const ModalContainer = styled(motion.div)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  borderRadius: theme.border.radius.sm,
  alignItems: 'center',
  justifyContent: 'center',
  maxWidth: '95vw',
  maxHeight: '95vh',
}))

const CloseBtn = styled(motion.button)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  right: 0,
  fontSize: theme.font.size[6],
  cursor: 'pointer',
  display: 'grid',
  placeItems: 'center',
  padding: theme.spacing[1],
  backgroundColor: theme.palette.primary.main,
  borderRadius: theme.border.radius.sm,
  color: 'white',
}))

export interface ModalProps {
  open: boolean
  handleClose: () => void
}

export const Modal = ({
  open,
  handleClose,
  children,
}: PropsWithChildren<ModalProps> & HTMLAttributes<HTMLDivElement>) => {
  const theme = useTheme()
  const intl = useIntl()

  const { onOverlayClick } = useModal({ open: open, handleClose: handleClose })

  const overlayVariants: Variants = {
    initial: {
      opacity: 0,
    },
    show: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
    },
  }

  const modalVariants: Variants = {
    initial: {
      y: '-100%',
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
    },
    exit: {
      y: '100%',
      opacity: 0,
      transition: {
        duration: theme.animation.duration.fast,
      },
    },
  }

  return (
    <AnimatePresence exitBeforeEnter>
      {open && (
        <Overlay
          onClick={(e: MouseEvent) => onOverlayClick(e)}
          variants={overlayVariants}
          initial='initial'
          animate='show'
          exit='exit'
          transition={{ duration: theme.animation.duration.fast }}
        >
          <ModalContainer
            variants={modalVariants}
            transition={theme.animation.framer.modalInOut}
          >
            <CloseBtn
              onClick={() => handleClose()}
              variants={{
                scale: { originX: 'center', originY: 'center', scale: 1.2 },
              }}
              title={intl.formatMessage({ id: 'button.close' })}
              whileTap='scale'
              whileHover='scale'
              transition={theme.animation.framer.fast}
            >
              <IoClose />
            </CloseBtn>
            {children}
          </ModalContainer>
        </Overlay>
      )}
    </AnimatePresence>
  )
}
