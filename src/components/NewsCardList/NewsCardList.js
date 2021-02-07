import React, {useState} from "react";
import './NewsCardList.css';
import createClassName from '../../utils/createClassName';
import {NewsCard} from "../NewsCard/NewsCard";
import {Button} from "../Button/Button";
import {useUser} from "../../hooks/useUser";
import {useArticles} from "../../hooks/useArticles";

export const NewsCardList = React.memo(({initState, button, className , title, articles }) => {
  const { user } = useUser();
  const isLogin = !!user;

  const [numberOfCards, setNumberOfCards] = useState(initState);
  const newsClassName = createClassName('news__items', className);
  const isLastCard = articles.length >= numberOfCards;

  const showMoreCards = () => setNumberOfCards(prevValue => prevValue + 3);

  const carsList = articles.slice(0, numberOfCards)
    .map(article => (<NewsCard
      key={article.title + ' ' + article.link}
      className={'news__item'}
      card={article}
      isLogin={isLogin}
    />)
   );

  return (
    <>
      { title && <h2
        className={'news__title'}>{title}</h2>}

      <ul className={newsClassName}>
        {carsList}
      </ul>

      { (button && isLastCard) && <Button
        text={'Показать еще'}
        className={'button_type_show-card'}
        onClick={showMoreCards}
      /> }
    </>
  );
})
