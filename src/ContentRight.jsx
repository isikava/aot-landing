import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import { MdArrowForwardIos } from 'react-icons/md';
import { RiPlayLine } from 'react-icons/ri';
import { motion } from 'framer-motion';

import { images } from './images';
import visual2 from './assets/visual_02.png';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  min-width: 0;
  max-width: 895px;
  height: 100vh;
  padding-bottom: 3rem;

  @media only screen and (min-width: 800px) {
    height: var(--height-hero);
    justify-content: space-between;
  }
`;

const Slider = styled.div``;

const SliderImage = styled.div`
  width: 100%;

  /* margin: 0 -1rem; */

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  /* @media only screen and (min-width: 1200px) {
    margin: 0;
  } */
`;

const Pagination = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`;

const Pages = styled.div``;

const Controls = styled.div`
  display: flex;
  /* gap: 10px; */

  & > * + * {
    margin-left: 10px;
  }
`;

const Control = styled.button`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  cursor: pointer;
  background: rgba(255, 255, 255, 0.2);
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ArrowForwardIcon = styled(MdArrowForwardIos)`
  color: #fff;
  font-size: 1.5rem;
`;

const ArrowBackwardIcon = styled(ArrowForwardIcon)`
  transform: scale(-1);
`;

const Trailers = styled.div`
  h2 {
    font-family: var(--ff-medium);
    font-size: 1.5rem;
    line-height: 90%;
    color: var(--cr-text);
    margin: 1rem 0;
  }
`;

const Carousel = styled(motion.div)`
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

export const ContentRight = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <Wrapper>
      <Slider>
        <SliderImage>
          <img src={visual2} alt='slider' />
        </SliderImage>
        <Pagination>
          <Controls>
            <Control>
              <ArrowBackwardIcon />
            </Control>
            <Control>
              <ArrowForwardIcon />
            </Control>
          </Controls>
          <Pages></Pages>
        </Pagination>
      </Slider>
      <Trailers>
        <h2>Trailers</h2>
        <Carousel ref={carousel}>
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
        </Carousel>
      </Trailers>
    </Wrapper>
  );
};
