import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { wrap } from '@popmotion/popcorn';
import { MdArrowForwardIos } from 'react-icons/md';

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

const SliderWrapper = styled.div`
  width: 100%;
  overflow: hidden;
`;

const SliderImage = styled.div`
  width: 100%;
  aspect-ratio: 4 / 3;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
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
  /* gap: 10px; */

  & > * + * {
    margin-left: 10px;
  }
`;

const Control = styled.button`
  cursor: pointer;
  width: 45px;
  height: 45px;
  border-radius: 50%;
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

export const Slider = ({ images }) => {
  const [[page, direction], setPage] = useState([0, 0]);

  const imageIndex = wrap(0, images.length, page);
  console.log(imageIndex);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <SliderWrapper>
      <AnimatePresence initial={false} custom={direction}>
        <a href={images[imageIndex].original}>
          <SliderImage>
            <motion.img
              key={page}
              src={images[imageIndex].cropped}
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
            />
          </SliderImage>
        </a>
      </AnimatePresence>

      <Pagination>
        <Controls>
          <Control onClick={() => paginate(-1)}>
            <ArrowBackwardIcon />
          </Control>
          <Control onClick={() => paginate(1)}>
            <ArrowForwardIcon />
          </Control>
        </Controls>
        <Pages></Pages>
      </Pagination>
    </SliderWrapper>
  );
};
