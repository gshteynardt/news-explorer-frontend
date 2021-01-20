import React, {useState} from "react";
import { Main } from "../components/Main/Main";
import {Header} from "../components/Header/Header";
import {SearchForm} from "../components/SearchForm/SearchForm";
import {Navbar} from "../components/Navbar/Navbar";

export const MainPage = ({loggedIn, cards, path}) => {
  const [error, setError] = useState(false);
  const [isFoundNews, setIsFoundNews] = useState(false);

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
          />
        </Header>
        <SearchForm
          onSubmit={ onSubmit }
        />
      </section>

      <Main
        loggedIn={loggedIn}
        error={error}
        isFound={isFoundNews}
        cards={cards}
        path={path}
      />
      {/*Popup*/}
    </>
  );
}
