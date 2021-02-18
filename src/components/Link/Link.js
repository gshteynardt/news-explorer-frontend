import React from 'react';
import { NavLink } from 'react-router-dom';

import './Link.css';
import createClassName from "../../utils/createClassName";

export const Link = (props) => {
  const { className, text, children, onClick, ...rest } = props;
  const linkClassName = createClassName('link', className);

  return (
    <NavLink
      className={ linkClassName }
      onClick={onClick}
      { ...rest }
    >
      { text }
      { children }
    </NavLink>
  );
}
