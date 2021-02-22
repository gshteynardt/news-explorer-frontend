import React from 'react';

import './Button.css';
import createClassName from "../../utils/createClassName";

export const Button = ({ text, className, children, ...rest }) => {
  const buttonClassName = createClassName('button', className);

  return(
    <button
      className={buttonClassName}
      {...rest}
    >
      { text }
      { children }
    </button>
  );
}

