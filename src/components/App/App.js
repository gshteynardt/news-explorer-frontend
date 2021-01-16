import React, { useState, useEffect } from 'react';
import './App.css';
import { Route, Switch, Redirect } from "react-router-dom";
import { MainPage } from "../../pages/MainPage";
import { SavedNewsPage } from "../../pages/SavedNewsPage";
import { Footer } from "../Footer/Footer";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import currentUser from '../../data/userData.json';
import cardsFromSearch from '../../data/searchCards.json';
import cardsIsSaved from '../../data/savedCars.json';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [userData, setUserData] = useState({});
  const [searchCards, setSearchCards] = useState(cardsFromSearch);
  const [savedCards, setSavedCards] = useState(cardsIsSaved);

  useEffect(() => setUserData(currentUser), []);

  return (
    <div className="page">
      <CurrentUserContext.Provider value={userData}>
        <Switch>

          <Route exact path={'/'}>
            <MainPage
              loggedIn={loggedIn}
              cards={searchCards}
            />
          </Route>

          <Route path={'/saved-news'}>
            <SavedNewsPage
              loggedIn={loggedIn}
              cards={savedCards}
            />
          </Route>

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
