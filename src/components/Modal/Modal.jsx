import React, { useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';

import { Backdrop } from './Backdrop';
import { ReactPortal } from './ReactPortal';

export const Modal = ({ showModal, handleClose, children }) => {
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
        {showModal && <Backdrop onClick={handleClose}>{children}</Backdrop>}
      </AnimatePresence>
    </ReactPortal>
  );
};
