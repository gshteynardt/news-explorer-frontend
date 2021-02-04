import React, {useEffect, useState} from 'react';
import './Form.css';
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import { Form } from "./Form";
import { useFormWithValidation } from "../../hooks/useForm";
import * as auth from '../../utils/auth.js';

const errorMessage = 'Такой пользователь уже есть';

const keyObj = {
  email: '',
  password: '',
  name: '',
};

export const RegisterForm = (props) => {

  const {
    openLogin,
    onClose,
    isSuccess,
    isOpen,
  } = props;

  const [error, setError] = useState(null);

  const handleForm = async (userData) => {
    try {
      const res = await auth.register({...userData});
      if(res.data) {
        onClose();
        isSuccess();
      }
    } catch (err) {
      console.log({ message: 'Что-то пошло не так' }, err);
      setError(errorMessage);
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

  useEffect(() => resetForm(), [isOpen]);

  return (
    <>
      <Form
        submitText="Зарегистрироваться"
        className="form__submit"
        classNameBtn={'button_type_submit'}
        textSubmitBtn={'Зарегистрироваться'}
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
          minLength={'6'}
          placeholder="Введите пароль"
          type="password"
          name={'password'}
          value={values.password}
          onChange={handleChange}
          isError={errors.password}
          errorMessage={'Пароль должен быть не менее 6 символов'}
        />
        <Input
          className={'input_type_form'}
          title="Имя"
          required={true}
          placeholder="Введите своё имя"
          type="text"
          minLength="2"
          maxLength="30"
          name='name'
          value={values.name}
          onChange={handleChange}
          isError={errors.name}
          errorMessage={'Имя должно быть не менее 2 символов'}
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
