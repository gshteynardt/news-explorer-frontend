import React from "react";
import './Main.css';
import { NewsCardList } from "../NewsCardList/NewsCardList";
import { Preloader } from "../Preloader/Preloader";
import { About } from '../About/About';
import {useArticles} from "../../hooks/useArticles";

export const Main = () => {
  const { error, loading, articles } = useArticles();

  return (
    <>
      <main className={'wrapper__content'}>
        {
          loading
          && <Preloader
          error={error}
        /> }
        {
          !articles ? null : <section className={'wrapper-news'}>
            <NewsCardList
              title={'Результаты поиска'}
              button={true}
              initState={3}
              cards={articles}
            />
          </section>
        }
      </main>
      <About/>
    </>
  );
}
