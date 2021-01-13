import React from 'react';
import './NewsCard.css';
import {Bookmark} from "../Icons/Bookmark";
import {DeleteIcon} from "../Icons/DeleteIcon";
import {Button} from "../Button/Button";
import {useRouteMatch} from "react-router-dom";

export const NewsCard = ({card, loggedIn }) => {
  const {
    keyword,
    title,
    text,
    date,
    source,
    link,
    image,
    saved,
    set,
    id,
  } = card;

  const { path } = useRouteMatch();

  const btnMainClassName = saved && loggedIn ? 'card__icon_marked' : 'card__icon_bookmark';

  const prompt = () => {
    if (!loggedIn) {
      return 'Войдите, чтобы сохранять статьи'
    } else if ((loggedIn && saved) || path !== '/') {
      return 'Убрать из сохранённых'
    } else if (!saved) {
      return 'Сохранить'
    }
  }

  return (
    <li
      key={id}
      className={'news__item card'}
    >

      <figure className={'card__wrapper'}>
          {
            path !== '/'
              ? <Button className={'card__button'}>
                <DeleteIcon
                  classNameBtn={'card__icon'}
                  classNamePath={'card__icon_delete'}
                />
              </Button>

              : <Button className={'card__button'} onClick={() => set}>
                <Bookmark
                  classNameBtn={'card__icon'}
                  classNamePath={btnMainClassName}
                />
              </Button>
          }

        <p className={'card__popup card__popup_prompt'}>{
          prompt()
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
