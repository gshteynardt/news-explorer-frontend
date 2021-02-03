import { useState, useCallback } from "react";

export const useFormWithValidation = ({...keyObj}, callback) => {
  const [values, setValues] = useState(keyObj);
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  let isFormValid = Object.values(isValid).every(elem => elem === true);

  const handleChange = (event) => {
    const { name, value, validationMessage, validity } = event.target;

    setValues({
      ...values,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: validationMessage,
    });

    setIsValid({
      ...isValid,
      [name]: validity.valid,
    });
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    callback({...values});
  }

  return { values, handleChange, errors, isValid, resetForm, isFormValid, handleSubmit };
}
