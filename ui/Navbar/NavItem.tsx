import clsx from 'clsx'
import Link from 'next/link'
import { HTMLAttributes } from 'react'

interface NavItemProps extends HTMLAttributes<HTMLAnchorElement> {
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
    <Link
      href={link.link}
      className={clsx([
        'relative flex w-max cursor-pointer items-center justify-center px-2 py-1 text-lg font-medium transition-all lg:text-base',
        selected ? 'text-gray-900' : 'text-gray-800',
        'hover:text-gray-800',
      ])}
      // selected={selected}
      {...props}
    >
      {children}
    </Link>
  )
}
