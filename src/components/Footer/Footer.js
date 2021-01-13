import React from 'react';
import './Footer.css';
import {Navigation} from "../Navigation/Navigation";
import { NavLink } from "react-router-dom";

export const Footer = () => {

  return (
      <footer className="footer page__footer page__section">
        <p className="footer__copyright">&copy; 2020 Supersite, Powered by News API</p>
        <Navigation>
          <NavLink to={'./'} className="footer__link">Главная</NavLink>
          <a href="#" className="footer__link">Яндекс.Практикум</a>
        </Navigation>
        <nav className="footer__nav">
          {/*<ul className="footer__list footer__list_type_links">*/}
          {/*  <li className="footer__item">*/}
          {/*    <a href="#" className="footer__link">Главная</a>*/}
          {/*  </li>*/}
          {/*  <li className="footer__item">*/}
          {/*    <a href="#" className="footer__link">Яндекс.Практикум</a>*/}
          {/*  </li>*/}
          {/*</ul>*/}
          <ul className="footer__list">
            <li className="footer__item">
              <a href="#" className="footer__link">

              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__link">

              </a>
            </li>
          </ul>
        </nav>
      </footer>
  );
}
