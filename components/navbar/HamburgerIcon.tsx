interface HamburgerIconProps {
  open: boolean
}

export const HamburgerIcon = ({ open }: HamburgerIconProps) => {
  return open ? <div>C</div> : <div>O</div>
}
