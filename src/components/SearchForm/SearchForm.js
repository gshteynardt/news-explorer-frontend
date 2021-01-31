import React from "react";
import './SearchForm.css';
import { Form } from "../Forms/Form";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";

export const SearchForm = ({onSubmit}) => {

  return (
    <div className={'search'}>
      <h2 className={'search__title'}>
        Что творится в мире?
      </h2>
      <p className={'search__text'}>
        Находите самые свежие статьи на любую тему и сохраняйте в своём личном кабинете.
      </p>
      <Form
        className={'form_theme_search'}
        onSubmit={onSubmit}
      >
        <Input
          required={true}
          className={'input_type_search'}
          placeholder={'Введите тему новости'}
        />
        <Button
          text={'Искать'}
          className={'button_type_search'}
        />
      </Form>
    </div>

  );
}
