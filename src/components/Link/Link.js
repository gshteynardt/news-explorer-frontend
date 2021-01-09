import React from 'react';
import { NavLink } from 'react-router-dom';
import './Link.css';
import createClassName from "../../utils/createClassName";

export const Link = ({ className, text, children, ...props }) => {
  const linkClassName = createClassName('link', className);

  return (
    <NavLink
      className={ linkClassName }
      { ...props }
    >
      { text }
      { children }
    </NavLink>
  );
}
