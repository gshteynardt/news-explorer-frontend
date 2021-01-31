import React from 'react';
import './Form.css';
import {Input} from "../Input/Input";
import {Button} from "../Button/Button";
import {Form} from "./Form";

export const RegisterForm = ({ openLogin }) => {

  return (
    <>
      <Form
        submitText="Зарегистрироваться"
        className="form__submit"
        classNameBtn={'button_type_submit'}
        textSubmitBtn={'Зарегистрироваться'}
        disabled={'disabled'}
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
        <Input
          className={'input_type_form'}
          title="Имя"
          required={true}
          placeholder="Введите своё имя"
          type="text"
          minLength="2"
          maxLength="30"
        />
      </Form>
      <p className="popup__link">или&nbsp;
        <Button
          type="text"
          onClick={openLogin}
          className={'button_type_link'}
        >
          Войти
        </Button>
      </p>
    </>
  );
}
