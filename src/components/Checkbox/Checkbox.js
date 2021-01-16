import React, {useState, useRef} from "react";
import './Checkbox.css';
import createClassName from "../../utils/createClassName";
import {Bookmark} from "../Icons/Bookmark";

export const Checkbox = ({className, loggedIn}) => {
  const labelClassName = createClassName('checkbox', className);
  const [isChecked, setIsChecked] = useState(false);
  const checkbox = useRef();

  const handleClick = () => {
    setIsChecked(checkbox.current.checked)
  }

  const tooltip = () => {
    if (!loggedIn) {
      return 'Войдите, чтобы сохранять статьи'
    } else if (loggedIn && isChecked) {
      return 'Убрать из сохранённых'
    } else if (loggedIn) {
      return 'Сохранить'
    }
  }

  return(
    <label className={labelClassName}>
      <input
        onClick={handleClick}
        ref={checkbox}
        className={'checkbox__input'}
        type={'checkbox'}
        disabled={loggedIn ? '' : 'disabled'}
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
