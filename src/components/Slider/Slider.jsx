import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { wrap } from '@popmotion/popcorn';

import { Control } from './Control';
import {
  SliderWrapper,
  Thumbnail,
  Image,
  Pagination,
  Page,
  Controls,
  MdArrowForwardIos,
  ArrowBackwardIcon,
} from './Slider.style';

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
      <a href={images[imageIndex].original} draggable={false}>
        <Thumbnail>
          <AnimatePresence initial={false} custom={direction}>
            <Image
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
              onDragEnd={(event, { offset, velocity }) => {
                // Prevent click after drag
                if (event instanceof MouseEvent) {
                  event.target?.addEventListener(
                    'click',
                    (e) => {
                      e.preventDefault();
                    },
                    { once: true }
                  );
                }

                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
            />
          </AnimatePresence>
        </Thumbnail>
      </a>

      <Pagination>
        <Controls>
          <Control onClick={() => paginate(-1)}>
            <ArrowBackwardIcon />
          </Control>
          <Control onClick={() => paginate(1)}>
            <MdArrowForwardIos />
          </Control>
        </Controls>
        <Page>{imageIndex + 1}</Page>
      </Pagination>
    </SliderWrapper>
  );
};
