import React from "react";

import './Form.css';
import createClassName from "../../utils/createClassName";
import {Button} from "../Button/Button";

export const Form = (props) => {
  const {
    className,
    classNameBtn,
    onSubmit,
    children,
    textSubmitBtn,
    disabled,
    errorMessage,
    ...rest
  } = props;
  const formClassName = createClassName('form', className);

  return (
    <form
      className={ formClassName }
      onSubmit={ onSubmit }
      {...rest}
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
