import React from 'react';

import './Input.css';
import createClassName from '../../utils/createClassName';

export const Input = (props) => {
  const {
    name,
    className,
    onChange,
    title,
    isError,
    errorMessage,
    ...rest
  } = props;
  const inputClassName = createClassName('input', className);

  return (
    <label className={`label ${title && 'label_type_form'}`}>
      <span className="label__title">
        {title}
      </span>
      <input
        className={inputClassName}
        name={name}
        onChange={onChange}
        {...rest}
        />
      {
        isError &&
        (<span className="input__error">{errorMessage}</span>)
      }
    </label>
   );
}
