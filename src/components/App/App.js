import React, { useState, useEffect } from 'react';
import './App.css';
import {Route, Switch, Redirect, useHistory} from "react-router-dom";
import { MainPage } from "../../pages/MainPage";
import { SavedNewsPage } from "../../pages/SavedNewsPage";
import { Footer } from "../Footer/Footer";
import ProtectedRoute from "../../hooks/ProtectedRoute";
import {useUser} from "../../hooks/useUser";
import {useArticles} from "../../hooks/useArticles";
import MainPreloader from "../MainPreloader/MainPreloader";

const App = () => {
  const { loading, user, getUser } = useUser();
  const [popup, setPopup] = useState({
    isOpen: false,
    register: false,
    login: false,
    success: false,
  })

  const isLogin = !!user;
  const history = useHistory();
  const { setState } = useArticles();

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

  const logOut = () => {
    localStorage.clear();
    setState(state => ({
      ...state,
      articles: [],
    }));
    getUser();
    history.push('./');
  };

  useEffect(() => {
    if (isLogin) onClosePopup()
  }, [isLogin])

  if (loading) {
    return (<MainPreloader/>);
  }
  return (
    <div className="page">
      <Switch>

        <Route exact path={'/'}>
          <MainPage
            logOut={logOut}
            popup={popup}
            openPopupLogin={handleOpenPopupLogin}
            openPopupRegister={handleOpenPopupRegister}
            openSuccessPopup={openSuccessPopup}
            onClosePopup={onClosePopup}

          />
        </Route>

        <ProtectedRoute
          path={'/saved-news'}
          openPopupLogin={handleOpenPopupLogin}
          isLogin={isLogin}
        >
          <SavedNewsPage
            logOut={logOut}
          />
        </ProtectedRoute>

        <Route path="/*">
          <Redirect to="/" />
        </Route>

      </Switch>
      <Footer/>
    </div>
  );

}

export default App;
