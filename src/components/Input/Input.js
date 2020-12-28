import React from 'react';
import './Input.css';
import createClassName from '../../utils/createClassName';

export const Input = ({ name, className, ...rest }) => {

  const inputClassName = createClassName('input', className);

  return (
    <input
      className={inputClassName}
      name={ name }
      {...rest}
    />
   );
}
