import React from 'react';
import './Header.css';
import { Button } from "../Button/Button";
import { Logo } from "../Icons/Logo";
import { EnterIcon } from "../Icons/LogoutIcon";
import { Navigation } from "../Navigation/Navigation";
import { MenuIcon } from "../Icons/MenuIcon";
import { Link } from "../Link/Link";
import createClassName from "../../utils/createClassName";

export const Header = ({ className, loggedIn , theme }) => {

  const headerClassName = createClassName('header', className)

  return (
    <header className={`${headerClassName}`}>
      <picture className='logo header__logo'>
        <Logo classNamePath={`logo_theme_${theme}`}/>
      </picture>
      <Navigation
        classNameList={'nav__list_header'}
      >

        <Link
          className={`link_type_${theme}`}
          activeClassName={`link_type_${theme}-active`}
          text={ 'Главная' }
          to={'/'}
          exact
        />

        { loggedIn
          ? <Link
            className={`link_type_${theme}`}
            activeClassName={`link_type_${theme}-active`}
            text={'Сохранённые статьи'}
            to={'/saved-news'}
        /> : null }

        <Link
          className={`link_type_border link_type_border-${theme}`}
          text={ loggedIn ? 'Грета' : 'Авторизоваться' }
          to={'/foo'}
        >
          { loggedIn && <EnterIcon
            classNamePath={`link__icon-${theme}`}
          /> }
        </Link>

      </Navigation>

      <Button
        className={'button_type_menu'}
      >
        <MenuIcon/>
      </Button>
    </header>
  );
}




