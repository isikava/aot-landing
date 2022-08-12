import styled from 'styled-components';
import { motion } from 'framer-motion';
import { RiPlayLine } from 'react-icons/ri';

export const CarouselWrapper = styled(motion.div)`
  cursor: grab;
  overflow: hidden;
  position: relative;
  z-index: 11;
`;

export const InnerCarousel = styled(motion.div)`
  display: flex;
  gap: 30px;
`;

export const ThumbnailContainer = styled(motion.div)`
  min-width: 220px;
  min-height: 160px;
  position: relative;
  cursor: pointer;
`;

export const Thumbnail = styled.div`
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

export const ThumbnailOrder = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 1rem;
  left: 0.4rem;

  color: #ffffff;
  text-shadow: 0px 4px 23px rgba(0, 0, 0, 0.74);
  font-size: 2rem;

  span {
    font-weight: var(--fw-medium);
    font-size: 18px;
    line-height: 90%;
    letter-spacing: -0.01em;
  }
`;

export const PlayIcon = styled(RiPlayLine)`
  font-size: 2rem;
  color: #fff;
`;

export const ThumbnailBg = styled(motion.div)`
  width: 220px;
  height: 150px;
  border-radius: 10px 0px 30px;
  background: rgba(255, 255, 255, 0.1);
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;
