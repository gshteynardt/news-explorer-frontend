import React from 'react';
import './Button.css';

export const Button = ({ text, className, children }) => {
  const buttonClassName = [
    'button',
    className,
  ].join(' ');

  return(
    <button className={buttonClassName}>
      { text }
      { children }
    </button>
  );
}
