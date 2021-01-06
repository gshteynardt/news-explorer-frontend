import React, { useState } from "react";
import './Main.css';
import { Header } from "../Header/Header";
import { SearchForm } from "../SearchForm/SearchForm";
import { NewsCardList } from "../NewsCardList/NewsCardList";
import {Preloader} from "../Preloader/Preloader";


export const Main = ({ loggedIn }) => {
  const [error, setError] = useState(false);
  const [isFoundNews, serIsFoundNews] = useState(false);

  const onSubmit = () => {
    serIsFoundNews(true);

    setTimeout(
      () => setError(true)
      , 2000);

    setTimeout(() => {
      setError(false);
      serIsFoundNews(false);
    }, 5000)
  }

  return (
    <>
      <section className='wrapper-search-header'>
        <Header loggedIn={ loggedIn }/>
        <SearchForm
          onSubmit={onSubmit}
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
       {/*<About/>*/}
      </main>
      {/*<Footer/>*/}
    </>
  );
}
