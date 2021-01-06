import React, { useState } from "react";
import './NewsCardList.css';
import createClassName from '../../utils/createClassName';
import data from '../../data/cardText.json';
import { NewsCard } from "../NewsCard/NewsCard";
import {Button} from "../Button/Button";

export const NewsCardList = ({ className }) => {
 const newsClassName = createClassName('news__items', className);

 const [numberOfCards, setNumberOfCards] = useState(3);

 const showMoreCards = () => setNumberOfCards(prevValue => prevValue + 3);

 const carsList = data.slice(0, numberOfCards).map(card =>
   <NewsCard
     key={card.id}
     className={'news__item'}
     id={ card.id }
     title={ card.title }
     text={ card.text }
     source={ card.source }
     data={ card.data }
     path={ card.link }
 />
 );

  return (
    <>
     <h2 className={'news__title'}>Результаты поиска</h2>
     <ul className={newsClassName}>
        {carsList}
     </ul>
     <Button
       text={'Показать еще'}
       className={'button_type_show-card'}
       onClick={showMoreCards}
     />
    </>
  );
}
