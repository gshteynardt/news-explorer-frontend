import React from 'react';
import './Footer.css';
import {Navigation} from "../Navigation/Navigation";
import {NavLink} from "react-router-dom";
import {GitHubIcon} from "../Icons/GitHubIcon";
import {FacebookIcon} from "../Icons/FacebookIcon";

export const Footer = () => {

  return (
      <footer className="footer wrapper__content">

        <p className="footer__copyright">&copy; 2020 Supersite, Powered by News API</p>

        <div className={'footer__nav'}>
          <Navigation
            classNameList={'nav__list_footer'}
          >
            <NavLink to={'./'} className="link footer__link">Главная</NavLink>
            <a href="#" className="link footer__link">Яндекс.Практикум</a>
          </Navigation>

          <Navigation
            classNameList={'nav__list_footer footer__nav_social'}
          >
            <a href="#" className="link footer__link">
              <GitHubIcon/>
            </a>
            <a href="#" className="link footer__link footer__link_radius">
              <FacebookIcon
                radius={true}
              />
            </a>
          </Navigation>
        </div>
      </footer>
  );
}
