import React from "react";
import './Main.css';
import { NewsCardList } from "../NewsCardList/NewsCardList";
import { Preloader } from "../Preloader/Preloader";
import { About } from '../About/About';

export const Main = ({error, isFound, cards}) => {

  return (
    <>
      <main className={'wrapper__content'}>
        {
          isFound
          ? <Preloader
          error={error}
        />
        : <section className={'wrapper-news'}>
        <NewsCardList
          title={'Результаты поиска'}
          button={true}
          initState={3}
          cards={cards}
        />
        </section>
        }
      </main>
      <About/>
    </>
  );
}
