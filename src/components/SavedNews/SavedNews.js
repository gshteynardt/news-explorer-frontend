import React from "react";
import './SavedNews.css';

import { NewsCardList } from "../NewsCardList/NewsCardList";

export const SavedNews = ({ cards, loggedIn }) => {

  return (
    <section className={'saved-news wrapper__content'}>
      <NewsCardList
        cards={cards}
        loggedIn={loggedIn}
      />
    </section>
  );
}
