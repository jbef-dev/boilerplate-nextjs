import { useModal } from './useModal'
import { AnimatePresence, motion, Variants } from 'framer-motion'
import { HTMLAttributes, PropsWithChildren, MouseEvent } from 'react'
import { IoClose } from 'react-icons/io5'
import { useIntl } from 'react-intl'
import customAnimations from '@/styles/customAnimations'

export interface ModalProps {
  open: boolean
  handleClose: () => void
}

export const Modal = ({
  open,
  handleClose,
  children,
}: PropsWithChildren<ModalProps> & HTMLAttributes<HTMLDivElement>) => {
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
        duration: customAnimations.duration.fast,
      },
    },
  }

  return (
    <AnimatePresence exitBeforeEnter>
      {open && (
        <motion.div
          className='fixed top-0 left-0 z-50 flex h-screen w-screen items-center justify-center overflow-hidden bg-black/60 [&*]:touch-none'
          onClick={(e: MouseEvent) => onOverlayClick(e)}
          variants={overlayVariants}
          initial='initial'
          animate='show'
          exit='exit'
          transition={{ duration: customAnimations.duration.fast }}
        >
          <motion.div
            className='flex max-h-[90vh] max-w-md flex-col items-center justify-center rounded'
            variants={modalVariants}
            transition={customAnimations.framer.modalInOut}
          >
            <motion.button
              className='absolute top-0 right-0 grid cursor-pointer place-items-center rounded bg-primary-main p-1 text-2xl text-white'
              onClick={() => handleClose()}
              variants={{
                scale: { originX: 'center', originY: 'center', scale: 1.2 },
              }}
              title={intl.formatMessage({ id: 'button.close' })}
              whileTap='scale'
              whileHover='scale'
              transition={customAnimations.framer.fast}
            >
              <IoClose />
            </motion.button>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
