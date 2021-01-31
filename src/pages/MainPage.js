import React, {useState} from "react";
import { Main } from "../components/Main/Main";
import {Header} from "../components/Header/Header";
import {SearchForm} from "../components/SearchForm/SearchForm";
import {Navbar} from "../components/Navbar/Navbar";
import {Popup} from "../components/Popup/Popup";
import {LoginForm} from "../components/Forms/LoginForm";
import {Button} from "../components/Button/Button";
import {RegisterForm} from "../components/Forms/RegisterForm";

export const MainPage = ({loggedIn , cards, path, signOut}) => {
  const [error, setError] = useState(false);
  const [isFoundNews, setIsFoundNews] = useState(false);
  const [popup, setPopup] = useState({
    isOpen: false,
    register: false,
    login: false,
    success: false,
  })

const handleOpenPopupLogin = () => setPopup(prevState => ({
      ...prevState,
      isOpen: true,
      login: true,
    })
)

  const handleOpenPopupRegister = () => setPopup({
    isOpen: true,
    register: true,
    login: false,
    success: false,
    })

  const onClosePopup = () => setPopup({
    isOpen: false,
    register: false,
    login: false,
    success: false,
  })

  const onSubmit = () => {
    setIsFoundNews(true);

    setTimeout(
      () => setError(true)
      , 2000);

    setTimeout(() => {
      setError(false);
      setIsFoundNews(false);
    }, 5000)
  }

  return(
    <>
      <section className='wrapper-search-header'>
        <Header
          loggedIn={loggedIn}
        >
          <Navbar
            theme={'white'}
            bgMenu={'black'}
            onLoginClick={handleOpenPopupLogin}
            signOut={signOut}
            loggedIn={loggedIn}
          />
        </Header>
        <SearchForm
          onSubmit={ onSubmit }
        />
      </section>

      <Popup
        isOpen={popup.isOpen}
        onClose={onClosePopup}
      >

      {popup.login
        ? (
          <>
            <h3 className="popup__title">Вход</h3>
            <LoginForm
              openRegister={handleOpenPopupRegister}
            />
          </>
        )
        : (
            <>
              <h3 className="popup__title">Регистрация</h3>
              <RegisterForm
                openLogin={handleOpenPopupLogin}
              />
            </>
          )}

      { popup.success && (
        <>
          <h3 className="popup__title">
            Пользователь успешно зарегистрирован!
          </h3>
          <Button >
            Войти
          </Button>
        </>
      )}
      </Popup>

      <Main
        loggedIn={loggedIn}
        error={error}
        isFound={isFoundNews}
        cards={cards}
        path={path}
      />

    </>
  );
}
