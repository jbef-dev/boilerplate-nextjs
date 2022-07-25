import { useTheme } from '@emotion/react'
import styled from '@emotion/styled'
import { ReactNode } from 'react'
import { FaTooth } from 'react-icons/fa'
import { Button } from '../ui/Button/Button'

////////////////////////////////////////////
// Service Cells
// ////////////////////////////////////////////
interface IServiceCell {
  icon: ReactNode
  title: string
  content: string
}

export const SERVICE_CELLS: IServiceCell[] = [
  { icon: <FaTooth />, title: 'Testing', content: 'further testing' },
]

const GridContainer = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(3,1fr)',
  // padding: theme.spacing[4],
  gap: `clamp(${theme.spacing[4]}, 3vw, ${theme.spacing[8]})`,
  [`@media (max-width: ${theme.breakpoints.md})`]: {
    gridTemplateColumns: 'repeat(2,1fr)',
  },
  [`@media (max-width: ${theme.breakpoints.sm})`]: {
    gridTemplateColumns: '1fr',
  },
}))

export const ServicesGrid = () => {
  const theme = useTheme()

  return (
    <GridContainer>
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          style={{
            display: 'flex',
            flexDirection: 'column',
            padding: theme.spacing[3],
            gap: theme.spacing[2],
            alignItems: 'start',
            backgroundColor: theme.palette.surface.light[1],
            borderRadius: theme.border.radius.sm,
            maxWidth: `calc(${theme.breakpoints.xl} / 5)`,
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: theme.spacing[2],
              fontSize: theme.font.size[6],
            }}
          >
            <FaTooth style={{ fontSize: theme.font.size[8] }} />
          </div>
          <div
            style={{
              margin: 0,
              fontSize: theme.font.size[7],
              fontWeight: theme.font.weight.bold,
            }}
          >
            Title of prod
          </div>
          <div style={{ fontSize: theme.font.size[5] }}>
            Description and more stuff
          </div>
          <Button btnVariant='basic'>More info</Button>
        </div>
      ))}
    </GridContainer>
  )
}
