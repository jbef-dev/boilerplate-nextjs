import { HTMLAttributes } from 'react'
import styled from '@emotion/styled'

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {}

const BtnText = styled.span({
  color: 'black',
})

const BtnDot = styled.div({
  backgroundColor: 'blue',
  width: '30px',
  height: '30px',
})

const Btn = styled.button(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '5px',
  color: 'green',
  padding: '1rem',
  height: '50px',
  width: theme.size[11],

  // '&:hover': {
  //   '&:after': {
  //     content: '""',
  //     backgroundColor: 'red',
  //     height: '100%',
  //     width: '100%',
  //     transition: '1s ease-in-out',
  //   },
  // },

  // [`&:hover ${BtnDot}`]: {
  '&:hover': {
    [BtnDot.toString()]: {
      position: 'absolute',
      height: '100%',
      width: '100%',
      transition: '1s ease-in-out',
    },
  },
}))

export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <Btn {...props}>
      <BtnDot></BtnDot>
      <BtnText>{children}</BtnText>
    </Btn>
  )
}
