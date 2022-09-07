import { Hero } from '@/components/Hero/Hero'
import { IGCarousel } from '@/components/IGCarousel/IGCarousel'
import { FlexRow } from '@/ui/Containers/Flex'
import { PageContainer } from '@ui/Containers/PageContainer'
import { getInstagramPosts } from '@util/getInstagramPosts'
import type { InferGetStaticPropsType, NextPage } from 'next'
import { useIntl } from 'react-intl'
import { Button } from '@ui/Button/Button'
import { FaPhoneAlt, FaRegCalendarAlt } from 'react-icons/fa'
import { useRouter } from 'next/router'
import { ServicesGrid } from '@/components/ServicesGrid/ServicesGrid'
import { FeatureShowcase } from '@components/FeatureShowcase/FeatureShowcase'

export const getStaticProps = async () => {
  const IG_posts = await getInstagramPosts()

  return {
    props: { IG_posts },
    revalidate: 600, // 10 min in seconds
  }
}

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  IG_posts,
}) => {
  const intl = useIntl()
  const router = useRouter()

  return (
    <>
      <PageContainer
        title={intl.formatMessage({ id: 'index.page.title' })}
        description={intl.formatMessage({ id: 'index.page.description' })}
        // className='bg-gradient-to-b from-blue-50 to-blue-100'
        // className='bg-gradient-to-b from-blue-500 to-white'
      >
        <Hero />

        <FlexRow centerContent className='flex-col gap-4'>
          <h2 className='flex flex-col gap-3 text-center text-3xl font-bold text-gray-900 lg:flex-row'>
            <FaRegCalendarAlt className='w-full text-accent-main lg:w-auto' />
            <span className='bg-gradient-to-r from-primary-light to-pink-700 bg-clip-text text-4xl font-black text-transparent'>
              {intl.formatMessage({ id: 'index.page.section1' })}
            </span>
          </h2>
          <p className='text-center text-xl'>
            Appointment to evaluate costs, timeframes, personal needs and
            payment methods.
          </p>

          <Button
            icon={<FaPhoneAlt />}
            flavor='basic'
            onClick={() => router.push('tel:+606516718')}
          >
            {intl.formatMessage({ id: 'button.call' })}
          </Button>
        </FlexRow>

        <FeatureShowcase />

        <FlexRow grow centerContent>
          <IGCarousel IG_posts={IG_posts} />
        </FlexRow>

        <FlexRow grow centerContent>
          <ServicesGrid />
        </FlexRow>
      </PageContainer>
    </>
  )
}

export default Home
