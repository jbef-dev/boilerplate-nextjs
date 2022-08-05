import { useTheme } from '@emotion/react'
import styled from '@emotion/styled'
import { motion } from 'framer-motion'

const Path = styled(motion.path)(({ theme }) => ({
  fill: 'transparent',
  strokeWidth: '2.5px',
  stroke: theme.palette.grey[2],
  strokeLinecap: 'round',
}))

const HamburgerContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing[2],
  justifyContent: 'center',
  borderRadius: theme.border.radius.xs,
  padding: `${theme.spacing[0]} ${theme.spacing[1]}`,
}))

interface HamburgerIconProps {
  open: boolean
}

export const HamburgerIcon = ({ open }: HamburgerIconProps) => {
  const theme = useTheme()

  return (
    <HamburgerContainer>
      <motion.svg
        animate={open ? 'open' : 'closed'}
        height='40'
        width='45'
        viewBox='0 0 35 30'
      >
        <Path
          d='M 5 9 L 30 9'
          variants={{
            closed: { originX: '50%', originY: 0, rotate: 0, y: 0 },
            open: { originX: '50%', originY: 0, rotate: -45, y: 6 },
          }}
        />
        <Path
          d='M 5 15 L 30 15'
          variants={{
            closed: { opacity: 1, display: 'flex' },
            open: { opacity: 1, display: 'none' },
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          d='M 5 21 L 30 21'
          variants={{
            closed: { originX: '50%', originY: 0, rotate: 0, y: 0 },
            open: { originX: '50%', originY: 0, rotate: 45, y: -6 },
          }}
        />
      </motion.svg>
    </HamburgerContainer>
  )
}
