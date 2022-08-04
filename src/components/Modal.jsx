import React, { useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

import { Backdrop } from './Backdrop';
import { ReactPortal } from './ReactPortal';

const ModalStyle = styled(motion.div)`
  /* width: clamp(50%, 700px, 90%);
  height: min(50%, 300px); */
  background: #fff;
  /* padding: 0 2rem; */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Modal = ({ showModal, handleClose }) => {
  useEffect(() => {
    const closeOnEsc = (e) => (e.key === 'Escape' ? handleClose() : null);
    document.body.addEventListener('keydown', closeOnEsc);

    return () => {
      document.body.removeEventListener('keydown', closeOnEsc);
    };
  }, [handleClose]);

  return (
    <ReactPortal wrapperId='modal-container'>
      <AnimatePresence initial={false} exitBeforeEnter>
        {showModal && (
          <Backdrop onClick={handleClose}>
            <ModalStyle
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, y: 60, scale: 0.5 }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.6 } }}
            >
              <button onClick={handleClose}>close</button>
              <iframe
                width='800'
                height='500'
                src='http://www.youtube.com/embed/M7lc1UVf-VE?enablejsapi=1&origin=http://example.com'
                title='YouTube video player'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
              ></iframe>
            </ModalStyle>
          </Backdrop>
        )}
      </AnimatePresence>
    </ReactPortal>
  );
};
