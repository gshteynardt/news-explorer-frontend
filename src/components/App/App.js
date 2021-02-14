import React from 'react';
import './App.css';
import {Route, Switch, Redirect, useHistory} from "react-router-dom";
import { MainPage } from "../../pages/MainPage";
import { SavedNewsPage } from "../../pages/SavedNewsPage";
import { Footer } from "../Footer/Footer";
import ProtectedRoute from "../../hooks/ProtectedRoute";
import {useUser} from "../../hooks/useUser";
import {Preloader} from "../Preloader/Preloader";
import {useArticles} from "../../hooks/useArticles";


const App = () => {
  const { loading, user, getUser } = useUser();

  const isLogin = !!user;
  const history = useHistory();
  const { setState } = useArticles();

  const logOut = () => {
    localStorage.clear();
    setState(state => ({
      ...state,
      articles: [],
    }));
    getUser();
    history.push('./');
  };

  if (loading) {
    return (<Preloader/>);
  }
  return (
    <div className="page">
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
    </div>
  );
}

export default App;
