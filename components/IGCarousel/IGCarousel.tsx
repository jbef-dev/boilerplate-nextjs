import { IG_PostType } from '@util/getInstagramPosts'
import { useTheme } from '@emotion/react'
import { Modal } from '@ui/Modal/Modal'
import styled from '@emotion/styled'
import Image from 'next/future/image'
import { motion, Variants } from 'framer-motion'
import { useState } from 'react'
import React from 'react'
import { Carousel } from '@ui/Carousel/Carousel'

const ElImage = styled(Image)(() => ({
  position: 'relative',
  // objectFit: 'contain',
  width: '100%',
  height: '100%',
}))

const ElTextContainer = styled(motion.div)(() => ({
  position: 'absolute',
  display: 'flex',
  alignItems: 'end',
  justifyContent: 'center',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
}))

const ElTextWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  width: '100%',
  backgroundColor: theme.palette.surface.light[1],
}))

const ModalText = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  padding: theme.spacing[4],
  backgroundColor: theme.palette.surface.light[0],
  borderRadius: `0 0 ${theme.border.radius.md} ${theme.border.radius.md}`,
}))

const ModalImage = styled(Image)(({ theme }) => ({
  objectFit: 'contain',
  overflowY: 'auto',
  overflowX: 'auto',
  width: '100%',
  height: '100%',
  maxHeight: '70vh',
  borderRadius: `${theme.border.radius.md} ${theme.border.radius.md} 0 0`,
}))

interface CarouselProps {
  IG_posts: IG_PostType[] | null
}

export const IGCarousel = ({ IG_posts }: CarouselProps) => {
  const theme = useTheme()
  const [showModal, setShowModal] = useState<boolean>(false)
  const [selected, setSelected] = useState<IG_PostType | undefined>()

  const toggleModal = () => {
    setShowModal(open => !open)
  }

  const textVariants: Variants = {
    rest: { opacity: 0, y: '10%' },
    hover: { opacity: 1, y: 0 },
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
            <ModalImage
              src={selected.media_url}
              alt={selected.caption}
              height={700}
              width={700}
              loading='eager'
            />
            <ModalText>
              <div>{selected.caption}</div>
              <div>
                <a href={selected.permalink}>Open in Instagram</a>
              </div>
            </ModalText>
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
          minwidth={theme.spacing[12]}
          midwidth={'75vw'}
          maxwidth={theme.spacing[14]}
          autoScroll
        >
          {IG_posts.map(item => (
            <React.Fragment key={item.id}>
              <ElImage
                src={item.media_url}
                alt={item.caption}
                height={500}
                width={500}
                draggable={false}
                loading='eager'
                priority={true}
              />
              <ElTextContainer
                variants={textVariants}
                animate='rest'
                whileTap='hover'
                whileHover='hover'
                transition={theme.animation.framer.appear}
              >
                <ElTextWrapper>
                  <div>Caption: {item.caption}</div>
                  <div>Caption: {item.caption}</div>
                </ElTextWrapper>
              </ElTextContainer>
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
