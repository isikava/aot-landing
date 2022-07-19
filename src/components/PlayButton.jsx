import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import { ReactComponent as PlayIcon } from '../assets/play.svg';

const Button = styled(motion.button)`
  width: 60px;
  height: 60px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  border: none;
  outline: none;
  background: transparent;
  cursor: pointer;
`;

const PlayCircle = styled(motion.span)`
  position: absolute;
  top: 0;
  left: 0;
  width: 60px;
  height: 60px;
  border: 2px solid transparent;
  border-top: 2px solid #fff;
  border-bottom: 2px solid #fff;
  border-radius: 50%;
`;

const IconWrapper = styled(motion.div)`
  width: 35%;
  height: 35%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 3px;

  svg {
    width: 100%;
    height: auto;
  }
`;

const playVariants = {
  hover: { scale: 1.1 },
};

const circleVariants = {
  initial: { rotate: 45 },
  hover: { scale: 1.1, rotate: 225 },
};

export const PlayButton = () => {
  return (
    <Button initial='initial' whileHover='hover'>
      <IconWrapper variants={playVariants} transition={{ ease: 'easeInOut' }}>
        <PlayIcon />
      </IconWrapper>
      <PlayCircle
        variants={circleVariants}
        transition={{ ease: 'easeInOut' }}
      />
    </Button>
  );
};
