import React from 'react';
import './Header.css';
import { Button } from "../Button/Button";
import { Logo } from "../Icons/Logo";
import { EnterIcon } from "../Icons/LogoutIcon";
import { Navigation } from "../Navigation/Navigation";
import {Menu} from "../Icons/Menu";
import {Link} from "../Link/Link";

export const Header = ({ loggedIn = true }) => {

  //добавить логику удаления, добавления класса

  return (
    <header className='header page__header'>
      <picture className='logo header__logo'>
      <Logo/>
      </picture>
      <Navigation className='header__nav'>

        <Link
          activeClassName={'link_active'}
          text={ 'Главная' }
          to={'/'}
        />

        { loggedIn
          ? <Link
            activeClassName={'link_active'}
            text={'Сохранённые статьи'}
            to={'/saved-news'}
        /> : null }

        <Link
          className={'link_type_border'}
          activeClassName={'link_active'}
          text={ loggedIn ? 'Грета' : 'Авторизоваться' }
          to={'/foo'}
        >
          { loggedIn && <EnterIcon/> }
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




