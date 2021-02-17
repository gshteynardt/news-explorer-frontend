import React, {useEffect, useState} from 'react';
import './Form.css';
import {Form} from './Form';
import {Input} from '../Input/Input';
import {Button} from '../Button/Button';
import {useFormWithValidation} from "../../hooks/useForm";
import * as auth from "../../utils/auth";
import { token } from "../../utils/Token";
import { useUser } from "../../hooks/useUser";
import { useArticles } from "../../hooks/useArticles";

const keyObj = {
  email: '',
  password: '',
};

const errorMessage = 'Неверно указанны данные';

export const LoginForm = ({openRegister, onClose, isOpen}) => {
  const [error, setError] = useState(null);
  const { getUser } = useUser();
  const { articles } = useArticles();

  const handleOnClick = () => openRegister();

  const handleForm = async (userData) => {
    try {
      const data = await auth.login({...userData});
      if (data.token) {
        token.set('news', data.token);
        await getUser(data.token);
        localStorage.setItem('articles', JSON.stringify(articles));
        onClose();
        return data;
      } if (data.message) {
        setError(errorMessage);
        console.log({ message: `${data.message}` });
      }
    } catch (err) {
      setError(errorMessage);
      console.log({ message: 'Что-то пошло не так' }, err);
    }
  }

  const {
    values,
    handleChange,
    errors,
    resetForm,
    handleSubmit,
    isFormValid,
  } = useFormWithValidation(keyObj, handleForm);

  useEffect(() => {
    resetForm()
  }, [isOpen]);

  return (
    <>
      <Form
        classNameBtn={'button_type_submit'}
        textSubmitBtn={'Войти'}
        disabled={!isFormValid}
        errorMessage={error}
        onSubmit={handleSubmit}
      >
        <Input
          className={'input_type_form'}
          title="Email"
          required={true}
          placeholder="Введите почту"
          type="email"
          name={'email'}
          value={values.email}
          onChange={handleChange}
          isError={errors.email}
          errorMessage={'Неверный формат email'}
        />
        <Input
          className={'input_type_form'}
          title="Пароль"
          required={true}
          placeholder="Введите пароль"
          minLength={'6'}
          type="password"
          name={'password'}
          value={values.password}
          onChange={handleChange}
          isError={errors.password}
          errorMessage={'Введите свой пароль'}
        />
      </Form>
      <p className="popup__link">или&nbsp;
        <Button
          type="text"
          onClick={handleOnClick}
          className={'button_type_link'}
        >
          Зарегистрироваться
        </Button>
      </p>
    </>
  );
}
