import React, { useState } from 'react';
import './App.css';
import { Route, Switch, Redirect } from "react-router-dom";
import { MainPage } from "../../pages/MainPage";
import { SavedNewsPage } from "../../pages/SavedNewsPage";
import { Footer } from "../Footer/Footer";
import cardsFromSearch from '../../data/searchCards.json';
import cardsIsSaved from '../../data/savedCars.json';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [userData, setUserData] = useState({});
  const [searchCards, setSearchCards] = useState(cardsFromSearch);
  const [savedCards, setSavedCards] = useState(cardsIsSaved);

  return (
    <div className="page">
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
    </div>
  );
}

export default App;
