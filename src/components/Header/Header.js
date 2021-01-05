import React from 'react';
import './Header.css';
import { Button } from "../Button/Button";
import { Logo } from "../Icons/Logo";
import { EnterIcon } from "../Icons/LogoutIcon";
import { Navigation } from "../Navigation/Navigation";
import {Menu} from "../Icons/Menu";

export const Header = ({ loggedIn = true }) => {

  //добавить логику удаления, добавления класса

  return (
    <header className='header page__header'>
      <picture className='logo header__logo'>
      <Logo/>
      </picture>
      <Navigation className='header__nav'>

        <Button
          className={'button_active'}
          text={ 'Главная' }
        />

        { loggedIn
          ? <Button
          text={'Сохранённые статьи'}
        /> : null }

        <Button
          className={'button_type_border'}
          text={ loggedIn ? 'Грета' : 'Авторизоваться' }
        >
          { loggedIn && <EnterIcon/> }
        </Button>

      </Navigation>

      <Button
        className={'button_type_menu'}
      >
        <Menu/>
      </Button>
    </header>
  );
}




