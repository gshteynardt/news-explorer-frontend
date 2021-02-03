import React, { useState } from 'react';
import './App.css';
import { Route, Switch, Redirect } from "react-router-dom";
import { MainPage } from "../../pages/MainPage";
import { SavedNewsPage } from "../../pages/SavedNewsPage";
import { Footer } from "../Footer/Footer";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import cardsFromSearch from '../../data/searchCards.json';
import cardsIsSaved from '../../data/savedCars.json';
import ProtectedRoute from "../../hooks/ProtectedRoute";
import {useUser} from "../../hooks/useUser";
import {Preloader} from "../Preloader/Preloader";

const App = () => {
  const { loading, user } = useUser();

  const isLogin = !!user;

  const [searchCards, setSearchCards] = useState(cardsFromSearch);
  const [savedCards, setSavedCards] = useState(cardsIsSaved);

  if (loading) {
    return (<Preloader/>);
  }
  return (
    <div className="page">
      <CurrentUserContext.Provider value={''}>
        <Switch>

          <Route exact path={'/'}>
            <MainPage
              cards={searchCards}
            />
          </Route>

          <ProtectedRoute
            path={'/saved-news'}
            isLogin={isLogin}
          >
            <SavedNewsPage
              cards={savedCards}
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
