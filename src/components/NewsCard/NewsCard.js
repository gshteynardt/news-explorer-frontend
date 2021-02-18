import React, { memo } from 'react';
import { useRouteMatch } from "react-router-dom";

import './NewsCard.css';
import { DeleteIcon } from "../Icons/DeleteIcon";
import { Button } from "../Button/Button";
import { Checkbox } from "../Checkbox/Checkbox";
import { ExternalLink } from "../Link/ExternalLink";
import { useArticles } from "../../hooks/useArticles";
import { formaterDate } from "../../utils/processorArticles.js";

const NewsCard = ({ card, isLogin, openLogin }) => {
  const {
    keyword,
    title,
    text,
    date,
    source,
    link,
    image,
    _id,
  } = card;

  const { path } = useRouteMatch();
  const { deleteArticle } = useArticles();

  const onClickBySavedArticle = () => deleteArticle(card);

  return (
    <li
      key={_id}
      className={'news__item card'}
    >
      <figure className={'card__wrapper'}>
          {
            path !== '/'
            ? (<Button
                className={'card__button'}
                onClick={onClickBySavedArticle}
              >
                <DeleteIcon/>
                <p className={'card__popup card__popup_prompt'}>
                  Убрать из сохранённых
                </p>
              </Button>)
            : (<Checkbox
              className={'card__button'}
              isLogin={isLogin}
              openLogin={openLogin}
              card={card}
            />)
          }

        {
          keyword
          && (<p className={'card__popup card__popup_keyword'}>{keyword}</p>)
        }

        <ExternalLink
          className={'card__link'}
          href={link}
          target={'_blank'}
        >
         <img
           className={'card__img'}
           alt={title}
           src={image}
         />
          <figcaption className={'card__caption'}>
            <data className={'card__date'}>{formaterDate('ru', date)}</data>
            <h3 className={'card__title'}>{title}</h3>
            <p className={'card__text'}>{text}</p>
            <p className={'card__source'}>{source}</p>
          </figcaption>
        </ExternalLink>
      </figure>
    </li>
  );
};

export default memo(NewsCard);
