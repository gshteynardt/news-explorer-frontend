import './Link.css';
import React from 'react';
import createClassName from "../../utils/createClassName";

export const ExternalLink = ({ href, children, classNames, ...rest}) => {
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


