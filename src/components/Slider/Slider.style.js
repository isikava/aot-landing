import styled from 'styled-components';
import { motion } from 'framer-motion';
import { MdArrowForwardIos } from 'react-icons/md';

export const SliderWrapper = styled.div`
  width: 100%;
`;

export const Thumbnail = styled.div`
  width: 100%;
  aspect-ratio: 4 / 3;
  position: relative;
  overflow: hidden;
`;

export const Image = styled(motion.img)`
  position: absolute;
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Pagination = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;

  @media (min-width: 800px) {
    flex-direction: row;
  }
`;

export const Page = styled.span`
  font-family: var(--ff-medium);
  font-size: 1.2rem;
  line-height: 90%;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--cr-text);
  user-select: none;
`;

export const Controls = styled.div`
  display: flex;

  & > * + * {
    margin-left: 10px;
  }
`;

export { MdArrowForwardIos };

export const ArrowBackwardIcon = styled(MdArrowForwardIos)`
  transform: scale(-1);
`;
