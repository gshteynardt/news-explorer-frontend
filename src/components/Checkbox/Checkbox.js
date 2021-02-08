import React, { useState } from "react";
import './Checkbox.css';
import createClassName from "../../utils/createClassName";
import {Bookmark} from "../Icons/Bookmark";
import {useArticles} from "../../hooks/useArticles";

export const Checkbox = ({className, isLogin, card }) => {

  const labelClassName = createClassName('checkbox', className);
  const [isChecked, setIsChecked] = useState(false);
  const { saveArticle, deleteArticle } = useArticles();
  const handleCard = () => !card._id ? saveArticle(card) : deleteArticle(card);

  const handleClick = () => {
    handleCard();
    setIsChecked(true);
  }

  const tooltip = () => {
    if (!isLogin) {
      return 'Войдите, чтобы сохранять статьи'
    } else if (isLogin && isChecked) {
      return 'Убрать из сохранённых'
    } else if (isLogin) {
      return 'Сохранить'
    }
  }

  return(
    <label className={labelClassName}>
      <input
        checked={isChecked}
        onChange={handleClick}
        className={'checkbox__input'}
        type={'checkbox'}
        disabled={!isLogin}
       />
      <span className={'checkbox__box'}>
        <Bookmark
          isChecked={isChecked}
        />
      </span>
        <div className={'checkbox__tooltip'}>
          {tooltip()}
        </div>
    </label>
  )
}
