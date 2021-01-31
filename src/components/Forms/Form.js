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
  }) => {

  const formClassName = createClassName('form', className);

  const handleSearch = (e) => {
    e.preventDefault();
    onSubmit();
  }

  return (
    <form
      className={ formClassName }
      onSubmit={ handleSearch }
    >
      { children }

      <span className="form__message"></span>

      <Button
        type={'submit'}
        className={classNameBtn}
        disabled={disabled}
        text={textSubmitBtn}
      />
    </form>
  );
}
