import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

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

const PlayIcon = styled(motion.div)`
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
      <PlayIcon variants={playVariants} transition={{ ease: 'easeInOut' }}>
        <svg viewBox='0 0 22 26' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M2.19989 2.79998L18.1999 12.8L2.19989 22.8V2.79998Z'
            stroke='white'
            stroke-width='3'
            stroke-miterlimit='10'
            stroke-linecap='round'
          />
        </svg>
      </PlayIcon>
      <PlayCircle
        variants={circleVariants}
        transition={{ ease: 'easeInOut' }}
      />
    </Button>
  );
};
