import React from "react";
import './Form.css';
import createClassName from "../../utils/createClassName";

export const Form = ({ className, onSubmit, children }) => {

  const formClassName = createClassName('form', className);

  return (
    <form
      className={ formClassName }
      onSubmit={ onSubmit }
    >
      { children }
    </form>
  );
}
