import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { wrap } from '@popmotion/popcorn';
import { MdArrowForwardIos } from 'react-icons/md';

import { Control } from './Control';

const SliderWrapper = styled.div`
  width: 100%;
`;

const SliderImage = styled.div`
  width: 100%;
  aspect-ratio: 4 / 3;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;

  img {
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Pagination = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`;

const Pages = styled.div``;

const Controls = styled.div`
  display: flex;

  & > * + * {
    margin-left: 10px;
  }
`;

const ArrowBackwardIcon = styled(MdArrowForwardIos)`
  transform: scale(-1);
`;

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

export const Slider = ({ images }) => {
  const [[page, direction], setPage] = useState([0, 0]);

  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <SliderWrapper>
      <SliderImage>
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            src={images[imageIndex].cropped}
            key={page}
            custom={direction}
            variants={variants}
            initial='enter'
            animate='center'
            exit='exit'
            transition={{
              x: { type: 'string', stifness: 300, damping: 300 },
              opacity: { duration: 0.5 },
            }}
            drag='x'
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
          />
        </AnimatePresence>
      </SliderImage>

      <Pagination>
        <Controls>
          <Control onClick={() => paginate(-1)}>
            <ArrowBackwardIcon />
          </Control>
          <Control onClick={() => paginate(1)}>
            <MdArrowForwardIos />
          </Control>
        </Controls>
        <Pages></Pages>
      </Pagination>
    </SliderWrapper>
  );
};
