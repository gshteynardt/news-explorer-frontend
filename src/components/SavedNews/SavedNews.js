import React from "react";
import './SavedNews.css';

import { NewsCardList } from "../NewsCardList/NewsCardList";

export const SavedNews = ({savedArticles}) => {
  return (
    <section className={'saved-news wrapper__content'}>
      <NewsCardList
        articles={savedArticles}
        button={false}
      />
    </section>
  );
}
