import React from "react"

export const Form = ({className, onSubmit, children}) => {

  return (
    <form
      className={className}
      onSubmit={onSubmit}
    >
      {children}
    </form>
  );
}
