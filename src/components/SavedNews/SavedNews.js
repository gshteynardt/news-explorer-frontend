import React from "react";
import './SavedNews.css';

import { NewsCardList } from "../NewsCardList/NewsCardList";
import {useArticles} from "../../hooks/useArticles";

export const SavedNews = () => {
  const { savedArticles } = useArticles();

  return (
    <section className={'saved-news wrapper__content'}>
      <NewsCardList
        articles={savedArticles}
        button={false}
      />
    </section>
  );
}
