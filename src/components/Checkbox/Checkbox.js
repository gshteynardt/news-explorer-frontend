import React from "react";
import './Checkbox.css';
import createClassName from "../../utils/createClassName";
import {Bookmark} from "../Icons/Bookmark";
import {useArticles} from "../../hooks/useArticles";


export const Checkbox = ({className, isLogin, card, openLogin }) => {
  const labelClassName = createClassName('checkbox', className);
  const { saveArticle, deleteArticle } = useArticles();
  const isChecked = !!card._id;
  const handleSave = () => !card._id ? saveArticle(card) : deleteArticle(card);
  const onClick = () => !isLogin ? openLogin : '';

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
    <label className={labelClassName} onClick={onClick}>
      <input
        checked={isChecked}
        onChange={ handleSave }
        className={'checkbox__input'}
        type={'checkbox'}
        disabled={!isLogin}
       />
      <span className={'checkbox__box'}>
        <Bookmark
          isChecked={isChecked}
          isLogin={isLogin}
        />
      </span>
        <div className={'checkbox__tooltip'}>
          {tooltip()}
        </div>
    </label>
  )
}


