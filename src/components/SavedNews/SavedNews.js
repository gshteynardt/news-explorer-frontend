import React from "react";
import { NewsCardList } from "../NewsCardList/NewsCardList";

export const SavedNews = ({ cards }) => {

  return (
    <section className={'saved-news wrapper__content'}>
      <div className={'saved-news__wrapper'}>
        <h2 className={'saved-news__title'}>Сохранённые статьи</h2>
        <p className={'saved-news__statistics'}>Грета, у вас 5 сохранённых статей</p>
        <p className={'saved-news__keywords'}>По ключевым словам: Природа, Тайга и 2-м другим</p>
      </div>
      <NewsCardList
        cards={cards}
      />
    </section>
  );
}
