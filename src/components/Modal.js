import React, { useEffect } from 'react';

const Modal = ({ isOpen, imageUrl, onClose }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.keyCode === 27) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.removeEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="overlay" onClick={onClose}>
      <div className="modal">
        <img src={imageUrl} alt="" />
      </div>
    </div>
  );
};

export default Modal;
