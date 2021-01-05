import React from "react";
import './NewsCardList.css';
import createClassName from '../../utils/createClassName';
import data from '../../data/cardText.json';
import { NewsCard } from "../NewsCard/NewsCard";

export const NewsCardList = ({ className }) => {
 const newsClassName = createClassName('news', className);

 const carsList = data.map(card =>
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
    <ul className={newsClassName}>
       {carsList}
    </ul>
  );
}
