import React from 'react';
import './App.css';
import {Route, Switch, Redirect, useHistory} from "react-router-dom";
import { MainPage } from "../../pages/MainPage";
import { SavedNewsPage } from "../../pages/SavedNewsPage";
import { Footer } from "../Footer/Footer";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import ProtectedRoute from "../../hooks/ProtectedRoute";
import {useUser} from "../../hooks/useUser";
import {Preloader} from "../Preloader/Preloader";


const App = () => {
  const { loading, user } = useUser();

  const isLogin = !!user;
  const history = useHistory();

  const logOut = () => {
    localStorage.clear();
    history.push('./')
  };

  if (loading) {
    return (<Preloader/>);
  }
  return (
    <div className="page">
      <CurrentUserContext.Provider value={''}>
        <Switch>

          <Route exact path={'/'}>
            <MainPage
              logOut={logOut}
            />
          </Route>

          <ProtectedRoute
            path={'/saved-news'}
            isLogin={isLogin}
          >
            <SavedNewsPage
              logOut={logOut}
            />
          </ProtectedRoute>

          <Route path="*">
            <Redirect to="/" />
          </Route>

          </Switch>
          <Footer/>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
