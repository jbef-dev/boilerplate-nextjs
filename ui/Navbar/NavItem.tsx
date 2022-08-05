import styled from '@emotion/styled'
import Link from 'next/link'
import { ElementType, HTMLAttributes } from 'react'

const NavLink = styled('a')<{ selected: boolean }>(({ theme, ...props }) => ({
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

  '&:hover': {
    color: theme.palette.text.dark[1],
  },
}))

interface NavItemProps extends HTMLAttributes<HTMLAnchorElement> {
  link: {
    link: string
    label: string
  }
  selected: boolean
  as?: ElementType<any> | undefined
}

export const NavItem = ({
  link,
  selected,
  children,
  ...props
}: NavItemProps) => {
  return (
    <Link href={link.link} passHref>
      <NavLink selected={selected} {...props}>
        {children}
      </NavLink>
    </Link>
  )
}
