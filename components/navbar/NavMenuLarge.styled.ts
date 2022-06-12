import styled, { StyledOptions } from '@emotion/styled'
import { motion } from 'framer-motion'

interface NavLinkProps {
  selected: boolean
}

export const NavLink = styled(motion.div)<
  StyledOptions<HTMLDivElement> & NavLinkProps
>(({ theme, ...props }) => ({
  display: 'block',
  position: 'relative',
  lineHeight: 1,
  padding: `${theme.size[2]} ${theme.size[1]}`,
  // margin: `${theme.size[2]} ${theme.size[4]}`,
  width: 'max-content',
  // py: theme.size[1],
  // borderRadius: theme.border.radius.sm,
  textDecoration: 'none',
  cursor: 'pointer',
  fontWeight: 700,
  color: props.selected ? theme.palette.primary.main : theme.palette.grey.dark,

  '&:after': {
    content: '""',
    position: 'absolute',
    width: '100%',
    transform: props.selected ? 'scaleX(1)' : 'scaleX(0)',
    height: '3px',
    borderRadius: theme.border.radius.sm,
    bottom: 0,
    left: 0,
    backgroundColor: 'red',
    transformOrigin: 'bottom left',
    transition: 'transform 0.25s ease-out',
  },

  '&:hover': {
    color: theme.palette.primary.main,
    '&:after': {
      transform: 'scaleX(1)',
    },
  },
}))
