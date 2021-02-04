import React from "react";
import './Form.css';
import createClassName from "../../utils/createClassName";
import {Button} from "../Button/Button";

export const Form = (
  { className,
    classNameBtn,
    onSubmit,
    children,
    textSubmitBtn,
    disabled,
    errorMessage,
  }) => {

  const formClassName = createClassName('form', className);

  return (
    <form
      className={ formClassName }
      onSubmit={ onSubmit }
      noValidate
    >
      { children }

      <span className="form__message">{errorMessage}</span>

      <Button
        type={'submit'}
        className={classNameBtn}
        disabled={disabled}
        text={textSubmitBtn}
      />
    </form>
  );
}
