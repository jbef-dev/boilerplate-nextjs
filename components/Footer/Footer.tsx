import Image from 'next/future/image'
import { CONTACT_INFO } from '@config/constants/pageContent'
import logo from '@/public/logo.svg'
import { FlexRow } from '@/ui/Containers/Flex'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { SiGooglemaps, SiGooglemybusiness } from 'react-icons/si'
import { MdMail } from 'react-icons/md'

export const Footer = () => {
  return (
    <footer className='flex items-center justify-center bg-gray-400 p-4 text-gray-700'>
      <FlexRow centerContent className='flex-col justify-evenly gap-5'>
        <FlexRow
          centerContent
          className='flex-col gap-5 p-0 lg:flex-row lg:justify-around'
        >
          <FlexRow className='gap-6' centerContent>
            <Image
              alt='Logo'
              src={logo}
              loading='lazy'
              width={150}
              height={60}
              className='object-contain'
            />
            <FlexRow className='flex-col'>
              {Object.values(CONTACT_INFO).map((val, i) => (
                <span key={i}>{val}</span>
              ))}
            </FlexRow>
          </FlexRow>

          <FlexRow className='gap-3 text-3xl text-gray-600'>
            <FaInstagram />
            <MdMail />
            <FaWhatsapp />
            <a
              href='https://search.google.com/local/reviews?placeid=ChIJTbLqx8KiYw0RsXkljzwaVhs'
              target='_blank'
              rel='noreferrer'
            >
              <SiGooglemybusiness />
            </a>
            <SiGooglemaps />
          </FlexRow>
        </FlexRow>

        <FlexRow centerContent grow className='text-center text-gray-800'>
          <span>
            © 2022 Designed and developed by: <b>jbef.es</b>
            <br />
            All rights reserved
          </span>
        </FlexRow>
      </FlexRow>
    </footer>
  )
}
