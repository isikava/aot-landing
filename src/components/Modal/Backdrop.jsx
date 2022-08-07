import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { RiCloseFill } from 'react-icons/ri';

const BackdropStyle = styled(motion.div)`
  position: fixed;
  z-index: 999;
  inset: 0;
  background: #000;
  background: #000000e1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CloseIcon = styled.span`
  position: absolute;
  top: 1rem;
  right: 1.5rem;
  color: #f1f1f1;
  font-size: 40px;
  font-weight: bold;
  cursor: pointer;
`;

export const Backdrop = ({ children, onClick }) => {
  return (
    <BackdropStyle
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
      <CloseIcon>
        <RiCloseFill />
      </CloseIcon>
    </BackdropStyle>
  );
};
