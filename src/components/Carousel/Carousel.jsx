import React, { useRef, useState, useEffect } from 'react';
import { RiPlayLine } from 'react-icons/ri';

import {
  CarouselWrapper,
  InnerCarousel,
  ThumbnailWrapper,
  Thumbnail,
  Image,
  ThumbnailOrder,
  ThumbnailBg,
  PlayIcon,
} from './Carousel.styles';

const transition = {
  duration: 0.2,
};

const thumbnailVariants = {
  hover: {
    width: 230,
    height: 160,
  },
};

const iconVariants = {
  initial: {
    opacity: 0,
  },
  hover: {
    opacity: 1,
  },
};

export const Carousel = ({ images, launchModal }) => {
  const carousel = useRef();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <CarouselWrapper ref={carousel}>
      <InnerCarousel
        drag='x'
        dragConstraints={{ right: 0, left: -width }}
        onDragEnd={(event) => {
          // Prevent click after drag
          if (event instanceof MouseEvent) {
            event.target?.addEventListener(
              'click',
              (e) => {
                e.stopPropagation();
              },
              { once: true }
            );
          }
        }}
        whileTap={{ cursor: 'grabbing' }}
      >
        {images?.map((image, i) => (
          <ThumbnailWrapper key={image.id}>
            <Thumbnail
              initial='initial'
              whileHover='hover'
              whileTap={{ cursor: 'grabbing' }}
              variants={thumbnailVariants}
              transition={transition}
              onClick={() => launchModal(image.embedId)}
            >
              <Image src={image.thumbnail} />
              <ThumbnailOrder># {i + 1}</ThumbnailOrder>
              <PlayIcon variants={iconVariants} transition={transition}>
                <RiPlayLine />
              </PlayIcon>
            </Thumbnail>
            <ThumbnailBg />
          </ThumbnailWrapper>
        ))}
      </InnerCarousel>
    </CarouselWrapper>
  );
};
