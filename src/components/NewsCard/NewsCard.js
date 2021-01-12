import React from 'react';
import './NewsCard.css';
import { Bookmark } from "../Icons/Bookmark";
import { DeleteIcon } from "../Icons/DeleteIcon";
import { Button } from "../Button/Button";

export const NewsCard = ({card}) => {
const {
  keyword,
  title,
  text,
  date,
  source,
  link,
  owner,
  image,
  saved,
  id,
} = card;
 console.log(card);
  return (
    <li
      key={id}
      className={'news__item card'}
    >

      <figure className={'card__wrapper'}>
          {
            owner
              ? <Button className={'card__button'}>
                <DeleteIcon
                  classNameBtn={'card__icon'}
                  classNamePath={'card__icon_delete'}
                />
              </Button>

              : <Button className={'card__button'}>
                <Bookmark
                  classNameBtn={'card__icon'}
                  classNamePath={'card__icon_bookmark'}
                />
              </Button>
          }

          <p className={'card__popup card__popup_prompt'}>{
            owner
              ? 'Убрать из сохранённых'
              : 'Войдите, чтобы сохранять статьи'
          }</p>

        {
          keyword
          && <p className={'card__popup card__popup_keyword'}>{keyword}</p>
        }
        <a
          className={'card__link'}
          href={'https://medium.com/'}
          target={'_blank'}
        >
       <img
         className={'card__img'}
         alt={title}
         src={image}
       />
        <figcaption className={'card__caption'}>
          <data className={'card__date'}>{date}</data>
          <h3 className={'card__title'}>{title}</h3>
          <p className={'card__text'}>{text}</p>
          <p className={'card__source'}>{source}</p>
        </figcaption>
        </a>
      </figure>
    </li>
  );
}
