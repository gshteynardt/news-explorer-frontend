import React from 'react';

import './Link.css';
import createClassName from "../../utils/createClassName";

export const ExternalLink = (props) => {
  const { href, children, classNames, ...rest} = props;
  const linkClassName = createClassName('link', classNames);

  return (
    <a
      href={href}
      className={linkClassName}
      {...rest}
    >
      {children}
    </a>
  );
};


