import { motion } from 'framer-motion'
import { PropsWithChildren } from 'react'
import { NavLink } from './NavMenuLarge.styled'

interface NavItemProps {
  link: {
    link: string
    label: string
  }
  selected: boolean
  onClick: (e: React.MouseEvent) => void
}

export const NavItem = ({
  link,
  selected,
  ...props
}: PropsWithChildren<NavItemProps>) => (
  <NavLink
    className='menu-item'
    selected={selected}
    // animate={{ opacity: selected ? 1 : 0.5 }}
    {...props}
  >
    {link.label}
    {selected && (
      <motion.div
        style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          width: '100%',
          height: '4px',
          borderRadius: '15px',
          background: 'white',
          opacity: 0.85,
        }}
        layoutId='underline'
      />
    )}
  </NavLink>
)
