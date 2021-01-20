import React, {useState} from "react";
import './Navbar.css';
import {Logo} from "../Icons/Logo";
import {Navigation} from "../Navigation/Navigation";
import {Link} from "../Link/Link";
import {EnterIcon} from "../Icons/LogoutIcon";
import {Button} from "../Button/Button";
import {MenuIcon} from "../Icons/MenuIcon";
import {CrossIcon} from "../Icons/CrossIcon";
import createClassName from "../../utils/createClassName";

export const Navbar = ({className, theme, bgMenu, loggedIn, onLoginClick}) => {
  const[isOpen, setIsOpen] = useState(false);
  const navbarClassName = createClassName('navbar', className)

  const handleAuthClick = () => {
    onLoginClick();
  }

  return (
    <div className={`${navbarClassName} ${isOpen && `navbar_theme_${bgMenu}`}`}>
      <Link to={'/'} className='logo header__logo'>
        <Logo classNamePath={`logo_theme_${theme}`}/>
      </Link>
      <Navigation
        classNameList={`nav__list_header header__nav ${isOpen && `navbar_bg-${bgMenu} nav__list_open`}`}
      >

        <Link
          className={`link_type_${theme} header__link`}
          activeClassName={`link_type_${theme}-active`}
          text={ 'Главная' }
          to={'/'}
          exact
        />

        { loggedIn && <Link
            className={`link_type_${theme} header__link`}
            activeClassName={`link_type_${theme}-active`}
            text={'Сохранённые статьи'}
            to={'/saved-news'}
          /> }

        <Button
          className={`button_type_header button_type_header-${theme} header__button`}
          text={ loggedIn ? 'Грета' : 'Авторизоваться' }
          to={'/foo'}
          onClick={handleAuthClick}
        >
          { loggedIn && <EnterIcon
            classNamePath={`link__icon-${theme}`}
          /> }
        </Button>

      </Navigation>
      <Button
        className={`button_type_menu button_type_menu-${theme}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {
          isOpen
            ? <CrossIcon/>
            : <MenuIcon/>
        }
      </Button>
    </div>
  )
}
