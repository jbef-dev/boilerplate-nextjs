import { IG_PostType } from '@util/getInstagramPosts'
import { Modal } from '@ui/Modal/Modal'
import Image from 'next/future/image'
import { useState } from 'react'
import React from 'react'
import { Carousel } from '@ui/Carousel/Carousel'

interface CarouselProps {
  IG_posts: IG_PostType[] | null
}

export const IGCarousel = ({ IG_posts }: CarouselProps) => {
  // const theme = useTheme()
  const [showModal, setShowModal] = useState<boolean>(false)
  const [selected, setSelected] = useState<IG_PostType | undefined>()

  const toggleModal = () => {
    setShowModal(open => !open)
  }

  const ModalContent = ({
    selected,
  }: {
    selected: IG_PostType | undefined
  }) => {
    return (
      <>
        {selected && (
          <>
            <Image
              className='h-full max-h-[70vh] w-full overflow-x-auto overflow-y-auto rounded-md rounded-b-none object-contain'
              src={selected.media_url}
              alt={selected.caption}
              height={700}
              width={700}
              loading='eager'
            />
            <div className='flex w-full flex-col items-center justify-center rounded-md rounded-t-none bg-gray-50 p-4'>
              <div>{selected.caption}</div>
              <div>
                <a href={selected.permalink}>Open in Instagram</a>
              </div>
            </div>
          </>
        )}
      </>
    )
  }

  return (
    <>
      {IG_posts && (
        <Carousel
          variant='fixed'
          items={IG_posts}
          onElementClick={(s: IG_PostType | undefined) => {
            setSelected(s)
            toggleModal()
          }}
          autoScroll
        >
          {IG_posts.map(item => (
            <React.Fragment key={item.id}>
              <Image
                className='relative h-full w-full'
                src={item.media_url}
                alt={item.caption}
                height={500}
                width={500}
                draggable={false}
                loading='eager'
                priority={true}
              />
              <div className='absolute top-0 left-0 flex h-full w-full translate-y-4 content-center items-end opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100'>
                <div className='flex w-full flex-col items-center justify-center bg-white'>
                  <div>Caption: {item.caption}</div>
                  <div>Caption: {item.caption}</div>
                </div>
              </div>
            </React.Fragment>
          ))}
        </Carousel>
      )}
      <Modal open={showModal} handleClose={() => toggleModal()}>
        {selected && <ModalContent selected={selected} />}
      </Modal>
    </>
  )
}
