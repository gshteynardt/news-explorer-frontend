import React, { Children } from 'react';

import './Navigation.css';
import createClassName from "../../utils/createClassName";

export const Navigation = ({className, classNameList, children}) => {

  const navClassName = createClassName('nav', className);
  const navListClassName = createClassName('nav__list', classNameList);

  const key = (i) => `${i}-${Math.random()}`;

  const navItems = () => Children.map(children, (item, i) => item ? <li key={key(i)} className={'nav__item'}>{item}</li> : '');

  return (
    <nav className={navClassName}>
     <ul className={navListClassName}>
       { navItems() }
     </ul>
    </nav>
  );
}
