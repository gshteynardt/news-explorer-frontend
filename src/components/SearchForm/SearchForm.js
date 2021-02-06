import React from "react";
import './SearchForm.css';
import { Form } from "../Forms/Form";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import {useArticles} from "../../hooks/useArticles";
import { useFormWithValidation } from "../../hooks/useForm";

const keyObj = {
  keyword: '',
};

export const SearchForm = ({onSubmit}) => {

  const handleSearch = ({...keyword}) => {
    searchArticles(keyword);
  }

  const {
    values,
    handleChange,
    errors,
    handleSubmit,
    isFormValid,
  } = useFormWithValidation(keyObj, handleSearch);

  const { searchArticles } = useArticles();

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
        onSubmit={handleSubmit}
      >
        <Input
          type={'text'}
          name={'keyword'}
          isError={errors.keyword}
          onChange={handleChange}
          required={true}
          className={'input_type_search'}
          placeholder={'Введите тему новости'}
          errorMessage={'Неверный формат темы'}
          value={values.keyword}
        />
        <Button
          text={'Искать'}
          className={'button_type_search'}
        />
      </Form>
    </div>

  );
}
