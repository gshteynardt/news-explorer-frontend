import React from "react";
import './SavedNews.css';

import { NewsCardList } from "../NewsCardList/NewsCardList";

export const SavedNews = ({ cards, isLogin }) => {

  return (
    <section className={'saved-news wrapper__content'}>
      <NewsCardList
        cards={cards}
        isLogin={isLogin}
        button={false}
      />
    </section>
  );
}
