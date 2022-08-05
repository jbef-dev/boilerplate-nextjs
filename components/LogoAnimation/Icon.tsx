import styled from '@emotion/styled'
import { motion, Variants } from 'framer-motion'
import { PropsWithoutRef, SVGProps } from 'react'

const StyledSvg = styled('svg')({
  ['& .st1']: {
    stroke: '#C69258',
  },
  ['& .fill0']: {
    fill: '#FFFFFF',
  },
  ['& .fill1']: {
    fill: '#C69258',
  },
})

export const Icon = (props: PropsWithoutRef<SVGProps<SVGElement>>) => {
  const pathVariants: Variants = {
    initial: {
      pathLength: 0,
      // pathOffset: 1,
      strokeOpacity: 1,
      fillOpacity: 0,
    },
    animate: {
      pathLength: 1,
      // pathOffset: 0,
      transition: { duration: 1 },
    },
    opaque: {
      fillOpacity: 1,
      strokeOpacity: 0,
      transition: { delay: 0.6, duration: 0.5 },
    },
  }

  return (
    <StyledSvg
      height='100%'
      style={{
        position: 'relative',
        overflow: 'visible',
        // backgroundColor: 'red',
      }}
      {...props}
      viewBox='0 0 182.22 200.8'
    >
      <motion.g initial='initial' animate={['animate', 'opaque']}>
        <motion.path
          className='st1 fill1'
          d='M182.22,51.21c0.22,6.76-1.95,13.07-3.43,19.44c-8.82,37.94-17.89,75.81-26.74,113.75
          c-1.86,7.96-5.19,14.42-13.93,16.06c-9.13,1.71-14.64-3.29-19.06-10.6c-5.88-9.74-12.08-19.29-18.31-28.81
          c-5.37-8.2-14.39-8.19-19.62,0.09c-6.08,9.62-11.87,19.42-17.8,29.13c-5.29,8.68-10.96,11.8-19.24,10.25
          c-8.32-1.56-12.17-7.36-13.98-15.12c-9.53-40.88-19.34-81.7-28.63-122.63C-3.58,40.4,4.48,20.84,22.77,8.56
          C40.15-3.1,61.18-3.06,79.7,9.97c9.04,6.36,15.95,4.2,24.1-1.15c16.63-10.91,34.22-11.67,51.79-2.27
          C173.31,16.03,181.04,31.76,182.22,51.21z'
          variants={pathVariants}
        />
        <motion.path
          className='st1 fill0'
          d='M52.84,12.48c-26.06-0.06-44.19,21.28-39.8,44.76c2.32,12.42,5.42,24.69,8.29,37
          c6.78,29.05,13.63,58.09,20.51,87.13c0.62,2.63,0.96,5.81,4.39,6.46c3.72,0.7,5.36-2.11,6.97-4.74c2.9-4.74,5.9-9.44,8.65-14.27
          c19.21-33.72,44.75-61,79.71-78.82c6.09-3.1,11.68-7.08,16.39-12.14c14.2-15.27,15.65-35.78,3.59-50.38
          c-13.78-16.69-34.11-20.02-52.1-7.53c-12.72,8.83-24.49,9.36-36.88-0.07C66.16,15,58.7,12.67,52.84,12.48z'
          variants={pathVariants}
        />
      </motion.g>
    </StyledSvg>
  )
}
