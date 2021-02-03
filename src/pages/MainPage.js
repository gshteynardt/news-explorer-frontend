import React, {useState} from "react";
import {Main} from "../components/Main/Main";
import {Header} from "../components/Header/Header";
import {SearchForm} from "../components/SearchForm/SearchForm";
import {Navbar} from "../components/Navbar/Navbar";
import {Popup} from "../components/Popup/Popup";
import {LoginForm} from "../components/Forms/LoginForm";
import {Button} from "../components/Button/Button";
import {RegisterForm} from "../components/Forms/RegisterForm";
import {useUser} from "../hooks/useUser";

export const MainPage = ({ cards }) => {
  const { state } = useUser();
  const isLogin = !!state?.user;
  const name = state?.user?.name;

  const [popup, setPopup] = useState({
    isOpen: false,
    register: false,
    login: false,
    success: false,
  })

  /* Открыть popup login **/
const handleOpenPopupLogin = () => setPopup({
      isOpen: true,
      register: false,
      success: false,
      login: true,
    });

  /* Открыть popup регистрации **/
  const handleOpenPopupRegister = () => setPopup({
    isOpen: true,
    register: true,
    login: false,
    success: false,
    });

  /* Открыть окно подтверждения регистрации **/
  const openSuccessPopup = () => setPopup(
    prevState => ({
      ...prevState,
      isOpen: true,
      success: true,
    })
  )

  const onClosePopup = () => setPopup({
    isOpen: false,
    register: false,
    login: false,
    success: false,
  })

  return(
    <>
      <section className='wrapper-search-header'>
        <Header>
          <Navbar
            theme={'white'}
            bgMenu={'black'}
            onLoginClick={handleOpenPopupLogin}
            name={name}
            isLogin={isLogin}
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
              openRegister={handleOpenPopupRegister}
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
                setPopup={setPopup}
                openLogin={handleOpenPopupLogin}
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
            onClick={handleOpenPopupLogin}
            className={'button_type_link'}
          >
            Войти
          </Button>
        </>
      )
      }
      </Popup>

      <Main
        cards={cards}
      />

    </>
  );
}
