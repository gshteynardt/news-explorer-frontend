import React, { useEffect } from "react";
import './SearchForm.css';
import { Form } from "../Forms/Form";
import { Input } from "../Input/Input";
import {useArticles} from "../../hooks/useArticles";
import { useFormWithValidation } from "../../hooks/useForm";

const keyObj = {
  keyword: '',
};

export const SearchForm = () => {

  const handleSearch = ({...keyword}) => {
    setState(state => ({
      ...state,
      notFound: false,
    }))
    searchArticles(keyword);
  }

  const {
    values,
    handleChange,
    errors,
    resetForm,
    handleSubmit,
    isFormValid,
  } = useFormWithValidation(keyObj, handleSearch);

  useEffect(() => {
    resetForm()
  }, []);

  const { searchArticles, setState } = useArticles();

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
        disabled={!isFormValid}
        classNameBtn={'button_type_search'}
        textSubmitBtn={'Искать'}
      >
        <Input
          type={'text'}
          name={'keyword'}
          isError={errors.keyword}
          value={values.keyword}
          onChange={handleChange}
          required={true}
          className={'input_type_search'}
          placeholder={'Введите тему новости'}
        />
      </Form>
    </div>

  );
}
