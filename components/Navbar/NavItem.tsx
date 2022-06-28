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
    fontWeight: theme.font.weight.medium,
    color: props.selected
      ? theme.palette.text.dark[0]
      : theme.palette.text.dark[1],
    transition: theme.animation.css.standard,

    '&:after': {
      content: "''",
      position: 'absolute',
      opacity: 1,
      left: '50%',
      top: '100%',
      height: '3px',
      width: 0,
      borderRadius: theme.border.radius.xs,
      backgroundColor: theme.palette.accent.main,
      transition: theme.animation.css.fast,
    },

    '&:hover': {
      color: theme.palette.text.dark[0],
      '&:after': {
        left: 'calc(50% - 4px)',
        width: '8px',
        opacity: props.selected ? 0 : 1,
      },
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
