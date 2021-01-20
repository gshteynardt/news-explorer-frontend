import React, { useEffect } from 'react';
import './Popup.css';
import {Button} from "../Button/Button";
import {CloseIcon} from "../Icons/CloseIcon";

export const Popup = ({ isOpen, onClose, children }) => {

  const handleEsc = (e) => {
    if (e.key !== 'Escape') return;
    onClose();
  };

  useEffect(() => {
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [isOpen]);

  const className = `popup ${isOpen && 'popup_opened'}`;

  return (
    <section className={className}>
      <div className={'popup__container'}>
        <Button
          type="button"
          className={"button__close-popup"}
          onClick={onClose}
        >
          <CloseIcon/>
        </Button>
        {children}
      </div>
    </section>
  );
};
