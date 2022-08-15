import styled from 'styled-components';
import { motion } from 'framer-motion';

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

export const ThumbnailWrapper = styled.div`
  min-width: 230px;
  min-height: 160px;
  position: relative;
`;

export const Thumbnail = styled(motion.div)`
  width: 220px;
  height: 150px;
  overflow: hidden;
  position: relative;
  border-radius: 10px 0px 30px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
`;

export const ThumbnailOrder = styled.span`
  position: absolute;
  bottom: 0.8rem;
  left: 0.8rem;

  font-size: 2rem;
  font-weight: var(--fw-medium);
  font-size: 18px;
  line-height: 90%;
  letter-spacing: -0.01em;
  color: #ffffff;
  text-shadow: 0px 4px 23px rgba(0, 0, 0, 0.74);
`;

export const PlayIcon = styled(motion.span)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 2.5rem;
  color: #fff;
  cursor: pointer;
  z-index: 1;
`;

export const ThumbnailBg = styled.div`
  width: 220px;
  height: 150px;
  border-radius: 10px 0px 30px;
  background: rgba(255, 255, 255, 0.1);
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: -1;
`;
