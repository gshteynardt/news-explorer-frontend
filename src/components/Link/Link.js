import React from 'react';
import { NavLink } from 'react-router-dom';
import './Link.css';
import createClassName from "../../utils/createClassName";

export const Link = ({ className, text, children, onClick, ...props }) => {
  const linkClassName = createClassName('link', className);

  return (
    <NavLink
      className={ linkClassName }
      onClick={onClick}
      { ...props }
    >
      { text }
      { children }
    </NavLink>
  );
}
