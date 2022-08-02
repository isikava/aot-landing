import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { RiPlayLine } from 'react-icons/ri';

const Wrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  margin: 1.5rem 0;
  cursor: pointer;
`;

const AnimateIcon = styled(motion.div)`
  position: relative;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PlayCircle = styled(motion.span)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 2px solid transparent;
  border-top: 2px solid #fff;
  border-bottom: 2px solid #fff;
  border-radius: 50%;
`;

const PlayIcon = styled(RiPlayLine)`
  color: #fff;
  font-size: 2rem;
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-left: 1rem;

  font-family: var(--ff-medium);
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 90%;
  letter-spacing: -0.01em;
  color: var(--cr-text);

  & > span {
    font-family: var(--ff-light);
    font-weight: 300;
    letter-spacing: 0.25em;
    text-transform: uppercase;
  }

  &:hover {
    text-shadow: var(--shadow-hover);
    transition: 0.1s ease-in-out;
  }
`;

const play = {
  hover: {
    scale: 1.1,
  },
};

const circle = {
  initial: { rotate: 45 },
  hover: {
    rotate: 225,
  },
};

export const WatchBtn = () => {
  return (
    <Wrapper initial='initial' whileHover='hover'>
      <AnimateIcon variants={play} transition={{ ease: 'backInOut' }}>
        <PlayIcon />
        <PlayCircle variants={circle} transition={{ ease: 'easeInOut' }} />
      </AnimateIcon>
      <Text>
        Watch
        <span>December&nbsp;7</span>
      </Text>
    </Wrapper>
  );
};
