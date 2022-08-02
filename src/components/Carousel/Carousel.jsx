import React, { useRef, useState, useEffect } from 'react';

import {
  CarouselWrapper,
  InnerCarousel,
  ThumbnailContainer,
  Thumbnail,
  ThumbnailOrder,
  ThumbnailBg,
  PlayIcon,
} from './Carousel.styles';

const thumbnailBg = {
  initial: {
    x: 9,
    y: 9,
  },
  hover: {
    x: 5,
    y: 5,
  },
};

export const Carousel = ({ images }) => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <CarouselWrapper ref={carousel}>
      <InnerCarousel
        drag='x'
        dragConstraints={{ right: 0, left: -width }}
        whileTap={{ cursor: 'grabbing' }}
      >
        {images?.map((image, i) => (
          <ThumbnailContainer
            key={i}
            initial='initial'
            whileHover='hover'
            onClick={() => console.log(`clicked ${i}`)}
          >
            <Thumbnail>
              <img src={image} alt='thumbnail' />
            </Thumbnail>
            <ThumbnailOrder>
              <PlayIcon />
              <span># {i + 1}</span>
            </ThumbnailOrder>
            <ThumbnailBg variants={thumbnailBg} />
          </ThumbnailContainer>
        ))}
      </InnerCarousel>
    </CarouselWrapper>
  );
};
