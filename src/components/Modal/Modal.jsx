import { createPortal } from 'react-dom';
import ModalContent from './ModalContent';


function Modal ( {isOpen, handleClose }) {
  return (
    <div>
      {isOpen && createPortal(
        <ModalContent onClose={handleClose} />,
        document.body
      )}
    </div>
  );
}

export default Modal ;