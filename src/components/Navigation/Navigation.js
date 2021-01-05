import React, { Children } from 'react';
import './Navigation.css';
import createClassName from "../../utils/createClassName";

export const Navigation = ({ className, children }) => {

  const navClassName = createClassName('nav', className);

  const key = (i) => `${i}-${Math.random()}`;

  const navItems = () => Children.map(children, (item, i) => item ? <li key={key(i)} className={'nav__item'}>{item}</li> : '');

  return (
    <nav className={ navClassName }>
     <ul className={'nav__list'}>
       { navItems() }
     </ul>
    </nav>
  );
}
