import React, { useEffect, useCallback } from 'react';
import './Popup.css';
import { Button } from "../Button/Button";
import { CrossIcon } from "../Icons/CrossIcon";

export const Popup = ({ isOpen, onClose, children }) => {

  const handleClick = useCallback((e) => {
    if (e.currentTarget === e.target) onClose();

    if (!isOpen) e.stopPropagation();
  }, [onClose, isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('keyup', handleEsc);

    return () => {
      document.removeEventListener('keyup', handleEsc);
    };
  }, [isOpen]);

  const className = `popup ${isOpen && 'popup_opened'}`;

  return (
    <section
      className={className}
      onClickCapture={handleClick}
    >
      <div className={'popup__container'}>
        <Button
          type="button"
          className={"button__close-popup"}
          onClick={onClose}
        >
          <CrossIcon/>
        </Button>
        {children}
      </div>
    </section>
  );
};
