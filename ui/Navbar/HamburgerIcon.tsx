import clsx from 'clsx'
import { motion } from 'framer-motion'

interface HamburgerIconProps {
  open: boolean
}

const pathStyles = clsx('fill-transparent stroke-[3px] stroke-gray-600')

export const HamburgerIcon = ({ open }: HamburgerIconProps) => {
  return (
    <div className='flex items-center justify-center gap-2 rounded-sm py-1'>
      <motion.svg
        animate={open ? 'open' : 'closed'}
        height='40'
        width='45'
        viewBox='0 0 35 30'
        style={{ strokeLinecap: 'round' }}
      >
        <motion.path
          className={pathStyles}
          d='M 5 9 L 30 9'
          variants={{
            closed: { originX: '50%', originY: 0, rotate: 0, y: 0 },
            open: { originX: '50%', originY: 0, rotate: -45, y: 6 },
          }}
        />
        <motion.path
          className={pathStyles}
          d='M 5 15 L 30 15'
          variants={{
            closed: { opacity: 1, display: 'flex' },
            open: { opacity: 1, display: 'none' },
          }}
          transition={{ duration: 0.1 }}
        />
        <motion.path
          className={pathStyles}
          d='M 5 21 L 30 21'
          variants={{
            closed: { originX: '50%', originY: 0, rotate: 0, y: 0 },
            open: { originX: '50%', originY: 0, rotate: 45, y: -6 },
          }}
        />
      </motion.svg>
    </div>
  )
}
