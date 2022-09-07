import { useIntl } from 'react-intl'
import image_hero from '@/public/abel_profile.png'
import Image from 'next/future/image'
import { Button } from '@ui/Button/Button'
import Link from 'next/link'
import clsx from 'clsx'

export const Hero = () => {
  const intl = useIntl()

  const containerStyle = clsx(
    'flex h-[28rem] lg:h-[44rem] max-h-screen w-full justify-center'
  )

  return (
    <div
      className={clsx(['relative -mt-28 bg-blue-100 pt-16', containerStyle])}
      style={{
        // boxShadow: 'inset 0px 0px 18px 3px rgb(0 0 0 / 0.15)',
        clipPath: 'polygon(100% 0, 100% 93%, 50% 100%, 0 93%, 0 0)',
      }}
    >
      {/* <div className={clsx(['fixed', containerStyle])}> */}
      <div
        className={clsx(
          'relative flex w-full max-w-screen-xl items-center justify-around px-6'
        )}
      >
        <div className='relative flex w-full justify-center lg:-mr-60'>
          <div className='flex flex-col items-start gap-3 lg:w-3/4'>
            <h1
              className={clsx(
                'bg-gradient-to-r from-primary-dark to-primary-lightest bg-clip-text text-5xl font-extrabold text-transparent',
                'lg:text-6xl'
              )}
            >
              {intl.formatMessage({ id: 'index.page.hero1' }, { br: <br /> })}
            </h1>
            <h3 className='m-0 text-2xl font-medium leading-tight text-gray-700'>
              {intl.formatMessage(
                { id: 'index.page.hero2' },
                { kekw: 'Español' }
              )}
            </h3>
            <Link href='/contact'>
              <Button
                flavor='basic'
                size='md'
                // bgColor={theme.palette.primary.main}
                icon
              >
                Contact
              </Button>
            </Link>
          </div>
        </div>
        <div
          className={clsx(
            'absolute -z-10 mx-auto flex h-full w-auto items-end',
            'lg:relative lg:h-full lg:w-full lg:after:hidden'
          )}
        >
          <Image
            className='h-full min-w-[25rem] object-contain opacity-50 lg:opacity-100'
            src={image_hero}
            alt='hero Image'
            loading='eager'
            priority={true}
            width={700}
            height={700}
          />
        </div>
      </div>
      {/* </div> */}
    </div>
  )
}
