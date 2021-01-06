import React from "react";
import './Form.css';
import createClassName from "../../utils/createClassName";

export const Form = ({ className, onSubmit, children }) => {

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
    </form>
  );
}
