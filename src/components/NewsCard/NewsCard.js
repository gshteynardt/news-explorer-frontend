import React, {useContext} from 'react';
import './NewsCard.css';
import {Bookmark} from "../Icons/Bookmark";
import {DeleteIcon} from "../Icons/DeleteIcon";
import {Button} from "../Button/Button";
import {useRouteMatch} from "react-router-dom";
import {Checkbox} from "../Checkbox/Checkbox";
import {CurrentUserContext} from "../../contexts/CurrentUserContext";
import {ExternalLink} from "../Link/ExternalLink";

export const NewsCard = ({card}) => {
  const currentUser = useContext(CurrentUserContext);

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

  const loggedIn = Object.keys(currentUser).length !== 0;
  const {path} = useRouteMatch();

  return (
    <li
      key={id}
      className={'news__item card'}
    >
      <figure className={'card__wrapper'}>
          {
            path !== '/'
            ? <Button className={'card__button'}>
                <DeleteIcon/>
                <p className={'card__popup card__popup_prompt'}>
                  Убрать из сохранённых
                </p>
              </Button>
            : <Checkbox
              className={'card__button'}
              loggedIn={loggedIn}
            />
          }

        {
          keyword
          && (<p className={'card__popup card__popup_keyword'}>{keyword}</p>)
        }

        <ExternalLink
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
        </ExternalLink>
      </figure>
    </li>
  );
}
