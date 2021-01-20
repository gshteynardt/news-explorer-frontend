import React from 'react';
import './Form.css';
import {Form} from './Form';
import {Input} from '../Input/Input';
import {Button} from '../Button/Button';

export const LoginForm = ({openRegister}) => {

  const handleOnClick = () => openRegister();

  return (
    <>
      <Form
        classNameBtn={'button_type_submit'}
        textSubmitBtn={'Войти'}
      >
        <Input
          className={'input_type_form'}
          title="Email"
          required={true}
          placeholder="Введите почту"
          type="email"
        />
        <Input
          className={'input_type_form'}
          title="Пароль"
          required={true}
          placeholder="Введите пароль"
          type="password"
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
