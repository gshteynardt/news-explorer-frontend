import React from "react";

import {Main} from "../components/Main/Main";
import {Header} from "../components/Header/Header";
import {SearchForm} from "../components/SearchForm/SearchForm";
import {Navbar} from "../components/Navbar/Navbar";
import {Popup} from "../components/Popup/Popup";
import {LoginForm} from "../components/Forms/LoginForm";
import {Button} from "../components/Button/Button";
import {RegisterForm} from "../components/Forms/RegisterForm";

export const MainPage = (props) => {

  const {
    logOut,
    popup,
    onClosePopup,
    openPopupLogin,
    openPopupRegister,
    openSuccessPopup,
  } = props;

  return(
    <>
      <section className='wrapper-search-header'>
        <Header>
          <Navbar
            theme={'white'}
            bgMenu={'black'}
            onLoginClick={openPopupLogin}
            logOut={logOut}
          />
        </Header>
        <SearchForm
          onSubmit={''}
        />
      </section>

      <Popup
        isOpen={popup.isOpen}
        onClose={onClosePopup}
      >

        {
          popup.login && (
          <>
            <h3 className="popup__title">Вход</h3>
            <LoginForm
              isOpen={popup.isOpen}
              openRegister={openPopupRegister}
              onClose={onClosePopup}
            />
          </>
        )
        }

        {
          popup.register &&
          (
            <>
              <h3 className="popup__title">Регистрация</h3>
              <RegisterForm
                isOpen={popup.isOpen}
                openLogin={openPopupLogin}
                onClose={onClosePopup}
                isSuccess={openSuccessPopup}
              />
            </>
          )
        }

      {
        popup.success && (
        <>
          <h3 className="popup__title">
            Пользователь успешно зарегистрирован!
          </h3>
          <Button
            onClick={openPopupLogin}
            className={'button_type_link'}
          >
            Войти
          </Button>
        </>
      )
      }
      </Popup>

      <Main openLogin={openPopupLogin}/>

    </>
  );
}
