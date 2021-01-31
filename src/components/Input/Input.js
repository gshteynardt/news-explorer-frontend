import React from 'react';
import './Input.css';
import createClassName from '../../utils/createClassName';

export const Input = (
  { name,
    className,
    handleChange,
    title,
    ...rest }) => {

  const inputClassName = createClassName('input', className);

  return (
    <label className={`label ${title && 'label_type_form'}`}>
      <span className="label__title">
        {title}
      </span>
      <input
        className={inputClassName}
        name={ name }
        onChange={handleChange}
        {...rest}
        />
      <span className="input__error"></span>
    </label>
   );
}
