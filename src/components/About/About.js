import React from "react";
import './About.css';

export const About = () => {

  return (
    <section className={'about'}>
      <img
        className={'about__avatar'}
        src={'https://images.unsplash.com/photo-1498473649130-dc4bf628a41d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=948&q=80'}
        alt={'фотография автора проекта'}
      />
      <div className={'about__info'}>
        <h2 className={'about__title'}>Об авторе</h2>
        <p className={'about__text'}>Это блок с описанием автора проекта. Здесь следует указать, как вас зовут, чем вы занимаетесь, какими технологиями разработки владеете.
       </p>
        <p className={'about__text'}>Также можно рассказать о процессе обучения в Практикуме, чему вы тут научились, и чем можете помочь потенциальным заказчикам.</p>
      </div>
    </section>
  );
}
