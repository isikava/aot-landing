import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const ControlStyle = styled(motion.span)`
  color: #fff;
  font-size: 1.5rem;
  vertical-align: middle;
  cursor: pointer;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Control = ({ children, onClick }) => {
  return (
    <ControlStyle
      initial={false}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transformTemplate={(props, transform) =>
        // Disable GPU acceleration to prevent blurry text
        transform.replace(' translateZ(0)', '')
      }
      onClick={onClick}
    >
      {children}
    </ControlStyle>
  );
};
