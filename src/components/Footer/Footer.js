import React from 'react';
import './Footer.css';

export const Footer = () => {

  return (
      <footer className="footer page__footer page__section">
        <p className="footer__copyright">© 2020 Supersite, Powered by News API</p>
        <nav className="footer__nav">
          <ul className="footer__list footer__list_type_links">
            <li className="footer__item">
              <a href="#" className="footer__link">Главная</a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__link">Яндекс.Практикум</a>
            </li>
          </ul>
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
