import React from 'react';
import './Header.css';
import { Button } from "../Button/Button";
import { Logo } from "../Icons/Logo";
import { EnterIcon } from "../Icons/LogoutIcon";
import { Navigation } from "../Navigation/Navigation";
import { Menu } from "../Icons/Menu";
import { Link } from "../Link/Link";
import createClassName from "../../utils/createClassName";

export const Header = ({ className, loggedIn = true, path }) => {

  const headerClassName = createClassName('header', className)

  const logoClassName = path === '/' ? 'logo_theme_white' : 'logo_theme_black';

  const linkClassName = `link ${path === '/'
    ? 'link_type_white'
    : 'link_type_black'
  }`;

  const linkActiveClassName = path === '/'
    ? 'link_type_white-active'
    : 'link_type_black-active';

  const linkAuthClassName = `link_type_border ${path === '/' 
    ? 'link_type_border-white'
    : 'link_type_border-black'
  }`;

  return (
    <header className={`${headerClassName} page__header`}>
      <picture className='logo header__logo'>
      <Logo classNamePath={logoClassName}/>
      </picture>
      <Navigation className='header__nav'>

        <Link
          className={linkClassName}
          activeClassName={linkActiveClassName}
          text={ 'Главная' }
          to={'/'}
          exact
        />

        { loggedIn
          ? <Link
            className={linkClassName}
            activeClassName={linkActiveClassName}
            text={'Сохранённые статьи'}
            to={'/saved-news'}
        /> : null }

        <Link
          className={linkAuthClassName}
          text={ loggedIn ? 'Грета' : 'Авторизоваться' }
          to={'/foo'}
        >
          { loggedIn && <EnterIcon classNamePath={
            path === '/'
              ? 'link__icon-white'
              : 'link__icon-black'
          }/> }
        </Link>

      </Navigation>

      <Button
        className={'button_type_menu'}
      >
        <Menu/>
      </Button>
    </header>
  );
}




