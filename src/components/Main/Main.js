import React, { useState } from "react";
import './Main.css';
import { Header } from "../Header/Header";
import { SearchForm } from "../SearchForm/SearchForm";
import { NewsCardList } from "../NewsCardList/NewsCardList";
import { Preloader } from "../Preloader/Preloader";
import { About } from '../About/About';

export const Main = ({ loggedIn, location }) => {
  console.log(location)
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

  return (
    <>
      <section className='wrapper-search-header'>
        <Header
          loggedIn={ loggedIn }
          path = { location.pathname }
        />
        <SearchForm
          onSubmit={ onSubmit }
        />
      </section>

      <main className='page__content'>
        {
          isFoundNews
          ? <Preloader
          error={error}
        />
        : <section className={'wrapper-news'}>
        <NewsCardList />
        </section>
        }
      </main>
      <About/>
      {/*<Footer/>*/}
    </>
  );
}
