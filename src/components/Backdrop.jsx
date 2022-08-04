import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

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

export const Backdrop = ({ children, onClick }) => {
  return (
    <BackdropStyle
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </BackdropStyle>
  );
};
