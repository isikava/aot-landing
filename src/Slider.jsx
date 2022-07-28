import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { wrap } from '@popmotion/popcorn';
import { MdArrowForwardIos } from 'react-icons/md';

import visual2 from './assets/visual_02.png';
import { slides } from './images';

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

export const Slider = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  const slideIndex = wrap(0, slides.length, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <div style={{ position: 'relative' }}>
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          style={{ position: 'absolute' }}
          key={page}
          src={slides[slideIndex]}
          custom={direction}
          variants={variants}
          initial='enter'
          animate='center'
          exit='exit'
          transition={{
            x: { type: 'string', stifness: 300, damping: 300 },
            opacity: { duration: 0.2 },
          }}
          drag='x'
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
        />
      </AnimatePresence>
      <motion.button onClick={() => paginate(1)}>Next</motion.button>
      <motion.button onClick={() => paginate(-1)}>Prev</motion.button>
    </div>
  );
};

// const SliderContainer = styled.div`
//   width: 100%;
// `;

// const SliderImage = styled.div`
//   width: 100%;

//   /* margin: 0 -1rem; */

//   img {
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//   }

//   /* @media only screen and (min-width: 1200px) {
//     margin: 0;
//   } */
// `;

// const Pagination = styled.div`
//   display: flex;
//   justify-content: space-between;
//   margin-top: 1rem;
// `;

// const Pages = styled.div``;

// const Controls = styled.div`
//   display: flex;
//   /* gap: 10px; */

//   & > * + * {
//     margin-left: 10px;
//   }
// `;

// const Control = styled.button`
//   width: 45px;
//   height: 45px;
//   border-radius: 50%;
//   cursor: pointer;
//   background: rgba(255, 255, 255, 0.2);
//   color: #fff;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const ArrowForwardIcon = styled(MdArrowForwardIos)`
//   color: #fff;
//   font-size: 1.5rem;
// `;

// const ArrowBackwardIcon = styled(ArrowForwardIcon)`
//   transform: scale(-1);
// `;

// export const Slider = () => {
//   return (
//     <SliderContainer>
//       <SliderImage>
//         <img src={visual2} alt='Slider' />
//       </SliderImage>
//       <Pagination>
//         <Controls>
//           <Control>
//             <ArrowBackwardIcon />
//           </Control>
//           <Control>
//             <ArrowForwardIcon />
//           </Control>
//         </Controls>
//         <Pages></Pages>
//       </Pagination>
//     </SliderContainer>
//   );
// };
