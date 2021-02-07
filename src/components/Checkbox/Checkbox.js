import React, {useState, useRef, useCallback} from "react";
import './Checkbox.css';
import createClassName from "../../utils/createClassName";
import {Bookmark} from "../Icons/Bookmark";
import {useArticles} from "../../hooks/useArticles";

export const Checkbox = ({className, isLogin, card }) => {
  const [isChecked, setIsChecked] = useState(false);
  const labelClassName = createClassName('checkbox', className);
  const checkbox = useRef();
  const { saveArticle, deleteArticle } = useArticles();

  const onClick = useCallback(() => card._id ? deleteArticle(card) : saveArticle(card), [card._id]);

  const handleClick = () => {
    setIsChecked(checkbox.current.checked);
    onClick();
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
        ref={checkbox}
        className={'checkbox__input'}
        type={'checkbox'}
        disabled={isLogin ? '' : 'disabled'}
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
