import { theme } from '@/styles/theme'
import { useTheme } from '@emotion/react'
import styled from '@emotion/styled'
import { ReactNode } from 'react'
import { FaHandHoldingMedical, FaPlus, FaTeeth, FaTooth } from 'react-icons/fa'
import { GiToothbrush } from 'react-icons/gi'
import { Button } from '@ui/Button/Button'
import { useIntl } from 'react-intl'
import { IntlMessages } from '@/config/locale/localeConfig'

////////////////////////////////////////////
// Service Cells
// ////////////////////////////////////////////
interface IServiceCell {
  icon: ReactNode
  title: keyof IntlMessages
  content: keyof IntlMessages
}

export const SERVICE_CELLS: IServiceCell[] = [
  {
    icon: <FaTooth color={theme.palette.error.main} />,
    title: 'services.implantologia.title',
    content: 'services.implantologia.content',
  },
  {
    icon: <FaHandHoldingMedical color={theme.palette.error.light} />,
    title: 'services.odontologia.title',
    content: 'services.odontologia.content',
  },
  {
    icon: <GiToothbrush color={theme.palette.accent.main} />,
    title: 'services.odontologia.title',
    content: 'services.odontologia.content',
  },
  {
    icon: <FaTeeth color={theme.palette.extra.main} />,
    title: 'services.odontologia.title',
    content: 'services.odontologia.content',
  },
  {
    icon: <GiToothbrush color={theme.palette.accent.main} />,
    title: 'services.odontologia.title',
    content: 'services.odontologia.content',
  },
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

const CellContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: `${theme.spacing[5]} ${theme.spacing[6]}`,
  gap: theme.spacing[2],
  alignItems: 'start',
  backgroundColor: theme.palette.surface.light[0],
  boxShadow: 'none',
  borderRadius: theme.border.radius.md,
  maxWidth: `calc(${theme.breakpoints.xl} / 4)`,
  transition: theme.animation.css.standard,
  // textOverflow: 'wrap',
  ['&:hover, &:active']: {
    boxShadow: theme.shadows[0],
  },
}))

export const ServicesGrid = () => {
  const theme = useTheme()
  const intl = useIntl()

  return (
    <GridContainer>
      {SERVICE_CELLS.map((item, i) => (
        <CellContainer key={i}>
          <div
            style={{
              display: 'flex',
              fontSize: theme.font.size[8],
            }}
          >
            {item.icon}
          </div>
          <div
            style={{
              margin: 0,
              fontSize: theme.font.size[6],
              fontWeight: theme.font.weight.bold,
            }}
          >
            {/* TITLE */}
            {intl.formatMessage({ id: item.title })}
          </div>
          <div style={{ fontSize: theme.font.size[4] }}>
            {/* CONTENT */}
            {intl.formatMessage({ id: item.content })}
          </div>
          <Button flavor='basic' icon={<FaPlus />}>
            {intl.formatMessage({ id: 'button.moreInfo' })}
          </Button>
        </CellContainer>
      ))}
    </GridContainer>
  )
}
