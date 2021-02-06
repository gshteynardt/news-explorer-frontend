import React from 'react';
import './Preloader.css';
import { NotFound } from "../Icons/NotFound";

export const Preloader = ({error}) => {
  return (
    <section className='circle-wrapper'>
      { error ? <NotFound/> : <i className="circle-preloader"></i>}
      { error && <p className={'circle__info'}>Ничего не найдено</p>}
      <p className={'circle__text'}>{
        error
          ? 'К сожалению по вашему запросу ничего не найдено.'
          : 'Идет поиск новостей...'}</p>
    </section>
  );
}
