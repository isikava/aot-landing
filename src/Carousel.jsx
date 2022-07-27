import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import { RiPlayLine } from 'react-icons/ri';
import { motion } from 'framer-motion';

import { images } from './images';

const CarouselWrapper = styled(motion.div)`
  cursor: grab;
  overflow: hidden;
`;

const InnerCarousel = styled(motion.div)`
  display: flex;
  gap: 30px;
`;

const ThumbnailContainer = styled(motion.div)`
  min-width: 220px;
  min-height: 160px;
  position: relative;
  cursor: pointer;
`;

const Thumbnail = styled.div`
  width: 220px;
  height: 150px;
  overflow: hidden;
  border-radius: 10px 0px 30px;

  img {
    width: 101%;
    height: 101%;
    object-fit: cover;
    pointer-events: none;
  }
`;

const ThumbnailOrder = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 1rem;
  left: 0.4rem;

  color: #ffffff;
  text-shadow: 0px 4px 23px rgba(0, 0, 0, 0.74);
  font-size: 2rem;

  span {
    font-family: var(--ff-medium);
    font-size: 18px;
    line-height: 90%;
    letter-spacing: -0.01em;
  }
`;

const PlayIcon = styled(RiPlayLine)`
  font-size: 2rem;
  color: #fff;
`;

const ThumbnailBg = styled(motion.div)`
  width: 220px;
  height: 150px;
  border-radius: 10px 0px 30px;
  background: rgba(255, 255, 255, 0.1);
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;

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

export const Carousel = () => {
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
        {images.map((image, i) => (
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
