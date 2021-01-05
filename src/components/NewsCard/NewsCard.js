import React from 'react';
import './NewsCard.css';
import {Bookmark} from "../Icons/Bookmark";

export const NewsCard = ({ title, path, text, data, source, id}) => {

  return (
    <li
      key={id}
      className={'news__item card'}
    >

      <figure className={'card__wrapper'}>
        <Bookmark
          classNameBtn={'card__bookmark-button'}
          className={'card__bookmark'}
        />
       <img
         className={'card__img'}
         alt={title}
         src={path}
       />
        <figcaption className={'card__caption'}>
          <data className={'card__data'}>{data}</data>
          <h3 className={'card__title'}>{title}</h3>
          <p className={'card__text'}>{text}</p>
          <p className={'card__source'}>{source}</p>
        </figcaption>
      </figure>
    </li>
  );
}
