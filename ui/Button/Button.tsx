import { HTMLAttributes } from 'react'
import styled from '@emotion/styled'
import { useTheme } from '@emotion/react'

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {}

const BtnText = styled.div(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: `0 ${theme.spacing[5]}`,
  fontWeight: theme.font.weight.regular,
}))

const BtnIconContainer = styled.div(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: theme.palette.primary.dark,
  // height: '100%',
  padding: `${theme.spacing[3]} ${theme.spacing[4]}`,
  aspectRatio: '1/1',
  '& .arrow-head': {
    transform: 'translateX(0)',
  },
  '& .arrow-body': {
    opacity: 0,
    transform: 'scaleX(1)',
  },
}))

const Btn = styled.button(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  color: theme.palette.text.light[0],
  backgroundColor: theme.palette.primary.main,
  borderRadius: theme.border.radius.sm,
  overflow: 'hidden',
  transition: theme.animation.css.fast,
  '& *': {
    transition: theme.animation.css.fast,
  },

  '&:hover': {
    backgroundColor: theme.palette.primary.light,
    [`${BtnIconContainer}`]: {
      backgroundColor: theme.palette.primary.main,
      '& .arrow-head': {
        transform: 'translateX(3px)',
      },
      '& .arrow-body': {
        opacity: 1,
        transform: 'scaleX(2)',
      },
      // '& > *': {
      //   transform: 'translateX(5px)',
      // },
    },
  },
}))

export const Button = ({ children, ...props }: ButtonProps) => {
  const theme = useTheme()

  return (
    <Btn {...props}>
      <BtnText>{children}</BtnText>
      <BtnIconContainer>
        <svg
          viewBox='0 0 6 9'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className='arrow-icon'
          style={{
            overflow: 'visible',
            width: '8px',
          }}
        >
          <g className='arrow-head'>
            <path
              d='M1 1C4.5 4 5 4.38484 5 4.5C5 4.61516 4.5 5 1 8'
              stroke='currentColor'
              stroke-width='1.5'
            />
          </g>
          <g className='arrow-body'>
            <path d='M3.5 4.5H0' stroke='currentColor' stroke-width='1.5' />
          </g>
        </svg>
      </BtnIconContainer>
    </Btn>
  )
}
