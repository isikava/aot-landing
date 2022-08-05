import { createPortal } from 'react-dom';

export const ReactPortal = ({ children, wrapperId = 'modal-container' }) => {
  return createPortal(children, document.getElementById(wrapperId));
};
