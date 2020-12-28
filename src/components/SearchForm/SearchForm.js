import React from "react";
import { Form } from "../Form/Form";
import { Input } from "../Input/Input";
import {Button} from "../Button/Button";

export const SearchForm = ({ className }) => {

  return (
    <div className={'search'}>
      <h2 className={'search__title'}>
        Что творится в мире?
      </h2>
      <p className={'search__text'}>
        Находите самые свежие статьи на любую тему и сохраняйте в своём личном кабинете.
      </p>
      <Form>
        <Input />
        <Button />
      </Form>
    </div>

  );
}
