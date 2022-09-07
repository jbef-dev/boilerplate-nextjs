import { theme } from '@/styles/theme'
import { ReactNode } from 'react'
import { FaHandHoldingMedical, FaPlus, FaTeeth, FaTooth } from 'react-icons/fa'
import { GiToothbrush } from 'react-icons/gi'
import { Button } from '@ui/Button/Button'
import { useIntl } from 'react-intl'
import { IntlMessages } from '@/config/locale/localeConfig'
import Link from 'next/link'

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

export const ServicesGrid = () => {
  const intl = useIntl()

  return (
    <div className='grid w-full max-w-screen-xl grid-cols-1 place-items-center gap-6 px-2 md:grid-cols-2 md:p-6'>
      {SERVICE_CELLS.map((item, i) => (
        <div
          className='flex w-10/12 flex-col items-center gap-6 rounded border-gray-50 py-6 transition-all duration-300 hover:shadow-lg md:w-full md:items-start md:px-5'
          key={i}
        >
          <div className='flex items-center gap-3 text-4xl'>
            {item.icon}
            <span className='text-3xl font-bold'>
              {intl.formatMessage({ id: item.title })}
            </span>
          </div>
          <div className='text-lg'>
            {intl.formatMessage({ id: item.content })}
          </div>
          <Link href={'/services'} scroll={true}>
            <Button flavor='basic' icon={<FaPlus />}>
              {intl.formatMessage({ id: 'button.moreInfo' })}
            </Button>
          </Link>
        </div>
      ))}
    </div>
  )
}
