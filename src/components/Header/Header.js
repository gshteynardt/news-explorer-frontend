import React from 'react';
import './Header.css';

import createClassName from "../../utils/createClassName";

export const Header = ({ className, children }) => {

  const headerClassName = createClassName('header', className)

  return (
    <header className={`${headerClassName}`}>
      {children}
    </header>
  );
}




