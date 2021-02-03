import React, {useState} from "react";
import './NewsCardList.css';
import createClassName from '../../utils/createClassName';
import {NewsCard} from "../NewsCard/NewsCard";
import {Button} from "../Button/Button";
import {useUser} from "../../hooks/useUser";

export const NewsCardList = (props) => {
  const {
    loggedIn,
    className,
    cards,
    title,
    button,
    initState
  } = props;

  const { user } = useUser();
  const isLogin = !!user;

  const [numberOfCards, setNumberOfCards] = useState(initState);
  const newsClassName = createClassName('news__items', className);
  const isLastCard = cards.length >= numberOfCards;

  const showMoreCards = () => setNumberOfCards(prevValue => prevValue + 3);

  const carsList = cards.slice(0, numberOfCards).map(card => {
    return <NewsCard
      key={card.id}
      className={'news__item'}
      card={card}
      isLogin={isLogin}
    />
   });

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
}
