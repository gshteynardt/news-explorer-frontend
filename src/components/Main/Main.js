import './Main.css';
import { Header } from "../Header/Header";
import { SearchForm } from "../SearchForm/SearchForm";
import React from "react";
import { NewsCardList } from "../NewsCardList/NewsCardList";


export const Main = ({ loggedIn }) => {
  return (
    <>
      <section className='wrapper-search-header'>
        <Header loggedIn={ loggedIn }/>
        <SearchForm/>
      </section>

      <main className='page__content'>

        <section className={'wrapper-news'}>
          <h2 className={'title-news'}>Результаты поиска</h2>
        <NewsCardList />
        </section>

       {/*<About/>*/}
      </main>
      {/*<Footer/>*/}
    </>
  );
}
