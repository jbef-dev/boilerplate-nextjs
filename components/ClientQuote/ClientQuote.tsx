import { FaQuoteLeft, FaStar } from 'react-icons/fa'

interface ClientQuoteProps {
  quote: string
  author: string
  stars: number
}

export const ClientQuote = (props: ClientQuoteProps) => {
  const { quote, author, stars } = props

  return (
    <div className='flex w-full max-w-screen-lg flex-col items-center justify-center gap-8 text-xl'>
      <div className='flex w-full gap-3'>
        <div className='flex'>
          <FaQuoteLeft className='text-6xl text-gray-400' />
        </div>
        <span className='font-medium text-gray-600'>{quote}</span>
      </div>
      <div className='flex w-full items-center justify-end'>
        <div className='flex'>
          {[...new Array(stars)].map((_, i) => (
            <FaStar key={i} color='orange' />
          ))}
        </div>
        <span className='text-gray-500'>- {author}</span>
      </div>
    </div>
  )
}
