import styled from '@emotion/styled'
import { HTMLMotionProps, motion } from 'framer-motion'

const NavLink = styled(motion.div)<{ selected: boolean }>(
  ({ theme, ...props }) => ({
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    lineHeight: 1,
    padding: `${theme.size[2]} ${theme.size[1]}`,
    width: 'max-content',
    textDecoration: 'none',
    cursor: 'pointer',
    // fontSize: theme.font.size[4],
    fontWeight: theme.font.weight.medium,
    color: props.selected
      ? theme.palette.text.dark[0]
      : theme.palette.text.dark[1],
    transition: theme.animation.css.standard,

    '&:hover': {
      color: theme.palette.text.dark[1],
    },
  })
)

interface NavItemProps extends HTMLMotionProps<'div'> {
  link: {
    link: string
    label: string
  }
  selected: boolean
}

export const NavItem = ({
  link,
  selected,
  children,
  ...props
}: NavItemProps) => {
  return (
    <NavLink selected={selected} {...props}>
      {children}
    </NavLink>
  )
}
