import React, {useState} from "react";
import { Main } from "../components/Main/Main";
import {Header} from "../components/Header/Header";
import {SearchForm} from "../components/SearchForm/SearchForm";

export const MainPage = ({loggedIn, cards}) => {
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
          loggedIn={ loggedIn }
          theme={'white'}
        />
        <SearchForm
          onSubmit={ onSubmit }
        />
      </section>

      <Main
        error={error}
        isFound={isFoundNews}
        cards={cards}
      />
      {/*Popup*/}
    </>
  );
}
